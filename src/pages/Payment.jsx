// import React, { useState } from "react";
// import { CreditCard, Home, ShoppingBag, Smartphone, Wallet, Truck } from "lucide-react";

// function Payment() {
//   const [selectedMethod, setSelectedMethod] = useState("card");
//   const [cardDetails, setCardDetails] = useState({
//     name: "",
//     number: "",
//     expiry: "",
//     cvv: "",
//   });

//   const handleInputChange = (e) => {
//     setCardDetails({ ...cardDetails, [e.target.name]: e.target.value });
//   };

//   const handlePayment = (e) => {
//     e.preventDefault();
//     alert("Payment processed successfully! ✅");
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 py-10 px-4 text-[#002349]">
//       <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
//         {/* LEFT: Address & Payment */}
//         <div className="lg:col-span-2 space-y-6">
//           {/* DELIVERY ADDRESS */}
//           <div className="bg-white p-6 rounded-2xl shadow-md">
//             <h2 className="text-xl font-bold flex items-center gap-2 mb-4">
//               <Home className="text-[#957C3D]" /> Delivery Address
//             </h2>
//             <div className="text-gray-700 leading-relaxed">
//               <p className="font-semibold">John Doe</p>
//               <p>123 MG Road, Indiranagar</p>
//               <p>Bengaluru, Karnataka 560038</p>
//               <p>India</p>
//               <p className="mt-1 font-medium">Phone: +91 9876543210</p>
//             </div>
//           </div>

//           {/* PAYMENT METHOD */}
//           <div className="bg-white p-6 rounded-2xl shadow-md">
//             <h2 className="text-xl font-bold flex items-center gap-2 mb-4">
//               <Wallet className="text-[#957C3D]" /> Select Payment Method
//             </h2>
//             <div className="space-y-4">
//               <label className="flex items-center gap-3 cursor-pointer border rounded-lg p-3 hover:bg-gray-50 transition">
//                 <input
//                   type="radio"
//                   name="payment"
//                   checked={selectedMethod === "card"}
//                   onChange={() => setSelectedMethod("card")}
//                 />
//                 <div className="flex items-center gap-2">
//                   <CreditCard className="text-[#957C3D]" /> Credit / Debit Card
//                 </div>
//               </label>

//               <label className="flex items-center gap-3 cursor-pointer border rounded-lg p-3 hover:bg-gray-50 transition">
//                 <input
//                   type="radio"
//                   name="payment"
//                   checked={selectedMethod === "upi"}
//                   onChange={() => setSelectedMethod("upi")}
//                 />
//                 <div className="flex items-center gap-2">
//                   <Smartphone className="text-[#957C3D]" /> UPI (Google Pay, PhonePe, Paytm)
//                 </div>
//               </label>

//               <label className="flex items-center gap-3 cursor-pointer border rounded-lg p-3 hover:bg-gray-50 transition">
//                 <input
//                   type="radio"
//                   name="payment"
//                   checked={selectedMethod === "cod"}
//                   onChange={() => setSelectedMethod("cod")}
//                 />
//                 <div className="flex items-center gap-2">
//                   <Truck className="text-[#957C3D]" /> Cash on Delivery (COD)
//                 </div>
//               </label>
//             </div>
//           </div>

//           {/* CARD DETAILS */}
//           {selectedMethod === "card" && (
//             <form
//               onSubmit={handlePayment}
//               className="bg-white p-6 rounded-2xl shadow-md space-y-4"
//             >
//               <h2 className="text-lg font-semibold flex items-center gap-2 mb-2">
//                 <CreditCard className="text-[#957C3D]" /> Card Details
//               </h2>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div>
//                   <label className="text-sm font-medium">Cardholder Name</label>
//                   <input
//                     type="text"
//                     name="name"
//                     value={cardDetails.name}
//                     onChange={handleInputChange}
//                     required
//                     className="w-full border rounded-md p-2 mt-1 outline-none focus:ring-2 focus:ring-[#957C3D]"
//                   />
//                 </div>
//                 <div>
//                   <label className="text-sm font-medium">Card Number</label>
//                   <input
//                     type="text"
//                     name="number"
//                     value={cardDetails.number}
//                     onChange={handleInputChange}
//                     maxLength="16"
//                     required
//                     className="w-full border rounded-md p-2 mt-1 outline-none focus:ring-2 focus:ring-[#957C3D]"
//                   />
//                 </div>
//                 <div>
//                   <label className="text-sm font-medium">Expiry Date</label>
//                   <input
//                     type="text"
//                     name="expiry"
//                     value={cardDetails.expiry}
//                     onChange={handleInputChange}
//                     placeholder="MM/YY"
//                     required
//                     className="w-full border rounded-md p-2 mt-1 outline-none focus:ring-2 focus:ring-[#957C3D]"
//                   />
//                 </div>
//                 <div>
//                   <label className="text-sm font-medium">CVV</label>
//                   <input
//                     type="password"
//                     name="cvv"
//                     value={cardDetails.cvv}
//                     onChange={handleInputChange}
//                     maxLength="3"
//                     required
//                     className="w-full border rounded-md p-2 mt-1 outline-none focus:ring-2 focus:ring-[#957C3D]"
//                   />
//                 </div>
//               </div>
//               <button
//                 type="submit"
//                 className="w-full bg-[#957C3D] text-white py-3 mt-4 rounded-lg font-semibold hover:bg-[#7b6533] transition"
//               >
//                 Pay Securely ₹1,299
//               </button>
//             </form>
//           )}

//           {/* UPI DETAILS */}
//           {selectedMethod === "upi" && (
//             <div className="bg-white p-6 rounded-2xl shadow-md">
//               <h2 className="text-lg font-semibold flex items-center gap-2 mb-3">
//                 <Smartphone className="text-[#957C3D]" /> UPI Payment
//               </h2>
//               <input
//                 type="text"
//                 placeholder="Enter your UPI ID (e.g., user@okhdfcbank)"
//                 className="w-full border rounded-md p-2 mt-1 outline-none focus:ring-2 focus:ring-[#957C3D]"
//               />
//               <button
//                 onClick={handlePayment}
//                 className="w-full bg-[#957C3D] text-white py-3 mt-4 rounded-lg font-semibold hover:bg-[#7b6533] transition"
//               >
//                 Pay ₹1,299 via UPI
//               </button>
//             </div>
//           )}

//           {/* COD DETAILS */}
//           {selectedMethod === "cod" && (
//             <div className="bg-white p-6 rounded-2xl shadow-md">
//               <h2 className="text-lg font-semibold flex items-center gap-2 mb-3">
//                 <Truck className="text-[#957C3D]" /> Cash on Delivery
//               </h2>
//               <p className="text-gray-700 mb-4">
//                 Pay in cash upon receiving your order at the doorstep.
//               </p>
//               <button
//                 onClick={handlePayment}
//                 className="w-full bg-[#957C3D] text-white py-3 rounded-lg font-semibold hover:bg-[#7b6533] transition"
//               >
//                 Place Order
//               </button>
//             </div>
//           )}
//         </div>

//         {/* RIGHT: ORDER SUMMARY */}
//         <div className="bg-white p-6 rounded-2xl shadow-md h-fit">
//           <h2 className="text-xl font-bold flex items-center gap-2 mb-4">
//             <ShoppingBag className="text-[#957C3D]" /> Order Summary
//           </h2>
//           <div className="divide-y divide-gray-200">
//             <div className="flex justify-between py-2">
//               <p>Subtotal</p>
//               <p>₹1,099</p>
//             </div>
//             <div className="flex justify-between py-2">
//               <p>Shipping</p>
//               <p>₹100</p>
//             </div>
//             <div className="flex justify-between py-2">
//               <p>Taxes</p>
//               <p>₹100</p>
//             </div>
//             <div className="flex justify-between py-3 font-semibold text-lg">
//               <p>Total</p>
//               <p>₹1,299</p>
//             </div>
//           </div>

//           <div className="border-t pt-4 mt-4">
//             <p className="text-sm text-gray-600 mb-2">
//               Delivery expected by <span className="font-semibold">Nov 8 - Nov 10</span>
//             </p>
//             <button
//               onClick={handlePayment}
//               className="w-full bg-[#957C3D] text-white py-3 rounded-lg font-semibold hover:bg-[#7b6533] transition"
//             >
//               Proceed to Pay ₹1,299
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Payment;























// import React, { useState } from "react";
// import { CreditCard, Home, ShoppingBag, Smartphone, Wallet, Truck, QrCode } from "lucide-react";

// function Payment() {
//   const [selectedMethod, setSelectedMethod] = useState("upi");

//   const handlePayment = (e) => {
//     e.preventDefault();
//     alert("Payment processed successfully! ✅");
//   };

//   const ownerUpiId = "owner@upi";
//   const qrCodeImage =
//     "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=upi://pay?pa=owner@upi&pn=Ecommerce+Store&am=1299";

//   return (
//     <div className="min-h-screen bg-gray-100 py-10 px-4 text-[#002349]">
//       <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
//         {/* LEFT: Address & Payment */}
//         <div className="lg:col-span-2 space-y-6">
//           {/* DELIVERY ADDRESS */}
//           <div className="bg-white p-6 rounded-2xl shadow-md">
//             <h2 className="text-xl font-bold flex items-center gap-2 mb-4">
//               <Home className="text-[#957C3D]" /> Delivery Address
//             </h2>
//             <div className="text-gray-700 leading-relaxed">
//               <p className="font-semibold">John Doe</p>
//               <p>123 MG Road, Indiranagar</p>
//               <p>Bengaluru, Karnataka 560038</p>
//               <p>India</p>
//               <p className="mt-1 font-medium">Phone: +91 9876543210</p>
//             </div>
//           </div>

//           {/* PAYMENT METHOD */}
//           <div className="bg-white p-6 rounded-2xl shadow-md">
//             <h2 className="text-xl font-bold flex items-center gap-2 mb-4">
//               <Wallet className="text-[#957C3D]" /> Select Payment Method
//             </h2>
//             <div className="space-y-4">
//               {/* CARD OPTION (DISABLED) */}
//               <label className="flex items-center gap-3 cursor-not-allowed border rounded-lg p-3 bg-gray-100 text-gray-400">
//                 <input type="radio" name="payment" disabled />
//                 <div className="flex items-center gap-2">
//                   <CreditCard className="text-gray-400" /> Credit / Debit Card (Disabled)
//                 </div>
//               </label>

//               {/* UPI OPTION */}
//               <label className="flex items-center gap-3 cursor-pointer border rounded-lg p-3 hover:bg-gray-50 transition">
//                 <input
//                   type="radio"
//                   name="payment"
//                   checked={selectedMethod === "upi"}
//                   onChange={() => setSelectedMethod("upi")}
//                 />
//                 <div className="flex items-center gap-2">
//                   <Smartphone className="text-[#957C3D]" /> UPI (Google Pay, PhonePe, Paytm)
//                 </div>
//               </label>

//               {/* COD OPTION */}
//               <label className="flex items-center gap-3 cursor-pointer border rounded-lg p-3 hover:bg-gray-50 transition">
//                 <input
//                   type="radio"
//                   name="payment"
//                   checked={selectedMethod === "cod"}
//                   onChange={() => setSelectedMethod("cod")}
//                 />
//                 <div className="flex items-center gap-2">
//                   <Truck className="text-[#957C3D]" /> Cash on Delivery (COD)
//                 </div>
//               </label>
//             </div>
//           </div>

//           {/* UPI DETAILS (with QR + UPI ID) */}
//           {selectedMethod === "upi" && (
//             <div className="bg-white p-6 rounded-2xl shadow-md text-center">
//               <h2 className="text-lg font-semibold flex items-center justify-center gap-2 mb-3">
//                 <QrCode className="text-[#957C3D]" /> Scan & Pay via UPI
//               </h2>
//               <p className="text-gray-700 mb-4">
//                 Scan the QR code below or pay manually using the UPI ID.
//               </p>

//               <div className="flex flex-col items-center">
//                 <img
//                   src={qrCodeImage}
//                   alt="UPI QR Code"
//                   className="w-48 h-48 border rounded-lg shadow-sm"
//                 />
//                 <p className="mt-3 font-semibold text-[#002349]">UPI ID:</p>
//                 <p className="text-[#957C3D] font-bold text-lg">{ownerUpiId}</p>
//               </div>

//               <button
//                 onClick={handlePayment}
//                 className="w-full bg-[#957C3D] text-white py-3 mt-6 rounded-lg font-semibold hover:bg-[#7b6533] transition"
//               >
//                 I’ve Paid ₹1,299
//               </button>
//             </div>
//           )}

//           {/* COD DETAILS */}
//           {selectedMethod === "cod" && (
//             <div className="bg-white p-6 rounded-2xl shadow-md">
//               <h2 className="text-lg font-semibold flex items-center gap-2 mb-3">
//                 <Truck className="text-[#957C3D]" /> Cash on Delivery
//               </h2>
//               <p className="text-gray-700 mb-4">
//                 Pay in cash upon receiving your order at the doorstep.
//               </p>
//               <button
//                 onClick={handlePayment}
//                 className="w-full bg-[#957C3D] text-white py-3 rounded-lg font-semibold hover:bg-[#7b6533] transition"
//               >
//                 Place Order
//               </button>
//             </div>
//           )}
//         </div>

//         {/* RIGHT: ORDER SUMMARY */}
//         <div className="bg-white p-6 rounded-2xl shadow-md h-fit">
//           <h2 className="text-xl font-bold flex items-center gap-2 mb-4">
//             <ShoppingBag className="text-[#957C3D]" /> Order Summary
//           </h2>
//           <div className="divide-y divide-gray-200">
//             <div className="flex justify-between py-2">
//               <p>Subtotal</p>
//               <p>₹1,099</p>
//             </div>
//             <div className="flex justify-between py-2">
//               <p>Shipping</p>
//               <p>₹100</p>
//             </div>
//             <div className="flex justify-between py-2">
//               <p>Taxes</p>
//               <p>₹100</p>
//             </div>
//             <div className="flex justify-between py-3 font-semibold text-lg">
//               <p>Total</p>
//               <p>₹1,299</p>
//             </div>
//           </div>

//           <div className="border-t pt-4 mt-4">
//             <p className="text-sm text-gray-600 mb-2">
//               Delivery expected by <span className="font-semibold">Nov 8 - Nov 10</span>
//             </p>
//             <button
//               onClick={handlePayment}
//               className="w-full bg-[#957C3D] text-white py-3 rounded-lg font-semibold hover:bg-[#7b6533] transition"
//             >
//               Proceed to Pay ₹1,299
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Payment;





















// import React, { useState } from "react";
// import {
//   CreditCard,
//   Home,
//   ShoppingBag,
//   Smartphone,
//   Wallet,
//   Truck,
//   QrCode,
//   CheckCircle,
// } from "lucide-react";

// function Payment() {
//   const [selectedMethod, setSelectedMethod] = useState("upi");
//   const [transactionId, setTransactionId] = useState("");
//   const [amount, setAmount] = useState("1299");
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const ownerUpiId = "owner@upi";
//   const qrCodeImage = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=upi://pay?pa=${ownerUpiId}&pn=Ecommerce+Store&am=${amount}`;

//   const handlePayment = (e) => {
//     e.preventDefault();
//     if (selectedMethod === "upi") {
//       if (!transactionId || !amount) {
//         alert("⚠️ Please enter Transaction ID and Amount after payment.");
//         return;
//       }
//       setIsSubmitted(true);
//       alert("✅ Payment details submitted successfully!");
//     } else {
//       alert("Payment processed successfully! ✅");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 py-10 px-4 text-[#002349]">
//       <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
//         {/* LEFT SECTION: Address & Payment */}
//         <div className="lg:col-span-2 space-y-6">
//           {/* DELIVERY ADDRESS */}
//           <div className="bg-white p-6 rounded-2xl shadow-md">
//             <h2 className="text-xl font-bold flex items-center gap-2 mb-4">
//               <Home className="text-[#957C3D]" /> Delivery Address
//             </h2>
//             <div className="text-gray-700 leading-relaxed">
//               <p className="font-semibold">John Doe</p>
//               <p>123 MG Road, Indiranagar</p>
//               <p>Bengaluru, Karnataka 560038</p>
//               <p>India</p>
//               <p className="mt-1 font-medium">Phone: +91 9876543210</p>
//             </div>
//           </div>

//           {/* PAYMENT METHOD */}
//           <div className="bg-white p-6 rounded-2xl shadow-md">
//             <h2 className="text-xl font-bold flex items-center gap-2 mb-4">
//               <Wallet className="text-[#957C3D]" /> Select Payment Method
//             </h2>
//             <div className="space-y-4">
//               {/* CARD (DISABLED) */}
//               <label className="flex items-center gap-3 border rounded-lg p-3 bg-gray-100 text-gray-400 cursor-not-allowed">
//                 <input type="radio" name="payment" disabled />
//                 <div className="flex items-center gap-2">
//                   <CreditCard className="text-gray-400" /> Credit / Debit Card (Disabled)
//                 </div>
//               </label>

//               {/* UPI */}
//               <label className="flex items-center gap-3 cursor-pointer border rounded-lg p-3 hover:bg-gray-50 transition">
//                 <input
//                   type="radio"
//                   name="payment"
//                   checked={selectedMethod === "upi"}
//                   onChange={() => setSelectedMethod("upi")}
//                 />
//                 <div className="flex items-center gap-2">
//                   <Smartphone className="text-[#957C3D]" /> UPI (Google Pay, PhonePe, Paytm)
//                 </div>
//               </label>

//               {/* COD */}
//               <label className="flex items-center gap-3 cursor-pointer border rounded-lg p-3 hover:bg-gray-50 transition">
//                 <input
//                   type="radio"
//                   name="payment"
//                   checked={selectedMethod === "cod"}
//                   onChange={() => setSelectedMethod("cod")}
//                 />
//                 <div className="flex items-center gap-2">
//                   <Truck className="text-[#957C3D]" /> Cash on Delivery (COD)
//                 </div>
//               </label>
//             </div>
//           </div>

//           {/* UPI DETAILS */}
//           {selectedMethod === "upi" && (
//             <div className="bg-white p-6 rounded-2xl shadow-md text-center">
//               <h2 className="text-lg font-semibold flex items-center justify-center gap-2 mb-3">
//                 <QrCode className="text-[#957C3D]" /> Scan & Pay via UPI
//               </h2>
//               <p className="text-gray-700 mb-4">
//                 Scan the QR code below or pay manually using the UPI ID.
//               </p>

//               <div className="flex flex-col items-center bg-gray-50 p-4 rounded-xl border shadow-sm">
//                 <img
//                   src={qrCodeImage}
//                   alt="UPI QR Code"
//                   className="w-48 h-48 border rounded-lg shadow-sm"
//                 />
//                 <p className="mt-3 font-semibold text-[#002349]">UPI ID:</p>
//                 <p className="text-[#957C3D] font-bold text-lg">{ownerUpiId}</p>
//               </div>

//               {/* AFTER PAYMENT INPUTS */}
//               <div className="mt-6 text-left">
//                 <label className="block text-sm font-medium mb-1">
//                   Transaction ID (from UPI App)
//                 </label>
//                 <input
//                   type="text"
//                   value={transactionId}
//                   onChange={(e) => setTransactionId(e.target.value)}
//                   placeholder="Enter UPI Transaction ID"
//                   className="w-full border rounded-md p-2 mb-4 outline-none focus:ring-2 focus:ring-[#957C3D]"
//                 />

//                 <label className="block text-sm font-medium mb-1">Amount Paid (₹)</label>
//                 <input
//                   type="number"
//                   value={amount}
//                   onChange={(e) => setAmount(e.target.value)}
//                   placeholder="Enter Amount Paid"
//                   className="w-full border rounded-md p-2 outline-none focus:ring-2 focus:ring-[#957C3D]"
//                 />

//                 <button
//                   onClick={handlePayment}
//                   className="w-full bg-[#957C3D] text-white py-3 mt-6 rounded-lg font-semibold hover:bg-[#7b6533] transition flex items-center justify-center gap-2"
//                 >
//                   <CheckCircle size={18} /> Submit Payment
//                 </button>

//                 {isSubmitted && (
//                   <p className="text-green-600 text-center font-medium mt-3">
//                     ✅ Payment confirmed. Thank you for your purchase!
//                   </p>
//                 )}
//               </div>
//             </div>
//           )}

//           {/* COD DETAILS */}
//           {selectedMethod === "cod" && (
//             <div className="bg-white p-6 rounded-2xl shadow-md">
//               <h2 className="text-lg font-semibold flex items-center gap-2 mb-3">
//                 <Truck className="text-[#957C3D]" /> Cash on Delivery
//               </h2>
//               <p className="text-gray-700 mb-4">
//                 Pay in cash upon receiving your order at the doorstep.
//               </p>
//               <button
//                 onClick={handlePayment}
//                 className="w-full bg-[#957C3D] text-white py-3 rounded-lg font-semibold hover:bg-[#7b6533] transition"
//               >
//                 Place Order
//               </button>
//             </div>
//           )}
//         </div>

//         {/* RIGHT: ORDER SUMMARY */}
//         <div className="bg-white p-6 rounded-2xl shadow-md h-fit">
//           <h2 className="text-xl font-bold flex items-center gap-2 mb-4">
//             <ShoppingBag className="text-[#957C3D]" /> Order Summary
//           </h2>
//           <div className="divide-y divide-gray-200">
//             <div className="flex justify-between py-2">
//               <p>Subtotal</p>
//               <p>₹1,099</p>
//             </div>
//             <div className="flex justify-between py-2">
//               <p>Shipping</p>
//               <p>₹100</p>
//             </div>
//             <div className="flex justify-between py-2">
//               <p>Taxes</p>
//               <p>₹100</p>
//             </div>
//             <div className="flex justify-between py-3 font-semibold text-lg">
//               <p>Total</p>
//               <p>₹{amount}</p>
//             </div>
//           </div>

//           <div className="border-t pt-4 mt-4">
//             <p className="text-sm text-gray-600 mb-2">
//               Delivery expected by <span className="font-semibold">Nov 8 - Nov 10</span>
//             </p>
//             <button
//               onClick={handlePayment}
//               className="w-full bg-[#957C3D] text-white py-3 rounded-lg font-semibold hover:bg-[#7b6533] transition"
//             >
//               Proceed to Pay ₹{amount}
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Payment;


















import React, { useState } from "react";
import {
  CreditCard,
  Home,
  ShoppingBag,
  Smartphone,
  Wallet,
  Truck,
  QrCode,
  CheckCircle,
} from "lucide-react";

function Payment() {
  const [selectedMethod, setSelectedMethod] = useState("upi");
  const [transactionId, setTransactionId] = useState("");
  const [amountPaid, setAmountPaid] = useState("");
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handlePayment = (e) => {
    e.preventDefault();

    if (selectedMethod === "upi") {
      if (!transactionId.trim() || !amountPaid.trim()) {
        alert("⚠️ Please enter both Transaction ID and Amount Paid to proceed.");
        return;
      }
    }

    setPaymentSuccess(true);
    setTimeout(() => {
      alert("✅ Payment processed successfully!");
      setPaymentSuccess(false);
    }, 1500);
  };

  const ownerUpiId = "owner@upi";
  const qrCodeImage = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=upi://pay?pa=${ownerUpiId}&pn=Ecommerce+Store&am=1299`;

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 text-[#002349]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* LEFT SECTION */}
        <div className="lg:col-span-2 space-y-6">
          {/* DELIVERY ADDRESS */}
          <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
            <h2 className="text-xl font-bold flex items-center gap-2 mb-4">
              <Home className="text-[#957C3D]" /> Delivery Address
            </h2>
            <div className="text-gray-700 leading-relaxed">
              <p className="font-semibold">John Doe</p>
              <p>123 MG Road, Indiranagar</p>
              <p>Bengaluru, Karnataka 560038</p>
              <p>India</p>
              <p className="mt-1 font-medium">📞 +91 9876543210</p>
            </div>
          </div>

          {/* PAYMENT METHOD */}
          <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
            <h2 className="text-xl font-bold flex items-center gap-2 mb-4">
              <Wallet className="text-[#957C3D]" /> Select Payment Method
            </h2>
            <div className="space-y-3">
              {/* CARD (DISABLED) */}
              <label className="flex items-center gap-3 cursor-not-allowed border rounded-lg p-3 bg-gray-100 text-gray-400">
                <input type="radio" name="payment" disabled />
                <CreditCard className="text-gray-400" />
                Credit / Debit Card (Coming Soon)
              </label>

              {/* UPI */}
              <label className="flex items-center gap-3 cursor-pointer border rounded-lg p-3 hover:bg-gray-50 transition">
                <input
                  type="radio"
                  name="payment"
                  checked={selectedMethod === "upi"}
                  onChange={() => setSelectedMethod("upi")}
                />
                <Smartphone className="text-[#957C3D]" />
                UPI (Google Pay, PhonePe, Paytm)
              </label>

              {/* COD */}
              <label className="flex items-center gap-3 cursor-pointer border rounded-lg p-3 hover:bg-gray-50 transition">
                <input
                  type="radio"
                  name="payment"
                  checked={selectedMethod === "cod"}
                  onChange={() => setSelectedMethod("cod")}
                />
                <Truck className="text-[#957C3D]" /> Cash on Delivery (COD)
              </label>
            </div>
          </div>

          {/* UPI SECTION */}
          {selectedMethod === "upi" && (
            <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
              <h2 className="text-lg font-semibold flex items-center gap-2 mb-3">
                <QrCode className="text-[#957C3D]" /> Scan & Pay via UPI
              </h2>
              <p className="text-gray-700 mb-4">
                Scan the QR code below or send payment to the provided UPI ID.
              </p>

              <div className="flex flex-col items-center mb-6">
                <img
                  src={qrCodeImage}
                  alt="UPI QR"
                  className="w-48 h-48 border rounded-lg shadow-md"
                />
                <p className="mt-3 font-semibold text-[#002349]">UPI ID:</p>
                <p className="text-[#957C3D] font-bold text-lg">{ownerUpiId}</p>
              </div>

              {/* INPUT FIELDS */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Transaction ID
                  </label>
                  <input
                    type="text"
                    placeholder="Enter UPI Transaction ID"
                    value={transactionId}
                    onChange={(e) => setTransactionId(e.target.value)}
                    className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#957C3D] transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Amount Paid (₹)
                  </label>
                  <input
                    type="number"
                    placeholder="Enter Amount"
                    value={amountPaid}
                    onChange={(e) => setAmountPaid(e.target.value)}
                    className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#957C3D] transition"
                  />
                </div>
              </div>

              <button
                onClick={handlePayment}
                className="w-full bg-[#957C3D] text-white py-3 rounded-lg font-semibold hover:bg-[#7b6533] transition"
              >
                Confirm Payment
              </button>
            </div>
          )}

          {/* COD SECTION */}
          {selectedMethod === "cod" && (
            <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
              <h2 className="text-lg font-semibold flex items-center gap-2 mb-3">
                <Truck className="text-[#957C3D]" /> Cash on Delivery
              </h2>
              <p className="text-gray-700 mb-4">
                Pay with cash once your order arrives at your doorstep.
              </p>
              <button
                onClick={handlePayment}
                className="w-full bg-[#957C3D] text-white py-3 rounded-lg font-semibold hover:bg-[#7b6533] transition"
              >
                Place Order
              </button>
            </div>
          )}
        </div>

        {/* RIGHT SECTION: ORDER SUMMARY */}
        <div className="bg-white p-6 rounded-2xl shadow-md h-fit border border-gray-100">
          <h2 className="text-xl font-bold flex items-center gap-2 mb-4">
            <ShoppingBag className="text-[#957C3D]" /> Order Summary
          </h2>
          <div className="divide-y divide-gray-200 text-gray-700">
            <div className="flex justify-between py-2">
              <p>Subtotal</p>
              <p>₹1,099</p>
            </div>
            <div className="flex justify-between py-2">
              <p>Shipping</p>
              <p>₹100</p>
            </div>
            <div className="flex justify-between py-2">
              <p>Taxes</p>
              <p>₹100</p>
            </div>
            <div className="flex justify-between py-3 font-semibold text-lg">
              <p>Total</p>
              <p>₹1,299</p>
            </div>
          </div>

          <div className="border-t pt-4 mt-4">
            <p className="text-sm text-gray-600 mb-2">
              Delivery expected by{" "}
              <span className="font-semibold">Nov 8 - Nov 10</span>
            </p>
            <button
              onClick={handlePayment}
              className="w-full bg-[#957C3D] text-white py-3 rounded-lg font-semibold hover:bg-[#7b6533] transition"
            >
              Proceed to Pay ₹1,299
            </button>
          </div>
        </div>
      </div>

      {/* SUCCESS POPUP */}
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
}

export default Payment;
