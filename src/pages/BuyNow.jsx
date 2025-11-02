// import React, { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import { motion } from "framer-motion";
// import {
//   ArrowLeft,
//   MapPin,
//   Truck,
//   ShieldCheck,
//   CreditCard,
//   Loader2,
//   PackageCheck,
//   Home,
//   Phone,
//   Globe,
//   Edit3,
// } from "lucide-react";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const BASE_URL = "https://ecommerce-backend-y1bv.onrender.com";

// const BuyNow = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [placingOrder, setPlacingOrder] = useState(false);
//   const [addressList, setAddressList] = useState([]);
//   const [selectedAddress, setSelectedAddress] = useState(null);
//   const [quantity, setQuantity] = useState(1);
//   const [showPaymentPopup, setShowPaymentPopup] = useState(false);
//   const [selectedMethod, setSelectedMethod] = useState("");

//   // 🛒 Fetch product
//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const res = await fetch(`${BASE_URL}/api/product/${id}`);
//         if (!res.ok) throw new Error("Product not found");
//         const data = await res.json();
//         setProduct(data);
//       } catch {
//         toast.error("⚠️ Failed to load product details");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchProduct();
//   }, [id]);

//   // 🏠 Load stored addresses
//   useEffect(() => {
//     const stored = JSON.parse(localStorage.getItem("userAddresses")) || [];
//     const selected = JSON.parse(localStorage.getItem("selectedAddress"));
//     setAddressList(stored);
//     if (selected) setSelectedAddress(selected);
//   }, []);

//   const handleSelectAddress = (addr) => {
//     setSelectedAddress(addr);
//     localStorage.setItem("selectedAddress", JSON.stringify(addr));
//     toast.success("✅ Address selected successfully");
//   };

//   const handleProceedToPayment = () => {
//     if (!selectedAddress) {
//       toast.warn("⚠ Please select a delivery address!");
//       return;
//     }
//     setShowPaymentPopup(true);
//   };

//   const subtotal = product?.basePrice * quantity || 0;
//   const shipping = subtotal > 500 ? 0 : 49;
//   const tax = Math.round(subtotal * 0.05);
//   const total = subtotal + shipping + tax;

//   if (loading)
//     return (
//       <div className="flex justify-center items-center h-screen text-[#002349] text-lg">
//         <Loader2 className="animate-spin mr-2" /> Loading product details...
//       </div>
//     );

//   return (
//     <div className="min-h-screen bg-[#f4f6fb] text-white px-4 sm:px-8 py-10">
//       <ToastContainer />

//       <div className="w-full max-w-6xl mx-auto bg-white text-gray-800 rounded-3xl shadow-2xl overflow-hidden">
//         {/* Header */}
//         <div className="flex items-center justify-between p-5 sm:p-6 border-b border-gray-200">
//           <button
//             onClick={() => navigate(-1)}
//             className="flex items-center gap-2 text-[#957C3D] hover:underline"
//           >
//             <ArrowLeft size={20} /> Back
//           </button>
//           <h2 className="text-xl sm:text-2xl font-semibold tracking-wide text-[#002349]">
//             Review & Checkout
//           </h2>
//         </div>

//         {/* Progress Tracker */}
//         <div className="flex justify-center items-center gap-3 py-5 bg-[#f9f9f9] flex-wrap">
//           {[
//             { id: 1, label: "Review Order", active: !showPaymentPopup },
//             { id: 2, label: "Payment", active: showPaymentPopup },
//           ].map((step, index) => (
//             <React.Fragment key={step.id}>
//               <div className="flex flex-col items-center">
//                 <div
//                   className={`w-10 h-10 flex items-center justify-center rounded-full font-semibold ${
//                     step.active
//                       ? "bg-[#957C3D] text-white"
//                       : "bg-gray-300 text-gray-600"
//                   }`}
//                 >
//                   {step.id}
//                 </div>
//                 <p
//                   className={`text-xs mt-1 font-medium ${
//                     step.active ? "text-[#957C3D]" : "text-gray-600"
//                   }`}
//                 >
//                   {step.label}
//                 </p>
//               </div>
//               {index === 0 && (
//                 <div className="h-[2px] w-20 sm:w-32 bg-gray-300"></div>
//               )}
//             </React.Fragment>
//           ))}
//         </div>

//         {/* Main Layout */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
//           {/* Left Section */}
//           <div className="lg:col-span-2 space-y-6">
//             {/* Product Section */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               className="border rounded-2xl p-5 bg-[#f8f9fc] shadow-sm hover:shadow-md transition"
//             >
//               <div className="flex flex-col sm:flex-row gap-5">
//                 <img
//                   src={product?.images?.[0] || "https://via.placeholder.com/150"}
//                   alt={product?.name}
//                   className="w-full sm:w-44 h-44 object-cover rounded-xl shadow-sm"
//                 />
//                 <div className="flex-1 space-y-2">
//                   <h3 className="text-lg sm:text-xl font-semibold text-[#002349]">
//                     {product?.name}
//                   </h3>
//                   <p className="text-gray-600 text-sm line-clamp-3">
//                     {product?.description || "No description available"}
//                   </p>
//                   <div className="flex items-center gap-2 mt-2">
//                     <Truck size={18} className="text-green-600" />
//                     <span className="text-green-600 text-sm font-medium">
//                       Free Delivery Available
//                     </span>
//                   </div>
//                   <div className="flex items-center gap-3 mt-3">
//                     <span className="font-medium text-gray-700">Quantity:</span>
//                     <select
//                       value={quantity}
//                       onChange={(e) => setQuantity(Number(e.target.value))}
//                       className="border rounded-lg px-3 py-1 text-gray-700 focus:ring-2 focus:ring-[#957C3D]"
//                     >
//                       {[1, 2, 3, 4, 5].map((qty) => (
//                         <option key={qty} value={qty}>
//                           {qty}
//                         </option>
//                       ))}
//                     </select>
//                   </div>
//                   <p className="text-2xl font-bold text-[#957C3D] mt-2">
//                     ₹{subtotal}
//                   </p>
//                 </div>
//               </div>
//             </motion.div>

