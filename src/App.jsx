import React from "react";
import { Navigate, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import SignUp from "./pages/SignUp";
import ProfileModel from "./components/ProfileModel";

const HomeWrapper = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("accessToken");

  const handleOverlayClick = () => {
    if (!token) navigate("/login");
  };

  return (
    <div style={{ position: "relative" }}>
      <Home />
      {!token && (
        <div
          onClick={handleOverlayClick}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(255, 255, 255, 0)",
            zIndex: 10,
          }}
        />
      )}
    </div>
  );
};

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("accessToken");
  return token ? children : <Navigate to="/login" replace />;
};

function App() {
  const location = useLocation();
  const hideNavFooter =
    location.pathname === "/login" || location.pathname === "/signup";

  return (
    <>
      {!hideNavFooter && <Navbar />}
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<ProfileModel />} />
        <Route path="/home" element={<HomeWrapper />} />
        <Route
          path="/logout"
          element={<ProtectedRoute><Logout /></ProtectedRoute>}
        />
      </Routes>
      {!hideNavFooter && <Footer />}
    </>
  );
}

export default App;
