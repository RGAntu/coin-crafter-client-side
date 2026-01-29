import React from "react";
import "../../../index.css";
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

// Color Map to solve Tailwind JIT dynamic class issues
const colorStyles = {
  blue: {
    line: "bg-gradient-to-b from-cyan-400 to-blue-500", // Standard Tailwind gradient for the line
    dot: "bg-gradient-main", // Your custom CSS gradient
    light: "bg-cyan-50",
    text: "text-gradient-main", // Your custom text gradient
    shadow: "shadow-cyan-100",
    border: "border-cyan-100"
  },
  green: {
    line: "bg-gradient-to-b from-green-400 to-emerald-500",
    dot: "bg-green-600", // Keeping green standard or you can create a .bg-gradient-green
    light: "bg-green-50",
    text: "text-green-600",
    shadow: "shadow-green-100",
    border: "border-green-100"
  },
};

const StepCard = ({ step, index, color, isLast }) => {
  const style = colorStyles[color];

  return (
    <div className="relative flex group">
      {/* Timeline Line */}
      {!isLast && (
        <div
          className={`absolute left-5 top-10 w-0.5 h-full ${style.line} z-0 opacity-50`}
        />
      )}

      {/* Number Node with Custom Gradient */}
      <div className="relative z-10 flex-shrink-0">
        <div
          className={`w-10 h-10 rounded-full ${style.dot} text-white flex items-center justify-center font-bold shadow-lg transform group-hover:scale-110 transition-transform duration-300`}
        >
          {index + 1}
        </div>
      </div>

      {/* Content Card */}
      <div className="ml-6 pb-10 w-full">
        <div
          className={`bg-white p-5 rounded-2xl border ${style.border} shadow-sm ${style.shadow} group-hover:shadow-md transition-all duration-300`}
        >
          {/* Icon with potential gradient */}
          <div className={`text-2xl ${style.text} mb-3 inline-block`}>
            {step.icon}
          </div>
          
          {/* Title with Custom Text Gradient */}
          <h4 className={`text-xl font-bold mb-2 ${style.text}`}>
            {step.title}
          </h4>
          
          <p className="text-gray-600 leading-relaxed">{step.text}</p>
        </div>
      </div>
    </div>
  );
};

const HowItWorks = () => {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          How it Works
        </h2>
        <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
        {/* Workers Column */}
        <div className="flex flex-col">
          <div className="flex items-center space-x-4 mb-10 justify-center lg:justify-start">
            <h3 className="text-3xl font-bold text-blue-600">For Workers</h3>
            <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full uppercase tracking-wider">
              Earn
            </span>
          </div>
          <div className="flex flex-col">
            {steps.worker.map((step, i) => (
              <StepCard
                key={i}
                step={step}
                index={i}
                color="blue"
                isLast={i === steps.worker.length - 1}
              />
            ))}
          </div>
        </div>

        {/* Buyers Column */}
        <div className="flex flex-col">
          <div className="flex items-center space-x-4 mb-10 justify-center lg:justify-start">
            <h3 className="text-3xl font-bold color-primary">For Buyers</h3>
            <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-semibold rounded-full uppercase tracking-wider">
              Hire
            </span>
          </div>
          <div className="flex flex-col">
            {steps.buyer.map((step, i) => (
              <StepCard
                key={i}
                step={step}
                index={i}
                color="green"
                isLast={i === steps.buyer.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;