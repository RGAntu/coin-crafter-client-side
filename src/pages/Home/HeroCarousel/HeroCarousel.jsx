import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";
import Lottie from "lottie-react";
import BackgroundShapes from "../../shared/BackgroundShapes/BackgroundShapes";

// Import Swiper styles
("swiper/css");
("swiper/css/navigation");
("swiper/css/pagination");

const HeroCarousel = () => {
  const slides = [
    {
      title: "Earn Money with Simple Tasks",
      subTitle: "Complete micro-tasks and get paid instantly.",
      description:
        "Join thousands of workers earning money by completing simple online tasks. No Experience Needed!",
      buttonText: "Start Earning Now",
    },
    {
      title: "Post Tasks, Get Results",
      subTitle: "Outsource your work to skilled professionals",
      description:
        "Get your tasks completed quickly and efficiently by our verified worker community.",
      buttonText: "Post Your First Task",
    },
    {
      title: "Trusted by Thousands",
      subTitle: "Join the leading coin-crafter platform",
      description:
        "Secure payments, verified users, and 24/7 support make us the top choice for micro-work.",
      buttonText: "Join the Community",
    },
  ];

  // Animation variants for the text elements
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="w-full bg-gradient-main overflow-hidden border-b rounded-b-3xl shadow-lg">
      <Swiper
        modules={[Navigation, Autoplay, Pagination]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        loop={true}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            {/* Main Slide Container: Mobile-First (Column-reverse to put text below or above as needed) */}
            <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between px-6 py-12 lg:px-20 min-h-[85vh] lg:min-h-[70vh] gap-8">
              <BackgroundShapes></BackgroundShapes>
              {/* Text Content Area */}
              <motion.div
                className="flex-1 text-center lg:text-left space-y-6 z-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                variants={staggerContainer}
              >
                <motion.h1
                  variants={fadeInUp}
                  className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white leading-tight"
                >
                  {slide.title}
                </motion.h1>

                <motion.h2
                  variants={fadeInUp}
                  className="text-lg md:text-xl lg:text-2xl text-blue-100 font-medium"
                >
                  {slide.subTitle}
                </motion.h2>

                <motion.p
                  variants={fadeInUp}
                  className="text-sm md:text-base lg:text-lg text-gray-200 max-w-xl mx-auto lg:mx-0"
                >
                  {slide.description}
                </motion.p>

                <motion.div variants={fadeInUp}>
                  <button className="bg-white text-blue-700 font-bold px-8 py-3 rounded-full shadow-lg hover:scale-105 transition-transform duration-200 active:scale-95">
                    {slide.buttonText}
                  </button>
                </motion.div>
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroCarousel;
