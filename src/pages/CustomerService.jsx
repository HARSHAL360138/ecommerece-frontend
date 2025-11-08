import React from "react";
import { motion } from "framer-motion";

const CustomerService = () => {
  const sections = [
    {
      title: "Help Center",
      content:
        "Welcome to our Help Center! Here you can find answers to frequently asked questions, order tracking support, and contact options for further assistance.",
    },
    {
      title: "Policies & Rules",
      content:
        "We aim to ensure a safe and fair shopping experience for all users. Please review our Terms of Service, Privacy Policy, and Seller Guidelines to stay informed.",
    },
    {
      title: "Online Returns Policy",
      content:
        "If you're not satisfied with your order, you can return most items within 7-10 days of delivery. Items must be unused and in their original packaging.",
    },
    {
      title: "Report Abuse",
      content:
        "We take user safety seriously. If you notice suspicious activity, offensive content, or policy violations, please report it to our support team immediately.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6 md:px-20">
      <motion.h1
        className="text-4xl font-bold text-center mb-10 text-gray-800"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Customer Services
      </motion.h1>

      <div className="grid gap-6 md:grid-cols-2">
        {sections.map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="p-6 bg-white shadow-md rounded-2xl hover:shadow-lg transition-shadow duration-300">
              <h2 className="text-2xl font-semibold mb-3 text-gray-700">
                {section.title}
              </h2>
              <p className="text-gray-600 leading-relaxed">{section.content}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CustomerService;
