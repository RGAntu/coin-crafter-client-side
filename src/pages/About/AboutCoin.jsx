import React from "react";
import { motion } from "motion/react";

const AboutCoin = () => {
  return (
    <div className="text-center justify-between py-30 bg-gradient-main text-white">
        <motion.button
          style={{
            width: 150,
            height: 150,
            borderRadius: "50%",
            border: `4px solid #18167e`,
            position: "absolute",
            top:"100px",
            left:"30px",
          }}
          animate={{ rotate: 180 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        ></motion.button>
        
      <div>
        <h1 className="text-6xl font-bold mb-6">About Coin Crafter</h1>
        <p className="text-2xl">
          Connecting skilled workers with businesses through micro-tasking.{" "}
          <br />
          Complete small tasks, earn real money, and grow your income from
          anywhere in the world.
        </p>
        
      </div>
      <motion.button
          style={{
            width: 250,
            height: 250,
            borderRadius: "50%",
            border: "4px solid #2688d9",
            position: "absolute",
            bottom:"510px",
            right:"80px",
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        ></motion.button>
    </div>
  );
};

export default AboutCoin;
