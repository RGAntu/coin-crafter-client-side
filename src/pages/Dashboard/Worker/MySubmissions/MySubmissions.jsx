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
  if (isLoading) return <p>Loading your submissions...</p>;

  const totalPages = data?.totalPages || 1;

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const pageNumbers = [];
  const maxButtons = 5;
  const startPage = Math.max(1, currentPage - 2);
  const endPage = Math.min(totalPages, startPage + maxButtons - 1);

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">My Submissions</h2>

      {data.length === 0 ? (
        <p>No submissions yet.</p>
      ) : (
        <>
          <div className="grid gap-4 mb-6">
            {data.map((sub) => (
              <div
                key={sub._id}
                className="border rounded-lg p-4 shadow bg-white space-y-2"
              >
                <h3 className="text-lg font-semibold">{sub.task_title}</h3>
                <p>
                  <span className="font-medium">Details:</span>{" "}
                  {sub.submission_details}
                </p>
                <p>
                  <span className="font-medium">Coins:</span>{" "}
                  {sub.payable_amount}
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

          {/* Pagination */}
          <div className="flex justify-center items-center gap-2">
            <button
              className="btn btn-sm"
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
            >
              «
            </button>
            {pageNumbers.map((page) => (
              <button
                key={page}
                onClick={() => goToPage(page)}
                className={`btn btn-sm ${
                  page === currentPage ? "btn-primary" : "btn-outline"
                }`}
              >
                {page}
              </button>
            ))}
            <button
              className="btn btn-sm"
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              »
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default MySubmissions;
