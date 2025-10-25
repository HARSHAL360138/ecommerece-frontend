import React, { useEffect, useState } from "react";
import { fetchWithAuth } from "../refreshtoken/api";
import { useNavigate } from "react-router-dom";

function GetProfile() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [bgColor, setBgColor] = useState("bg-gray-400");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await fetchWithAuth(
          "https://ecommerce-backend-y1bv.onrender.com/api/user/get-profile"
        );
        setProfile(data.profile);

        if (!data.profile.profileImage) {
          const colors = [
            "bg-red-500", "bg-green-500", "bg-blue-500",
            "bg-yellow-500", "bg-indigo-500", "bg-purple-500",
            "bg-pink-500", "bg-teal-500", "bg-orange-500"
          ];
          let hash = 0;
          const name = data.profile.user.name || "";
          for (let i = 0; i < name.length; i++) {
            hash = name.charCodeAt(i) + ((hash << 5) - hash);
          }
          setBgColor(colors[Math.abs(hash) % colors.length]);
        }

      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, []);

  const getInitial = (name) => (name ? name.charAt(0).toUpperCase() : "?");

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen text-lg font-medium text-gray-700">
        Loading...
      </div>
    );

  if (error)
    return (
      <div className="text-red-500 text-center mt-10 text-lg font-medium">
        {error}
      </div>
    );

  if (!profile)
    return (
      <div className="text-center mt-10 text-lg font-medium">
        No profile data found
      </div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 flex justify-center items-start py-12 px-4">
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
        
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0 p-6 border-b border-gray-100 bg-gradient-to-r from-indigo-50 to-white">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
            My Profile
          </h1>
          <button
  onClick={() => navigate("/edit-profile")}
  className="bg-blue-950 text-white px-5 py-2 rounded-lg hover:bg-[#957C3D] transition font-medium shadow-md"
>
  Edit Profile
</button>

        </div>

        {/* Profile Info Section */}
        <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Profile Image */}
          <div className="flex flex-col items-center md:items-start">
            {profile.profileImage ? (
              <img
                src={profile.profileImage}
                alt="Profile"
                className="w-40 h-40 sm:w-44 sm:h-44 rounded-full object-cover border-4 border-indigo-500 shadow-xl"
              />
            ) : (
              <div
                className={`w-40 h-40 sm:w-44 sm:h-44 rounded-full flex items-center justify-center text-white text-6xl font-bold shadow-xl ${bgColor}`}
              >
                {getInitial(profile.user.name)}
              </div>
            )}

            <p className="mt-4 text-lg font-semibold text-gray-800">
              {profile.user.name}
            </p>
            <p className="text-gray-500 text-sm">{profile.user.email}</p>
          </div>

          {/* Basic Details */}
          <div className="col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
            <div>
              <p className="font-semibold">Phone</p>
              <p>{profile.phone || "Not Provided"}</p>
            </div>
            <div>
              <p className="font-semibold">Gender</p>
              <p>{profile.gender || "Not Provided"}</p>
            </div>
            <div>
              <p className="font-semibold">Date of Birth</p>
              <p>
                {profile.dateOfBirth
                  ? new Date(profile.dateOfBirth).toLocaleDateString()
                  : "Not Provided"}
              </p>
            </div>
          </div>
        </div>

        {/* Addresses Section */}
        <div className="px-8 pb-10">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2">
            Addresses
          </h3>

          {profile.addresses.length > 0 ? (
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
              {profile.addresses.map((address) => (
                <div
                  key={address._id}
                  className="bg-gray-50 border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition"
                >
                  <p><span className="font-semibold">Street:</span> {address.street}</p>
                  <p><span className="font-semibold">City:</span> {address.city}</p>
                  <p><span className="font-semibold">State:</span> {address.state}</p>
                  <p><span className="font-semibold">Postal Code:</span> {address.postalCode}</p>
                  <p><span className="font-semibold">Country:</span> {address.country}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">No addresses available.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default GetProfile;
