

import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchWithAuth } from "../refreshtoken/api";
import { toast, ToastContainer } from "react-toastify";
import {
  ArrowLeft,
  Truck,
  ShieldCheck,
  ShoppingBag,
  IndianRupee,
  X,
  CreditCard,
  Wallet,
  Banknote,
  QrCode,
  CheckCircle,
} from "lucide-react";
import "react-toastify/dist/ReactToastify.css";

const BuyNow = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [amountPaid, setAmountPaid] = useState("");
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const [formData, setFormData] = useState({
    userId: "",
    productId: id || "",
    quantity: 1,
    paymentMethod: "COD",
    shippingAddress: {
      street: "",
      city: "",
      state: "",
      postalCode: "",
      country: "",
    },
  });

  // ✅ Fetch user profile
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const data = await fetchWithAuth("https://ecommerce-backend-y1bv.onrender.com/api/user/profile");
        if (data?._id) {
          setFormData((prev) => ({ ...prev, userId: data._id }));
        }
      } catch {
        toast.error("Unable to load user info. Please log in again.");
      }
    };
    fetchUser();
  }, []);

  // ✅ Fetch product details
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://ecommerce-backend-y1bv.onrender.com/api/product/${id}`);
        if (!res.ok) throw new Error("Failed to fetch product");
        const data = await res.json();
        setProduct(data);
      } catch {
        toast.error("Failed to load product details.");
      }
    };
    if (id) fetchProduct();
  }, [id]);

  // ✅ Load address from localStorage
  useEffect(() => {
    const savedAddress = JSON.parse(localStorage.getItem("selectedAddress"));
    if (savedAddress) {
      setFormData((prev) => ({
        ...prev,
        shippingAddress: {
          street: savedAddress.address || "",
          city: savedAddress.city || "",
          state: savedAddress.state || "",
          postalCode: savedAddress.pincode || "",
          country: "India",
        },
      }));
    }
  }, []);

  // ✅ Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith("shippingAddress.")) {
      const field = name.split(".")[1];
      setFormData((prev) => ({
        ...prev,
        shippingAddress: { ...prev.shippingAddress, [field]: value },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  // ✅ Create BuyNow order
  const handleSubmit = async (paymentType = formData.paymentMethod) => {
    if (!formData.userId || !formData.productId)
      return toast.error("Missing required details.");

    const finalData = { ...formData, paymentMethod: paymentType };

    setLoading(true);
    try {
      const res = await fetch("https://ecommerce-backend-y1bv.onrender.com/api/buynow", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(finalData),
      });

      if (!res.ok) throw new Error("Failed to place order");
      const data = await res.json();
      toast.success("Order created successfully!");

      const buyNowId = data?.buyNowOrder?._id;

      // ✅ If QR/UPI payment → send payment details next
      if (paymentType === "QR" || paymentType === "UPI") {
        await submitPayment(buyNowId);
      } else {
        setPaymentSuccess(true);
        setTimeout(() => navigate("/orders"), 2000);
      }
    } catch {
      toast.error("Something went wrong while placing your order.");
    } finally {
      setLoading(false);
    }
  };

  // ✅ Submit Payment Details API
  const submitPayment = async (buyNowId) => {
    try {
      const res = await fetch(`https://ecommerce-backend-y1bv.onrender.com/api/buynow/${buyNowId}/payment`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          transactionId,
          amountPaid,
        }),
      });

      if (!res.ok) throw new Error("Payment submission failed");
      await res.json();
      toast.success("Payment submitted successfully!");
      setPaymentSuccess(true);
      setTimeout(() => navigate("/orders"), 2000);
    } catch (err) {
      toast.error(err.message || "Payment failed");
    }
  };

  const total = (product?.basePrice || 0) * formData.quantity;
  const tax = total * 0.05;
  const grandTotal = total + tax;

  const ownerUpiId = "owner@upi";
  const qrCodeImage = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=upi://pay?pa=${ownerUpiId}&pn=Ecommerce+Store&am=${grandTotal}`;

  const handleProceed = () => setShowPaymentModal(true);

  // ✅ Handle Pay Now click
  const handlePayNow = async () => {
    if (!selectedMethod) return toast.error("Please select a payment method.");
    if (selectedMethod === "UPI" || selectedMethod === "QR") {
      if (!transactionId.trim() || !amountPaid.trim()) {
        return toast.error("Enter Transaction ID and Amount Paid to continue.");
      }
    }

    setFormData((prev) => ({ ...prev, paymentMethod: selectedMethod }));
    setShowPaymentModal(false);
    await handleSubmit(selectedMethod);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] py-10 px-4 text-[#002349] relative">
      <ToastContainer position="top-center" autoClose={1500} />

      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 mb-6 text-[#002349] font-medium hover:underline"
      >
        <ArrowLeft size={18} /> Back
      </button>

      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-2xl p-8 border border-gray-200">
        <h2 className="text-2xl font-extrabold text-[#002349] mb-6">
          Review & Checkout
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {product ? (
              <div className="border border-gray-200 rounded-xl p-5 flex flex-col sm:flex-row gap-5">
                <img
                  src={
                    product.images?.[0] ||
                    "https://via.placeholder.com/150x150?text=No+Image"
                  }
                  alt={product.name}
                  className="w-36 h-36 rounded-lg object-cover"
                />
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-[#002349]">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {product.description}
                  </p>
                  <div className="text-green-600 text-sm font-semibold mt-2 flex items-center gap-1">
                    <Truck size={16} /> Free Delivery Available
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    <div>
                      <label className="text-sm font-semibold">Quantity:</label>
                      <select
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        className="ml-2 border border-gray-300 rounded-md p-1 focus:ring-2 focus:ring-[#957C3D]"
                      >
                        {[1, 2, 3, 4, 5].map((num) => (
                          <option key={num} value={num}>
                            {num}
                          </option>
                        ))}
                      </select>
                    </div>
                    <p className="text-xl font-bold text-[#957C3D] flex items-center gap-1">
                      <IndianRupee size={18} /> {product.basePrice}
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-gray-500 text-center py-8">
                Loading product details...
              </div>
            )}

            <div className="border border-gray-200 rounded-xl p-5">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-bold flex items-center gap-2">
                  <ShieldCheck className="text-[#957C3D]" size={20} /> Delivery
                  Address
                </h4>
                <button
                  type="button"
                  onClick={() => navigate(`/address/${id}`)}
                  className="px-3 py-1 bg-[#002349] text-white rounded-md text-sm hover:bg-[#00172f]"
                >
                  + Add / Manage Address
                </button>
              </div>

              {Object.values(formData.shippingAddress).some((v) => v) ? (
                <div className="text-sm space-y-1">
                  <p>
                    {formData.shippingAddress.street},{" "}
                    {formData.shippingAddress.city}
                  </p>
                  <p>
                    {formData.shippingAddress.state} -{" "}
                    {formData.shippingAddress.postalCode}
                  </p>
                  <p>{formData.shippingAddress.country}</p>
                </div>
              ) : (
                <div className="text-center text-gray-500 py-6">
                  No saved addresses yet. Add a new address to continue.
                  <button
                    onClick={() => navigate(`/address/${id}`)}
                    className="mt-4 px-5 py-2 bg-[#957C3D] text-white rounded-md font-medium hover:bg-[#7b6533]"
                  >
                    Add New Address
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="border border-gray-200 rounded-xl p-6 bg-[#fdfdfd] shadow-sm">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <ShoppingBag className="text-[#957C3D]" /> Order Summary
            </h3>
            <div className="text-sm space-y-2">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹{total.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>Tax (5%)</span>
                <span>₹{tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between border-b border-gray-200 pb-2">
                <span>Shipping</span>
                <span className="text-green-600 font-medium">Free</span>
              </div>
              <div className="flex justify-between text-lg font-semibold pt-2">
                <span>Total</span>
                <span>₹{grandTotal.toFixed(2)}</span>
              </div>
            </div>

            <button
              onClick={handleProceed}
              disabled={loading}
              className="w-full mt-5 bg-[#002349] hover:bg-[#00172f] text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2 transition disabled:opacity-70"
            >
              {loading ? "Processing..." : "Proceed to Payment"}
            </button>
          </div>
        </div>
      </div>

      {/* ✅ Payment Modal */}
      {showPaymentModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-lg relative">
            <button
              onClick={() => setShowPaymentModal(false)}
              className="absolute top-3 right-4 text-gray-500 hover:text-gray-700"
            >
              <X size={20} />
            </button>
            <h2 className="text-xl font-bold mb-4 text-[#002349] text-center">
              Select Payment Method
            </h2>
            <div className="space-y-3">
              {[
                { id: "COD", label: "Cash on Delivery", icon: <Banknote /> },
                { id: "QR", label: "UPI / QR Payment", icon: <Wallet /> },
                {
                  id: "CARD",
                  label: "Credit / Debit Card (Coming Soon)",
                  icon: <CreditCard />,
                  disabled: true,
                },
              ].map((method) => (
                <button
                  key={method.id}
                  disabled={method.disabled}
                  onClick={() => setSelectedMethod(method.id)}
                  className={`w-full flex items-center gap-3 border rounded-lg px-4 py-3 transition ${
                    selectedMethod === method.id
                      ? "border-[#957C3D] bg-[#fff8e1]"
                      : "border-gray-200 hover:bg-gray-100"
                  } ${method.disabled ? "opacity-60 cursor-not-allowed" : ""}`}
                >
                  {method.icon}
                  <span className="font-medium">{method.label}</span>
                </button>
              ))}
            </div>

            {/* ✅ QR Payment Input */}
            {selectedMethod === "QR" && (
              <div className="mt-5 border-t pt-4">
                <h3 className="text-sm font-semibold flex items-center gap-2 mb-3">
                  <QrCode className="text-[#957C3D]" /> Scan & Pay via QR
                </h3>
                <div className="flex flex-col items-center">
                  <img
                    src={qrCodeImage}
                    alt="QR Code"
                    className="w-40 h-40 border rounded-lg shadow-md"
                  />
                  <p className="mt-3 font-semibold text-[#002349]">
                    UPI ID: <span className="text-[#957C3D]">{ownerUpiId}</span>
                  </p>
                </div>
                <div className="mt-4 space-y-2">
                  <input
                    type="text"
                    placeholder="Transaction ID"
                    value={transactionId}
                    onChange={(e) => setTransactionId(e.target.value)}
                    className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#957C3D]"
                  />
                  <input
                    type="number"
                    placeholder="Amount Paid (₹)"
                    value={amountPaid}
                    onChange={(e) => setAmountPaid(e.target.value)}
                    className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#957C3D]"
                  />
                </div>
              </div>
            )}

            <div className="flex justify-between mt-6">
              <button
                onClick={() => setShowPaymentModal(false)}
                className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={handlePayNow}
                disabled={!selectedMethod}
                className={`px-6 py-2 rounded-lg font-semibold text-white ${
                  selectedMethod
                    ? "bg-[#002349] hover:bg-[#013a73]"
                    : "bg-gray-400 cursor-not-allowed"
                }`}
              >
                Pay Now
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ✅ Payment Success Popup */}
      {paymentSuccess && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white rounded-2xl p-8 shadow-xl text-center max-w-sm">
            <CheckCircle className="mx-auto text-green-500 mb-3" size={48} />
            <h3 className="text-lg font-bold mb-2">Payment Successful!</h3>
            <p className="text-gray-600 mb-4">
              Thank you for your purchase. Your order is being processed.
            </p>
            <button
              onClick={() => setPaymentSuccess(false)}
              className="bg-[#957C3D] text-white px-5 py-2 rounded-lg hover:bg-[#7b6533] transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BuyNow;



