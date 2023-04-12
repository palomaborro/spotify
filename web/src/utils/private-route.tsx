import React, { useContext } from "react";
import { Route, Navigate } from "react-router-dom";
import { UserContext } from "../utils/user-context";

const PrivateRoute: React.FC<any> = ({ children, path, ...rest }) => {
  const { user } = useContext(UserContext);

  return user.isAuthenticated ? (
    <Route path={path} {...rest}>
      {children}
    </Route>
  ) : (
    <Navigate to="/login" replace />
  );
};

export default PrivateRoute;
