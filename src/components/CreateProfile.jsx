// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// function CreateProfile() {
//   const [formData, setFormData] = useState({
//     phone: "",
//     gender: "",
//     dateOfBirth: "",
//     profileImage: "",
//     addresses: [
//       {
//         street: "",
//         city: "",
//         state: "",
//         postalCode: "",
//         country: "",
//       },
//     ],
//   });

//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [userName, setUserName] = useState("");
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   // 🔁 Refresh token function
//   const refreshAccessToken = async () => {
//     try {
//       const refreshToken = localStorage.getItem("refreshToken");
//       if (!refreshToken) return false;

//       const res = await axios.post(
//         "https://ecommerce-backend-y1bv.onrender.com/api/user/refresh",
//         { refreshToken }
//       );

//       if (res.status === 200 && res.data.accessToken) {
//         localStorage.setItem("accessToken", res.data.accessToken);
//         return true;
//       }
//       return false;
//     } catch (err) {
//       console.error("Token refresh failed:", err);
//       return false;
//     }
//   };

//   // ✅ Auto login + token check logic
//   useEffect(() => {
//     const checkLogin = async () => {
//       const token = localStorage.getItem("accessToken");
//       const user = localStorage.getItem("user");

//       if (!token || !user) {
//         setIsLoggedIn(false);
//         return;
//       }

//       try {
//         const res = await fetch(
//           "https://ecommerce-backend-y1bv.onrender.com/api/user/profile",
//           {
//             method: "GET",
//             headers: {
//               "Content-Type": "application/json",
//               Authorization: `Bearer ${token}`,
//             },
//           }
//         );

//         if (res.status === 401) {
//           // Access token expired → try refresh
//           const refreshed = await refreshAccessToken();
//           if (refreshed) {
//             return checkLogin(); // retry once after refreshing
//           } else {
//             throw new Error("Refresh token invalid");
//           }
//         }

//         if (!res.ok) throw new Error("Profile fetch failed");
//         const data = await res.json();

//         setIsLoggedIn(true);
//         setUserName(data.name || JSON.parse(user).name);
//       } catch (err) {
//         console.error("Auto-login failed:", err);
//         localStorage.removeItem("accessToken");
//         localStorage.removeItem("refreshToken");
//         localStorage.removeItem("user");
//         setIsLoggedIn(false);
//       }
//     };

//     checkLogin();
//   }, []);

//   // 🧾 Handle input change
//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     if (["street", "city", "state", "postalCode", "country"].includes(name)) {
//       setFormData((prev) => ({
//         ...prev,
//         addresses: [{ ...prev.addresses[0], [name]: value }],
//       }));
//     } else {
//       setFormData((prev) => ({
//         ...prev,
//         [name]: value,
//       }));
//     }
//   };

//   // 🚀 Submit profile
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     const token = localStorage.getItem("accessToken");

//     try {
//       const res = await axios.post(
//         "https://ecommerce-backend-y1bv.onrender.com/api/user/create-profile",
//         formData,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       if (res.status === 201 || res.status === 200) {
//         alert("Profile created successfully!");
//         navigate("/home");
//       }
//     } catch (err) {
//       console.error("Profile creation failed:", err);
//       alert("Failed to create profile. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // 🧍 Show login warning if not logged in
//   if (!isLoggedIn) {
//     return (
//       <div className="flex justify-center items-center h-screen text-xl font-semibold text-gray-700">
//         Please log in to create your profile.
//       </div>
//     );
//   }

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white shadow-lg p-8 rounded-2xl w-full max-w-lg"
//       >
//         <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">
//           Create Profile
//         </h2>

//         <input
//           type="text"
//           name="phone"
//           placeholder="Phone Number"
//           value={formData.phone}
//           onChange={handleChange}
//           className="w-full border p-2 mb-4 rounded-md"
//           required
//         />

//         <select
//           name="gender"
//           value={formData.gender}
//           onChange={handleChange}
//           className="w-full border p-2 mb-4 rounded-md"
//           required
//         >
//           <option value="">Select Gender</option>
//           <option value="male">Male</option>
//           <option value="female">Female</option>
//           <option value="other">Other</option>
//         </select>

//         <input
//           type="date"
//           name="dateOfBirth"
//           value={formData.dateOfBirth}
//           onChange={handleChange}
//           className="w-full border p-2 mb-4 rounded-md"
//           required
//         />

