import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaPhoneAlt } from "react-icons/fa";
import { SiAppstore, SiGoogleplay } from "react-icons/si";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-10 pb-6 px-6 md:px-16">
      {/* 🔹 Top Section */}
      <div className="grid md:grid-cols-2 gap-8 border-b border-gray-700 pb-8">
        
        {/* Follow Us */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Follow Us</h2>
          <p className="text-sm mb-4">
            We make consolidating, marketing, and tracking your social media easy.
          </p>
          <div className="flex space-x-4 text-xl">
            <a href="#" className="hover:text-blue-500"><FaInstagram /></a>
            <a href="#" className="hover:text-blue-500"><FaFacebookF /></a>
            <a href="#" className="hover:text-blue-500"><FaTwitter /></a>
            <a href="#" className="hover:text-blue-500"><FaYoutube /></a>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Sign Up To Newsletter</h2>
          <p className="text-sm mb-4">
            Join 60,000+ subscribers and get a new discount coupon every Saturday.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="your email address"
              className="w-full p-2 rounded-l-md text-gray-800 focus:outline-none"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-md">
              SUBSCRIBE
            </button>
          </div>
          <p className="text-xs mt-2 text-gray-500">
            We don’t send spam emails and we won’t share your email with anyone.
          </p>
        </div>
      </div>

      {/* 🔹 Bottom Section */}
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 mt-8 text-sm">
        {/* About Our Store */}
        <div>
          <h3 className="text-white font-semibold mb-3">About Our Store</h3>
          <p className="mb-4">
            Our mission is to provide the absolute best customer experience in the
            Electric industry without exception.
          </p>
          <div className="flex items-center space-x-2 text-blue-400">
            <FaPhoneAlt />
            <span>+977-1-4000000</span>
          </div>
          <p className="text-xs mt-1 text-gray-400">Available 24/7 Support</p>
        </div>

        {/* Customer Services */}
        <div>
          <h3 className="text-white font-semibold mb-3">Customer Services</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Help Center</a></li>
            <li><a href="#" className="hover:text-white">Policies & Rules</a></li>
            <li><a href="#" className="hover:text-white">Online Returns Policy</a></li>
            <li><a href="#" className="hover:text-white">Report Abuse</a></li>
          </ul>
        </div>

        {/* My Account */}
        <div>
          <h3 className="text-white font-semibold mb-3">My Account</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Checkout</a></li>
            <li><a href="#" className="hover:text-white">Redeem Voucher</a></li>
            <li><a href="#" className="hover:text-white">Product Support</a></li>
            <li><a href="#" className="hover:text-white">Wishlist</a></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">My Account</a></li>
            <li><a href="#" className="hover:text-white">Order Tracking</a></li>
            <li><a href="#" className="hover:text-white">FAQs</a></li>
            <li><a href="#" className="hover:text-white">Store Location</a></li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 text-center text-gray-500 text-sm border-t border-gray-700 pt-6">
        © 1995 - 2025 E-Com Store. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
