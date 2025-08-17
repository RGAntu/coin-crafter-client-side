import React from "react";

const TaskCategories = () => {
  const categories = [
    {
      title: "Data Entry & Research",
      priceRange: "$2-10 per task",
      description:
        "Product research, data collection, web scraping, and database management.",
    },
    {
      title: "Content Creation",
      priceRange: "$5-25 per task",
      description:
        "Article writing, blog posts, product descriptions, and social media content.",
    },
    {
      title: "Digital Marketing",
      priceRange: "$1-15 per task",
      description:
        "Social media engagement, reviews, SEO tasks, and online promotion.",
    },
    {
      title: "Administrative Tasks",
      priceRange: "$3-20 per task",
      description:
        "Email management, appointment scheduling, and virtual assistance.",
    },
    {
      title: "Creative Services",
      priceRange: "$10-50 per task",
      description:
        "Logo design, image editing, video creation, and graphic design.",
    },
    {
      title: "Technical Support",
      priceRange: "$5-30 per task",
      description:
        "Software testing, bug reporting, app reviews, and technical documentation.",
    },
  ];
  return (
    <section className="bg-base-200 py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-neutral-800">
          Popular Task Categories
        </h2>
        <p className="text-lg text-neutral-600 mb-12">
          Explore the types of tasks you can post and their typical pricing
          ranges.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="card bg-white p-6 rounded-2xl shadow-md border border-gray-200 text-left transition-all duration-300 ease-in-out hover:shadow-xl hover:border-blue-300"
            >
              <h3 className="text-xl font-semibold text-neutral-700 mb-2">
                {category.title}
              </h3>
              <p className="text-2xl font-bold text-blue-600 mb-4">
                {category.priceRange}
              </p>
              <p className="text-neutral-500 text-sm">{category.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TaskCategories;
