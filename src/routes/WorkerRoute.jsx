import React from 'react';
import { Navigate, useLocation } from 'react-router';

import Loading from '../pages/shared/Loading/Loading';
import useAuth from '../hooks/useAuth';
import useUserRole from '../hooks/useUserRole';

const WorkerRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const { role, isRoleLoading } = useUserRole();
  const location = useLocation();

  if (loading || isRoleLoading) return <Loading />;

  if (!user || role !== 'worker') {
    return <Navigate to="/forbidden" state={{ from: location }} replace />;
  }

  return children;
};

export default WorkerRoute;
