import React from "react";
import {
  FaBriefcase,
  FaClipboardList,
  FaCreditCard,
  FaMoneyBillWave,
  FaRegThumbsUp,
  FaSearch,
  FaUserPlus,
  FaWallet,
} from "react-icons/fa";

const steps = {
  worker: [
    {
      icon: <FaUserPlus />,
      title: "Create Account",
      text: "Sign up as a worker and get instant access to thousands of tasks.",
    },
    {
      icon: <FaClipboardList />,
      title: "Complete Tasks",
      text: "Choose tasks, follow instructions, and submit your work.",
    },
    {
      icon: <FaRegThumbsUp />,
      title: "Get Approved",
      text: "Buyers review your work. Get approved and earn coins.",
    },
    {
      icon: <FaMoneyBillWave />,
      title: "Withdraw Earnings",
      text: "Withdraw your coins as real money via many methods.",
    },
  ],
  buyer: [
    {
      icon: <FaBriefcase />,
      title: "Post a Job",
      text: "Sign up as a buyer and describe your task.",
    },
    {
      icon: <FaWallet />,
      title: "Set Your Budget",
      text: "Decide how many workers and your pay per task.",
    },
    {
      icon: <FaSearch />,
      title: "Review Submissions",
      text: "Check work from workers. Approve the best.",
    },
    {
      icon: <FaCreditCard />,
      title: "Pay with Ease",
      text: "Pay easily using your purchased coins.",
    },
  ],
};

const StepCard = ({ step, index, color }) => (
  <div
    className={`relative flex items-start space-x-4 group hover:bg-${color}-50 hover:rounded-xl transition-all duration-300 p-2`}
  >
    {/* Numbered Circle */}
    <div className="flex-shrink-0 z-10">
      <div
        className={`w-10 h-10 rounded-full bg-gradient-to-tr from-${color}-500 to-${color}-700 text-white flex items-center justify-center font-bold shadow-md border-4 border-white`}
      >
        {index + 1}
      </div>
    </div>
    {/* Icon and Text */}
    <div
      className={`bg-white p-4 rounded-xl shadow-sm border border-${color}-100 w-full`}
    >
      <div className={`text-xl text-${color}-600 mb-1`}>{step.icon}</div>
      <h4 className="text-lg font-semibold">{step.title}</h4>
      <p className="text-gray-600 text-sm">{step.text}</p>
    </div>
  </div>
);

const HowItWorks = () => {
  return (
    <section className="py-20 px-4 sm:px-6 bg-gradient-to-b from-white via-gray-50 to-white">
      <h2 className="text-4xl font-bold text-center mb-16">How it Works</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
        {/* Workers */}
        <div>
          <h3 className="text-2xl font-bold text-blue-600 mb-10 text-center lg:text-left">
            For Workers
          </h3>
          <div className="relative space-y-10 lg:before:absolute lg:before:left-5 lg:before:top-3 lg:before:bottom-0 lg:before:w-1 lg:before:bg-blue-100">
            {steps.worker.map((step, i) => (
              <StepCard key={i} step={step} index={i} color="blue" />
            ))}
          </div>
        </div>

        {/* Buyers */}
        <div>
          <h3 className="text-2xl font-bold text-green-600 mb-10 text-center lg:text-left">
            For Buyers
          </h3>
          <div className="relative space-y-10 lg:before:absolute lg:before:left-5 lg:before:top-3 lg:before:bottom-0 lg:before:w-1 lg:before:bg-green-100 ">
            {steps.buyer.map((step, i) => (
              <StepCard key={i} step={step} index={i} color="green" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
