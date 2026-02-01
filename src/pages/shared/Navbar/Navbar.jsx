import React from "react";
import { FaGithub } from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import CoinCrafterLogo from "../CoinCrafterLogo/CoinCrafterLogo";
import useAuth from "../../../hooks/useAuth";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const navItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/workers">For Workers</Link>
      </li>
      <li>
        <Link to="/buyers">For Buyers</Link>
      </li>
      {user && (
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      )}
      {/* {user && (
        <li>
          <Link to="/available-coin">Available Coin</Link>
        </li>
      )} */}
      
    </>
  );

  return (
    
    <div className="bg-accent shadow-xl sticky top-0 z-50 ">
      <div className="navbar max-w-7xl mx-auto   ">
      {/* Logo and Hamburger */}
      <div className="navbar-start">
        <div className="dropdown ">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden  outline-1 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 md:text-white lg:text-white rounded-box w-52 z-10"
          >
            {navItems}
          </ul>
        </div>
        {/* Logo click to home */}
        <span className="cursor-pointer" onClick={() => navigate("/")}>
          <CoinCrafterLogo />
        </span>
      </div>

      {/* Center Nav for large screen */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal text-white px-1">{navItems}</ul>
      </div>

      {/* Right End Section */}
      <div className="navbar-end space-x-3">
        {!user ? (
          <>
            <Link to="/login" className="btn border-accent">
              Login
            </Link>
            <Link to="/register" className="btn btn-primary">
              Register
            </Link>
          </>
        ) : (
          <>
            <div className="flex items-center gap-2">
              <img
                src={user?.photoURL || "https://i.ibb.co/SrRrpx0/user.png"}
                alt="profile"
                className="w-10 h-10 rounded-full object-cover border"
              />
              <span className="hidden md:inline">
                {user?.displayName || "User"}
              </span>
            </div>
            <button
              onClick={handleLogout}
              className="btn bg-gradient-to-r from-[#3192DF] to-[#16A352] text-white border-none hover:opacity-90 transition-all duration-300"
              style={{
                backgroundImage: "linear-gradient(to right, #3192DF, #16A352)",
              }}
            >
              Logout
            </button>
          </>
        )}

        {/* Always Show */}
        <Link
          href="https://github.com/RGAntu/coin-crafter-client-side"
          target="_blank"
          rel="noopener noreferrer"
          className="btn bg-primary text-white border-none hidden md:flex lg:flex items-center gap-2"
        >
          <FaGithub /> Join as Developer
        </Link>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
