import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  MapPin,
  Truck,
  ShieldCheck,
  CreditCard,
  Loader2,
  PackageCheck,
  Home,
  Phone,
  Globe,
  Edit3,
} from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BASE_URL = "https://ecommerce-backend-y1bv.onrender.com";

const BuyNow = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [placingOrder, setPlacingOrder] = useState(false);
  const [addressList, setAddressList] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [showPaymentPopup, setShowPaymentPopup] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState("");

  // 🛒 Fetch product
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`${BASE_URL}/api/product/${id}`);
        if (!res.ok) throw new Error("Product not found");
        const data = await res.json();
        setProduct(data);
      } catch {
        toast.error("⚠️ Failed to load product details");
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  // 🏠 Load stored addresses
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("userAddresses")) || [];
    const selected = JSON.parse(localStorage.getItem("selectedAddress"));
    setAddressList(stored);
    if (selected) setSelectedAddress(selected);
  }, []);

  const handleSelectAddress = (addr) => {
    setSelectedAddress(addr);
    localStorage.setItem("selectedAddress", JSON.stringify(addr));
    toast.success("✅ Address selected successfully");
  };

  const handleProceedToPayment = () => {
    if (!selectedAddress) {
      toast.warn("⚠ Please select a delivery address!");
      return;
    }
    setShowPaymentPopup(true);
  };

  const subtotal = product?.basePrice * quantity || 0;
  const shipping = subtotal > 500 ? 0 : 49;
  const tax = Math.round(subtotal * 0.05);
  const total = subtotal + shipping + tax;

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen text-[#002349] text-lg">
        <Loader2 className="animate-spin mr-2" /> Loading product details...
      </div>
    );

  return (
    <div className="min-h-screen bg-[#f4f6fb] text-white px-4 sm:px-8 py-10">
      <ToastContainer />

      <div className="w-full max-w-6xl mx-auto bg-white text-gray-800 rounded-3xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-5 sm:p-6 border-b border-gray-200">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-[#957C3D] hover:underline"
          >
            <ArrowLeft size={20} /> Back
          </button>
          <h2 className="text-xl sm:text-2xl font-semibold tracking-wide text-[#002349]">
            Review & Checkout
          </h2>
        </div>

        {/* Progress Tracker */}
        <div className="flex justify-center items-center gap-3 py-5 bg-[#f9f9f9] flex-wrap">
          {[
            { id: 1, label: "Review Order", active: !showPaymentPopup },
            { id: 2, label: "Payment", active: showPaymentPopup },
          ].map((step, index) => (
            <React.Fragment key={step.id}>
              <div className="flex flex-col items-center">
                <div
                  className={`w-10 h-10 flex items-center justify-center rounded-full font-semibold ${
                    step.active
                      ? "bg-[#957C3D] text-white"
                      : "bg-gray-300 text-gray-600"
                  }`}
                >
                  {step.id}
                </div>
                <p
                  className={`text-xs mt-1 font-medium ${
                    step.active ? "text-[#957C3D]" : "text-gray-600"
                  }`}
                >
                  {step.label}
                </p>
              </div>
              {index === 0 && (
                <div className="h-[2px] w-20 sm:w-32 bg-gray-300"></div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
          {/* Left Section */}
          <div className="lg:col-span-2 space-y-6">
            {/* Product Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="border rounded-2xl p-5 bg-[#f8f9fc] shadow-sm hover:shadow-md transition"
            >
              <div className="flex flex-col sm:flex-row gap-5">
                <img
                  src={product?.images?.[0] || "https://via.placeholder.com/150"}
                  alt={product?.name}
                  className="w-full sm:w-44 h-44 object-cover rounded-xl shadow-sm"
                />
                <div className="flex-1 space-y-2">
                  <h3 className="text-lg sm:text-xl font-semibold text-[#002349]">
                    {product?.name}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-3">
                    {product?.description || "No description available"}
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <Truck size={18} className="text-green-600" />
                    <span className="text-green-600 text-sm font-medium">
                      Free Delivery Available
                    </span>
                  </div>
                  <div className="flex items-center gap-3 mt-3">
                    <span className="font-medium text-gray-700">Quantity:</span>
                    <select
                      value={quantity}
                      onChange={(e) => setQuantity(Number(e.target.value))}
                      className="border rounded-lg px-3 py-1 text-gray-700 focus:ring-2 focus:ring-[#957C3D]"
                    >
                      {[1, 2, 3, 4, 5].map((qty) => (
                        <option key={qty} value={qty}>
                          {qty}
                        </option>
                      ))}
                    </select>
                  </div>
                  <p className="text-2xl font-bold text-[#957C3D] mt-2">
                    ₹{subtotal}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* 🏠 Address Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="border rounded-2xl p-5 bg-[#f8f9fc] shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-3">
                <h2 className="text-lg font-semibold flex items-center gap-2 text-[#002349]">
                  <MapPin size={20} className="text-[#957C3D]" /> Delivery
                  Address
                </h2>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate("/address")}
                  className="px-4 py-2 rounded-lg text-sm font-medium bg-[#002349] text-white hover:bg-[#013a73] transition"
                >
                  + Add / Manage Address
                </motion.button>
              </div>

              {addressList.length === 0 ? (
                <div className="text-center py-6">
                  <p className="text-gray-500 text-sm italic">
                    No saved addresses yet. Add a new address to continue.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => navigate("/address")}
                    className="mt-3 px-6 py-2 bg-[#957C3D] text-white font-semibold rounded-xl shadow hover:bg-[#7b6633] transition"
                  >
                    Add New Address
                  </motion.button>
                </div>
              ) : (
                <div className="space-y-4">
                  {addressList.map((addr, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.02 }}
                      className={`border rounded-xl p-4 bg-white transition cursor-pointer ${
                        selectedAddress?.pincode === addr.pincode
                          ? "border-[#957C3D] bg-[#fff9f3]"
                          : "border-gray-200"
                      }`}
                      onClick={() => handleSelectAddress(addr)}
                    >
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                        <div className="space-y-1 text-sm text-gray-700">
                          <h4 className="font-semibold text-[#002349] flex items-center gap-2">
                            <Home size={16} className="text-[#957C3D]" />{" "}
                            {addr.name}
                          </h4>
                          <p className="flex items-center gap-2 text-sm">
                            <Phone size={14} className="text-[#957C3D]" />{" "}
                            {addr.phone}
                          </p>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            {addr.address}, {addr.city}, {addr.state} -{" "}
                            {addr.pincode}
                          </p>

                          {addr.location && (
                            <a
                              href={addr.location}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center text-xs text-blue-600 mt-2 hover:underline"
                            >
                              <Globe size={12} /> View on Map
                            </a>
                          )}
                        </div>

                        <div className="flex gap-3 mt-3 sm:mt-0">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              navigate("/address");
                            }}
                            className="text-[#002349] hover:text-[#957C3D] transition"
                          >
                            <Edit3 size={18} />
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              const updated = addressList.filter(
                                (_, i) => i !== index
                              );
                              setAddressList(updated);
                              localStorage.setItem(
                                "userAddresses",
                                JSON.stringify(updated)
                              );
                              toast.info("🗑️ Address deleted successfully");
                            }}
                            className="text-red-500 hover:text-red-700 transition"
                          >
                            Delete
                          </button>
                        </div>
                      </div>

                      <div className="mt-4 flex justify-between items-center flex-wrap gap-2">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleSelectAddress(addr);
                          }}
                          className={`px-4 py-2 rounded-lg font-medium w-full sm:w-auto transition ${
                            selectedAddress?.pincode === addr.pincode
                              ? "bg-[#002349] text-white"
                              : "border border-[#002349] text-[#002349] hover:bg-[#002349] hover:text-white"
                          }`}
                        >
                          {selectedAddress?.pincode === addr.pincode
                            ? "✔ Selected"
                            : "Deliver Here"}
                        </motion.button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          </div>

          {/* Order Summary */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-[#f8f9fc] border rounded-2xl p-5 sticky top-20 h-fit shadow-sm hover:shadow-md transition"
          >
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2 text-[#002349]">
              <CreditCard size={20} className="text-[#957C3D]" /> Order Summary
            </h2>
            <div className="space-y-2 text-gray-700 text-sm sm:text-base">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹{subtotal}</span>
              </div>
              <div className="flex justify-between">
                <span>Tax (5%)</span>
                <span>₹{tax}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>{shipping === 0 ? "Free" : `₹${shipping}`}</span>
              </div>
              <hr className="my-2" />
              <div className="flex justify-between font-bold text-xl text-[#002349]">
                <span>Total</span>
                <span>₹{total}</span>
              </div>
            </div>

            <div className="mt-5 flex items-center gap-2 bg-white p-3 rounded-lg border text-sm text-gray-600">
              <ShieldCheck className="text-[#957C3D]" size={20} />
              <p>100% Secure Payment (SSL Encrypted)</p>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              onClick={handleProceedToPayment}
              disabled={placingOrder}
              className={`w-full mt-6 py-3 rounded-xl font-semibold text-lg text-white transition-all ${
                placingOrder
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-[#002349] hover:bg-[#013a73]"
              }`}
            >
              Proceed to Payment <PackageCheck className="inline ml-2" />
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* 💳 Payment Popup */}
      {showPaymentPopup && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4"
        >
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 relative"
          >
            <h2 className="text-2xl font-semibold text-[#002349] mb-4 text-center">
              Secure Payment
            </h2>
            <p className="text-gray-600 text-sm text-center mb-5">
              Choose your payment method
            </p>

            <div className="space-y-3">
              {[
                { id: "upi", label: "UPI (GPay / PhonePe / Paytm)" },
                { id: "card", label: "Credit / Debit Card" },
                { id: "cod", label: "Cash on Delivery" },
              ].map((method) => (
                <motion.div
                  key={method.id}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setSelectedMethod(method.id)}
                  className={`p-4 border rounded-xl cursor-pointer flex items-center justify-between transition ${
                    selectedMethod === method.id
                      ? "border-[#957C3D] bg-[#fff9f3]"
                      : "border-gray-300 bg-white"
                  }`}
                >
                  <span className="text-gray-800 font-medium">
                    {method.label}
                  </span>
                  {selectedMethod === method.id && (
                    <span className="text-[#957C3D] font-bold text-lg">✔</span>
                  )}
                </motion.div>
              ))}
            </div>

            <div className="mt-6 flex justify-between gap-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 py-2 rounded-lg border border-gray-400 text-gray-600 hover:bg-gray-100 transition"
                onClick={() => setShowPaymentPopup(false)}
              >
                Cancel
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={!selectedMethod}
                onClick={() => {
                  setPlacingOrder(true);
                  setTimeout(() => {
                    setPlacingOrder(false);
                    setShowPaymentPopup(false);
                    toast.success("✅ Payment successful! Order placed.");
                    navigate("/order-success");
                  }, 2000);
                }}
                className={`flex-1 py-2 rounded-lg font-semibold text-white transition ${
                  selectedMethod
                    ? "bg-[#002349] hover:bg-[#013a73]"
                    : "bg-gray-400 cursor-not-allowed"
                }`}
              >
                {placingOrder ? (
                  <span className="flex items-center justify-center gap-2">
                    <Loader2 className="animate-spin" size={18} /> Processing...
                  </span>
                ) : (
                  "Pay Now"
                )}
              </motion.button>
            </div>

            <button
              className="absolute top-3 right-4 text-gray-400 hover:text-gray-600"
              onClick={() => setShowPaymentPopup(false)}
            >
              ✕
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default BuyNow;