import React from "react";
import { FaMoneyCheck, FaTasks } from "react-icons/fa";
import { MdAccessTimeFilled } from "react-icons/md";
import { FaEarthAfrica } from "react-icons/fa6";
import { AiOutlineFileProtect } from "react-icons/ai";
import { GiProgression } from "react-icons/gi";

const WhyWork = () => {
  const features = [
    {
      icon: <FaMoneyCheck className="w-10 h-10 text-primary" />,
      title: "Earn Real Money",
      description:
        "Complete tasks and earn coins that convert to real cash. Start with 10 free coins on signup!",
    },
    {
      icon: <MdAccessTimeFilled className="w-10 h-10 text-primary" />,
      title: "Flexible Schedule",
      description:
        "Work whenever you want, wherever you are. No fixed hours, complete freedom.",
    },
    {
      icon: <FaEarthAfrica className="w-10 h-10 text-primary" />,
      title: "Work Globally",
      description:
        "Access tasks from buyers worldwide. No geographical restrictions.",
    },
    {
      icon: <AiOutlineFileProtect className="w-10 h-10 text-primary" />,
      title: "Secure Payments",
      description:
        "All payments are secured and processed safely through our platform.",
    },
    {
      icon: <FaTasks className="w-10 h-10 text-primary" />,
      title: "Variety of Tasks",
      description:
        "From data entry to content creation, find tasks that match your skills.",
    },
    {
      icon: <GiProgression className="w-10 h-10 text-primary" />,
      title: "Track Progress",
      description:
        "Monitor your earnings, completion rates, and build your reputation.",
    },
  ];
  return (
    <section className="py-16 px-4 md:px-10 lg:px-20 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Why Work With Us?
        </h2>
        <p className="text-gray-500 mt-2">
          Discover the benefits that make Coin Crafter the preferred platform
          for workers worldwide.
        </p>
      </div>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto ">
        {features.map((feature, index) => (
          <div
            key={index}
            className=" p-6 border rounded-2xl shadow-sm hover:shadow-md  bg-gradient-to-r from-[#cee2f3] to-[#cff8e1] text-white hover:opacity-90 transition-all duration-300"
            style={{
              backgroundImage: "linear-gradient(to right, #cee2f3, #cff8e1)",
            }}
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyWork;
