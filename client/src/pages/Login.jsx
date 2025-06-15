import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="flex flex-col gap-5 items-center justify-center h-screen bg-gray-950">
        <form className="flex flex-col gap-4 bg-gray-400 p-6 rounded-lg">
          <h1 className="text-2xl text-center font-bold"> Login</h1>
          <input
            className="text-lg text-black border border-gray-300 rounded p-2"
            type="text"
            placeholder="Username"
            name="username"
            required
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="text-lg text-black border border-gray-300 rounded p-2"
            required
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            className="text-lg text-black border border-gray-300 rounded p-2"
            required
          />
          <button
            type="submit"
            className="text-black font-bold border border-gray-300 rounded p-2 bg-gray-200 hover:bg-gray-300 transition-colors"
          >
            Login
          </button>
          <p className="text-center text-gray-700">
            Don't have an account?{" "}
            <Link to="/register" className="text-blue-500 hover:underline">
              Register here
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
