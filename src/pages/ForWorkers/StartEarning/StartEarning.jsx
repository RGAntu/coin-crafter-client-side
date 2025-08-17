import React from "react";
import { Link } from "react-router";

const StartEarning = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-500 to-teal-400 text-center text-white">
      <h2 className="text-3xl font-bold mb-4">Ready to Start Earning?</h2>
      <p className="text-lg mb-6">
        Sign up today and get 10 free coins to start your earning journey!
      </p>
     
      <Link to="/register">
       <button className="btn bg-gradient-to-r from-green-400 to-teal-400 border-none text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:scale-105 transition duration-300">
        Create Worker Account
      </button>
      </Link>
    </section>
  );
};

export default StartEarning;
