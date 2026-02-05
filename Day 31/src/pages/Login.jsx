import React from "react";
import useAuth from "../auth/useAuth";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/dashboard"

  const handleLogin = () => {
    login();
    navigate(from, {replace:true})
  };

  return (
    <div>
      <h1>This is Login Page</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
