import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";


const WithdrawalForm = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [coinBalance, setCoinBalance] = useState(0);
  const [withdrawCoin, setWithdrawCoin] = useState(0);
  const [paymentSystem, setPaymentSystem] = useState("Bkash");
  const [accountNumber, setAccountNumber] = useState("");

  const withdrawalAmount = (withdrawCoin / 20).toFixed(2);

  useEffect(() => {
    if (user?.email) {
      axiosSecure
        .get(`/submissions/coin-balance?email=${user.email}`)
        .then((res) => setCoinBalance(res.data.totalCoins || 0));
    }
  }, [user, axiosSecure]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (withdrawCoin > coinBalance || withdrawCoin < 200) return;

    const withdrawalData = {
      worker_email: user.email,
      worker_name: user.displayName,
      withdrawal_coin: withdrawCoin,
      withdrawal_amount: parseFloat(withdrawalAmount),
      payment_system: paymentSystem,
      account_number: accountNumber,
      withdraw_date: new Date(),
      status: "pending",
    };

    try {
      await axiosSecure.post("/withdrawals", withdrawalData);
      Swal.fire("Request Submitted", "Your withdrawal is pending.", "success");
    } catch (err) {
      console.error(err);
      Swal.fire("Error", "Something went wrong.", "error");
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto border rounded-xl shadow-lg">
      <h2 className="text-xl font-bold mb-4">Withdraw Coins</h2>

      <p className="mb-2">Current Coin Balance: {coinBalance}</p>
      <p className="mb-4">
        Dollar Equivalent: ${" "}
        {(coinBalance / 20).toFixed(2)}
      </p>

      {coinBalance < 200 ? (
        <p className="text-red-500">Insufficient coin</p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1">Coin to Withdraw</label>
            <input
              type="number"
              className="input input-bordered w-full"
              value={withdrawCoin}
              onChange={(e) =>
                setWithdrawCoin(
                  Math.min(parseInt(e.target.value || 0), coinBalance)
                )
              }
              min="200"
              max={coinBalance}
              required
            />
          </div>

          <div>
            <label className="block mb-1">Withdrawal Amount ($)</label>
            <input
              type="number"
              className="input input-bordered w-full"
              value={withdrawalAmount}
              disabled
            />
          </div>

          <div>
            <label className="block mb-1">Payment System</label>
            <select
              className="select select-bordered w-full"
              value={paymentSystem}
              onChange={(e) => setPaymentSystem(e.target.value)}
            >
              <option value="Bkash">Bkash</option>
              <option value="Rocket">Rocket</option>
              <option value="Nagad">Nagad</option>
              <option value="Upay">Upay</option>
            </select>
          </div>

          <div>
            <label className="block mb-1">Account Number</label>
            <input
              type="text"
              className="input input-bordered w-full"
              value={accountNumber}
              onChange={(e) => setAccountNumber(e.target.value)}
              required
            />
          </div>

          <button className="btn btn-primary w-full">Request Withdrawal</button>
        </form>
      )}
    </div>
  );
};

export default WithdrawalForm;