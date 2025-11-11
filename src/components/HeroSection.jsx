// // src/components/HeroSection.jsx
// import React, { useState, useEffect, useRef } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { useNavigate } from "react-router-dom";

// import hero1 from "../assets/hero1.png";
// import hero2 from "../assets/hero6.png";
// import hero3 from "../assets/hero4.jpg";
// import hero4 from "../assets/hero3.png";
// import hero5 from "../assets/hero2.png";

// const slides = [
//   {
//     image: hero1,
//     title: "Discover Your Style",
//     subtitle: "Explore our latest collection with confidence.",
//     button: "Shop now",
//   },
//   {
//     image: hero2,
//     title: "New Season Arrivals",
//     subtitle: "Find the perfect fit for every occasion.",
//     button: "Browse collection",
//   },
//   {
//     image: hero3,
//     title: "Exclusive Offers",
//     subtitle: "Enjoy deals on premium styles and more.",
//     button: "See offers",
//   },
//   {
//     image: hero4,
//     title: "Sustainable Fashion",
//     subtitle: "Look good while being eco-friendly.",
//     button: "Explore now",
//   },
//   {
//     image: hero5,
//     title: "Customer Favorites",
//     subtitle: "See what our customers love most.",
//     button: "View favorites",
//   },
// ];

// const HeroSection = () => {
//   const [current, setCurrent] = useState(0);
//   const touchStartX = useRef(0);
//   const touchEndX = useRef(0);
//   const navigate = useNavigate();

//   // Auto slide
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
//     }, 6000);
//     return () => clearInterval(timer);
//   }, []);

//   // Touch events for mobile swipe
//   const handleTouchStart = (e) => (touchStartX.current = e.touches[0].clientX);
//   const handleTouchMove = (e) => (touchEndX.current = e.touches[0].clientX);
//   const handleTouchEnd = () => {
//     const deltaX = touchStartX.current - touchEndX.current;
//     const threshold = 50;
//     if (deltaX > threshold) setCurrent(current === slides.length - 1 ? 0 : current + 1);
//     else if (deltaX < -threshold) setCurrent(current === 0 ? slides.length - 1 : current - 1);
//   };

//   return (
//     <section
//       className="relative w-full h-[65vh] sm:h-[75vh] md:h-[85vh] lg:h-[95vh] overflow-hidden"
//       onTouchStart={handleTouchStart}
//       onTouchMove={handleTouchMove}
//       onTouchEnd={handleTouchEnd}
//     >
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={current}
//           className="absolute inset-0 flex items-center justify-center"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 1 }}
//         >
//           {/* Background Image */}
//           <img
//             src={slides[current].image}
//             alt={slides[current].title}
//             className="w-full h-full object-cover scale-105"
//           />
//           {/* Overlay */}
//           <div className="absolute inset-0 bg-black/30" />

//           {/* Text & Button */}
//           <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-16 text-white max-w-3xl">
//             <motion.h2
//               className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-4 tracking-wide"
//               initial={{ y: 50, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ duration: 0.8 }}
//             >
//               {slides[current].title}
//             </motion.h2>
//             <motion.p
//               className="text-sm sm:text-lg md:text-xl mb-8 font-light"
//               initial={{ y: 50, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ duration: 1, delay: 0.2 }}
//             >
//               {slides[current].subtitle}
//             </motion.p>
//             <motion.button
//               onClick={() => navigate("/products")}
//               className="bg-gradient-to-r from-[#002349] to-[#957C3D] text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:scale-105 transition-transform duration-300 w-fit text-sm sm:text-base"
//               initial={{ scale: 0.8, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               transition={{ duration: 0.6, delay: 0.4 }}
//             >
//               {slides[current].button}
//             </motion.button>
//           </div>
//         </motion.div>
//       </AnimatePresence>

//       {/* Slide Indicators */}
//       <div className="absolute bottom-4 w-full flex justify-center gap-3">
//         {slides.map((_, i) => (
//           <button
//             key={i}
//             onClick={() => setCurrent(i)}
//             className={`w-4 h-4 rounded-full transition-all ${
//               i === current ? "bg-[#957C3D] scale-125" : "bg-white/50"
//             }`}
//           />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

















// // src/components/HeroSection.jsx
// import React, { useState, useEffect, useRef } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { useNavigate } from "react-router-dom";

// import hero1 from "../assets/hero1.png";
// import hero2 from "../assets/hero6.png";
// import hero3 from "../assets/hero4.jpg";
// import hero4 from "../assets/hero3.png";

