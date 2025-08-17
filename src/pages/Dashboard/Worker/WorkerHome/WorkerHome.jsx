import React, { useEffect, useState } from "react";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

const COLORS = ["#4CAF50", "#FBBF24"]; // green for approved, yellow for pending

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

  // Data for PieChart
  const submissionData = [
    { name: "Approved", value: stats.approvedSubmissions.length },
    { name: "Pending", value: stats.pendingSubmissions },
  ];

  // Dummy monthly earnings data (replace with API if available)
  const earningsData = [
    { month: "Jan", earnings: 20 },
    { month: "Feb", earnings: 35 },
    { month: "Mar", earnings: 50 },
    { month: "Apr", earnings: 70 },
    { month: "May", earnings: stats.totalEarnings / 20 }, // show current data
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">
        Welcome, {user?.displayName}
      </h2>

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

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Pie Chart */}
        <div className="bg-base-100 p-4 rounded-xl shadow">
          <h3 className="text-lg font-semibold mb-4 text-center">
            Submissions Overview
          </h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={submissionData}
                cx="50%"
                cy="50%"
                outerRadius={80}
                label
                dataKey="value"
              >
                {submissionData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Bar Chart */}
        <div className="bg-base-100 p-4 rounded-xl shadow">
          <h3 className="text-lg font-semibold mb-4 text-center">
            Earnings Trend
          </h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={earningsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="earnings" fill="#4CAF50" />
            </BarChart>
          </ResponsiveContainer>
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
