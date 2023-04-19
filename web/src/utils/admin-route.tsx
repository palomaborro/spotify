import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { UserContext } from "../utils/user-context";

interface AdminRouteProps {
  path: string;
  element: React.ReactElement;
}

const AdminRoute: React.FC<AdminRouteProps> = ({ path, element }) => {
  const { user } = useContext(UserContext);

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (user.userRole !== "ADMIN") {
    return <Navigate to="/not-found" />;
  }

  return (
    <Routes>
      <Route path={path} element={element} />
    </Routes>
  );
};

export default AdminRoute;
