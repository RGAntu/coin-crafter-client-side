import React from "react";
import { motion } from "framer-motion";

const BackgroundShapes = () => {
  // Define only what changes for each shape
  const shapeConfigs = [
    { top: "60%", right: "1%", size: 500 },
    { bottom: "0%", left: "0%", size: 400 },
    { top: "0%", right: "70%", size: 300 },
    { top: "0%", left: "80%", size: 300 },
  ];

  return (
    <>
      {shapeConfigs.map((config, index) => (
        <motion.div
          key={index}
          style={{
            position: "absolute",
            width: config.size,
            height: config.size,
            borderRadius: "50%",
            border: "3px solid #22d3ee",
            opacity: 0.25,
            pointerEvents: "none", // Ensures shapes don't block button clicks
            ...config, // Spreads top/bottom/left/right values
          }}
          animate={{
            y: [0, 40, 0],
            rotate: [360, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            // Adding a staggered delay makes the animation look more natural
            delay: index * 0.5, 
          }}
        />
      ))}
    </>
  );
};

export default BackgroundShapes;