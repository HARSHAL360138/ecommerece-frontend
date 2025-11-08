// // src/components/SubscriptionOffer.jsx
// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const SubscriptionOffer = () => {
//   const [email, setEmail] = useState("");

//   const handleSubscribe = async () => {
//     if (!email.trim()) {
//       toast.error("Please enter your email address!");
//       return;
//     }

//     try {
//       const response = await fetch("http://localhost:5000/api/newsletter/subscribe", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         toast.success("🎉 Subscription successful!");
//         setEmail("");
//       } else if (data.message === "Email already subscribed") {
//         toast.info("⚠ This email is already subscribed!");
//       } else {
//         toast.error("Something went wrong. Please try again!");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       toast.error("Server error. Please try later!");
//     }
//   };

//   return (
//     <section className="relative py-24 bg-[#002349] overflow-hidden">
//       {/* Background Animation Bubbles */}
//       <motion.div
//         className="absolute top-0 left-1/4 w-60 h-60 bg-[#957C3D]/20 rounded-full blur-3xl animate-pulse"
//         animate={{ y: [0, 20, 0] }}
//         transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
//       />
//       <motion.div
//         className="absolute bottom-0 right-1/4 w-72 h-72 bg-[#957C3D]/20 rounded-full blur-3xl animate-pulse"
//         animate={{ y: [0, -20, 0] }}
//         transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
//       />

//       {/* Content Section */}
//       <div className="relative max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
//         <motion.div
//           className="flex-1 text-center md:text-left"
//           initial={{ x: -100, opacity: 0 }}
//           whileInView={{ x: 0, opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 1 }}
//         >
//           <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-white tracking-wide">
//             Subscribe & Get{" "}
//             <span className="text-[#957C3D]">Exclusive Offers</span>
//           </h3>
//           <motion.p
//             className="text-gray-300 text-sm sm:text-base"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1, delay: 0.2 }}
//           >
//             Join our newsletter and be the first to know about new arrivals,
//             special promotions, and more!
//           </motion.p>
//         </motion.div>

//         {/* Input & Button */}
//         <motion.div
//           className="flex-1 flex flex-col sm:flex-row items-center gap-4 mt-6 md:mt-0"
//           initial={{ x: 100, opacity: 0 }}
//           whileInView={{ x: 0, opacity: 1 }}
//           transition={{ duration: 1, delay: 0.3 }}
//         >
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="Enter your email"
//             className="w-full sm:w-auto flex-1 px-5 py-3 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#957C3D] transition duration-300"
//           />
//           <motion.button
//             onClick={handleSubscribe}
//             whileHover={{
//               scale: 1.05,
//               boxShadow: "0 0 20px #957C3D, 0 0 40px #F4C24B",
//             }}
//             whileTap={{ scale: 0.95 }}
//             className="bg-gradient-to-r from-[#957C3D] to-[#F4C24B] text-white font-bold px-8 py-3 rounded-full shadow-lg relative overflow-hidden"
//           >
//             <span className="relative z-10">Subscribe</span>
//             <motion.div
//               className="absolute top-0 left-0 w-20 h-full bg-white/30 rotate-12"
//               animate={{ x: [-100, 300] }}
//               transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
//             />
//           </motion.button>
//         </motion.div>
//       </div>

//       {/* ✅ Toast Container for popups */}
//       <ToastContainer position="top-right" autoClose={3000} />
//     </section>
//   );
// };

// export default SubscriptionOffer;









// src/components/SubscriptionOffer.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SubscriptionOffer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = async () => {
    if (!email.trim()) {
      toast.error("Please enter your email address!");
      return;
    }

    try {
      const response = await fetch("https://ecommerce-backend-y1bv.onrender.com/api/newsletter/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("🎉 Subscription successful!");
        setEmail("");
      } else if (data.message === "Email already subscribed") {
        toast.info("⚠ This email is already subscribed!");
      } else {
        toast.error("Something went wrong. Please try again!");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Server error. Please try later!");
    }
  };

  return (
    <section className="relative py-24 bg-gradient-to-br from-[#00172E] via-[#002349] to-[#1E385F] overflow-hidden">
      {/* Background Glow Elements */}
      <motion.div
        className="absolute top-10 left-1/3 w-64 h-64 bg-[#957C3D]/25 rounded-full blur-3xl"
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-1/3 w-80 h-80 bg-[#957C3D]/20 rounded-full blur-3xl"
        animate={{ y: [0, -25, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content */}
      <div className="relative max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left Text */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-4xl sm:text-5xl font-bold mb-4 tracking-wide bg-gradient-to-r from-[#F0D48A] to-[#957C3D] bg-clip-text text-transparent">
            Subscribe for Exclusive Access
          </h3>
          <p className="text-gray-200/90 text-sm sm:text-base max-w-lg leading-relaxed">
            Join our elite circle and be the first to receive luxury offers, limited drops, and insider updates — crafted just for you.
          </p>
        </motion.div>

        {/* Right Input */}
        <motion.div
          className="flex-1 flex flex-col sm:flex-row items-center gap-4 mt-6 md:mt-0"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="relative w-full sm:w-auto flex-1">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="w-full px-5 py-3 rounded-full bg-white/10 border border-[#957C3D]/40 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#957C3D]/60 backdrop-blur-md transition duration-300"
            />
          </div>

          <motion.button
            onClick={handleSubscribe}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 20px #957C3D, 0 0 40px #C6A85D",
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-[#C6A85D] to-[#957C3D] text-[#002349] font-semibold px-8 py-3 rounded-full shadow-lg relative overflow-hidden"
          >
            <span className="relative z-10">Subscribe</span>
            <motion.div
              className="absolute top-0 left-0 w-16 h-full bg-white/30 rotate-12"
              animate={{ x: [-100, 250] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
          </motion.button>
        </motion.div>
      </div>

      {/* Toast Notifications */}
      <ToastContainer position="top-right" autoClose={3000} />
    </section>
  );
};

export default SubscriptionOffer;



