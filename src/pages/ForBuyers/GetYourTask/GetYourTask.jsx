import React from "react";
import { Link } from "react-router";

const GetYourTask = () => {
  return (
    <section className="py-20 bg-gradient-main text-center text-white">
      <h2 className="text-4xl font-bold mb-4">Ready to Get Your Tasks Done?</h2>
      <p className="text-lg mb-6">
        Join thousands of buyers who trust our platform for their task completion needs. Sign up and get 50 free coins to start!
      </p>

      <Link to="/register">
        <button className="btn bg-color-accent hover:bg-secondary border-none hover:text-white font-semibold px-6 py-6 rounded-lg shadow-md hover:scale-105 transition duration-300">
          Create Buyer Account
        </button>
      </Link>
    </section>
  );
};

export default GetYourTask;
