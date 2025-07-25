import React from "react";
import { Link } from "react-router";
import { MdBlock } from "react-icons/md";

const Forbidden = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-base-200 text-center px-4">
      <div className="text-red-600 text-6xl mb-4">
        <MdBlock />
      </div>
      <h1 className="text-4xl font-bold text-error">403 - Forbidden</h1>
      <p className="text-lg mt-4 text-base-content max-w-md">
        Sorry, you don't have permission to access this page. If you think this is a mistake, please contact the admin or try logging in with the correct role.
      </p>
      <Link to="/" className="btn btn-primary text-black mt-6">
        Back to Home
      </Link>
    </div>
  );
};

export default Forbidden;