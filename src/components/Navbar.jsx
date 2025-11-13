// // // src/components/Navbar.jsx
// // import React, { useState, useEffect, useRef } from "react";
// // import { Link, useNavigate } from "react-router-dom";
// // import {
// //   FaUserCircle,
// //   FaShoppingCart,
// //   FaBars,
// //   FaTimes,
// //   FaSearch,
// //   FaHeart,
// // } from "react-icons/fa";
// // import ProfileModel from "./ProfileModel";

// // const Navbar = () => {
// //   const [menuOpen, setMenuOpen] = useState(false);
// //   const [dropdownOpen, setDropdownOpen] = useState("");
// //   const [isModelOpen, setIsModelOpen] = useState(false);
// //   const [isLoggedIn, setIsLoggedIn] = useState(false);
// //   const [userName, setUserName] = useState("");
// //   const navigate = useNavigate();
// //   const profileRef = useRef(null);

// //   const categories = [
// //     { name: "Men", sub: ["Shirts", "T-Shirts", "Jeans", "Watches"] },
// //     { name: "Women", sub: ["Dresses", "Tops", "Shoes", "Bags"] },
// //     { name: "Kids", sub: ["Toys", "Clothes", "Accessories"] },
// //     { name: "Electronics", sub: ["Mobiles", "Laptops", "Headphones"] },
// //     { name: "Home & Living", sub: ["Furniture", "Kitchen", "Decor"] },
// //     { name: "Beauty", sub: ["Makeup", "Skincare", "Perfume"] },
// //   ];

// //   useEffect(() => {
// //     const user = JSON.parse(localStorage.getItem("user"));
// //     if (user) {
// //       setIsLoggedIn(true);
// //       setUserName(user.name);
// //     }

// //     const handleClickOutside = (event) => {
// //       if (profileRef.current && !profileRef.current.contains(event.target)) {
// //         setIsModelOpen(false);
// //       }
// //     };
// //     document.addEventListener("mousedown", handleClickOutside);
// //     return () => document.removeEventListener("mousedown", handleClickOutside);
// //   }, []);

// //   const handleLogout = () => {
// //     localStorage.clear();
// //     setIsLoggedIn(false);
// //     setUserName("");
// //     setIsModelOpen(false);
// //     navigate("/");
// //   };

// //   return (
// //     <nav className="w-full bg-white shadow-md sticky top-0 z-50 font-sans">
// //       {/* 🔹 Top Navbar Section */}
// //       <div className="flex justify-between items-center px-4 sm:px-6 py-3 border-b">
// //         {/* Logo */}
// //         <Link
// //           to="/"
// //           className="text-2xl sm:text-3xl font-extrabold text-[#002349] tracking-wide"
// //         >
// //           Fashion<span className="text-[#957C3D]">Hub</span>
// //         </Link>

// //         {/* 🔹 Search Bar (Hidden on small screens) */}
// //         <div className="hidden md:flex items-center w-1/2 border rounded-full overflow-hidden shadow-sm">
// //           <input
// //             type="text"
// //             placeholder="Search for products, brands and more..."
// //             className="flex-1 px-4 py-2 text-sm outline-none"
// //           />
// //           <button className="bg-[#002349] text-white px-4 py-2 hover:bg-[#957C3D] transition">
// //             <FaSearch />
// //           </button>
// //         </div>

// //         {/* 🔹 Right Icons */}
// //         <div className="flex items-center gap-4 sm:gap-6">
// //           {/* Wishlist */}
// //           <Link to="/wishlist" className="relative hover:text-[#957C3D]">
// //             <FaHeart size={20} />
// //             <span className="absolute -top-2 -right-2 bg-[#957C3D] text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
// //               2
// //             </span>
// //           </Link>

// //           {/* Cart */}
// //           <Link to="/cart" className="relative hover:text-[#957C3D]">
// //             <FaShoppingCart size={20} />
// //             <span className="absolute -top-2 -right-2 bg-[#957C3D] text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
// //               3
// //             </span>
// //           </Link>

