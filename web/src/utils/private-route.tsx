import React, { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { UserContext } from "../utils/user-context";

const PrivateRoute: React.FC = () => {
  const { user } = useContext(UserContext);

  return user.isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
