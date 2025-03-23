import React, { useState } from "react";
import { Form } from "react-router-dom";
import { register } from "../services/authService";

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await register({ username, email, password });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="border p-5 m-10">
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
          email
          <input
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
    </div>
  );
};

export default RegisterPage;