// const slides = [
//   {
//     image: hero1,
//     title: "Discover Timeless Elegance",
//     subtitle: "Redefine your wardrobe with luxurious, modern fashion.",
//     button: "Shop Collection",
//   },
//   {
//     image: hero2,
//     title: "New Season. New You.",
//     subtitle: "Embrace exclusive trends crafted for every moment.",
//     button: "Explore Now",
//   },
//   {
//     image: hero3,
//     title: "Unmatched Quality & Style",
//     subtitle: "Experience premium craftsmanship designed to impress.",
//     button: "View Premium Range",
//   },
//   {
//     image: hero4,
//     title: "Sustainable. Sophisticated. Stylish.",
//     subtitle: "Luxury that cares for you and the planet.",
//     button: "Discover More",
//   },
// ];

// const HeroSection = () => {
//   const [current, setCurrent] = useState(0);
//   const touchStartX = useRef(0);
//   const touchEndX = useRef(0);
//   const navigate = useNavigate();

//   // Auto slide
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
//     }, 6000);
//     return () => clearInterval(timer);
//   }, []);

//   // Touch events for mobile swipe
//   const handleTouchStart = (e) => (touchStartX.current = e.touches[0].clientX);
//   const handleTouchMove = (e) => (touchEndX.current = e.touches[0].clientX);
//   const handleTouchEnd = () => {
//     const deltaX = touchStartX.current - touchEndX.current;
//     const threshold = 50;
//     if (deltaX > threshold) setCurrent(current === slides.length - 1 ? 0 : current + 1);
//     else if (deltaX < -threshold) setCurrent(current === 0 ? slides.length - 1 : current - 1);
//   };

//   return (
//     <section
//       className="relative w-full h-[65vh] sm:h-[75vh] md:h-[90vh] lg:h-[95vh] overflow-hidden bg-black"
//       onTouchStart={handleTouchStart}
//       onTouchMove={handleTouchMove}
//       onTouchEnd={handleTouchEnd}
//     >
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={current}
//           className="absolute inset-0 flex items-center justify-center"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 1.2, ease: "easeInOut" }}
//         >
//           {/* Background Image with animated scale */}
//           <motion.img
//             src={slides[current].image}
//             alt={slides[current].title}
//             className="w-full h-full object-cover"
//             initial={{ scale: 1.1 }}
//             animate={{ scale: 1 }}
//             transition={{ duration: 6, ease: "easeOut" }}
//           />

//           {/* Gradient Overlay */}
//           <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

//           {/* Text & Button */}
//           <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-16 text-white max-w-3xl">
//             <motion.h2
//               className="text-3xl sm:text-5xl md:text-6xl font-extrabold mb-4 leading-tight tracking-wide drop-shadow-lg"
//               initial={{ y: 40, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//             >
//               {slides[current].title}
//             </motion.h2>
//             <motion.p
//               className="text-sm sm:text-lg md:text-xl mb-8 font-light text-gray-200"
//               initial={{ y: 40, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ duration: 0.9, delay: 0.4 }}
//             >
//               {slides[current].subtitle}
//             </motion.p>
//             <motion.button
//               onClick={() => navigate("/products")}
//               className="bg-gradient-to-r from-[#002349] to-[#957C3D] text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 w-fit text-sm sm:text-base uppercase tracking-wide"
//               initial={{ scale: 0.9, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               transition={{ duration: 0.8, delay: 0.6 }}
//             >
//               {slides[current].button}
//             </motion.button>
//           </div>
//         </motion.div>
//       </AnimatePresence>

//       {/* Slide Indicators */}
//       <div className="absolute bottom-6 w-full flex justify-center gap-3">
//         {slides.map((_, i) => (
//           <button
//             key={i}
//             onClick={() => setCurrent(i)}
//             className={`w-3 h-3 rounded-full border border-white transition-all ${
//               i === current
//                 ? "bg-[#957C3D] scale-125 shadow-md shadow-[#957C3D]/40"
//                 : "bg-white/40 hover:bg-white/70"
//             }`}
//           />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default HeroSection;





// // src/components/HeroSection.jsx
// import React, { useState, useEffect, useRef } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { useNavigate } from "react-router-dom";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// import hero1 from "../assets/HERO-IMG-01.jpg";
// import hero2 from "../assets/HERO-IMG-02.jpg";
// import hero3 from "../assets/HERO-IMG-03.jpg";
// import hero4 from "../assets/HERO-IMG-04.png";

// const slides = [
//   {
//     image: hero1,
//     title: "Discover Timeless Elegance",
//     subtitle: "Redefine your wardrobe with luxurious, modern fashion.",
//     button: "Shop Collection",
//   },
//   {
//     image: hero2,
//     title: "New Season. New You.",
//     subtitle: "Embrace exclusive trends crafted for every moment.",
//     button: "Explore Now",
//   },
//   {
//     image: hero3,
//     title: "Unmatched Quality & Style",
//     subtitle: "Experience premium craftsmanship designed to impress.",
//     button: "View Premium Range",
//   },
//   {
//     image: hero4,
//     title: "Sustainable. Sophisticated. Stylish.",
//     subtitle: "Luxury that cares for you and the planet.",
//     button: "Discover More",
//   },
// ];