// //           {/* Profile / Auth */}
// //           {isLoggedIn ? (
// //             <div className="relative" ref={profileRef}>
// //               <button
// //                 onClick={() => setIsModelOpen(!isModelOpen)}
// //                 className="flex items-center gap-1 sm:gap-2 text-gray-700 hover:text-[#957C3D] transition"
// //               >
// //                 <FaUserCircle size={22} />
// //                 <span className="hidden sm:inline font-medium">{userName}</span>
// //                 <span className="text-xs sm:text-sm">▼</span>
// //               </button>

// //               <ProfileModel
// //                 isOpen={isModelOpen}
// //                 onClose={() => setIsModelOpen(false)}
// //                 onLogout={handleLogout}
// //               />
// //             </div>
// //           ) : (
// //             <div className="hidden sm:flex items-center gap-3">
// //               <Link
// //                 to="/login"
// //                 className="px-4 py-1.5 text-sm font-medium text-white bg-[#002349] rounded-full hover:bg-[#957C3D] transition"
// //               >
// //                 Login
// //               </Link>
// //               <Link
// //                 to="/signup"
// //                 className="px-4 py-1.5 text-sm font-medium border border-[#002349] text-[#002349] rounded-full hover:bg-[#002349] hover:text-white transition"
// //               >
// //                 Register
// //               </Link>
// //             </div>
// //           )}

// //           {/* Mobile Menu Toggle */}
// //           <button
// //             className="md:hidden text-2xl focus:outline-none"
// //             onClick={() => setMenuOpen(!menuOpen)}
// //           >
// //             {menuOpen ? <FaTimes /> : <FaBars />}
// //           </button>
// //         </div>
// //       </div>

// //       {/* 🔹 Desktop Categories */}
// //       <div className="hidden md:flex justify-center gap-8 py-2 bg-gray-50 border-t text-sm font-medium">
// //         {categories.map((cat, index) => (
// //           <div
// //             key={index}
// //             className="relative group cursor-pointer hover:text-[#957C3D]"
// //           >
// //             {cat.name}
// //             <div className="absolute left-0 mt-2 hidden group-hover:flex flex-col bg-white shadow-md rounded-lg w-40 z-50">
// //               {cat.sub.map((sub, i) => (
// //                 <Link
// //                   key={i}
// //                   to={`/category/${sub.toLowerCase()}`}
// //                   className="px-4 py-2 hover:bg-gray-100"
// //                 >
// //                   {sub}
// //                 </Link>
// //               ))}
// //             </div>
// //           </div>
// //         ))}
// //       </div>

// //       {/* 🔹 Mobile Menu */}
// //       {menuOpen && (
// //         <div className="md:hidden bg-gray-50 border-t p-4 space-y-3 text-sm animate-slide-down">
// //           {/* Mobile Search Bar */}
// //           <div className="flex items-center border rounded-full overflow-hidden">
// //             <input
// //               type="text"
// //               placeholder="Search for products..."
// //               className="flex-1 px-3 py-2 text-sm outline-none"
// //             />
// //             <button className="bg-[#002349] text-white px-3 py-2">
// //               <FaSearch />
// //             </button>
// //           </div>

// //           {/* Mobile Auth Buttons */}
// //           {!isLoggedIn && (
// //             <div className="flex gap-3 mt-2">
// //               <Link
// //                 to="/login"
// //                 onClick={() => setMenuOpen(false)}
// //                 className="flex-1 text-center px-4 py-2 text-sm font-medium text-white bg-[#002349] rounded-full hover:bg-[#957C3D] transition"
// //               >
// //                 Login
// //               </Link>
// //               <Link
// //                 to="/signup"
// //                 onClick={() => setMenuOpen(false)}
// //                 className="flex-1 text-center px-4 py-2 text-sm font-medium border border-[#002349] text-[#002349] rounded-full hover:bg-[#002349] hover:text-white transition"
// //               >
// //                 Register
// //               </Link>
// //             </div>
// //           )}

