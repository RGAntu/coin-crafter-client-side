// src/hooks/useCoinBalance.js
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useCoinBalance = () => {
  const axiosSecure = useAxiosSecure();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["coin-balance"],
    queryFn: async () => {
      const res = await axiosSecure.get("/submissions/coin-balance");
      return res.data; // Should return { totalCoins: 300 }
    },
  });

  return { totalCoins: data?.totalCoins || 0, isLoading, isError };
};

export default useCoinBalance;
