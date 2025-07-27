import React from "react";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

const ManageTasks = () => {
  const axiosSecure = useAxiosSecure();

  const {
    data: tasks = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["all-tasks"],
    queryFn: async () => {
      const res = await axiosSecure.get("/tasks");
      return res.data;
    },
  });

  const handleDelete = async (id) => {
    const confirm = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
    });

    if (confirm.isConfirmed) {
      const res = await axiosSecure.delete(`/tasks/${id}`);
      if (res.data.deletedCount > 0) {
        Swal.fire("Deleted!", "The task has been deleted.", "success");
        refetch();
      }
    }
  };

  if (isLoading) return <p className="text-center py-10">Loading...</p>;

  return (
    <div className="overflow-x-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Manage Tasks</h2>
      <table className="table w-full bg-white">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th>#</th>
            <th>Title</th>
            <th>Buyer</th>
            <th>Amount</th>
            <th>Workers</th>
            <th>Deadline</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <tr key={task._id}>
              <td>{index + 1}</td>
              <td>{task.task_title}</td>
              <td>{task.buyer_name}</td>
              <td>${task.payable_amount}</td>
              <td>{task.workers}</td>
              <td>{task.completion_date?.split("T")[0]}</td>
              <td>
                <button
                  onClick={() => handleDelete(task._id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageTasks;
