// // src/components/Footer.jsx
// import React, { useState } from "react";
// import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaPhoneAlt } from "react-icons/fa";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const Footer = () => {
//   const [email, setEmail] = useState("");

//   const handleSubscribe = async () => {
//     if (!email) {
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
//     <footer className="bg-[#002349] text-gray-200 pt-10 pb-6 px-6 md:px-16">
//       <div className="grid md:grid-cols-2 gap-8 border-b border-[#957C3D]/50 pb-8">
//         {/* ===== Left: Social Media ===== */}
//         <div>
//           <h2 className="text-[#957C3D] text-lg font-semibold mb-4">Follow Us</h2>
//           <p className="text-sm mb-4">
//             Connect with us on social media for latest updates and offers.
//           </p>
//           <div className="flex space-x-4 text-xl">
//             <a href="#" className="hover:text-[#957C3D]"><FaInstagram /></a>
//             <a href="#" className="hover:text-[#957C3D]"><FaFacebookF /></a>
//             <a href="#" className="hover:text-[#957C3D]"><FaTwitter /></a>
//             <a href="#" className="hover:text-[#957C3D]"><FaYoutube /></a>
//           </div>
//         </div>

//         {/* ===== Right: Newsletter ===== */}
//         <div>
//           <h2 className="text-[#957C3D] text-lg font-semibold mb-4">Sign Up To Newsletter</h2>
//           <p className="text-sm mb-4">
//             Join 60,000+ subscribers and get a discount coupon every week.
//           </p>
//           <div className="flex">
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Your email address"
//               className="w-full p-2 rounded-l-md text-gray-800 focus:outline-none"
//             />
//             <button
//               onClick={handleSubscribe}
//               className="bg-[#957C3D] hover:bg-[#FFC966] text-[#002349] px-4 py-2 rounded-r-md font-semibold"
//             >
//               SUBSCRIBE
//             </button>
//           </div>
//           <p className="text-xs mt-2 text-gray-300">
//             We don’t send spam emails and we won’t share your email with anyone.
//           </p>
//         </div>
//       </div>

//       {/* ===== Bottom Sections ===== */}
//       <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 mt-8 text-sm">
//         <div>
//           <h3 className="text-[#957C3D] font-semibold mb-3">About Our Store</h3>
//           <p className="mb-4">
//             We provide the best customer experience in fashion and apparel without compromise.
//           </p>
//           <div className="flex items-center space-x-2 text-[#957C3D]">
//             <FaPhoneAlt />
//             <span>+977-1-4000000</span>
//           </div>
//           <p className="text-xs mt-1 text-gray-300">Available 24/7 Support</p>
//         </div>
//         <div>
//           <h3 className="text-[#957C3D] font-semibold mb-3">Customer Services</h3>
//           <ul className="space-y-2">
//             <li><a href="#" className="hover:text-[#957C3D]">Help Center</a></li>
//             <li><a href="#" className="hover:text-[#957C3D]">Policies & Rules</a></li>
//             <li><a href="#" className="hover:text-[#957C3D]">Online Returns Policy</a></li>
//             <li><a href="#" className="hover:text-[#957C3D]">Report Abuse</a></li>
//           </ul>
//         </div>
//         <div>
//           <h3 className="text-[#957C3D] font-semibold mb-3">My Account</h3>
//           <ul className="space-y-2">
//             <li><a href="#" className="hover:text-[#957C3D]">Checkout</a></li>
//             <li><a href="#" className="hover:text-[#957C3D]">Redeem Voucher</a></li>
//             <li><a href="#" className="hover:text-[#957C3D]">Product Support</a></li>
//             <li><a href="#" className="hover:text-[#957C3D]">Wishlist</a></li>
//           </ul>
//         </div>
//         <div>
//           <h3 className="text-[#957C3D] font-semibold mb-3">Quick Links</h3>
//           <ul className="space-y-2">
//             <li><a href="#" className="hover:text-[#957C3D]">My Account</a></li>
//             <li><a href="#" className="hover:text-[#957C3D]">Order Tracking</a></li>
//             <li><a href="#" className="hover:text-[#957C3D]">FAQs</a></li>
//             <li><a href="#" className="hover:text-[#957C3D]">Store Location</a></li>
//           </ul>
//         </div>
//       </div>

//       <div className="mt-10 text-center text-gray-400 text-sm border-t border-[#957C3D]/50 pt-6">
//         © 1995 - 2025 FashionHub. All rights reserved.
//       </div>

//       {/* Toast Container */}
//       <ToastContainer position="top-right" autoClose={3000} />
//     </footer>
//   );
// };

// export default Footer;








