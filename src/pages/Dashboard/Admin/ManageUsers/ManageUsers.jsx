import React from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Loading from "../../../shared/Loading/Loading";


const ManageUsers = () => {
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();

  // Fetch all users
  const { data: users = [], isLoading } = useQuery({
    queryKey: ["all-users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin/users");
      return res.data;
    },
  });

  // Role update mutation
  const updateRoleMutation = useMutation({
    mutationFn: async ({ id, role }) => {
      const res = await axiosSecure.patch(`/admin/users/${id}/role`, { role });
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["all-users"]);
      Swal.fire("Success", "User role updated.", "success");
    },
    onError: () => Swal.fire("Error", "Failed to update role.", "error"),
  });

  // Delete user mutation
  const deleteMutation = useMutation({
    mutationFn: async (id) => {
      const res = await axiosSecure.delete(`/admin/users/${id}`);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["all-users"]);
      Swal.fire("Deleted", "User has been removed.", "success");
    },
    onError: () => Swal.fire("Error", "Failed to delete user.", "error"),
  });

  if (isLoading) return <Loading />;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-6">Manage Users</h2>
      {users.length === 0 ? (
        <p>No users found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            <thead>
              <tr>
                <th>Photo</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Change Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u) => (
                <tr key={u._id}>
                  <td>
                    <img src={u.photo} alt="User" className="w-10 h-10 rounded-full" />
                  </td>
                  <td>{u.name}</td>
                  <td>{u.email}</td>
                  <td>
                    <span className="badge badge-info capitalize">{u.role}</span>
                  </td>
                  <td>
                    {["admin", "buyer", "worker"].map((r) => (
                      <button
                        key={r}
                        className={`btn btn-xs mr-1 ${u.role === r ? "btn-disabled" : "btn-outline"}`}
                        onClick={() =>
                          updateRoleMutation.mutate({ id: u._id, role: r })
                        }
                      >
                        {r}
                      </button>
                    ))}
                  </td>
                  <td>
                    <button
                      className="btn btn-xs btn-error"
                      onClick={() =>
                        Swal.fire({
                          title: "Are you sure?",
                          text: "This action cannot be undone!",
                          icon: "warning",
                          showCancelButton: true,
                          confirmButtonText: "Yes, delete it!",
                        }).then((result) => {
                          if (result.isConfirmed) {
                            deleteMutation.mutate(u._id);
                          }
                        })
                      }
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ManageUsers;
