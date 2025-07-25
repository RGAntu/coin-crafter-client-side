import React from 'react';
import { Link } from 'react-router';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../../hooks/useAuth';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';


const BuyerHome = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: stats = {}, isLoading } = useQuery({
    queryKey: ['buyer-stats', user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/buyer/stats?email=${user.email}`);
      return res.data;
    },
    enabled: !!user?.email,
  });

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="p-4 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <div className="card bg-blue-100 shadow-md p-6 rounded-2xl">
        <h2 className="text-xl font-bold">My Tasks</h2>
        <p className="text-3xl">{stats.totalTasks || 0}</p>
      </div>
      <div className="card bg-green-100 shadow-md p-6 rounded-2xl">
        <h2 className="text-xl font-bold">Tasks to Review</h2>
        <p className="text-3xl">{stats.pendingReviews || 0}</p>
        <Link to="/dashboard/buyer/review-submissions" className="btn mt-4">
          Review Now
        </Link>
      </div>
      <div className="card bg-yellow-100 shadow-md p-6 rounded-2xl">
        <h2 className="text-xl font-bold">Total Paid</h2>
        <p className="text-3xl">${stats.totalPaid || 0}</p>
      </div>
    </div>
  );
};

export default BuyerHome;