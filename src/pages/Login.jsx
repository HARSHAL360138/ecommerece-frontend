
// import { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// function Login() {
//   const [formData, setFormData] = useState({ email: "", password: "" });
//   const [message, setMessage] = useState("");
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setMessage("");

//     try {
//       const res = await axios.post(
//         "https://ecommerce-backend-y1bv.onrender.com/api/user/login",
//         formData
//       );

//       if (res.status === 200) {
//         localStorage.setItem("accessToken", res.data.accessToken);
//         localStorage.setItem("user", JSON.stringify(res.data.user));
//         navigate("/home");
//         window.location.reload(); // reload to update Navbar login state
//       }
//     } catch (error) {
//       console.error(error);
//       setMessage("Login failed. Check your credentials.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
//         <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">
//           Login
//         </h1>

//         <form onSubmit={handleSubmit}>
//           <input
//             type="email"
//             name="email"
//             placeholder="Enter your email"
//             value={formData.email}
//             onChange={handleChange}
//             className="w-full border p-2 mb-4 rounded-md"
//             required
//           />
//           <input
//             type="password"
//             name="password"
//             placeholder="Enter your password"
//             value={formData.password}
//             onChange={handleChange}
//             className="w-full border p-2 mb-6 rounded-md"
//             required
//           />
//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition disabled:opacity-50"
//           >
//             {loading ? "Logging in..." : "Login"}
//           </button>
//         </form>

//         {message && (
//           <p className="text-center mt-4 text-gray-700 font-medium">{message}</p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Login;



























import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await axios.post(
        "https://ecommerce-backend-y1bv.onrender.com/api/user/login",
        formData
      );

      if (res.status === 200) {
        localStorage.setItem("accessToken", res.data.accessToken);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        navigate("/home");
        window.location.reload(); // reload to update Navbar login state
      }
    } catch (error) {
      console.error(error);
      setMessage("Login failed. Check your credentials.");
    } finally {
      setLoading(false);
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

      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          Login
        </h1>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border p-2 mb-4 rounded-md"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border p-2 mb-6 rounded-md"
            required
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition disabled:opacity-50"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        {message && (
          <p className="text-center mt-4 text-gray-700 font-medium">{message}</p>
        )}

        {/* Go to Signup Button */}
        <div className="text-center mt-6">
          <p className="text-gray-600">Don't have an account?</p>
          <Link
            to="/signup"
            className="text-blue-600 font-medium hover:underline"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
