import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Samiul Islam",
    position: "Buyer",
    feedback: "Love the clean UI and how easy it is to hire.",
    img: "https://i.ibb.co/Z6wyNnRT/harper-clark11.jpg",
    earned: "$2,960",
    tasks: 58,
  },
  {
    name: "Ritu Das",
    position: "Worker",
    feedback: "Great experience, highly recommend to students.",
    img: "https://i.ibb.co/yFRLCsfZ/mia-taylor9.jpg",
    earned: "$890",
    tasks: 156,
  },
  {
    name: "Nayan Ahmed",
    position: "Buyer",
    feedback: "The task approval is fast and simple. Impressed!",
    img: "https://i.ibb.co/ymfQHBgZ/lucas-anderson8.jpg",
    earned: "$3,300",
    tasks: 73,
  },
  {
    name: "Salma Akter",
    position: "Worker",
    feedback: "I’m earning daily from home. Amazing site!",
    img: "https://i.ibb.co/F4y4YPwm/emma-johnson3.jpg",
    earned: "$1,010",
    tasks: 111,
  },
  {
    name: "Arman Chowdhury",
    position: "Buyer",
    feedback: "No spam, real workers doing real work.",
    img: "https://i.ibb.co/FqYDp7H3/jackson-lee6.jpg",
    earned: "$4,100",
    tasks: 98,
  },
  {
    name: "Rina Khatun",
    position: "Worker",
    feedback: "I do tasks during my free time. Super useful!",
    img: "https://i.ibb.co/60pzW2Cf/amelia-wilson7.jpg",
    earned: "$730",
    tasks: 102,
  },
];

const TestimonialSlider = () => {
  return (
    <div className="py-10 px-4 bg-white">
      <div className="text-center space-y-5 py-8">
        <h1 className="text-4xl font-bold">What Our Community Says</h1>
        <p className="text-lg text-accent">
          Hear from thousands of satisfied workers and buyers who have found
          success on our platform
        </p>
      </div>
      <Swiper
        modules={[Pagination, Autoplay]}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        spaceBetween={30}
      >
        {testimonials.map((t, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
              <FaQuoteLeft className="text-blue-400 text-2xl mb-2" />

              <div className="flex mb-2 text-yellow-500">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <FaStar key={i} />
                  ))}
              </div>

              <p className="text-gray-600 mb-4 text-sm">"{t.feedback}"</p>

              <div className="bg-blue-50 flex justify-between p-3 rounded-lg text-sm font-medium mb-4">
                <span className="text-green-600">
                  {t.earned}
                  <br />
                  <span className="text-gray-400 font-normal">Earned</span>
                </span>
                <span className="text-blue-600">
                  {t.tasks}
                  <br />
                  <span className="text-gray-400 font-normal">Tasks</span>
                </span>
              </div>

              <div className="flex items-center gap-3">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-semibold text-gray-800">
                    {t.name}
                  </p>
                  <p className="text-xs text-gray-500">{t.position}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialSlider;
