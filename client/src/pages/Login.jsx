import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";

const Login = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(inputs);
      navigate("/");
    } catch (err) {
      setError(err.response?.data || "Login failed");
    }
  };

  return (
    <div className="flex flex-col gap-5 items-center justify-center h-screen bg-gray-950">
      <form
        className="flex flex-col gap-4 bg-gray-400 p-6 rounded-lg"
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl text-center font-bold">Login</h1>
        <input
          className="text-lg text-black border border-gray-300 rounded p-2"
          type="text"
          placeholder="Username"
          name="username"
          required
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          className="text-lg text-black border border-gray-300 rounded p-2"
          required
          onChange={handleChange}
        />
        <button
          type="submit"
          className="text-black font-bold border border-gray-300 rounded p-2 bg-gray-200 hover:bg-gray-300 transition-colors"
        >
          Login
        </button>
        {error && <p className="text-red-600 text-sm">{error}</p>}
        <p className="text-center text-gray-700">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-500 hover:underline">
            Register here
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