//             {/* 🏠 Address Section */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               className="border rounded-2xl p-5 bg-[#f8f9fc] shadow-md hover:shadow-lg transition-all duration-300"
//             >
//               <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-3">
//                 <h2 className="text-lg font-semibold flex items-center gap-2 text-[#002349]">
//                   <MapPin size={20} className="text-[#957C3D]" /> Delivery
//                   Address
//                 </h2>
//                 <motion.button
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   onClick={() => navigate("/address")}
//                   className="px-4 py-2 rounded-lg text-sm font-medium bg-[#002349] text-white hover:bg-[#013a73] transition"
//                 >
//                   + Add / Manage Address
//                 </motion.button>
//               </div>

//               {addressList.length === 0 ? (
//                 <div className="text-center py-6">
//                   <p className="text-gray-500 text-sm italic">
//                     No saved addresses yet. Add a new address to continue.
//                   </p>
//                   <motion.button
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                     onClick={() => navigate(`/address/${id}`)}
//                     className="mt-3 px-6 py-2 bg-[#957C3D] text-white font-semibold rounded-xl shadow hover:bg-[#7b6633] transition"
//                   >
//                     Add New Address
//                   </motion.button>
//                 </div>
//               ) : (
//                 <div className="space-y-4">
//                   {addressList.map((addr, index) => (
//                     <motion.div
//                       key={index}
//                       whileHover={{ scale: 1.02 }}
//                       className={`border rounded-xl p-4 bg-white transition cursor-pointer ${
//                         selectedAddress?.pincode === addr.pincode
//                           ? "border-[#957C3D] bg-[#fff9f3]"
//                           : "border-gray-200"
//                       }`}
//                       onClick={() => handleSelectAddress(addr)}
//                     >
//                       <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
//                         <div className="space-y-1 text-sm text-gray-700">
//                           <h4 className="font-semibold text-[#002349] flex items-center gap-2">
//                             <Home size={16} className="text-[#957C3D]" />{" "}
//                             {addr.name}
//                           </h4>
//                           <p className="flex items-center gap-2 text-sm">
//                             <Phone size={14} className="text-[#957C3D]" />{" "}
//                             {addr.phone}
//                           </p>
//                           <p className="text-gray-600 text-sm leading-relaxed">
//                             {addr.address}, {addr.city}, {addr.state} -{" "}
//                             {addr.pincode}
//                           </p>

//                           {addr.location && (
//                             <a
//                               href={addr.location}
//                               target="_blank"
//                               rel="noopener noreferrer"
//                               className="inline-flex items-center text-xs text-blue-600 mt-2 hover:underline"
//                             >
//                               <Globe size={12} /> View on Map
//                             </a>
//                           )}
//                         </div>

//                         <div className="flex gap-3 mt-3 sm:mt-0">
//                           <button
//                             onClick={(e) => {
//                               e.stopPropagation();
//                               navigate("/address");
//                             }}
//                             className="text-[#002349] hover:text-[#957C3D] transition"
//                           >
//                             <Edit3 size={18} />
//                           </button>
//                           <button
//                             onClick={(e) => {
//                               e.stopPropagation();
//                               const updated = addressList.filter(
//                                 (_, i) => i !== index
//                               );
//                               setAddressList(updated);
//                               localStorage.setItem(
//                                 "userAddresses",
//                                 JSON.stringify(updated)
//                               );
//                               toast.info("🗑️ Address deleted successfully");
//                             }}
//                             className="text-red-500 hover:text-red-700 transition"
//                           >
//                             Delete
//                           </button>
//                         </div>
//                       </div>

//                       <div className="mt-4 flex justify-between items-center flex-wrap gap-2">
//                         <motion.button
//                           whileHover={{ scale: 1.05 }}
//                           whileTap={{ scale: 0.95 }}
//                           onClick={(e) => {
//                             e.stopPropagation();
//                             handleSelectAddress(addr);
//                           }}
//                           className={`px-4 py-2 rounded-lg font-medium w-full sm:w-auto transition ${
//                             selectedAddress?.pincode === addr.pincode
//                               ? "bg-[#002349] text-white"
//                               : "border border-[#002349] text-[#002349] hover:bg-[#002349] hover:text-white"
//                           }`}
//                         >
//                           {selectedAddress?.pincode === addr.pincode
//                             ? "✔ Selected"
//                             : "Deliver Here"}
//                         </motion.button>
//                       </div>
//                     </motion.div>
//                   ))}
//                 </div>
//               )}
//             </motion.div>
//           </div>

//           {/* Order Summary */}
//           <motion.div
//             initial={{ opacity: 0, x: 40 }}
//             animate={{ opacity: 1, x: 0 }}
//             className="bg-[#f8f9fc] border rounded-2xl p-5 sticky top-20 h-fit shadow-sm hover:shadow-md transition"
//           >
//             <h2 className="text-lg font-semibold mb-4 flex items-center gap-2 text-[#002349]">
//               <CreditCard size={20} className="text-[#957C3D]" /> Order Summary
//             </h2>
//             <div className="space-y-2 text-gray-700 text-sm sm:text-base">
//               <div className="flex justify-between">
//                 <span>Subtotal</span>
//                 <span>₹{subtotal}</span>
//               </div>
//               <div className="flex justify-between">
//                 <span>Tax (5%)</span>
//                 <span>₹{tax}</span>
//               </div>
//               <div className="flex justify-between">
//                 <span>Shipping</span>
//                 <span>{shipping === 0 ? "Free" : `₹${shipping}`}</span>
//               </div>
//               <hr className="my-2" />
//               <div className="flex justify-between font-bold text-xl text-[#002349]">
//                 <span>Total</span>
//                 <span>₹{total}</span>
//               </div>
//             </div>

