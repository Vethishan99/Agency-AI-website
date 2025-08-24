import React from "react";
import Title from "./Title";
import assets from "../assets/assets";

const OurWork = () => {
  const workData = [
    {
      title: "Mobile App Marketing",
      description:
        "We turn bold ideas into powerful digital solutions that connect, engage...",
      Image: assets.work_mobile_app,
    },
    {
      title: "Dashboard Management",
      description: "We help you execute your plan and deliver results.",
      Image: assets.work_dashboard_management,
    },
    {
      title: "Fitness app promotion",
      description:
        "We help you create a marketing strategy that drives results.",
      Image: assets.work_fitness_app,
    },
  ];
  return (
    <div
      id="our-work"
      className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white"
    >
      <Title
        title="Our latest work"
        desc="From strategy to execution, we craft digital solution that move your business forward."
        className="text-2xl font-bold mb-4"
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {workData.map((work, index) => (
          <div
            key={index}
            className="hover:scale-102 duration-500 transition-all cursor-pointer"
          >
            <img src={work.Image} alt="" className="w-full rounded-xl" />
            <h3 className="mt-3 mb-3 text-lb font-semibold">{work.title}</h3>
            <p className="text-sm opacity-60 w-5/6">{work.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurWork;
