

// import React, { useEffect, useState } from 'react';
// import { fetchWithAuth } from '../refreshtoken/api'; // assuming api.js is in the same folder

// function GetProfile() {
//   const [profile, setProfile] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         const data = await fetchWithAuth("https://ecommerce-backend-y1bv.onrender.com/api/user/get-profile");
//         setProfile(data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProfile();
//   }, []);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error}</div>;

//   return (
//     <div>
//       <h2>User Profile</h2>
//       <pre>{JSON.stringify(profile, null, 2)}</pre>
//     </div>
//   );
// }

// export default GetProfile;


























// import React, { useEffect, useState } from "react";
// import { fetchWithAuth } from "../refreshtoken/api"; // adjust path if needed

// function GetProfile() {
//   const [profile, setProfile] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         const data = await fetchWithAuth("https://ecommerce-backend-y1bv.onrender.com/api/user/get-profile");
//         setProfile(data.profile);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProfile();
//   }, []);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error}</div>;
//   if (!profile) return <div>No profile data found</div>;

//   return (
//     <div>
//       <h2>User Profile</h2>
//       <img 
//         src={profile.profileImage} 
//         alt="Profile" 
//         width="150" 
//         style={{ borderRadius: "50%" }} 
//       />
//       <p><strong>Name:</strong> {profile.user.name}</p>
//       <p><strong>Email:</strong> {profile.user.email}</p>
//       <p><strong>Phone:</strong> {profile.phone}</p>
//       <p><strong>Gender:</strong> {profile.gender}</p>
//       <p><strong>Date of Birth:</strong> {new Date(profile.dateOfBirth).toLocaleDateString()}</p>

//       <h3>Addresses</h3>
//       {profile.addresses.map((address) => (
//         <div key={address._id} style={{ marginBottom: "10px" }}>
//           <p><strong>Street: </strong>{address.street}</p>
//           <p><strong>Address: </strong>{address.city}, {address.state}, {address.postalCode}</p>
//           <p><strong>Country: </strong>{address.country}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default GetProfile;






















// import React, { useEffect, useState } from "react";
// import { fetchWithAuth } from "../refreshtoken/api"; // adjust path if needed

// function GetProfile() {
//   const [profile, setProfile] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         const data = await fetchWithAuth("https://ecommerce-backend-y1bv.onrender.com/api/user/get-profile");
//         setProfile(data.profile);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProfile();
//   }, []);

//   if (loading) return <div className="flex justify-center items-center h-screen">Loading...</div>;
//   if (error) return <div className="text-red-500 text-center mt-10">{error}</div>;
//   if (!profile) return <div className="text-center mt-10">No profile data found</div>;

//   return (
//     <div className="flex justify-center px-4 py-10 bg-gray-100 min-h-screen">
//       <div className="bg-white shadow-lg rounded-2xl max-w-4xl w-full p-6 sm:p-10">
//         <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
//           {/* Profile Image */}
//           <div className="flex-shrink-0">
//             <img 
//               src={profile.profileImage} 
//               alt="Profile" 
//               className="w-36 h-36 sm:w-40 sm:h-40 rounded-full object-cover border-4 border-indigo-500"
//             />
//           </div>

//           {/* User Info */}
//           <div className="flex-1">
//             <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">{profile.user.name}</h2>
//             <p className="text-gray-500 mt-2">{profile.user.email}</p>
//             <p className="text-gray-500 mt-1"><strong>Phone:</strong> {profile.phone}</p>
//             <p className="text-gray-500 mt-1"><strong>Gender:</strong> {profile.gender}</p>
//             <p className="text-gray-500 mt-1"><strong>Date of Birth:</strong> {new Date(profile.dateOfBirth).toLocaleDateString()}</p>
//           </div>
//         </div>

//         {/* Addresses */}
//         <div className="mt-8">
//           <h3 className="text-xl font-semibold text-gray-700 mb-4">Addresses</h3>
//           <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2">
//             {profile.addresses.map((address) => (
//               <div key={address._id} className="bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-200">
//                 <p className="text-gray-700"><strong>Address:</strong> {address.street}</p>
//                 <p className="text-gray-700"><strong>City: </strong> {address.city}</p>
//                 <p className="text-gray-700"><strong>State: </strong> {address.state}</p>
//                 <p className="text-gray-700"><strong>Postal Code: </strong>{address.postalCode}</p>
//                 <p className="text-gray-700"><strong>Country:</strong> {address.country}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default GetProfile;















