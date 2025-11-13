// import React, { useState, useEffect } from "react";
// import { fetchWithAuth } from "../refreshtoken/api"; // Import your helper
// import { useNavigate } from "react-router-dom";

// function PlaceOrder() {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     street: "",
//     city: "",
//     state: "",
//     postalCode: "",
//     country: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [orderId, setOrderId] = useState(null);
//   const [paymentDone, setPaymentDone] = useState(false);
//   const [error, setError] = useState("");
//   const [successMsg, setSuccessMsg] = useState("");
//   const [cartTotal, setCartTotal] = useState(0);

//   // ✅ Load real cart total (from localStorage or backend)
//   useEffect(() => {
//     const total = localStorage.getItem("cartTotal");
//     setCartTotal(total ? parseFloat(total) : 999); // fallback if missing
//   }, []);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // Step 1: Place the order
//   const handlePlaceOrder = async (e) => {
//     e.preventDefault();
//     setError("");
//     setSuccessMsg("");
//     setLoading(true);

//     try {
//       const response = await fetchWithAuth(
//         "https://ecommerce-backend-y1bv.onrender.com/api/orders/place",
//         {
//           method: "POST",
//           body: JSON.stringify({
//             shippingAddress: {
//               street: formData.street,
//               city: formData.city,
//               state: formData.state,
//               postalCode: formData.postalCode,
//               country: formData.country,
//             },
//             paymentMethod: "QR",
//           }),
//         }
//       );

//       setOrderId(response._id || response.orderId);
//       setSuccessMsg("Order placed successfully! Proceed to payment.");
//     } catch (err) {
//       console.error(err);
//       setError("Failed to place order. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Step 2: Complete the payment
//   const handlePayment = async () => {
//     if (!orderId) return setError("Order ID missing. Place an order first.");
//     setLoading(true);
//     setError("");
//     setSuccessMsg("");

//     try {
//       const response = await fetchWithAuth(
//         `https://ecommerce-backend-y1bv.onrender.com/api/orders/${orderId}/payment`,
//         {
//           method: "POST",
//           body: JSON.stringify({
//             transactionId: `TXN${Date.now()}`,
//             amountPaid: cartTotal, // ✅ Use dynamic total
//           }),
//         }
//       );

//       setPaymentDone(true);
//       setSuccessMsg("Payment successful! Your order is confirmed.");
//     } catch (err) {
//       console.error(err);
//       setError("Payment failed. Try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto mt-10 bg-white shadow-md rounded-2xl p-6 border border-gray-200">
//       <h2 className="text-2xl font-bold text-center mb-6">Place Order</h2>

//       {!paymentDone ? (
//         <>
//           {!orderId ? (
//             <form onSubmit={handlePlaceOrder} className="space-y-4">
//               <div>
//                 <label className="block mb-1 font-medium">Street</label>
//                 <input
//                   type="text"
//                   name="street"
//                   value={formData.street}
//                   onChange={handleChange}
//                   className="w-full border p-2 rounded-lg"
//                   required
//                 />
//               </div>

//               <div>
//                 <label className="block mb-1 font-medium">City</label>
//                 <input
//                   type="text"
//                   name="city"
//                   value={formData.city}
//                   onChange={handleChange}
//                   className="w-full border p-2 rounded-lg"
//                   required
//                 />
//               </div>

//               <div>
//                 <label className="block mb-1 font-medium">State</label>
//                 <input
//                   type="text"
//                   name="state"
//                   value={formData.state}
//                   onChange={handleChange}
//                   className="w-full border p-2 rounded-lg"
//                   required
//                 />
//               </div>

//               <div>
//                 <label className="block mb-1 font-medium">Postal Code</label>
//                 <input
//                   type="text"
//                   name="postalCode"
//                   value={formData.postalCode}
//                   onChange={handleChange}
//                   className="w-full border p-2 rounded-lg"
//                   required
//                 />
//               </div>

//               <div>
//                 <label className="block mb-1 font-medium">Country</label>
//                 <input
//                   type="text"
//                   name="country"
//                   value={formData.country}
//                   onChange={handleChange}
//                   className="w-full border p-2 rounded-lg"
//                   required
//                 />
//               </div>

//               <div className="text-center text-gray-700 mt-2">
//                 <p className="font-semibold">
//                   Total Payable: ₹{cartTotal.toFixed(2)}
//                 </p>
//               </div>

//               <button
//                 type="submit"
//                 disabled={loading}
//                 className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
//               >
//                 {loading ? "Placing Order..." : "Place Order"}
//               </button>
//             </form>
//           ) : (
//             <div className="text-center">
//               <p className="text-lg font-semibold mb-3">
//                 Order ID: <span className="text-gray-700">{orderId}</span>
//               </p>
//               <p className="text-gray-600 mb-6">
//                 Scan the QR code below to complete your payment of{" "}
//                 <strong>₹{cartTotal.toFixed(2)}</strong>.
//               </p>