// //           {/* Categories Accordion */}
// //           {categories.map((cat, index) => (
// //             <div key={index} className="border-b pb-2">
// //               <button
// //                 className="flex justify-between items-center w-full text-left font-medium"
// //                 onClick={() =>
// //                   setDropdownOpen(dropdownOpen === cat.name ? "" : cat.name)
// //                 }
// //               >
// //                 {cat.name}
// //                 <span className="text-[#957C3D]">
// //                   {dropdownOpen === cat.name ? "▲" : "▼"}
// //                 </span>
// //               </button>
// //               {dropdownOpen === cat.name && (
// //                 <div className="mt-2 pl-4 space-y-1">
// //                   {cat.sub.map((sub, i) => (
// //                     <Link
// //                       key={i}
// //                       to={`/category/${sub.toLowerCase()}`}
// //                       className="block hover:text-[#957C3D]"
// //                       onClick={() => setMenuOpen(false)}
// //                     >
// //                       {sub}
// //                     </Link>
// //                   ))}
// //                 </div>
// //               )}
// //             </div>
// //           ))}
// //         </div>
// //       )}
// //     </nav>
// //   );
// // };

// // export default Navbar;






// // Fetch categories from API and display subcategories without transparency
// import React, { useState, useEffect, useRef } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import {
//   FaUserCircle,
//   FaShoppingCart,
//   FaBars,
//   FaTimes,
//   FaSearch,
//   FaHeart,
//   FaChevronDown,
// } from "react-icons/fa";
// import ProfileModel from "./ProfileModel";
// import { fetchWithAuth } from "../refreshtoken/api";

// const BASE_URL = "https://ecommerce-backend-y1bv.onrender.com/api";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [isModelOpen, setIsModelOpen] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [userName, setUserName] = useState("");
//   const [wishlistCount, setWishlistCount] = useState(0);
//   const [cartCount, setCartCount] = useState(0);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [categories, setCategories] = useState([]);
//   const [hoveredCategory, setHoveredCategory] = useState(null);
//   const navigate = useNavigate();
//   const profileRef = useRef(null);

//   // ✅ Fetch Categories
//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const res = await fetch(`${BASE_URL}/product`);
//         if (!res.ok) throw new Error("Failed to fetch categories");
//         const data = await res.json();

//         const grouped = {};
//         data.forEach((item) => {
//           if (!item.category) return;
//           if (!grouped[item.category]) grouped[item.category] = new Set();
//           if (item.subcategory) grouped[item.category].add(item.subcategory);
//         });

//         const categoryData = Object.entries(grouped).map(([cat, subs]) => ({
//           category: cat,
//           subcategories: Array.from(subs),
//         }));

//         setCategories(categoryData);
//       } catch (err) {
//         console.error("Error fetching categories:", err);
//       }
//     };
//     fetchCategories();
//   }, []);

//   // ✅ Fetch Wishlist Count
//   const fetchWishlistCount = async () => {
//     try {
//       const data = await fetchWithAuth(`${BASE_URL}/wishlist/count`, {
//         method: "GET",
//       });
//       if (data && typeof data.count === "number") {
//         setWishlistCount(data.count);
//       }
//     } catch (err) {
//       console.error("Failed to fetch wishlist count:", err);
//     }
//   };

//   // ✅ Fetch Cart Count
//   const fetchCartCount = async () => {
//     try {
//       const data = await fetchWithAuth(`${BASE_URL}/cart/count`, {
//         method: "GET",
//       });
//       if (data && typeof data.count === "number") {
//         setCartCount(data.count);
//       }
//     } catch (err) {
//       console.error("Failed to fetch cart count:", err);
//     }
//   };

//   // ✅ Check login & initialize counts
//   useEffect(() => {
//     const user = JSON.parse(localStorage.getItem("user"));
//     if (user) {
//       setIsLoggedIn(true);
//       setUserName(user.name);
//       fetchWishlistCount();
//       fetchCartCount();
//     }

