import React from "react";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Loading from "../../../shared/Loading/Loading";

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


const AdminHome = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: stats = {}, isLoading } = useQuery({
    queryKey: ["admin-stats", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin/stats");
      return res.data;
    },
    enabled: !!user?.email,
  });

  if (isLoading) return <Loading />;

  //  Chart Data
  const userDistribution = [
    { name: "Buyers", value: stats.totalBuyers || 0 },
    { name: "Workers", value: stats.totalWorkers || 0 },
  ];

  const coinPaymentData = [
    { name: "Coins", value: stats.totalCoins || 0 },
    { name: "Payments ($)", value: stats.totalPayments || 0 },
  ];

  // Fake monthly trend (you can replace with real API later)
  const monthlyPayments = [
    { month: "Jan", amount: 200 },
    { month: "Feb", amount: 350 },
    { month: "Mar", amount: 500 },
    { month: "Apr", amount: 800 },
    { month: "May", amount: 600 },
    { month: "Jun", amount: 900 },
  ];

  const COLORS = ["#3b82f6", "#14b8a6"]; // blue, teal

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-6">Admin Dashboard Overview</h2>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <div className="bg-blue-100 rounded-xl shadow p-5">
          <h3 className="text-lg font-semibold text-blue-700">Total Buyers</h3>
          <p className="text-3xl font-bold text-blue-900">{stats.totalBuyers}</p>
        </div>

        <div className="bg-green-100 rounded-xl shadow p-5">
          <h3 className="text-lg font-semibold text-green-700">Total Workers</h3>
          <p className="text-3xl font-bold text-green-900">{stats.totalWorkers}</p>
        </div>

        <div className="bg-yellow-100 rounded-xl shadow p-5">
          <h3 className="text-lg font-semibold text-yellow-700">Total Coins</h3>
          <p className="text-3xl font-bold text-yellow-900">{stats.totalCoins}</p>
        </div>

        <div className="bg-purple-100 rounded-xl shadow p-5">
          <h3 className="text-lg font-semibold text-purple-700">
            Total Payments ($)
          </h3>
          <p className="text-3xl font-bold text-purple-900">
            ${stats.totalPayments}
          </p>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Pie Chart: Buyers vs Workers */}
        <div className="bg-white shadow rounded-xl p-6">
          <h3 className="text-lg font-semibold mb-4">User Distribution</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={userDistribution}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={90}
                fill="#8884d8"
                label
              >
                {userDistribution.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Bar Chart: Coins vs Payments */}
        <div className="bg-white shadow rounded-xl p-6">
          <h3 className="text-lg font-semibold mb-4">Coins vs Payments</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={coinPaymentData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#3b82f6" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Line Chart: Monthly Payments Trend */}
        <div className="bg-white shadow rounded-xl p-6">
          <h3 className="text-lg font-semibold mb-4">Monthly Payments Trend</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={monthlyPayments}>
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

export default AdminHome;