// const HeroSection = () => {
//   const [current, setCurrent] = useState(0);
//   const navigate = useNavigate();
//   const touchStartX = useRef(0);
//   const touchEndX = useRef(0);

//   // Auto Slide
//   useEffect(() => {
//     const timer = setInterval(() => nextSlide(), 6000);
//     return () => clearInterval(timer);
//   }, [current]);

//   const nextSlide = () =>
//     setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
//   const prevSlide = () =>
//     setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

//   // Swipe (mobile)
//   const handleTouchStart = (e) => (touchStartX.current = e.touches[0].clientX);
//   const handleTouchMove = (e) => (touchEndX.current = e.touches[0].clientX);
//   const handleTouchEnd = () => {
//     const delta = touchStartX.current - touchEndX.current;
//     if (delta > 50) nextSlide();
//     if (delta < -50) prevSlide();
//   };

//   return (
//     <section
//       className="relative w-full h-[70vh] sm:h-[85vh] md:h-[95vh] overflow-hidden select-none bg-black"
//       onTouchStart={handleTouchStart}
//       onTouchMove={handleTouchMove}
//       onTouchEnd={handleTouchEnd}
//     >
//       {/* 🔄 Animated Slide Transition */}
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={current}
//           className="absolute inset-0"
//           initial={{ opacity: 0, scale: 1.05 }}
//           animate={{ opacity: 1, scale: 1 }}
//           exit={{ opacity: 0, scale: 1.05 }}
//           transition={{ duration: 1.3, ease: "easeInOut" }}
//         >
//           {/* Background Image */}
//           <motion.img
//             src={slides[current].image}
//             alt={slides[current].title}
//             className="w-full h-full object-cover object-center brightness-95"
//             initial={{ scale: 1.1 }}
//             animate={{ scale: 1 }}
//             transition={{ duration: 6 }}
//           />

//           {/* Cinematic Gradient Layers */}
//           <div className="absolute inset-0 bg-gradient-to-r from-[#002349]/90 via-[#000]/40 to-transparent" />
//           <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />

//           {/* Subtle Spotlight Motion */}
//           <motion.div
//             className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15)_0%,transparent_70%)]"
//             animate={{
//               backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
//             }}
//             transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
//           />

//           {/* Text & CTA Section */}
//           <motion.div
//             className="absolute top-[22%] sm:top-[25%] left-6 sm:left-16 z-20"
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1.2 }}
//           >
//             <motion.h2
//               className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white mb-4 tracking-tight leading-tight relative drop-shadow-xl"
//               initial={{ y: 40, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ duration: 0.8 }}
//             >
//               <span className="relative">
//                 {slides[current].title}
//                 <motion.span
//                   className="absolute -bottom-2 left-0 h-[3px] bg-gradient-to-r from-[#957C3D] to-transparent rounded-full"
//                   initial={{ width: 0 }}
//                   animate={{ width: "100%" }}
//                   transition={{ duration: 1.2, delay: 0.4 }}
//                 />
//               </span>
//             </motion.h2>

//             <motion.p
//               className="text-gray-200 text-base sm:text-xl md:text-2xl max-w-md font-light mb-8"
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.3, duration: 0.8 }}
//             >
//               {slides[current].subtitle}
//             </motion.p>

//             <motion.button
//               onClick={() => navigate("/products")}
//               className="relative overflow-hidden bg-gradient-to-r from-[#002349] to-[#957C3D] hover:from-[#957C3D] hover:to-[#002349] text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 uppercase tracking-widest"
//               whileTap={{ scale: 0.97 }}
//             >
//               <span className="relative z-10">{slides[current].button}</span>
//               <motion.span
//                 className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
//                 animate={{ x: ["-100%", "100%"] }}
//                 transition={{ repeat: Infinity, duration: 1.5 }}
//               />
//             </motion.button>
//           </motion.div>

//           {/* Ambient Gold Glow */}
//           <motion.div
//             className="absolute right-0 top-0 w-[30%] h-full bg-gradient-to-l from-[#957C3D]/10 to-transparent"
//             animate={{
//               opacity: [0.3, 0.6, 0.3],
//             }}
//             transition={{ duration: 5, repeat: Infinity }}
//           />
//         </motion.div>
//       </AnimatePresence>

//       {/* 🔘 Slide Indicators */}
//       <div className="absolute bottom-6 sm:bottom-10 w-full flex justify-center gap-3">
//         {slides.map((_, i) => (
//           <motion.div
//             key={i}
//             onClick={() => setCurrent(i)}
//             className={`cursor-pointer rounded-full transition-all ${
//               i === current
//                 ? "bg-[#957C3D] w-8 h-3 shadow-lg"
//                 : "bg-white/60 w-3 h-3 hover:bg-white"
//             }`}
//           />
//         ))}
//       </div>

