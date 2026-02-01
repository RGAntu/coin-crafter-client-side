import React from "react";
import { LuFileSpreadsheet } from "react-icons/lu";
import { TfiWrite } from "react-icons/tfi";
import { IoPhonePortrait } from "react-icons/io5";
import { RiSurveyLine } from "react-icons/ri";
import { MdReviews } from "react-icons/md";
import { BiSolidVideos } from "react-icons/bi";
import { AiOutlineTranslation } from "react-icons/ai";
import { MdAssistant } from "react-icons/md";
import { motion } from "motion/react";

const TaskTypes = () => {
  const tasks = [
    {
      title: "Data Entry & Research",
      icons: <LuFileSpreadsheet className="text-[#2688d9]" />,
    },
    {
      title: "Content Writing & Editing",
      icons: <TfiWrite className="text-[#2688d9]" />,
    },
    {
      title: "Social Media Engagement",
      icons: <IoPhonePortrait className="text-[#2688d9]" />,
    },
    {
      title: "Survey Participation",
      icons: <RiSurveyLine className="text-[#2688d9]" />,
    },
    {
      title: "Product Reviews",
      icons: <MdReviews className="text-[#2688d9]" />,
    },
    {
      title: "Image & Video Tasks",
      icons: <BiSolidVideos className="text-[#2688d9]" />,
    },
    {
      title: "Translation Services",
      icons: <AiOutlineTranslation className="text-[#2688d9]" />,
    },
    {
      title: "Virtual Assistance",
      icons: <MdAssistant className="text-[#2688d9]" />,
    },
  ];

  return (
    <div className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Available Task Types
        </h2>
        <p className="mt-3 text-gray-600">
          Choose from a wide variety of tasks that match your skills and
          interests.
        </p>

        {/* Task Boxes */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {tasks.map((task, index) => (
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.1 }}
              onHoverStart={() => console.log("hover started!")}
              key={index}
              className="bg-white py-4 px-6 rounded-lg shadow-sm border border-[#f7f7f7] text-gray-800 font-medium hover:shadow-md transition cursor-pointer"
            >
              <div className="flex flex-col justify-center gap-5">
                <div className=" text-4xl block mx-auto ">{task.icons}</div>
                <h2 className="text-base font-semibold">{task.title}</h2>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskTypes;
