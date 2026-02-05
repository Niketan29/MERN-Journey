import React from "react";
import useAuth from "./useAuth";
import { Navigate, useLocation } from "react-router-dom";

const RequireAuth = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const location = useLocation()

  if (!isAuthenticated) {
    return <Navigate to="/login" replace state={{from: location}}/>;
  }
  return children;
};

export default RequireAuth;
