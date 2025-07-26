import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import useUserRole from "../../../hooks/useUserRole";
import Loading from "../../shared/Loading/Loading";


const DashboardHome = () => {
  const navigate = useNavigate();
  const { role, isRoleLoading } = useUserRole();

  useEffect(() => {
    if (!isRoleLoading) {
      switch (role) {
        case "buyer":
          navigate("/dashboard/buyerHome");
          break;
        case "worker":
          navigate("/dashboard/workerHome");
          break;
        case "admin":
          navigate("/dashboard/adminHome");
          break;
        default:
          navigate("/forbidden");
      }
    }
  }, [role, isRoleLoading, navigate]);

  if (isRoleLoading) return <Loading />;

  return null;
};

export default DashboardHome;
