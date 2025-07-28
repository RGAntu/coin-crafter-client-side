import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { FaEdit, FaTrash } from "react-icons/fa";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const MyTasks = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [editTask, setEditTask] = useState(null);

  const {
    data: tasks = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["myTasks", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/tasks/my/${user?.email}`);
      return res.data;
    },
  });

  const handleDelete = async (id) => {
    const confirm = await Swal.fire({
      title: "Delete this task?",
      text: "Coins for uncompleted tasks will be refunded.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
    });

    if (confirm.isConfirmed) {
      const res = await axiosSecure.delete(`/tasks/${id}`);
      if (res.data.deleted) {
        Swal.fire("Deleted!", "Task deleted and coins refunded.", "success");
        refetch();
      }
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const form = e.target;
    const updated = {
      task_title: form.task_title.value,
      task_detail: form.task_detail.value,
      submission_info: form.submission_info.value,
    };
    const res = await axiosSecure.put(`/tasks/${editTask._id}`, updated);
    if (res.data.modifiedCount > 0) {
      Swal.fire("Success", "Task updated", "success");
      refetch();
      setEditTask(null);
    }
  };

  if (isLoading)
    return (
      <span className="loading loading-bars loading-lg mx-auto block"></span>
    );

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">My Tasks</h2>
      {tasks.length === 0 ? (
        <p className="text-center text-gray-500">No tasks found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Title</th>
                <th>Details</th>
                <th>Submission</th>
                <th>Payable</th>
                <th>Workers</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task) => (
                <tr key={task._id}>
                  <td>{task.task_title || "N/A"}</td>
                  <td>{task.task_detail || "N/A"}</td>
                  <td>{task.submission_info || "N/A"}</td>
                  <td>${task.payable_amount}</td>
                  <td>{task.required_workers}</td>
                  <td>{task.status}</td>
                  <td className="flex gap-2">
                    <button
                      onClick={() => setEditTask(task)}
                      className="btn btn-sm btn-info text-white"
                    >
                      <FaEdit />
                    </button>
                    <button
                      onClick={() => handleDelete(task._id)}
                      className="btn btn-sm btn-error text-white"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {editTask && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <form
            onSubmit={handleUpdate}
            className="bg-white p-6 rounded-lg shadow-md space-y-4 w-96"
          >
            <h3 className="text-xl font-semibold mb-2">Update Task</h3>
            <input
              type="text"
              name="task_title"
              defaultValue={editTask?.task_title || ""}
              className="input input-bordered w-full"
              required
            />
            <textarea
              name="task_detail"
              defaultValue={editTask?.task_detail || ""}
              className="textarea textarea-bordered w-full"
              required
            />
            <textarea
              name="submission_info"
              defaultValue={editTask?.submission_info || ""}
              className="textarea textarea-bordered w-full"
              required
            />

            <div className="flex justify-end gap-2">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setEditTask(null)}
              >
                Cancel
              </button>
              <button type="submit" className="btn btn-primary">
                Update
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default MyTasks;
