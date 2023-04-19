import React, { useState, useEffect, useContext } from "react";

import { UserContext } from "../../utils/user-context";
import { UserType } from "../../utils/types";

const Users = () => {
  const [users, setUsers] = useState<UserType[]>([]);

  const { user } = useContext(UserContext);

  const userId = user.userId;

  console.log(userId);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("http://localhost:3977/users", {
          method: "GET",
        });

        const responseData = await response.json();

        if (!response.ok) {
          throw new Error(responseData.message);
        }
        setUsers(responseData.users);
        console.log(responseData.users);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUsers();
  }, []);

  const deleteUser = async (userId: string) => {
    try {
      const token = user.token;

      const response = await fetch(`http://localhost:3977/users/${userId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(responseData.message);
      }
      setUsers((prevUsers) => prevUsers.filter((user) => user._id !== userId));
    } catch (error) {
      console.error(error);
    }
  };

  const toggleAdmin = async (userId: string) => {
    try {
      const token = user.token;

      const response = await fetch(`http://localhost:3977/users/${userId}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(responseData.message);
      }
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user._id === userId ? { ...user, isAdmin: !user.isAdmin } : user
        )
      );
    } catch (error) {
      console.error(error);
    }
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
          {users
            .filter((user) => user._id !== userId)
            .map((user) => (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.isAdmin ? "Yes" : "No"}</td>
                <td>
                  <button onClick={() => deleteUser(user._id)}>Delete</button>
                  <button onClick={() => toggleAdmin(user._id)}>
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
