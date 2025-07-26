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

const DashboardLayout = () => {
  const { user, loading } = useAuth();
  const { role: userRole, isRoleLoading } = useUserRole();

  // You may fetch this from DB in real app
  const availableCoin = 120;

  if (loading || isRoleLoading)
    return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between p-4 bg-base-200 border-b border-base-300">
        <div className="flex items-center gap-2">
          <CoinCrafterLogo />
        </div>

        <div className="flex-1 flex justify-end items-center gap-6 text-sm">
          <div className="flex items-center gap-3">
            <span className="hidden sm:block font-medium">
              Available Coin: {availableCoin}
            </span>

            <img
              src={
                user?.photoURL || "https://i.ibb.co/zQNgx6H/default-user.png"
              }
              alt="User"
              className="w-8 h-8 object-cover rounded-full border"
              title={user?.displayName}
            />

            <div className="text-right hidden sm:block">
              <p className="font-bold">{user?.displayName || "Anonymous"}</p>
              <p className="text-xs text-gray-500 capitalize">{userRole}</p>
            </div>
          </div>

          <button
            className="btn btn-ghost btn-circle tooltip"
            data-tip="Notification"
          >
            <FaBell className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Main Layout */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 bg-base-100 border-r border-base-300 p-4 hidden md:block">
          <nav className="space-y-3">
            {/* Universal Dashboard link */}
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

            {/* Buyer-specific links  */}
            {!isRoleLoading && userRole === "buyer" && (
              <>
                <NavLink
                  to="/dashboard/buyerHome"
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-3 py-2 rounded-md transition ${
                      isActive ? "bg-primary text-white" : "hover:bg-base-200"
                    }`
                  }
                >
                  <FaHome /> Home
                </NavLink>
                <NavLink
                  to="/dashboard/add-task"
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-3 py-2 rounded-md transition ${
                      isActive ? "bg-primary text-white" : "hover:bg-base-200"
                    }`
                  }
                >
                  <FaPlus /> Add Task
                </NavLink>
                <NavLink
                  to="/dashboard/my-tasks"
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-3 py-2 rounded-md transition ${
                      isActive ? "bg-primary text-white" : "hover:bg-base-200"
                    }`
                  }
                >
                  <FaTasks /> My Tasks
                </NavLink>
                <NavLink
                  to="/dashboard/review-submissions"
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-3 py-2 rounded-md transition ${
                      isActive ? "bg-primary text-white" : "hover:bg-base-200"
                    }`
                  }
                >
                  <FaEye /> Review Submissions
                </NavLink>
                <NavLink
                  to="/dashboard/purchase-coin"
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-3 py-2 rounded-md transition ${
                      isActive ? "bg-primary text-white" : "hover:bg-base-200"
                    }`
                  }
                >
                  <FaWallet /> Purchase Coin
                </NavLink>
                <NavLink
                  to="/dashboard/payment-history"
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-3 py-2 rounded-md transition ${
                      isActive ? "bg-primary text-white" : "hover:bg-base-200"
                    }`
                  }
                >
                  <FaHistory /> Payment History
                </NavLink>
              </>
            )}

            {/* Worker-specific links  */}
            {!isRoleLoading && userRole === "worker" && (
              <>
                <NavLink
                  to="/dashboard/workerHome"
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-3 py-2 rounded-md transition ${
                      isActive ? "bg-primary text-white" : "hover:bg-base-200"
                    }`
                  }
                >
                  <FaHome /> Home
                </NavLink>
                <NavLink
                  to="/dashboard/approved-submissions"
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-3 py-2 rounded-md transition ${
                      isActive ? "bg-primary text-white" : "hover:bg-base-200"
                    }`
                  }
                >
                  <FaEye /> Approved Submissions
                </NavLink>
                <NavLink
                  to="/dashboard/task-list"
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-3 py-2 rounded-md transition ${
                      isActive ? "bg-primary text-white" : "hover:bg-base-200"
                    }`
                  }
                >
                  <FaTasks /> Task List
                </NavLink>
                <NavLink
                  to="/dashboard/my-submissions"
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-3 py-2 rounded-md transition ${
                      isActive ? "bg-primary text-white" : "hover:bg-base-200"
                    }`
                  }
                >
                  <FaHistory /> My Submissions
                </NavLink>
                <NavLink
                  to="/dashboard/withdraw"
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-3 py-2 rounded-md transition ${
                      isActive ? "bg-primary text-white" : "hover:bg-base-200"
                    }`
                  }
                >
                  <FaWallet /> Withdraw
                </NavLink>
              </>
            )}

            {/*  Admin-specific links - FIXED LOCATION */}
            {!isRoleLoading && userRole === "admin" && (
              <>
                <NavLink
                  to="/dashboard/admin-home"
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-3 py-2 rounded-md transition ${
                      isActive ? "bg-primary text-white" : "hover:bg-base-200"
                    }`
                  }
                >
                  <FaHome /> Admin Home
                </NavLink>
                <NavLink
                  to="/dashboard/manage-withdraws"
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-3 py-2 rounded-md transition ${
                      isActive ? "bg-primary text-white" : "hover:bg-base-200"
                    }`
                  }
                >
                  <FaWallet /> Withdraw Requests
                </NavLink>
                <NavLink
                  to="/dashboard/manage-users"
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-3 py-2 rounded-md transition ${
                      isActive ? "bg-primary text-white" : "hover:bg-base-200"
                    }`
                  }
                >
                  <FaTasks /> Manage Users
                </NavLink>
                <NavLink
                  to="/dashboard/manage-tasks"
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-3 py-2 rounded-md transition ${
                      isActive ? "bg-primary text-white" : "hover:bg-base-200"
                    }`
                  }
                >
                  <FaTasks /> Manage Tasks
                </NavLink>
              </>
            )}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 bg-base-100">
          <Outlet />
          <footer className="mt-8 pt-6 text-center text-xs text-gray-400 border-t">
            &copy; {new Date().getFullYear()} CoinCrafter. All rights reserved.
          </footer>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
