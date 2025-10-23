import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Truck, PackageCheck, Award } from "lucide-react";
import { useNavigate } from "react-router-dom";

import hero1 from "../assets/hero1.png";
import hero2 from "../assets/hero6.png";
import hero3 from "../assets/hero4.jpg";
import hero4 from "../assets/hero3.png";
import hero5 from "../assets/hero2.png";

const slides = [
  { image: hero1, title: "Discover Your Style", subtitle: "Explore our latest collection with confidence.", button: "Shop now" },
  { image: hero2, title: "New Season Arrivals", subtitle: "Find the perfect fit for every occasion.", button: "Browse collection" },
  { image: hero3, title: "Exclusive Offers", subtitle: "Enjoy deals on premium styles and more.", button: "See offers" },
  { image: hero4, title: "Sustainable Fashion", subtitle: "Look good while being eco-friendly.", button: "Explore now" },
  { image: hero5, title: "Customer Favorites", subtitle: "See what our customers love most.", button: "View favorites" },
];

export default function LandingPage() {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const navigate = useNavigate();

  const nextSlide = () => setCurrent((p) => (p === slides.length - 1 ? 0 : p + 1));
  const prevSlide = () => setCurrent((p) => (p === 0 ? slides.length - 1 : p - 1));

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleTouchStart = (e) => (touchStartX.current = e.touches[0].clientX);
  const handleTouchMove = (e) => (touchEndX.current = e.touches[0].clientX);
  const handleTouchEnd = () => {
    const deltaX = touchStartX.current - touchEndX.current;
    const threshold = 50;
    if (deltaX > threshold) nextSlide();
    else if (deltaX < -threshold) prevSlide();
  };

  const categories = [
    { name: "Men", image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3b9c?auto=format&fit=crop&w=600&q=80" },
    { name: "Women", image: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=600&q=80" },
    { name: "Kids", image: "https://images.unsplash.com/photo-1607346256330-dee7a4a06b63?auto=format&fit=crop&w=600&q=80" },
    { name: "Accessories", image: "https://images.unsplash.com/photo-1618354691373-d851c5c6e9a4?auto=format&fit=crop&w=600&q=80" },
    { name: "Footwear", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80" },
    { name: "Sale", image: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=600&q=80" },
  ];

  return (
    <div className="min-h-screen bg-[#EFFAFD] font-[lato] text-gray-800 overflow-hidden">
      {/* HERO SECTION */}
      <section
        className="relative w-full h-[55vh] sm:h-[65vh] md:h-[75vh] lg:h-[85vh] overflow-hidden shadow-lg"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            className="absolute inset-0 flex justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <img src={slides[current].image} alt={slides[current].title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-[#002349]/30" />
            <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-16 text-white max-w-3xl">
              <motion.h2
                className="text-3xl md:text-6xl font-extrabold mb-4 text-[#957C3D]"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {slides[current].title}
              </motion.h2>
              <motion.p
                className="text-sm sm:text-lg md:text-xl mb-8 font-light text-white"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                {slides[current].subtitle}
              </motion.p>
              <motion.button
                className="bg-gradient-to-r from-[#002349] to-[#957C3D] text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:opacity-90 transition w-fit text-sm sm:text-base"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                {slides[current].button}
              </motion.button>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="absolute bottom-4 w-full flex justify-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full transition ${i === current ? "bg-[#957C3D]" : "bg-white/40"}`}
            />
          ))}
        </div>
      </section>

      {/* WHY SHOP WITH US */}
      <section className="relative py-16 bg-[#EFFAFD] text-center">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-12 text-[#002349]"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          Why Shop With <span className="text-[#957C3D]">Us</span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
          {[{ title: "Fast Delivery", desc: "Get your products quickly and safely.", icon: <Truck className="w-10 h-10 text-white" />, color: "from-[#002349] to-[#957C3D]" },
            { title: "Free Shipping", desc: "No hidden costs, free shipping above $50.", icon: <PackageCheck className="w-10 h-10 text-white" />, color: "from-[#957C3D] to-[#002349]" },
            { title: "Best Quality", desc: "Premium fabrics and guaranteed satisfaction.", icon: <Award className="w-10 h-10 text-white" />, color: "from-[#002349] to-[#957C3D]" },
          ].map((f, i) => (
            <motion.div key={i} whileHover={{ scale: 1.05 }} className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all flex flex-col items-center">
              <div className={`bg-gradient-to-tr ${f.color} w-20 h-20 flex items-center justify-center rounded-full mb-6 shadow-md`}>{f.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-[#002349]">{f.title}</h3>
              <p className="text-gray-600 text-sm">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* NEW ARRIVALS */}
      <section
        className="relative bg-fixed bg-center bg-cover py-20 text-white text-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=1600&q=80')" }}
      >
        <div className="absolute inset-0 bg-[#002349]/50" />
        <div className="relative z-10">
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-[#957C3D]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            #NewArrivals
          </motion.h2>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto mb-6">
            Discover the latest fashion trends and exclusive new arrivals.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-r from-[#002349] to-[#957C3D] text-white px-6 py-3 rounded-full font-semibold"
          >
            Shop Now
          </motion.button>
        </div>
      </section>

      {/* OUR PRODUCTS */}
      <section className="py-16 max-w-7xl mx-auto px-6 text-center bg-[#EFFAFD]">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold mb-10 text-[#002349]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Our <span className="text-[#957C3D]">Products</span>
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {[
            {
              name: "Men’s Casual Shirt",
              price: 75,
              image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3b9c?auto=format&fit=crop&w=600&q=80",
            },
            {
              name: "Women’s Floral Dress",
              price: 120,
              image: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=600&q=80",
            },
            {
              name: "Kids Hoodie",
              price: 60,
              image: "https://images.unsplash.com/photo-1607346256330-dee7a4a06b63?auto=format&fit=crop&w=600&q=80",
            },
            {
              name: "Stylish Handbag",
              price: 130,
              image: "https://images.unsplash.com/photo-1618354691373-d851c5c6e9a4?auto=format&fit=crop&w=600&q=80",
            },
            {
              name: "Running Sneakers",
              price: 95,
              image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80",
            },
            {
              name: "Leather Belt",
              price: 45,
              image: "https://images.unsplash.com/photo-1618354606161-c92d84cdbf71?auto=format&fit=crop&w=600&q=80",
            },
            {
              name: "Men’s Denim Jeans",
              price: 110,
              image: "https://images.unsplash.com/photo-1618354691880-782c4cb6ac56?auto=format&fit=crop&w=600&q=80",
            },
            {
              name: "Women’s Sunglasses",
              price: 85,
              image: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=600&q=80",
            },
          ].map((product, i) => (
            <ProductCard key={i} {...product} />
          ))}
        </div>

        <motion.div whileHover={{ scale: 1.05 }} className="flex justify-center mt-10">
          <button className="bg-gradient-to-r from-[#002349] to-[#957C3D] text-white px-8 py-3 rounded-md font-semibold">
            View All Products
          </button>
        </motion.div>
      </section>

      {/* SHOP BY CATEGORY */}
      <section className="py-16 max-w-7xl mx-auto px-6 bg-[#EFFAFD] text-center">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold mb-12 text-[#002349]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Shop By <span className="text-[#957C3D]">Category</span>
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 place-items-center">
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              onClick={() => navigate(`/category/${cat.name.toLowerCase().replace(/\s+/g, "-")}`)}
              className="group bg-white rounded-xl shadow-md overflow-hidden cursor-pointer w-full max-w-[180px] sm:max-w-[200px] md:max-w-[160px]"
            >
              <div className="relative w-full h-40">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:opacity-90 transition"
                />
                <div className="absolute inset-0 bg-[#002349]/20 opacity-0 group-hover:opacity-100 transition"></div>
              </div>
              <div className="py-3 text-center font-semibold text-[#002349] text-sm sm:text-base">
                {cat.name}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SUBSCRIBE SECTION */}
      <section className="bg-[#EFFAFD] py-16 px-6 text-center">
        <motion.h3
          className="text-2xl md:text-3xl font-bold mb-3 text-[#002349]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Subscribe To Get Discount Offers
        </motion.h3>
        <p className="text-gray-600 mb-8">
          Join our newsletter to receive exclusive discounts and updates.
        </p>
        <form className="flex flex-col sm:flex-row justify-center gap-3 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#002349]"
          />
          <button className="bg-gradient-to-r from-[#002349] to-[#957C3D] text-white px-6 py-3 rounded-md font-semibold">
            Subscribe
          </button>
        </form>
      </section>

      <Testimonials />
    </div>
  );
}

function ProductCard({ name, price, image }) {
  return (
    <motion.div whileHover={{ scale: 1.03 }} className="bg-white border rounded-lg shadow-md overflow-hidden">
      <div className="aspect-[4/5] bg-[#EFFAFD] flex items-center justify-center">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-3 flex justify-between items-center">
        <div>
          <h5 className="text-sm font-medium text-[#002349]">{name}</h5>
          <p className="text-xs text-gray-500">Best choice</p>
        </div>
        <div className="text-sm font-semibold text-[#957C3D]">${price}</div>
      </div>
    </motion.div>
  );
}

function Testimonials() {
  const testimonials = [
    { name: "Anna Trevor", text: "Amazing products and fast delivery. Totally worth it!", image: hero5 },
    { name: "John Doe", text: "High quality and stylish! I love this brand.", image: hero4 },
    { name: "Sophia Lee", text: "Super comfortable fabrics and quick shipping!", image: hero3 },
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-[#EFFAFD]">
      <h3 className="text-3xl font-bold text-center mb-10 text-[#002349]">Customer Testimonials</h3>
      <div className="overflow-hidden max-w-5xl mx-auto px-6">
        <motion.div className="flex" animate={{ x: `-${index * 100}%` }} transition={{ duration: 0.8 }}>
          {testimonials.map((t, i) => (
            <div key={i} className="min-w-full flex flex-col items-center text-center px-6">
              <img src={t.image} alt={t.name} className="w-20 h-20 rounded-full mb-4 object-cover" />
              <p className="text-gray-700 mb-3 max-w-2xl italic">"{t.text}"</p>
              <h4 className="font-semibold text-[#957C3D]">{t.name}</h4>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
