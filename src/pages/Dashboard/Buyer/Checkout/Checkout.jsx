import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useAuth from "../../../../hooks/useAuth";

const Checkout = () => {
  const { coins, price } = useParams();
  const { user } = useAuth();
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();

  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    if (price > 0) {
      axiosSecure
        .post("/create-payment-intent", { amount: parseFloat(price) })
        .then((res) => setClientSecret(res.data.clientSecret));
    }
  }, [price, axiosSecure]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    const card = elements.getElement(CardElement);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.error("[Payment Error]", error);
      Swal.fire("Payment failed", error.message, "error");
      return;
    }

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: paymentMethod.id,
        receipt_email: user.email,
      });

    if (confirmError) {
      console.error("[Confirm Error]", confirmError);
      Swal.fire("Payment failed", confirmError.message, "error");
    } else if (paymentIntent.status === "succeeded") {
      const paymentData = {
        email: user.email,
        amount: parseFloat(price),
        transactionId: paymentIntent.id,
        date: new Date(),
        coins: parseInt(coins),
      };

      axiosSecure.post("/payments", paymentData).then(() => {
        Swal.fire("Success!", "Payment successful and coins added", "success");
      });
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 border rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">
        Checkout for Coin Package: {coins} coins
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <CardElement className="border p-3 rounded" />
        <button
          type="submit"
          className="btn btn-primary w-full"
          disabled={!stripe || !clientSecret}
        >
          Pay ${price}
        </button>
      </form>
    </div>
  );
};

export default Checkout;