// import React, { useEffect, useState } from "react";
// import { fetchWithAuth } from "../refreshtoken/api"; // adjust path if needed
// import { useNavigate } from "react-router-dom";

// function GetProfile() {
//   const [profile, setProfile] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         const data = await fetchWithAuth("https://ecommerce-backend-y1bv.onrender.com/api/user/get-profile");
//         setProfile(data.profile);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProfile();
//   }, []);

//   if (loading) return <div className="flex justify-center items-center h-screen">Loading...</div>;
//   if (error) return <div className="text-red-500 text-center mt-10">{error}</div>;
//   if (!profile) return <div className="text-center mt-10">No profile data found</div>;

//   return (
//     <div className="flex justify-center px-4 py-10 bg-gray-100 min-h-screen">
//       <div className="bg-white shadow-lg rounded-2xl max-w-4xl w-full p-6 sm:p-10 relative">
//         {/* Edit Button */}
//         <button
//           onClick={() => navigate("/edit-profile")}
//           className="absolute top-6 right-6 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
//         >
//           Edit Profile
//         </button>

//         <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
//           {/* Profile Image */}
//           <div className="flex-shrink-0">
//             <img 
//               src={profile.profileImage} 
//               alt="Profile" 
//               className="w-36 h-36 sm:w-40 sm:h-40 rounded-full object-cover border-4 border-indigo-500"
//             />
//           </div>

//           {/* User Info */}
//           <div className="flex-1">
//             <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">{profile.user.name}</h2>
//             <p className="text-gray-500 mt-2">{profile.user.email}</p>
//             <p className="text-gray-500 mt-1"><strong>Phone:</strong> {profile.phone}</p>
//             <p className="text-gray-500 mt-1"><strong>Gender:</strong> {profile.gender}</p>
//             <p className="text-gray-500 mt-1"><strong>Date of Birth:</strong> {new Date(profile.dateOfBirth).toLocaleDateString()}</p>
//           </div>
//         </div>

//         {/* Addresses */}
//         <div className="mt-8">
//           <h3 className="text-xl font-semibold text-gray-700 mb-4">Addresses</h3>
//           <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2">
//             {profile.addresses.map((address) => (
//               <div key={address._id} className="bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-200">
//                 <p className="text-gray-700"><strong>Address:</strong> {address.street}</p>
//                 <p className="text-gray-700"><strong>City: </strong> {address.city}</p>
//                 <p className="text-gray-700"><strong>State: </strong> {address.state}</p>
//                 <p className="text-gray-700"><strong>Postal Code: </strong>{address.postalCode}</p>
//                 <p className="text-gray-700"><strong>Country:</strong> {address.country}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default GetProfile;














// import React, { useEffect, useState } from "react";
// import { fetchWithAuth } from "../refreshtoken/api"; // adjust path if needed
// import { useNavigate } from "react-router-dom";

// function GetProfile() {
//   const [profile, setProfile] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         const data = await fetchWithAuth("https://ecommerce-backend-y1bv.onrender.com/api/user/get-profile");
//         setProfile(data.profile);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProfile();
//   }, []);

//   if (loading)
//     return <div className="flex justify-center items-center h-screen text-lg font-medium">Loading...</div>;
//   if (error)
//     return <div className="text-red-500 text-center mt-10 text-lg font-medium">{error}</div>;
//   if (!profile)
//     return <div className="text-center mt-10 text-lg font-medium">No profile data found</div>;

//   return (
//     <div className="flex justify-center px-4 py-10 bg-gray-100 min-h-screen">
//       <div className="bg-white shadow-xl rounded-2xl max-w-4xl w-full p-6 sm:p-10 relative">
//         {/* Edit Button for medium and larger screens */}
//         <button
//           onClick={() => navigate("/edit-profile")}
//           className="hidden md:inline-block absolute top-6 right-6 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition font-semibold"
//         >
//           Edit Profile
//         </button>

//         <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
//           {/* Profile Image */}
//           <div className="flex-shrink-0 flex flex-col items-center md:items-start">
//             <img
//               src={profile.profileImage}
//               alt="Profile"
//               className="w-36 h-36 sm:w-40 sm:h-40 rounded-full object-cover border-4 border-indigo-500 shadow-md"
//             />
//             {/* Edit Button for small screens */}
//             <button
//               onClick={() => navigate("/edit-profile")}
//               className="mt-4 md:hidden bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition font-semibold"
//             >
//               Edit Profile
//             </button>
//           </div>

