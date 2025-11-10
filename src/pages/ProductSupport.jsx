import React, { useState } from "react";
import { FaComments, FaTicketAlt, FaCheckCircle, FaSpinner } from "react-icons/fa";

const ProductSupport = () => {
  const [formData, setFormData] = useState({ name: "", email: "", issue: "" });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.issue) {
      alert("Please fill in all fields before submitting!");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fdfbf6] via-[#f8f3e9] to-[#efe9dc] flex flex-col items-center justify-center px-6 py-16">
      <div className="w-full max-w-2xl bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl border border-[#e2d4a2]/60 p-10 transition-all hover:shadow-[#c2a950]/50 hover:shadow-2xl">
        {!submitted ? (
          <>
            {/* Header Section */}
            <h1 className="text-3xl font-bold text-[#002349] text-center mb-3 tracking-wide">
              Product Support Center
            </h1>
            <p className="text-gray-600 text-center mb-8 text-base leading-relaxed">
              Need assistance? Fill out the form below and our expert team will reach out shortly, 
              or chat live for instant help.
            </p>

            {/* Support Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="text-[#002349] text-sm font-semibold mb-2 block">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full border border-[#d8c693] p-3.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#bca45b] transition-all text-sm"
                />
              </div>
              <div>
                <label className="text-[#002349] text-sm font-semibold mb-2 block">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full border border-[#d8c693] p-3.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#bca45b] transition-all text-sm"
                />
              </div>
              <div>
                <label className="text-[#002349] text-sm font-semibold mb-2 block">
                  Describe Your Issue
                </label>
                <textarea
                  name="issue"
                  rows="4"
                  value={formData.issue}
                  onChange={handleChange}
                  placeholder="Tell us about the issue..."
                  className="w-full border border-[#d8c693] p-3.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#bca45b] transition-all text-sm"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-[#bca45b] to-[#957C3D] text-white py-3.5 rounded-full font-semibold text-base shadow-md hover:scale-105 transition-all flex items-center justify-center"
              >
                {loading ? (
                  <>
                    <FaSpinner className="animate-spin mr-2" /> Sending...
                  </>
                ) : (
                  <>
                    <FaTicketAlt className="mr-2" /> Submit Ticket
                  </>
                )}
              </button>
            </form>

            {/* Live Chat Section */}
            <div className="mt-10 text-center">
              <p className="text-gray-500 text-sm mb-3">
                Need immediate help? Chat with our agent from{" "}
                <span className="text-[#957C3D] font-medium">9 AM - 8 PM (IST)</span>
              </p>
              <button className="bg-[#002349] text-white px-8 py-3 rounded-full font-semibold text-sm shadow-md hover:bg-[#0b3a68] hover:scale-105 transition-all flex items-center justify-center mx-auto">
                <FaComments className="mr-2" /> Start Live Chat
              </button>
            </div>
          </>
        ) : (
          <div className="text-center py-14">
            <FaCheckCircle className="text-green-500 text-5xl mx-auto mb-4 animate-bounce" />
            <h2 className="text-2xl font-semibold text-[#002349] mb-2">
              Ticket Submitted Successfully!
            </h2>
            <p className="text-gray-600 mb-8 text-base">
              Thank you, <span className="text-[#957C3D] font-medium">{formData.name}</span>. Our support
              team will get back to you at{" "}
              <span className="text-[#957C3D] font-medium">{formData.email}</span> soon.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="bg-gradient-to-r from-[#bca45b] to-[#957C3D] text-white px-10 py-3 rounded-full font-semibold text-sm hover:scale-105 transition-all"
            >
              Submit Another Ticket
            </button>
          </div>
        )}
      </div>

      {/* Go Back Home Button */}
      <button
        onClick={() => (window.location.href = "/")}
        className="mt-12 bg-[#002349] hover:bg-[#0b3a68] text-white px-10 py-3 rounded-full font-semibold text-base shadow-lg transition-all hover:scale-105"
      >
        Go Back Home
      </button>
    </div>
  );
};

export default ProductSupport;