//       {/* ⬅️➡️ Navigation Buttons (optional, visible on desktop) */}
//       <div className="hidden md:flex absolute inset-y-0 w-full justify-between items-center px-6 text-white z-30">
//         <button
//           onClick={prevSlide}
//           className="p-3 bg-black/30 hover:bg-black/50 rounded-full transition"
//         >
//           <ChevronLeft className="w-6 h-6" />
//         </button>
//         <button
//           onClick={nextSlide}
//           className="p-3 bg-black/30 hover:bg-black/50 rounded-full transition"
//         >
//           <ChevronRight className="w-6 h-6" />
//         </button>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;








import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

import hero1 from "../assets/HERO-IMG-01.jpg";
import hero2 from "../assets/HERO-IMG-04.png";
import hero3 from "../assets/HERO-IMG-10.jpg";
import hero4 from "../assets/HERO-IMG-02.jpg";

const slides = [
  {
    image: hero1,
    title: "Discover Timeless Elegance",
    subtitle: "Redefine your wardrobe with luxurious, modern fashion.",
    button: "Shop Collection",
  },
  {
    image: hero2,
    title: "New Season. New You.",
    subtitle: "Embrace exclusive trends crafted for every moment.",
    button: "Explore Now",
  },
  {
    image: hero3,
    title: "Unmatched Quality & Style",
    subtitle: "Experience premium craftsmanship designed to impress.",
    button: "View Premium Range",
  },
  {
    image: hero4,
    title: "Sustainable. Sophisticated. Stylish.",
    subtitle: "Luxury that cares for you and the planet.",
    button: "Discover More",
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  useEffect(() => {
    const timer = setInterval(() => nextSlide(), 6000);
    return () => clearInterval(timer);
  }, [current]);

  const nextSlide = () =>
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  const handleTouchStart = (e) => (touchStartX.current = e.touches[0].clientX);
  const handleTouchMove = (e) => (touchEndX.current = e.touches[0].clientX);
  const handleTouchEnd = () => {
    const delta = touchStartX.current - touchEndX.current;
    if (delta > 50) nextSlide();
    if (delta < -50) prevSlide();
  };

  return (
    <section
      className="relative w-full h-[70vh] sm:h-[100vh] md:h-[100vh] overflow-hidden select-none bg-black"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          <motion.img
            src={slides[current].image}
            alt={slides[current].title}
            className="w-full h-full object-cover object-center brightness-95"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 6 }}
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#001a33]/90 via-[#000]/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />

          <motion.div
            className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.08)_0%,transparent_70%)]"
            animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
            transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
          />

          {/* 🪄 Text & Button Section */}
          <motion.div
            className="absolute top-[25%] sm:top-[30%] left-6 sm:left-16 z-20"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            <motion.h2
              className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white mb-4 tracking-tight leading-tight relative drop-shadow-[0_5px_10px_rgba(0,0,0,0.6)]"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <span className="relative">
                {slides[current].title}
                <motion.span
                  className="absolute -bottom-2 left-0 h-[3px] bg-gradient-to-r from-[#D4AF37] to-transparent rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.2, delay: 0.4 }}
                />
              </span>
            </motion.h2>

            <motion.p
              className="text-gray-200 text-base sm:text-xl md:text-2xl max-w-md font-light mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              {slides[current].subtitle}
            </motion.p>

            {/* 💎 Final Refined Button */}
            <motion.button
              onClick={() => navigate("/products")}
              className="relative bg-[#957C3D] hover:bg-[#CBB26A] text-white font-semibold px-10 py-4 rounded-full uppercase tracking-wider text-lg transition-all duration-500 shadow-[0_0_25px_rgba(212,175,55,0.4)] hover:shadow-[0_0_40px_rgba(212,175,55,0.7)] hover:scale-105"
              whileTap={{ scale: 0.97 }}
            >
              {slides[current].button}
            </motion.button>
          </motion.div>

          {/* 🌟 Soft Ambient Light */}
          <motion.div
            className="absolute right-0 top-0 w-[35%] h-full bg-gradient-to-l from-[#957C3D]/10 to-transparent"
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 6, repeat: Infinity }}
          />
        </motion.div>
      </AnimatePresence>

      {/* ⚪ Indicators */}
      <div className="absolute bottom-6 sm:bottom-10 w-full flex justify-center gap-3">
        {slides.map((_, i) => (
          <motion.div
            key={i}
            onClick={() => setCurrent(i)}
            className={`cursor-pointer rounded-full transition-all ${
              i === current
                ? "bg-[#D4AF37] w-8 h-3 shadow-[0_0_10px_rgba(212,175,55,0.8)]"
                : "bg-white/60 w-3 h-3 hover:bg-white/90"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;