//               {/* Example QR Placeholder */}
//               <div className="flex justify-center mb-4">
//                 <img
//                   src="https://upload.wikimedia.org/wikipedia/commons/8/8a/Official_QR_Code.png"
//                   alt="QR"
//                   className="w-32 h-32 border p-2"
//                 />
//               </div>

//               <button
//                 onClick={handlePayment}
//                 disabled={loading}
//                 className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
//               >
//                 {loading ? "Processing Payment..." : "Confirm Payment"}
//               </button>
//             </div>
//           )}
//         </>
//       ) : (
//         <div className="text-center">
//           <h3 className="text-xl font-semibold text-green-700 mb-2">
//             ✅ Order Confirmed!
//           </h3>
//           <p className="text-gray-600 mb-4">
//             Thank you for your purchase of ₹{cartTotal.toFixed(2)}.
//           </p>
//           <button
//             onClick={() => navigate("/")}
//             className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
//           >
//             Go to Home
//           </button>
//         </div>
//       )}

//       {error && <p className="text-red-600 text-center mt-4">{error}</p>}
//       {successMsg && (
//         <p className="text-green-600 text-center mt-4">{successMsg}</p>
//       )}
//     </div>
//   );
// }

// export default PlaceOrder;




















// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { fetchWithAuth } from "../refreshtoken/api";
// import { toast, ToastContainer } from "react-toastify";
// import {
//   ArrowLeft,
//   Truck,
//   ShieldCheck,
//   ShoppingBag,
//   IndianRupee,
//   X,
//   CreditCard,
//   Wallet,
//   Banknote,
//   QrCode,
//   CheckCircle,
// } from "lucide-react";
// import "react-toastify/dist/ReactToastify.css";

// const PlaceOrder = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [showPaymentModal, setShowPaymentModal] = useState(false);
//   const [selectedMethod, setSelectedMethod] = useState("");
//   const [transactionId, setTransactionId] = useState("");
//   const [amountPaid, setAmountPaid] = useState("");
//   const [paymentSuccess, setPaymentSuccess] = useState(false);

//   const [formData, setFormData] = useState({
//     userId: "",
//     productId: id || "",
//     quantity: 1,
//     paymentMethod: "COD",
//     shippingAddress: {
//       street: "",
//       city: "",
//       state: "",
//       postalCode: "",
//       country: "",
//     },
//   });

//   // ✅ Fetch user profile
//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const data = await fetchWithAuth("https://ecommerce-backend-y1bv.onrender.com/api/user/profile");
//         if (data?._id) {
//           setFormData((prev) => ({ ...prev, userId: data._id }));
//         }
//       } catch {
//         toast.error("Unable to load user info. Please log in again.");
//       }
//     };
//     fetchUser();
//   }, []);

//   // ✅ Fetch product details
//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const res = await fetch(`https://ecommerce-backend-y1bv.onrender.com/api/product/${id}`);
//         if (!res.ok) throw new Error("Failed to fetch product");
//         const data = await res.json();
//         setProduct(data);
//       } catch {
//         toast.error("Failed to load product details.");
//       }
//     };
//     if (id) fetchProduct();
//   }, [id]);

//   // ✅ Load address from localStorage
//   useEffect(() => {
//     const savedAddress = JSON.parse(localStorage.getItem("selectedAddress"));
//     if (savedAddress) {
//       setFormData((prev) => ({
//         ...prev,
//         shippingAddress: {
//           street: savedAddress.address || "",
//           city: savedAddress.city || "",
//           state: savedAddress.state || "",
//           postalCode: savedAddress.pincode || "",
//           country: "India",
//         },
//       }));
//     }
//   }, []);

//   // ✅ Handle input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     if (name.startsWith("shippingAddress.")) {
//       const field = name.split(".")[1];
//       setFormData((prev) => ({
//         ...prev,
//         shippingAddress: { ...prev.shippingAddress, [field]: value },
//       }));
//     } else {
//       setFormData((prev) => ({ ...prev, [name]: value }));
//     }
//   };

//   // ✅ Create BuyNow order
//   const handleSubmit = async (paymentType = formData.paymentMethod) => {
//     if (!formData.userId || !formData.productId)
//       return toast.error("Missing required details.");

//     const finalData = { ...formData, paymentMethod: paymentType };

//     setLoading(true);
//     try {
//       const res = await fetch("https://ecommerce-backend-y1bv.onrender.com/api/orders/place", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(finalData),
//       });

//       if (!res.ok) throw new Error("Failed to place order");
//       const data = await res.json();
//       toast.success("Order created successfully!");

//       const buyNowId = data?.buyNowOrder?._id;

//       // ✅ If QR/UPI payment → send payment details next
//       if (paymentType === "QR" || paymentType === "UPI") {
//         await submitPayment(buyNowId);
//       } else {
//         setPaymentSuccess(true);
//         setTimeout(() => navigate("/orders"), 2000);
//       }
//     } catch {
//       toast.error("Something went wrong while placing your order.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // ✅ Submit Payment Details API
//   const submitPayment = async (orderId) => {
//     try {
//       const res = await fetch(`https://ecommerce-backend-y1bv.onrender.com/api/orders/${orderId}/payment`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           transactionId,
//           amountPaid,
//         }),
//       });

