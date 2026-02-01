import React from "react";

const Earnings = () => {
  return (
    <section className="py-16 bg-base-200">
      <div className="text-center mb-12 px-5">
        <h2 className="text-4xl font-bold text-gray-900">
          Earnings Potential
        </h2>
        <p className="text-gray-600 mt-2">
          See how much you can earn based on your activity level and skill
          development.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto px-5">
        {/* Beginner */}
        <div className="card bg-base-100 shadow-md border border-[#fafafa] rounded-xl text-center p-6">
          <h3 className="text-primary font-semibold text-2xl mb-4">Beginner</h3>
           <div > <span className="text-4xl font-bold my-3 text-secondary">$50–100</span><span>/month</span></div>
          <p className="text-sm text-gray-500">Monthly potential</p>
          <ul className="mt-3">
            <li>5-10 tasks/day</li>
            <li> Flexible schedule</li>
            <li>Instant payments</li>
            <li>24/7 support</li>
          </ul>
        </div>

        {/* Intermediate */}
        <div className="relative card bg-base-100 shadow-lg border-2 border-primary rounded-xl text-center p-6">
          {/* Most Popular Button */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2">
            <button className="btn bg-gradient-main text-white btn-sm rounded-full px-4">
              Most Popular
            </button>
          </div>

          <h3 className="text-primary font-semibold text-2xl mt-4 mb-4">
            Intermediate
          </h3>
          <div > <span className="text-4xl font-bold my-3 text-gradient-main">$100–300</span><span>/month</span></div>
          <p className="text-sm text-gray-500">Monthly potential</p>
          <ul className="mt-3">
            <li>10–20 tasks/day</li>
            <li> Flexible schedule</li>
            <li>Instant payments</li>
            <li>24/7 support</li>
          </ul>
        </div>

        {/* Expert */}
        <div className="card bg-base-100 shadow-md border border-[#fafafa] rounded-xl text-center p-6">
          <h3 className="text-primary font-semibold text-2xl mb-4">Expert</h3>
          <div > <span className="text-4xl font-bold my-3 text-secondary">$300–500</span><span>/month</span></div>
          <p className="text-sm text-gray-500">Monthly potential</p>

          <ul className="mt-3">
            <li>20+ tasks/day</li>
            <li> Flexible schedule</li>
            <li>Instant payments</li>
            <li>24/7 support</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Earnings;
