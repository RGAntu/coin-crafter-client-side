import React from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { GrTrophy } from "react-icons/gr";
import Loading from "../../shared/Loading/Loading.jsx";

const BestWorkers = () => {
  const axiosSecure = useAxiosSecure();

  const {
    data: workers = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["top-workers"],
    queryFn: async () => {
      const res = await axiosSecure.get("/workers/top");
      return res.data;
    },
  });

  if (isLoading) return <Loading></Loading>;
  if (isError) return <p>Error loading top workers.</p>;

  return (
    <div className=" p-4 my-10 ">
      <h2 className="text-3xl font-bold mb-2 text-center">
        Top Performing Workers
      </h2>
      <p className="text-accent text-center mb-5">
        Meet our workers who have earned the most through completing tasks
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-6 gap-4 ">
        {workers.map((worker, index) => (
          <div
            key={worker._id}
            className="flex flex-col items-center p-4 border border-gray-200 rounded-xl bg-white  shadow hover:shadow-lg transition relative"
          >
            <span className="absolute top-20 right-40  bg-gradient-main text-white text-xs px-2 py-1 rounded-full">
              #{index + 1}
            </span>
            {index < 6 && (
              <span className="absolute top-3 right-3 bg-gradient-main rounded-full text-white text-xl p-3">
                <GrTrophy />
              </span>
            )}
            <img
              src={worker.photo}
              alt={worker.name}
              className="w-20 h-20 rounded-full border-2 border-primary  object-cover mb-2"
            />
            <h3 className="font-bold text-xl text-center hover:text-gradient-main">
              {worker.name}
            </h3>
            <div className="flex justify-between w-full ">
              <p className="text-sm text-gray-600 mt-1"> Total Coins </p>
              <p className="font-bold text-gradient-main">{worker.coins}</p>
            </div>
            <div className="flex justify-between w-full">
              <p className="text-sm text-gray-600">Rating</p>
              <p className="text-md">5.0 {worker.rating}/4.6</p>
            </div>

            {/* <p className="text-sm text-blue-600">
  {worker.tasksCompleted} Tasks Completed
</p> */}

            <button className="btn border-none text-primary rounded-xl">
              <GrTrophy /> Top Performer
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestWorkers;
