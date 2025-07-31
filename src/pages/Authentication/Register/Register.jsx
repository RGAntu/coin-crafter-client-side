import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router";
import axios from "axios";
import useAxios from "../../../hooks/useAxios";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { createUser, updateUserProfile } = useAuth();
  const [profilePic, setProfilePic] = useState("");
  const axiosInstance = useAxios();
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from || "/";

  const onSubmit = async (data) => {
    try {
      console.log("Form data:", data);

      // Create user in Firebase
      const result = await createUser(data.email, data.password);
      const user = result.user;
      console.log("Firebase user created:", user);

      // Assign coins based on role
      let coins = 0;
      if (data.role === "worker") coins = 10;
      else if (data.role === "buyer") coins = 50;

      // Prepare user info for backend DB
      const userInfo = {
        name: data.name,
        email: data.email,
        photo: profilePic,
        role: data.role,
        coins,
        created_at: new Date().toISOString(),
        last_log_in: new Date().toISOString(),
      };

      // Save user info in your backend
      const userRes = await axiosInstance.post("/users", userInfo);
      console.log("User info saved to DB:", userRes.data);

      // Update Firebase profile with name and photo
      await updateUserProfile({
        displayName: data.name,
        photoURL: profilePic,
      });

      // Navigate after successful registration
      navigate(from);
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert(
          "This email is already in use. Please login or use a different email."
        );
      } else {
        console.error("Registration failed:", error);
      }
    }
  };

  const handleImageUpload = async (e) => {
    const image = e.target.files[0];
    if (!image) return;

    const formData = new FormData();
    formData.append("image", image);

    const imageUploadUrl = `https://api.imgbb.com/1/upload?key=${
      import.meta.env.VITE_image_upload_key
    }`;

    try {
      const res = await axios.post(imageUploadUrl, formData);
      setProfilePic(res.data.data.url);
      // console.log("Image uploaded:", res.data.data.url);
    } catch (error) {
      console.error("Image upload failed:", error);
      alert("Image upload failed. Please try again.");
    }
  };

  return (
    <div className="card bg-base-100 w-full max-w-sm mx-auto shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-3xl font-bold">Create An Account!</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset className="fieldset space-y-3">
            {/* Name */}
            <label className="label">Name</label>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              className="input input-bordered"
              placeholder="Your Name"
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}

            {/* Upload Image */}
            <label className="label">Upload Image</label>
            <input
              type="file"
              onChange={handleImageUpload}
              className="file-input file-input-bordered"
            />

            {/* Email */}
            <label className="label">Email</label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email address",
                },
              })}
              className="input input-bordered"
              placeholder="Email"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}

            {/* Password */}
            <label className="label">Password</label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              className="input input-bordered"
              placeholder="Password"
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}

            {/* Role Select */}
            <label className="label">Select Role</label>
            <select
              {...register("role", { required: "Role selection is required" })}
              className="select select-bordered"
              defaultValue=""
            >
              <option value="" disabled>
                Choose role
              </option>
              <option value="worker">Worker</option>
              <option value="buyer">Buyer</option>
            </select>
            {errors.role && (
              <p className="text-red-500">{errors.role.message}</p>
            )}

            <button type="submit" className="btn btn-primary mt-4">
              Register
            </button>
          </fieldset>
        </form>
        <p className="mt-3">
          <small>
            Already have an account?{" "}
            <Link className="btn btn-link" to="/login">
              Login
            </Link>
          </small>
        </p>
      </div>
    </div>
  );
};

export default Register;