//       if (!res.ok) throw new Error("Payment submission failed");
//       await res.json();
//       toast.success("Payment submitted successfully!");
//       setPaymentSuccess(true);
//       setTimeout(() => navigate("/orders"), 2000);
//     } catch (err) {
//       toast.error(err.message || "Payment failed");
//     }
//   };

//   const total = (product?.basePrice || 0) * formData.quantity;
//   const tax = total * 0.05;
//   const grandTotal = total + tax;

//   const ownerUpiId = "owner@upi";
//   const qrCodeImage = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=upi://pay?pa=${ownerUpiId}&pn=Ecommerce+Store&am=${grandTotal}`;

//   const handleProceed = () => setShowPaymentModal(true);

//   // ✅ Handle Pay Now click
//   const handlePayNow = async () => {
//     if (!selectedMethod) return toast.error("Please select a payment method.");
//     if (selectedMethod === "UPI" || selectedMethod === "QR") {
//       if (!transactionId.trim() || !amountPaid.trim()) {
//         return toast.error("Enter Transaction ID and Amount Paid to continue.");
//       }
//     }

//     setFormData((prev) => ({ ...prev, paymentMethod: selectedMethod }));
//     setShowPaymentModal(false);
//     await handleSubmit(selectedMethod);
//   };

//   return (
//     <div className="min-h-screen bg-[#f8fafc] py-10 px-4 text-[#002349] relative">
//       <ToastContainer position="top-center" autoClose={1500} />

//       <button
//         onClick={() => navigate(-1)}
//         className="flex items-center gap-2 mb-6 text-[#002349] font-medium hover:underline"
//       >
//         <ArrowLeft size={18} /> Back
//       </button>

//       <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-2xl p-8 border border-gray-200">
//         <h2 className="text-2xl font-extrabold text-[#002349] mb-6">
//           Review & Checkout
//         </h2>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           <div className="lg:col-span-2 space-y-6">
//             {product ? (
//               <div className="border border-gray-200 rounded-xl p-5 flex flex-col sm:flex-row gap-5">
//                 <img
//                   src={
//                     product.images?.[0] ||
//                     "https://via.placeholder.com/150x150?text=No+Image"
//                   }
//                   alt={product.name}
//                   className="w-36 h-36 rounded-lg object-cover"
//                 />
//                 <div className="flex-1">
//                   <h3 className="text-lg font-bold text-[#002349]">
//                     {product.name}
//                   </h3>
//                   <p className="text-sm text-gray-600 mt-1">
//                     {product.description}
//                   </p>
//                   <div className="text-green-600 text-sm font-semibold mt-2 flex items-center gap-1">
//                     <Truck size={16} /> Free Delivery Available
//                   </div>
//                   <div className="flex items-center justify-between mt-3">
//                     <div>
//                       <label className="text-sm font-semibold">Quantity:</label>
//                       <select
//                         name="quantity"
//                         value={formData.quantity}
//                         onChange={handleChange}
//                         className="ml-2 border border-gray-300 rounded-md p-1 focus:ring-2 focus:ring-[#957C3D]"
//                       >
//                         {[1, 2, 3, 4, 5].map((num) => (
//                           <option key={num} value={num}>
//                             {num}
//                           </option>
//                         ))}
//                       </select>
//                     </div>
//                     <p className="text-xl font-bold text-[#957C3D] flex items-center gap-1">
//                       <IndianRupee size={18} /> {product.basePrice}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             ) : (
//               <div className="text-gray-500 text-center py-8">
//                 Loading product details...
//               </div>
//             )}

//             <div className="border border-gray-200 rounded-xl p-5">
//               <div className="flex items-center justify-between mb-4">
//                 <h4 className="text-lg font-bold flex items-center gap-2">
//                   <ShieldCheck className="text-[#957C3D]" size={20} /> Delivery
//                   Address
//                 </h4>
//                 <button
//                   type="button"
//                   onClick={() => navigate(`/address/${id}`)}
//                   className="px-3 py-1 bg-[#002349] text-white rounded-md text-sm hover:bg-[#00172f]"
//                 >
//                   + Add / Manage Address
//                 </button>
//               </div>

//               {Object.values(formData.shippingAddress).some((v) => v) ? (
//                 <div className="text-sm space-y-1">
//                   <p>
//                     {formData.shippingAddress.street},{" "}
//                     {formData.shippingAddress.city}
//                   </p>
//                   <p>
//                     {formData.shippingAddress.state} -{" "}
//                     {formData.shippingAddress.postalCode}
//                   </p>
//                   <p>{formData.shippingAddress.country}</p>
//                 </div>
//               ) : (
//                 <div className="text-center text-gray-500 py-6">
//                   No saved addresses yet. Add a new address to continue.
//                   <button
//                     onClick={() => navigate(`/address/${id}`)}
//                     className="mt-4 px-5 py-2 bg-[#957C3D] text-white rounded-md font-medium hover:bg-[#7b6533]"
//                   >
//                     Add New Address
//                   </button>
//                 </div>
//               )}
//             </div>
//           </div>

