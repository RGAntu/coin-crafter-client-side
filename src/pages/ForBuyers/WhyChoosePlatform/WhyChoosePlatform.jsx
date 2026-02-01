import React from "react";
import { FaRocket } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { BsCurrencyDollar } from "react-icons/bs";
import { AiOutlineFileProtect } from "react-icons/ai";
import { GiProgression } from "react-icons/gi";
import { MdAccessTimeFilled } from "react-icons/md";
import { motion } from "motion/react";

const WhyChoosePlatform = () => {
  const features = [
    {
      icon: (
        <FaPeopleGroup className="w-12 h-12 bg-gradient-main p-2 rounded-lg" />
      ),
      title: "Access Global Talent",
      description:
        "Connect with skilled workers from around the world for your tasks and projects.",
    },
    {
      icon: <FaRocket className="w-12 h-12 bg-gradient-main p-2 rounded-lg" />,
      title: "Fast Turnaround",
      description:
        "Get your tasks completed quickly with our pool of active and dedicated workers.",
    },
    {
      icon: (
        <BsCurrencyDollar className="w-12 h-12 bg-gradient-main p-2 rounded-lg" />
      ),
      title: "Cost-Effective",
      description:
        "Pay only for completed tasks. No upfront costs or hidden fees.",
    },
    {
      icon: (
        <AiOutlineFileProtect className="w-12 h-12 bg-gradient-main p-2 rounded-lg" />
      ),
      title: "Quality Assurance",
      description:
        "Review and approve submissions before payment. Get exactly what you need.",
    },

    {
      icon: (
        <GiProgression className="w-12 h-12 bg-gradient-main p-2 rounded-lg" />
      ),
      title: "Track Progress",
      description:
        "Monitor your earnings, completion rates, and build your reputation.",
    },
    {
      icon: (
        <MdAccessTimeFilled className="w-12 h-12 bg-gradient-main p-2 rounded-lg" />
      ),
      title: "24/7 Availability",
      description:
        "Workers are active around the clock, ensuring continuous progress on your tasks.",
    },
  ];
  return (
    <section className="py-16 px-4 md:px-10 lg:px-20 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Why Choose Our Platform?
        </h2>
        <p className="text-gray-500 mt-2">
          Discover the advantages that make our platform the best choice for
          outsourcing your tasks.
        </p>
      </div>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto ">
        {features.map((feature, index) => (
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.1 }}
            onHoverStart={() => console.log("hover started!")}
            key={index}
            className=" p-6 border rounded-2xl shadow-sm hover:shadow-md text-white hover:opacity-90 transition-all duration-300"
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyChoosePlatform;
