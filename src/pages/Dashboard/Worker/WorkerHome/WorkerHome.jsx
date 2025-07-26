import React, { useEffect, useState } from "react";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";


const WorkerHome = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const [stats, setStats] = useState({
    totalSubmissions: 0,
    pendingSubmissions: 0,
    totalEarnings: 0,
    approvedSubmissions: [],
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await axiosSecure.get(`/submissions/worker/${user.email}`);
        setStats(res.data);
      } catch (error) {
        console.error("Error fetching worker stats:", error);
      }
    };

    if (user?.email) {
      fetchStats();
    }
  }, [user?.email, axiosSecure]);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Welcome, {user?.displayName}</h2>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <div className="p-4 bg-primary text-white rounded-xl shadow">
          <h3 className="text-lg font-semibold">Total Submissions</h3>
          <p className="text-2xl">{stats.totalSubmissions}</p>
        </div>

        <div className="p-4 bg-warning text-white rounded-xl shadow">
          <h3 className="text-lg font-semibold">Pending Submissions</h3>
          <p className="text-2xl">{stats.pendingSubmissions}</p>
        </div>

        <div className="p-4 bg-success text-white rounded-xl shadow">
          <h3 className="text-lg font-semibold">Total Earning ($)</h3>
          <p className="text-2xl">{(stats.totalEarnings / 20).toFixed(2)}</p>
        </div>
      </div>

      {/* Approved Submissions Table */}
      <div className="overflow-x-auto">
        <h3 className="text-xl font-semibold mb-2">Approved Submissions</h3>
        <table className="table table-zebra w-full text-sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Task Title</th>
              <th>Payable Amount</th>
              <th>Buyer Name</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {stats.approvedSubmissions.map((submission, index) => (
              <tr key={submission._id}>
                <td>{index + 1}</td>
                <td>{submission.task_title}</td>
                <td>${submission.payable_amount}</td>
                <td>{submission.Buyer_name}</td>
                <td>
                  <span className="badge badge-success text-white capitalize">
                    {submission.status}
                  </span>
                </td>
              </tr>
            ))}
            {stats.approvedSubmissions.length === 0 && (
              <tr>
                <td colSpan="5" className="text-center text-gray-400">
                  No approved submissions yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WorkerHome;
