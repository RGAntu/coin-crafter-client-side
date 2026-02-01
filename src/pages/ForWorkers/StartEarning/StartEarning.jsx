import React from "react";
import { Link } from "react-router";

const StartEarning = () => {
  return (
    <section className="py-20 bg-gradient-main text-center text-white">
      <h2 className="text-4xl font-bold mb-4">Ready to Start Earning?</h2>
      <p className="text-xl mb-6">
        Sign up today and get 10 free coins to start your earning journey!
      </p>

      <Link to="/register">
        <button className="btn bg-color-text hover:bg-secondary border-none text-color-accent hover:text-white font-semibold px-6 py-6 rounded-lg shadow-md hover:scale-105 transition duration-300">
          Create Worker Account
        </button>
      </Link>
    </section>
  );
};

export default StartEarning;
