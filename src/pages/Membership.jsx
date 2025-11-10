import React, { useState } from "react";
import { FaCheckCircle, FaGift, FaShippingFast, FaCalendarAlt } from "react-icons/fa";

const Membership = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [plan, setPlan] = useState("annual");
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState("");

  const benefits = [
    { icon: <FaShippingFast />, title: "Priority Delivery", desc: "Faster delivery on all orders." },
    { icon: <FaGift />, title: "Birthday Gift", desc: "A special surprise on your birthday." },
    { icon: <FaCalendarAlt />, title: "Early Access", desc: "Get early access to new launches." },
  ];

  function handleSubmit(e) {
    e.preventDefault();
    setError("");
    if (!name.trim() || !email.trim()) {
      setError("Please enter your name and email.");
      return;
    }
    const re = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!re.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setSubscribed(true);
  }

  return (
    <div className="min-h-screen bg-[#F9FAFB] flex flex-col items-center justify-center px-6 py-12">
      {/* Main Membership Box */}
      <div className="max-w-3xl w-full bg-white rounded-2xl shadow-lg border border-[#957C3D]/30 p-8">
        {!subscribed ? (
          <>
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-[#002349]">Join FashionHub Membership</h1>
              <p className="mt-2 text-gray-600">
                Enjoy exclusive perks — faster delivery, early access, and more savings!
              </p>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center mb-10">
              {benefits.map((b, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="text-3xl text-[#957C3D] mb-2">{b.icon}</div>
                  <div className="font-semibold text-gray-800">{b.title}</div>
                  <div className="text-sm text-gray-500">{b.desc}</div>
                </div>
              ))}
            </div>

            {/* Plan Selection */}
            <div className="text-center mb-6">
              <h3 className="text-sm font-medium text-gray-700 mb-3">Choose your plan</h3>
              <div className="flex justify-center gap-4">
                <button
                  onClick={() => setPlan("monthly")}
                  className={`px-5 py-2 rounded-lg border transition-all duration-300 ${
                    plan === "monthly"
                      ? "border-[#957C3D] bg-[#FFF8E6]"
                      : "border-gray-200 hover:border-[#957C3D]/40"
                  }`}
                >
                  Monthly — ₹199/mo
                </button>
                <button
                  onClick={() => setPlan("annual")}
                  className={`px-5 py-2 rounded-lg border transition-all duration-300 ${
                    plan === "annual"
                      ? "border-[#957C3D] bg-[#FFF8E6]"
                      : "border-gray-200 hover:border-[#957C3D]/40"
                  }`}
                >
                  Annual — ₹1,999/yr
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-2">Save ~15% with the annual plan.</p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Disha Raut"
                  className="mt-1 w-full rounded-md border-gray-200 shadow-sm focus:border-[#957C3D] focus:ring focus:ring-[#957C3D]/20 px-3 py-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="mt-1 w-full rounded-md border-gray-200 shadow-sm focus:border-[#957C3D] focus:ring focus:ring-[#957C3D]/20 px-3 py-2"
                />
              </div>

              {error && <div className="text-sm text-red-600 text-center">{error}</div>}

              <button
                type="submit"
                className="w-full bg-[#002349] hover:bg-[#040729] text-white py-3 rounded-full font-semibold transition-all"
              >
                Join Now — {plan === "annual" ? "₹1,999/yr" : "₹199/mo"}
              </button>

              <p className="text-xs text-gray-500 text-center mt-2">
                By joining, you agree to our{" "}
                <a href="#" className="underline">
                  Terms
                </a>{" "}
                and{" "}
                <a href="#" className="underline">
                  Privacy Policy
                </a>.
              </p>
            </form>
          </>
        ) : (
          // Success Section
          <div className="text-center py-16">
            <div className="inline-flex items-center justify-center rounded-full bg-[#ECF9F1] p-4 mb-4">
              <FaCheckCircle className="text-4xl text-[#2E7D32]" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">
              Welcome, {name.split(" ")[0]}!
            </h3>
            <p className="mt-2 text-gray-600">
              A confirmation has been sent to <strong>{email}</strong>.
            </p>
            <p className="text-gray-600">Your {plan} membership is now active.</p>
            <button
              onClick={() => {
                setSubscribed(false);
                setName("");
                setEmail("");
                setPlan("annual");
              }}
              className="mt-6 px-6 py-2 rounded-full border border-gray-300 hover:border-[#957C3D]/50 transition-all"
            >
              Add another account
            </button>
          </div>
        )}
      </div>

      {/* ===== Go Back Home Button (Outside the box) ===== */}
      <div className="flex justify-center mt-10">
        <button
          onClick={() => (window.location.href = "/")}
          className="bg-[#002349] hover:bg-[#0b3a68] text-white px-8 py-3 rounded-full font-semibold transition-all duration-300"
        >
          Go Back Home
        </button>
      </div>
    </div>
  );
};

export default Membership;
