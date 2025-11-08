// // src/components/WhyShopWithUs.jsx
// import React from "react";
// import { motion } from "framer-motion";
// import { Truck, PackageCheck, Award } from "lucide-react";

// const WhyShopWithUs = () => {
//   const features = [
//     {
//       title: "Fast Delivery",
//       desc: "Get your products quickly and safely.",
//       icon: <Truck className="w-10 h-10 text-white" />,
//       color: "from-[#002349] to-[#957C3D]",
//     },
//     {
//       title: "Free Shipping",
//       desc: "No hidden costs, free shipping above $50.",
//       icon: <PackageCheck className="w-10 h-10 text-white" />,
//       color: "from-[#957C3D] to-[#002349]",
//     },
//     {
//       title: "Best Quality",
//       desc: "Premium fabrics and guaranteed satisfaction.",
//       icon: <Award className="w-10 h-10 text-white" />,
//       color: "from-[#002349] to-[#957C3D]",
//     },
//   ];

//   return (
//     <section className="relative py-16 bg-[#EFFAFD] text-center">
//       {/* Section Title */}
//       <motion.h2
//         className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-12 text-[#002349]"
//         initial={{ y: 30, opacity: 0 }}
//         whileInView={{ y: 0, opacity: 1 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.8 }}
//       >
//         Why Shop With <span className="text-[#957C3D]">Us</span>
//       </motion.h2>

//       {/* Feature Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
//         {features.map((f, i) => (
//           <motion.div
//             key={i}
//             className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all flex flex-col items-center"
//             initial={{ y: 50, opacity: 0 }}
//             whileInView={{ y: 0, opacity: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8, delay: i * 0.2 }}
//             whileHover={{ scale: 1.05 }}
//           >
//             {/* Icon with gradient */}
//             <motion.div
//               className={`bg-gradient-to-tr ${f.color} w-20 h-20 flex items-center justify-center rounded-full mb-6 shadow-lg`}
//               whileHover={{ rotate: 10 }}
//               transition={{ type: "spring", stiffness: 300 }}
//             >
//               {f.icon}
//             </motion.div>

//             <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-[#002349]">{f.title}</h3>
//             <p className="text-gray-600 text-sm sm:text-base">{f.desc}</p>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default WhyShopWithUs;







// src/components/WhyShopWithUs.jsx
// import React from "react";
// import { motion } from "framer-motion";
// import { Truck, PackageCheck, Award } from "lucide-react";

// const WhyShopWithUs = () => {
//   const features = [
//     {
//       title: "Fast Delivery",
//       desc: "Quick, safe, and reliable delivery to your doorstep.",
//       icon: <Truck className="w-8 h-8 text-white" />,
//       gradient: "from-[#002349] via-[#385b81] to-[#957C3D]",
//     },
//     {
//       title: "Free Shipping",
//       desc: "Enjoy free shipping on orders above $50.",
//       icon: <PackageCheck className="w-8 h-8 text-white" />,
//       gradient: "from-[#957C3D] via-[#bfa56c] to-[#002349]",
//     },
//     {
//       title: "Premium Quality",
//       desc: "Only the best quality, verified and trusted.",
//       icon: <Award className="w-8 h-8 text-white" />,
//       gradient: "from-[#002349] via-[#214d7a] to-[#957C3D]",
//     },
//   ];

//   return (
//     <section className="relative py-12 bg-gradient-to-b from-[#EFFAFD] to-white overflow-hidden">
//       {/* soft glowing bg */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute top-10 left-10 w-48 h-48 bg-[#957C3D]/20 blur-[80px] rounded-full"></div>
//         <div className="absolute bottom-10 right-10 w-48 h-48 bg-[#002349]/20 blur-[80px] rounded-full"></div>
//       </div>

//       {/* Heading */}
//       <motion.h2
//         className="text-center text-3xl sm:text-4xl font-extrabold text-[#002349] mb-10"
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.6 }}
//       >
//         Why Shop <span className="text-[#957C3D]">With Us</span>
//       </motion.h2>