// src/components/Footer.jsx
import React, { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaPhoneAlt,
} from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [showReportModal, setShowReportModal] = useState(false);
  const [showMapModal, setShowMapModal] = useState(false);
  const [showVoucherModal, setShowVoucherModal] = useState(false); // ✅ Added new modal state
  const navigate = useNavigate();

  // Newsletter subscribe
  const handleSubscribe = async () => {
    if (!email) {
      toast.error("Please enter your email address!");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/newsletter/subscribe", {
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
      toast.error("Server error. Please try later!");
    }
  };

  return (
    <footer className="bg-[#002349] text-gray-200 pt-10 pb-6 px-6 md:px-16 relative">
      {/* ===== Top Section ===== */}
      <div className="grid md:grid-cols-2 gap-8 border-b border-[#957C3D]/50 pb-8">
        {/* Left - Social Media */}
        <div>
          <h2 className="text-[#957C3D] text-lg font-semibold mb-4">Follow Us</h2>
          <p className="text-sm mb-4">
            Connect with us on social media for the latest updates and offers.
          </p>
          <div className="flex space-x-4 text-xl">
            <a href="#" className="hover:text-[#957C3D] transition-all duration-300"><FaInstagram /></a>
            <a href="#" className="hover:text-[#957C3D] transition-all duration-300"><FaFacebookF /></a>
            <a href="#" className="hover:text-[#957C3D] transition-all duration-300"><FaTwitter /></a>
            <a href="#" className="hover:text-[#957C3D] transition-all duration-300"><FaYoutube /></a>
          </div>
        </div>

        {/* Right - Newsletter */}
        <div>
          <h2 className="text-[#957C3D] text-lg font-semibold mb-4">Sign Up To Newsletter</h2>
          <p className="text-sm mb-4">
            Join 60,000+ subscribers and get a discount coupon every week.
          </p>
          <div className="flex">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="w-full p-2 rounded-l-md text-gray-800 focus:outline-none"
            />
            <button
              onClick={handleSubscribe}
              className="bg-[#957C3D] hover:bg-[#FFC966] text-[#002349] px-4 py-2 rounded-r-md font-semibold transition-all duration-300"
            >
              SUBSCRIBE
            </button>
          </div>
          <p className="text-xs mt-2 text-gray-300">
            We don’t send spam emails and we won’t share your email with anyone.
          </p>
        </div>
      </div>

      {/* ===== Bottom Links ===== */}
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 mt-8 text-sm">
        {/* About */}
        <div>
          <h3 className="text-[#957C3D] font-semibold mb-3">About Our Store</h3>
          <p className="mb-4">
            We provide the best customer experience in fashion and apparel without compromise.
          </p>
          <div className="flex items-center space-x-2 text-[#957C3D]">
            <FaPhoneAlt />
            <span>+977-1-4000000</span>
          </div>
          <p className="text-xs mt-1 text-gray-300">Available 24/7 Support</p>
        </div>

        {/* Customer Services */}
        <div>
          <h3 className="text-[#957C3D] font-semibold mb-3">Customer Services</h3>
          <ul className="space-y-2">
            <li>
              <button onClick={() => navigate("/help")} className="hover:text-[#957C3D] transition-all duration-300">
                Help Center
              </button>
            </li>
            <li>
              <button onClick={() => navigate("/policies")} className="hover:text-[#957C3D] transition-all duration-300">
                Policies & Rules
              </button>
            </li>
            <li>
              <button onClick={() => navigate("/returns")} className="hover:text-[#957C3D] transition-all duration-300">
                Online Returns Policy
              </button>
            </li>
            <li>
              <button
                onClick={() => setShowReportModal(true)}
                className="hover:text-[#957C3D] transition-all duration-300"
              >
                Report Abuse
              </button>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-[#957C3D] font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <button onClick={() => navigate("/getprofile")} className="hover:text-[#957C3D] transition-all duration-300">
                My Account
              </button>
            </li>
            <li>
              <button onClick={() => navigate("/orderhistory")} className="hover:text-[#957C3D] transition-all duration-300">
                Order Tracking
              </button>
            </li>
            <li>
              <button onClick={() => navigate("/faqs")} className="hover:text-[#957C3D] transition-all duration-300">
                FAQs
              </button>
            </li>
            <li>
              <button onClick={() => setShowMapModal(true)} className="hover:text-[#957C3D] transition-all duration-300">
                Store Location
              </button>
            </li>
          </ul>
        </div>

        {/* ===== My Account (Updated) ===== */}
        <div>
          <h3 className="text-[#957C3D] font-semibold mb-3">My Account</h3>
          <ul className="space-y-2">
            {/* 1️⃣ Redeem Voucher Modal */}
            <li>
              <button
                onClick={() => setShowVoucherModal(true)}
                className="hover:text-[#957C3D] transition-all duration-300"
              >
                Redeem Voucher
              </button>
            </li>

            {/* 2️⃣ Product Support Page */}
            <li>
              <button
                onClick={() => navigate("/product-support")}
                className="hover:text-[#957C3D] transition-all duration-300"
              >
                Product Support
              </button>
            </li>

            {/* 3️⃣ Wishlist Page */}
            <li>
              <button
                onClick={() => navigate("/wishlist")}
                className="hover:text-[#957C3D] transition-all duration-300"
              >
                Wishlist
              </button>
            </li>

            {/* 4️⃣ Membership Page */}
            <li>
              <button
                onClick={() => navigate("/membership")}
                className="hover:text-[#957C3D] transition-all duration-300"
              >
                Membership
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* ===== Footer Bottom ===== */}
      <div className="mt-10 text-center text-gray-400 text-sm border-t border-[#957C3D]/50 pt-6">
        © 1995 - 2025 FashionHub. All rights reserved.
      </div>

      {/* ===== Report Abuse Modal ===== */}
      {showReportModal && (
        <div className="fixed inset-0 flex justify-center items-center bg-black/60 backdrop-blur-sm z-50">
          <div className="bg-white text-gray-800 p-6 rounded-xl w-[90%] max-w-md shadow-lg animate-fadeIn">
            <h2 className="text-xl font-semibold mb-3 text-[#002349]">Report Abuse</h2>
            <p className="text-sm text-gray-600 mb-4">
              Please describe the issue and attach supporting evidence if available.
            </p>
            <textarea
              className="w-full p-2 border rounded-md mb-3 focus:outline-none focus:ring-2 focus:ring-[#957C3D]"
              rows="4"
              placeholder="Write your report here..."
            ></textarea>
            <input type="file" className="mb-3 w-full text-sm" />
            <div className="flex justify-end space-x-3">
              <button
                onClick={() => setShowReportModal(false)}
                className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400 transition-all"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  toast.success("Report submitted successfully!");
                  setShowReportModal(false);
                }}
                className="px-4 py-2 bg-[#957C3D] text-white rounded-md hover:bg-[#b68a3a] transition-all"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}

