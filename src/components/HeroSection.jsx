// src/components/HeroSection.jsx
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

import hero1 from "../assets/hero1.png";
import hero2 from "../assets/hero6.png";
import hero3 from "../assets/hero4.jpg";
import hero4 from "../assets/hero3.png";
import hero5 from "../assets/hero2.png";

const slides = [
  {
    image: hero1,
    title: "Discover Your Style",
    subtitle: "Explore our latest collection with confidence.",
    button: "Shop now",
  },
  {
    image: hero2,
    title: "New Season Arrivals",
    subtitle: "Find the perfect fit for every occasion.",
    button: "Browse collection",
  },
  {
    image: hero3,
    title: "Exclusive Offers",
    subtitle: "Enjoy deals on premium styles and more.",
    button: "See offers",
  },
  {
    image: hero4,
    title: "Sustainable Fashion",
    subtitle: "Look good while being eco-friendly.",
    button: "Explore now",
  },
  {
    image: hero5,
    title: "Customer Favorites",
    subtitle: "See what our customers love most.",
    button: "View favorites",
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const navigate = useNavigate();

  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  // Touch events for mobile swipe
  const handleTouchStart = (e) => (touchStartX.current = e.touches[0].clientX);
  const handleTouchMove = (e) => (touchEndX.current = e.touches[0].clientX);
  const handleTouchEnd = () => {
    const deltaX = touchStartX.current - touchEndX.current;
    const threshold = 50;
    if (deltaX > threshold) setCurrent(current === slides.length - 1 ? 0 : current + 1);
    else if (deltaX < -threshold) setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  return (
    <section
      className="relative w-full h-[65vh] sm:h-[75vh] md:h-[85vh] lg:h-[95vh] overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Background Image */}
          <img
            src={slides[current].image}
            alt={slides[current].title}
            className="w-full h-full object-cover scale-105"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/30" />

          {/* Text & Button */}
          <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-16 text-white max-w-3xl">
            <motion.h2
              className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-4 tracking-wide"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              {slides[current].title}
            </motion.h2>
            <motion.p
              className="text-sm sm:text-lg md:text-xl mb-8 font-light"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              {slides[current].subtitle}
            </motion.p>
            <motion.button
              onClick={() => navigate("/products")}
              className="bg-gradient-to-r from-[#002349] to-[#957C3D] text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:scale-105 transition-transform duration-300 w-fit text-sm sm:text-base"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {slides[current].button}
            </motion.button>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 w-full flex justify-center gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-4 h-4 rounded-full transition-all ${
              i === current ? "bg-[#957C3D] scale-125" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
