// // src/pages/AllProducts.jsx
// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";
// import { FiSearch, FiX } from "react-icons/fi"; // For search & clear icon

// const AllProducts = () => {
//   const [products, setProducts] = useState([]);
//   const [search, setSearch] = useState("");
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetch("https://ecommerce-backend-y1bv.onrender.com/api/product")
//       .then((res) => res.json())
//       .then((data) => {
//         setProducts(data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error("Error fetching products:", err);
//         setLoading(false);
//       });
//   }, []);

//   const filteredProducts = products.filter((product) =>
//     product.name.toLowerCase().includes(search.toLowerCase())
//   );

//   if (loading)
//     return (
//       <p className="text-center text-[#002349] font-semibold mt-10">
//         Loading products...
//       </p>
//     );

//   return (
//     <section className="py-16 max-w-7xl mx-auto px-6 text-center bg-[#F9FAFB]">
//       <motion.h1
//         className="text-4xl sm:text-5xl font-bold mb-6 text-[#002349]"
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//       >
//         Explore <span className="text-[#957C3D]">Our Products</span>
//       </motion.h1>

//       {/* Search Bar */}
//       <div className="mb-10 flex justify-center">
//         <div className="relative w-full sm:w-1/2">
//           <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
//           <input
//             type="text"
//             placeholder="Search products..."
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//             className="w-full pl-10 pr-10 py-3 rounded-full border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-[#957C3D] transition-all"
//           />
//           {search && (
//             <FiX
//               className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer hover:text-[#957C3D] text-lg"
//               onClick={() => setSearch("")}
//             />
//           )}
//         </div>
//       </div>

//       {/* Products Grid */}
//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
//         {filteredProducts.length > 0 ? (
//           filteredProducts.map((product) => (
//             <motion.div
//               key={product._id}
//               whileHover={{ scale: 1.05 }}
//               className="bg-white border rounded-lg shadow-md overflow-hidden cursor-pointer transition-all duration-300"
//               onClick={() => navigate(`/product/${product._id}`)}
//             >
//               <div className="aspect-[4/5] bg-[#EFFAFD] flex items-center justify-center">
//                 <img
//                   src={
//                     product.images && product.images.length > 0
//                       ? product.images[0]
//                       : "https://via.placeholder.com/400x500?text=No+Image"
//                   }
//                   alt={product.name}
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               <div className="p-3 flex justify-between items-center">
//                 <div className="text-left">
//                   <h5 className="text-sm font-medium text-[#002349] truncate">
//                     {product.name}
//                   </h5>
//                   <p className="text-xs text-gray-500">{product.brand}</p>
//                 </div>
//                 <div className="text-sm font-semibold text-[#957C3D]">
//                   ₹{product.basePrice}
//                 </div>
//               </div>
//             </motion.div>
//           ))
//         ) : (
//           <p className="text-gray-600 col-span-full text-center">
//             No products found.
//           </p>
//         )}
//       </div>
//     </section>
//   );
// };

// export default AllProducts;












// src/pages/AllProducts.jsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FiSearch, FiX } from "react-icons/fi";

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
      <div className="flex justify-center items-center h-[70vh] bg-gradient-to-b from-[#f8f8f8] to-[#ececec]">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
          className="w-12 h-12 border-4 border-t-[#957C3D] border-[#002349] rounded-full"
        ></motion.div>
      </div>
    );

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#F8F8F9] to-[#ECECEC] py-16 px-4 sm:px-8 md:px-12">
      {/* Heading */}
     <div className="flex justify-center items-center mb-10">
  <motion.h1
    className="text-4xl sm:text-5xl md:text-6xl font-bold text-center text-[#002349] tracking-wide leading-tight drop-shadow-[0_3px_4px_rgba(0,0,0,0.15)]"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
  >
    <span className="text-[#002349] font-serif">Explore</span>{" "}
    <span className="text-[#957C3D] font-serif italic">
      Our Products
    </span>
  </motion.h1>
</div>




      {/* Realistic Luxury Search Bar */}
      <div className="flex justify-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative w-full sm:w-2/3 md:w-1/2"
        >
          {/* Outer Container */}
          <div className="flex items-center bg-white/90 backdrop-blur-md rounded-full border border-[#d1c8a6] shadow-[inset_0_1px_3px_rgba(255,255,255,0.5),0_4px_20px_rgba(0,0,0,0.08)] overflow-hidden transition-all duration-300 focus-within:ring-2 focus-within:ring-[#957C3D]/60">
            {/* Properly Aligned Icon */}
            <div className="pl-5 flex items-center justify-center">
              <FiSearch className="text-[#957C3D] text-xl" />
            </div>

            {/* Input Field */}
            <input
              type="text"
              placeholder="Search luxury collections..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full py-3.5 px-4 text-gray-800 bg-transparent focus:outline-none placeholder:text-gray-400 text-[15px] font-medium"
            />

            {/* Clear Icon */}
            {search && (
              <button
                onClick={() => setSearch("")}
                className="pr-5 text-gray-400 hover:text-[#957C3D] transition-all"
              >
                <FiX className="text-lg" />
              </button>
            )}
          </div>
        </motion.div>
      </div>

      {/* Product Grid - 5 per row */}
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <motion.div
              key={product._id}
              whileHover={{
                scale: 1.05,
                boxShadow:
                  "0 8px 30px rgba(0,35,73,0.15), 0 0 20px rgba(149,124,61,0.25)",
              }}
              transition={{ type: "spring", stiffness: 200 }}
              className="group bg-white rounded-2xl border border-gray-100 overflow-hidden cursor-pointer transform transition-all duration-500 hover:-translate-y-2"
              onClick={() => navigate(`/product/${product._id}`)}
            >
              {/* Product Image */}
              <div className="relative overflow-hidden">
                <motion.img
                  src={
                    product.images && product.images.length > 0
                      ? product.images[0]
                      : "https://via.placeholder.com/400x500?text=No+Image"
                  }
                  alt={product.name}
                  className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Product Info */}
              <div className="p-4 bg-gradient-to-b from-white to-[#FAFAFA]">
                <h5 className="text-sm font-semibold text-[#002349] truncate">
                  {product.name}
                </h5>
                <p className="text-xs text-gray-500 mb-2">{product.brand}</p>
                <div className="flex justify-between items-center">
                  <p className="text-base font-bold text-[#957C3D]">
                    ₹{product.basePrice}
                  </p>
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    className="text-xs px-3 py-1 rounded-full border border-[#957C3D] text-[#957C3D] font-medium hover:bg-[#957C3D] hover:text-white transition-all"
                  >
                    View
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))
        ) : (
          <p className="text-gray-600 text-center col-span-full text-lg">
            No products found.
          </p>
        )}
      </motion.div>
    </section>
  );
};

export default AllProducts;

