import React from "react";
// import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Lottie from "lottie-react";

const HeroCarousel = () => {
  const slides = [
    {
      title: "Earn Money with Simple Tasks",
      subTitle: "Complete micro-tasks and get paid instantly.",
      description: " Join thousands of workers earning money by completing simple online tasks. No Experience Needed!",
      
      lottiePath: "/Finance.json",
      buttonText: "Start Earning Now",
    },
    {
      title: "Post Tasks, Get Results",
      subTitle: "Outsource your work to skilled professionals",
      description:
        "Get yours tasks completed quickly and efficiently by our verified worker community.",
      lottiePath: "/money_lottie.json",
      buttonText: "Post Your First Task",
    },
    {
      title: "Trusted by Thousands",
      subTitle: "Join the leading coin-crafter platform",
      description:
        "Secure payments, verified users, and 24/7 support make us the top choice for micro-work .",
      lottiePath: "/Business Analytics.json",
      buttonText: "Join the Community",
    },
  ];

  // const [animations, setAnimations] = useState([]);

  // Fetch all Lottie files
  // useEffect(() => {
  //   Promise.all(
  //     slides.map((slide) =>
  //       fetch(slide.lottiePath)
  //         .then((res) => res.json())
  //         .catch(() => null)
  //     )
  //   ).then(setAnimations);
  // }, []);


  return (
    <div
      className="p-6 border rounded-b-xl shadow-sm hover:shadow-md 
             bg-gradient-main 
             text-white text-center transition-all duration-300 space-y-5"
  
    >
      <Swiper
        navigation
        modules={[Navigation, Autoplay]}
        autoplay={{ delay: 5000 }}
        
        loop
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="max-w-7xl mx-auto px-2 flex md:flex-col lg:flex-row items-center justify-between gap-10 min-h-[70vh]">
              {/* Left Content */}
              <div className=" flex-1 space-y-4">
                <h1 className="text-white lg:text-7xl font-bold">
                  {slide.title}
                </h1>
                <h2 className="sm:text-xl md:text-2xl lg:text-2xl">{slide.subTitle}</h2>
                <p className="text-base md:text-md lg:text-lg text-accent">
                  {slide.description}
                </p>
                <button className="bg-white text-secondary font-semibold px-5 py-2 rounded hover:bg-blue-100 transition">
                  {slide.buttonText}
                </button>
              </div>

              {/* Right Animation */}
              {/* <div className="flex-1">
                {animations[index] ? (
                  <Lottie
                    animationData={animations[index]}
                    loop
                    autoplay
                    className="w-full max-w-md mx-auto"
                  />
                ) : (
                  <p className="text-gray-700">Loading animation...</p>
                )}
              </div> */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroCarousel;
