import React from "react";
import axios from "axios";

const axiosInstance = axios.create({
    // baseURL: `https://coin-crafter-server-weld.vercel.app`
    baseURL: `http://localhost:5000/`
})

const useAxios = () => {
    return axiosInstance;
};

export default useAxios;