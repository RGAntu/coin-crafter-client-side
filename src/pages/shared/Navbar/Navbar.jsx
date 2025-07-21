import React from "react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router";
import CoinCrafterLogo from "../CoinCrafterLogo/CoinCrafterLogo";

const Navbar = () => {
  const navItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navItems}
          </ul>
        </div>
        <span>
          <CoinCrafterLogo></CoinCrafterLogo>
        </span>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>

      <div className="navbar-end space-x-5">
        {/* Login  */}
        <button className="btn btn-accent ">Login</button>

        {/* Register  */}
        <button className="btn btn-primary ">Register</button>

        {/* join as Developer  */}
        <Link
          href="https://github.com/Programming-Hero-Web-Course4/b11a12-client-side-RGAntu"
          target="_blank"
          className="btn outline-primary"
        >
          <FaGithub /> Join as Developer
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
