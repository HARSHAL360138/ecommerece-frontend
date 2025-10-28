// src/components/Navbar.jsx
import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaUserCircle,
  FaShoppingCart,
  FaBars,
  FaTimes,
  FaSearch,
  FaHeart,
} from "react-icons/fa";
import ProfileModel from "./ProfileModel";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState("");
  const [isModelOpen, setIsModelOpen] = useState(false);
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
    navigate("/");
  };

  return (
    <nav className="w-full bg-white shadow-md sticky top-0 z-50 font-sans">
      {/* 🔹 Top Navbar Section */}
      <div className="flex justify-between items-center px-4 sm:px-6 py-3 border-b">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl sm:text-3xl font-extrabold text-[#002349] tracking-wide"
        >
          Fashion<span className="text-[#957C3D]">Hub</span>
        </Link>

        {/* 🔹 Search Bar (Hidden on small screens) */}
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

        {/* 🔹 Right Icons */}
        <div className="flex items-center gap-4 sm:gap-6">
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

          {/* Profile / Auth */}
          {isLoggedIn ? (
            <div className="relative" ref={profileRef}>
              <button
                onClick={() => setIsModelOpen(!isModelOpen)}
                className="flex items-center gap-1 sm:gap-2 text-gray-700 hover:text-[#957C3D] transition"
              >
                <FaUserCircle size={22} />
                <span className="hidden sm:inline font-medium">{userName}</span>
                <span className="text-xs sm:text-sm">▼</span>
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
                className="px-4 py-1.5 text-sm font-medium text-white bg-[#002349] rounded-full hover:bg-[#957C3D] transition"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="px-4 py-1.5 text-sm font-medium border border-[#002349] text-[#002349] rounded-full hover:bg-[#002349] hover:text-white transition"
              >
                Register
              </Link>
            </div>
          )}

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-2xl focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* 🔹 Desktop Categories */}
      <div className="hidden md:flex justify-center gap-8 py-2 bg-gray-50 border-t text-sm font-medium">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="relative group cursor-pointer hover:text-[#957C3D]"
          >
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

      {/* 🔹 Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-50 border-t p-4 space-y-3 text-sm animate-slide-down">
          {/* Mobile Search Bar */}
          <div className="flex items-center border rounded-full overflow-hidden">
            <input
              type="text"
              placeholder="Search for products..."
              className="flex-1 px-3 py-2 text-sm outline-none"
            />
            <button className="bg-[#002349] text-white px-3 py-2">
              <FaSearch />
            </button>
          </div>

          {/* Mobile Auth Buttons */}
          {!isLoggedIn && (
            <div className="flex gap-3 mt-2">
              <Link
                to="/login"
                onClick={() => setMenuOpen(false)}
                className="flex-1 text-center px-4 py-2 text-sm font-medium text-white bg-[#002349] rounded-full hover:bg-[#957C3D] transition"
              >
                Login
              </Link>
              <Link
                to="/signup"
                onClick={() => setMenuOpen(false)}
                className="flex-1 text-center px-4 py-2 text-sm font-medium border border-[#002349] text-[#002349] rounded-full hover:bg-[#002349] hover:text-white transition"
              >
                Register
              </Link>
            </div>
          )}

          {/* Categories Accordion */}
          {categories.map((cat, index) => (
            <div key={index} className="border-b pb-2">
              <button
                className="flex justify-between items-center w-full text-left font-medium"
                onClick={() =>
                  setDropdownOpen(dropdownOpen === cat.name ? "" : cat.name)
                }
              >
                {cat.name}
                <span className="text-[#957C3D]">
                  {dropdownOpen === cat.name ? "▲" : "▼"}
                </span>
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