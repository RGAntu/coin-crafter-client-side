import React from "react";
import { NavLink, Outlet } from "react-router";
import {
  FaBell,
  FaPlus,
  FaTasks,
  FaWallet,
  FaHistory,
  FaHome,
  FaEye,
} from "react-icons/fa";
import CoinCrafterLogo from "../pages/shared/CoinCrafterLogo/CoinCrafterLogo";
import useAuth from "../hooks/useAuth";
import useUserRole from "../hooks/useUserRole";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Loading from "../pages/shared/Loading/Loading";

const DashboardLayout = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { role: userRole, isRoleLoading } = useUserRole();

  const { data: userData, isLoading: coinLoading } = useQuery({
    queryKey: ["user-coins", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/coins/${user.email}`);
      return res.data;
    },
    enabled: !!user?.email,
  });

  const availableCoin = userData?.coins ?? 0;

  if (loading || isRoleLoading || coinLoading) return <Loading />;

  return (
    <div className="drawer lg:drawer-open min-h-screen">
      <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Header */}
        <header className="flex items-center justify-between p-4 bg-base-200 border-b border-base-300">
          {/* Mobile Drawer Button */}
          <label htmlFor="dashboard-drawer" className="btn btn-ghost btn-square lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </label>

          <div className="flex items-center gap-2">
            <CoinCrafterLogo />
          </div>

          <div className="flex-1 flex justify-end items-center gap-6 text-sm">
            <div className="flex items-center gap-3">
              <span className="hidden sm:block font-medium">
                Available Coin: {availableCoin}
              </span>
              <img
                src={user?.photoURL || "https://i.ibb.co/zQNgx6H/default-user.png"}
                alt="User"
                className="w-8 h-8 object-cover rounded-full border"
                title={user?.displayName}
              />
              <div className="text-right hidden sm:block">
                <p className="font-bold">{user?.displayName || "Anonymous"}</p>
                <p className="text-xs text-gray-500 capitalize">{userRole}</p>
              </div>
            </div>

            <button className="btn btn-ghost btn-circle tooltip" data-tip="Notification">
              <FaBell className="w-5 h-5" />
            </button>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 p-6 bg-base-100">
          <Outlet />
          <footer className="mt-8 pt-6 text-center text-xs text-gray-400 border-t">
            &copy; {new Date().getFullYear()} CoinCrafter. All rights reserved.
          </footer>
        </main>
      </div>

      {/* Sidebar Drawer */}
      <div className="drawer-side">
        <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
        <aside className="w-64 bg-base-100 border-r border-base-300 p-4">
          <nav className="space-y-3">
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 rounded-md transition ${
                  isActive ? "bg-primary text-white" : "hover:bg-base-200"
                }`
              }
            >
              <FaHome /> Dashboard
            </NavLink>

            {/* Buyer Links */}
            {!isRoleLoading && userRole === "buyer" && (
              <>
                <NavLink to="/dashboard/buyerHome" className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2 rounded-md transition ${
                    isActive ? "bg-primary text-white" : "hover:bg-base-200"
                  }`}>
                  <FaHome /> Home
                </NavLink>
                <NavLink to="/dashboard/add-task" className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2 rounded-md transition ${
                    isActive ? "bg-primary text-white" : "hover:bg-base-200"
                  }`}>
                  <FaPlus /> Add Task
                </NavLink>
                <NavLink to="/dashboard/my-tasks" className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2 rounded-md transition ${
                    isActive ? "bg-primary text-white" : "hover:bg-base-200"
                  }`}>
                  <FaTasks /> My Tasks
                </NavLink>
                <NavLink to="/dashboard/review-submissions" className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2 rounded-md transition ${
                    isActive ? "bg-primary text-white" : "hover:bg-base-200"
                  }`}>
                  <FaEye /> Review Submissions
                </NavLink>
                <NavLink to="/dashboard/purchase-coin" className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2 rounded-md transition ${
                    isActive ? "bg-primary text-white" : "hover:bg-base-200"
                  }`}>
                  <FaWallet /> Purchase Coin
                </NavLink>
                <NavLink to="/dashboard/payment-history" className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2 rounded-md transition ${
                    isActive ? "bg-primary text-white" : "hover:bg-base-200"
                  }`}>
                  <FaHistory /> Payment History
                </NavLink>
              </>
            )}

            {/* Worker Links */}
            {!isRoleLoading && userRole === "worker" && (
              <>
                <NavLink to="/dashboard/workerHome" className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2 rounded-md transition ${
                    isActive ? "bg-primary text-white" : "hover:bg-base-200"
                  }`}>
                  <FaHome /> Home
                </NavLink>
                <NavLink to="/dashboard/approved-submissions" className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2 rounded-md transition ${
                    isActive ? "bg-primary text-white" : "hover:bg-base-200"
                  }`}>
                  <FaEye /> Approved Submissions
                </NavLink>
                <NavLink to="/dashboard/task-list" className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2 rounded-md transition ${
                    isActive ? "bg-primary text-white" : "hover:bg-base-200"
                  }`}>
                  <FaTasks /> Task List
                </NavLink>
                <NavLink to="/dashboard/my-submissions" className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2 rounded-md transition ${
                    isActive ? "bg-primary text-white" : "hover:bg-base-200"
                  }`}>
                  <FaHistory /> My Submissions
                </NavLink>
                <NavLink to="/dashboard/withdraw" className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2 rounded-md transition ${
                    isActive ? "bg-primary text-white" : "hover:bg-base-200"
                  }`}>
                  <FaWallet /> Withdraw
                </NavLink>
              </>
            )}

            {/* Admin Links */}
            {!isRoleLoading && userRole === "admin" && (
              <>
                <NavLink to="/dashboard/admin-home" className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2 rounded-md transition ${
                    isActive ? "bg-primary text-white" : "hover:bg-base-200"
                  }`}>
                  <FaHome /> Admin Home
                </NavLink>
                <NavLink to="/dashboard/manage-withdraws" className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2 rounded-md transition ${
                    isActive ? "bg-primary text-white" : "hover:bg-base-200"
                  }`}>
                  <FaWallet /> Withdraw Requests
                </NavLink>
                <NavLink to="/dashboard/manage-users" className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2 rounded-md transition ${
                    isActive ? "bg-primary text-white" : "hover:bg-base-200"
                  }`}>
                  <FaTasks /> Manage Users
                </NavLink>
                <NavLink to="/dashboard/manage-tasks" className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2 rounded-md transition ${
                    isActive ? "bg-primary text-white" : "hover:bg-base-200"
                  }`}>
                  <FaTasks /> Manage Tasks
                </NavLink>
              </>
            )}
          </nav>
        </aside>
      </div>
    </div>
  );
};

export default DashboardLayout;
