
// src/pages/HelpCenter.jsx
import React, { useState } from "react";
import {
  FaSearch,
  FaTruck,
  FaUndoAlt,
  FaLock,
  FaCreditCard,
  FaHeadset,
  FaEnvelope,
  FaQuestionCircle,
} from "react-icons/fa";

const HelpCenter = () => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (!query.trim()) return;
    alert(`Searching for "${query}"...`);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 pt-24">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-[#002349] to-[#0b3a68] text-white py-16 text-center shadow-md">
        <h1 className="text-5xl font-bold mb-4 tracking-wide">Help Center</h1>
        <p className="text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed">
          We’re here to help you with your orders, payments, account, and more.  
          Search for help topics or browse categories to find quick answers.
        </p>

        {/* Search Bar */}
        <div className="mt-8 flex justify-center">
          <div className="flex bg-white rounded-full shadow-lg w-full max-w-2xl items-center">
            <FaSearch className="text-gray-400 ml-4" size={20} />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for help (e.g., Track Order, Return, Refund)..."
              className="flex-grow px-4 py-3 rounded-full outline-none text-gray-700"
            />
            <button
              onClick={handleSearch}
              className="bg-[#957C3D] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#b59045] transition-all mr-2"
            >
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Help Categories */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-10 text-[#002349]">
          Browse Help Topics
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Orders */}
          <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl border border-gray-100 transition-all">
            <FaTruck className="text-[#957C3D] text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Order Tracking</h3>
            <p className="text-gray-600 mb-4">
              Track your recent orders, check estimated delivery dates, or
              report an issue with delivery.
            </p>
            <a href="#" className="text-[#002349] font-medium hover:underline">
              Track Now →
            </a>
          </div>

          {/* Returns */}
          <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl border border-gray-100 transition-all">
            <FaUndoAlt className="text-[#957C3D] text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Returns & Refunds</h3>
            <p className="text-gray-600 mb-4">
              Learn about our return process, refund timelines, and replacement
              policies.
            </p>
            <a href="/online-returns-policy" className="text-[#002349] font-medium hover:underline">
              View Return Policy →
            </a>
          </div>

          {/* Payments */}
          <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl border border-gray-100 transition-all">
            <FaCreditCard className="text-[#957C3D] text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Payments & Wallet</h3>
            <p className="text-gray-600 mb-4">
              Having trouble with payments or transactions? Find all solutions here.
            </p>
            <a href="#" className="text-[#002349] font-medium hover:underline">
              Learn More →
            </a>
          </div>

          {/* Account */}
          <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl border border-gray-100 transition-all">
            <FaLock className="text-[#957C3D] text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Account & Security</h3>
            <p className="text-gray-600 mb-4">
              Manage passwords, security settings, and account recovery options.
            </p>
            <a href="#" className="text-[#002349] font-medium hover:underline">
              Manage Account →
            </a>
          </div>

          {/* Offers */}
          <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl border border-gray-100 transition-all">
            <FaQuestionCircle className="text-[#957C3D] text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Offers & Coupons</h3>
            <p className="text-gray-600 mb-4">
              Understand how to apply offers, redeem coupons, and use gift cards.
            </p>
            <a href="#" className="text-[#002349] font-medium hover:underline">
              Explore Offers →
            </a>
          </div>

          {/* Support */}
          <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl border border-gray-100 transition-all">
            <FaHeadset className="text-[#957C3D] text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Customer Support</h3>
            <p className="text-gray-600 mb-4">
              Need help? Chat with us, raise a ticket, or contact our support team.
            </p>
            <a href="#" className="text-[#002349] font-medium hover:underline">
              Contact Support →
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-[#f9fafb] py-16 border-t border-gray-200">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#002349] mb-4">
            Still Need Help?
          </h2>
          <p className="text-gray-600 mb-8">
            Our support team is available 24/7 to assist you via phone or email.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-10 text-gray-700">
            <div>
              <FaHeadset className="text-[#957C3D] text-3xl mx-auto mb-3" />
              <p className="font-semibold">Call Us</p>
              <p>1800-123-4567</p>
            </div>
            <div>
              <FaEnvelope className="text-[#957C3D] text-3xl mx-auto mb-3" />
              <p className="font-semibold">Email</p>
              <p>support@shopworld.com</p>
            </div>
          </div>

          <button
            onClick={() => (window.location.href = "/")}
            className="mt-10 bg-[#002349] hover:bg-[#0b3a68] text-white px-8 py-3 rounded-full font-semibold transition-all"
          >
            Go Back Home
          </button>
        </div>
      </section>
    </div>
  );
};

export default HelpCenter;
