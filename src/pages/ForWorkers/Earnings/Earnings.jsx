import React from "react";

const Earnings = () => {
  return (
    <section className="py-16 bg-base-200">
      <div className="text-center mb-12 px-5">
        <h2 className="text-3xl font-bold text-gray-900">Earnings Potential</h2>
        <p className="text-gray-600 mt-2">
          See how much you can earn based on your activity level and skill
          development.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto px-5">
        {/* Beginner */}
        <div className="card bg-base-100 shadow-md border rounded-xl text-center p-6 ">
          <h3 className="text-blue-600 font-semibold text-lg">Beginner</h3>
          <p className="text-2xl font-bold my-3">$50–100/month</p>
          <p className="text-sm text-gray-500">Monthly potential</p>
          <p className="mt-4 text-gray-700 font-medium">5–10 tasks/day</p>
          <p className="text-sm text-gray-500">Average workload</p>
        </div>

        {/* Intermediate */}
        <div className="card bg-base-100 shadow-md border rounded-xl text-center p-6">
          <h3 className="text-blue-600 font-semibold text-lg">Intermediate</h3>
          <p className="text-2xl font-bold my-3">$100–300/month</p>
          <p className="text-sm text-gray-500">Monthly potential</p>
          <p className="mt-4 text-gray-700 font-medium">10–20 tasks/day</p>
          <p className="text-sm text-gray-500">Average workload</p>
        </div>

        {/* Expert */}
        <div className="card bg-base-100 shadow-md border rounded-xl text-center p-6">
          <h3 className="text-blue-600 font-semibold text-lg">Expert</h3>
          <p className="text-2xl font-bold my-3">$300–500+/month</p>
          <p className="text-sm text-gray-500">Monthly potential</p>
          <p className="mt-4 text-gray-700 font-medium">20+ tasks/day</p>
          <p className="text-sm text-gray-500">Average workload</p>
        </div>
      </div>
    </section>
  );
};

export default Earnings;
