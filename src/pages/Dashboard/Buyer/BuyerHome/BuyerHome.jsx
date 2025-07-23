// BuyerHome.jsx (Frontend)
import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

import useAuth from "../../../../hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { Dialog } from "@headlessui/react";

const BuyerHome = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();
  const [selectedSubmission, setSelectedSubmission] = useState(null);

  // Stats
  const { data: stats = {} } = useQuery({
    queryKey: ["buyer-stats", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/buyer/stats?email=${user?.email}`);
      return res.data;
    },
    enabled: !!user?.email,
  });

  // Pending Submissions
  const { data: submissions = [] } = useQuery({
    queryKey: ["buyer-submissions", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/buyer/pending-submissions?email=${user?.email}`);
      return res.data;
    },
    enabled: !!user?.email,
  });

  const approveMutation = useMutation({
    mutationFn: async (id) => {
      return await axiosSecure.patch(`/submissions/approve/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["buyer-submissions"]);
      Swal.fire("Approved", "Submission approved successfully", "success");
    },
  });

  const rejectMutation = useMutation({
    mutationFn: async (id) => {
      return await axiosSecure.patch(`/submissions/reject/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["buyer-submissions"]);
      Swal.fire("Rejected", "Submission rejected", "info");
    },
  });

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="p-6 bg-base-200 rounded shadow">Total Tasks: {stats.totalTasks || 0}</div>
        <div className="p-6 bg-base-200 rounded shadow">Pending Workers: {stats.pendingWorkers || 0}</div>
        <div className="p-6 bg-base-200 rounded shadow">Total Payment: ${stats.totalPaid || 0}</div>
      </div>

      {/* Pending Submissions */}
      <h3 className="text-xl font-semibold mb-2">Submissions to Review</h3>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Worker</th>
              <th>Task</th>
              <th>Amount</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {submissions.map((sub) => (
              <tr key={sub._id}>
                <td>{sub.worker_name}</td>
                <td>{sub.task_title}</td>
                <td>${sub.payable_amount}</td>
                <td className="flex gap-2">
                  <button
                    onClick={() => setSelectedSubmission(sub)}
                    className="btn btn-xs btn-info"
                  >
                    View
                  </button>
                  <button
                    onClick={() => approveMutation.mutate(sub._id)}
                    className="btn btn-xs btn-success"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => rejectMutation.mutate(sub._id)}
                    className="btn btn-xs btn-error"
                  >
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Submission Modal */}
      <Dialog open={!!selectedSubmission} onClose={() => setSelectedSubmission(null)}>
        <Dialog.Panel className="max-w-md mx-auto bg-white p-6 rounded shadow">
          <Dialog.Title className="text-lg font-bold">Submission Detail</Dialog.Title>
          <Dialog.Description className="mt-2 text-sm text-gray-600">
            {selectedSubmission?.details || "No details provided."}
          </Dialog.Description>
          <button className="btn mt-4" onClick={() => setSelectedSubmission(null)}>Close</button>
        </Dialog.Panel>
      </Dialog>
    </div>
  );
};

export default BuyerHome;
