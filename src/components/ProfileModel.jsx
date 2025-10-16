// import React, { useEffect, useState } from "react";
// import Logout from "../pages/Logout";
// import { Link } from "react-router-dom";

// function ProfileModel({ isOpen, onClose, onLogout }) {
//   const [profile, setProfile] = useState({ name: "", email: "" });
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     if (!isOpen) return;

//     const fetchProfile = async () => {
//       const token = localStorage.getItem("accessToken");
//       if (!token) {
//         setError("Not logged in");
//         setLoading(false);
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
//         if (!res.ok) throw new Error("Failed to fetch profile");
//         const data = await res.json();
//         setProfile({ name: data.name, email: data.email });
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProfile();
//   }, [isOpen]);

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex justify-start items-start mt-3">
//       <div className="bg-white rounded-lg p-6 w-80 relative mt-4 ml-4 shadow-lg">
//         <button
//           onClick={onClose}
//           className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
//         >
//           ✕
//         </button>

//         {loading && <p>Loading...</p>}
//         {error && <p className="text-red-500">Error: {error}</p>}
//         {!loading && !error && (
//           <>
//             <div className="flex flex-col items-center mb-4">
//               <div className="w-16 h-16 bg-gray-200 rounded-full mb-2"></div>
//               <h2 className="font-bold">{profile.name}</h2>
//               <p className="text-sm text-gray-500">{profile.email}</p>
//             </div>
//             <ul>
//               {/* <Link to="/get-profile" className="py-2 cursor-pointer">Account settings</Link> */}
//               {/* <Link to="/create-profile" className="py-2 cursor-pointer">Account settings</Link> */}
//               {/* <Link to="/edit-profile" className="py-2 cursor-pointer">Account settings</Link> */}
//               {/* <Link to="/form-profile" className="py-2 cursor-pointer">Account settings</Link> */}
//               <Link to="/profile-wrapper" className="py-2 cursor-pointer">Account settings</Link>
//               <li
//                 className="py-2 cursor-pointer"
//                 onClick={() => {
//                   onLogout();
//                   onClose();
//                 }}
//               >
//                 <Logout />
//               </li>
//             </ul>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }

// export default ProfileModel;




























// import React, { useEffect, useState } from "react";
// import Logout from "../pages/Logout";
// import { Link } from "react-router-dom";

// function ProfileModel({ isOpen, onClose, onLogout }) {
//   const [profile, setProfile] = useState({ name: "", email: "" });
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     if (!isOpen) return;

//     const fetchProfile = async () => {
//       const token = localStorage.getItem("accessToken");
//       if (!token) {
//         setError("Not logged in");
//         setLoading(false);
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
//         if (!res.ok) throw new Error("Failed to fetch profile");
//         const data = await res.json();
//         setProfile({ name: data.name, email: data.email });
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProfile();
//   }, [isOpen]);

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex justify-start items-start mt-3">
//       <div className="bg-white rounded-lg p-6 w-80 relative mt-4 ml-4 shadow-lg">
//         <button
//           onClick={onClose}
//           className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
//         >
//           ✕
//         </button>

//         {loading && <p>Loading...</p>}
//         {error && <p className="text-red-500">Error: {error}</p>}
//         {!loading && !error && (
//           <>
//             <div className="flex flex-col items-center mb-4">
//               <div className="w-16 h-16 bg-gray-200 rounded-full mb-2"></div>
//               <h2 className="font-bold">{profile.name}</h2>
//               <p className="text-sm text-gray-500">{profile.email}</p>
//             </div>
//             <ul>
//               <Link to="/profile-wrapper" className="py-2 cursor-pointer">Account settings</Link>
//               <li
//                 className="py-2 cursor-pointer"
//                 onClick={() => {
//                   onLogout();
//                   onClose();
//                 }}
//               >
//                 <Logout />
//               </li>
//             </ul>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }

// export default ProfileModel;





















// import React, { useEffect, useState } from "react";
// import Logout from "../pages/Logout";
// import { Link } from "react-router-dom";
// import { fetchWithAuth } from "../refreshtoken/api"; // imported fetchWithAuth

