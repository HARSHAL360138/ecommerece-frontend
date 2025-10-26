// src/components/Category.jsx
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const categories = [
  { name: "Men", image: "https://via.placeholder.com/400x500?text=Men" },
  { name: "Women", image: "https://via.placeholder.com/400x500?text=Women" },
  { name: "Kids", image: "https://via.placeholder.com/400x500?text=Kids" },
  { name: "Accessories", image: "https://via.placeholder.com/400x500?text=Accessories" },
  { name: "Footwear Sale", image: "https://via.placeholder.com/400x500?text=Footwear+Sale" },
];

const Category = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 max-w-7xl mx-auto px-6 text-center bg-[#EFFAFD]">
      <motion.h2
        className="text-3xl sm:text-4xl font-bold mb-10 text-[#002349]"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        Shop By <span className="text-[#957C3D]">Category</span>
      </motion.h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
        {categories.map((cat, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            onClick={() => navigate(`/category/${cat.name.toLowerCase().replace(/\s+/g, "-")}`)}
            className="bg-white border rounded-lg shadow-md overflow-hidden cursor-pointer"
          >
            <img src={cat.image} alt={cat.name} className="w-full h-48 object-cover" />
            <div className="p-3 text-center font-semibold text-[#002349]">{cat.name}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Category;