//             <div className="mt-5 flex items-center gap-2 bg-white p-3 rounded-lg border text-sm text-gray-600">
//               <ShieldCheck className="text-[#957C3D]" size={20} />
//               <p>100% Secure Payment (SSL Encrypted)</p>
//             </div>

//             <motion.button
//               whileHover={{ scale: 1.02 }}
//               whileTap={{ scale: 0.97 }}
//               onClick={handleProceedToPayment}
//               disabled={placingOrder}
//               className={`w-full mt-6 py-3 rounded-xl font-semibold text-lg text-white transition-all ${
//                 placingOrder
//                   ? "bg-gray-400 cursor-not-allowed"
//                   : "bg-[#002349] hover:bg-[#013a73]"
//               }`}
//             >
//               Proceed to Payment <PackageCheck className="inline ml-2" />
//             </motion.button>
//           </motion.div>
//         </div>
//       </div>

//       {/* 💳 Payment Popup */}
//       {showPaymentPopup && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4"
//         >
//           <motion.div
//             initial={{ y: 50, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 relative"
//           >
//             <h2 className="text-2xl font-semibold text-[#002349] mb-4 text-center">
//               Secure Payment
//             </h2>
//             <p className="text-gray-600 text-sm text-center mb-5">
//               Choose your payment method
//             </p>

//             <div className="space-y-3">
//               {[
//                 { id: "upi", label: "UPI (GPay / PhonePe / Paytm)" },
//                 { id: "card", label: "Credit / Debit Card" },
//                 { id: "cod", label: "Cash on Delivery" },
//               ].map((method) => (
//                 <motion.div
//                   key={method.id}
//                   whileHover={{ scale: 1.02 }}
//                   onClick={() => setSelectedMethod(method.id)}
//                   className={`p-4 border rounded-xl cursor-pointer flex items-center justify-between transition ${
//                     selectedMethod === method.id
//                       ? "border-[#957C3D] bg-[#fff9f3]"
//                       : "border-gray-300 bg-white"
//                   }`}
//                 >
//                   <span className="text-gray-800 font-medium">
//                     {method.label}
//                   </span>
//                   {selectedMethod === method.id && (
//                     <span className="text-[#957C3D] font-bold text-lg">✔</span>
//                   )}
//                 </motion.div>
//               ))}
//             </div>

//             <div className="mt-6 flex justify-between gap-3">
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="flex-1 py-2 rounded-lg border border-gray-400 text-gray-600 hover:bg-gray-100 transition"
//                 onClick={() => setShowPaymentPopup(false)}
//               >
//                 Cancel
//               </motion.button>

//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 disabled={!selectedMethod}
//                 onClick={() => {
//                   setPlacingOrder(true);
//                   setTimeout(() => {
//                     setPlacingOrder(false);
//                     setShowPaymentPopup(false);
//                     toast.success("✅ Payment successful! Order placed.");
//                     navigate("/order-success");
//                   }, 2000);
//                 }}
//                 className={`flex-1 py-2 rounded-lg font-semibold text-white transition ${
//                   selectedMethod
//                     ? "bg-[#002349] hover:bg-[#013a73]"
//                     : "bg-gray-400 cursor-not-allowed"
//                 }`}
//               >
//                 {placingOrder ? (
//                   <span className="flex items-center justify-center gap-2">
//                     <Loader2 className="animate-spin" size={18} /> Processing...
//                   </span>
//                 ) : (
//                   "Pay Now"
//                 )}
//               </motion.button>
//             </div>

//             <button
//               className="absolute top-3 right-4 text-gray-400 hover:text-gray-600"
//               onClick={() => setShowPaymentPopup(false)}
//             >
//               ✕
//             </button>
//           </motion.div>
//         </motion.div>
//       )}
//     </div>
//   );
// };

// export default BuyNow;























// import React, { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import { motion } from "framer-motion";
// import {
//   ArrowLeft,
//   MapPin,
//   Truck,
//   ShieldCheck,
//   CreditCard,
//   Loader2,
//   PackageCheck,
//   Home,
//   Phone,
//   Globe,
//   Edit3,
// } from "lucide-react";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const BASE_URL = "https://ecommerce-backend-y1bv.onrender.com";

// const BuyNow = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [placingOrder, setPlacingOrder] = useState(false);
//   const [addressList, setAddressList] = useState([]);
//   const [selectedAddress, setSelectedAddress] = useState(null);
//   const [quantity, setQuantity] = useState(1);
//   const [showPaymentPopup, setShowPaymentPopup] = useState(false);
//   const [selectedMethod, setSelectedMethod] = useState("");

//   // 🛒 Fetch product
//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const res = await fetch(`${BASE_URL}/api/product/${id}`);
//         if (!res.ok) throw new Error("Product not found");
//         const data = await res.json();
//         setProduct(data);
//       } catch {
//         toast.error("⚠️ Failed to load product details");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchProduct();
//   }, [id]);

//   // 🏠 Load stored addresses
//   useEffect(() => {
//     const stored = JSON.parse(localStorage.getItem("userAddresses")) || [];
//     const selected = JSON.parse(localStorage.getItem("selectedAddress"));
//     setAddressList(stored);
//     if (selected) setSelectedAddress(selected);
//   }, []);

//   const handleSelectAddress = (addr) => {
//     setSelectedAddress(addr);
//     localStorage.setItem("selectedAddress", JSON.stringify(addr));
//     toast.success("✅ Address selected successfully");
//   };