// function ProfileModel({ isOpen, onClose, onLogout }) {
//   const [profileImage, setProfileImage] = useState("");
//   const [profile, setProfile] = useState({ name: "", email: "" });
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     if (!isOpen) return;

//     const fetchProfile = async () => {
//       try {
//         const data = await fetchWithAuth(
//           "https://ecommerce-backend-y1bv.onrender.com/api/user/get-profile"
//         );
//         if (data && data.profile) {
//           setProfileImage(data.profile.profileImage || "");
//           setProfile({
//             name: data.profile.user.name,
//             email: data.profile.user.email,
//           });
//         } else {
//           setError("No profile found");
//         }
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProfile();
//   }, [isOpen]);

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex justify-start items-start mt-3">
//       <div className="bg-white rounded-lg p-6 w-80 relative mt-4 ml-4 shadow-lg">
//         <button
//           onClick={onClose}
//           className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
//         >
//           ✕
//         </button>

//         {loading && <p>Loading...</p>}
//         {error && <p className="text-red-500">Error: {error}</p>}
//         {!loading && !error && (
//           <>
//             <div className="flex flex-col items-center mb-4">
//               <img
//                 src={profileImage || "https://via.placeholder.com/64"}
//                 alt="Profile"
//                 className="w-16 h-16 rounded-full mb-2 object-cover"
//               />
//               <h2 className="font-bold">{profile.name}</h2>
//               <p className="text-sm text-gray-500">{profile.email}</p>
//             </div>
//             <ul>
//               <Link to="/profile-wrapper" className="py-2 cursor-pointer block">
//                 Account settings
//               </Link>
//               <li
//                 className="py-2 cursor-pointer"
//                 onClick={() => {
//                   onLogout();
//                   onClose();
//                 }}
//               >
//                 <Logout />
//               </li>
//             </ul>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }

// export default ProfileModel;











// import React, { useEffect, useState } from "react";
// import Logout from "../pages/Logout";
// import { Link } from "react-router-dom";
// import { fetchWithAuth } from "../refreshtoken/api"; // imported fetchWithAuth

// function ProfileModel({ isOpen, onClose, onLogout }) {
//   const [profileImage, setProfileImage] = useState("");
//   const [profile, setProfile] = useState({ name: "", email: "" });
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     if (!isOpen) return;

//     const fetchProfile = async () => {
//       try {
//         const data = await fetchWithAuth(
//           "https://ecommerce-backend-y1bv.onrender.com/api/user/get-profile"
//         );
//         if (data && data.profile) {
//           setProfileImage(data.profile.profileImage || "");
//           setProfile({
//             name: data.profile.user.name,
//             email: data.profile.user.email,
//           });
//         } else {
//           setError("No profile found");
//         }
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProfile();
//   }, [isOpen]);

//   const getInitial = (name) => (profile.name ? profile.name.charAt(0).toUpperCase() : "?");

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex justify-center items-center">
//       {/* Overlay */}
//       <div
//         className="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-sm"
//         onClick={onClose}
//       ></div>

//       {/* Modal with slide-in and bounce */}
//       <div
//         className={`bg-white rounded-lg p-6 w-80 md:w-96 relative shadow-xl z-50 transform transition-all duration-500 ease-out
//           ${isOpen ? "translate-y-0 opacity-100 animate-bounce-in" : "-translate-y-10 opacity-0"}`}
//       >
//         <button
//           onClick={onClose}
//           className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 transition-colors"
//         >
//           ✕
//         </button>

//         {loading && <p className="text-center text-gray-500">Loading...</p>}
//         {error && <p className="text-red-500 text-center">{error}</p>}

//         {!loading && !error && (
//           <>
//             <div className="flex flex-col items-center mb-6">
//               {profileImage ? (
//                 <img
//                   src={profileImage}
//                   alt="Profile"
//                   className="w-20 h-20 md:w-24 md:h-24 rounded-full mb-2 object-cover border-2 border-blue-500 shadow-md transition-transform transform hover:scale-105 duration-300"
//                 />
//               ) : (
//                 <div
//                   className={`w-20 h-20 md:w-24 md:h-24 rounded-full mb-2 flex items-center justify-center text-white text-2xl md:text-3xl font-bold bg-blue-500 shadow-md transition-transform transform hover:scale-105 duration-300`}
//                 >
//                   {getInitial(profile.name)}
//                 </div>
//               )}
//               <h2 className="font-bold text-lg md:text-xl">{profile.name}</h2>
//               <p className="text-sm md:text-base text-gray-500">{profile.email}</p>
//             </div>