//           {/* User Info */}
//           <div className="flex-1 text-center md:text-left">
//             <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">{profile.user.name}</h2>
//             <p className="text-gray-500 mt-2">{profile.user.email}</p>
//             <p className="text-gray-500 mt-2"><strong>Phone:</strong> {profile.phone}</p>
//             <p className="text-gray-500 mt-1"><strong>Gender:</strong> {profile.gender}</p>
//             <p className="text-gray-500 mt-1"><strong>Date of Birth:</strong> {new Date(profile.dateOfBirth).toLocaleDateString()}</p>
//           </div>
//         </div>

//         {/* Addresses */}
//         <div className="mt-10">
//           <h3 className="text-xl font-semibold text-gray-700 mb-6">Addresses</h3>
//           <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
//             {profile.addresses.map((address) => (
//               <div
//                 key={address._id}
//                 className="bg-gray-50 p-5 rounded-xl shadow hover:shadow-md border border-gray-200 transition"
//               >
//                 <p className="text-gray-700 mb-1"><strong>Street:</strong> {address.street}</p>
//                 <p className="text-gray-700 mb-1"><strong>City:</strong> {address.city}</p>
//                 <p className="text-gray-700 mb-1"><strong>State:</strong> {address.state}</p>
//                 <p className="text-gray-700 mb-1"><strong>Postal Code:</strong> {address.postalCode}</p>
//                 <p className="text-gray-700"><strong>Country:</strong> {address.country}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default GetProfile;

















// import React, { useEffect, useState } from "react";
// import { fetchWithAuth } from "../refreshtoken/api"; // adjust path if needed
// import { useNavigate } from "react-router-dom";