//           <div className="border border-gray-200 rounded-xl p-6 bg-[#fdfdfd] shadow-sm">
//             <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
//               <ShoppingBag className="text-[#957C3D]" /> Order Summary
//             </h3>
//             <div className="text-sm space-y-2">
//               <div className="flex justify-between">
//                 <span>Subtotal</span>
//                 <span>₹{total.toLocaleString()}</span>
//               </div>
//               <div className="flex justify-between">
//                 <span>Tax (5%)</span>
//                 <span>₹{tax.toFixed(2)}</span>
//               </div>
//               <div className="flex justify-between border-b border-gray-200 pb-2">
//                 <span>Shipping</span>
//                 <span className="text-green-600 font-medium">Free</span>
//               </div>
//               <div className="flex justify-between text-lg font-semibold pt-2">
//                 <span>Total</span>
//                 <span>₹{grandTotal.toFixed(2)}</span>
//               </div>
//             </div>

//             <button
//               onClick={handleProceed}
//               disabled={loading}
//               className="w-full mt-5 bg-[#002349] hover:bg-[#00172f] text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2 transition disabled:opacity-70"
//             >
//               {loading ? "Processing..." : "Proceed to Payment"}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* ✅ Payment Modal */}
//       {showPaymentModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-lg relative">
//             <button
//               onClick={() => setShowPaymentModal(false)}
//               className="absolute top-3 right-4 text-gray-500 hover:text-gray-700"
//             >
//               <X size={20} />
//             </button>
//             <h2 className="text-xl font-bold mb-4 text-[#002349] text-center">
//               Select Payment Method
//             </h2>
//             <div className="space-y-3">
//               {[
//                 { id: "COD", label: "Cash on Delivery", icon: <Banknote /> },
//                 { id: "QR", label: "UPI / QR Payment", icon: <Wallet /> },
//                 {
//                   id: "CARD",
//                   label: "Credit / Debit Card (Coming Soon)",
//                   icon: <CreditCard />,
//                   disabled: true,
//                 },
//               ].map((method) => (
//                 <button
//                   key={method.id}
//                   disabled={method.disabled}
//                   onClick={() => setSelectedMethod(method.id)}
//                   className={`w-full flex items-center gap-3 border rounded-lg px-4 py-3 transition ${
//                     selectedMethod === method.id
//                       ? "border-[#957C3D] bg-[#fff8e1]"
//                       : "border-gray-200 hover:bg-gray-100"
//                   } ${method.disabled ? "opacity-60 cursor-not-allowed" : ""}`}
//                 >
//                   {method.icon}
//                   <span className="font-medium">{method.label}</span>
//                 </button>
//               ))}
//             </div>

//             {/* ✅ QR Payment Input */}
//             {selectedMethod === "QR" && (
//               <div className="mt-5 border-t pt-4">
//                 <h3 className="text-sm font-semibold flex items-center gap-2 mb-3">
//                   <QrCode className="text-[#957C3D]" /> Scan & Pay via QR
//                 </h3>
//                 <div className="flex flex-col items-center">
//                   <img
//                     src={qrCodeImage}
//                     alt="QR Code"
//                     className="w-40 h-40 border rounded-lg shadow-md"
//                   />
//                   <p className="mt-3 font-semibold text-[#002349]">
//                     UPI ID: <span className="text-[#957C3D]">{ownerUpiId}</span>
//                   </p>
//                 </div>
//                 <div className="mt-4 space-y-2">
//                   <input
//                     type="text"
//                     placeholder="Transaction ID"
//                     value={transactionId}
//                     onChange={(e) => setTransactionId(e.target.value)}
//                     className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#957C3D]"
//                   />
//                   <input
//                     type="number"
//                     placeholder="Amount Paid (₹)"
//                     value={amountPaid}
//                     onChange={(e) => setAmountPaid(e.target.value)}
//                     className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#957C3D]"
//                   />
//                 </div>
//               </div>
//             )}

//             <div className="flex justify-between mt-6">
//               <button
//                 onClick={() => setShowPaymentModal(false)}
//                 className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={handlePayNow}
//                 disabled={!selectedMethod}
//                 className={`px-6 py-2 rounded-lg font-semibold text-white ${
//                   selectedMethod
//                     ? "bg-[#002349] hover:bg-[#013a73]"
//                     : "bg-gray-400 cursor-not-allowed"
//                 }`}
//               >
//                 Pay Now
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* ✅ Payment Success Popup */}
//       {paymentSuccess && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40">
//           <div className="bg-white rounded-2xl p-8 shadow-xl text-center max-w-sm">
//             <CheckCircle className="mx-auto text-green-500 mb-3" size={48} />
//             <h3 className="text-lg font-bold mb-2">Payment Successful!</h3>
//             <p className="text-gray-600 mb-4">
//               Thank you for your purchase. Your order is being processed.
//             </p>
//             <button
//               onClick={() => setPaymentSuccess(false)}
//               className="bg-[#957C3D] text-white px-5 py-2 rounded-lg hover:bg-[#7b6533] transition"
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default PlaceOrder;




// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { fetchWithAuth } from "../refreshtoken/api";
// import { toast, ToastContainer } from "react-toastify";
// import {
//   ArrowLeft,
//   Truck,
//   ShieldCheck,
//   ShoppingBag,
//   IndianRupee,
//   X,
//   CreditCard,
//   Wallet,
//   Banknote,
//   QrCode,
//   CheckCircle,
// } from "lucide-react";
// import "react-toastify/dist/ReactToastify.css";

// const PlaceOrder = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [showPaymentModal, setShowPaymentModal] = useState(false);
//   const [selectedMethod, setSelectedMethod] = useState("");
//   const [transactionId, setTransactionId] = useState("");
//   const [amountPaid, setAmountPaid] = useState("");
//   const [paymentSuccess, setPaymentSuccess] = useState(false);

//   const [formData, setFormData] = useState({
//     userId: "",
//     productId: id || "",
//     quantity: 1,
//     paymentMethod: "COD",
//     shippingAddress: {
//       street: "",
//       city: "",
//       state: "",
//       postalCode: "",
//       country: "",
//     },
//   });

//   // ✅ Fetch user profile
//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const data = await fetchWithAuth(
//           "https://ecommerce-backend-y1bv.onrender.com/api/user/profile"
//         );
//         if (data?._id) {
//           setFormData((prev) => ({ ...prev, userId: data._id }));
//         }
//       } catch {
//         toast.error("Unable to load user info. Please log in again.");
//       }
//     };
//     fetchUser();
//   }, []);

//   // ✅ Fetch product details
//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const res = await fetch(
//           `https://ecommerce-backend-y1bv.onrender.com/api/product/${id}`
//         );
//         if (!res.ok) throw new Error("Failed to fetch product");
//         const data = await res.json();
//         setProduct(data);
//       } catch {
//         toast.error("Failed to load product details.");
//       }
//     };
//     if (id) fetchProduct();
//   }, [id]);

//   // ✅ Load address from localStorage
//   useEffect(() => {
//     const savedAddress = JSON.parse(localStorage.getItem("selectedAddress"));
//     if (savedAddress) {
//       setFormData((prev) => ({
//         ...prev,
//         shippingAddress: {
//           street: savedAddress.address || "",
//           city: savedAddress.city || "",
//           state: savedAddress.state || "",
//           postalCode: savedAddress.pincode || "",
//           country: "India",
//         },
//       }));
//     }
//   }, []);

//   // ✅ Handle input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     if (name.startsWith("shippingAddress.")) {
//       const field = name.split(".")[1];
//       setFormData((prev) => ({
//         ...prev,
//         shippingAddress: { ...prev.shippingAddress, [field]: value },
//       }));
//     } else {
//       setFormData((prev) => ({ ...prev, [name]: value }));
//     }
//   };

//   // ✅ Create Order
//   const handleSubmit = async (paymentType = formData.paymentMethod) => {
//     if (!formData.userId || !formData.productId)
//       return toast.error("Missing required details.");

//     const finalData = { ...formData, paymentMethod: paymentType };

//     setLoading(true);
//     try {
//       const res = await fetchWithAuth(
//         "https://ecommerce-backend-y1bv.onrender.com/api/orders/place",
//         {
//           method: "POST",
//           body: JSON.stringify(finalData),
//         }
//       );

//       toast.success("Order created successfully!");
//       const orderId = res?.buyNowOrder?._id || res?.order?._id;

//       // ✅ If QR/UPI payment → send payment details next
//       if (paymentType === "QR" || paymentType === "UPI") {
//         await submitPayment(orderId);
//       } else {
//         setPaymentSuccess(true);
//         setTimeout(() => navigate("/orders"), 2000);
//       }
//     } catch (err) {
//       toast.error(err.message || "Something went wrong while placing your order.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // ✅ Submit Payment Details
//   const submitPayment = async (orderId) => {
//     try {
//       const res = await fetchWithAuth(
//         `https://ecommerce-backend-y1bv.onrender.com/api/orders/${orderId}/payment`,
//         {
//           method: "POST",
//           body: JSON.stringify({
//             transactionId,
//             amountPaid,
//           }),
//         }
//       );

//       if (!res) throw new Error("Payment submission failed");
//       toast.success("Payment submitted successfully!");
//       setPaymentSuccess(true);
//       setTimeout(() => navigate("/orders"), 2000);
//     } catch (err) {
//       toast.error(err.message || "Payment failed");
//     }
//   };

//   const total = (product?.basePrice || 0) * formData.quantity;
//   const tax = total * 0.05;
//   const grandTotal = total + tax;

