// src/components/WhyShopWithUs.jsx
import React from "react";
import { motion } from "framer-motion";
import { Truck, PackageCheck, Award } from "lucide-react";

const WhyShopWithUs = () => {
  const features = [
    {
      title: "Fast Delivery",
      desc: "Get your products quickly and safely.",
      icon: <Truck className="w-10 h-10 text-white" />,
      color: "from-[#002349] to-[#957C3D]",
    },
    {
      title: "Free Shipping",
      desc: "No hidden costs, free shipping above $50.",
      icon: <PackageCheck className="w-10 h-10 text-white" />,
      color: "from-[#957C3D] to-[#002349]",
    },
    {
      title: "Best Quality",
      desc: "Premium fabrics and guaranteed satisfaction.",
      icon: <Award className="w-10 h-10 text-white" />,
      color: "from-[#002349] to-[#957C3D]",
    },
  ];

  return (
    <section className="relative py-16 bg-[#EFFAFD] text-center">
      {/* Section Title */}
      <motion.h2
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-12 text-[#002349]"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Why Shop With <span className="text-[#957C3D]">Us</span>
      </motion.h2>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
        {features.map((f, i) => (
          <motion.div
            key={i}
            className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all flex flex-col items-center"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            {/* Icon with gradient */}
            <motion.div
              className={`bg-gradient-to-tr ${f.color} w-20 h-20 flex items-center justify-center rounded-full mb-6 shadow-lg`}
              whileHover={{ rotate: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {f.icon}
            </motion.div>

            <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-[#002349]">{f.title}</h3>
            <p className="text-gray-600 text-sm sm:text-base">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyShopWithUs;
