// src/pages/AllProducts.jsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FiSearch, FiX } from "react-icons/fi"; // For search & clear icon

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://ecommerce-backend-y1bv.onrender.com/api/product")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setLoading(false);
      });
  }, []);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading)
    return (
      <p className="text-center text-[#002349] font-semibold mt-10">
        Loading products...
      </p>
    );

  return (
    <section className="py-16 max-w-7xl mx-auto px-6 text-center bg-[#F9FAFB]">
      <motion.h1
        className="text-4xl sm:text-5xl font-bold mb-6 text-[#002349]"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        Explore <span className="text-[#957C3D]">Our Products</span>
      </motion.h1>

      {/* Search Bar */}
      <div className="mb-10 flex justify-center">
        <div className="relative w-full sm:w-1/2">
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-10 py-3 rounded-full border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-[#957C3D] transition-all"
          />
          {search && (
            <FiX
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer hover:text-[#957C3D] text-lg"
              onClick={() => setSearch("")}
            />
          )}
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <motion.div
              key={product._id}
              whileHover={{ scale: 1.05 }}
              className="bg-white border rounded-lg shadow-md overflow-hidden cursor-pointer transition-all duration-300"
              onClick={() => navigate(`/product/${product._id}`)}
            >
              <div className="aspect-[4/5] bg-[#EFFAFD] flex items-center justify-center">
                <img
                  src={
                    product.images && product.images.length > 0
                      ? product.images[0]
                      : "https://via.placeholder.com/400x500?text=No+Image"
                  }
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-3 flex justify-between items-center">
                <div className="text-left">
                  <h5 className="text-sm font-medium text-[#002349] truncate">
                    {product.name}
                  </h5>
                  <p className="text-xs text-gray-500">{product.brand}</p>
                </div>
                <div className="text-sm font-semibold text-[#957C3D]">
                  ₹{product.basePrice}
                </div>
              </div>
            </motion.div>
          ))
        ) : (
          <p className="text-gray-600 col-span-full text-center">
            No products found.
          </p>
        )}
      </div>
    </section>
  );
};

export default AllProducts;