//   const ownerUpiId = "owner@upi";
//   const qrCodeImage = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=upi://pay?pa=${ownerUpiId}&pn=Ecommerce+Store&am=${grandTotal}`;

//   const handleProceed = () => setShowPaymentModal(true);

//   const handlePayNow = async () => {
//     if (!selectedMethod) return toast.error("Please select a payment method.");
//     if (selectedMethod === "UPI" || selectedMethod === "QR") {
//       if (!transactionId.trim() || !amountPaid.trim()) {
//         return toast.error("Enter Transaction ID and Amount Paid to continue.");
//       }
//     }

//     setFormData((prev) => ({ ...prev, paymentMethod: selectedMethod }));
//     setShowPaymentModal(false);
//     await handleSubmit(selectedMethod);
//   };

//   return (
//     <div className="min-h-screen bg-[#f8fafc] py-10 px-4 text-[#002349] relative">
//       <ToastContainer position="top-center" autoClose={1500} />

//       <button
//         onClick={() => navigate(-1)}
//         className="flex items-center gap-2 mb-6 text-[#002349] font-medium hover:underline"
//       >
//         <ArrowLeft size={18} /> Back
//       </button>

//       <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-2xl p-8 border border-gray-200">
//         <h2 className="text-2xl font-extrabold text-[#002349] mb-6">
//           Review & Checkout
//         </h2>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           <div className="lg:col-span-2 space-y-6">
//             {product ? (
//               <div className="border border-gray-200 rounded-xl p-5 flex flex-col sm:flex-row gap-5">
//                 <img
//                   src={
//                     product.images?.[0] ||
//                     "https://via.placeholder.com/150x150?text=No+Image"
//                   }
//                   alt={product.name}
//                   className="w-36 h-36 rounded-lg object-cover"
//                 />
//                 <div className="flex-1">
//                   <h3 className="text-lg font-bold text-[#002349]">
//                     {product.name}
//                   </h3>
//                   <p className="text-sm text-gray-600 mt-1">
//                     {product.description}
//                   </p>
//                   <div className="text-green-600 text-sm font-semibold mt-2 flex items-center gap-1">
//                     <Truck size={16} /> Free Delivery Available
//                   </div>
//                   <div className="flex items-center justify-between mt-3">
//                     <div>
//                       <label className="text-sm font-semibold">Quantity:</label>
//                       <select
//                         name="quantity"
//                         value={formData.quantity}
//                         onChange={handleChange}
//                         className="ml-2 border border-gray-300 rounded-md p-1 focus:ring-2 focus:ring-[#957C3D]"
//                       >
//                         {[1, 2, 3, 4, 5].map((num) => (
//                           <option key={num} value={num}>
//                             {num}
//                           </option>
//                         ))}
//                       </select>
//                     </div>
//                     <p className="text-xl font-bold text-[#957C3D] flex items-center gap-1">
//                       <IndianRupee size={18} /> {product.basePrice}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             ) : (
//               <div className="text-gray-500 text-center py-8">
//                 Loading product details...
//               </div>
//             )}

//             <div className="border border-gray-200 rounded-xl p-5">
//               <div className="flex items-center justify-between mb-4">
//                 <h4 className="text-lg font-bold flex items-center gap-2">
//                   <ShieldCheck className="text-[#957C3D]" size={20} /> Delivery
//                   Address
//                 </h4>
//                 <button
//                   type="button"
//                   onClick={() => navigate(`/address/${id}`)}
//                   className="px-3 py-1 bg-[#002349] text-white rounded-md text-sm hover:bg-[#00172f]"
//                 >
//                   + Add / Manage Address
//                 </button>
//               </div>

//               {Object.values(formData.shippingAddress).some((v) => v) ? (
//                 <div className="text-sm space-y-1">
//                   <p>
//                     {formData.shippingAddress.street},{" "}
//                     {formData.shippingAddress.city}
//                   </p>
//                   <p>
//                     {formData.shippingAddress.state} -{" "}
//                     {formData.shippingAddress.postalCode}
//                   </p>
//                   <p>{formData.shippingAddress.country}</p>
//                 </div>
//               ) : (
//                 <div className="text-center text-gray-500 py-6">
//                   No saved addresses yet. Add a new address to continue.
//                   <button
//                     onClick={() => navigate(`/address/${id}`)}
//                     className="mt-4 px-5 py-2 bg-[#957C3D] text-white rounded-md font-medium hover:bg-[#7b6533]"
//                   >
//                     Add New Address
//                   </button>
//                 </div>
//               )}
//             </div>
//           </div>

//           <div className="border border-gray-200 rounded-xl p-6 bg-[#fdfdfd] shadow-sm">
//             <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
//               <ShoppingBag className="text-[#957C3D]" /> Order Summary
//             </h3>
//             <div className="text-sm space-y-2">
//               <div className="flex justify-between">
//                 <span>Subtotal</span>
//                 <span>₹{total.toLocaleString()}</span>
//               </div>
//               <div className="flex justify-between">
//                 <span>Tax (5%)</span>
//                 <span>₹{tax.toFixed(2)}</span>
//               </div>
//               <div className="flex justify-between border-b border-gray-200 pb-2">
//                 <span>Shipping</span>
//                 <span className="text-green-600 font-medium">Free</span>
//               </div>
//               <div className="flex justify-between text-lg font-semibold pt-2">
//                 <span>Total</span>
//                 <span>₹{grandTotal.toFixed(2)}</span>
//               </div>
//             </div>

