import React from "react";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";


const MySubmissions = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: submissions = [], isLoading } = useQuery({
    queryKey: ["my-submissions", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/submissions/worker?email=${user?.email}`);
      return res.data;
    },
    enabled: !!user?.email,
  });

  if (isLoading) return <p>Loading your submissions...</p>;

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">My Submissions</h2>
      {submissions.length === 0 ? (
        <p>No submissions yet.</p>
      ) : (
        <div className="grid gap-4">
          {submissions.map((sub) => (
            <div
              key={sub._id}
              className="border rounded-lg p-4 shadow bg-white space-y-2"
            >
              <h3 className="text-lg font-semibold">{sub.task_title}</h3>
              <p>
                <span className="font-medium">Details:</span> {sub.submission_details}
              </p>
              <p>
                <span className="font-medium">Coins:</span> {sub.payable_amount}
              </p>
              <p>
                <span className="font-medium">Status:</span>{" "}
                <span
                  className={`badge ${
                    sub.status === "approved"
                      ? "badge-success"
                      : sub.status === "rejected"
                      ? "badge-error"
                      : "badge-warning"
                  }`}
                >
                  {sub.status}
                </span>
              </p>
              <p className="text-sm text-gray-500">
                Submitted: {new Date(sub.submittedAt).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MySubmissions;
