// import React, { useState } from "react";
// import axios from "axios";
// import { Link, useNavigate } from "react-router-dom";
// import { Eye, EyeOff } from "lucide-react";

// const Register = () => {
//   const [formData, setFormData] = useState({ name: "", email: "", password: "" });
//   const [showPassword, setShowPassword] = useState(false);
//   const [message, setMessage] = useState("");
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setMessage("");
//     try {
//       const res = await axios.post(
//         "https://ecommerce-backend-y1bv.onrender.com/api/user/signup",
//         formData
//       );
//       if (res.status === 201) {
//         setMessage("Registration successful! Redirecting...");
//         setTimeout(() => navigate("/login"), 1500);
//       } else {
//         setMessage("Something went wrong. Try again.");
//       }
//     } catch (error) {
//       console.error(error);
//       setMessage("Email already exists or invalid input.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#EFFAFD] to-white relative overflow-hidden font-poppins">
//       {/* Floating circles */}
//       <div className="absolute top-10 left-10 w-60 h-60 bg-[#002349] rounded-full opacity-10 blur-3xl animate-bounce-slow"></div>
//       <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#957C3D] rounded-full opacity-10 blur-3xl animate-bounce-slow-reverse"></div>

//       {/* Back to Home */}
//       <Link
//         to="/hero-section"
//         className="absolute top-6 left-6 bg-[#002349] text-white px-4 py-2 rounded-md shadow-md hover:bg-[#001833] transition"
//       >
//         ← Back to Home
//       </Link>

//       {/* Form Card */}
//       <div className="relative z-10 bg-white/80 backdrop-blur-xl p-10 rounded-2xl shadow-2xl w-full max-w-md border border-[#002349]/10 hover:scale-105 transition-transform duration-300">
//         <h1 className="text-4xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#002349] to-[#957C3D] animate-gradient">
//           Create Account
//         </h1>
//         <p className="text-center text-gray-600 mb-8">
//           Join our community and start shopping today!
//         </p>

//         <form onSubmit={handleSubmit} className="space-y-5">
//           <input
//             type="text"
//             name="name"
//             placeholder="Full Name"
//             value={formData.name}
//             onChange={handleChange}
//             className="w-full px-4 py-3 rounded-md border border-[#002349]/20 bg-white focus:ring-2 focus:ring-[#957C3D] outline-none"
//             required
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Email Address"
//             value={formData.email}
//             onChange={handleChange}
//             className="w-full px-4 py-3 rounded-md border border-[#002349]/20 bg-white focus:ring-2 focus:ring-[#957C3D] outline-none"
//             required
//           />
//           <div className="relative">
//             <input
//               type={showPassword ? "text" : "password"}
//               name="password"
//               placeholder="Create Password"
//               value={formData.password}
//               onChange={handleChange}
//               className="w-full px-4 py-3 rounded-md border border-[#002349]/20 bg-white focus:ring-2 focus:ring-[#957C3D] outline-none pr-12"
//               required
//             />
//             <div className="absolute right-3 top-3 cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
//               {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
//             </div>
//           </div>
//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full py-3 bg-gradient-to-r from-[#002349] to-[#957C3D] text-white font-semibold rounded-md hover:opacity-90 transition disabled:opacity-60"
//           >
//             {loading ? "Registering..." : "Register"}
//           </button>
//         </form>

//         {message && (
//           <p className="text-center mt-4 text-[#002349] font-medium animate-pulse">{message}</p>
//         )}

//         <div className="text-center mt-6 text-gray-600">
//           Already have an account?{" "}
//           <Link to="/login" className="text-[#957C3D] font-semibold hover:underline">
//             Login
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;







  // src/pages/Register.jsx