//         <input
//           type="text"
//           name="profileImage"
//           placeholder="Profile Image URL"
//           value={formData.profileImage}
//           onChange={handleChange}
//           className="w-full border p-2 mb-4 rounded-md"
//         />

//         <h3 className="font-semibold text-gray-700 mb-2">Address:</h3>
//         <input
//           type="text"
//           name="street"
//           placeholder="Street"
//           value={formData.addresses[0].street}
//           onChange={handleChange}
//           className="w-full border p-2 mb-3 rounded-md"
//         />
//         <input
//           type="text"
//           name="city"
//           placeholder="City"
//           value={formData.addresses[0].city}
//           onChange={handleChange}
//           className="w-full border p-2 mb-3 rounded-md"
//         />
//         <input
//           type="text"
//           name="state"
//           placeholder="State"
//           value={formData.addresses[0].state}
//           onChange={handleChange}
//           className="w-full border p-2 mb-3 rounded-md"
//         />
//         <input
//           type="text"
//           name="postalCode"
//           placeholder="Postal Code"
//           value={formData.addresses[0].postalCode}
//           onChange={handleChange}
//           className="w-full border p-2 mb-3 rounded-md"
//         />
//         <input
//           type="text"
//           name="country"
//           placeholder="Country"
//           value={formData.addresses[0].country}
//           onChange={handleChange}
//           className="w-full border p-2 mb-6 rounded-md"
//         />

//         <button
//           type="submit"
//           disabled={loading}
//           className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition disabled:opacity-50"
//         >
//           {loading ? "Creating..." : "Create Profile"}
//         </button>
//       </form>
//     </div>
//   );
// }

// export default CreateProfile;























// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { fetchWithAuth } from "../refreshtoken/api"; // adjust path if needed
// import { FaPhone, FaUser, FaBirthdayCake, FaMapMarkerAlt, FaGlobe, FaVenusMars, FaImage } from "react-icons/fa";

// function CreateProfile() {
//   const [formData, setFormData] = useState({
//     phone: "",
//     gender: "",
//     dateOfBirth: "",
//     profileImage: "",
//     addresses: [
//       {
//         street: "",
//         city: "",
//         state: "",
//         postalCode: "",
//         country: "",
//       },
//     ],
//   });

