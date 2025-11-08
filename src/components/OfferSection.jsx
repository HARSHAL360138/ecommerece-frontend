import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const offers = [
  { text: "🎁 Get 20% OFF on your First Order!", color: "#FFD700" },
  { text: "🚚 Free Shipping on Orders Above ₹499!", color: "#87CEEB" },
  { text: "🛍️ Flat 50% OFF on Fashion this Week!", color: "#FFD700" },
  { text: "💳 Extra 10% OFF with SBI Credit Cards!", color: "#87CEEB" },
  { text: "✨ Limited Time Offer — Grab it Now!", color: "#FFD700" },
];

function OfferSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % offers.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      style={{
        background: "linear-gradient(90deg, #004e92, #000428)", // 🔹 Golden Blue Gradient
        color: "white",
        padding: "50px 20px",
        borderRadius: "14px",
        textAlign: "center",
        margin: "50px auto",
        width: "90%",
        maxWidth: "1300px",
        boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
        overflow: "hidden",
        position: "relative",
        height: "110px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Animated Offer Text */}
      <AnimatePresence mode="wait">
        <motion.h2
          key={index}
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -40, scale: 0.9 }}
          transition={{ duration: 0.6 }}
          style={{
            fontSize: "1.8rem",
            fontWeight: "700",
            letterSpacing: "0.5px",
            color: offers[index].color, // ✨ alternating highlight color
            textShadow: "0px 0px 8px rgba(255,255,255,0.5)",
          }}
        >
          {offers[index].text}
        </motion.h2>
      </AnimatePresence>

      {/* Decorative Stickers */}
      <motion.span
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
        style={{
          position: "absolute",
          left: "30px",
          fontSize: "2rem",
        }}
      >
        🎉
      </motion.span>

      <motion.span
        animate={{ rotate: [0, -10, 10, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
        style={{
          position: "absolute",
          right: "30px",
          fontSize: "2rem",
        }}
      >
        💸
      </motion.span>
    </section>
  );
}

export default OfferSection;
