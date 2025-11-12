import React from "react";
import HeroSection from "../components/HeroSection";
import Category from "../components/Category";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import OurProducts from "../components/OurProducts";
import Testimonials from "../components/Testimonials";
import WhyShopWithUs from "../components/WhyShopWithUs";
import OfferSection from "../components/OfferSection"; // ✅ new import

function Home() {
  return (
    <div>
      <HeroSection />
      <OfferSection /> {/* ✅ special offer banner */}
      <WhyShopWithUs />
      <OurProducts />
      <Category />
      <Testimonials />
    </div>
  );
}

export default Home;