//   const handleProceedToPayment = () => {
//     if (!selectedAddress) {
//       toast.warn("⚠ Please select a delivery address!");
//       return;
//     }
//     setShowPaymentPopup(true);
//   };

//   const subtotal = product?.basePrice * quantity || 0;
//   const shipping = subtotal > 500 ? 0 : 49;
//   const tax = Math.round(subtotal * 0.05);
//   const total = subtotal + shipping + tax;

//   if (loading)
//     return (
//       <div className="flex justify-center items-center h-screen text-[#002349] text-lg">
//         <Loader2 className="animate-spin mr-2" /> Loading product details...
//       </div>
//     );

//   return (
//     <div className="min-h-screen bg-[#f4f6fb] text-white px-4 sm:px-8 py-10">
//       <ToastContainer />

//       <div className="w-full max-w-6xl mx-auto bg-white text-gray-800 rounded-3xl shadow-2xl overflow-hidden">
//         {/* Header */}
//         <div className="flex items-center justify-between p-5 sm:p-6 border-b border-gray-200">
//           <button
//             onClick={() => navigate(-1)}
//             className="flex items-center gap-2 text-[#957C3D] hover:underline"
//           >
//             <ArrowLeft size={20} /> Back
//           </button>
//           <h2 className="text-xl sm:text-2xl font-semibold tracking-wide text-[#002349]">
//             Review & Checkout
//           </h2>
//         </div>

//         {/* Progress Tracker */}
//         <div className="flex justify-center items-center gap-3 py-5 bg-[#f9f9f9] flex-wrap">
//           {[
//             { id: 1, label: "Review Order", active: !showPaymentPopup },
//             { id: 2, label: "Payment", active: showPaymentPopup },
//           ].map((step, index) => (
//             <React.Fragment key={step.id}>
//               <div className="flex flex-col items-center">
//                 <div
//                   className={`w-10 h-10 flex items-center justify-center rounded-full font-semibold ${
//                     step.active
//                       ? "bg-[#957C3D] text-white"
//                       : "bg-gray-300 text-gray-600"
//                   }`}
//                 >
//                   {step.id}
//                 </div>
//                 <p
//                   className={`text-xs mt-1 font-medium ${
//                     step.active ? "text-[#957C3D]" : "text-gray-600"
//                   }`}
//                 >
//                   {step.label}
//                 </p>
//               </div>
//               {index === 0 && (
//                 <div className="h-[2px] w-20 sm:w-32 bg-gray-300"></div>
//               )}
//             </React.Fragment>
//           ))}
//         </div>

//         {/* Main Layout */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
//           {/* Left Section */}
//           <div className="lg:col-span-2 space-y-6">
//             {/* Product Section */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               className="border rounded-2xl p-5 bg-[#f8f9fc] shadow-sm hover:shadow-md transition"
//             >
//               <div className="flex flex-col sm:flex-row gap-5">
//                 <img
//                   src={product?.images?.[0] || "https://via.placeholder.com/150"}
//                   alt={product?.name}
//                   className="w-full sm:w-44 h-44 object-cover rounded-xl shadow-sm"
//                 />
//                 <div className="flex-1 space-y-2">
//                   <h3 className="text-lg sm:text-xl font-semibold text-[#002349]">
//                     {product?.name}
//                   </h3>
//                   <p className="text-gray-600 text-sm line-clamp-3">
//                     {product?.description || "No description available"}
//                   </p>
//                   <div className="flex items-center gap-2 mt-2">
//                     <Truck size={18} className="text-green-600" />
//                     <span className="text-green-600 text-sm font-medium">
//                       Free Delivery Available
//                     </span>
//                   </div>
//                   <div className="flex items-center gap-3 mt-3">
//                     <span className="font-medium text-gray-700">Quantity:</span>
//                     <select
//                       value={quantity}
//                       onChange={(e) => setQuantity(Number(e.target.value))}
//                       className="border rounded-lg px-3 py-1 text-gray-700 focus:ring-2 focus:ring-[#957C3D]"
//                     >
//                       {[1, 2, 3, 4, 5].map((qty) => (
//                         <option key={qty} value={qty}>
//                           {qty}
//                         </option>
//                       ))}
//                     </select>
//                   </div>
//                   <p className="text-2xl font-bold text-[#957C3D] mt-2">
//                     ₹{subtotal}
//                   </p>
//                 </div>
//               </div>
//             </motion.div>

//             {/* 🏠 Address Section */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               className="border rounded-2xl p-5 bg-[#f8f9fc] shadow-md hover:shadow-lg transition-all duration-300"
//             >
//               <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-3">
//                 <h2 className="text-lg font-semibold flex items-center gap-2 text-[#002349]">
//                   <MapPin size={20} className="text-[#957C3D]" /> Delivery
//                   Address
//                 </h2>
//                 <motion.button
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   onClick={() => navigate("/address")}
//                   className="px-4 py-2 rounded-lg text-sm font-medium bg-[#002349] text-white hover:bg-[#013a73] transition"
//                 >
//                   + Add / Manage Address
//                 </motion.button>
//               </div>