//             <button
//               onClick={handleProceed}
//               disabled={loading}
//               className="w-full mt-5 bg-[#002349] hover:bg-[#00172f] text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2 transition disabled:opacity-70"
//             >
//               {loading ? "Processing..." : "Proceed to Payment"}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* ✅ Payment Modal */}
//       {showPaymentModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-lg relative">
//             <button
//               onClick={() => setShowPaymentModal(false)}
//               className="absolute top-3 right-4 text-gray-500 hover:text-gray-700"
//             >
//               <X size={20} />
//             </button>
//             <h2 className="text-xl font-bold mb-4 text-[#002349] text-center">
//               Select Payment Method
//             </h2>
//             <div className="space-y-3">
//               {[
//                 { id: "COD", label: "Cash on Delivery", icon: <Banknote /> },
//                 { id: "QR", label: "UPI / QR Payment", icon: <Wallet /> },
//                 {
//                   id: "CARD",
//                   label: "Credit / Debit Card (Coming Soon)",
//                   icon: <CreditCard />,
//                   disabled: true,
//                 },
//               ].map((method) => (
//                 <button
//                   key={method.id}
//                   disabled={method.disabled}
//                   onClick={() => setSelectedMethod(method.id)}
//                   className={`w-full flex items-center gap-3 border rounded-lg px-4 py-3 transition ${
//                     selectedMethod === method.id
//                       ? "border-[#957C3D] bg-[#fff8e1]"
//                       : "border-gray-200 hover:bg-gray-100"
//                   } ${method.disabled ? "opacity-60 cursor-not-allowed" : ""}`}
//                 >
//                   {method.icon}
//                   <span className="font-medium">{method.label}</span>
//                 </button>
//               ))}
//             </div>

//             {/* ✅ QR Payment */}
//             {selectedMethod === "QR" && (
//               <div className="mt-5 border-t pt-4">
//                 <h3 className="text-sm font-semibold flex items-center gap-2 mb-3">
//                   <QrCode className="text-[#957C3D]" /> Scan & Pay via QR
//                 </h3>
//                 <div className="flex flex-col items-center">
//                   <img
//                     src={qrCodeImage}
//                     alt="QR Code"
//                     className="w-40 h-40 border rounded-lg shadow-md"
//                   />
//                   <p className="mt-3 font-semibold text-[#002349]">
//                     UPI ID: <span className="text-[#957C3D]">{ownerUpiId}</span>
//                   </p>
//                 </div>
//                 <div className="mt-4 space-y-2">
//                   <input
//                     type="text"
//                     placeholder="Transaction ID"
//                     value={transactionId}
//                     onChange={(e) => setTransactionId(e.target.value)}
//                     className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#957C3D]"
//                   />
//                   <input
//                     type="number"
//                     placeholder="Amount Paid (₹)"
//                     value={amountPaid}
//                     onChange={(e) => setAmountPaid(e.target.value)}
//                     className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#957C3D]"
//                   />
//                 </div>
//               </div>
//             )}

//             <div className="flex justify-between mt-6">
//               <button
//                 onClick={() => setShowPaymentModal(false)}
//                 className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={handlePayNow}
//                 disabled={!selectedMethod}
//                 className={`px-6 py-2 rounded-lg font-semibold text-white ${
//                   selectedMethod
//                     ? "bg-[#002349] hover:bg-[#013a73]"
//                     : "bg-gray-400 cursor-not-allowed"
//                 }`}
//               >
//                 Pay Now
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* ✅ Payment Success Popup */}
//       {paymentSuccess && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40">
//           <div className="bg-white rounded-2xl p-8 shadow-xl text-center max-w-sm">
//             <CheckCircle className="mx-auto text-green-500 mb-3" size={48} />
//             <h3 className="text-lg font-bold mb-2">Payment Successful!</h3>
//             <p className="text-gray-600 mb-4">
//               Thank you for your purchase. Your order is being processed.
//             </p>
//             <button
//               onClick={() => setPaymentSuccess(false)}
//               className="bg-[#957C3D] text-white px-5 py-2 rounded-lg hover:bg-[#7b6533] transition"
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default PlaceOrder;





















import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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

