import React from "react";
import { motion } from "motion/react";

const AboutCoin = () => {
  return (
    <div className="relative text-center py-20 md:py-30 bg-gradient-main text-white overflow-hidden">
      
      {/* Top Left Circle */}
      <motion.button
        className="
          absolute 
          top-10 left-5 
          w-24 h-24 
          md:top-[100px] md:left-[30px] 
          md:w-[150px] md:h-[150px]
          rounded-full 
          border-4 border-[#2688d9]
        "
        animate={{ rotate: 180 }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      />

      {/* Content */}
      <div className="relative z-10 px-4">
        <h1 className="text-3xl md:text-6xl font-bold mb-4 md:mb-6">
          About Coin Crafter
        </h1>
        <p className="text-lg md:text-2xl leading-relaxed">
          Connecting skilled workers with businesses through micro-tasking.
          <br className="hidden md:block" />
          Complete small tasks, earn real money, and grow your income from
          anywhere in the world.
        </p>
      </div>

      {/* Bottom Right Circle */}
      <motion.button
        className="
          absolute 
          bottom-10 right-5 
          w-32 h-32 
          md:bottom-[510px] md:right-[80px]
          md:w-[250px] md:h-[250px]
          rounded-full 
          border-4 border-[#2688d9]
        "
        animate={{ rotate: 360 }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
};

export default AboutCoin;
