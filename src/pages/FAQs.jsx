// src/pages/FAQs.jsx
import React, { useState } from "react";
import { FaQuestionCircle } from "react-icons/fa";

const faqsData = [
  {
    question: "How can I track my order?",
    answer:
      "You can easily track your order by logging into your account and visiting the 'Order History' section. There you’ll find the real-time status, estimated delivery date, and tracking link for each order.",
  },
  {
    question: "What is your return policy?",
    answer:
      "We offer a 7-day easy return policy. If the product is unused and in its original packaging, you can request a return from your account dashboard or by visiting our Online Returns Policy page.",
  },
  {
    question: "Do you offer international shipping?",
    answer:
      "Yes, we ship to select countries worldwide. Shipping charges and delivery times vary depending on the destination. You can check availability during checkout.",
  },
  {
    question: "Can I cancel my order after placing it?",
    answer:
      "Yes, orders can be canceled within 24 hours of placement from the 'Order History' section. Once your order is shipped, cancellation won’t be possible.",
  },
  {
    question: "How do I use a discount coupon?",
    answer:
      "Enter your valid coupon code in the 'Apply Coupon' box during checkout. The discount will be automatically applied to your order total.",
  },
  {
    question: "How can I contact customer support?",
    answer:
      "Our support team is available 24/7. You can reach us through the Help Center, email, or via the contact number mentioned in the footer section of our website.",
  },
  {
    question: "Is my personal information secure?",
    answer:
      "Absolutely. We use SSL encryption and advanced security protocols to ensure that all personal and payment information remains safe and private.",
  },
];

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] text-[#002349] px-6 md:px-20 py-20">
      {/* ===== Header Section ===== */}
      <div className="text-center mb-12">
        <div className="flex justify-center mb-3">
          <FaQuestionCircle className="text-[#957C3D] text-5xl" />
        </div>
        <h1 className="text-4xl font-bold text-[#002349] mb-3">
          Frequently Asked Questions
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-base">
          Explore answers to the most common questions about orders, returns, and
          payments. Our goal is to make your shopping journey smooth and hassle-free.
        </p>
      </div>

      {/* ===== FAQ Accordion ===== */}
      <div className="max-w-4xl mx-auto space-y-4">
        {faqsData.map((faq, index) => (
          <div
            key={index}
            className={`border rounded-2xl shadow-sm transition-all duration-300 overflow-hidden ${
              activeIndex === index
                ? "bg-white border-[#957C3D]"
                : "bg-white hover:shadow-md"
            }`}
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left px-6 py-5 flex justify-between items-center focus:outline-none"
            >
              <span className="font-medium text-lg">{faq.question}</span>
              <span className="text-[#957C3D] text-2xl font-bold">
                {activeIndex === index ? "−" : "+"}
              </span>
            </button>

            {activeIndex === index && (
              <div className="px-6 pb-5 text-gray-700 text-base border-t border-[#957C3D]/30 animate-fadeIn">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* ===== Bottom Message ===== */}
      <div className="mt-16 text-center text-gray-600">
        Still have questions?{" "}
        <span className="text-[#957C3D] font-semibold cursor-pointer hover:underline">
          Visit our Help Center
        </span>{" "}
        or{" "}
        <span className="text-[#957C3D] font-semibold cursor-pointer hover:underline">
          Contact Support
        </span>
        .
      </div>

      {/* ===== Go Back Home Button ===== */}
      <div className="flex justify-center">
        <button
          onClick={() => (window.location.href = "/")}
          className="mt-10 bg-[#002349] hover:bg-[#0b3a68] text-white px-8 py-3 rounded-full font-semibold transition-all duration-300"
        >
          Go Back Home
        </button>
      </div>
    </div>
  );
};

export default FAQs;
