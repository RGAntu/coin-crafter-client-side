import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router';

const WorkerBanner = () => {
    return (
        <div className="bg-gradient-main py-20">
      <div className="max-w-7xl mx-auto px-6 lg:flex items-center justify-between">
        
        {/* Left Content */}
        <div className="text-white max-w-lg">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Start Earning as a Worker
          </h1>
          <p className="mt-4 text-lg">
            Join thousands of workers earning real money by completing simple micro-tasks. 
            Get started with 10 free coins and flexible work opportunities.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex gap-4">
            <Link to="/register">
              <button className="btn bg-color-text border-none text-color-accent px-6 hover:bg-secondary hover:text-white">
                Sign Up Now
              </button>
            </Link>
            {/* <Link to="/tasks">
              <button className="btn bg-transparent border border-white text-white px-6 hover:bg-white hover:text-blue-600">
                Browse Tasks
              </button>
            </Link> */}
          </div>
        </div>

        {/* Right Stats Box */}
        <div className="mt-10 lg:mt-0 bg-white/40 backdrop-blur-md rounded-xl p-8 text-center text-white shadow-lg">
          <h2 className="text-xl font-semibold mb-6">Quick Stats</h2>
          <div className="grid grid-cols-2 gap-6 text-lg font-medium">
            <div>
              <p className="text-2xl font-bold">50,000+</p>
              <p className="text-sm">Active Workers</p>
            </div>
            <div>
              <p className="text-2xl font-bold">$500,000+</p>
              <p className="text-sm">Paid Out</p>
            </div>
            <div>
              <p className="text-2xl font-bold">200,000+</p>
              <p className="text-sm">Tasks Completed</p>
            </div>
            <div>
              <p className="text-2xl font-bold flex justify-center items-center gap-1">
                4.8 <FaStar className="text-yellow-400" />
              </p>
              <p className="text-sm">Average Rating</p>
            </div>
          </div>
        </div>

      </div>
    </div>
    );
};

export default WorkerBanner;