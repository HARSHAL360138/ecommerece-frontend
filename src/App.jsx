// import React from "react";
// import { Route, Routes } from "react-router-dom";
// import "./App.css";
// import Home from "./pages/Home";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import HeroSection from "./components/HeroSection";

// function App() {
//   return (
//    <>
//    <Navbar/>
//    <Routes>
//      <Route path="/" element={<>
//      <Home />
//      </>
//     }></Route>
//    </Routes>
//    <Footer/>
//    </>
//   );
// }


// export default App;
















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

// Wrapper component for handling click restriction on Home
const HomeWrapper = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("accessToken");

  // If not logged in, block clicks and redirect to /login on any click
  const handleOverlayClick = () => {
    if (!token) {
      navigate("/login");
    }
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
            cursor: "allow",
            zIndex: 10,
          }}
        />
      )}
    </div>
  );
};

// Protected Route (for fully restricted pages)
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("accessToken");
  return token ? children : <Navigate to="/home" replace />;
};

function App() {
    const location = useLocation();
  const hideNavFooter = location.pathname === "/login" || location.pathname === "/signup";
  return (
    <>
     {!hideNavFooter && <Navbar />}
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<ProfileModel />} />
        <Route path="/home" element={<HomeWrapper />} />
        <Route path="/logout" element={ <ProtectedRoute><Logout /></ProtectedRoute> } />
      </Routes>
      {!hideNavFooter && <Footer />}
    </>
  );
}

export default App;
















