import React from 'react';
import { Link } from 'react-router';

const BuyerBanner = () => {
    return (
        <div className="bg-gradient-to-r from-blue-500 to-teal-400 py-20">
      <div className="max-w-7xl mx-auto px-6 lg:flex items-center justify-between">
        
        {/* Left Content */}
        <div className="text-white max-w-lg">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Find Skilled Workers for Your Tasks
          </h1>
          <p className="mt-4 text-lg">
            Connect with thousands of qualified workers ready to complete your projects. Post tasks, review submissions, and pay only for quality work.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex gap-4">
            <Link to="/register">
              <button className="btn bg-accent border-none text-white px-6 hover:bg-secondary">
                Sign Up Now
              </button>
            </Link>
        
          </div>
        </div>

        {/* Right Stats Box */}
        <div className="mt-10 lg:mt-0 bg-white/40 backdrop-blur-md rounded-xl p-8 text-center text-white shadow-lg">
          <h2 className="text-xl font-semibold mb-6">Platform Stats</h2>
          <div className="grid grid-cols-2 gap-6 text-lg font-medium">
            <div>
              <p className="text-2xl font-bold">1k+</p>
              <p className="text-sm">Active Buyers</p>
            </div>
            <div>
              <p className="text-2xl font-bold">50k+</p>
              <p className="text-sm">Available Workers</p>
            </div>
            <div>
              <p className="text-2xl font-bold">2.5hrs</p>
              <p className="text-sm">Avg Completion</p>
            </div>
            <div>
              <p className="text-2xl font-bold flex justify-center items-center gap-1">
                98%
              </p>
              <p className="text-sm">Success Rate</p>
            </div>
          </div>
        </div>

      </div>
    </div>
    );
};

export default BuyerBanner;