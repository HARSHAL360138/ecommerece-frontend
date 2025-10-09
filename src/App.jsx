import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
   <>
   <Navbar/>
   <Routes>
     <Route path="/" element={<Home />}></Route>
   </Routes>
   <Footer/>
   </>
  );
}

export default App;