//             <ul className="flex flex-col gap-2">
//               <Link
//                 to="/profile-wrapper"
//                 className="py-2 px-3 rounded-md hover:bg-gray-100 transition-colors"
//               >
//                 Account settings
//               </Link>
//               <li
//                 className="py-2 px-3 rounded-md hover:bg-gray-100 cursor-pointer transition-colors"
//                 onClick={() => {
//                   onLogout();
//                   onClose();
//                 }}
//               >
//                 <Logout />
//               </li>
//             </ul>
//           </>
//         )}
//       </div>

//       {/* Custom Tailwind keyframes for bounce */}
//       <style>
//         {`
//           @keyframes bounce-in {
//             0% { transform: translateY(-30px); opacity: 0; }
//             60% { transform: translateY(10px); opacity: 1; }
//             80% { transform: translateY(-5px); }
//             100% { transform: translateY(0); }
//           }
//           .animate-bounce-in {
//             animation: bounce-in 0.5s ease-out forwards;
//           }
//         `}
//       </style>
//     </div>
//   );
// }

// export default ProfileModel;


















// import React, { useEffect, useState } from "react";
// import Logout from "../pages/Logout";
// import { Link } from "react-router-dom";
// import { fetchWithAuth } from "../refreshtoken/api"; // imported fetchWithAuth

// function ProfileModel({ isOpen, onClose, onLogout }) {
//   const [profileImage, setProfileImage] = useState("");
//   const [profile, setProfile] = useState({ name: "", email: "" });
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     if (!isOpen) return;

//     const fetchProfile = async () => {
//       try {
//         const data = await fetchWithAuth(
//           "https://ecommerce-backend-y1bv.onrender.com/api/user/get-profile"
//         );
//         if (data && data.profile) {
//           setProfileImage(data.profile.profileImage || "");
//           setProfile({
//             name: data.profile.user.name || "",
//             email: data.profile.user.email || "",
//           });
//         } else {
//           setError("No profile found");
//         }
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProfile();
//   }, [isOpen]);

//   // Corrected: use the 'name' argument instead of profile.name
//   const getInitial = (name) => (name ? name.charAt(0).toUpperCase() : "?");

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex justify-center items-center">
//       {/* Overlay */}
//       <div
//         className="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-sm"
//         onClick={onClose}
//       ></div>

//       {/* Modal */}
//       <div
//         className={`bg-white rounded-lg p-6 w-80 md:w-96 relative shadow-xl z-50 transform transition-all duration-500 ease-out
//           ${isOpen ? "translate-y-0 opacity-100 animate-bounce-in" : "-translate-y-10 opacity-0"}`}
//       >
//         <button
//           onClick={onClose}
//           className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 transition-colors"
//         >
//           ✕
//         </button>

//         {loading && <p className="text-center text-gray-500">Loading...</p>}
//         {error && <p className="text-red-500 text-center">{error}</p>}

//         {!loading && !error && (
//           <>
//             <div className="flex flex-col items-center mb-6">
//               {profileImage ? (
//                 <img
//                   src={profileImage}
//                   alt="Profile"
//                   className="w-20 h-20 md:w-24 md:h-24 rounded-full mb-2 object-cover border-2 border-blue-500 shadow-md transition-transform transform hover:scale-105 duration-300"
//                 />
//               ) : (
//                 <div
//                   className="w-20 h-20 md:w-24 md:h-24 rounded-full mb-2 flex items-center justify-center text-white text-2xl md:text-3xl font-bold bg-blue-500 shadow-md transition-transform transform hover:scale-105 duration-300"
//                 >
//                   {getInitial(profile.name)}
//                 </div>
//               )}
//               <h2 className="font-bold text-lg md:text-xl">{profile.name}</h2>
//               <p className="text-sm md:text-base text-gray-500">{profile.email}</p>
//             </div>

