// src/pages/CategoryProduct.jsx
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

function CategoryProduct() {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategoryProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://ecommerce-backend-y1bv.onrender.com/api/product/category/${categoryName}`
        );
        if (!response.ok) throw new Error("Failed to fetch category products");
        const data = await response.json();
        setProducts(data.products || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    if (categoryName) fetchCategoryProducts();
  }, [categoryName]);

  if (loading)
    return (
      <div className="text-center py-20 text-[#002349] font-semibold text-2xl animate-pulse">
        Loading {categoryName}...
      </div>
    );
  if (error)
    return (
      <div className="text-center text-red-500 font-semibold py-10">
        Error: {error}
      </div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#faf7ef] via-[#f5f3e8] to-[#f2efe4] py-10 px-6 sm:px-12">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-12">
        {/* Back Button */}
        <motion.button
          onClick={() => navigate(-1)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 px-5 py-2 rounded-full border border-[#c9b36f] bg-white text-[#002349] font-semibold shadow-sm hover:shadow-lg hover:bg-[#fdfbf5] transition-all duration-300"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </motion.button>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl sm:text-5xl font-extrabold text-[#002349] bg-clip-text bg-gradient-to-r from-[#002349] via-[#3b5284] to-[#002349] text-transparent drop-shadow-sm"
        >
          {categoryName} Collection
        </motion.h1>

        <div className="w-20 sm:w-32"></div>
      </div>

      {/* Product Grid */}
      {products.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">
          No products found in this category.
        </p>
      ) : (
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 },
            },
          }}
        >
          {products.map((product) => (
            <motion.div
              key={product._id}
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1 },
              }}
              whileHover={{
                y: -8,
                boxShadow: "0px 12px 25px rgba(0, 0, 0, 0.1)",
              }}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl border border-[#e5decf] transition-all duration-500 group"
            >
              {/* Product Image */}
              <div className="relative w-full h-44 sm:h-52 overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.5 }}
                  src={
                    product.images?.[0] ||
                    "https://via.placeholder.com/300x200?text=No+Image"
                  }
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#00000055] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </div>

              {/* Product Info */}
              <div className="p-4 text-center">
                <h2 className="text-base font-semibold text-[#002349] group-hover:text-[#c9b36f] transition-colors duration-300 truncate">
                  {product.name}
                </h2>
                <p className="text-xs text-gray-500 mt-1">{product.brand}</p>
                <p className="text-lg font-bold mt-2 text-[#957C3D]">
                  ₹{product.basePrice?.toLocaleString()}
                </p>

                {/* View Details */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate(`/product/${product._id}`)}
                  className="mt-3 px-4 py-1.5 rounded-full font-medium text-sm text-white bg-gradient-to-r from-[#957C3D] to-[#c9b36f] hover:from-[#c9b36f] hover:to-[#957C3D] transition-all duration-500 shadow-md"
                >
                  View Details
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}

      {/* Subtle bottom gradient glow */}
      <div className="mt-16 w-full h-20 bg-gradient-to-t from-[#c9b36f]/10 to-transparent rounded-t-3xl"></div>
    </div>
  );
}

export default CategoryProduct;




// // src/pages/CategoryProduct.jsx
// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";
// import { ArrowLeft, Sparkles } from "lucide-react";

