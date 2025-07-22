import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const banners = [
  {
    id: 1,
    title: "Earn Money with Simple Tasks",
    subtitle: "Complete micro-tasks and get paid instantly",
    description:
      "Join thousands of workers earning money by completing simple online tasks. No experience needed!",
  },
  {
    id: 2,
    title: "Post Tasks, Get Results",
    subtitle: "Outsource your work to skilled professionals",
    description:
      "Get your tasks completed quickly and efficiently by our verified worker community.",
  },
  {
    id: 3,
    title: "Trusted by Thousands",
    subtitle: "Join the leading micro-tasking platform",
    description:
      "Secure payments, verified users, and 24/7 support make us the top choice for micro-work.",
  },
];

const HeroCarousel = () => {
  return (
    <div className="relative">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        showArrows={true}
        interval={4000}
        transitionTime={800}
      >
        {banners.map((banner) => (
          <div
            key={banner.id}
            className={`h-[500px] flex flex-col items-center justify-center 
              bg-blue-100 p-10`}
          >
            <h1 className="text-4xl font-bold mb-2 animate-fadeIn [animation-delay:0.2s]">
              {banner.title}
            </h1>
            <h3 className="text-xl mb-4  animate-fadeIn [animation-delay:0.6s]">
              {banner.subtitle}
            </h3>
            <p className="max-w-xl text-center mb-6 animate-fadeIn [animation-delay:1s]">
              {banner.description}
            </p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default HeroCarousel;
