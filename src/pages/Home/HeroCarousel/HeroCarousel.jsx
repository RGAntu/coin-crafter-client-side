import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const HeroSection = () => {
  const slides = [
    {
      title: "Unlock Your Earning Potential",
      description:
        "Join thousands of users completing simple tasks and earning real money. Your next gig is just a click away.",
      image: "https://i.ibb.co/JWDc8r94/slide1.jpg",
      buttonText: "Start Earning",
    },
    {
      title: "Turn Free Time Into Income",
      description:
        "Get paid for everyday activities. Choose the tasks you love and get rewarded instantly.",
      image: "https://i.ibb.co/Q7H5MJQx/slide2.jpg",
      buttonText: "Get Started",
    },
    {
      title: "Flexible Work, Real Rewards",
      description:
        "Work on your terms. Whether part-time or full-time, there’s a task waiting for you.",
      image: "https://i.ibb.co/LsLx7Gj/slide3.jpg",
      buttonText: "Browse Tasks",
    },
  ];

  return (
    <div className="p-6 border rounded-2xl shadow-sm hover:shadow-md  bg-gradient-to-r from-[#cee2f3] to-[#cff8e1] text-white hover:opacity-90 transition-all duration-300"
            style={{
              backgroundImage: "linear-gradient(to right, #cee2f3, #cff8e1)",
            }}>
      <Swiper
        navigation
        modules={[Navigation, Autoplay]}
        autoplay={{ delay: 4000 }}
        loop
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-10 min-h-[70vh]">
              {/* Left Content */}
              <div className="text-white flex-1 space-y-4">
                <h1 className="text-3xl md:text-5xl font-bold">
                  {slide.title}
                </h1>
                <p className="text-base md:text-lg text-white/90">
                  {slide.description}
                </p>
                <button className="bg-white text-blue-600 font-semibold px-5 py-2 rounded hover:bg-blue-100 transition">
                  {slide.buttonText}
                </button>
              </div>

              {/* Right Image */}
              <div className="flex-1">
                <img
                  src={slide.image}
                  alt="Slide"
                  className="w-full max-w-md mx-auto rounded shadow-md"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSection;