import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { FaEye, FaEyeSlash, FaArrowLeft } from "react-icons/fa";
import { motion } from "framer-motion";
import registerBg from "../assets/3.jpg"; // background image

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    try {
      const res = await axios.post(
        "https://ecommerce-backend-y1bv.onrender.com/api/user/signup",
        formData
      );
      if (res.status === 201) {
        setMessage("Account created successfully! Redirecting...");
        setTimeout(() => navigate("/login"), 1500);
      } else {
        setMessage("Something went wrong. Try again.");
      }
    } catch (error) {
      console.error("Signup failed:", error);
      setMessage("Email already exists or invalid input.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-[#f5f5f5] overflow-hidden">
          {/* LEFT SIDE — IMAGE SECTION */}
          <div
            className="hidden md:flex w-1/2 bg-cover bg-center relative"
            style={{
              backgroundImage: `url(${registerBg})`,
              backgroundColor: "#4d4444",
              backgroundBlendMode: "overlay",
            }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/75 to-black/60 backdrop-blur-sm flex flex-col justify-center items-start px-10 lg:px-20 text-white relative overflow-hidden">
          {/* Floating Light Glow */}
          <div className="absolute inset-0 bg-gradient-radial from-[#c2a14c1a] via-transparent to-transparent blur-2xl animate-pulse opacity-70"></div>

          {/* LOGO */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h1 className="text-5xl font-extrabold tracking-tight drop-shadow-2xl">
              <span className="text-[#053f7c]">Fashion</span>
              <span className="text-[#c9a64d]">Hub</span>
            </h1>
          </motion.div>

          {/* HEADLINE */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl lg:text-6xl font-bold text-[#d3b463] mb-5 leading-tight drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)]"
          >
            Join the Experience
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-gray-200 text-lg max-w-md leading-relaxed mb-6"
          >
            Create your account today and explore our premium collection
            tailored just for you.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-sm text-gray-400 italic"
          >
            “Luxury begins with you.”
          </motion.p>

          {/* Decorative Line */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ delay: 0.8, duration: 1 }}
            className="mt-10 h-[2px] bg-gradient-to-r from-[#957C3D] via-white/70 to-transparent rounded-full w-full"
          ></motion.div>
        </div>
      </div>

      {/* RIGHT SIDE — REGISTER FORM */}
      <div className="flex flex-col justify-center w-full md:w-1/2 px-6 sm:px-10 lg:px-24 bg-white relative shadow-2xl">
        {/* BACK BUTTON */}
        <Link
          to="/hero-section"
          className="absolute top-6 left-6 flex items-center gap-2 text-[#002349] font-medium hover:text-[#957C3D] transition-all duration-300 group"
        >
          <div className="p-2 bg-white/70 backdrop-blur-md rounded-full shadow-md group-hover:bg-[#002349] transition-all duration-300">
            <FaArrowLeft className="text-[#002349] group-hover:text-white transition-all duration-300" />
          </div>
          <span className="hidden sm:block text-sm tracking-wide group-hover:text-[#957C3D] transition-all"></span>
        </Link>

        {/* FORM CONTAINER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-md w-full mx-auto bg-white/70 backdrop-blur-xl p-8 rounded-xl shadow-xl border border-gray-100"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#002349] mb-2 text-center">
            Create Account
          </h2>
          <p className="text-gray-600 mb-8 text-center text-sm md:text-base">
            Join us and start your shopping journey today!
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#957C3D] focus:border-[#957C3D] outline-none transition"
                placeholder="John Doe"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#957C3D] focus:border-[#957C3D] outline-none transition"
                placeholder="example@email.com"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Create Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#957C3D] focus:border-[#957C3D] outline-none pr-10 transition"
                  placeholder="Enter a strong password"
                  required
                />
                <span
                  className="absolute right-4 top-3.5 text-gray-500 cursor-pointer hover:text-[#957C3D] transition"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
            </div>

            {/* Submit Button */}
            <motion.button
              whileTap={{ scale: 0.96 }}
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-[#002349] text-white font-semibold rounded-md hover:bg-[#957C3D] hover:text-black shadow-lg transition-all duration-300"
            >
              {loading ? "Registering..." : "Register"}
            </motion.button>
          </form>

          {message && (
            <p className="text-center text-[#957C3D] font-medium mt-4 animate-pulse">
              {message}
            </p>
          )}

          <p className="text-center text-gray-600 mt-8 text-sm">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-[#957C3D] font-semibold hover:underline"
            >
              Login
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default Register;
