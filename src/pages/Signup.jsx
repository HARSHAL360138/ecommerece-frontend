
import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://ecommerce-backend-y1bv.onrender.com/api/user/signup",
        formData
      );
      setMessage("Signup successful!");
      console.log(response.data);
    } catch (error) {
      console.error(error);
      setMessage("Signup failed. Please try again.");
    }
  };

  return (
    <div className="relative flex justify-center items-center min-h-screen bg-gray-100">
      {/* Back to Hero Section Button (Top-Left) */}
      <Link
        to="/hero-section"
        className="absolute top-4 left-4 bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition"
      >
        ← Home
      </Link>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-md w-96"
      >
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
          Sign Up
        </h2>

        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded-md"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded-md"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded-md"
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition"
        >
          Sign Up
        </button>

        {message && (
          <p className="text-center mt-4 text-sm text-gray-600">{message}</p>
        )}

        {/* Go to Login Button */}
        <div className="text-center mt-6">
          <p className="text-gray-600">Already have an account?</p>
          <Link
            to="/login"
            className="text-blue-600 font-medium hover:underline"
          >
            Login
          </Link>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
