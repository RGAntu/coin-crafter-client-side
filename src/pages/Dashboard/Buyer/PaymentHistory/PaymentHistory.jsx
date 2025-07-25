import React from "react";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: payments = [], isLoading } = useQuery({
    queryKey: ["payment-history", user?.email],
    enabled: !!user?.email, // Only fetch if email exists
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/payments/history?email=${user.email}`
      );
      return res.data;
    },
  });

  if (isLoading)
    return <span className="loading loading-bars loading-lg mx-auto"></span>;

  return (
    <div className="p-5">
      <h2 className="text-2xl font-semibold mb-4">Payment History</h2>
      {payments.length === 0 ? (
        <p className="text-center text-gray-500">No payment history found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full text-sm">
            <thead className="bg-base-200 text-base font-medium">
              <tr>
                <th>#</th>
                <th>Transaction ID</th>
                <th>Coins</th>
                <th>Amount ($)</th>
                <th>Status</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((p, index) => (
                <tr key={p._id}>
                  <td>{index + 1}</td>
                  <td className="font-mono text-xs">{p.transactionId}</td>
                  <td>{p.coins}</td>
                  <td>${p.amount}</td>
                  <td>
                    <span className="badge badge-success">Paid</span>
                  </td>
                  <td>{new Date(p.date).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default PaymentHistory;
