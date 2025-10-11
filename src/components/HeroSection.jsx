import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// Example images for clothing
import hero1 from "../assets/hero1.png";
import hero2 from "../assets/hero2.png";
import hero3 from "../assets/hero3.png";
const slides = [
  {
    image:  hero1,
    title: "Discover Your Style",
    subtitle: "Explore our latest clothing collection with confidence.",
    button: "Shop now",
  },
  {
    image:  hero2,
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
];

function HeroSection() {
  return (
    <section className="w-full flex flex-col items-center bg-white">
      <div className="w-full max-w-7xl rounded-3xl overflow-hidden mt-6 shadow">
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop
          className="w-full"
        >
          {slides.map((slide, idx) => (
            <SwiperSlide key={idx}>
              <div className="relative w-full h-[400px] md:h-[460px]">
                <img 
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-start bg-black bg-opacity-30 px-8 md:px-16">
                  <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
                    {slide.title}
                  </h1>
                  <p className="text-lg md:text-2xl text-white mb-8 drop-shadow-lg">
                    {slide.subtitle}
                  </p>
                  <button className="bg-white text-black text-lg font-semibold px-8 py-3 rounded-full shadow hover:bg-gray-200 transition">
                    {slide.button}
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="mt-8 w-full max-w-7xl bg-gray-100 rounded-2xl py-8 px-8 md:px-16 text-center shadow">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">Shopping made easy</h2>
        <p className="text-gray-700 text-lg mb-4">Enjoy reliability, secure deliveries, and hassle-free returns.</p>
        <button className="bg-black text-white text-lg font-semibold px-8 py-3 rounded-full hover:bg-gray-800 transition">Start now</button>
      </div>
    </section>
  );
}

export default HeroSection;


