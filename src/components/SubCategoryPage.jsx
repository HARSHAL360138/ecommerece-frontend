// src/pages/SubCategoryPage.jsx
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Loader2 } from "lucide-react";

function SubCategoryPage() {
  const { categoryName } = useParams();
  const [subcategories, setSubcategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSubcategories = async () => {
      try {
        const response = await fetch(
          `https://ecommerce-backend-y1bv.onrender.com/api/product/categories/${categoryName}/subcategories`
        );
        if (!response.ok) throw new Error("Failed to fetch subcategories");
        const data = await response.json();
        setSubcategories(data.subcategories || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    if (categoryName) fetchSubcategories();
  }, [categoryName]);

  if (loading)
    return (
      <div className="flex flex-col items-center justify-center py-20 text-[#002349]">
        <Loader2 className="w-10 h-10 animate-spin mb-3 text-[#bfa663]" />
        <p className="text-lg font-semibold">
          Loading {categoryName} Subcategories...
        </p>
      </div>
    );

  if (error)
    return (
      <div className="text-center text-red-500 py-20 font-semibold">
        {error}
      </div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#faf7ef] via-[#f5f3e8] to-[#f2efe4] py-10 px-6 sm:px-12">
      {/* HEADER */}
      <div className="flex items-center justify-between mb-12">
        <motion.button
          onClick={() => navigate(-1)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 px-5 py-2 rounded-full border border-[#c9b36f] bg-white text-[#002349] font-semibold shadow-sm hover:shadow-lg hover:bg-[#fdfbf5] transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </motion.button>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#002349] bg-clip-text bg-gradient-to-r from-[#002349] via-[#3b5284] to-[#002349] text-transparent">
          {categoryName} Category
        </h1>

        <div className="w-20 sm:w-32"></div>
      </div>

      {/* GRID */}
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {subcategories.map((sub, idx) => (
          <motion.div
            key={idx}
            whileHover={{
              scale: 1.05,
              y: -5,
              boxShadow: "0 10px 25px rgba(0,0,0,0.12)",
            }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 200 }}
            onClick={() =>
              navigate(
                `/category/${encodeURIComponent(categoryName)}/${encodeURIComponent(sub.subCategory)}`
              )
            }
            className="bg-white rounded-2xl overflow-hidden cursor-pointer border border-[#e5e7eb] hover:border-[#bfa663]/50 transition-all"
          >
            <img
              src={
                sub.latestProductImage ||
                "https://via.placeholder.com/300x200?text=No+Image"
              }
              alt={sub.subCategory}
              className="w-full h-48 object-cover transition-all duration-500 group-hover:scale-105"
            />
            <div className="py-3 bg-gradient-to-r from-[#002349] via-[#163c75] to-[#002349] text-center">
              <h2 className="text-sm font-semibold uppercase text-[#f1d58b]">
                {sub.subCategory}
              </h2>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default SubCategoryPage;
