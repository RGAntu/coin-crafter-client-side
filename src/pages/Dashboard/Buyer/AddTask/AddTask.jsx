import React, { useState } from 'react';
import useAuth from '../../../../hooks/useAuth';

import { useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';


const imageHostingKey = import.meta.env.VITE_image_upload_key;
const imageUploadURL = `https://api.imgbb.com/1/upload?key=${imageHostingKey}`;

const AddTask = () => {

const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();
  const [uploading, setUploading] = useState(false);

  const onSubmit = async (data) => {
  const {
    task_title,
    task_detail,
    required_workers,
    payable_amount,
    completion_date,
    submission_info,
    task_image,
  } = data;

  const totalPay = parseInt(required_workers) * parseInt(payable_amount);

  try {
    const userRes = await axiosSecure.get(`/users/${user.email}`);
    const buyer = userRes.data;
    if (!buyer || buyer.coins < totalPay) {
      Swal.fire({
        icon: "warning",
        title: "Not enough coins",
        text: "Purchase more coins to add this task.",
      });
      return navigate("/dashboard/purchaseCoin");
    }

    setUploading(true);
    const formData = new FormData();
    formData.append("image", task_image[0]);
    const imgRes = await fetch(imageUploadURL, {
      method: "POST",
      body: formData,
    });
    const imgData = await imgRes.json();
    setUploading(false);

    if (imgData.success) {
      const newTask = {
        title: task_title,                         // ✅ name fixed
        task_details: task_detail,                // ✅ name fixed
        submission_details: submission_info,      // ✅ name fixed
        required_workers: parseInt(required_workers),
        payable_amount: parseInt(payable_amount),
        completion_date,
        task_image_url: imgData.data.display_url,
      };

      const taskRes = await axiosSecure.post("/tasks", newTask);
      if (taskRes.data.insertedId) {
        await axiosSecure.patch(`/users/coins/${user.email}`, {
          amount: -totalPay,
        });
        Swal.fire("Task Added", "Your task has been posted successfully!", "success");
        reset();
      }
    }
  } catch (err) {
    console.error(err);
    Swal.fire("Error", "Failed to add task. Try again.", "error");
  }
};



    return (
        <div className="max-w-3xl mx-auto p-6 shadow rounded bg-white">
      <h2 className="text-2xl font-bold mb-6">Add New Task</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input {...register("task_title")} required placeholder="Task Title" className="input input-bordered w-full" />
        <textarea {...register("task_detail")} required placeholder="Task Details" className="textarea textarea-bordered w-full" />
        <input type="number" {...register("required_workers")} required placeholder="Required Workers" className="input input-bordered w-full" />
        <input type="number" {...register("payable_amount")} required placeholder="Pay per Worker" className="input input-bordered w-full" />
        <input type="date" {...register("completion_date")} required className="input input-bordered w-full" />
        <input {...register("submission_info")} required placeholder="Submission Info" className="input input-bordered w-full" />
        <input type="file" {...register("task_image")} required className="file-input file-input-bordered w-full" />
        <button disabled={uploading} className="btn btn-primary w-full">
          {uploading ? "Uploading..." : "Add Task"}
        </button>
      </form>
    </div>
    );
};

export default AddTask;