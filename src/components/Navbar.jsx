// import React, { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import ProfileModel from "./ProfileModel";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [isModelOpen, setIsModelOpen] = useState(false);
//   const [activeCategory, setActiveCategory] = useState("Home");
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [userName, setUserName] = useState("");
//   const navigate = useNavigate();

//   const categories = [
//     "New Arrivals",
//     "Men",
//     "Women",
//     "Kids",
//     "Accessories",
//     "Footwear",
//     "Sale",
//   ];

//   // 🔄 Refresh token function
//   const refreshAccessToken = async () => {
//     try {
//       const refreshToken = localStorage.getItem("refreshToken");
//       if (!refreshToken) return false;

//       const res = await fetch(
//         "https://ecommerce-backend-y1bv.onrender.com/api/user/refresh",
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ refreshToken }),
//         }
//       );

//       if (!res.ok) throw new Error("Refresh failed");

//       const data = await res.json();
//       if (data.accessToken) {
//         localStorage.setItem("accessToken", data.accessToken);
//         return true;
//       }
//       return false;
//     } catch (err) {
//       console.error("Token refresh failed:", err);
//       return false;
//     }
//   };

//   // ✅ Validate or refresh token on mount
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

//   // 🚪 Logout
//   const handleLogout = () => {
//     localStorage.removeItem("accessToken");
//     localStorage.removeItem("refreshToken");
//     localStorage.removeItem("user");
//     setIsLoggedIn(false);
//     setUserName("");
//     setIsModelOpen(false);
//     navigate("/hero-section");
//   };

//   return (
//     <nav className="w-full border-b bg-white shadow-sm font-sans">
//       <div className="flex justify-between items-center bg-gray-100 px-4 py-2 text-xs">
//         {!isLoggedIn && (
//           <div className="space-x-2">
//             <Link to="/login" className="hover:text-blue-600">
//               Hi! Sign in
//             </Link>
//             <span>or</span>
//             <Link to="/signup" className="hover:text-blue-600">
//               Register
//             </Link>
//           </div>
//         )}

//         {isLoggedIn && (
//           <div className="flex justify-end items-center gap-2 relative">
//             <button
//               onClick={() => setIsModelOpen(!isModelOpen)}
//               className="flex items-center gap-2 hover:text-blue-600"
//             >
//               Hi {userName} ▼
//             </button>

//             <ProfileModel
//               isOpen={isModelOpen}
//               onClose={() => setIsModelOpen(false)}
//               onLogout={handleLogout}
//             />
//           </div>
//         )}

//         <div className="hidden sm:flex space-x-4">
//           <a href="#" className="hover:text-blue-600">
//             Daily Deals
//           </a>
//           <a href="#" className="hover:text-blue-600">
//             Gift Cards
//           </a>
//           <a href="#" className="hover:text-blue-600">
//             Help & Contact
//           </a>
//         </div>
//       </div>

//       <div className="flex items-center justify-between px-4 py-3 md:px-8">
//         <div className="text-4xl font-bold text-blue-600">
//           <a href="#">FashionHub</a>
//         </div>

//         <select className="hidden md:block border rounded px-3 py-2 text-sm focus:outline-none hover:border-blue-600">
//           <option>Shop by Category</option>
//           {categories.map((cat) => (
//             <option key={cat}>{cat}</option>
//           ))}
//         </select>

//         <div className="flex flex-1 max-w-3xl mx-4">
//           <input
//             type="text"
//             placeholder="Search for clothing, shoes, or accessories"
//             className="flex-1 border border-gray-300 rounded-l px-3 py-2 text-sm focus:outline-none"
//           />
//           <button className="bg-blue-600 text-white px-4 rounded-r hover:bg-blue-700">
//             Search
//           </button>
//         </div>

//         <button
//           className="md:hidden p-2 border rounded hover:bg-gray-100"
//           onClick={() => setMenuOpen(!menuOpen)}
//         >
//           Menu
//         </button>
//       </div>

//       <div className="hidden md:flex justify-center space-x-6 bg-gray-50 py-2 border-t text-sm">
//         {categories.map((cat) => (
//           <button
//             key={cat}
//             onClick={() => setActiveCategory(cat)}
//             className={`hover:text-blue-600 ${
//               activeCategory === cat
//                 ? "text-blue-600 font-semibold border-b-2 border-blue-600 pb-1"
//                 : "text-gray-700"
//             }`}
//           >
//             {cat}
//           </button>
//         ))}
//       </div>

//       {menuOpen && (
//         <div className="md:hidden flex flex-col bg-gray-50 border-t p-3 space-y-2 text-sm">
//           {categories.map((cat) => (
//             <button
//               key={cat}
//               onClick={() => {
//                 setActiveCategory(cat);
//                 setMenuOpen(false);
//               }}
//               className={`text-left ${
//                 activeCategory === cat
//                   ? "text-blue-600 font-semibold"
//                   : "text-gray-700"
//               }`}
//             >
//               {cat}
//             </button>
//           ))}
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;