//               {addressList.length === 0 ? (
//                 <div className="text-center py-6">
//                   <p className="text-gray-500 text-sm italic">
//                     No saved addresses yet. Add a new address to continue.
//                   </p>
//                   <motion.button
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                     onClick={() => navigate(`/address/${id}`)}
//                     className="mt-3 px-6 py-2 bg-[#957C3D] text-white font-semibold rounded-xl shadow hover:bg-[#7b6633] transition"
//                   >
//                     Add New Address
//                   </motion.button>
//                 </div>
//               ) : (
//                 <div className="space-y-4">
//                   {addressList.map((addr, index) => (
//                     <motion.div
//                       key={index}
//                       whileHover={{ scale: 1.02 }}
//                       className={`border rounded-xl p-4 bg-white transition cursor-pointer ${
//                         selectedAddress?.pincode === addr.pincode
//                           ? "border-[#957C3D] bg-[#fff9f3]"
//                           : "border-gray-200"
//                       }`}
//                       onClick={() => handleSelectAddress(addr)}
//                     >
//                       <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
//                         <div className="space-y-1 text-sm text-gray-700">
//                           <h4 className="font-semibold text-[#002349] flex items-center gap-2">
//                             <Home size={16} className="text-[#957C3D]" />{" "}
//                             {addr.name}
//                           </h4>
//                           <p className="flex items-center gap-2 text-sm">
//                             <Phone size={14} className="text-[#957C3D]" />{" "}
//                             {addr.phone}
//                           </p>
//                           <p className="text-gray-600 text-sm leading-relaxed">
//                             {addr.address}, {addr.city}, {addr.state} -{" "}
//                             {addr.pincode}
//                           </p>

//                           {addr.location && (
//                             <a
//                               href={addr.location}
//                               target="_blank"
//                               rel="noopener noreferrer"
//                               className="inline-flex items-center text-xs text-blue-600 mt-2 hover:underline"
//                             >
//                               <Globe size={12} /> View on Map
//                             </a>
//                           )}
//                         </div>

//                         <div className="flex gap-3 mt-3 sm:mt-0">
//                           <button
//                             onClick={(e) => {
//                               e.stopPropagation();
//                               navigate("/address");
//                             }}
//                             className="text-[#002349] hover:text-[#957C3D] transition"
//                           >
//                             <Edit3 size={18} />
//                           </button>
//                           <button
//                             onClick={(e) => {
//                               e.stopPropagation();
//                               const updated = addressList.filter(
//                                 (_, i) => i !== index
//                               );
//                               setAddressList(updated);
//                               localStorage.setItem(
//                                 "userAddresses",
//                                 JSON.stringify(updated)
//                               );
//                               toast.info("🗑️ Address deleted successfully");
//                             }}
//                             className="text-red-500 hover:text-red-700 transition"
//                           >
//                             Delete
//                           </button>
//                         </div>
//                       </div>

//                       <div className="mt-4 flex justify-between items-center flex-wrap gap-2">
//                         <motion.button
//                           whileHover={{ scale: 1.05 }}
//                           whileTap={{ scale: 0.95 }}
//                           onClick={(e) => {
//                             e.stopPropagation();
//                             handleSelectAddress(addr);
//                           }}
//                           className={`px-4 py-2 rounded-lg font-medium w-full sm:w-auto transition ${
//                             selectedAddress?.pincode === addr.pincode
//                               ? "bg-[#002349] text-white"
//                               : "border border-[#002349] text-[#002349] hover:bg-[#002349] hover:text-white"
//                           }`}
//                         >
//                           {selectedAddress?.pincode === addr.pincode
//                             ? "✔ Selected"
//                             : "Deliver Here"}
//                         </motion.button>
//                       </div>
//                     </motion.div>
//                   ))}
//                 </div>
//               )}
//             </motion.div>
//           </div>

//           {/* Order Summary */}
//           <motion.div
//             initial={{ opacity: 0, x: 40 }}
//             animate={{ opacity: 1, x: 0 }}
//             className="bg-[#f8f9fc] border rounded-2xl p-5 sticky top-20 h-fit shadow-sm hover:shadow-md transition"
//           >
//             <h2 className="text-lg font-semibold mb-4 flex items-center gap-2 text-[#002349]">
//               <CreditCard size={20} className="text-[#957C3D]" /> Order Summary
//             </h2>
//             <div className="space-y-2 text-gray-700 text-sm sm:text-base">
//               <div className="flex justify-between">
//                 <span>Subtotal</span>
//                 <span>₹{subtotal}</span>
//               </div>
//               <div className="flex justify-between">
//                 <span>Tax (5%)</span>
//                 <span>₹{tax}</span>
//               </div>
//               <div className="flex justify-between">
//                 <span>Shipping</span>
//                 <span>{shipping === 0 ? "Free" : `₹${shipping}`}</span>
//               </div>
//               <hr className="my-2" />
//               <div className="flex justify-between font-bold text-xl text-[#002349]">
//                 <span>Total</span>
//                 <span>₹{total}</span>
//               </div>
//             </div>

//             <div className="mt-5 flex items-center gap-2 bg-white p-3 rounded-lg border text-sm text-gray-600">
//               <ShieldCheck className="text-[#957C3D]" size={20} />
//               <p>100% Secure Payment (SSL Encrypted)</p>
//             </div>

//             <motion.button
//               whileHover={{ scale: 1.02 }}
//               whileTap={{ scale: 0.97 }}
//               onClick={handleProceedToPayment}
//               disabled={placingOrder}
//               className={`w-full mt-6 py-3 rounded-xl font-semibold text-lg text-white transition-all ${
//                 placingOrder
//                   ? "bg-gray-400 cursor-not-allowed"
//                   : "bg-[#002349] hover:bg-[#013a73]"
//               }`}
//             >
//               Proceed to Payment <PackageCheck className="inline ml-2" />
//             </motion.button>
//           </motion.div>
//         </div>
//       </div>

//       {/* 💳 Payment Popup */}
//       {showPaymentPopup && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4"
//         >
//           <motion.div
//             initial={{ y: 50, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 relative"
//           >
//             <h2 className="text-2xl font-semibold text-[#002349] mb-4 text-center">
//               Secure Payment
//             </h2>
//             <p className="text-gray-600 text-sm text-center mb-5">
//               Choose your payment method
//             </p>

