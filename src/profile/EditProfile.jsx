import React, { useEffect, useState } from "react";
import { fetchWithAuth } from "../refreshtoken/api";
import { useNavigate } from "react-router-dom";

function EditProfile() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    phone: "",
    gender: "",
    dateOfBirth: "",
    profileImage: "",
    addresses: [{ street: "", city: "", state: "", postalCode: "", country: "" }],
    userName: "",
    email: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await fetchWithAuth(
          "https://ecommerce-backend-y1bv.onrender.com/api/user/get-profile"
        );
        setFormData({
          phone: data.profile.phone || "",
          gender: data.profile.gender || "",
          dateOfBirth: data.profile.dateOfBirth
            ? data.profile.dateOfBirth.split("T")[0]
            : "",
          profileImage: data.profile.profileImage || "",
          addresses: data.profile.addresses.length
            ? data.profile.addresses
            : [{ street: "", city: "", state: "", postalCode: "", country: "" }],
          userName: data.profile.user.name || "",
          email: data.profile.user.email || "",
        });
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (["street", "city", "state", "postalCode", "country"].includes(name)) {
      setFormData((prev) => ({
        ...prev,
        addresses: [{ ...prev.addresses[0], [name]: value }],
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("accessToken");
      const res = await fetch(
        "https://ecommerce-backend-y1bv.onrender.com/api/user/edit-profile",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(formData),
        }
      );
      if (!res.ok) throw new Error("Profile update failed");
      alert("Profile updated successfully!");
      navigate("/get-profile");
    } catch (err) {
      console.error(err);
      alert("Failed to update profile.");
    }
  };

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen text-lg font-medium text-[#002349]">
        Loading...
      </div>
    );

  if (error)
    return (
      <div className="text-red-500 text-center mt-10 text-lg font-medium">
        {error}
      </div>
    );

  return (
    <div className="flex justify-center items-center p-6 sm:p-10 bg-[#f5f7fa] min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-2xl rounded-3xl w-full max-w-2xl p-6 sm:p-10 border-t-8 border-[#002349] transition-all"
      >
        <h2 className="text-3xl font-bold text-[#002349] mb-6 text-center ">
          Edit Profile
        </h2>

        {/* --- Common Input Style --- */}
        {[
          { name: "userName", placeholder: "Full Name" },
          { name: "phone", placeholder: "Phone Number" },
          { name: "profileImage", placeholder: "Profile Image URL" },
        ].map((input) => (
          <input
            key={input.name}
            type="text"
            name={input.name}
            placeholder={input.placeholder}
            value={formData[input.name]}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 mb-4 rounded-lg focus:ring-2 focus:ring-[#957C3D] focus:outline-none transition"
            required={input.name !== "profileImage"}
          />
        ))}

        {/* Gender */}
        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          className="w-full border border-gray-300 p-3 mb-4 rounded-lg focus:ring-2 focus:ring-[#957C3D] focus:outline-none transition"
          required
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>

        {/* DOB */}
        <input
          type="date"
          name="dateOfBirth"
          value={formData.dateOfBirth}
          onChange={handleChange}
          className="w-full border border-gray-300 p-3 mb-4 rounded-lg focus:ring-2 focus:ring-[#957C3D] focus:outline-none transition"
          required
        />

        {/* Address Section */}
        <h3 className="font-semibold text-gray-700 mb-3 text-lg">Address:</h3>

        {["street", "city", "state", "postalCode", "country"].map((field) => (
          <input
            key={field}
            type="text"
            name={field}
            placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
            value={formData.addresses[0][field]}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 mb-3 rounded-lg focus:ring-2 focus:ring-[#957C3D] focus:outline-none transition"
          />
        ))}

        <button
          type="submit"
          className="w-full bg-[#002349] text-white py-3 rounded-lg hover:bg-[#957C3D] transition font-semibold text-lg shadow-md"
        >
          Update Profile
        </button>
      </form>
    </div>
  );
}

export default EditProfile;
