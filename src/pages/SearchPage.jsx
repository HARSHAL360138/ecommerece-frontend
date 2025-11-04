import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BASE_URL = "https://ecommerce-backend-y1bv.onrender.com/api/product"; // ✅ same API as OurProducts.jsx

// Helper function to get the query from URL
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const SearchPage = () => {
  const query = useQuery();
  const searchTerm = query.get("query") || "";
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ Fetch all products from backend
  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const response = await fetch(BASE_URL);
        if (!response.ok) throw new Error("Failed to fetch products");
        const data = await response.json();

        // Data might be array or wrapped inside an object
        const products = Array.isArray(data) ? data : data.products || [];
        setAllProducts(products);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        toast.error("Failed to load products");
        setLoading(false);
      }
    };

    fetchAllProducts();
  }, []);

  // ✅ Filter products based on search term
  useEffect(() => {
    if (searchTerm && allProducts.length > 0) {
      const filtered = allProducts.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts([]);
    }
  }, [searchTerm, allProducts]);

  return (
    <div className="min-h-screen bg-[#EFFAFD] p-6">
      <ToastContainer />

      {/* 🔹 Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-2xl font-bold text-center mb-8 text-[#002349]"
      >
        Search Results for:{" "}
        <span className="text-[#957C3D]">{searchTerm}</span>
      </motion.h2>

      {/* 🔹 Product Grid */}
      {loading ? (
        <div className="flex justify-center mt-10 text-[#002349] font-semibold">
          Loading products...
        </div>
      ) : filteredProducts.length > 0 ? (
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto"
        >
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product._id}
              whileHover={{ scale: 1.05 }}
              className="bg-white border rounded-2xl shadow-md overflow-hidden cursor-pointer transition-all duration-300"
            >
              <Link to={`/product/${product._id}`}>
                <div className="aspect-[4/5] bg-[#EFFAFD] flex items-center justify-center overflow-hidden">
                  <img
                    src={
                      product.images && product.images.length > 0
                        ? product.images[0]
                        : "https://via.placeholder.com/400x500?text=No+Image"
                    }
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-4 flex justify-between items-center">
                  <div className="text-left">
                    <h5 className="text-sm sm:text-base font-medium text-[#002349] truncate">
                      {product.name}
                    </h5>
                    <p className="text-xs sm:text-sm text-gray-500">{product.brand}</p>
                  </div>
                  <div className="text-sm sm:text-base font-semibold text-[#957C3D]">
                    ₹{product.basePrice}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <div className="text-center mt-10 text-gray-500">
          No products found for "{searchTerm}"
        </div>
      )}
    </div>
  );
};

export default SearchPage;