//       {/* Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 px-6 md:px-12 max-w-6xl mx-auto">
//         {features.map((f, i) => (
//           <motion.div
//             key={i}
//             className="relative bg-white/80 backdrop-blur-xl border border-white/30 rounded-2xl p-6 shadow-md hover:shadow-2xl text-center transition-all duration-500"
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: i * 0.15 }}
//             whileHover={{
//               scale: 1.05,
//               rotateY: -5,
//               transition: { type: "spring", stiffness: 200 },
//             }}
//           >
//             {/* Icon */}
//             <motion.div
//               className={`mx-auto mb-4 w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br ${f.gradient} shadow-lg`}
//               whileHover={{ rotate: 10, scale: 1.1 }}
//               transition={{ type: "spring", stiffness: 250 }}
//             >
//               {f.icon}
//             </motion.div>

//             <h3 className="text-lg font-bold text-[#002349] mb-2 group-hover:text-[#957C3D] transition-all">
//               {f.title}
//             </h3>
//             <p className="text-gray-600 text-sm">{f.desc}</p>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default WhyShopWithUs;















// src/components/WhyShopWithUs.jsx
import React from "react";
import { motion } from "framer-motion";
import { Truck, PackageCheck, Award } from "lucide-react";

const WhyShopWithUs = () => {
  const features = [
    {
      title: "Fast Delivery",
      desc: "Swift and secure doorstep delivery with real-time tracking.",
      icon: <Truck className="w-7 h-7 text-white" />,
    },
    {
      title: "Free Shipping",
      desc: "Enjoy complimentary shipping on all orders above $50.",
      icon: <PackageCheck className="w-7 h-7 text-white" />,
    },
    {
      title: "Premium Quality",
      desc: "Every product is crafted with care, ensuring lasting satisfaction.",
      icon: <Award className="w-7 h-7 text-white" />,
    },
  ];

  return (
    <section className="relative py-16 bg-gradient-to-b from-[#f4f5f7] to-[#e9ecef] overflow-hidden">
      {/* Section Title */}
      <motion.h2
        className="text-[2.2rem] sm:text-4xl md:text-5xl font-extrabold mb-14 text-center text-[#001a35] tracking-tight"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <span className="text-[#001a35]">WHY SHOP WITH </span>
        <span className="text-[#957C3D]">US</span>
      </motion.h2>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
        {features.map((f, i) => (
          <motion.div
            key={i}
            className="bg-white rounded-2xl p-10 shadow-[0_6px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_10px_35px_rgba(0,35,73,0.18)] transition-all duration-500 flex flex-col items-center text-center border border-[#d9dde2]"
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            whileHover={{ scale: 1.04 }}
          >
            {/* Icon */}
            <motion.div
              className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-tr from-[#002349] to-[#957C3D] shadow-md mb-6"
              whileHover={{ scale: 1.08, rotate: 5 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              {f.icon}
            </motion.div>

            {/* Title */}
            <h3 className="text-xl font-semibold text-[#001a35] mb-2 tracking-wide group-hover:text-[#957C3D] transition-colors duration-300">
              {f.title}
            </h3>

            {/* Description */}
            <p className="text-[#2b2b2b] text-sm sm:text-base leading-relaxed max-w-xs">
              {f.desc}
            </p>

            {/* Bottom Accent Line */}
            <motion.div
              className="mt-4 w-10 h-[3px] bg-gradient-to-r from-[#002349] to-[#957C3D] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />
          </motion.div>
        ))}
      </div>

      {/* Subtle Background Glows */}
      <motion.div
        className="absolute top-16 left-10 w-24 h-24 bg-[#957C3D]/10 rounded-full blur-2xl"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-28 h-28 bg-[#002349]/10 rounded-full blur-2xl"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
    </section>
  );
};

export default WhyShopWithUs;

