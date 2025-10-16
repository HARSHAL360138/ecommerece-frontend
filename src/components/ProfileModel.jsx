



import React, { useEffect, useState } from "react";
import Logout from "../pages/Logout";

function ProfileModel({ isOpen, onClose, onLogout }) {
  const [profile, setProfile] = useState({ name: "", email: "" });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!isOpen) return; // fetch only when modal opens

    const token = localStorage.getItem("accessToken");

    fetch("https://ecommerce-backend-y1bv.onrender.com/api/user/profile", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        setProfile({ name: data.name, email: data.email });
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0  z-50 flex justify-start items-start mt-3">
      {/* Modal box moved to top-left */}
      <div className="bg-white rounded-lg p-6 w-80 relative mt-4 ml-4 shadow-lg">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>

        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">Error: {error}</p>}
        {!loading && !error && (
          <>
            <div className="flex flex-col items-center mb-4">
              <div className="w-16 h-16 bg-gray-200 rounded-full mb-2"></div>
              <h2 className="font-bold">{profile.name}</h2>
              <p className="text-sm text-gray-500">{profile.email}</p>
            </div>
            <ul>
              <li className="py-2 cursor-pointer">Account settings</li>
              <li
                className="py-2 cursor-pointer"
                onClick={() => {
                  onLogout(); // call the logout function from Navbar
                  onClose();
                }}
              >
                <Logout />
              </li>
            </ul>
          </>
        )}
      </div>
    </div>
  );
}

export default ProfileModel;
