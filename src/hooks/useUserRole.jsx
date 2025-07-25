import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";


const useUserRole = () => {
  const { user, loading } = useAuth(); // ensure loading is available
  const axiosSecure = useAxiosSecure();

  const {
    data: roleData,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["user-role", user?.email],
    enabled: !!user?.email && !loading, // only run when user is available
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/role?email=${user.email}`);
      console.log(res)
      return res.data;
    },
  });

  return {
    role: roleData?.role || "user",
    isRoleLoading: isLoading,
    isRoleError: isError,
    roleError: error,
    refetchRole: refetch,
  };
};

export default useUserRole;
