import React from "react";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Loading from "../../../shared/Loading/Loading";


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

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-6">Admin Dashboard Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
          <h3 className="text-lg font-semibold text-purple-700">Total Payments ($)</h3>
          <p className="text-3xl font-bold text-purple-900">${stats.totalPayments}</p>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