//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     if (["street", "city", "state", "postalCode", "country"].includes(name)) {
//       setFormData((prev) => ({
//         ...prev,
//         addresses: [{ ...prev.addresses[0], [name]: value }],
//       }));
//     } else {
//       setFormData((prev) => ({
//         ...prev,
//         [name]: value,
//       }));
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const res = await fetchWithAuth(
//         "https://ecommerce-backend-y1bv.onrender.com/api/user/create-profile",
//         {
//           method: "POST",
//           body: JSON.stringify(formData),
//         }
//       );

//       if (res) {
//         alert("Profile created successfully!");
//         navigate("/home");
//       }
//     } catch (err) {
//       console.error("Profile creation failed:", err);
//       alert("Failed to create profile. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white shadow-xl rounded-2xl max-w-xl w-full p-8 sm:p-10 transition-transform transform hover:-translate-y-1"
//       >
//         <h2 className="text-3xl font-bold mb-8 text-center text-blue-600">
//           Create Your Profile
//         </h2>

//         {/* Phone */}
//         <div className="flex items-center border rounded-md p-2 mb-4 focus-within:ring-2 focus-within:ring-blue-400">
//           <FaPhone className="text-gray-400 mr-2" />
//           <input
//             type="text"
//             name="phone"
//             placeholder="Phone Number"
//             value={formData.phone}
//             onChange={handleChange}
//             className="w-full outline-none"
//             required
//           />
//         </div>

//         {/* Gender */}
//         <div className="flex items-center border rounded-md p-2 mb-4 focus-within:ring-2 focus-within:ring-blue-400">
//           <FaVenusMars className="text-gray-400 mr-2" />
//           <select
//             name="gender"
//             value={formData.gender}
//             onChange={handleChange}
//             className="w-full outline-none"
//             required
//           >
//             <option value="">Select Gender</option>
//             <option value="male">Male</option>
//             <option value="female">Female</option>
//             <option value="other">Other</option>
//           </select>
//         </div>

//         {/* Date of Birth */}
//         <div className="flex items-center border rounded-md p-2 mb-4 focus-within:ring-2 focus-within:ring-blue-400">
//           <FaBirthdayCake className="text-gray-400 mr-2" />
//           <input
//             type="date"
//             name="dateOfBirth"
//             value={formData.dateOfBirth}
//             onChange={handleChange}
//             className="w-full outline-none"
//             required
//           />
//         </div>

//         {/* Profile Image URL */}
//         <div className="flex items-center border rounded-md p-2 mb-4 focus-within:ring-2 focus-within:ring-blue-400">
//           <FaImage className="text-gray-400 mr-2" />
//           <input
//             type="text"
//             name="profileImage"
//             placeholder="Profile Image URL"
//             value={formData.profileImage}
//             onChange={handleChange}
//             className="w-full outline-none"
//           />
//         </div>

//         <h3 className="text-xl font-semibold text-gray-700 mb-4">Address</h3>

//         {/* Street */}
//         <div className="flex items-center border rounded-md p-2 mb-3 focus-within:ring-2 focus-within:ring-blue-400">
//           <FaMapMarkerAlt className="text-gray-400 mr-2" />
//           <input
//             type="text"
//             name="street"
//             placeholder="Street"
//             value={formData.addresses[0].street}
//             onChange={handleChange}
//             className="w-full outline-none"
//           />
//         </div>

//         {/* City */}
//         <div className="flex items-center border rounded-md p-2 mb-3 focus-within:ring-2 focus-within:ring-blue-400">
//           <FaUser className="text-gray-400 mr-2" />
//           <input
//             type="text"
//             name="city"
//             placeholder="City"
//             value={formData.addresses[0].city}
//             onChange={handleChange}
//             className="w-full outline-none"
//           />
//         </div>

//         {/* State */}
//         <div className="flex items-center border rounded-md p-2 mb-3 focus-within:ring-2 focus-within:ring-blue-400">
//           <FaUser className="text-gray-400 mr-2" />
//           <input
//             type="text"
//             name="state"
//             placeholder="State"
//             value={formData.addresses[0].state}
//             onChange={handleChange}
//             className="w-full outline-none"
//           />
//         </div>

//         {/* Postal Code */}
//         <div className="flex items-center border rounded-md p-2 mb-3 focus-within:ring-2 focus-within:ring-blue-400">
//           <FaUser className="text-gray-400 mr-2" />
//           <input
//             type="text"
//             name="postalCode"
//             placeholder="Postal Code"
//             value={formData.addresses[0].postalCode}
//             onChange={handleChange}
//             className="w-full outline-none"
//           />
//         </div>

//         {/* Country */}
//         <div className="flex items-center border rounded-md p-2 mb-6 focus-within:ring-2 focus-within:ring-blue-400">
//           <FaGlobe className="text-gray-400 mr-2" />
//           <input
//             type="text"
//             name="country"
//             placeholder="Country"
//             value={formData.addresses[0].country}
//             onChange={handleChange}
//             className="w-full outline-none"
//           />
//         </div>

//         {/* Submit Button */}
//         <button
//           type="submit"
//           disabled={loading}
//           className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition disabled:opacity-50 text-lg font-semibold"
//         >
//           {loading ? "Creating..." : "Create Profile"}
//         </button>
//       </form>
//     </div>
//   );
// }

// export default CreateProfile;

















// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { fetchWithAuth } from "../refreshtoken/api"; // imported fetchWithAuth
// import { FaPhone, FaUser, FaBirthdayCake, FaMapMarkerAlt, FaGlobe, FaVenusMars, FaImage } from "react-icons/fa";

// function CreateProfile() {
//   const [formData, setFormData] = useState({
//     phone: "",
//     gender: "",
//     dateOfBirth: "",
//     profileImage: "",
//     addresses: [
//       {
//         street: "",
//         city: "",
//         state: "",
//         postalCode: "",
//         country: "",
//       },
//     ],
//   });

//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     if (["street", "city", "state", "postalCode", "country"].includes(name)) {
//       setFormData((prev) => ({
//         ...prev,
//         addresses: [{ ...prev.addresses[0], [name]: value }],
//       }));
//     } else {
//       setFormData((prev) => ({
//         ...prev,
//         [name]: value,
//       }));
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const res = await fetchWithAuth(
//         "https://ecommerce-backend-y1bv.onrender.com/api/user/create-profile",
//         {
//           method: "POST",
//           body: JSON.stringify(formData),
//         }
//       );

//       if (res) {
//         alert("Profile created successfully!");
//         navigate("/home");
//       }
//     } catch (err) {
//       console.error("Profile creation failed:", err);
//       alert("Failed to create profile. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white shadow-xl rounded-2xl max-w-xl w-full p-8 sm:p-10 transition-transform transform hover:-translate-y-1"
//       >
//         <h2 className="text-3xl font-bold mb-8 text-center text-blue-600">
//           Create Your Profile
//         </h2>

//         {/* Phone */}
//         <div className="flex items-center border rounded-md p-2 mb-4 focus-within:ring-2 focus-within:ring-blue-400">
//           <FaPhone className="text-gray-400 mr-2" />
//           <input
//             type="text"
//             name="phone"
//             placeholder="Phone Number"
//             value={formData.phone}
//             onChange={handleChange}
//             className="w-full outline-none"
//             required
//           />
//         </div>

//         {/* Gender */}
//         <div className="flex items-center border rounded-md p-2 mb-4 focus-within:ring-2 focus-within:ring-blue-400">
//           <FaVenusMars className="text-gray-400 mr-2" />
//           <select
//             name="gender"
//             value={formData.gender}
//             onChange={handleChange}
//             className="w-full outline-none"
//             required
//           >
//             <option value="">Select Gender</option>
//             <option value="male">Male</option>
//             <option value="female">Female</option>
//             <option value="other">Other</option>
//           </select>
//         </div>

//         {/* Date of Birth */}
//         <div className="flex items-center border rounded-md p-2 mb-4 focus-within:ring-2 focus-within:ring-blue-400">
//           <FaBirthdayCake className="text-gray-400 mr-2" />
//           <input
//             type="date"
//             name="dateOfBirth"
//             value={formData.dateOfBirth}
//             onChange={handleChange}
//             className="w-full outline-none"
//             required
//           />
//         </div>

//         {/* Profile Image URL */}
//         <div className="flex items-center border rounded-md p-2 mb-4 focus-within:ring-2 focus-within:ring-blue-400">
//           <FaImage className="text-gray-400 mr-2" />
//           <input
//             type="text"
//             name="profileImage"
//             placeholder="Profile Image URL"
//             value={formData.profileImage}
//             onChange={handleChange}
//             className="w-full outline-none"
//           />
//         </div>

//         <h3 className="text-xl font-semibold text-gray-700 mb-4">Address</h3>

//         {/* Street */}
//         <div className="flex items-center border rounded-md p-2 mb-3 focus-within:ring-2 focus-within:ring-blue-400">
//           <FaMapMarkerAlt className="text-gray-400 mr-2" />
//           <input
//             type="text"
//             name="street"
//             placeholder="Street"
//             value={formData.addresses[0].street}
//             onChange={handleChange}
//             className="w-full outline-none"
//           />
//         </div>

//         {/* City */}
//         <div className="flex items-center border rounded-md p-2 mb-3 focus-within:ring-2 focus-within:ring-blue-400">
//           <FaUser className="text-gray-400 mr-2" />
//           <input
//             type="text"
//             name="city"
//             placeholder="City"
//             value={formData.addresses[0].city}
//             onChange={handleChange}
//             className="w-full outline-none"
//           />
//         </div>

//         {/* State */}
//         <div className="flex items-center border rounded-md p-2 mb-3 focus-within:ring-2 focus-within:ring-blue-400">
//           <FaUser className="text-gray-400 mr-2" />
//           <input
//             type="text"
//             name="state"
//             placeholder="State"
//             value={formData.addresses[0].state}
//             onChange={handleChange}
//             className="w-full outline-none"
//           />
//         </div>

//         {/* Postal Code */}
//         <div className="flex items-center border rounded-md p-2 mb-3 focus-within:ring-2 focus-within:ring-blue-400">
//           <FaUser className="text-gray-400 mr-2" />
//           <input
//             type="text"
//             name="postalCode"
//             placeholder="Postal Code"
//             value={formData.addresses[0].postalCode}
//             onChange={handleChange}
//             className="w-full outline-none"
//           />
//         </div>

//         {/* Country */}
//         <div className="flex items-center border rounded-md p-2 mb-6 focus-within:ring-2 focus-within:ring-blue-400">
//           <FaGlobe className="text-gray-400 mr-2" />
//           <input
//             type="text"
//             name="country"
//             placeholder="Country"
//             value={formData.addresses[0].country}
//             onChange={handleChange}
//             className="w-full outline-none"
//           />
//         </div>

//         {/* Submit Button */}
//         <button
//           type="submit"
//           disabled={loading}
//           className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition disabled:opacity-50 text-lg font-semibold"
//         >
//           {loading ? "Creating..." : "Create Profile"}
//         </button>
//       </form>
//     </div>
//   );
// }

// export default CreateProfile;





















import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchWithAuth } from "../refreshtoken/api";
import { FaPhone, FaUser, FaBirthdayCake, FaMapMarkerAlt, FaGlobe, FaVenusMars, FaImage } from "react-icons/fa";

function CreateProfile({ onProfileCreated }) {
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
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

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
    setLoading(true);

    try {
      const res = await fetchWithAuth(
        "https://ecommerce-backend-y1bv.onrender.com/api/user/create-profile",
        {
          method: "POST",
          body: JSON.stringify(formData),
        }
      );

      if (res) {
        alert("Profile created successfully!");
        // Notify wrapper that profile is created
        if (onProfileCreated) onProfileCreated();
      }
    } catch (err) {
      console.error("Profile creation failed:", err);
      alert("Failed to create profile. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-xl rounded-2xl max-w-xl w-full p-8 sm:p-10 transition-transform transform hover:-translate-y-1"
      >
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-600">
          Create Your Profile
        </h2>

        {/* Phone */}
        <div className="flex items-center border rounded-md p-2 mb-4 focus-within:ring-2 focus-within:ring-blue-400">
          <FaPhone className="text-gray-400 mr-2" />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full outline-none"
            required
          />
        </div>

        {/* Gender */}
        <div className="flex items-center border rounded-md p-2 mb-4 focus-within:ring-2 focus-within:ring-blue-400">
          <FaVenusMars className="text-gray-400 mr-2" />
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="w-full outline-none"
            required
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Date of Birth */}
        <div className="flex items-center border rounded-md p-2 mb-4 focus-within:ring-2 focus-within:ring-blue-400">
          <FaBirthdayCake className="text-gray-400 mr-2" />
          <input
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            className="w-full outline-none"
            required
          />
        </div>

        {/* Profile Image URL */}
        <div className="flex items-center border rounded-md p-2 mb-4 focus-within:ring-2 focus-within:ring-blue-400">
          <FaImage className="text-gray-400 mr-2" />
          <input
            type="text"
            name="profileImage"
            placeholder="Profile Image URL"
            value={formData.profileImage}
            onChange={handleChange}
            className="w-full outline-none"
          />
        </div>

        <h3 className="text-xl font-semibold text-gray-700 mb-4">Address</h3>

        {/* Street */}
        <div className="flex items-center border rounded-md p-2 mb-3 focus-within:ring-2 focus-within:ring-blue-400">
          <FaMapMarkerAlt className="text-gray-400 mr-2" />
          <input
            type="text"
            name="street"
            placeholder="Street"
            value={formData.addresses[0].street}
            onChange={handleChange}
            className="w-full outline-none"
          />
        </div>

        {/* City */}
        <div className="flex items-center border rounded-md p-2 mb-3 focus-within:ring-2 focus-within:ring-blue-400">
          <FaUser className="text-gray-400 mr-2" />
          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.addresses[0].city}
            onChange={handleChange}
            className="w-full outline-none"
          />
        </div>

        {/* State */}
        <div className="flex items-center border rounded-md p-2 mb-3 focus-within:ring-2 focus-within:ring-blue-400">
          <FaUser className="text-gray-400 mr-2" />
          <input
            type="text"
            name="state"
            placeholder="State"
            value={formData.addresses[0].state}
            onChange={handleChange}
            className="w-full outline-none"
          />
        </div>

        {/* Postal Code */}
        <div className="flex items-center border rounded-md p-2 mb-3 focus-within:ring-2 focus-within:ring-blue-400">
          <FaUser className="text-gray-400 mr-2" />
          <input
            type="text"
            name="postalCode"
            placeholder="Postal Code"
            value={formData.addresses[0].postalCode}
            onChange={handleChange}
            className="w-full outline-none"
          />
        </div>

        {/* Country */}
        <div className="flex items-center border rounded-md p-2 mb-6 focus-within:ring-2 focus-within:ring-blue-400">
          <FaGlobe className="text-gray-400 mr-2" />
          <input
            type="text"
            name="country"
            placeholder="Country"
            value={formData.addresses[0].country}
            onChange={handleChange}
            className="w-full outline-none"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition disabled:opacity-50 text-lg font-semibold"
        >
          {loading ? "Creating..." : "Create Profile"}
        </button>
      </form>
    </div>
  );
}

export default CreateProfile;
