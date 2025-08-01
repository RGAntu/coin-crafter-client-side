import React, { useState } from "react";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const MySubmissions = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const [currentPage, setCurrentPage] = useState(1);
  const limit = 5;

  const { data, isLoading } = useQuery({
    queryKey: ["my-submissions", user?.email, currentPage],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/submissions/worker?email=${user?.email}&page=${currentPage}&limit=${limit}`
      );
      return res.data;
    },
    enabled: !!user?.email,
  });
  console.log(data);

  if (isLoading) {
    return <div className="text-center mt-10">Loading submissions...</div>;
  }

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">My Submissions</h2>

      {data?.submissions?.length > 0 ? (
        <>
          <div className="space-y-4">
            {data.submissions.map((sub) => (
              <div
                key={sub._id}
                className="border rounded-lg p-4 shadow-sm bg-blue-50"
              >
                <h3 className="font-semibold text-lg">{sub.task_title}</h3>
                <p className="text-sm text-gray-600">
                  Submitted At: {new Date(sub.submittedAt).toLocaleString()}
                </p>
                <p>
                  Status: <span className="font-medium">{sub.status}</span>
                </p>
                <p>Submission Details : {sub.submission_details}</p>
                {sub?.image && (
                  <img
                    src={sub.image}
                    alt="Submission"
                    className="w-40 mt-2 border rounded"
                  />
                )}
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-center items-center gap-4 mt-6">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="btn btn-sm bg-secondary text-white"
            >
              Previous
            </button>

            <span className="text-sm">
              Page {data.currentPage} of {data.totalPages}
            </span>

            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, data.totalPages))
              }
              disabled={currentPage === data.totalPages}
              className="btn btn-sm bg-primary text-white"
            >
              Next
            </button>
          </div>
        </>
      ) : (
        <div className="text-center mt-10 text-gray-500">
          You have no submissions yet.
        </div>
      )}
    </div>
  );
};

export default MySubmissions;
