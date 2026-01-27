import React from "react";
import { Link } from "react-router";

const GetStart = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-500 to-teal-400 text-center text-white">
      <h2 className="text-5xl font-bold mb-4">Ready to Get Started?</h2>
      <p className="text-xl mb-6">
        Join thousands of workers and buyers who trust Coin-Crafter for their{" "}
        <br /> micro-tasking needs.
      </p>

      <div className="mt-5">
        <Link to="/register">
          <button className="btn bg-gradient-main border-bg-gradient-main text-white font-semibold px-6 py-6 rounded-lg shadow-md hover:scale-105 transition duration-300">
            Sign Up As Your Role
          </button>
        </Link>
      </div>
    </section>
  );
};

export default GetStart;
