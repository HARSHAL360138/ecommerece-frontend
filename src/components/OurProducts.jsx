// // src/components/OurProducts.jsx
// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";

// const OurProducts = () => {
//   const [products, setProducts] = useState([]);
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

//   if (loading)
//     return (
//       <p className="text-center text-[#002349] font-semibold mt-10">
//         Loading products...
//       </p>
//     );

//   return (
//     <section className="py-16 max-w-7xl mx-auto px-6 bg-[#EFFAFD] text-center">
//       {/* Section Title */}
//       <motion.h2
//         className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-[#002349]"
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.8 }}
//       >
//         Our <span className="text-[#957C3D]">Products</span>
//       </motion.h2>

//       {/* Products Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {products.slice(0, 8).map((product, index) => (
//           <motion.div
//             key={product._id}
//             className="bg-white border rounded-2xl shadow-md overflow-hidden cursor-pointer transition-all duration-300"
//             onClick={() => navigate(`/product/${product._id}`)}
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: index * 0.15 }}
//             whileHover={{ scale: 1.05, boxShadow: "0 15px 25px rgba(0,0,0,0.2)" }}
//           >
//             <div className="aspect-[4/5] bg-[#EFFAFD] flex items-center justify-center overflow-hidden">
//               <img
//                 src={
//                   product.images && product.images.length > 0
//                     ? product.images[0]
//                     : "https://via.placeholder.com/400x500?text=No+Image"
//                 }
//                 alt={product.name}
//                 className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
//               />
//             </div>
//             <div className="p-4 flex justify-between items-center">
//               <div className="text-left">
//                 <h5 className="text-sm sm:text-base font-medium text-[#002349] truncate">
//                   {product.name}
//                 </h5>
//                 <p className="text-xs sm:text-sm text-gray-500">{product.brand}</p>
//               </div>
//               <div className="text-sm sm:text-base font-semibold text-[#957C3D]">
//                 ₹{product.basePrice}
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>

//       {/* View All Button */}
//       <motion.div
//         whileHover={{ scale: 1.05 }}
//         className="flex justify-center mt-12"
//       >
//         <button
//           onClick={() => navigate("/all-products")}
//           className="bg-gradient-to-r from-[#002349] to-[#957C3D] text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
//         >
//           View All Products
//         </button>
//       </motion.div>
//     </section>
//   );
// };

// export default OurProducts;


















// // src/components/OurProducts.jsx
// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";

// const OurProducts = () => {
//   const [products, setProducts] = useState([]);
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

//   if (loading)
//     return (
//       <p className="text-center text-[#002349] font-semibold mt-10">
//         Loading products...
//       </p>
//     );

//   return (
//     <section className="py-16 max-w-7xl mx-auto px-6 bg-[#EFFAFD] text-center">
//       {/* Section Title */}
//       <motion.h2
//         className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-[#002349]"
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.8 }}
//       >
//         Our <span className="text-[#957C3D]">Products</span>
//       </motion.h2>

//       {/* Products Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {products.slice(0, 8).map((product, index) => (
//           <motion.div
//             key={product._id}
//             className="bg-white border rounded-2xl shadow-md overflow-hidden cursor-pointer transition-all duration-300"
//             onClick={() => navigate(`/product/${product._id}`)} // ✅ Navigate to CategoryProductUnique.jsx
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: index * 0.15 }}
//             whileHover={{ scale: 1.05, boxShadow: "0 15px 25px rgba(0,0,0,0.2)" }}
//           >
//             <div className="aspect-[4/5] bg-[#EFFAFD] flex items-center justify-center overflow-hidden">
//               <img
//                 src={
//                   product.images && product.images.length > 0
//                     ? product.images[0]
//                     : "https://via.placeholder.com/400x500?text=No+Image"
//                 }
//                 alt={product.name}
//                 className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
//               />
//             </div>
//             <div className="p-4 flex justify-between items-center">
//               <div className="text-left">
//                 <h5 className="text-sm sm:text-base font-medium text-[#002349] truncate">
//                   {product.name}
//                 </h5>
//                 <p className="text-xs sm:text-sm text-gray-500">{product.brand}</p>
//               </div>
//               <div className="text-sm sm:text-base font-semibold text-[#957C3D]">
//                 ₹{product.basePrice}
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>

