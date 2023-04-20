import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../utils/user-context";

const PrivateRoute: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const { user } = useContext(UserContext);

  if (!user.isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

export default PrivateRoute;
