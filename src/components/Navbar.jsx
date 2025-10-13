import React, { useState } from "react";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("Home");
  const categories = [
    "New Arrivals",
    "Men",
    "Women",
    "Kids",
    "Accessories",
    "Footwear",
    "Sale",
  ];
  return (
    <nav className="w-full border-b bg-white shadow-sm font-sans">
      {/* Top Section */}

      <div className="flex justify-between items-center bg-gray-100 px-4 py-2 text-xs">
        <div className="space-x-2">
          <a href="#" className="hover:text-blue-600">Hi! Sign in</a>
          <span>or</span>
          <a href="#" className="hover:text-blue-600">Register</a>
        </div>
        <div className="hidden sm:flex space-x-4">
          <a href="#" className="hover:text-blue-600">Daily Deals</a>
          <a href="#" className="hover:text-blue-600">Gift Cards</a>
          <a href="#" className="hover:text-blue-600">Help & Contact</a>
        </div>
      </div>

      {/* Main Section */}

      <div className="flex items-center justify-between px-4 py-3 md:px-8">
        {/* Logo */}
        <div className="text-4xl font-bold text-blue-600">
          <a href="#">FashioHub</a>
        </div>

        {/* Shop by Category */}
        <select className="hidden md:block border rounded px-3 py-2 text-sm focus:outline-none hover:border-blue-600">
          <option>Shop by Category</option>
          {categories.map((cat) => (
            <option key={cat}>{cat}</option>
          ))}
        </select>

        {/* Search Bar */}
        <div className="flex flex-1 max-w-3xl mx-4">
          <input
            type="text"
            placeholder="Search for clothing, shoes, or accessories"
            className="flex-1 border border-gray-300 rounded-l px-3 py-2 text-sm focus:outline-none"
          />
          <button className="bg-blue-600 text-white px-4 rounded-r hover:bg-blue-700">
            Search
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 border rounded hover:bg-gray-100"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          Menu
        </button>
      </div>

      {/* Categories Bottom Section (Desktop) */}
      <div className="hidden md:flex justify-center space-x-6 bg-gray-50 py-2 border-t text-sm">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`hover:text-blue-600 ${
              activeCategory === cat
                ? "text-blue-600 font-semibold border-b-2 border-blue-600 pb-1"
                : "text-gray-700"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col bg-gray-50 border-t p-3 space-y-2 text-sm">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setMenuOpen(false);
              }}
              className={`text-left ${
                activeCategory === cat ? "text-blue-600 font-semibold" : "text-gray-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
