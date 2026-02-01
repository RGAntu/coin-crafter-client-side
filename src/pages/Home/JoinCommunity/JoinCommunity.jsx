import React from "react";
import { Link } from "react-router";

const JoinCommunity = () => {
  return (
    <section className="bg-base-200 py-20 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-neutral-800">
          Join Our Growing Community
        </h2>
        <p className="text-lg text-neutral-600 mb-8">
          Start your journey today and become part of our success stories
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link to="/register">
            <button className="btn w-64 md:w-auto text-white bg-gradient-main border-none transition-all duration-300">
              Start as Worker
            </button>
          </Link>

          <Link to="/register">
            <button className="btn btn-outline btn-primary w-64 md:w-auto border-2 transition-all duration-300 hover:bg-gradient- hover:text-white">
              Post Tasks as Buyer
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default JoinCommunity;
