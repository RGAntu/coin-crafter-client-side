import React from "react";
import CoinCrafterLogo from "../CoinCrafterLogo/CoinCrafterLogo";
import { Link } from "react-router";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white shadow-sm dark:bg-gray-900 ">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <CoinCrafterLogo></CoinCrafterLogo>
          <div className="flex gap-5">
            <Link
              className="text-accent hover:text-primary"
              to="https://www.facebook.com/"
            >
              <FaFacebook size={24} />
            </Link>
            <Link
              className="text-accent hover:text-primary"
              to="https://www.linkedin.com/in/an-tu-62992b36a/"
            >
              <FaLinkedin size={24} />
            </Link>
            <Link
              className="text-accent hover:text-primary"
              to="https://github.com/RGAntu"
            >
              <FaGithub size={24} />
            </Link>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <p className="text-white text-center">
          {" "}
          © <span className="hover:text-primary">CoinCrafter</span>{" "}
          {new Date().getFullYear()} - All right reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
