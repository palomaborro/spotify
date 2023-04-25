import React, { useState, useEffect, useContext } from "react";

import { Link } from "react-router-dom";

import Button from "../../components/button/default";

import WhiteLogoIcon from "../../images/white-logo";

import { UserContext } from "../../utils/user-context";
import { UserType } from "../../utils/types";

import {
  Body,
  NavBody,
  LeftElement,
  MiddleElement,
  RightElement,
  LogoWrapper,
  UserList,
  ButtonWrapper,
  Container,
} from "./users.styled";

const Users = () => {
  const [users, setUsers] = useState<UserType[]>([]);

  const { user } = useContext(UserContext);

  const userId = user.userId;

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

  const checkUserRole = (currentRole: string) => {
    return currentRole === "ADMIN" ? "USER" : "ADMIN";
  };

  const toggleAdmin = async (userId: string) => {
    try {
      const token = user.token;

      const currentUser = users.find((user) => user._id === userId);
      if (!currentUser) return;
      const newRole = checkUserRole(currentUser.role);

      const response = await fetch(`http://localhost:3977/users/${userId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ role: newRole }),
      });

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(responseData.message);
      } else {
        setUsers((prevUsers) =>
          prevUsers.map((user) =>
            user._id === userId
              ? { ...user, role: newRole, isAdmin: newRole === "ADMIN" }
              : user
          )
        );
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <Body>
        <LogoWrapper>
          <Link to="/">
            <WhiteLogoIcon width={150} />
          </Link>
        </LogoWrapper>
        <NavBody>
          <LeftElement>
            <p>User</p>
          </LeftElement>
          <MiddleElement>
            <p>Email</p>
          </MiddleElement>
          <MiddleElement>
            <p>Admin</p>
          </MiddleElement>
          <RightElement>
            <p>Actions</p>
          </RightElement>
        </NavBody>
        {users
          .filter((user) => user._id !== userId)
          .map((user, index, arr) => (
            <UserList key={user._id} lastElement={index === arr.length - 1}>
              <LeftElement>
                <p>{user.name}</p>
              </LeftElement>
              <MiddleElement>
                <p>{user.email}</p>
              </MiddleElement>
              <MiddleElement>
                <p>{user.role === "ADMIN" ? "Yes" : "No"}</p>
              </MiddleElement>
              <RightElement>
                <ButtonWrapper>
                  <Button label="Delete" onClick={() => deleteUser(user._id)} />
                </ButtonWrapper>
                <Button
                  label={user.role === "ADMIN" ? "Revoke Admin" : "Make Admin"}
                  onClick={() => toggleAdmin(user._id)}
                />
              </RightElement>
            </UserList>
          ))}
      </Body>
    </Container>
  );
};

export default Users;
