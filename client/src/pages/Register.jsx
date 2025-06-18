import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
    email: "",
  });

  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // console.log(inputs);

  // handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/auth/register", inputs);
      navigate("/login");
    } catch (error) {
      setError(error.response.data);
    }
  };

  return (
    <div className="flex flex-col gap-5 items-center justify-center h-screen bg-gray-950">
      <form className="flex flex-col gap-4 bg-gray-400 p-6 rounded-lg">
        <h1 className="text-2xl text-center font-bold"> SIGN UP</h1>
        <input
          className="text-lg text-black border border-gray-300 rounded p-2"
          type="text"
          placeholder="Username"
          name="username"
          required
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="email"
          name="email"
          className="text-lg text-black border border-gray-300 rounded p-2"
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
          onClick={handleSubmit}
        >
          Register
        </button>
        {error && <p className="text-red-600 font-bold text-center">{error}</p>}
        <p className="text-center text-gray-700">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 hover:underline">
            Login here
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
