import React from "react";
import { Link } from "react-router";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

// Recharts
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  LineChart,
  Line,
  Legend,
} from "recharts";


const BuyerHome = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: stats = {}, isLoading } = useQuery({
    queryKey: ["buyer-stats", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/buyer/stats?email=${user.email}`);
      return res.data;
    },
    enabled: !!user?.email,
  });


  if (isLoading) return <p>Loading...</p>;

  //  Chart Data
  
  const taskPaymentData = [
    { name: "Total Tasks", value: stats.totalTasks || 0 },
    { name: "Total Paid ($)", value: stats.totalPaid || 0 },
  ];

  // Fake monthly trend (replace with API if available)
  const monthlySpending = [
    { month: "Jan", amount: 120 },
    { month: "Feb", amount: 200 },
    { month: "Mar", amount: 180 },
    { month: "Apr", amount: 250 },
    { month: "May", amount: 300 },
    { month: "Jun", amount: 220 },
  ];

  const COLORS = ["#3b82f6", "#facc15"]; // blue, yellow

  return (
    <div className="p-6">
      {/* Stats Cards */}
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-10">
        <div className="card bg-blue-100 shadow-md p-6 rounded-2xl">
          <h2 className="text-xl font-bold">My Tasks</h2>
          <p className="text-3xl">{stats.totalTasks || 0}</p>
        </div>

        <div className="card bg-green-100 shadow-md p-6 rounded-2xl">
          <h2 className="text-xl font-bold">Tasks to Review</h2>
          <p className="text-3xl">{stats.pendingReviews || 0}</p>
          <Link to="/dashboard/review-submissions" className="btn mt-4">
            Review Now
          </Link>
        </div>

        <div className="card bg-yellow-100 shadow-md p-6 rounded-2xl">
          <h2 className="text-xl font-bold">Total Paid</h2>
          <p className="text-3xl">${stats.totalPaid || 0}</p>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* Bar Chart: Tasks vs Paid */}
        <div className="bg-white shadow rounded-xl p-6">
          <h3 className="text-lg font-semibold mb-4">Tasks vs Payments</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={taskPaymentData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#3b82f6" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Line Chart: Monthly Spending */}
        <div className="bg-white shadow rounded-xl p-6">
          <h3 className="text-lg font-semibold mb-4">Monthly Spending Trend</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={monthlySpending}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="amount" stroke="#14b8a6" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default BuyerHome;
