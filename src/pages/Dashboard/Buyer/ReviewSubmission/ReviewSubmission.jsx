import React from "react";
import { useQuery } from "@tanstack/react-query";

import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useAuth from "../../../../hooks/useAuth";

const ReviewSubmission = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  //   const [selectedSubmission, setSelectedSubmission] = useState(null);

  const { data: reviews = [], refetch } = useQuery({
  queryKey: ["review-submissions", user?.email],
  queryFn: async () => {
    const res = await axiosSecure.get(
      `/buyer/pending-submissions?email=${user.email}`
    );
    return res.data;
  },
  enabled: !!user?.email,
});

  const handleStatusChange = async (id, status) => {
    const res = await axiosSecure.patch(`/submissions/update-status/${id}`, {
      status,
    });
    if (res.data.modifiedCount > 0) {
      Swal.fire(`Submission ${status} successfully`, "", "success");
      refetch();
    }
  };
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Review Task Submissions</h2>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Worker</th>
              <th>Task Title</th>
              <th>Payable Amount</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {reviews.map((item) => (
              <tr key={item._id}>
                <td>{item.worker_name}</td>
                <td>{item.task_title}</td>
                <td>${item.payable_amount}</td>
                <td>
                  <button
                    onClick={() => handleStatusChange(item._id, "approved")}
                    className="btn btn-success btn-sm mr-2"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => handleStatusChange(item._id, "rejected")}
                    className="btn btn-error btn-sm"
                  >
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReviewSubmission;
