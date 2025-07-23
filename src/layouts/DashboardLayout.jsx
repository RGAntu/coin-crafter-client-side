import React from "react";
import { NavLink, Outlet } from "react-router";
import { FaBell } from "react-icons/fa";
import CoinCrafterLogo from "../pages/shared/CoinCrafterLogo/CoinCrafterLogo";

const DashboardLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between p-4 bg-base-200 border-b border-base-300">
        {/* Left: Logo */}
        <div className="flex items-center gap-2">
          <CoinCrafterLogo></CoinCrafterLogo>
        </div>

        {/* Middle/Right: User Info */}
        <div className="flex-1 flex justify-end items-center gap-6 text-sm">
          <div className="flex items-center gap-3">
            <span>Available Coin: 120</span>
            <img
              src="/path/to/user.jpg"
              alt="User"
              className="w-8 h-8 rounded-full"
            />
            <div className="text-right">
              <p className="font-bold">userName</p>
              <p className="text-xs text-gray-500">userRole</p>
            </div>
          </div>

          {/* Notification */}
          <button
            className="btn btn-ghost btn-circle tooltip"
            data-tip="Notification"
          >
            <FaBell className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Main Body */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 bg-base-100 border-r border-base-300 p-4">
          <ul className="flex flex-col gap-2">
            <li>
              <NavLink to="/dashboard" className="flex items-center gap-3">
                Home
              </NavLink>
            </li>
          </ul>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 bg-base-100 flex flex-col">
          <div className="flex-1">
            <Outlet />
          </div>
          {/* Footer */}
          <footer className="mt-4 border-t border-base-300 pt-4 text-center text-sm text-gray-500">
            &copy; 2025 CoinCrafter. All rights reserved.
          </footer>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
