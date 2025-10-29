// // src/pages/Category.jsx
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
//           "https://ecommerce-backend-y1bv.onrender.com/api/product/categories/latest"
//         );
//         if (!response.ok) throw new Error("Failed to fetch categories");
//         const data = await response.json();
//         setCategories(data);
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

//   // Divide categories into 4 top + 2 bottom
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

//         {/* underline */}
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
//         {/* TOP ROW - 4 items */}
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
//               {/* IMAGE */}
//               <div className="relative">
//                 <img
//                   src={
//                     cat.latestProductImage ||
//                     "https://via.placeholder.com/400x300?text=No+Image"
//                   }
//                   alt={cat.category}
//                   className="w-full h-44 object-cover transition-all duration-500 group-hover:scale-105"
//                 />
//                 {/* overlay */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
//               </div>

//               {/* FOOTER */}
//               <div className="py-3 bg-gradient-to-r from-[#002349] via-[#163c75] to-[#002349]">
//                 <h2 className="text-sm font-semibold uppercase tracking-wide text-[#f1d58b] group-hover:text-white text-center transition-colors">
//                   {cat.category}
//                 </h2>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* BOTTOM ROW - 2 items centered */}
//         <div className="flex justify-center gap-8">
//           {bottomRow.map((cat, index) => (
//             <motion.div
//               key={index}
//               whileHover={{
//                 scale: 1.06,
//                 y: -5,
//                 boxShadow: "0 10px 25px rgba(0,0,0,0.12)",
//               }}
//               whileTap={{ scale: 0.97 }}
//               transition={{ type: "spring", stiffness: 200 }}
//               onClick={() =>
//                 navigate(`/category/${encodeURIComponent(cat.category)}`)
//               }
//               className="relative bg-white rounded-2xl overflow-hidden cursor-pointer group border border-[#e5e7eb] hover:border-[#bfa663]/50 transition-all w-40 sm:w-48"
//             >
//               <div className="relative">
//                 <img
//                   src={
//                     cat.latestProductImage ||
//                     "https://via.placeholder.com/400x300?text=No+Image"
//                   }
//                   alt={cat.category}
//                   className="w-full h-40 object-cover transition-all duration-500 group-hover:scale-105"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
//               </div>
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






// src/pages/Category.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Loader2, AlertCircle } from "lucide-react";

function Category() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          "https://ecommerce-backend-y1bv.onrender.com/api/product/categories/latest"
        );
        if (!response.ok) throw new Error("Failed to fetch categories");
        const data = await response.json();
        setCategories(data);
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
      <div className="flex flex-col items-center justify-center py-20 text-[#002349]">
        <Loader2 className="w-10 h-10 animate-spin mb-3 text-[#bfa663]" />
        <p className="text-lg font-semibold">Loading Categories...</p>
      </div>
    );

  if (error)
    return (
      <div className="flex flex-col items-center justify-center py-20 text-red-500">
        <AlertCircle className="w-8 h-8 mb-2" />
        <p>Error: {error}</p>
      </div>
    );

  // Divide categories into 4 top + 2 bottom
  const topRow = categories.slice(0, 4);
  const bottomRow = categories.slice(4, 6);

  return (
    <div className="container mx-auto px-4 py-16 bg-gradient-to-b from-white via-[#faf8f3] to-white">
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-14"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide">
          <span className="text-[#002349]">Our</span>{" "}
          <span
            className="text-transparent bg-clip-text"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #bfa663, #f1d58b, #bfa663)",
            }}
          >
            Exclusive Categories
          </span>
        </h1>

        {/* underline */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "140px" }}
          transition={{ duration: 1, ease: "easeInOut", delay: 0.3 }}
          className="h-[3px] mt-3 mx-auto rounded-full"
          style={{
            background: "linear-gradient(90deg, #bfa663, #f1d58b, #bfa663)",
          }}
        ></motion.div>
      </motion.div>

      {/* GRID */}
      <div className="space-y-10">
        {/* TOP ROW - 4 items */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 justify-center">
          {topRow.map((cat, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.05,
                y: -5,
                boxShadow: "0 10px 25px rgba(0,0,0,0.12)",
              }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 200 }}
              onClick={() =>
                navigate(`/category/${encodeURIComponent(cat.category)}`)
              }
              className="relative bg-white rounded-2xl overflow-hidden cursor-pointer group border border-[#e5e7eb] hover:border-[#bfa663]/50 transition-all"
            >
              {/* IMAGE */}
              <div className="relative">
                <img
                  src={
                    cat.latestProductImage ||
                    "https://via.placeholder.com/400x300?text=No+Image"
                  }
                  alt={cat.category}
                  className="w-full h-44 object-cover transition-all duration-500 group-hover:scale-105"
                />
                {/* overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              </div>

              {/* FOOTER */}
              <div className="py-3 bg-gradient-to-r from-[#002349] via-[#163c75] to-[#002349]">
                <h2 className="text-sm font-semibold uppercase tracking-wide text-[#f1d58b] group-hover:text-white text-center transition-colors">
                  {cat.category}
                </h2>
              </div>
            </motion.div>
          ))}
        </div>

        {/* BOTTOM ROW - 2 items (same size, perfectly centered) */}
        <div className="flex justify-center gap-8">
          {bottomRow.map((cat, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.05,
                y: -5,
                boxShadow: "0 10px 25px rgba(0,0,0,0.12)",
              }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 200 }}
              onClick={() =>
                navigate(`/category/${encodeURIComponent(cat.category)}`)
              }
              className="relative bg-white rounded-2xl overflow-hidden cursor-pointer group border border-[#e5e7eb] hover:border-[#bfa663]/50 transition-all w-[calc(25%-1rem)]"
            >
              {/* IMAGE */}
              <div className="relative">
                <img
                  src={
                    cat.latestProductImage ||
                    "https://via.placeholder.com/400x300?text=No+Image"
                  }
                  alt={cat.category}
                  className="w-full h-44 object-cover transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              </div>

              {/* FOOTER */}
              <div className="py-3 bg-gradient-to-r from-[#002349] via-[#163c75] to-[#002349]">
                <h2 className="text-sm font-semibold uppercase tracking-wide text-[#f1d58b] group-hover:text-white text-center transition-colors">
                  {cat.category}
                </h2>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Category;