//             <ul className="flex flex-col gap-2">
//               <Link
//                 to="/profile-wrapper"
//                 className="py-2 px-3 rounded-md hover:bg-gray-100 transition-colors"
//               >
//                 Account settings
//               </Link>
//               <li
//                 className="py-2 px-3 rounded-md hover:bg-gray-100 cursor-pointer transition-colors"
//                 onClick={() => {
//                   onLogout();
//                   onClose();
//                 }}
//               >
//                 <Logout />
//               </li>
//             </ul>
//           </>
//         )}
//       </div>

//       {/* Custom Tailwind keyframes for bounce */}
//       <style>
//         {`
//           @keyframes bounce-in {
//             0% { transform: translateY(-30px); opacity: 0; }
//             60% { transform: translateY(10px); opacity: 1; }
//             80% { transform: translateY(-5px); }
//             100% { transform: translateY(0); }
//           }
//           .animate-bounce-in {
//             animation: bounce-in 0.5s ease-out forwards;
//           }
//         `}
//       </style>
//     </div>
//   );
// }

// export default ProfileModel;

























// import React, { useEffect, useState } from "react";
// import Logout from "../pages/Logout";
// import { Link } from "react-router-dom";
// import { fetchWithAuth } from "../refreshtoken/api"; // imported fetchWithAuth

// function ProfileModel({ isOpen, onClose, onLogout }) {
//   const [profileImage, setProfileImage] = useState("");
//   const [profile, setProfile] = useState({ name: "", email: "" });
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     if (!isOpen) return;

//     const fetchProfile = async () => {
//       try {
//         const data = await fetchWithAuth(
//           "https://ecommerce-backend-y1bv.onrender.com/api/user/get-profile"
//         );
//         if (data && data.profile) {
//           setProfileImage(data.profile.profileImage || "");
//           setProfile({
//             name: data.profile.user.name || "",
//             email: data.profile.user.email || "",
//           });
//         } else {
//           setError("No profile found");
//         }
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProfile();
//   }, [isOpen]);

//   // Generate a consistent background color based on the user name
//   const getColorFromName = (name) => {
//     const colors = [
//       "bg-red-500", "bg-green-500", "bg-blue-500",
//       "bg-yellow-500", "bg-indigo-500", "bg-purple-500",
//       "bg-pink-500", "bg-teal-500", "bg-orange-500"
//     ];
//     if (!name) return "bg-gray-400";
//     let hash = 0;
//     for (let i = 0; i < name.length; i++) {
//       hash = name.charCodeAt(i) + ((hash << 5) - hash);
//     }
//     const index = Math.abs(hash) % colors.length;
//     return colors[index];
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex justify-center items-center">
//       {/* Overlay */}
//       <div
//         className="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-sm"
//         onClick={onClose}
//       ></div>

//       {/* Modal */}
//       <div
//         className={`bg-white rounded-lg p-6 w-80 md:w-96 relative shadow-xl z-50 transform transition-all duration-500 ease-out
//           ${isOpen ? "translate-y-0 opacity-100 animate-bounce-in" : "-translate-y-10 opacity-0"}`}
//       >
//         <button
//           onClick={onClose}
//           className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 transition-colors"
//         >
//           ✕
//         </button>

//         {loading && <p className="text-center text-gray-500">Loading...</p>}
//         {error && <p className="text-red-500 text-center">{error}</p>}

//         {!loading && !error && (
//           <>
//             <div className="flex flex-col items-center mb-6">
//               {profileImage ? (
//                 <img
//                   src={profileImage}
//                   className="w-20 h-20 md:w-24 md:h-24 rounded-full mb-2 object-cover border-2 border-blue-500 shadow-md transition-transform transform hover:scale-105 duration-300"
//                 />
//               ) : (
//                 <div
//                   className={`w-20 h-20 md:w-24 md:h-24 rounded-full mb-2 flex items-center justify-center text-3xl md:text-4xl font-bold shadow-md transition-transform transform hover:scale-105 duration-300 ${getColorFromName(profile.name)}`}
//                 >
//                   😊
//                 </div>
//               )}
//               <h2 className="font-bold text-lg md:text-xl">{profile.name}</h2>
//               <p className="text-sm md:text-base text-gray-500">{profile.email}</p>
//             </div>

