
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
    addresses: [
      {
        street: "",
        city: "",
        state: "",
        postalCode: "",
        country: "",
      },
    ],
    userName: "",
    email: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [initialBg, setInitialBg] = useState("bg-gray-400"); // Background color for initial

  // Fetch profile on load
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
            : [
                {
                  street: "",
                  city: "",
                  state: "",
                  postalCode: "",
                  country: "",
                },
              ],
          userName: data.profile.user.name || "",
          email: data.profile.user.email || "",
        });

        // Set dynamic background color for initial
        if (!data.profile.profileImage) {
          const colors = [
            "bg-red-500",
            "bg-green-500",
            "bg-blue-500",
            "bg-yellow-500",
            "bg-indigo-500",
            "bg-purple-500",
            "bg-pink-500",
            "bg-teal-500",
            "bg-orange-500",
          ];
          let hash = 0;
          const name = data.profile.user.name || "";
          for (let i = 0; i < name.length; i++) {
            hash = name.charCodeAt(i) + ((hash << 5) - hash);
          }
          setInitialBg(colors[Math.abs(hash) % colors.length]);
        }
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
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
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

  const getInitial = (name) => (name ? name.charAt(0).toUpperCase() : "?");

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen text-lg font-medium">
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
    <div className="flex flex-col lg:flex-row p-4 lg:p-10 bg-gray-100 min-h-screen gap-10">
      {/* Left: Edit Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-xl rounded-2xl w-full lg:w-2/3 p-6 sm:p-10"
      >
        <h2 className="text-2xl font-bold text-gray-700 mb-6 text-center">
          Edit Profile
        </h2>

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="w-full border p-2 mb-4 rounded-md"
          required
        />

        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          className="w-full border p-2 mb-4 rounded-md"
          required
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>

        <input
          type="date"
          name="dateOfBirth"
          value={formData.dateOfBirth}
          onChange={handleChange}
          className="w-full border p-2 mb-4 rounded-md"
          required
        />

        <input
          type="text"
          name="profileImage"
          placeholder="Profile Image URL"
          value={formData.profileImage}
          onChange={handleChange}
          className="w-full border p-2 mb-4 rounded-md"
        />

        <h3 className="font-semibold text-gray-700 mb-2">Address:</h3>
        <input
          type="text"
          name="street"
          placeholder="Street"
          value={formData.addresses[0].street}
          onChange={handleChange}
          className="w-full border p-2 mb-3 rounded-md"
        />
        <input
          type="text"
          name="city"
          placeholder="City"
          value={formData.addresses[0].city}
          onChange={handleChange}
          className="w-full border p-2 mb-3 rounded-md"
        />
        <input
          type="text"
          name="state"
          placeholder="State"
          value={formData.addresses[0].state}
          onChange={handleChange}
          className="w-full border p-2 mb-3 rounded-md"
        />
        <input
          type="text"
          name="postalCode"
          placeholder="Postal Code"
          value={formData.addresses[0].postalCode}
          onChange={handleChange}
          className="w-full border p-2 mb-3 rounded-md"
        />
        <input
          type="text"
          name="country"
          placeholder="Country"
          value={formData.addresses[0].country}
          onChange={handleChange}
          className="w-full border p-2 mb-6 rounded-md"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition font-semibold"
        >
          Update Profile
        </button>
      </form>

      {/* Right: Live Preview Panel */}
      <div className="hidden lg:flex flex-col w-1/3 bg-white shadow-lg rounded-2xl p-6 h-fit top-20">
        <h3 className="text-xl font-bold text-gray-700 mb-6 text-center">
          Preview
        </h3>
        <div className="flex flex-col items-center">
          {formData.profileImage ? (
            <img
              src={formData.profileImage}
              alt="Preview"
              className="w-32 h-32 rounded-full object-cover border-4 border-indigo-400 mb-4"
            />
          ) : (
            <div
              className={`w-32 h-32 rounded-full flex items-center justify-center text-white text-5xl font-bold border-4 border-indigo-400 mb-4 ${initialBg}`}
            >
              {getInitial(formData.userName)}
            </div>
          )}
          <h4 className="text-lg font-semibold text-gray-800">
            {formData.userName || "Your Name"}
          </h4>
          <p className="text-gray-500 text-sm mb-1">{formData.email || "email@example.com"}</p>
         <div className="flex flex-col justify-start items-start">
             <p className="text-gray-500 text-sm mt-2">
            <strong>Phone:</strong> {formData.phone}
          </p>
          <p className="text-gray-500 text-sm">
            <strong>Gender:</strong> {formData.gender}
          </p>
          <p className="text-gray-500 text-sm">
            <strong>DOB:</strong>{" "}
            {formData.dateOfBirth ? new Date(formData.dateOfBirth).toLocaleDateString() : ""}
          </p>
         </div>
          <div className="mt-4 text-gray-700 w-full">
            <strong>Address:</strong>
            <p>{formData.addresses[0].street}</p>
            <p>
              <span>{formData.addresses[0].city}</span>
              <span>{formData.addresses[0].state}</span>
              <span>{formData.addresses[0].postalCode}</span>
            </p>
            <p>{formData.addresses[0].country}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditProfile;
