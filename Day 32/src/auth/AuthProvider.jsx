import React from "react";
import AuthContext from "./AuthContext";
import { useState } from "react";
import loginApi from "../api/authApi";

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("token"),
  );
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token"));

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const login = async (email, password) => {
    setLoading(true);
    setError(null);

    try {
      const res = await loginApi(email, password);
      localStorage.setItem("token", res.token);
      setToken(res.token);
      setUser(res.user);
      setIsAuthenticated(true);
      return true;
    } catch (error) {
      setError(error.message || "Login Failed");
      return false;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    setToken(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{ user, token, isAuthenticated, loading, error, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
