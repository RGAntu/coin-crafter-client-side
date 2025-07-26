import React from "react";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";


const ApprovedSubmissions = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: submissions = [], isLoading } = useQuery({
    queryKey: ["approved-submissions", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/submissions/approved?email=${user.email}`);
      return res.data;
    },
  });

  if (isLoading) {
    return (
      <div className="text-center mt-10">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  return (
    <div className="px-4 md:px-8 py-6">
      <h2 className="text-2xl font-semibold mb-4 text-center">Approved Submissions</h2>

      {submissions.length === 0 ? (
        <p className="text-center text-gray-500">No approved submissions yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {submissions.map((s) => (
            <div
              key={s._id}
              className="border p-4 rounded-xl shadow bg-white hover:shadow-md transition duration-300"
            >
              <h3 className="text-lg font-bold mb-1">{s.task_title}</h3>
              <p className="text-sm text-gray-600">
                Submitted:{" "}
                {s.submittedAt
                  ? new Date(s.submittedAt).toLocaleDateString()
                  : "Date not available"}
              </p>

              {s.submission_link ? (
                <a
                  href={s.submission_link}
                  className="text-blue-600 underline mt-2 inline-block"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Submission
                </a>
              ) : (
                <p className="text-red-500 text-sm mt-2">No submission link</p>
              )}

              <p className="text-green-600 mt-2 font-medium">
                Coins Earned: {s.payable_amount}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ApprovedSubmissions;