//             <div className="space-y-3">
//               {[
//                 { id: "upi", label: "UPI (GPay / PhonePe / Paytm)" },
//                 { id: "card", label: "Credit / Debit Card" },
//                 { id: "cod", label: "Cash on Delivery" },
//               ].map((method) => (
//                 <motion.div
//                   key={method.id}
//                   whileHover={{ scale: 1.02 }}
//                   onClick={() => setSelectedMethod(method.id)}
//                   className={`p-4 border rounded-xl cursor-pointer flex items-center justify-between transition ${
//                     selectedMethod === method.id
//                       ? "border-[#957C3D] bg-[#fff9f3]"
//                       : "border-gray-300 bg-white"
//                   }`}
//                 >
//                   <span className="text-gray-800 font-medium">
//                     {method.label}
//                   </span>
//                   {selectedMethod === method.id && (
//                     <span className="text-[#957C3D] font-bold text-lg">✔</span>
//                   )}
//                 </motion.div>
//               ))}
//             </div>

//             <div className="mt-6 flex justify-between gap-3">
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="flex-1 py-2 rounded-lg border border-gray-400 text-gray-600 hover:bg-gray-100 transition"
//                 onClick={() => setShowPaymentPopup(false)}
//               >
//                 Cancel
//               </motion.button>

//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 disabled={!selectedMethod}
//                 onClick={() => {
//                   setPlacingOrder(true);
//                   setTimeout(() => {
//                     setPlacingOrder(false);
//                     setShowPaymentPopup(false);
//                     toast.success("✅ Payment successful! Order placed.");
//                     navigate("/orders"); // 👈 Redirect to Order History page
//                   }, 2000);
//                 }}
//                 className={`flex-1 py-2 rounded-lg font-semibold text-white transition ${
//                   selectedMethod
//                     ? "bg-[#002349] hover:bg-[#013a73]"
//                     : "bg-gray-400 cursor-not-allowed"
//                 }`}
//               >
//                 {placingOrder ? (
//                   <span className="flex items-center justify-center gap-2">
//                     <Loader2 className="animate-spin" size={18} /> Processing...
//                   </span>
//                 ) : (
//                   "Pay Now"
//                 )}
//               </motion.button>
//             </div>

//             <button
//               className="absolute top-3 right-4 text-gray-400 hover:text-gray-600"
//               onClick={() => setShowPaymentPopup(false)}
//             >
//               ✕
//             </button>
//           </motion.div>
//         </motion.div>
//       )}
//     </div>
//   );
// };

// export default BuyNow















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
// } from "lucide-react";
// import "react-toastify/dist/ReactToastify.css";

// const BuyNow = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(false);

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
//       } catch (err) {
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
//       } catch (err) {
//         toast.error("Failed to load product details.");
//       }
//     };
//     if (id) fetchProduct();
//   }, [id]);

//   // ✅ Load selected address from localStorage
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

//   // ✅ Submit order
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!formData.userId || !formData.productId)
//       return toast.error("Missing required details.");

//     setLoading(true);
//     try {
//       await fetchWithAuth(
//         "https://ecommerce-backend-y1bv.onrender.com/api/buynow",
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(formData),
//         }
//       );

//       navigate("/orders");
//     } catch (error) {
//       toast.error("Something went wrong while placing your order.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const total = (product?.basePrice || 0) * formData.quantity;
//   const tax = total * 0.05;
//   const grandTotal = total + tax;

//   return (
//     <div className="min-h-screen bg-[#f8fafc] py-10 px-4 text-[#002349]">
//       <ToastContainer position="top-center" autoClose={1500} />

//       {/* 🔙 Back Button */}
//       <button
//         onClick={() => navigate(-1)}
//         className="flex items-center gap-2 mb-6 text-[#002349] font-medium hover:underline"
//       >
//         <ArrowLeft size={18} /> Back
//       </button>

//       {/* 🧾 Review & Checkout Header */}
//       <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-2xl p-8 border border-gray-200">
//         <h2 className="text-2xl font-extrabold text-[#002349] mb-6">
//           Review & Checkout
//         </h2>

//         {/* Stepper */}
//         <div className="flex items-center justify-center mb-10">
//           <div className="flex flex-col items-center">
//             <div className="w-8 h-8 rounded-full bg-[#957C3D] text-white flex items-center justify-center font-bold">
//               1
//             </div>
//             <p className="text-sm mt-2 text-[#002349] font-semibold">
//               Review Order
//             </p>
//           </div>
//           <div className="h-0.5 w-24 bg-gray-300 mx-4"></div>
//           <div className="flex flex-col items-center">
//             <div className="w-8 h-8 rounded-full bg-gray-300 text-white flex items-center justify-center font-bold">
//               2
//             </div>
//             <p className="text-sm mt-2 text-gray-400 font-semibold">Payment</p>
//           </div>
//         </div>

//         {/* Layout: Left - Product Info, Right - Order Summary */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {/* Left Side - Product Info & Address */}
//           <div className="lg:col-span-2 space-y-6">
//             {/* Product Card */}
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

//             {/* Delivery Address */}
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

//           {/* Right Side - Order Summary */}
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

//             <div className="flex items-center gap-2 text-xs text-gray-500 mt-4 border border-gray-100 p-2 rounded-md">
//               <ShieldCheck size={14} className="text-[#957C3D]" />
//               100% Secure Payment (SSL Encrypted)
//             </div>

//             <button
//               onClick={handleSubmit}
//               disabled={loading}
//               className="w-full mt-5 bg-[#002349] hover:bg-[#00172f] text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2 transition disabled:opacity-70"
//             >
//               {loading ? "Processing..." : "Proceed to Payment"}
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BuyNow;















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
// } from "lucide-react";
// import "react-toastify/dist/ReactToastify.css";

// const BuyNow = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [showPaymentModal, setShowPaymentModal] = useState(false);
//   const [selectedMethod, setSelectedMethod] = useState("");

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
//       } catch (err) {
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
//       } catch (err) {
//         toast.error("Failed to load product details.");
//       }
//     };
//     if (id) fetchProduct();
//   }, [id]);