//     const handleClickOutside = (event) => {
//       if (profileRef.current && !profileRef.current.contains(event.target)) {
//         setIsModelOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   // ✅ Listen for real-time updates from other components
//   useEffect(() => {
//     const updateWishlist = () => fetchWishlistCount();
//     const updateCart = () => fetchCartCount();

//     window.addEventListener("wishlistUpdated", updateWishlist);
//     window.addEventListener("cartUpdated", updateCart);

//     return () => {
//       window.removeEventListener("wishlistUpdated", updateWishlist);
//       window.removeEventListener("cartUpdated", updateCart);
//     };
//   }, []);

//   // ✅ Logout
//   const handleLogout = () => {
//     localStorage.clear();
//     setIsLoggedIn(false);
//     setUserName("");
//     setIsModelOpen(false);
//     setWishlistCount(0);
//     setCartCount(0);
//     navigate("/");
//   };

//   // ✅ Search Navigation
//   const handleSearch = (e) => {
//     e.preventDefault();
//     if (searchTerm.trim()) {
//       navigate(`/search?query=${encodeURIComponent(searchTerm.trim())}`);
//       setSearchTerm("");
//       setMenuOpen(false);
//     }
//   };

//   return (
//     <nav className="w-full bg-white shadow-md sticky top-0 z-50 font-sans">
//       {/* 🔹 Top Navbar */}
//       <div className="flex justify-between items-center px-4 sm:px-6 py-3 border-b">
//         {/* Logo */}
//         <Link
//           to="/"
//           className="text-2xl sm:text-3xl font-extrabold text-[#002349] tracking-wide"
//         >
//           Fashion<span className="text-[#957C3D]">Hub</span>
//         </Link>

//         {/* 🔹 Search Bar (Desktop) */}
//         <form
//           onSubmit={handleSearch}
//           className="hidden md:flex items-center w-1/2 border rounded-full overflow-hidden shadow-sm"
//         >
//           <input
//             type="text"
//             placeholder="Search for products, brands and more..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="flex-1 px-4 py-2 text-sm outline-none"
//           />
//           <button
//             type="submit"
//             className="bg-[#002349] text-white px-4 py-2 hover:bg-[#957C3D] transition"
//           >
//             <FaSearch />
//           </button>
//         </form>

//         {/* 🔹 Right Icons */}
//         <div className="flex items-center gap-4 sm:gap-6">
//           {/* Wishlist */}
//           <Link to="/wishlist" className="relative hover:text-[#957C3D]">
//             <FaHeart size={20} />
//             {wishlistCount > 0 && (
//               <span className="absolute -top-2 -right-2 bg-[#957C3D] text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
//                 {wishlistCount}
//               </span>
//             )}
//           </Link>

//           {/* Cart */}
//           <Link to="/cart" className="relative hover:text-[#957C3D]">
//             <FaShoppingCart size={20} />
//             {cartCount > 0 && (
//               <span className="absolute -top-2 -right-2 bg-[#957C3D] text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
//                 {cartCount}
//               </span>
//             )}
//           </Link>

//           {/* Profile */}
//           {isLoggedIn ? (
//             <div className="relative" ref={profileRef}>
//               <button
//                 onClick={() => setIsModelOpen(!isModelOpen)}
//                 className="flex items-center gap-2 text-gray-700 hover:text-[#957C3D] transition"
//               >
//                 <FaUserCircle size={22} />
//                 <span className="hidden sm:inline font-medium">{userName}</span>
//                 <FaChevronDown size={12} />
//               </button>