// import React, { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import ProfileModel from "./ProfileModel";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [isModelOpen, setIsModelOpen] = useState(false);
//   const [activeCategory, setActiveCategory] = useState("Home");
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [userName, setUserName] = useState("");
//   const navigate = useNavigate();

//   const categories = [
//     "New Arrivals",
//     "Men",
//     "Women",
//     "Kids",
//     "Accessories",
//     "Footwear",
//     "Sale",
//   ];

//   // Refresh access token
//   const refreshAccessToken = async () => {
//     try {
//       const refreshToken = localStorage.getItem("refreshToken");
//       if (!refreshToken) return false;

//       const res = await fetch(
//         "https://ecommerce-backend-y1bv.onrender.com/api/user/refresh",
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ refreshToken }),
//         }
//       );

//       if (!res.ok) throw new Error("Refresh failed");

//       const data = await res.json();
//       if (data.accessToken) {
//         localStorage.setItem("accessToken", data.accessToken);
//         return true;
//       }
//       return false;
//     } catch (err) {
//       console.error("Token refresh failed:", err);
//       return false;
//     }
//   };

//   // Validate token on mount
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
//           const refreshed = await refreshAccessToken();
//           if (refreshed) return checkLogin();
//           else throw new Error("Refresh token invalid");
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

//   // Logout
//   const handleLogout = () => {
//     localStorage.removeItem("accessToken");
//     localStorage.removeItem("refreshToken");
//     localStorage.removeItem("user");
//     setIsLoggedIn(false);
//     setUserName("");
//     setIsModelOpen(false);
//     navigate("/hero-section");
//   };

//   return (
//     <nav className="w-full border-b bg-white shadow-sm font-sans">
//       {/* Top Navbar */}
//       <div className="flex justify-between items-center bg-[#002349] px-4 py-2 text-xs text-gray-100">
//         {!isLoggedIn && (
//           <div className="space-x-2">
//             <Link to="/login" className="hover:text-[#957C3D]">
//               Hi! Sign in
//             </Link>
//             <span>or</span>
//             <Link to="/signup" className="hover:text-[#957C3D]">
//               Register
//             </Link>
//           </div>
//         )}
//         {isLoggedIn && (
//           <div className="flex justify-end items-center gap-2 relative">
//             <button
//               onClick={() => setIsModelOpen(!isModelOpen)}
//               className="flex items-center gap-2 hover:text-[#957C3D]"
//             >
//               Hi {userName} ▼
//             </button>
//             <ProfileModel
//               isOpen={isModelOpen}
//               onClose={() => setIsModelOpen(false)}
//               onLogout={handleLogout}
//             />
//           </div>
//         )}
//         <div className="hidden sm:flex space-x-4">
//           <a href="#" className="hover:text-[#957C3D]">
//             Daily Deals
//           </a>
//           <a href="#" className="hover:text-[#957C3D]">
//             Gift Cards
//           </a>
//           <a href="#" className="hover:text-[#957C3D]">
//             Help & Contact
//           </a>
//         </div>
//       </div>

//       {/* Main Navbar */}
//       <div className="flex items-center justify-between px-4 py-3 md:px-8">
//         <div className="text-4xl font-bold text-[#002349]">
//           <a href="#">FashionHub</a>
//         </div>

//         <select className="hidden md:block border rounded px-3 py-2 text-sm focus:outline-none hover:border-[#957C3D]">
//           <option>Shop by Category</option>
//           {categories.map((cat) => (
//             <option key={cat}>{cat}</option>
//           ))}
//         </select>

//         <div className="flex flex-1 max-w-3xl mx-4">
//           <input
//             type="text"
//             placeholder="Search for clothing, shoes, or accessories"
//             className="flex-1 border border-gray-300 rounded-l px-3 py-2 text-sm focus:outline-none"
//           />
//           <button className="bg-[#002349] text-white px-4 rounded-r hover:bg-[#957C3D]">
//             Search
//           </button>
//         </div>

//         <button
//           className="md:hidden p-2 border rounded hover:bg-gray-100"
//           onClick={() => setMenuOpen(!menuOpen)}
//         >
//           Menu
//         </button>
//       </div>