//   // ✅ Load selected address from localStorage
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

//   // ✅ Submit order (used when clicking Pay Now)
//   const handleSubmit = async () => {
//     if (!formData.userId || !formData.productId)
//       return toast.error("Missing required details.");

//     setLoading(true);
//     try {
//       await fetchWithAuth(
//         "https://ecommerce-backend-y1bv.onrender.com/api/buynow",
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(formData),
//         }
//       );

//       navigate("/orders");
//     } catch (error) {
//       toast.error("Something went wrong while placing your order.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const total = (product?.basePrice || 0) * formData.quantity;
//   const tax = total * 0.05;
//   const grandTotal = total + tax;

//   // ✅ Handle "Proceed to Payment" click
//   const handleProceed = () => {
//     setShowPaymentModal(true);
//   };

//   // ✅ Handle payment selection + Pay Now
//   const handlePayNow = async () => {
//     if (!selectedMethod) return toast.error("Please select a payment method.");
//     setFormData((prev) => ({ ...prev, paymentMethod: selectedMethod }));
//     setShowPaymentModal(false);
//     await handleSubmit();
//   };

//   return (
//     <div className="min-h-screen bg-[#f8fafc] py-10 px-4 text-[#002349] relative">
//       <ToastContainer position="top-center" autoClose={1500} />

//       {/* 🔙 Back Button */}
//       <button
//         onClick={() => navigate(-1)}
//         className="flex items-center gap-2 mb-6 text-[#002349] font-medium hover:underline"
//       >
//         <ArrowLeft size={18} /> Back
//       </button>

//       {/* 🧾 Review & Checkout Header */}
//       <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-2xl p-8 border border-gray-200">
//         <h2 className="text-2xl font-extrabold text-[#002349] mb-6">
//           Review & Checkout
//         </h2>

//         {/* Stepper */}
//         <div className="flex items-center justify-center mb-10">
//           <div className="flex flex-col items-center">
//             <div className="w-8 h-8 rounded-full bg-[#957C3D] text-white flex items-center justify-center font-bold">
//               1
//             </div>
//             <p className="text-sm mt-2 text-[#002349] font-semibold">
//               Review Order
//             </p>
//           </div>
//           <div className="h-0.5 w-24 bg-gray-300 mx-4"></div>
//           <div className="flex flex-col items-center">
//             <div className="w-8 h-8 rounded-full bg-gray-300 text-white flex items-center justify-center font-bold">
//               2
//             </div>
//             <p className="text-sm mt-2 text-gray-400 font-semibold">Payment</p>
//           </div>
//         </div>

//         {/* Layout: Left - Product Info, Right - Order Summary */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {/* Left Side - Product Info & Address */}
//           <div className="lg:col-span-2 space-y-6">
//             {/* Product Card */}
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

//             {/* Delivery Address */}
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

//           {/* Right Side - Order Summary */}
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

//             <div className="flex items-center gap-2 text-xs text-gray-500 mt-4 border border-gray-100 p-2 rounded-md">
//               <ShieldCheck size={14} className="text-[#957C3D]" />
//               100% Secure Payment (SSL Encrypted)
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
//                 { id: "UPI", label: "UPI / Google Pay", icon: <Wallet /> },
//                 { id: "CARD", label: "Credit / Debit Card", icon: <CreditCard /> },
//               ].map((method) => (
//                 <button
//                   key={method.id}
//                   onClick={() => setSelectedMethod(method.id)}
//                   className={`w-full flex items-center gap-3 border rounded-lg px-4 py-3 transition ${
//                     selectedMethod === method.id
//                       ? "border-[#957C3D] bg-[#fff8e1]"
//                       : "border-gray-200 hover:bg-gray-100"
//                   }`}
//                 >
//                   {method.icon}
//                   <span className="font-medium">{method.label}</span>
//                 </button>
//               ))}
//             </div>

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
//     </div>
//   );
// };

// export default BuyNow;






















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
// } from "lucide-react";
// import "react-toastify/dist/ReactToastify.css";

// const BuyNow = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [showPaymentModal, setShowPaymentModal] = useState(false);
//   const [selectedMethod, setSelectedMethod] = useState("");

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
//       } catch (err) {
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
//       } catch (err) {
//         toast.error("Failed to load product details.");
//       }
//     };
//     if (id) fetchProduct();
//   }, [id]);

//   // ✅ Load selected address from localStorage
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

//   // ✅ Submit order (used when clicking Pay Now)
//   const handleSubmit = async (paymentType = formData.paymentMethod) => {
//     if (!formData.userId || !formData.productId)
//       return toast.error("Missing required details.");

//     const finalData = { ...formData, paymentMethod: paymentType };

//     setLoading(true);
//     try {
//       await fetchWithAuth(
//         "https://ecommerce-backend-y1bv.onrender.com/api/buynow",
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(finalData),
//         }
//       );

//       navigate("/orders");
//     } catch (error) {
//       toast.error("Something went wrong while placing your order.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const total = (product?.basePrice || 0) * formData.quantity;
//   const tax = total * 0.05;
//   const grandTotal = total + tax;

//   // ✅ Handle "Proceed to Payment" click
//   const handleProceed = () => {
//     setShowPaymentModal(true);
//   };

//   // ✅ Handle payment selection + Pay Now
//   const handlePayNow = async () => {
//     if (!selectedMethod) return toast.error("Please select a payment method.");
//     setFormData((prev) => ({ ...prev, paymentMethod: selectedMethod }));
//     setShowPaymentModal(false);
//     await handleSubmit(selectedMethod);
//   };

//   return (
//     <div className="min-h-screen bg-[#f8fafc] py-10 px-4 text-[#002349] relative">
//       <ToastContainer position="top-center" autoClose={1500} />

