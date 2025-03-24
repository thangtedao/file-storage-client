import React, { useState } from "react";
import { Form, redirect, useNavigate } from "react-router-dom";
import { login } from "../services/authService";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await login(username, password);
      return navigate("/");
    } catch (error) {
      console.log(error);
      setError(error.response?.data?.message);
    }
  };

  return (
    <div className="border p-5 m-10 flex flex-col">
      <Form method="post" onSubmit={handleSubmit}>
        <label>
          username
          <input
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>

        <label>
          password
          <input
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <button type="submit">Submit</button>
      </Form>

      <div className="text-red-900">{error}</div>
    </div>
  );
};

export default LoginPage;
