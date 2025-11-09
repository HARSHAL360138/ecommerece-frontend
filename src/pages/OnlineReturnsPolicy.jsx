
// src/pages/OnlineReturnsPolicy.jsx
import React from "react";
import { FaUndoAlt, FaBoxOpen, FaCreditCard, FaHeadset } from "react-icons/fa";

const OnlineReturnsPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 pt-24">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-[#002349] to-[#0b3a68] text-white py-16 text-center shadow-md">
        <h1 className="text-5xl font-bold mb-4 tracking-wide">
          Online Returns Policy
        </h1>
        <p className="text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed">
          We understand that sometimes a product may not meet your expectations.  
          Our return policy is designed to make your shopping experience smooth and worry-free.
        </p>
      </section>

      {/* Policy Details */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-[#002349] mb-10 text-center">
          Our Return & Refund Process
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {/* Step 1: Return Window */}
          <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl border border-gray-100 transition-all">
            <FaUndoAlt className="text-[#957C3D] text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Return Window</h3>
            <p className="text-gray-600 leading-relaxed">
              You can return most products within <b>7 days</b> of delivery for
              a full refund or exchange. Ensure the product is unused, undamaged,
              and in its original packaging with all tags intact.
            </p>
          </div>

          {/* Step 2: Return Conditions */}
          <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl border border-gray-100 transition-all">
            <FaBoxOpen className="text-[#957C3D] text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Return Conditions</h3>
            <p className="text-gray-600 leading-relaxed">
              Items like innerwear, cosmetics, and perishable goods are not
              eligible for return due to hygiene and safety reasons.  
              Always include the original invoice and accessories in the package.
            </p>
          </div>

          {/* Step 3: Refund Process */}
          <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl border border-gray-100 transition-all">
            <FaCreditCard className="text-[#957C3D] text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Refund Process</h3>
            <p className="text-gray-600 leading-relaxed">
              Once we receive your return, our team will inspect it. Refunds
              will be initiated within <b>5–7 business days</b> via the original
              payment method or credited to your store wallet.
            </p>
          </div>

          {/* Step 4: Support Help */}
          <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl border border-gray-100 transition-all">
            <FaHeadset className="text-[#957C3D] text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Need Assistance?</h3>
            <p className="text-gray-600 leading-relaxed">
              Our support team is available 24/7 to help with returns or refund
              queries. You can reach out via call, chat, or email.
            </p>
            <a
              href="/helpcenter"
              className="text-[#002349] font-medium hover:underline"
            >
              Contact Support →
            </a>
          </div>
        </div>
      </section>

      {/* Terms & Notes */}
      <section className="bg-[#f9fafb] py-12 border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-6 text-gray-700 leading-relaxed">
          <h2 className="text-2xl font-bold text-[#002349] mb-4">
            Important Notes
          </h2>
          <ul className="list-disc list-inside space-y-3">
            <li>
              Refunds will not be issued for products damaged due to misuse or
              improper handling.
            </li>
            <li>
              In case of exchange, availability of replacement stock is subject
              to confirmation.
            </li>
            <li>
              Shipping fees (if applicable) are non-refundable once the order is
              processed.
            </li>
            <li>
              Please initiate returns only through your account dashboard to
              ensure secure tracking.
            </li>
          </ul>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-white py-16 text-center">
        <h2 className="text-3xl font-bold text-[#002349] mb-4">
          Still Have Questions?
        </h2>
        <p className="text-gray-600 mb-8">
          Reach out to our customer support team — we’re always here to help you.
        </p>
        <button
          onClick={() => (window.location.href = "/")}
          className="bg-[#002349] hover:bg-[#0b3a68] text-white px-8 py-3 rounded-full font-semibold transition-all"
        >
          Go Back Home
        </button>
      </section>
    </div>
  );
};

export default OnlineReturnsPolicy;