//       {/* 🔙 Back Button */}
//       <button
//         onClick={() => navigate(-1)}
//         className="flex items-center gap-2 mb-6 text-[#002349] font-medium hover:underline"
//       >
//         <ArrowLeft size={18} /> Back
//       </button>

//       {/* 🧾 Review & Checkout Header */}
//       <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-2xl p-8 border border-gray-200">
//         <h2 className="text-2xl font-extrabold text-[#002349] mb-6">
//           Review & Checkout
//         </h2>

//         {/* Stepper */}
//         <div className="flex items-center justify-center mb-10">
//           <div className="flex flex-col items-center">
//             <div className="w-8 h-8 rounded-full bg-[#957C3D] text-white flex items-center justify-center font-bold">
//               1
//             </div>
//             <p className="text-sm mt-2 text-[#002349] font-semibold">
//               Review Order
//             </p>
//           </div>
//           <div className="h-0.5 w-24 bg-gray-300 mx-4"></div>
//           <div className="flex flex-col items-center">
//             <div className="w-8 h-8 rounded-full bg-gray-300 text-white flex items-center justify-center font-bold">
//               2
//             </div>
//             <p className="text-sm mt-2 text-gray-400 font-semibold">Payment</p>
//           </div>
//         </div>

//         {/* Layout: Left - Product Info, Right - Order Summary */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {/* Left Side - Product Info & Address */}
//           <div className="lg:col-span-2 space-y-6">
//             {/* Product Card */}
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

//             {/* Delivery Address */}
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

//           {/* Right Side - Order Summary */}
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

//             <div className="flex items-center gap-2 text-xs text-gray-500 mt-4 border border-gray-100 p-2 rounded-md">
//               <ShieldCheck size={14} className="text-[#957C3D]" />
//               100% Secure Payment (SSL Encrypted)
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
//                 { id: "UPI", label: "UPI / Google Pay", icon: <Wallet /> },
//                 { id: "CARD", label: "Credit / Debit Card", icon: <CreditCard /> },
//               ].map((method) => (
//                 <button
//                   key={method.id}
//                   onClick={() => setSelectedMethod(method.id)}
//                   className={`w-full flex items-center gap-3 border rounded-lg px-4 py-3 transition ${
//                     selectedMethod === method.id
//                       ? "border-[#957C3D] bg-[#fff8e1]"
//                       : "border-gray-200 hover:bg-gray-100"
//                   }`}
//                 >
//                   {method.icon}
//                   <span className="font-medium">{method.label}</span>
//                 </button>
//               ))}
//             </div>

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
//     </div>
//   );
// };

// export default BuyNow;


























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

  // ✅ Fetch product details
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(
          `https://ecommerce-backend-y1bv.onrender.com/api/product/${id}`
        );
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

  // ✅ Handle input
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

  // ✅ Submit order
  const handleSubmit = async (paymentType = formData.paymentMethod) => {
    if (!formData.userId || !formData.productId)
      return toast.error("Missing required details.");

    const finalData = { ...formData, paymentMethod: paymentType };

    setLoading(true);
    try {
      await fetchWithAuth(
        "https://ecommerce-backend-y1bv.onrender.com/api/buynow",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(finalData),
        }
      );
      setPaymentSuccess(true);
      setTimeout(() => navigate("/orders"), 2000);
    } catch {
      toast.error("Something went wrong while placing your order.");
    } finally {
      setLoading(false);
    }
  };

  const total = (product?.basePrice || 0) * formData.quantity;
  const tax = total * 0.05;
  const grandTotal = total + tax;

  const ownerUpiId = "owner@upi";
  const qrCodeImage = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=upi://pay?pa=${ownerUpiId}&pn=Ecommerce+Store&am=${grandTotal}`;

  const handleProceed = () => {
    setShowPaymentModal(true);
  };

  // ✅ Handle payment
  const handlePayNow = async () => {
    if (!selectedMethod) return toast.error("Please select a payment method.");

    if (selectedMethod === "UPI") {
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

      {/* 🔙 Back Button */}
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

        {/* Stepper */}
        <div className="flex items-center justify-center mb-10">
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 rounded-full bg-[#957C3D] text-white flex items-center justify-center font-bold">
              1
            </div>
            <p className="text-sm mt-2 text-[#002349] font-semibold">
              Review Order
            </p>
          </div>
          <div className="h-0.5 w-24 bg-gray-300 mx-4"></div>
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 rounded-full bg-gray-300 text-white flex items-center justify-center font-bold">
              2
            </div>
            <p className="text-sm mt-2 text-gray-400 font-semibold">Payment</p>
          </div>
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* LEFT SIDE */}
          <div className="lg:col-span-2 space-y-6">
            {/* Product */}
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

            {/* Address */}
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

          {/* RIGHT SIDE */}
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

            <div className="flex items-center gap-2 text-xs text-gray-500 mt-4 border border-gray-100 p-2 rounded-md">
              <ShieldCheck size={14} className="text-[#957C3D]" />
              100% Secure Payment (SSL Encrypted)
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
                { id: "UPI", label: "UPI / Google Pay", icon: <Wallet /> },
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

            {/* ✅ UPI Details */}
            {selectedMethod === "UPI" && (
              <div className="mt-5 border-t pt-4">
                <h3 className="text-sm font-semibold flex items-center gap-2 mb-3">
                  <QrCode className="text-[#957C3D]" /> Scan & Pay via UPI
                </h3>
                <div className="flex flex-col items-center">
                  <img
                    src={qrCodeImage}
                    alt="UPI QR"
                    className="w-40 h-40 border rounded-lg shadow-md"
                  />
                  <p className="mt-3 font-semibold text-[#002349]">
                    UPI ID:{" "}
                    <span className="text-[#957C3D]">{ownerUpiId}</span>
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
