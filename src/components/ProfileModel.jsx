import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle, FaHeart, FaShoppingCart, FaSignOutAlt } from "react-icons/fa";
import { fetchWithAuth } from "../refreshtoken/api";

function ProfileModel({ isOpen, onClose, onLogout }) {
  const [profileImage, setProfileImage] = useState("");
  const [profile, setProfile] = useState({ name: "", email: "" });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [bgColor, setBgColor] = useState("#1E3A8A");

  useEffect(() => {
    if (!isOpen) return;

    const fetchProfile = async () => {
      setLoading(true);
      setError(null);

      try {
        const data = await fetchWithAuth(
          "https://ecommerce-backend-y1bv.onrender.com/api/user/get-profile"
        );

        if (data?.profile) {
          setProfileImage(data.profile.profileImage || "");
          setProfile({
            name: data.profile.user.name || "",
            email: data.profile.user.email || "",
          });

          if (!data.profile.profileImage) {
            const colors = ["#1E3A8A", "#1E40AF", "#1E3A8A"];
            let hash = 0;
            const name = data.profile.user.name || "";
            for (let i = 0; i < name.length; i++) {
              hash = name.charCodeAt(i) + ((hash << 5) - hash);
            }
            setBgColor(colors[Math.abs(hash) % colors.length]);
          }
        } else {
          setError("No profile found");
        }
      } catch (err) {
        console.error("Profile fetch error:", err.message);
        if (err.message.includes("Unauthorized") || err.message.includes("Invalid token")) {
          localStorage.removeItem("accessToken");
          localStorage.removeItem("refreshToken");
          onLogout?.();
        }
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [isOpen, onLogout]);

  const getInitial = (name) => (name ? name.charAt(0).toUpperCase() : "?");

  if (!isOpen) return null;

  const buttonClass = "flex flex-col items-center justify-center p-3 rounded-xl bg-blue-950 text-white hover:bg-[#957C3D] transition shadow-md";

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-start pt-16 sm:pt-24 px-2">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black bg-opacity-25 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="relative bg-white rounded-2xl w-full max-w-xs sm:max-w-sm md:max-w-md shadow-2xl p-5 sm:p-6 flex flex-col items-center transition-transform duration-300">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-800 text-lg"
        >
          ✕
        </button>

        {loading && <p className="text-gray-500">Loading...</p>}
        {error && <p className="text-red-500 text-center">{error}</p>}

        {!loading && !error && (
          <>
            {profileImage ? (
              <img
                src={profileImage}
                alt="Profile"
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-2 border-[#1E3A8A] mb-3 shadow-lg"
              />
            ) : (
              <div
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center text-white text-3xl sm:text-4xl font-bold mb-3 shadow-lg"
                style={{ backgroundColor: bgColor }}
              >
                {getInitial(profile.name)}
              </div>
            )}

            <h2 className="text-lg sm:text-xl font-semibold text-gray-800 text-center">
              {profile.name}
            </h2>
            <p className="text-sm sm:text-base text-gray-500 mb-4 text-center">
              {profile.email}
            </p>

            {/* Buttons */}
            <div className="grid grid-cols-2 gap-3 w-full mt-2">
              <Link to="/profile-wrapper" onClick={onClose} className={buttonClass}>
                <FaUserCircle size={24} className="mb-1" />
                <span className="text-sm font-medium">Account</span>
              </Link>

              <Link to="/wishlist" onClick={onClose} className={buttonClass}>
                <FaHeart size={24} className="mb-1" />
                <span className="text-sm font-medium">Wishlist</span>
              </Link>

              <Link to="/cart" onClick={onClose} className={buttonClass}>
                <FaShoppingCart size={24} className="mb-1" />
                <span className="text-sm font-medium">Cart</span>
              </Link>

              <button
                onClick={() => {
                  onLogout();
                  onClose();
                }}
                className={buttonClass}
              >
                <FaSignOutAlt size={24} className="mb-1" />
                <span className="text-sm font-medium">Logout</span>
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default ProfileModel;