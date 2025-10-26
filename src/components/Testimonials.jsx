// src/components/Testimonials.jsx
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import hero2 from "../assets/hero2.png";
import hero3 from "../assets/hero4.jpg";
import hero4 from "../assets/hero3.png";
import hero5 from "../assets/hero2.png";

const testimonials = [
  { name: "Anna Trevor", text: "Amazing products and fast delivery. Totally worth it!", image: hero5 },
  { name: "John Doe", text: "High quality and stylish! I love this brand.", image: hero4 },
  { name: "Sophia Lee", text: "Super comfortable fabrics and quick shipping!", image: hero3 },
  { name: "Michael Brown", text: "Excellent customer service and premium quality!", image: hero2 },
  { name: "Emma Watson", text: "I get compliments every time I wear these products.", image: hero5 },
  { name: "Liam Smith", text: "Fast delivery and amazing packaging!", image: hero4 },
  { name: "Olivia Johnson", text: "The fabrics are so soft and long-lasting.", image: hero3 },
  { name: "Noah Williams", text: "I’m a repeat customer because of the quality.", image: hero2 },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const containerRef = useRef(null);

  const slidesToShow = () => {
    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  };

  const visibleCount = slidesToShow();

  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-[#EFFAFD] relative overflow-hidden">
      <h3 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-[#002349]">
        Customer <span className="text-[#957C3D]">Testimonials</span>
      </h3>

      <div className="relative max-w-6xl mx-auto px-6 overflow-hidden">
        <motion.div
          ref={containerRef}
          className="flex gap-6"
          animate={{ x: `-${current * (100 / visibleCount)}%` }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {[...testimonials, ...testimonials].map((t, i) => (
            <motion.div
              key={i}
              className="flex-1 bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center min-w-[300px]"
              whileHover={{ scale: 1.05, y: -5, boxShadow: "0 20px 30px rgba(0,0,0,0.2)" }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
            >
              <motion.img
                src={t.image}
                alt={t.name}
                className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover border-4 border-[#957C3D] shadow-md mb-4"
              />
              <p className="italic text-gray-700 mb-3">“{t.text}”</p>
              <h4 className="font-semibold text-[#002349]">{t.name}</h4>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Indicators */}
      <div className="flex justify-center gap-3 mt-10">
        {testimonials.map((_, i) => (
          <button
            key={i}
            className={`w-3 h-3 rounded-full transition-all ${
              i === current ? "bg-[#957C3D] scale-125" : "bg-[#002349]/50"
            }`}
            onClick={() => setCurrent(i)}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
