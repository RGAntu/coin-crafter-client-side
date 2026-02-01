import React from "react";
import CountUp from "react-countup";
import { FaCheckCircle, FaDollarSign, FaGlobe, FaUsers } from "react-icons/fa";

const PlatformStats = () => {
  const stats = [
    {
      icon: <FaUsers size={40} className="text-gradient" />,
      count: 50000,
      suffix: "+",
      title: "Active Users",
      description: "Trusted by workers and buyers worldwide",
    },
    {
      icon: <FaCheckCircle size={40} className="text-gradient" />,
      count: 200000,
      suffix: "+",
      title: "Tasks Completed",
      description: "Successfully finished projects",
    },
    {
      icon: <FaDollarSign size={40} className="text-gradient" />,
      count: 500000,
      prefix: "$",
      suffix: "+",
      title: "Total Earnings",
      description: "Paid out to our community",
    },
    {
      icon: <FaGlobe size={40} className="text-gradient" />,
      count: 120,
      suffix: "+",
      title: "Countries",
      description: "Global community reach",
    },
  ];
  return (
    <section className="py-16 px-4 text-center">
      <h2 className="text-4xl font-bold mb-2">Platform by the Numbers</h2>
      <p className="text-gray-600 mb-10">
        See the impact we're making in the micro-tasking industry
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
        {stats.map((item, index) => (
          <div
            key={index}
            className="p-6 border border-gray-200 rounded-xl shadow-sm flex flex-col items-center"
          >
            <div
              className="btn bg-gradient-main text-white border-none hover:opacity-90 transition-all duration-300  p-2 rounded-full mb-4 w-15 h-15"
              
            >
              {item.icon}
            </div>
            <h3 className="text-4xl text-primary font-bold">
              <CountUp
                end={item.count}
                duration={10}
                prefix={item.prefix || ""}
                suffix={item.suffix || ""}
                separator=","
              />
            </h3>
            <h4 className="text-lg font-semibold color-accent mt-2">
              {item.title}
            </h4>
            <p className="text-sm text-accent mt-1">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PlatformStats;
