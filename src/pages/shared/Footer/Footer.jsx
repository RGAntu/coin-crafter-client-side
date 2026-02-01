import React from "react";
import CoinCrafterLogo from "../CoinCrafterLogo/CoinCrafterLogo";
import { Link } from "react-router";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Top section */}
        <div className="flex flex-col gap-10 md:flex-row md:justify-between md:items-start text-center md:text-left">
          
          {/* Logo & description */}
          <div className="md:max-w-sm">
            <CoinCrafterLogo />
            <p className="text-gray-400 text-sm mt-3 leading-relaxed">
              The leading coin-crafter platform connecting skilled workers with
              businesses worldwide. Complete tasks, earn money, and grow your
              income.
            </p>
          </div>

          {/* Platform links */}
          <div>
            <h2 className="text-white text-lg font-semibold mb-4">
              Platform
            </h2>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link className="hover:text-primary" to="/about">
                  About Us
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary" to="/workers">
                  For Workers
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary" to="/buyers">
                  For Buyers
                </Link>
              </li>
            </ul>
          </div>

          {/* Social links */}
          <div>
            <h2 className="text-white text-lg font-semibold mb-4">
              Social
            </h2>
            <div className="flex justify-center md:justify-start gap-5">
              <Link
                className="text-gray-400 hover:text-primary"
                to="https://www.facebook.com/"
              >
                <FaFacebook size={22} />
              </Link>
              <Link
                className="text-gray-400 hover:text-primary"
                to="https://www.linkedin.com/in/an-tu-62992b36a/"
              >
                <FaLinkedin size={22} />
              </Link>
              <Link
                className="text-gray-400 hover:text-primary"
                to="https://github.com/RGAntu"
              >
                <FaGithub size={22} />
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-8 border-gray-700" />

        {/* Bottom copyright */}
        <p className="text-gray-400 text-sm text-center">
          © <span className="hover:text-primary">CoinCrafter</span>{" "}
          {new Date().getFullYear()} — All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