// function CategoryProduct() {
//   const { categoryName } = useParams();
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchCategoryProducts = async () => {
//       try {
//         setLoading(true);
//         const response = await fetch(
//           `https://ecommerce-backend-y1bv.onrender.com/api/product/category/${categoryName}`
//         );
//         if (!response.ok) throw new Error("Failed to fetch category products");
//         const data = await response.json();
//         setProducts(data.products || []);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };
//     if (categoryName) fetchCategoryProducts();
//   }, [categoryName]);

//   if (loading)
//     return (
//       <div className="text-center py-20 text-[#002349] font-semibold text-2xl animate-pulse">
//         Loading {categoryName}...
//       </div>
//     );
//   if (error)
//     return (
//       <div className="text-center text-red-500 font-semibold py-10">
//         Error: {error}
//       </div>
//     );

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-[#faf7ef] via-[#f7f4e9] to-[#f3f0e5] py-10 px-6 sm:px-12">
//       {/* HEADER */}
//       <div className="flex items-center justify-between mb-14 flex-wrap gap-4">
//         {/* Back Button */}
//         <motion.button
//           onClick={() => navigate(-1)}
//           whileHover={{ scale: 1.06 }}
//           whileTap={{ scale: 0.95 }}
//           className="flex items-center gap-2 px-5 py-2 rounded-full border border-[#c9b36f] bg-white/70 backdrop-blur-sm text-[#002349] font-semibold shadow-sm hover:shadow-md hover:bg-[#fff9ef] transition-all duration-300"
//         >
//           <ArrowLeft className="w-4 h-4" />
//           Back
//         </motion.button>

//         {/* Title */}
//         <motion.h1
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           className="text-3xl sm:text-5xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#002349] via-[#3b5284] to-[#002349]"
//         >
//           {categoryName} Collection
//         </motion.h1>

//         <div className="w-20 sm:w-32"></div>
//       </div>

//       {/* PRODUCT GRID */}
//       {products.length === 0 ? (
//         <p className="text-center text-gray-500 text-lg">
//           No products found in this category.
//         </p>
//       ) : (
//         <motion.div
//           className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-6"
//           initial="hidden"
//           animate="visible"
//           variants={{
//             hidden: { opacity: 0 },
//             visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
//           }}
//         >
//           {products.map((product, index) => (
//             <motion.div
//               key={product._id}
//               variants={{
//                 hidden: { opacity: 0, scale: 0.9, y: 20 },
//                 visible: { opacity: 1, scale: 1, y: 0 },
//               }}
//               whileHover={{
//                 y: -10,
//                 boxShadow: "0 15px 30px rgba(0,0,0,0.12)",
//               }}
//               className="relative bg-white/90 rounded-2xl overflow-hidden border border-[#e5decf] hover:border-[#c9b36f]/60 transition-all duration-500 group backdrop-blur-sm"
//             >
//               {/* Image */}
//               <div className="relative w-full h-48 sm:h-56 overflow-hidden">
//                 <motion.img
//                   whileHover={{ scale: 1.08 }}
//                   transition={{ duration: 0.6, ease: "easeOut" }}
//                   src={
//                     product.images?.[0] ||
//                     "https://via.placeholder.com/300x200?text=No+Image"
//                   }
//                   alt={product.name}
//                   className="w-full h-full object-cover rounded-t-2xl"
//                 />
//                 {/* Glow shimmer overlay */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-[#00000088] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//                 <motion.div
//                   initial={{ opacity: 0 }}
//                   whileHover={{ opacity: 1 }}
//                   className="absolute top-3 right-3 bg-white/70 rounded-full p-1.5 shadow-md"
//                 >
//                   <Sparkles className="w-4 h-4 text-[#c9b36f]" />
//                 </motion.div>
//               </div>

//               {/* Details */}
//               <div className="p-4 text-center">
//                 <h2 className="text-base font-semibold text-[#002349] group-hover:text-[#c9b36f] transition-colors truncate">
//                   {product.name}
//                 </h2>
//                 <p className="text-xs text-gray-500 mt-1">{product.brand}</p>

//                 <p className="text-lg font-bold mt-2 text-[#957C3D]">
//                   ₹{product.basePrice?.toLocaleString()}
//                 </p>

//                 {/* Button */}
//                 <motion.button
//                   whileHover={{
//                     scale: 1.06,
//                     background:
//                       "linear-gradient(90deg, #c9b36f, #957C3D, #c9b36f)",
//                   }}
//                   whileTap={{ scale: 0.96 }}
//                   onClick={() => navigate(`/product/${product._id}`)}
//                   className="mt-3 px-5 py-2 rounded-full font-medium text-sm text-white bg-gradient-to-r from-[#957C3D] to-[#c9b36f] shadow-md hover:shadow-lg transition-all duration-500"
//                 >
//                   View Details
//                 </motion.button>
//               </div>

//               {/* Soft glow border animation */}
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 whileHover={{ opacity: 1 }}
//                 className="absolute inset-0 rounded-2xl border border-[#c9b36f]/30 shadow-[0_0_20px_rgba(201,179,111,0.3)] pointer-events-none"
//               ></motion.div>
//             </motion.div>
//           ))}
//         </motion.div>
//       )}

//       {/* Bottom Soft Gradient Glow */}
//       <div className="mt-20 w-full h-20 bg-gradient-to-t from-[#c9b36f]/15 to-transparent rounded-t-3xl"></div>
//     </div>
//   );
// }

// export default CategoryProduct;
