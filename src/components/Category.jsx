// // src/components/Category.jsx
// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";
// import { Loader2, AlertCircle } from "lucide-react";

// function Category() {
//   const [categories, setCategories] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const response = await fetch(
//           "https://ecommerce-backend-y1bv.onrender.com/api/product/categories"
//         );
//         if (!response.ok) throw new Error("Failed to fetch categories");
//         const data = await response.json();
//         setCategories(data.categories || []);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCategories();
//   }, []);

//   if (loading)
//     return (
//       <div className="flex flex-col items-center justify-center py-20 text-[#002349]">
//         <Loader2 className="w-10 h-10 animate-spin mb-3 text-[#bfa663]" />
//         <p className="text-lg font-semibold">Loading Categories...</p>
//       </div>
//     );

//   if (error)
//     return (
//       <div className="flex flex-col items-center justify-center py-20 text-red-500">
//         <AlertCircle className="w-8 h-8 mb-2" />
//         <p>Error: {error}</p>
//       </div>
//     );

//   const topRow = categories.slice(0, 4);
//   const bottomRow = categories.slice(4, 6);

//   return (
//     <div className="container mx-auto px-4 py-16 bg-gradient-to-b from-white via-[#faf8f3] to-white">
//       {/* HEADER */}
//       <motion.div
//         initial={{ opacity: 0, y: -30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="text-center mb-14"
//       >
//         <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide">
//           <span className="text-[#002349]">Our</span>{" "}
//           <span
//             className="text-transparent bg-clip-text"
//             style={{
//               backgroundImage:
//                 "linear-gradient(90deg, #bfa663, #f1d58b, #bfa663)",
//             }}
//           >
//             Exclusive Categories
//           </span>
//         </h1>

//         <motion.div
//           initial={{ width: 0 }}
//           animate={{ width: "140px" }}
//           transition={{ duration: 1, ease: "easeInOut", delay: 0.3 }}
//           className="h-[3px] mt-3 mx-auto rounded-full"
//           style={{
//             background: "linear-gradient(90deg, #bfa663, #f1d58b, #bfa663)",
//           }}
//         ></motion.div>
//       </motion.div>

//       {/* GRID */}
//       <div className="space-y-10">
//         {/* TOP ROW */}
//         <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 justify-center">
//           {topRow.map((cat, index) => (
//             <motion.div
//               key={index}
//               whileHover={{
//                 scale: 1.05,
//                 y: -5,
//                 boxShadow: "0 10px 25px rgba(0,0,0,0.12)",
//               }}
//               whileTap={{ scale: 0.97 }}
//               transition={{ type: "spring", stiffness: 200 }}
//               onClick={() =>
//                 navigate(`/category/${encodeURIComponent(cat.category)}`)
//               }
//               className="relative bg-white rounded-2xl overflow-hidden cursor-pointer group border border-[#e5e7eb] hover:border-[#bfa663]/50 transition-all"
//             >
//               <img
//                 src={
//                   cat.latestProductImage ||
//                   "https://via.placeholder.com/400x300?text=No+Image"
//                 }
//                 alt={cat.category}
//                 className="w-full h-44 object-cover transition-all duration-500 group-hover:scale-105"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

//               <div className="py-3 bg-gradient-to-r from-[#002349] via-[#163c75] to-[#002349]">
//                 <h2 className="text-sm font-semibold uppercase tracking-wide text-[#f1d58b] group-hover:text-white text-center transition-colors">
//                   {cat.category}
//                 </h2>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* BOTTOM ROW */}
//         <div className="flex justify-center gap-8">
//           {bottomRow.map((cat, index) => (
//             <motion.div
//               key={index}
//               whileHover={{
//                 scale: 1.05,
//                 y: -5,
//                 boxShadow: "0 10px 25px rgba(0,0,0,0.12)",
//               }}
//               whileTap={{ scale: 0.97 }}
//               transition={{ type: "spring", stiffness: 200 }}
//               onClick={() =>
//                 navigate(`/category/${encodeURIComponent(cat.category)}`)
//               }
//               className="relative bg-white rounded-2xl overflow-hidden cursor-pointer group border border-[#e5e7eb] hover:border-[#bfa663]/50 transition-all w-[calc(25%-1rem)]"
//             >
//               <img
//                 src={
//                   cat.latestProductImage ||
//                   "https://via.placeholder.com/400x300?text=No+Image"
//                 }
//                 alt={cat.category}
//                 className="w-full h-44 object-cover transition-all duration-500 group-hover:scale-105"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

