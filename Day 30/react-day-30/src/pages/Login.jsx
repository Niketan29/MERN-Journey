import React from "react";
import { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!email.trim()) {
      newErrors.email = "Email is required";
    }

    if (!password.trim()) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if(Object.keys(newErrors).length > 0){
        setErrors(newErrors);
        return;
    }

    return console.log("Log in successful...");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input
          type="email"
          name="email"
          placeholder="Enter your email here"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <p>{errors.email}</p> }
        <Input
          type="password"
          name="password"
          placeholder="Enter your password here"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <p>{errors.password}</p> }
        <Button text="Login" type="submit" />
      </form>
    </div>
  );
};

export default Login;