const PlaceOrder = () => {
  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [amountPaid, setAmountPaid] = useState("");
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const [formData, setFormData] = useState({
    userId: "",
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
        const data = await fetchWithAuth(
          "https://ecommerce-backend-y1bv.onrender.com/api/user/profile"
        );
        if (data?._id) {
          setFormData((prev) => ({ ...prev, userId: data._id }));
        }
      } catch {
        toast.error("Unable to load user info. Please log in again.");
      }
    };
    fetchUser();
  }, []);

  // ✅ Fetch cart details
  useEffect(() => {
    const fetchCart = async () => {
      try {
        const data = await fetchWithAuth(
          "https://ecommerce-backend-y1bv.onrender.com/api/cart"
        );
        if (data?.cart?.length) {
          setCartItems(data.cart);
        } else {
          toast.info("Your cart is empty. Please add items before checkout.");
        }
      } catch {
        toast.error("Failed to load cart details.");
      }
    };
    fetchCart();
  }, []);

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

  // ✅ Handle address field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith("shippingAddress.")) {
      const field = name.split(".")[1];
      setFormData((prev) => ({
        ...prev,
        shippingAddress: { ...prev.shippingAddress, [field]: value },
      }));
    }
  };

  // ✅ Create Order
  const handleSubmit = async (paymentType = formData.paymentMethod) => {
    if (!formData.userId) return toast.error("Missing user info.");
    if (!cartItems.length)
      return toast.error("Your cart is empty. Add products first.");

    const finalData = {
      ...formData,
      paymentMethod: paymentType,
      items: cartItems.map((item) => ({
        productId: item.product._id,
        quantity: item.quantity,
      })),
    };

    setLoading(true);
    try {
      const res = await fetchWithAuth(
        "https://ecommerce-backend-y1bv.onrender.com/api/orders/place",
        {
          method: "POST",
          body: JSON.stringify(finalData),
        }
      );

      toast.success("Order placed successfully!");
      const orderId = res?.buyNowOrder?._id || res?.order?._id;

      if (paymentType === "QR" || paymentType === "UPI") {
        await submitPayment(orderId);
      } else {
        setPaymentSuccess(true);
        setTimeout(() => navigate("/orders"), 2000);
      }
    } catch (err) {
      toast.error(err.message || "Failed to place order.");
    } finally {
      setLoading(false);
    }
  };

  // ✅ Submit Payment
  const submitPayment = async (orderId) => {
    try {
      const res = await fetchWithAuth(
        `https://ecommerce-backend-y1bv.onrender.com/api/orders/${orderId}/payment`,
        {
          method: "POST",
          body: JSON.stringify({ transactionId, amountPaid }),
        }
      );

      if (!res) throw new Error("Payment submission failed");
      toast.success("Payment submitted successfully!");
      setPaymentSuccess(true);
      setTimeout(() => navigate("/orders"), 2000);
    } catch (err) {
      toast.error(err.message || "Payment failed");
    }
  };

  const total = cartItems.reduce(
    (sum, item) => sum + (item.product?.basePrice || 0) * item.quantity,
    0
  );
  const tax = total * 0.05;
  const grandTotal = total + tax;

  const ownerUpiId = "owner@upi";
  const qrCodeImage = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=upi://pay?pa=${ownerUpiId}&pn=Ecommerce+Store&am=${grandTotal}`;

  const handleProceed = () => {
    if (!cartItems.length) return toast.error("Your cart is empty!");
    setShowPaymentModal(true);
  };

  const handlePayNow = async () => {
    if (!selectedMethod) return toast.error("Please select a payment method.");
    if (selectedMethod === "UPI" || selectedMethod === "QR") {
      if (!transactionId.trim() || !amountPaid.trim()) {
        return toast.error("Enter Transaction ID and Amount Paid.");
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
            {/* ✅ Cart Products */}
            {cartItems.length ? (
              cartItems.map((item) => (
                <div
                  key={item._id}
                  className="border border-gray-200 rounded-xl p-5 flex flex-col sm:flex-row gap-5"
                >
                  <img
                    src={
                      item.product?.images?.[0] ||
                      "https://via.placeholder.com/150x150?text=No+Image"
                    }
                    alt={item.product?.name}
                    className="w-36 h-36 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-[#002349]">
                      {item.product?.name}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      {item.product?.description}
                    </p>
                    <div className="text-green-600 text-sm font-semibold mt-2 flex items-center gap-1">
                      <Truck size={16} /> Free Delivery Available
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <p className="text-sm font-semibold">
                        Quantity: {item.quantity}
                      </p>
                      <p className="text-xl font-bold text-[#957C3D] flex items-center gap-1">
                        <IndianRupee size={18} /> {item.product?.basePrice}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-gray-500 text-center py-8">
                Your cart is empty.
              </div>
            )}

            {/* ✅ Delivery Address */}
            <div className="border border-gray-200 rounded-xl p-5">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-bold flex items-center gap-2">
                  <ShieldCheck className="text-[#957C3D]" size={20} /> Delivery
                  Address
                </h4>
                <button
                  type="button"
                  onClick={() => navigate(`/address`)}
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
                  No saved address. Add one to continue.
                  <button
                    onClick={() => navigate(`/address`)}
                    className="mt-4 px-5 py-2 bg-[#957C3D] text-white rounded-md font-medium hover:bg-[#7b6533]"
                  >
                    Add New Address
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* ✅ Order Summary */}
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

export default PlaceOrder;
