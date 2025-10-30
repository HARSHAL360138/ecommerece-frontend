// src/components/Newsletter.jsx
import React, { useState } from "react";
import { toast } from "react-toastify";
import { subscribeNewsletter } from "../refreshtoken/api";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = async () => {
    if (!email.trim()) {
      toast.warn("Please enter an email!");
      return;
    }

    try {
      const res = await subscribeNewsletter(email);
      toast.success(res.message || "Subscribed successfully!");
      setEmail("");
    } catch (err) {
      if (err.message.includes("already subscribed")) {
        toast.info("This email is already subscribed!");
      } else {
        toast.error(err.message || "Subscription failed!");
      }
    }
  };

  return (
    <div className="bg-gray-100 py-12 text-center">
      <h2 className="text-2xl font-semibold mb-4">
        Subscribe to our Newsletter
      </h2>
      <div className="flex justify-center gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="px-4 py-2 rounded-md border focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleSubscribe}
          className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Newsletter;