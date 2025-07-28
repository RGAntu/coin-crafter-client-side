import React from "react";
import { useNavigate } from "react-router";

const TaskCard = ({ task }) => {
  const navigate = useNavigate();
  console.log(task)

  return (
    <div className="border p-4 rounded-lg shadow-sm bg-white hover:shadow-md transition">
      <h3 className="text-lg font-semibold mb-1">{task.task_title}</h3>
      <p className="text-sm text-gray-600">Buyer: {task.created_by}</p>
      <p className="text-sm text-gray-800">Payable: {task.payable_amount} coins</p>
      <p className="text-sm text-gray-600 mb-3">
        Complete by:{" "}
        {task.completion_date
          ? new Date(task.completion_date).toLocaleDateString()
          : "N/A"}
      </p>
      <button
        className="btn btn-primary btn-sm w-full"
        onClick={() => navigate(`/dashboard/task-details/${task._id}`)}
      >
        View Details
      </button>
    </div>
  );
};

export default TaskCard;