//             <ul className="flex flex-col gap-2">
//               <Link
//                 to="/profile-wrapper"
//                 className="py-2 px-3 rounded-md hover:bg-gray-100 transition-colors"
//               >
//                 Account settings
//               </Link>
//               <li
//                 className="py-2 px-3 rounded-md hover:bg-gray-100 cursor-pointer transition-colors"
//                 onClick={() => {
//                   onLogout();
//                   onClose();
//                 }}
//               >
//                 <Logout />
//               </li>
//             </ul>
//           </>
//         )}
//       </div>

//       {/* Custom Tailwind keyframes for bounce */}
//       <style>
//         {`
//           @keyframes bounce-in {
//             0% { transform: translateY(-30px); opacity: 0; }
//             60% { transform: translateY(10px); opacity: 1; }
//             80% { transform: translateY(-5px); }
//             100% { transform: translateY(0); }
//           }
//           .animate-bounce-in {
//             animation: bounce-in 0.5s ease-out forwards;
//           }
//         `}
//       </style>
//     </div>
//   );
// }

// export default ProfileModel;


















// import React, { useEffect, useState } from "react";
// import Logout from "../pages/Logout";
// import { Link } from "react-router-dom";
// import { fetchWithAuth } from "../refreshtoken/api"; // imported fetchWithAuth

// function ProfileModel({ isOpen, onClose, onLogout }) {
//   const [profileImage, setProfileImage] = useState("");
//   const [profile, setProfile] = useState({ name: "", email: "" });
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     if (!isOpen) return;

//     const fetchProfile = async () => {
//       try {
//         const data = await fetchWithAuth(
//           "https://ecommerce-backend-y1bv.onrender.com/api/user/get-profile"
//         );
//         if (data && data.profile) {
//           setProfileImage(data.profile.profileImage || "");
//           setProfile({
//             name: data.profile.user.name || "",
//             email: data.profile.user.email || "",
//           });
//         } else {
//           setError("No profile found");
//         }
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProfile();
//   }, [isOpen]);

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex justify-center items-center">
//       {/* Overlay */}
//       <div
//         className="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-sm"
//         onClick={onClose}
//       ></div>

//       {/* Modal */}
//       <div
//         className={`bg-white rounded-lg p-6 w-80 md:w-96 relative shadow-xl z-50 transform transition-all duration-500 ease-out
//           ${isOpen ? "translate-y-0 opacity-100 animate-bounce-in" : "-translate-y-10 opacity-0"}`}
//       >
//         <button
//           onClick={onClose}
//           className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 transition-colors"
//         >
//           ✕
//         </button>

//         {loading && <p className="text-center text-gray-500">Loading...</p>}
//         {error && <p className="text-red-500 text-center">{error}</p>}

//         {!loading && !error && (
//           <>
//             <div className="flex flex-col items-center mb-6">
//               {profileImage ? (
//                 <img
//                   src={profileImage}
//                   alt="Profile"
//                   className="w-20 h-20 md:w-24 md:h-24 rounded-full mb-2 object-cover border-2 border-blue-500 shadow-md transition-transform transform hover:scale-105 duration-300"
//                 />
//               ) : (
//                 <div
//                   className="w-20 h-20 md:w-24 md:h-24 rounded-full mb-2 flex items-center justify-center text-3xl md:text-4xl shadow-md transition-transform transform hover:scale-105 duration-300"
//                 >
//                   😊
//                 </div>
//               )}
//               <h2 className="font-bold text-lg md:text-xl">{profile.name}</h2>
//               <p className="text-sm md:text-base text-gray-500">{profile.email}</p>
//             </div>

