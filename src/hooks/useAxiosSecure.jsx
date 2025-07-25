import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
  baseURL: `http://localhost:5000`,
});

const useAxiosSecure = () => {
  const { user, logOut } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const setToken = async () => {
      if (user) {
        const token = await user.getIdToken(); //  this fetches the latest token
        axiosSecure.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      }
    };
    setToken();
  }, [user]);

  axiosSecure.interceptors.response.use(
    (res) => res,
    (error) => {
      const status = error.response?.status;
      if (status === 403) {
        navigate("/forbidden");
      } else if (status === 401) {
        logOut().then(() => {
          navigate("/login");
        });
      }
      return Promise.reject(error);
    }
  );

  return axiosSecure;
};

export default useAxiosSecure;