//       {/* Category Menu */}
//       <div className="hidden md:flex justify-center space-x-6 bg-gray-50 py-2 border-t text-sm">
//         {categories.map((cat) => (
//           <button
//             key={cat}
//             onClick={() => setActiveCategory(cat)}
//             className={`hover:text-[#957C3D] ${
//               activeCategory === cat
//                 ? "text-[#002349] font-semibold border-b-2 border-[#957C3D] pb-1"
//                 : "text-gray-700"
//             }`}
//           >
//             {cat}
//           </button>
//         ))}
//       </div>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <div className="md:hidden flex flex-col bg-gray-50 border-t p-3 space-y-2 text-sm">
//           {categories.map((cat) => (
//             <button
//               key={cat}
//               onClick={() => {
//                 setActiveCategory(cat);
//                 setMenuOpen(false);
//               }}
//               className={`text-left ${
//                 activeCategory === cat
//                   ? "text-[#002349] font-semibold"
//                   : "text-gray-700"
//               }`}
//             >
//               {cat}
//             </button>
//           ))}
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUserCircle, FaShoppingCart, FaBars, FaTimes, FaSearch, FaHeart } from "react-icons/fa";
import ProfileModel from "./ProfileModel";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false); // mobile categories
  const [isModelOpen, setIsModelOpen] = useState(false); // profile modal
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();
  const profileRef = useRef(null);

  const categories = [
    { name: "Men", sub: ["Shirts", "T-Shirts", "Jeans", "Watches"] },
    { name: "Women", sub: ["Dresses", "Tops", "Shoes", "Bags"] },
    { name: "Kids", sub: ["Toys", "Clothes", "Accessories"] },
    { name: "Electronics", sub: ["Mobiles", "Laptops", "Headphones"] },
    { name: "Home & Living", sub: ["Furniture", "Kitchen", "Decor"] },
    { name: "Beauty", sub: ["Makeup", "Skincare", "Perfume"] },
  ];

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setIsLoggedIn(true);
      setUserName(user.name);
    }

    // Close modal on outside click
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsModelOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    setUserName("");
    setIsModelOpen(false);
    navigate("/"); // redirect after logout
  };

  return (
    <nav className="w-full bg-white shadow-lg sticky top-0 z-50 font-sans">
      {/* Top Section */}
      <div className="flex justify-between items-center px-6 py-3 border-b">
        {/* Logo */}
        <Link to="/" className="text-3xl font-extrabold text-[#002349] tracking-wide">
          Fashion<span className="text-[#957C3D]">Hub</span>
        </Link>

        {/* Search Bar */}
        <div className="hidden md:flex items-center w-1/2 border rounded-full overflow-hidden shadow-sm">
          <input
            type="text"
            placeholder="Search for products, brands and more..."
            className="flex-1 px-4 py-2 text-sm outline-none"
          />
          <button className="bg-[#002349] text-white px-4 py-2 hover:bg-[#957C3D] transition">
            <FaSearch />
          </button>
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-6">
          {/* Wishlist */}
          <Link to="/wishlist" className="relative hover:text-[#957C3D]">
            <FaHeart size={20} />
            <span className="absolute -top-2 -right-2 bg-[#957C3D] text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
              2
            </span>
          </Link>

          {/* Cart */}
          <Link to="/cart" className="relative hover:text-[#957C3D]">
            <FaShoppingCart size={20} />
            <span className="absolute -top-2 -right-2 bg-[#957C3D] text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
              3
            </span>
          </Link>

          {/* Profile / Login */}
          {isLoggedIn ? (
            <div className="relative" ref={profileRef}>
              <button
                onClick={() => setIsModelOpen(!isModelOpen)}
                className="flex items-center gap-2 text-gray-700 hover:text-[#957C3D] transition"
              >
                <FaUserCircle size={22} />
                <span className="font-medium">{userName}</span> ▼
              </button>

              <ProfileModel
                isOpen={isModelOpen}
                onClose={() => setIsModelOpen(false)}
                onLogout={handleLogout}
              />
            </div>
          ) : (
            <div className="flex items-center gap-4">
              <Link
                to="/login"
                className="px-4 py-2 text-sm font-medium text-white bg-[#002349] rounded-full hover:bg-[#957C3D] transition"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="px-4 py-2 text-sm font-medium border border-[#002349] text-[#002349] rounded-full hover:bg-[#002349] hover:text-white transition"
              >
                Register
              </Link>
            </div>
          )}

          {/* Mobile Menu Icon */}
          <button className="md:hidden text-xl" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Bottom Categories */}
      <div className="hidden md:flex justify-center gap-8 py-2 bg-gray-50 border-t text-sm font-medium">
        {categories.map((cat, index) => (
          <div key={index} className="relative group cursor-pointer hover:text-[#957C3D]">
            {cat.name}
            <div className="absolute left-0 mt-2 hidden group-hover:flex flex-col bg-white shadow-md rounded-lg w-40 z-50">
              {cat.sub.map((sub, i) => (
                <Link
                  key={i}
                  to={`/category/${sub.toLowerCase()}`}
                  className="px-4 py-2 hover:bg-gray-100"
                >
                  {sub}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-50 border-t p-4 space-y-3 text-sm">
          {categories.map((cat, index) => (
            <div key={index} className="border-b pb-2">
              <button
                className="flex justify-between items-center w-full text-left font-medium"
                onClick={() => setDropdownOpen(dropdownOpen === cat.name ? "" : cat.name)}
              >
                {cat.name}
                <span className="text-[#957C3D]">{dropdownOpen === cat.name ? "▲" : "▼"}</span>
              </button>
              {dropdownOpen === cat.name && (
                <div className="mt-2 pl-4 space-y-1">
                  {cat.sub.map((sub, i) => (
                    <Link
                      key={i}
                      to={`/category/${sub.toLowerCase()}`}
                      className="block hover:text-[#957C3D]"
                      onClick={() => setMenuOpen(false)}
                    >
                      {sub}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
