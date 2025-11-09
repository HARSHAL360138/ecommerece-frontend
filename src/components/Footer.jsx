// src/components/Footer.jsx
import React, { useState } from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaPhoneAlt } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Footer = () => {
  const [email, setEmail] = useState("");

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
      console.error("Error:", error);
      toast.error("Server error. Please try later!");
    }
  };

  return (
    <footer className="bg-[#002349] text-gray-200 pt-10 pb-6 px-6 md:px-16">
      <div className="grid md:grid-cols-2 gap-8 border-b border-[#957C3D]/50 pb-8">
        {/* ===== Left: Social Media ===== */}
        <div>
          <h2 className="text-[#957C3D] text-lg font-semibold mb-4">Follow Us</h2>
          <p className="text-sm mb-4">
            Connect with us on social media for latest updates and offers.
          </p>
          <div className="flex space-x-4 text-xl">
            <a href="#" className="hover:text-[#957C3D]"><FaInstagram /></a>
            <a href="#" className="hover:text-[#957C3D]"><FaFacebookF /></a>
            <a href="#" className="hover:text-[#957C3D]"><FaTwitter /></a>
            <a href="#" className="hover:text-[#957C3D]"><FaYoutube /></a>
          </div>
        </div>

        {/* ===== Right: Newsletter ===== */}
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
              className="bg-[#957C3D] hover:bg-[#FFC966] text-[#002349] px-4 py-2 rounded-r-md font-semibold"
            >
              SUBSCRIBE
            </button>
          </div>
          <p className="text-xs mt-2 text-gray-300">
            We don’t send spam emails and we won’t share your email with anyone.
          </p>
        </div>
      </div>

      {/* ===== Bottom Sections ===== */}
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 mt-8 text-sm">
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
        <div>
          <h3 className="text-[#957C3D] font-semibold mb-3">Customer Services</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-[#957C3D]">Help Center</a></li>
            <li><a href="#" className="hover:text-[#957C3D]">Policies & Rules</a></li>
            <li><a href="#" className="hover:text-[#957C3D]">Online Returns Policy</a></li>
            <li><a href="#" className="hover:text-[#957C3D]">Report Abuse</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-[#957C3D] font-semibold mb-3">My Account</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-[#957C3D]">Checkout</a></li>
            <li><a href="#" className="hover:text-[#957C3D]">Redeem Voucher</a></li>
            <li><a href="#" className="hover:text-[#957C3D]">Product Support</a></li>
            <li><a href="#" className="hover:text-[#957C3D]">Wishlist</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-[#957C3D] font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-[#957C3D]">My Account</a></li>
            <li><a href="#" className="hover:text-[#957C3D]">Order Tracking</a></li>
            <li><a href="#" className="hover:text-[#957C3D]">FAQs</a></li>
            <li><a href="#" className="hover:text-[#957C3D]">Store Location</a></li>
          </ul>
        </div>
      </div>

      <div className="mt-10 text-center text-gray-400 text-sm border-t border-[#957C3D]/50 pt-6">
        © 1995 - 2025 FashionHub. All rights reserved.
      </div>

      {/* Toast Container */}
      <ToastContainer position="top-right" autoClose={3000} />
    </footer>
  );
};

export default Footer;