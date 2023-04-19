// @ts-nocheck
import React, { useState, useEffect } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch users from the API and set the state
    // Replace with your API call
  }, []);

  const deleteUser = (userId) => {
    // Delete user from the API and update the state
    // Replace with your API call
  };

  const toggleAdmin = (userId) => {
    // Update user admin permissions in the API and update the state
    // Replace with your API call
  };

  return (
    <div>
      <h1>Users Management</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Admin</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.isAdmin ? "Yes" : "No"}</td>
              <td>
                <button onClick={() => deleteUser(user.id)}>Delete</button>
                <button onClick={() => toggleAdmin(user.id)}>
                  {user.isAdmin ? "Revoke Admin" : "Make Admin"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