//       {/* View All Button */}
//       <motion.div
//         whileHover={{ scale: 1.05 }}
//         className="flex justify-center mt-12"
//       >
//         <button
//           onClick={() => navigate("/all-products")}
//           className="bg-gradient-to-r from-[#002349] to-[#957C3D] text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
//         >
//           View All Products
//         </button>
//       </motion.div>
//     </section>
//   );
// };

// export default OurProducts;





// src/components/OurProducts.jsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const OurProducts = () => {
  const [products, setProducts] = useState([]);
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

  if (loading)
    return (
      <p className="text-center text-[#002349] font-semibold mt-10 animate-pulse">
        Loading luxury collection...
      </p>
    );

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-[#f9f9f9] via-[#f3f2ee] to-[#e9e7e3] text-center">
      {/* Section Title */}
      <motion.h2
        className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-14 text-[#002349] tracking-tight"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Our <span className="text-[#957C3D] drop-shadow-md">Exclusive Collection</span>
      </motion.h2>

      {/* Product Grid */}
      <div
        className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          md:grid-cols-3 
          lg:grid-cols-4 
          xl:grid-cols-5 
          gap-10
        "
      >
        {products.slice(0, 10).map((product, index) => (
          <motion.div
            key={product._id}
            className="
              group relative 
              bg-white 
              rounded-2xl 
              shadow-[0_5px_25px_rgba(0,0,0,0.08)] 
              overflow-hidden 
              transition-all duration-500 
              hover:shadow-[0_15px_40px_rgba(0,0,0,0.15)] 
              hover:-translate-y-2 
              cursor-pointer
            "
            onClick={() => navigate(`/product/${product._id}`)}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {/* Product Image */}
            <div className="relative aspect-[4/5] overflow-hidden bg-[#f4f4f4]">
              <img
                src={
                  product.images && product.images.length > 0
                    ? product.images[0]
                    : "https://via.placeholder.com/400x500?text=No+Image"
                }
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#002349]/60 via-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

              {/* Floating Buttons */}
              <div className="absolute inset-x-0 bottom-5 flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <button
                  className="bg-[#002349]/90 text-white text-xs sm:text-sm px-4 py-2 rounded-full hover:bg-[#001a33] transition-all duration-300"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/product/${product._id}`);
                  }}
                >
                  View
                </button>
                <button
                  className="bg-[#957C3D]/90 text-white text-xs sm:text-sm px-4 py-2 rounded-full hover:bg-[#bfa665] transition-all duration-300"
                >
                  Add to Cart
                </button>
              </div>
            </div>

            {/* Product Info */}
            <div className="p-5 text-left">
              {/* Brand */}
              <p className="text-gray-500 text-sm uppercase tracking-wider mb-1">
                {product.brand || "Exclusive Brand"}
              </p>

              {/* Product Name */}
              <h5 className="text-lg font-semibold text-[#002349] leading-tight truncate group-hover:text-[#957C3D] transition-colors duration-300">
                {product.name}
              </h5>

              {/* Divider */}
              <div className="w-10 h-[2px] bg-[#957C3D] mt-2 mb-3 opacity-60"></div>

              {/* Price */}
              <p className="text-xl font-bold text-[#957C3D]">
                ₹{product.basePrice?.toLocaleString("en-IN")}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* View All Button */}
      <motion.div
        whileHover={{ scale: 1.07 }}
        whileTap={{ scale: 0.95 }}
        className="flex justify-center mt-16"
      >
        <button
          onClick={() => navigate("/all-products")}
          className="
            relative 
            bg-gradient-to-r from-[#002349] to-[#957C3D] 
            text-white px-10 py-4 rounded-full font-semibold 
            shadow-lg overflow-hidden transition-all duration-500 
            hover:shadow-2xl hover:from-[#001a33] hover:to-[#b99852]
          "
        >
          <span className="relative z-10">View All Products</span>
          <span className="absolute inset-0 bg-gradient-to-r from-[#957C3D]/20 to-[#002349]/20 blur-md opacity-0 group-hover:opacity-100 transition duration-500"></span>
        </button>
      </motion.div>
    </section>
  );
};

export default OurProducts;
