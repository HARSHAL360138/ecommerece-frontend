import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    setLoading(true);
    try {
      // Get access token (if needed for authentication)
      const token = localStorage.getItem("accessToken");

      // Send logout request to backend
      await axios.post(
        "https://ecommerce-backend-y1bv.onrender.com/api/user/logout",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`, // optional — only if backend needs it
          },
        }
      );

      // Clear local storage
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("user");

      // Redirect to login
      navigate("/hero-section");
    } catch (error) {
      console.error("Logout failed:", error);
      navigate("/hero-section"); // even if logout API fails, still go to login
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
        <button
          onClick={handleLogout}
          disabled={loading}
        >
          {loading ? "Signning out..." : "Sign out"}
        </button>
      </>
  );
}

export default Logout;