//             <ul className="flex flex-col gap-2">
//               <Link
//                 to="/profile-wrapper"
//                 className="py-2 px-3 rounded-md hover:bg-gray-100 transition-colors"
//               >
//                 Account settings
//               </Link>
//               <li
//                 className="py-2 px-3 rounded-md hover:bg-gray-100 cursor-pointer transition-colors"
//                 onClick={() => {
//                   onLogout();
//                   onClose();
//                 }}
//               >
//                 <Logout />
//               </li>
//             </ul>
//           </>
//         )}
//       </div>

//       {/* Custom Tailwind keyframes for bounce */}
//       <style>
//         {`
//           @keyframes bounce-in {
//             0% { transform: translateY(-30px); opacity: 0; }
//             60% { transform: translateY(10px); opacity: 1; }
//             80% { transform: translateY(-5px); }
//             100% { transform: translateY(0); }
//           }
//           .animate-bounce-in {
//             animation: bounce-in 0.5s ease-out forwards;
//           }
//         `}
//       </style>
//     </div>
//   );
// }

// export default ProfileModel;



























// import React, { useEffect, useState } from "react";
// import Logout from "../pages/Logout";
// import { Link } from "react-router-dom";
// import { fetchWithAuth } from "../refreshtoken/api"; // imported fetchWithAuth

// function ProfileModel({ isOpen, onClose, onLogout }) {
//   const [profileImage, setProfileImage] = useState("");
//   const [profile, setProfile] = useState({ name: "", email: "" });
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     if (!isOpen) return;

//     const fetchProfile = async () => {
//       try {
//         const data = await fetchWithAuth(
//           "https://ecommerce-backend-y1bv.onrender.com/api/user/get-profile"
//         );
//         if (data && data.profile) {
//           setProfileImage(data.profile.profileImage || "");
//           setProfile({
//             name: data.profile.user.name,
//             email: data.profile.user.email,
//           });
//         } else {
//           setError("No profile found");
//         }
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProfile();
//   }, [isOpen]);

//   const getInitial = (name) => (profile.name ? profile.name.charAt(0).toUpperCase() : "?");

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex justify-center items-center">
//       {/* Overlay */}
//       <div
//         className="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-sm"
//         onClick={onClose}
//       ></div>

//       {/* Modal with slide-in and bounce */}
//       <div
//         className={`bg-white rounded-lg p-6 w-80 md:w-96 relative shadow-xl z-50 transform transition-all duration-500 ease-out
//           ${isOpen ? "translate-y-0 opacity-100 animate-bounce-in" : "-translate-y-10 opacity-0"}`}
//       >
//         <button
//           onClick={onClose}
//           className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 transition-colors"
//         >
//           ✕
//         </button>

//         {loading && <p className="text-center text-gray-500">Loading...</p>}
//         {error && <p className="text-red-500 text-center">{error}</p>}

//         {!loading && !error && (
//           <>
//             <div className="flex flex-col items-center mb-6">
//               {profileImage ? (
//                 <img
//                   src={profileImage}
//                   alt="Profile"
//                   className="w-20 h-20 md:w-24 md:h-24 rounded-full mb-2 object-cover border-2 border-blue-500 shadow-md transition-transform transform hover:scale-105 duration-300"
//                 />
//               ) : (
//                 <div
//                   className={`w-20 h-20 md:w-24 md:h-24 rounded-full mb-2 flex items-center justify-center text-white text-2xl md:text-3xl font-bold bg-blue-500 shadow-md transition-transform transform hover:scale-105 duration-300`}
//                 >
//                   {getInitial(profile.name)}
//                 </div>
//               )}
//               <h2 className="font-bold text-lg md:text-xl">{profile.name}</h2>
//               <p className="text-sm md:text-base text-gray-500">{profile.email}</p>
//             </div>

//             <ul className="flex flex-col gap-2">
//               <Link
//                 to="/profile-wrapper"
//                 className="py-2 px-3 rounded-md hover:bg-gray-100 transition-colors"
//                 onClick={onClose} // Close modal immediately when clicked
//               >
//                 Account settings
//               </Link>
//               <li
//                 className="py-2 px-3 rounded-md hover:bg-gray-100 cursor-pointer transition-colors"
//                 onClick={() => {
//                   onLogout();
//                   onClose();
//                 }}
//               >
//                 <Logout />
//               </li>
//             </ul>
//           </>
//         )}
//       </div>

