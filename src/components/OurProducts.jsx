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
      <p className="text-center text-[#002349] font-semibold mt-10">
        Loading products...
      </p>
    );

  return (
    <section className="py-16 max-w-7xl mx-auto px-6 bg-[#EFFAFD] text-center">
      {/* Section Title */}
      <motion.h2
        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-[#002349]"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Our <span className="text-[#957C3D]">Products</span>
      </motion.h2>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.slice(0, 8).map((product, index) => (
          <motion.div
            key={product._id}
            className="bg-white border rounded-2xl shadow-md overflow-hidden cursor-pointer transition-all duration-300"
            onClick={() => navigate(`/product/${product._id}`)} // ✅ Navigate to CategoryProductUnique.jsx
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            whileHover={{ scale: 1.05, boxShadow: "0 15px 25px rgba(0,0,0,0.2)" }}
          >
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
          </motion.div>
        ))}
      </div>

      {/* View All Button */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="flex justify-center mt-12"
      >
        <button
          onClick={() => navigate("/all-products")}
          className="bg-gradient-to-r from-[#002349] to-[#957C3D] text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
        >
          View All Products
        </button>
      </motion.div>
    </section>
  );
};

export default OurProducts;
