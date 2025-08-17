import React from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const BestWorkers = () => {
  const axiosSecure = useAxiosSecure();

  const { data: workers = [], isLoading, isError } = useQuery({
    queryKey: ["top-workers"],
    queryFn: async () => {
      const res = await axiosSecure.get("/workers/top");
      return res.data;
    },
  });

  if (isLoading) return <p>Loading top workers...</p>;
  if (isError) return <p>Error loading top workers.</p>;

  return (
    <div className=" p-4 my-10 ">
      <h2 className="text-3xl font-bold mb-2 text-center">Top Performing Workers</h2>
      <p className="text-accent text-center mb-5">Meet our workers who have earned the most through completing tasks</p>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-6 gap-4">
        {workers.map((worker) => (
          <div
            key={worker._id}
            className="flex flex-col items-center p-4 border rounded bg-green-50 shadow hover:shadow-lg transition"
          >
            <img
              src={worker.photo}
              alt={worker.name}
              className="w-20 h-20 rounded-full border-2 border-primary  object-cover mb-2"
            />
            <h3 className="font-semibold text-center">{worker.name}</h3>
            <p className="text-sm text-gray-600 mt-1">Coins: {worker.coins}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestWorkers;