//       {/* Custom Tailwind keyframes for bounce */}
//       <style>
//         {`
//           @keyframes bounce-in {
//             0% { transform: translateY(-30px); opacity: 0; }
//             60% { transform: translateY(10px); opacity: 1; }
//             80% { transform: translateY(-5px); }
//             100% { transform: translateY(0); }
//           }
//           .animate-bounce-in {
//             animation: bounce-in 0.5s ease-out forwards;
//           }
//         `}
//       </style>
//     </div>
//   );
// }

// export default ProfileModel;
















import React, { useEffect, useState } from "react";
import Logout from "../pages/Logout";
import { Link } from "react-router-dom";
import { fetchWithAuth } from "../refreshtoken/api";

function ProfileModel({ isOpen, onClose, onLogout }) {
  const [profileImage, setProfileImage] = useState("");
  const [profile, setProfile] = useState({ name: "", email: "" });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [bgColor, setBgColor] = useState("bg-gray-400"); // Dynamic background
  const textColor = "text-white"; // Fixed text color for visibility

  useEffect(() => {
    if (!isOpen) return;

    const fetchProfile = async () => {
      setLoading(true);
      setError(null);

      try {
        const data = await fetchWithAuth(
          "https://ecommerce-backend-y1bv.onrender.com/api/user/get-profile"
        );
        if (data && data.profile) {
          setProfileImage(data.profile.profileImage || "");
          setProfile({
            name: data.profile.user.name || "",
            email: data.profile.user.email || "",
          });

          // Set dynamic background for initial if image is missing
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
        } else {
          setError("No profile found");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [isOpen]);

  const getInitial = (name) => (name ? name.charAt(0).toUpperCase() : "?");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div
        className={`bg-white rounded-lg p-6 w-80 md:w-96 relative shadow-xl z-50 transform transition-all duration-500 ease-out
          ${isOpen ? "translate-y-0 opacity-100 animate-bounce-in" : "-translate-y-10 opacity-0"}`}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 transition-colors"
        >
          ✕
        </button>

        {loading && <p className="text-center text-gray-500">Loading...</p>}
        {error && <p className="text-red-500 text-center">{error}</p>}

        {!loading && !error && (
          <>
            <div className="flex flex-col items-center mb-6">
              {profileImage ? (
                <img
                  src={profileImage}
                  alt="Profile"
                  className="w-20 h-20 md:w-24 md:h-24 rounded-full mb-2 object-cover border-2 border-blue-500 shadow-md transition-transform transform hover:scale-105 duration-300"
                />
              ) : (
                <div
                  className={`w-20 h-20 md:w-24 md:h-24 rounded-full mb-2 flex items-center justify-center text-2xl md:text-3xl font-bold shadow-md transition-transform transform hover:scale-105 duration-300 ${bgColor} ${textColor}`}
                >
                  {getInitial(profile.name)}
                </div>
              )}
              <h2 className="font-bold text-lg md:text-xl">{profile.name}</h2>
              <p className="text-sm md:text-base text-gray-500">{profile.email}</p>
            </div>

            <ul className="flex flex-col gap-2">
              <Link
                to="/profile-wrapper"
                className="py-2 px-3 rounded-md hover:bg-gray-100 transition-colors"
                onClick={onClose} // Close modal immediately
              >
                Account settings
              </Link>
              <li
                className="py-2 px-3 rounded-md hover:bg-gray-100 cursor-pointer transition-colors"
                onClick={() => {
                  onLogout();
                  onClose();
                }}
              >
                <Logout />
              </li>
            </ul>
          </>
        )}
      </div>

      {/* Tailwind keyframes */}
      <style>
        {`
          @keyframes bounce-in {
            0% { transform: translateY(-30px); opacity: 0; }
            60% { transform: translateY(10px); opacity: 1; }
            80% { transform: translateY(-5px); }
            100% { transform: translateY(0); }
          }
          .animate-bounce-in {
            animation: bounce-in 0.5s ease-out forwards;
          }
        `}
      </style>
    </div>
  );
}

export default ProfileModel;