// function GetProfile() {
//   const [profile, setProfile] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [bgColor, setBgColor] = useState("bg-gray-400"); // For fallback initial
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         const data = await fetchWithAuth(
//           "https://ecommerce-backend-y1bv.onrender.com/api/user/get-profile"
//         );
//         setProfile(data.profile);

//         // Set background color for initial if image is missing
//         if (!data.profile.profileImage) {
//           const colors = [
//             "bg-red-500", "bg-green-500", "bg-blue-500",
//             "bg-yellow-500", "bg-indigo-500", "bg-purple-500",
//             "bg-pink-500", "bg-teal-500", "bg-orange-500"
//           ];
//           let hash = 0;
//           const name = data.profile.user.name || "";
//           for (let i = 0; i < name.length; i++) {
//             hash = name.charCodeAt(i) + ((hash << 5) - hash);
//           }
//           setBgColor(colors[Math.abs(hash) % colors.length]);
//         }

//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProfile();
//   }, []);

//   const getInitial = (name) => (name ? name.charAt(0).toUpperCase() : "?");

//   if (loading)
//     return <div className="flex justify-center items-center h-screen text-lg font-medium">Loading...</div>;
//   if (error)
//     return <div className="text-red-500 text-center mt-10 text-lg font-medium">{error}</div>;
//   if (!profile)
//     return <div className="text-center mt-10 text-lg font-medium">No profile data found</div>;

//   return (
//     <div className="flex justify-center px-4 py-10 bg-gray-100 min-h-screen">
//       <div className="bg-white shadow-xl rounded-2xl max-w-4xl w-full p-6 sm:p-10 relative">
//         {/* Edit Button for medium and larger screens */}
//         <button
//           onClick={() => navigate("/edit-profile")}
//           className="hidden md:inline-block absolute top-6 right-6 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition font-semibold"
//         >
//           Edit Profile
//         </button>

//         <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
//           {/* Profile Image or Initial */}
//           <div className="flex-shrink-0 flex flex-col items-center md:items-start">
//             {profile.profileImage ? (
//               <img
//                 src={profile.profileImage}
//                 alt="Profile"
//                 className="w-36 h-36 sm:w-40 sm:h-40 rounded-full object-cover border-4 border-indigo-500 shadow-md"
//               />
//             ) : (
//               <div
//                 className={`w-36 h-36 sm:w-40 sm:h-40 rounded-full flex items-center justify-center text-white text-5xl font-bold shadow-md ${bgColor}`}
//               >
//                 {getInitial(profile.user.name)}
//               </div>
//             )}

//             {/* Edit Button for small screens */}
//             <button
//               onClick={() => navigate("/edit-profile")}
//               className="mt-4 md:hidden bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition font-semibold"
//             >
//               Edit Profile
//             </button>
//           </div>

//           {/* User Info */}
//           <div className="flex-1 text-center md:text-left">
//             <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">{profile.user.name}</h2>
//             <p className="text-gray-500 mt-2">{profile.user.email}</p>
//             <p className="text-gray-500 mt-2"><strong>Phone:</strong> {profile.phone}</p>
//             <p className="text-gray-500 mt-1"><strong>Gender:</strong> {profile.gender}</p>
//             <p className="text-gray-500 mt-1"><strong>Date of Birth:</strong> {new Date(profile.dateOfBirth).toLocaleDateString()}</p>
//           </div>
//         </div>

//         {/* Addresses */}
//         <div className="mt-10">
//           <h3 className="text-xl font-semibold text-gray-700 mb-6">Addresses</h3>
//           <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
//             {profile.addresses.map((address) => (
//               <div
//                 key={address._id}
//                 className="bg-gray-50 p-5 rounded-xl shadow hover:shadow-md border border-gray-200 transition"
//               >
//                 <p className="text-gray-700 mb-1"><strong>Street:</strong> {address.street}</p>
//                 <p className="text-gray-700 mb-1"><strong>City:</strong> {address.city}</p>
//                 <p className="text-gray-700 mb-1"><strong>State:</strong> {address.state}</p>
//                 <p className="text-gray-700 mb-1"><strong>Postal Code:</strong> {address.postalCode}</p>
//                 <p className="text-gray-700"><strong>Country:</strong> {address.country}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default GetProfile;
















import React, { useEffect, useState } from "react";
import { fetchWithAuth } from "../refreshtoken/api"; // adjust path if needed
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
      <div className="text-red-500 text-center mt-10 text-lg font-medium">{error}</div>
    );
  if (!profile)
    return (
      <div className="text-center mt-10 text-lg font-medium">No profile data found</div>
    );

  return (
    <div className="flex justify-center px-4 py-16 bg-gradient-to-br from-gray-100 to-gray-200 min-h-screen">
      <div className="bg-white shadow-2xl rounded-3xl max-w-5xl w-full p-8 sm:p-12 relative border border-gray-200">
        
        {/* Edit Button for medium and larger screens */}
        <button
          onClick={() => navigate("/edit-profile")}
          className="hidden md:inline-block absolute top-6 right-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition font-semibold shadow-lg"
        >
          Edit Profile
        </button>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          {/* Profile Image or Initial */}
          <div className="flex-shrink-0 flex flex-col items-center md:items-start">
            {profile.profileImage ? (
              <img
                src={profile.profileImage}
                alt="Profile"
                className="w-40 h-40 sm:w-48 sm:h-48 rounded-full object-cover border-4 border-indigo-500 shadow-xl"
              />
            ) : (
              <div
                className={`w-40 h-40 sm:w-48 sm:h-48 rounded-full flex items-center justify-center text-white text-6xl font-bold shadow-xl ${bgColor}`}
              >
                {getInitial(profile.user.name)}
              </div>
            )}

            {/* Edit Button for small screens */}
            <button
              onClick={() => navigate("/edit-profile")}
              className="mt-4 md:hidden bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition font-semibold shadow-md"
            >
              Edit Profile
            </button>
          </div>

          {/* User Info */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800">
              {profile.user.name}
            </h2>
            <p className="text-gray-500 mt-2 text-lg">{profile.user.email}</p>
            <div className="mt-4 space-y-2 text-gray-600">
              <p><span className="font-semibold">Phone:</span> {profile.phone}</p>
              <p><span className="font-semibold">Gender:</span> {profile.gender}</p>
              {/* <p><span className="font-semibold">Date of Birth:</span> {new Date(profile.dateOfBirth).toLocaleDateString()}</p> */}
              <p className="font-semibold">  <span>Date of Birth:</span>{" "}{profile.dateOfBirth ? new Date(profile.dateOfBirth).toLocaleDateString() : ""}</p>
            </div>
          </div>
        </div>

        {/* Addresses */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-700 mb-6 border-b-2 border-gray-200 pb-2">Addresses</h3>
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
            {profile.addresses.map((address) => (
              <div
                key={address._id}
                className=""
              >
                <p className="text-gray-700 mb-1"><span className="font-semibold">Street:</span> {address.street}</p>
                <p className="text-gray-700 mb-1"><span className="font-semibold">City:</span> {address.city}</p>
                <p className="text-gray-700 mb-1"><span className="font-semibold">State:</span> {address.state}</p>
                <p className="text-gray-700 mb-1"><span className="font-semibold">Postal Code:</span> {address.postalCode}</p>
                <p className="text-gray-700"><span className="font-semibold">Country:</span> {address.country}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetProfile;
