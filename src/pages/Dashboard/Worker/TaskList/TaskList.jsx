import React from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import TaskCard from "../components/TaskCard/TaskCard";



const TaskList = () => {
  const axiosSecure = useAxiosSecure();


  const { data: tasks = [], isLoading, isError } = useQuery({
    queryKey: ["tasks-available"],
    queryFn: async () => {
      const res = await axiosSecure.get("/tasks/available");
      return res.data;
    },
  });

  if (isLoading) {
    return (
      <div className="text-center mt-10">
        <span className="loading loading-spinner loading-lg text-primary"></span>
        <p>Loading tasks...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-center mt-10 text-red-500">
        <p>Failed to fetch tasks. Please try again later.</p>
      </div>
    );
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-6 text-center">Available Tasks</h2>

      {tasks.length === 0 ? (
        <p className="text-center text-gray-500">No tasks available at this time.</p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
  {tasks.map(task => (
    <TaskCard key={task._id} task={task} />
  ))}
</div>

      )}
    </div>
  );
};

export default TaskList;
