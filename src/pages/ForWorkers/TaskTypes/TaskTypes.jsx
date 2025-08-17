import React from "react";

const TaskTypes = () => {
  const tasks = [
    "Data Entry & Research",
    "Content Writing & Editing",
    "Social Media Engagement",
    "Survey Participation",
    "Product Reviews",
    "Image & Video Tasks",
    "Translation Services",
    "Virtual Assistance",
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
            <div
              key={index}
              className="bg-white py-4 px-6 rounded-lg shadow-sm border text-gray-800 font-medium hover:shadow-md transition cursor-pointer"
            >
              {task}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskTypes;