//               <div className="py-3 bg-gradient-to-r from-[#002349] via-[#163c75] to-[#002349]">
//                 <h2 className="text-sm font-semibold uppercase tracking-wide text-[#f1d58b] group-hover:text-white text-center transition-colors">
//                   {cat.category}
//                 </h2>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Category;








// src/components/Category.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Loader2, AlertCircle } from "lucide-react";

const Category = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          "https://ecommerce-backend-y1bv.onrender.com/api/product/categories"
        );
        if (!response.ok) throw new Error("Failed to fetch categories");
        const data = await response.json();
        setCategories(data.categories || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading)
    return (
      <div className="flex flex-col items-center justify-center py-24 text-[#002349]">
        <Loader2 className="w-10 h-10 animate-spin mb-3 text-[#957C3D]" />
        <p className="text-lg font-semibold">Loading Categories...</p>
      </div>
    );

  if (error)
    return (
      <div className="flex flex-col items-center justify-center py-24 text-red-500">
        <AlertCircle className="w-8 h-8 mb-2" />
        <p>Error: {error}</p>
      </div>
    );

  const handleNavigate = (category) =>
    navigate(`/category/${encodeURIComponent(category)}`);

  return (
    <div className="bg-gradient-to-b from-white via-[#f8f9fb] to-white py-20 px-4 sm:px-8 md:px-12 lg:px-20">
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-wide text-[#002349] mb-3">
          <span className="text-[#002349]">Our</span>{" "}
          <span
            className="text-transparent bg-clip-text"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #957C3D, #d9c07c, #957C3D)",
            }}
          >
            Exclusive Categories
          </span>
        </h1>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "160px" }}
          transition={{ duration: 1, ease: "easeInOut", delay: 0.3 }}
          className="h-[4px] mx-auto rounded-full"
          style={{
            background: "linear-gradient(90deg, #957C3D, #d9c07c, #957C3D)",
          }}
        ></motion.div>
      </motion.div>

      {/* GRID */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 justify-center"
      >
        {categories.map((cat, index) => (
          <motion.div
            key={index}
            whileHover={{
              scale: 1.06,
              y: -6,
              boxShadow: "0 15px 35px rgba(0,0,0,0.15)",
            }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 200 }}
            onClick={() => handleNavigate(cat.category)}
            className="relative rounded-2xl overflow-hidden cursor-pointer group bg-white/70 border border-[#e5e7eb] hover:border-[#957C3D]/70 backdrop-blur-sm transition-all duration-500"
          >
            {/* IMAGE */}
            <motion.img
              src={
                cat.latestProductImage ||
                "https://via.placeholder.com/400x300?text=No+Image"
              }
              alt={cat.category}
              className="w-full h-44 sm:h-48 lg:h-52 object-cover transition-all duration-700 group-hover:scale-110"
            />

            {/* GLASS OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#002349]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

            {/* TITLE BAR */}
            <div className="absolute bottom-0 w-full py-3 bg-gradient-to-r from-[#002349] via-[#0e3d78] to-[#002349] text-center">
              <h2 className="text-sm sm:text-base font-semibold uppercase tracking-wide text-[#d9c07c] group-hover:text-white transition-colors">
                {cat.category}
              </h2>
            </div>

            {/* FLOATING GOLD STRIP */}
            <motion.div
              initial={{ width: "0%" }}
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.5 }}
              className="absolute top-0 left-0 h-[3px] bg-gradient-to-r from-[#957C3D] via-[#d9c07c] to-[#957C3D]"
            ></motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* MOTION SHIMMER BOTTOM DECORATION */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
        className="mt-16 flex justify-center"
      >
        <div
          className="w-48 h-1 rounded-full"
          style={{
            background:
              "linear-gradient(90deg, transparent, #957C3D, transparent)",
          }}
        ></div>
      </motion.div>
    </div>
  );
};

export default Category;
