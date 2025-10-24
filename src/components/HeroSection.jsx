// src/components/LandingPage.jsx
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
    { name: "Men", image: "https://via.placeholder.com/400x500?text=Men" },
    { name: "Women", image: "https://via.placeholder.com/400x500?text=Women" },
    { name: "Kids", image: "https://via.placeholder.com/400x500?text=Kids" },
    { name: "Accessories", image: "https://via.placeholder.com/400x500?text=Accessories" },
    { name: "Footwear Sale", image: "https://via.placeholder.com/400x500?text=Footwear+Sale" },
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

        {/* Indicators */}
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

      {/* OUR PRODUCTS */}
      {/* <section className="py-16 max-w-7xl mx-auto px-6 text-center bg-[#EFFAFD]">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold mb-10 text-[#002349]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Our <span className="text-[#957C3D]">Products</span>
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, i) => (
            <ProductCard key={i} />
          ))}
        </div>

        <motion.div whileHover={{ scale: 1.05 }} className="flex justify-center mt-10">
          <button className="bg-gradient-to-r from-[#002349] to-[#957C3D] text-white px-8 py-3 rounded-md font-semibold">
            View All Products
          </button>
        </motion.div>
      </section> */}





      {/* OUR PRODUCTS */}
<section className="py-16 max-w-7xl mx-auto px-6 text-center bg-[#EFFAFD]">
  <motion.h2
    className="text-3xl sm:text-4xl font-bold mb-10 text-[#002349]"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
  >
    Our <span className="text-[#957C3D]">Products</span>
  </motion.h2>

  <ProductsList />
</section>









      {/* 🆕 CATEGORIES SECTION */}
      <section className="py-16 max-w-7xl mx-auto px-6 text-center bg-[#EFFAFD]">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold mb-10 text-[#002349]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Shop By <span className="text-[#957C3D]">Category</span>
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              onClick={() => navigate(`/category/${cat.name.toLowerCase().replace(/\s+/g, "-")}`)}
              className="bg-white border rounded-lg shadow-md overflow-hidden cursor-pointer"
            >
              <img src={cat.image} alt={cat.name} className="w-full h-48 object-cover" />
              <div className="p-3 text-center font-semibold text-[#002349]">{cat.name}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SUBSCRIBE & TESTIMONIALS */}
      <Testimonials />
    </div>
  );
}

// ---------------- SUB COMPONENTS ----------------
// function ProductCard() {
//   return (
//     <motion.div whileHover={{ scale: 1.03 }} className="bg-white border rounded-lg shadow-md overflow-hidden">
//       <div className="aspect-[4/5] bg-[#EFFAFD] flex items-center justify-center">
//         <img src="https://via.placeholder.com/400x500?text=Product" alt="Product" className="w-full h-full object-cover" />
//       </div>
//       <div className="p-3 flex justify-between items-center">
//         <div>
//           <h5 className="text-sm font-medium text-[#002349]">Men's Shirt</h5>
//           <p className="text-xs text-gray-500">Best choice</p>
//         </div>
//         <div className="text-sm font-semibold text-[#957C3D]">$75</div>
//       </div>
//     </motion.div>
//   );
// }





function ProductsList() {
  const [products, setProducts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    fetch("https://ecommerce-backend-y1bv.onrender.com/api/product")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="text-center text-[#002349] font-semibold">Loading products...</p>;
  }

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {products.length > 0 ? (
          products.map((product) => (
            <motion.div
              key={product._id}
              whileHover={{ scale: 1.03 }}
              className="bg-white border rounded-lg shadow-md overflow-hidden cursor-pointer"
            >
              <div className="aspect-[4/5] bg-[#EFFAFD] flex items-center justify-center">
                <img
                  src={
                    product.images && product.images.length > 0
                      ? product.images[0]
                      : "https://via.placeholder.com/400x500?text=No+Image"
                  }
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-3 flex justify-between items-center">
                <div className="text-left">
                  <h5 className="text-sm font-medium text-[#002349] truncate">
                    {product.name}
                  </h5>
                  <p className="text-xs text-gray-500">{product.brand}</p>
                </div>
                <div className="text-sm font-semibold text-[#957C3D]">
                  ₹{product.basePrice}
                </div>
              </div>
            </motion.div>
          ))
        ) : (
          <p className="text-gray-600 col-span-full text-center">No products available.</p>
        )}
      </div>

      <motion.div whileHover={{ scale: 1.05 }} className="flex justify-center mt-10">
        <button className="bg-gradient-to-r from-[#002349] to-[#957C3D] text-white px-8 py-3 rounded-md font-semibold">
          View All Products
        </button>
      </motion.div>
    </>
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
            <div key={i} className="min-w-full flex flex-col md:flex-row items-center justify-center gap-8 px-4">
              <motion.img
                src={t.image}
                alt={t.name}
                className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-[#957C3D] shadow-lg"
                whileHover={{ scale: 1.05 }}
              />
              <div className="text-center md:text-left max-w-md">
                <p className="italic text-gray-700 mb-3">“{t.text}”</p>
                <h4 className="font-semibold text-[#002349]">{t.name}</h4>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}










