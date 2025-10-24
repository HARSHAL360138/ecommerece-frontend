import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    try {
      const res = await axios.post(
        "https://ecommerce-backend-y1bv.onrender.com/api/user/login",
        formData
      );
      if (res.status === 200 && res.data.accessToken) {
        localStorage.setItem("accessToken", res.data.accessToken);
        localStorage.setItem("refreshToken", res.data.refreshToken);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        navigate("/home");
      } else {
        throw new Error("Invalid response");
      }
    } catch (error) {
      console.error("Login failed:", error);
      setMessage("Login failed. Check your credentials or network.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#EFFAFD] to-white relative overflow-hidden font-poppins">
      {/* Floating circles */}
      <div className="absolute top-10 left-10 w-60 h-60 bg-[#002349] rounded-full opacity-10 blur-3xl animate-bounce-slow"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#957C3D] rounded-full opacity-10 blur-3xl animate-bounce-slow-reverse"></div>

      {/* Back to Home */}
      <Link
        to="/hero-section"
        className="absolute top-6 left-6 bg-[#002349] text-white px-4 py-2 rounded-md shadow-md hover:bg-[#001833] transition"
      >
        ← Back to Home
      </Link>

      {/* Form Card */}
      <div className="relative z-10 bg-white/80 backdrop-blur-xl p-10 rounded-2xl shadow-2xl w-full max-w-md border border-[#002349]/10 hover:scale-105 transition-transform duration-300">
        <h1 className="text-4xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#002349] to-[#957C3D] animate-gradient">
          Welcome Back
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Sign in to your account and continue shopping
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-md border border-[#002349]/20 bg-white focus:ring-2 focus:ring-[#957C3D] outline-none"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-md border border-[#002349]/20 bg-white focus:ring-2 focus:ring-[#957C3D] outline-none"
            required
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-gradient-to-r from-[#002349] to-[#957C3D] text-white font-semibold rounded-md hover:opacity-90 transition disabled:opacity-60"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        {message && (
          <p className="text-center mt-4 text-[#002349] font-medium animate-pulse">{message}</p>
        )}

        <div className="text-center mt-6 text-gray-600">
          Don't have an account?{" "}
          <Link to="/signup" className="text-[#957C3D] font-semibold hover:underline">
            Create one
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
