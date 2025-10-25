import React, { useEffect, useState } from "react";
import CreateProfile from "./CreateProfile";
import GetProfile from "./GetProfile";
import { fetchWithAuth } from "../refreshtoken/api";

function ProfileWrapper() {
  const [hasProfile, setHasProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleProfileCreated = () => {
    setHasProfile(true);
  };

  useEffect(() => {
    const checkProfile = async () => {
      try {
        const data = await fetchWithAuth(
          "https://ecommerce-backend-y1bv.onrender.com/api/user/get-profile"
        );
        setHasProfile(!!data?.profile);
      } catch (err) {
        setHasProfile(false);
      } finally {
        setLoading(false);
      }
    };

    checkProfile();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-[#00172e] to-[#003366]">
        <div className="bg-white/10 text-white px-8 py-4 rounded-2xl shadow-xl backdrop-blur-md animate-pulse">
          <p className="text-lg font-medium tracking-wide">Loading profile...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#cbd5e1] to-[#e2e8f0] px-4 py-10">
      {/* Main Container */}
      <div className="w-full max-w-5xl bg-white shadow-3xl rounded-3xl overflow-hidden border border-gray-200">

        {/* Header Section */}
        <div className="bg-gradient-to-r from-[#002349] to-[#004080] p-6 sm:p-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-wide">
            {hasProfile ? "Your Profile" : "Create Your Profile"}
          </h1>
          <p className="text-gray-200 mt-3 text-sm sm:text-base md:text-lg">
            {hasProfile
              ? "View and manage your personal details, addresses, and preferences."
              : "Fill in your personal details to get started with your account."}
          </p>
        </div>

        {/* Body Section */}
        <div className="p-6 sm:p-8 md:p-10 lg:p-14 bg-gradient-to-br from-white via-gray-50 to-gray-100">
          <div
            className="
              bg-white/90 
              backdrop-blur-lg 
              rounded-2xl 
              shadow-lg 
              p-6 sm:p-8 md:p-10 
              transition-transform 
              hover:scale-[1.01]
              focus-within:ring-4 
              focus-within:ring-[#957C3D] 
              focus-within:ring-offset-2 
              focus-within:ring-offset-gray-100
            "
          >
            {hasProfile ? (
              <div className="animate-fadeIn">
                <GetProfile />
              </div>
            ) : (
              <div className="animate-fadeIn">
                <CreateProfile onProfileCreated={handleProfileCreated} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileWrapper;
