import React, { useState } from "react";
import { useParams } from "react-router";
import { useQuery, useMutation } from "@tanstack/react-query";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useAuth from "../../../../hooks/useAuth";


const TaskDetails = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [details, setDetails] = useState("");

  const { data: task, isLoading } = useQuery({
    queryKey: ["task", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/tasks/${id}`);
      return res.data;
    },
  });

  const mutation = useMutation({
    mutationFn: async () => {
      const body = {
        task_id: id,
        task_title: task.task_title,
        payable_amount: task.payable_amount,
        worker_email: user.email,
        submission_details: details,
        worker_name: user.displayName,
        buyer_name: task.buyer_name,
        buyer_email: task.buyer_email,
        current_date: new Date().toISOString(),
        status: "pending",
      };
      return axiosSecure.post("/submissions", body);
    },
    onSuccess: () => {
      Swal.fire(" Success!", "Your submission has been sent for review.", "success");
      setDetails("");
    },
    onError: () => {
      Swal.fire(" Error", "Submission failed. Please try again.", "error");
    },
  });

  if (isLoading) return <p className="text-center mt-6">Loading task details...</p>;

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-3">{task.task_title}</h2>
      <p className="mb-4">{task.task_details}</p>
      <p className="text-green-600 font-semibold mb-4">
        Pays: {task.payable_amount} coins
      </p>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          mutation.mutate();
        }}
        className="space-y-4"
      >
        <textarea
          className="textarea textarea-bordered w-full"
          rows="5"
          required
          placeholder="Enter your submission details"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        />
        <button type="submit" className="btn btn-primary" disabled={mutation.isLoading}>
          {mutation.isLoading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default TaskDetails;