//               <ProfileModel
//                 isOpen={isModelOpen}
//                 onClose={() => setIsModelOpen(false)}
//                 onLogout={handleLogout}
//               />
//             </div>
//           ) : (
//             <div className="hidden sm:flex items-center gap-3">
//               <Link
//                 to="/login"
//                 className="px-4 py-1.5 text-sm font-medium text-white bg-[#002349] rounded-full hover:bg-[#957C3D] transition"
//               >
//                 Login
//               </Link>
//               <Link
//                 to="/signup"
//                 className="px-4 py-1.5 text-sm font-medium border border-[#002349] text-[#002349] rounded-full hover:bg-[#002349] hover:text-white transition"
//               >
//                 Register
//               </Link>
//             </div>
//           )}

//           {/* Mobile Menu Button */}
//           <button
//             className="md:hidden text-2xl focus:outline-none"
//             onClick={() => setMenuOpen(!menuOpen)}
//           >
//             {menuOpen ? <FaTimes /> : <FaBars />}
//           </button>
//         </div>
//       </div>

//       {/* 🔹 Desktop Categories */}
//       <div className="hidden md:flex justify-center gap-8 py-2 bg-gray-50 border-t text-sm font-medium relative">
//         {categories.map((cat, index) => (
//           <div
//             key={index}
//             className="relative group"
//             onMouseEnter={() => setHoveredCategory(cat.category)}
//             onMouseLeave={() => setHoveredCategory(null)}
//           >
//             <button
//               className="hover:text-[#957C3D] transition"
//               onClick={() =>
//                 navigate(`/category/${encodeURIComponent(cat.category)}`)
//               }
//             >
//               {cat.category}
//             </button>

//             {hoveredCategory === cat.category &&
//               cat.subcategories &&
//               cat.subcategories.length > 0 && (
//                 <div className="absolute left-0 top-full mt-2 w-48 bg-white border rounded-lg shadow-lg z-50">
//                   {cat.subcategories.map((sub, i) => (
//                     <button
//                       key={i}
//                       onClick={() =>
//                         navigate(
//                           `/subcategory/${encodeURIComponent(
//                             cat.category
//                           )}/${encodeURIComponent(sub)}`
//                         )
//                       }
//                       className="block w-full text-left px-4 py-2 hover:bg-[#f7f3ea] hover:text-[#957C3D] transition"
//                     >
//                       {sub}
//                     </button>
//                   ))}
//                 </div>
//               )}
//           </div>
//         ))}
//       </div>

//       {/* 🔹 Mobile Menu */}
//       {menuOpen && (
//         <div className="md:hidden bg-gray-50 border-t p-4 space-y-3 text-sm">
//           <form
//             onSubmit={handleSearch}
//             className="flex items-center border rounded-full overflow-hidden"
//           >
//             <input
//               type="text"
//               placeholder="Search for products..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="flex-1 px-3 py-2 text-sm outline-none"
//             />
//             <button
//               type="submit"
//               className="bg-[#002349] text-white px-3 py-2 hover:bg-[#957C3D]"
//             >
//               <FaSearch />
//             </button>
//           </form>

//           {categories.map((cat, index) => (
//             <div key={index}>
//               <button
//                 onClick={() =>
//                   setHoveredCategory(
//                     hoveredCategory === cat.category ? null : cat.category
//                   )
//                 }
//                 className="flex justify-between w-full py-2 font-medium text-[#002349] hover:text-[#957C3D]"
//               >
//                 {cat.category}
//                 <FaChevronDown
//                   className={`transition-transform ${
//                     hoveredCategory === cat.category ? "rotate-180" : ""
//                   }`}
//                 />
//               </button>
//               {hoveredCategory === cat.category &&
//                 cat.subcategories &&
//                 cat.subcategories.length > 0 && (
//                   <div className="ml-4 border-l pl-3 border-gray-200">
//                     {cat.subcategories.map((sub, i) => (
//                       <button
//                         key={i}
//                         onClick={() => {
//                           navigate(
//                             `/subcategory/${encodeURIComponent(
//                               cat.category
//                             )}/${encodeURIComponent(sub)}`
//                           );
//                           setMenuOpen(false);
//                         }}
//                         className="block w-full text-left py-1.5 text-sm text-gray-700 hover:text-[#957C3D]"
//                       >
//                         {sub}
//                       </button>
//                     ))}
//                   </div>
//                 )}
//             </div>
//           ))}
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;



