import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Lottie from "lottie-react";

const HeroCarousel = () => {
  const slides = [
    {
      title: "Unlock Your Earning Potential",
      description:
        "Join thousands of users completing simple tasks and earning real money. Your next gig is just a click away.",
      lottiePath: "/Finance.json",
      buttonText: "Start Earning",
    },
    {
      title: "Turn Free Time Into Income",
      description:
        "Get paid for everyday activities. Choose the tasks you love and get rewarded instantly.",
      lottiePath: "/money_lottie.json",
      buttonText: "Get Started",
    },
    {
      title: "Flexible Work, Real Rewards",
      description:
        "Work on your terms. Whether part-time or full-time, there’s a task waiting for you.",
      lottiePath: "/Business Analytics.json",
      buttonText: "Browse Tasks",
    },
  ];

  const [animations, setAnimations] = useState([]);

  // Fetch all Lottie files
  useEffect(() => {
    Promise.all(
      slides.map((slide) =>
        fetch(slide.lottiePath)
          .then((res) => res.json())
          .catch(() => null)
      )
    ).then(setAnimations);
  }, []);
  return (
    <div
      className="p-6 border rounded-b-xl shadow-sm hover:shadow-md 
             bg-gradient-to-r from-blue-500 to-teal-400 
             text-white hover:opacity-90 transition-all duration-300"
      style={{
        backgroundImage: "linear-gradient(to right, #3b82f6, #14b8a6)",
      }}
    >
      <Swiper
        navigation
        modules={[Navigation, Autoplay]}
        autoplay={{ delay: 4000 }}
        loop
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-10 min-h-[70vh]">
              {/* Left Content */}
              <div className="text-white flex-1 space-y-4">
                <h1 className="text-white text-3xl md:text-5xl lg:text-10xl font-bold">
                  {slide.title}
                </h1>
                <p className="text-base md:text-lg text-accent">
                  {slide.description}
                </p>
                <button className="bg-white text-secondary font-semibold px-5 py-2 rounded hover:bg-blue-100 transition">
                  {slide.buttonText}
                </button>
              </div>

              {/* Right Animation */}
              <div className="flex-1">
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
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroCarousel;