{/* ===== Premium Voucher Redemption Modal ===== */}
{showVoucherModal && (
  <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 animate-fadeIn">
    <div className="bg-white rounded-3xl shadow-[0_8px_40px_rgba(0,0,0,0.15)] w-[90%] max-w-md overflow-hidden border border-gray-100">
      
      {/* Header */}
      <div className="flex justify-between items-center bg-gradient-to-r from-[#002349] to-[#013d77] text-white px-6 py-4">
        <h2 className="text-lg font-semibold tracking-wide">🎁 Redeem Your Voucher</h2>
        <button
          onClick={() => setShowVoucherModal(false)}
          className="text-white/80 hover:text-white text-2xl leading-none transition-all"
        >
          &times;
        </button>
      </div>

      {/* Body */}
      <div className="p-6">
        <p className="text-gray-600 mb-4 text-sm leading-relaxed">
          Enter your unique voucher code below to unlock exclusive rewards and premium offers.
        </p>

        <input
          type="text"
          placeholder="Enter Voucher Code"
          className="w-full border border-gray-300 focus:border-[#957C3D] focus:ring-1 focus:ring-[#957C3D]/70 rounded-lg px-4 py-2.5 text-sm placeholder-gray-400 outline-none mb-5 transition-all"
        />

        <button
          onClick={() => {
            toast.success("Voucher redeemed successfully!");
            setShowVoucherModal(false);
          }}
          className="w-full bg-[#957C3D] hover:bg-[#b48b45] text-white font-medium rounded-lg py-2.5 text-sm tracking-wide transition-all shadow-md hover:shadow-lg"
        >
          Redeem Now
        </button>
      </div>

      {/* Footer */}
      <div className="text-center text-[11px] text-gray-400 pb-4">
        *Valid only for a limited time. Terms apply.
      </div>
    </div>
  </div>
)}


      {/* ===== Store Location Map Modal ===== */}
      {showMapModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-2xl w-[90%] max-w-xl overflow-hidden">
            {/* Header */}
            <div className="flex justify-between items-center bg-[#002349] text-white px-5 py-3">
              <h2 className="text-lg font-semibold">Store Location</h2>
              <button
                onClick={() => setShowMapModal(false)}
                className="text-white hover:text-gray-300 text-2xl leading-none"
              >
                &times;
              </button>
            </div>

            {/* Map */}
            <div className="p-4">
              <iframe
                title="Store Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.109585557895!2d85.3240!3d27.7172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19c3f59e7e3b%3A0x3e36b4cdeabbf66!2sKathmandu%2C%20Nepal!5e0!3m2!1sen!2sin!4v1708434211655!5m2!1sen!2sin"
                width="100%"
                height="380"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg border border-gray-200"
              ></iframe>
            </div>

            {/* Footer */}
            <div className="flex justify-center p-4 border-t">
              <button
                onClick={() => setShowMapModal(false)}
                className="bg-[#002349] hover:bg-[#0b3a68] text-white px-6 py-2 rounded-full text-sm font-medium transition-all"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toast Container */}
      <ToastContainer position="top-right" autoClose={3000} />
    </footer>
  );
};

export default Footer;