// Perfect code
import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  FaUserCircle,
  FaShoppingCart,
  FaBars,
  FaTimes,
  FaSearch,
  FaHeart,
  FaChevronDown,
} from "react-icons/fa";
import ProfileModel from "./ProfileModel";
import { fetchWithAuth } from "../refreshtoken/api";

const BASE_URL = "https://ecommerce-backend-y1bv.onrender.com/api";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [wishlistCount, setWishlistCount] = useState(0);
  const [cartCount, setCartCount] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [categories, setCategories] = useState([]);
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const profileRef = useRef(null);

  // ✅ Scroll listener
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Fetch Categories & Subcategories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch(`${BASE_URL}/product`);
        if (!res.ok) throw new Error("Failed to fetch categories");
        const data = await res.json();

        const grouped = {};
        data.forEach((item) => {
          if (!item.category) return;
          if (!grouped[item.category]) grouped[item.category] = new Set();
          if (item.subcategory) grouped[item.category].add(item.subcategory);
        });

        const categoryData = Object.entries(grouped).map(([cat, subs]) => ({
          category: cat,
          subcategories: Array.from(subs),
        }));

        setCategories(categoryData);
      } catch (err) {
        console.error("Error fetching categories:", err);
      }
    };
    fetchCategories();
  }, []);

  // ✅ Wishlist and Cart count
  const fetchWishlistCount = async () => {
    try {
      const data = await fetchWithAuth(`${BASE_URL}/wishlist/count`, { method: "GET" });
      if (data && typeof data.count === "number") setWishlistCount(data.count);
    } catch (err) {
      console.error("Failed to fetch wishlist count:", err);
    }
  };

  const fetchCartCount = async () => {
    try {
      const data = await fetchWithAuth(`${BASE_URL}/cart/count`, { method: "GET" });
      if (data && typeof data.count === "number") setCartCount(data.count);
    } catch (err) {
      console.error("Failed to fetch cart count:", err);
    }
  };

  // ✅ User session
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setIsLoggedIn(true);
      setUserName(user.name);
      fetchWishlistCount();
      fetchCartCount();
    }

    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsModelOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // ✅ Real-time updates
  useEffect(() => {
    const updateWishlist = () => fetchWishlistCount();
    const updateCart = () => fetchCartCount();

    window.addEventListener("wishlistUpdated", updateWishlist);
    window.addEventListener("cartUpdated", updateCart);

    return () => {
      window.removeEventListener("wishlistUpdated", updateWishlist);
      window.removeEventListener("cartUpdated", updateCart);
    };
  }, []);

  // ✅ Logout
  const handleLogout = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    setUserName("");
    setIsModelOpen(false);
    setWishlistCount(0);
    setCartCount(0);
    navigate("/");
  };

  // ✅ Search handler
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchTerm.trim())}`);
      setSearchTerm("");
      setMenuOpen(false);
    }
  };

  // ✅ Determine transparency only on homepage
  const isHome = location.pathname === "/";
  const navTransparent = isHome && !isScrolled;

  return (
    <nav
      className={`fixed w-full top-0 left-0 z-50 font-sans transition-all duration-500 ${
        navTransparent ? "bg-transparent" : "bg-white shadow-md"
      }`}
    >
      {/* 🔹 Top Navbar */}
      <div
        className={`flex justify-between items-center px-4 sm:px-6 py-3 transition-all ${
          navTransparent ? "text-white" : "text-[#002349]"
        }`}
      >
        {/* Logo */}
        <Link
          to="/"
          className={`text-2xl sm:text-3xl font-extrabold tracking-wide ${
            navTransparent ? "text-white" : "text-[#002349]"
          }`}
        >
          Fashion<span className="text-[#957C3D]">Hub</span>
        </Link>

        {/* 🔹 Search Bar */}
        <form
          onSubmit={handleSearch}
          className={`hidden md:flex items-center w-1/2 rounded-full overflow-hidden ${
            navTransparent ? "border border-white" : "border border-gray-300"
          }`}
        >
          <input
            type="text"
            placeholder="Search for products, brands and more..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={`flex-1 px-4 py-2 text-sm outline-none bg-transparent ${
              navTransparent ? "text-white placeholder-white" : "text-black"
            }`}
          />
          <button
            type="submit"
            className={`px-4 py-2 ${
              navTransparent
                ? "bg-[#957C3D] text-white"
                : "bg-[#002349] text-white hover:bg-[#957C3D]"
            } transition`}
          >
            <FaSearch />
          </button>
        </form>

        {/* 🔹 Right Icons */}
        <div className="flex items-center gap-4 sm:gap-6">
          {/* Wishlist */}
          <Link to="/wishlist" className="relative hover:text-[#957C3D]">
            <FaHeart size={20} />
            {wishlistCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#957C3D] text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                {wishlistCount}
              </span>
            )}
          </Link>

          {/* Cart */}
          <Link to="/cart" className="relative hover:text-[#957C3D]">
            <FaShoppingCart size={20} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#957C3D] text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </Link>

          {/* Profile */}
          {isLoggedIn ? (
            <div className="relative" ref={profileRef}>
              <button
                onClick={() => setIsModelOpen(!isModelOpen)}
                className="flex items-center gap-2 hover:text-[#957C3D]"
              >
                <FaUserCircle size={22} />
                <span className="hidden sm:inline font-medium">{userName}</span>
                <FaChevronDown size={12} />
              </button>
              <ProfileModel
                isOpen={isModelOpen}
                onClose={() => setIsModelOpen(false)}
                onLogout={handleLogout}
              />
            </div>
          ) : (
            <div className="hidden sm:flex items-center gap-3">
              <Link
                to="/login"
                className={`px-4 py-1.5 text-sm font-medium rounded-full transition ${
                  navTransparent
                    ? "bg-[#957C3D] text-white"
                    : "bg-[#002349] text-white hover:bg-[#957C3D]"
                }`}
              >
                Login
              </Link>
              <Link
                to="/signup"
                className={`px-4 py-1.5 text-sm font-medium border rounded-full transition ${
                  navTransparent
                    ? "border-white text-white hover:bg-white hover:text-[#002349]"
                    : "border-[#002349] text-[#002349] hover:bg-[#002349] hover:text-white"
                }`}
              >
                Register
              </Link>
            </div>
          )}

          {/* Mobile Menu */}
          <button
            className="md:hidden text-2xl focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* 🔹 Desktop Categories */}
      <div
        className={`hidden md:flex justify-center gap-8 py-2 text-sm font-medium transition-all ${
          navTransparent ? "bg-transparent text-white" : "bg-white text-[#002349]"
        }`}
      >
        {categories.map((cat, index) => (
          <div
            key={index}
            className="relative group"
            onMouseEnter={() => setHoveredCategory(cat.category)}
            onMouseLeave={() => setHoveredCategory(null)}
          >
            <button
              className="hover:text-[#957C3D] transition"
              onClick={() =>
                navigate(`/category/${encodeURIComponent(cat.category)}`)
              }
            >
              {cat.category}
            </button>

            {hoveredCategory === cat.category &&
              cat.subcategories?.length > 0 && (
                <div className="absolute left-0 top-full mt-2 w-48 bg-white border rounded-lg shadow-lg z-50">
                  {cat.subcategories.map((sub, i) => (
                    <button
                      key={i}
                      onClick={() =>
                        navigate(
                          `/subcategory/${encodeURIComponent(
                            cat.category
                          )}/${encodeURIComponent(sub)}`
                        )
                      }
                      className="block w-full text-left px-4 py-2 hover:bg-[#f7f3ea] hover:text-[#957C3D] transition"
                    >
                      {sub}
                    </button>
                  ))}
                </div>
              )}
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;

