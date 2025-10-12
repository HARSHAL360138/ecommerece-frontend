// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Navigation, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/autoplay";

// // Example images for clothing
// import hero1 from "../assets/hero1.png";
// import hero2 from "../assets/hero2.png";
// import hero3 from "../assets/hero3.png";
// const slides = [
//   {
//     image:  hero1,
//     title: "Discover Your Style",
//     subtitle: "Explore our latest clothing collection with confidence.",
//     button: "Shop now",
//   },
//   {
//     image:  hero2,
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
// ];

// function HeroSection() {
//   return (
//     <section className="w-full flex flex-col items-center bg-white">
//       <div className="w-full max-w-7xl rounded-3xl overflow-hidden mt-6 shadow">
//         <Swiper
//           modules={[Autoplay, Navigation, Pagination]}
//           slidesPerView={1}
//           navigation
//           pagination={{ clickable: true }}
//           autoplay={{ delay: 4000, disableOnInteraction: false }}
//           loop
//           className="w-full"
//         >
//           {slides.map((slide, idx) => (
//             <SwiperSlide key={idx}>
//               <div className="relative w-full h-[400px] md:h-[460px]">
//                 <img 
//                   src={slide.image}
//                   alt={slide.title}
//                   className="w-full h-full object-cover"
//                 />
//                 <div className="absolute inset-0 flex flex-col justify-center items-start bg-black bg-opacity-30 px-8 md:px-16">
//                   <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
//                     {slide.title}
//                   </h1>
//                   <p className="text-lg md:text-2xl text-white mb-8 drop-shadow-lg">
//                     {slide.subtitle}
//                   </p>
//                   <button className="bg-white text-black text-lg font-semibold px-8 py-3 rounded-full shadow hover:bg-gray-200 transition">
//                     {slide.button}
//                   </button>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//       <div className="mt-8 w-full max-w-7xl bg-gray-100 rounded-2xl py-8 px-8 md:px-16 text-center shadow">
//         <h2 className="text-2xl md:text-3xl font-bold mb-2">Shopping made easy</h2>
//         <p className="text-gray-700 text-lg mb-4">Enjoy reliability, secure deliveries, and hassle-free returns.</p>
//         <button className="bg-black text-white text-lg font-semibold px-8 py-3 rounded-full hover:bg-gray-800 transition">Start now</button>
//       </div>
//     </section>
//   );
// }

// export default HeroSection;











import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import hero1 from "../assets/hero1.png";
import hero2 from "../assets/hero2.png";
import hero3 from "../assets/hero3.png";
import hero4 from "../assets/hero4.png";
import hero5 from "../assets/hero5.png";

const slides = [
  {
    image: hero1,
    title: "Discover Your Style",
    subtitle: "Explore our latest clothing collection with confidence.",
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
    subtitle: "Look good while being eco-friendly with our green collection.",
    button: "Explore now",
  },
  {
    image: hero5,
    title: "Customer Favorites",
    subtitle: "See what styles our customers love the most.",
    button: "View favorites",
  },
];

function HeroSection() {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const deltaX = touchStartX.current - touchEndX.current;
    const swipeThreshold = 50;
    if (deltaX > swipeThreshold) {
      nextSlide();
    } else if (deltaX < -swipeThreshold) {
      prevSlide();
    }
  };

  return (
    <>
      <section
        className="relative w-full h-[55vh] sm:h-[65vh] md:h-[75vh] lg:h-[85vh] xl:h-[90vh] overflow-hidden rounded-none shadow-lg transition-all duration-500"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            className="absolute inset-0 flex justify-center items-center"
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <img
              src={slides[current].image}
              alt={slides[current].title}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/20" />

            <div className="absolute inset-0 flex flex-col justify-center px-4 sm:px-8 md:px-16 lg:px-24 text-white max-w-3xl">
              <motion.h2
                className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold mb-3 sm:mb-4 leading-tight"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {slides[current].title}
              </motion.h2>
              <motion.p
                className="text-sm sm:text-lg md:text-xl mb-6 sm:mb-8 font-light"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                {slides[current].subtitle}
              </motion.p>

              <motion.button
                className="bg-white text-black font-semibold px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 rounded-full shadow-lg hover:bg-gray-200 transition w-fit text-sm sm:text-base"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                {slides[current].button}
              </motion.button>
            </div>
          </motion.div>
        </AnimatePresence>

        <button
          onClick={prevSlide}
          className="hidden lg:flex absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 p-2 sm:p-3 rounded-full text-white transition"
        >
          <ChevronLeft size={22} className="sm:w-7 sm:h-7" />
        </button>

        <button
          onClick={nextSlide}
          className="hidden lg:flex absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 p-2 sm:p-3 rounded-full text-white transition"
        >
          <ChevronRight size={22} className="sm:w-7 sm:h-7" />
        </button>

        <div className="absolute bottom-4 sm:bottom-5 w-full flex justify-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition ${
                i === current ? "bg-white" : "bg-white/40"
              }`}
            />
          ))}
        </div>
      </section>

      <div className="my-8 w-full max-w-[90rem] mx-auto bg-gray-100 rounded-xl sm:rounded-2xl py-6 sm:py-8 px-4 sm:px-8 md:px-16 text-center shadow-md lg:flex lg:flex-row lg:justify-between lg:items-center font-[lato] space-y-4 lg:space-y-0">
        <div className="lg:text-left">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">
            Shopping made easy
          </h2>
          <p className="text-gray-700 text-sm sm:text-base md:text-lg mb-4">
            Enjoy reliability, secure deliveries, and hassle-free returns.
          </p>
        </div>
        <button className="bg-black text-white text-sm sm:text-base md:text-lg font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-full hover:bg-gray-800 transition">
          Start now
        </button>
      </div>
    </>
  );
}

export default HeroSection