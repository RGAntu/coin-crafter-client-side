import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { MdOutlineVerifiedUser } from "react-icons/md";
import { IoRocketOutline } from "react-icons/io5";
import { HiMiniUserGroup } from "react-icons/hi2";
import { motion } from "motion/react"


const WhyChooseAbout = () => {
    const features = [
  {
    icon: <MdOutlineVerifiedUser className="w-12 h-12 bg-gradient-main text-white p-2 rounded-lg" />,
    title: "Verified Tasks",
    description:
      "All tasks are reviewed and verified to ensure quality and legitimacy",
  },
  {
    icon: <ShieldCheck className="w-12 h-12 bg-gradient-main text-white p-2 rounded-lg" />,
    title: "Secure Payments",
    description:
      "Safe and secure payment processing with multiple withdrawal options.",
  },
  {
    icon: <HiMiniUserGroup className="w-12 h-12 bg-gradient-main text-white p-2 rounded-lg" />,
    title: "Fast Execution",
    description:
      "Quick task completion with real-time tracking and instant notifications.",
  },
  {
    icon: <IoRocketOutline  className="w-12 h-12 bg-gradient-main text-white p-2 rounded-lg" />,
    title: "Global Community",
    description:
      "Connect with workers and buyers from around the world.",
  },
 
];
    return (
         <div
          className="py-16 px-4 md:px-10 lg:px-20 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Why Choose Coin-Crafter?
        </h2>
        <p className="text-gray-500 mt-2">
          We provide a secure, efficient, and user-friendly platform for Coin-Crafter.
        </p>
      </div>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto ">
        {features.map((feature, index) => (
          <motion.div
           whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.1 }}
            onHoverStart={() => console.log("hover started!")}
            key={index}
            className=" p-6 border-none rounded-2xl shadow-sm hover:shadow-md hover:opacity-90 transition-all duration-300"
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
    );
};

export default WhyChooseAbout;