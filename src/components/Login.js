import React, { useState } from "react";
import { useNavigate } from "react-router-dom";  // Updated import
import axios from 'axios';


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();  // Use useNavigate instead of useHistory

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Assume you have an API call here to authenticate the user
      const response = await axios.post("http://localhost:5000/api/login", {
        email,
        password,
      });

      // After successful login, store token in localStorage
      localStorage.setItem("token", response.data.token);

      // Redirect to the dashboard or home page
      navigate("/dashboard");  // Use navigate to redirect
    } catch (error) {
      alert("Login failed");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
