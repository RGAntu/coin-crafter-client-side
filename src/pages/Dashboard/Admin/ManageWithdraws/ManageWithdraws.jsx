import React from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Loading from "../../../shared/Loading/Loading";


const ManageWithdraws = () => {
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();

  // Fetch pending withdrawals
  const { data: withdrawals = [], isLoading } = useQuery({
    queryKey: ["pending-withdrawals"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin/withdrawals");
      return res.data;
    },
  });

  // Approve withdrawal
  const mutation = useMutation({
    mutationFn: async (id) => {
      const res = await axiosSecure.patch(`/admin/withdrawals/${id}/approve`);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["pending-withdrawals"]);
      Swal.fire("Success", "Withdrawal approved and coins deducted.", "success");
    },
    onError: () => {
      Swal.fire("Error", "Failed to approve withdrawal.", "error");
    },
  });

  if (isLoading) return <Loading />;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-6">Manage Withdrawal Requests</h2>
      {withdrawals.length === 0 ? (
        <p className="text-gray-600">No pending withdrawal requests.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            <thead>
              <tr>
                <th>User</th>
                <th>Email</th>
                <th>Amount</th>
                <th>Requested At</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
          <tbody>
  {withdrawals.map((w) => (
    <tr key={w._id}>
      <td>{w.worker_name || "N/A"}</td>
      <td>{w.worker_email}</td>
      <td>{w.withdrawal_coin} coins</td>
      <td>{new Date(w.requestedAt).toLocaleString()}</td>
      <td>
        <span className="badge badge-warning">Pending</span>
      </td>
      <td>
        <button
          onClick={() => mutation.mutate(w._id)}
          className="btn btn-sm btn-success"
          disabled={mutation.isPending}
        >
          {mutation.isPending ? "Approving..." : "Approve"}
        </button>
      </td>
    </tr>
  ))}
</tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ManageWithdraws;
