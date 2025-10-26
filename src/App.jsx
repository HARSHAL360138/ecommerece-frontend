// src/App.jsx
import React from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";

// Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Register from "./pages/Register";
import AllProducts from "./pages/AllProducts"; // NEW PAGE

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProfileModel from "./components/ProfileModel";
import HeroSection from "./components/HeroSection";
import WhyShopWithUs from "./components/WhyShopWithUs";
import OurProducts from "./components/OurProducts";
import Category from "./components/Category";
import SubscriptionOffer from "./components/SubscriptionOffer";
import Testimonials from "./components/Testimonials";

// Profile pages
import CreateProfile from "./profile/CreateProfile";
import GetProfile from "./profile/GetProfile";
import EditProfile from "./profile/EditProfile";
import ProfileWrapper from "./profile/ProfileWrapper";

// Protected/Public Routes
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("accessToken");
  return token ? children : <Navigate to="/hero-section" replace />;
};

const PublicRoute = ({ children }) => {
  const token = localStorage.getItem("accessToken");
  return token ? <Navigate to="/home" replace /> : children;
};

// App component
function App() {
  const location = useLocation();
  const hideNavFooter = location.pathname === "/login" || location.pathname === "/signup";

  return (
    <>
      {!hideNavFooter && <Navbar />}
      <Routes>
        {/* Homepage */}
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <WhyShopWithUs />
              <OurProducts /> {/* Homepage version: shows 8 products */}
              <Category />
              <SubscriptionOffer />
              <Testimonials />
            </>
          }
        />
        <Route
          path="/hero-section"
          element={
            <>
              <HeroSection />
              <WhyShopWithUs />
              <OurProducts />
              <Category />
              <SubscriptionOffer />
              <Testimonials />
            </>
          }
        />

        {/* All Products Page */}
        <Route path="/all-products" element={<AllProducts />} />

        {/* Authentication */}
        <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
        <Route path="/signup" element={<PublicRoute><Register /></PublicRoute>} />
        <Route path="/logout" element={<ProtectedRoute><Logout /></ProtectedRoute>} />

        {/* Home */}
        <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />

        {/* Profile */}
        <Route path="/profile" element={<ProtectedRoute><ProfileModel /></ProtectedRoute>} />
        <Route path="/create-profile" element={<ProtectedRoute><CreateProfile /></ProtectedRoute>} />
        <Route path="/get-profile" element={<ProtectedRoute><GetProfile /></ProtectedRoute>} />
        <Route path="/edit-profile" element={<ProtectedRoute><EditProfile /></ProtectedRoute>} />
        <Route path="/profile-wrapper" element={<ProtectedRoute><ProfileWrapper /></ProtectedRoute>} />
      </Routes>
      {!hideNavFooter && <Footer />}
    </>
  );
}

export default App;
