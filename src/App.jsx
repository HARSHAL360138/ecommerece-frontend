
import React from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Logout from "./pages/Logout";

import ProfileModel from "./components/ProfileModel";
import HeroSection from "./components/HeroSection";
import CreateProfile from "./profile/CreateProfile";
import GetProfile from "./profile/GetProfile";
import EditProfile from "./profile/EditProfile";
import ProfileWrapper from "./profile/ProfileWrapper";
import Register from "./pages/Register";

// Protected Route (for fully restricted pages)
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("accessToken");
  return token ? children : <Navigate to="/hero-section" replace />;
};

// Public Route (restricts logged-in users from accessing login/signup)
const PublicRoute = ({ children }) => {
  const token = localStorage.getItem("accessToken");
  return token ? <Navigate to="/home" replace /> : children;
};

function App() {
  const location = useLocation();
  const hideNavFooter = location.pathname === "/login" || location.pathname === "/signup";

  return (
    <>
      {!hideNavFooter && <Navbar />}
      <Routes>
        {/* Default route — show HeroSection first */}
        <Route path="/" element={<HeroSection />} />
        <Route path="/login" element={ <PublicRoute> <Login /> </PublicRoute>}/>
        <Route path="/signup" element={ <PublicRoute> <Register /> </PublicRoute>}/>
        <Route path="/profile" element={<ProfileModel />} />
        <Route path="/hero-section" element={<HeroSection />} />


        {/* Home should show only after login */}
        <Route path="/home" element={ <ProtectedRoute> <Home /> </ProtectedRoute>}/>


        {/* Profile Routes Start */}
        <Route path="/create-profile" element={<ProtectedRoute><CreateProfile /></ProtectedRoute>} />
        <Route path="/get-profile" element={<ProtectedRoute><GetProfile /></ProtectedRoute>} />
        <Route path="/edit-profile" element={<ProtectedRoute><EditProfile /></ProtectedRoute>} />
        <Route path="/profile-wrapper" element={<ProtectedRoute><ProfileWrapper/></ProtectedRoute>} />
        {/* Profile Routes End */}


        <Route path="/logout" element={<ProtectedRoute> <Logout /> </ProtectedRoute>}/>
      </Routes>
      {!hideNavFooter && <Footer />}
    </>
  );
}

export default App;
