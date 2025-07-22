import React from "react";
import { ShieldCheck, Clock, Zap, Users, Timer, Headset } from "lucide-react";

const features = [
  {
    icon: <ShieldCheck className="w-10 h-10 text-primary" />,
    title: "Secure Payments",
    description:
      "All transactions are protected with bank-level security. Get paid safely and on time.",
  },
  {
    icon: <Clock className="w-10 h-10 text-primary" />,
    title: "Flexible Schedule",
    description:
      "Work whenever you want, wherever you are. No fixed hours, complete freedom.",
  },
  {
    icon: <Zap className="w-10 h-10 text-primary" />,
    title: "Instant Earnings",
    description:
      "Get paid immediately after task completion. No waiting periods or delays.",
  },
  {
    icon: <Users className="w-10 h-10 text-primary" />,
    title: "Verified Community",
    description:
      "Join a trusted network of verified workers and buyers from around the world.",
  },
  {
    icon: <Timer className="w-10 h-10 text-primary" />,
    title: "Quick Tasks",
    description:
      "Most tasks can be completed in minutes. Start earning without any experience.",
  },
  {
    icon: <Headset className="w-10 h-10 text-primary" />,
    title: "24/7 Support",
    description:
      "Our dedicated support team is always here to help you succeed.",
  },
];

const WhyChoose = () => {
  return (
    <section className="py-16 px-4 md:px-10 lg:px-20 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Why Choose CoinCrafter?
        </h2>
        <p className="text-gray-500 mt-2">
          We've built the most reliable and user-friendly platform for
          CoinCrafter
        </p>
      </div>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  ">
        {features.map((feature, index) => (
          <div
            key={index}
            className="p-6 border rounded-2xl shadow-sm hover:shadow-md  bg-gradient-to-r from-[#bdd8ee] to-[#97e2b8] text-white hover:opacity-90 transition-all duration-300"
            style={{
              backgroundImage: "linear-gradient(to right, #bdd8ee, #97e2b8)",
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

export default WhyChoose;
