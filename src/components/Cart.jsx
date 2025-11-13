// // import React, { useEffect, useState } from "react";
// // import { fetchWithAuth } from "../refreshtoken/api";
// // import { Link } from "react-router-dom";

// // function Cart() {
// //   const [cart, setCart] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState("");
// //   const [total, setTotal] = useState(0);

// //   const API_BASE = "https://ecommerce-backend-y1bv.onrender.com/api/cart";

// //   // ✅ Fetch cart data
// //   const fetchCart = async () => {
// //     try {
// //       const data = await fetchWithAuth(API_BASE, { method: "GET" });

// //       if (data?.cart) {
// //         setCart(data.cart);
// //         const totalAmount = data.cart.reduce(
// //           (sum, item) => sum + (item.product?.basePrice || 0) * item.quantity,
// //           0
// //         );
// //         setTotal(totalAmount);
// //       } else {
// //         setCart([]);
// //       }
// //     } catch (err) {
// //       console.error("Failed to fetch cart:", err);
// //       setError(err.message || "Something went wrong");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   useEffect(() => {
// //     fetchCart();
// //   }, []);

// //   if (loading)
// //     return <p className="text-center mt-6 text-gray-600">Loading cart...</p>;
// //   if (error)
// //     return <p className="text-center text-red-500 mt-6">{error}</p>;

// //   return (
// //     <div className="max-w-7xl mx-auto mt-10 px-4">
// //       {/* Header */}
// //       <div className="flex justify-between items-center mb-8">
// //         <h1 className="text-3xl font-bold text-gray-800">🛒 My Cart</h1>
// //         {cart.length > 0 && (
// //           <p className="text-2xl font-semibold text-gray-700">
// //             Total: ₹{total.toFixed(2)}
// //           </p>
// //         )}
// //       </div>

// //       {/* Empty Cart */}
// //       {cart.length === 0 ? (
// //         <div className="text-center text-gray-500 mt-20">
// //           <p className="text-lg">Your cart is empty.</p>
// //           <Link
// //             to="/"
// //             className="inline-block mt-4 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white px-6 py-3 rounded-xl font-medium shadow-md transition-all duration-300"
// //           >
// //             Continue Shopping
// //           </Link>
// //         </div>
// //       ) : (
// //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
// //           {cart.map((item) => (
// //             <div
// //               key={item._id}
// //               className="bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden"
// //             >
// //               {/* Product Image */}
// //               {item.product?.images?.length > 0 ? (
// //                 <img
// //                   src={item.product.images[0]}
// //                   alt={item.product.name}
// //                   className="w-full h-56 object-cover"
// //                 />
// //               ) : (
// //                 <div className="w-full h-56 bg-gray-100 flex items-center justify-center text-gray-400">
// //                   No Image
// //                 </div>
// //               )}

// //               {/* Product Info */}
// //               <div className="p-5 flex flex-col justify-between flex-grow">
// //                 <div>
// //                   <h2 className="text-lg font-semibold text-gray-800 mb-1 truncate">
// //                     {item.product?.name || "Unnamed Product"}
// //                   </h2>
// //                   {item.product?.brand && (
// //                     <p className="text-gray-600 text-sm mb-1">
// //                       Brand:{" "}
// //                       <span className="font-medium">
// //                         {item.product.brand}
// //                       </span>
// //                     </p>
// //                   )}
// //                   <p className="text-gray-900 font-semibold mb-1">
// //                     ₹{item.product?.basePrice || 0}
// //                   </p>
// //                   <p className="text-gray-600 text-sm">
// //                     Quantity: <span className="font-medium">{item.quantity}</span>
// //                   </p>
// //                 </div>

// //                 <div className="mt-4 flex justify-between items-center">
// //                   <button
// //                     onClick={() => alert("Checkout feature coming soon!")}
// //                     className="bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white px-4 py-2 rounded-xl font-medium shadow-sm hover:shadow-md transition-all duration-300"
// //                   >
// //                     Checkout
// //                   </button>

// //                   <button
// //                     onClick={() => alert("Remove from cart feature coming soon!")}
// //                     className="text-red-500 hover:text-red-700 font-medium transition-all duration-200"
// //                   >
// //                     Remove
// //                   </button>
// //                 </div>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       )}
// //     </div>
// //   );
// // }

// // export default Cart;





// import React, { useEffect, useState } from "react";
// import { fetchWithAuth } from "../refreshtoken/api";
// import { Link } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { useNavigate } from "react-router-dom";

// function Cart() {
//   const [cart, setCart] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [total, setTotal] = useState(0);
//   const navigate = useNavigate();

//   const API_BASE = "https://ecommerce-backend-y1bv.onrender.com/api/cart";
//   const REMOVE_API =
//     "https://ecommerce-backend-y1bv.onrender.com/api/cart/remove";
//   const UPDATE_API =
//     "https://ecommerce-backend-y1bv.onrender.com/api/cart/update";
//   const CLEAR_API =
//     "https://ecommerce-backend-y1bv.onrender.com/api/cart/clear";

//   const fetchCart = async () => {
//     try {
//       const data = await fetchWithAuth(API_BASE, { method: "GET" });
//       if (data?.cart) {
//         setCart(data.cart);
//         const totalAmount = data.cart.reduce(
//           (sum, item) => sum + (item.product?.basePrice || 0) * item.quantity,
//           0
//         );
//         setTotal(totalAmount);
//       } else {
//         setCart([]);
//       }
//     } catch (err) {
//       setError("Failed to fetch cart items.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const updateQuantity = async (productId, newQuantity) => {
//     if (newQuantity < 1) {
//       toast.warning("Quantity must be at least 1", { theme: "colored" });
//       return;
//     }
//     try {
//       const res = await fetchWithAuth(UPDATE_API, {
//         method: "PUT",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ productId, quantity: newQuantity }),
//       });
//       if (res?.message?.toLowerCase().includes("updated")) {
//         toast.info("Quantity updated successfully", { theme: "colored" });
//         fetchCart();
//       }
//     } catch {
//       toast.error("Failed to update quantity", { theme: "colored" });
//     }
//   };

//   const removeFromCart = async (productId) => {
//     try {
//       const res = await fetchWithAuth(REMOVE_API, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ productId }),
//       });
//       if (res?.message?.toLowerCase().includes("removed")) {
//         toast.success("Product removed from cart", { theme: "colored" });
//         fetchCart();
//       } else {
//         toast.error("Failed to remove item", { theme: "colored" });
//       }
//     } catch {
//       toast.error("Error removing item", { theme: "colored" });
//     }
//   };

//   const clearCart = async () => {
//     try {
//       const res = await fetchWithAuth(CLEAR_API, { method: "DELETE" });
//       if (res?.message?.toLowerCase().includes("cleared")) {
//         setCart([]);
//         setTotal(0);
//         toast.success("Cart cleared successfully!", { theme: "colored" });
//       } else {
//         toast.error("Failed to clear cart", { theme: "colored" });
//       }
//     } catch {
//       toast.error("Error clearing cart", { theme: "colored" });
//     }
//   };

//   useEffect(() => {
//     fetchCart();
//   }, []);

//   if (loading)
//     return <p className="text-center mt-8 text-gray-600">Loading...</p>;
//   if (error) return <p className="text-center text-red-500 mt-8">{error}</p>;

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-[#EFFAFD] to-white py-12 px-6">
//       <ToastContainer
//         position="top-right"
//         autoClose={2500}
//         hideProgressBar={false}
//         newestOnTop={true}
//         closeOnClick
//         pauseOnHover
//         draggable
//         theme="colored"
//         toastStyle={{
//           background: "linear-gradient(135deg, #002349, #957C3D)",
//           color: "#fff",
//           borderRadius: "12px",
//           boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
//         }}
//       />
//       {/* Navigation Buttons */}
//       <br></br>
//       <br></br>
//       <br></br>
//       <br></br>

//       <div className="flex justify-between max-w-6xl mx-auto mb-6">
//         <Link
//           to="/Home"
//           className="bg-[#002349] text-white px-4 py-2 rounded-md hover:bg-[#001833] transition shadow-md"
//         >
//           ← Back
//         </Link>
//         <Link
//           to="/Home"
//           className="bg-[#957C3D] text-white px-4 py-2 rounded-md hover:bg-[#7e682f] transition shadow-md"
//         >
//           🏠 Home
//         </Link>
//       </div>

//       <div className="max-w-6xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden">
//         <div className="flex flex-col lg:flex-row">
//           {/* Cart Table */}
//           <div className="flex-1 p-6 overflow-x-auto">
//             <h1 className="text-3xl font-bold text-[#002349] mb-6">
//               🛒 Shopping Cart
//             </h1>

//             {cart.length === 0 ? (
//               <div className="text-center py-20">
//                 <p className="text-gray-600 mb-6">Your cart is empty.</p>
//                 <Link
//                   to="/home"
//                   className="bg-gradient-to-r from-[#002349] to-[#957C3D] text-white px-6 py-3 rounded-lg shadow-md hover:opacity-90 transition"
//                 >
//                   Continue Shopping
//                 </Link>
//               </div>
//             ) : (
//               <table className="w-full text-left border-collapse">
//                 <thead>
//                   <tr className="bg-[#002349] text-white">
//                     <th className="p-4 rounded-tl-lg">Product</th>
//                     <th className="p-4">Price</th>
//                     <th className="p-4">Quantity</th>
//                     <th className="p-4 rounded-tr-lg text-right">Subtotal</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {cart.map((item) => (
//                     <tr
//                       key={item._id}
//                       className="border-b hover:bg-gray-50 transition"
//                     >
//                       <td className="p-4 flex items-center gap-3">
//                         <button
//                           onClick={() => removeFromCart(item.product._id)}
//                           className="text-red-500 hover:text-red-700 text-xl"
//                         >
//                           ×
//                         </button>
//                         {item.product?.images?.[0] ? (
//                           <img
//                             src={item.product.images[0]}
//                             alt={item.product.name}
//                             className="w-14 h-14 object-cover rounded-md"
//                           />
//                         ) : (
//                           <div className="w-14 h-14 bg-gray-200 flex items-center justify-center rounded-md">
//                             No Image
//                           </div>
//                         )}
//                         <div>
//                           <p className="font-semibold text-gray-800">
//                             {item.product?.name || "Unnamed Product"}
//                           </p>
//                           <p className="text-sm text-gray-500">
//                             {item.product?.brand || ""}
//                           </p>
//                         </div>
//                       </td>
//                       <td className="p-4">₹{item.product?.basePrice || 0}</td>
//                       <td className="p-4">
//                         <div className="flex items-center gap-3">
//                           <button
//                             onClick={() =>
//                               updateQuantity(
//                                 item.product._id,
//                                 item.quantity - 1
//                               )
//                             }
//                             className="bg-gray-200 w-8 h-8 flex items-center justify-center rounded-full font-bold hover:bg-gray-300 transition"
//                           >
//                             −
//                           </button>
//                           <span>{item.quantity}</span>
//                           <button
//                             onClick={() =>
//                               updateQuantity(
//                                 item.product._id,
//                                 item.quantity + 1
//                               )
//                             }
//                             className="bg-gray-200 w-8 h-8 flex items-center justify-center rounded-full font-bold hover:bg-gray-300 transition"
//                           >
//                             +
//                           </button>
//                         </div>
//                       </td>
//                       <td className="p-4 text-right font-semibold text-gray-800">
//                         ₹{(item.product?.basePrice || 0) * item.quantity}
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             )}
//           </div>

//           {/* Order Summary */}
//           {cart.length > 0 && (
//             <div className="w-full lg:w-1/3 border-l border-gray-100 p-6 bg-gray-50">
//               <h2 className="text-2xl font-bold text-[#002349] mb-4">
//                 Order Summary
//               </h2>
//               <div className="space-y-2 text-gray-700">
//                 <p className="flex justify-between">
//                   <span>Items</span>
//                   <span>{cart.reduce((a, b) => a + b.quantity, 0)}</span>
//                 </p>
//                 <p className="flex justify-between">
//                   <span>Subtotal</span>
//                   <span>₹{total.toFixed(2)}</span>
//                 </p>
//                 <p className="flex justify-between">
//                   <span>Shipping</span>
//                   <span>₹0.00</span>
//                 </p>
//                 <p className="flex justify-between">
//                   <span>Taxes</span>
//                   <span>₹0.00</span>
//                 </p>
//                 <p className="flex justify-between text-[#957C3D] font-medium">
//                   <span>Coupon Discount</span>
//                   <span>− ₹10.00</span>
//                 </p>
//                 <hr className="my-3" />
//                 <p className="flex justify-between font-bold text-lg text-[#002349]">
//                   <span>Total</span>
//                   <span>₹{(total - 10).toFixed(2)}</span>
//                 </p>
//               </div>

//               <button
//                 onClick={() => {
//                   if (cart.length > 0) {
//                     const firstProduct = cart[0].product._id;
//                     navigate(`/buynow/${firstProduct}`);
//                   }
//                 }}
//                 className="mt-6 w-full bg-[#002349] text-white font-semibold py-3 rounded-lg hover:bg-[#001833] transition shadow-md"
//               >
//                 Proceed to Checkout
//               </button>

//               <button
//                 onClick={clearCart}
//                 className="mt-3 w-full bg-[#957C3D] text-white font-semibold py-3 rounded-lg hover:bg-[#b49345] transition"
//               >
//                 Clear Cart
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Cart;















// import React, { useEffect, useState } from "react";
// import { fetchWithAuth } from "../refreshtoken/api";
// import { Link } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { useNavigate } from "react-router-dom";

// function Cart() {
//   const [cart, setCart] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [total, setTotal] = useState(0);
//   const navigate = useNavigate();

//   const API_BASE = "https://ecommerce-backend-y1bv.onrender.com/api/cart";
//   const REMOVE_API =
//     "https://ecommerce-backend-y1bv.onrender.com/api/cart/remove";
//   const UPDATE_API =
//     "https://ecommerce-backend-y1bv.onrender.com/api/cart/update";
//   const CLEAR_API =
//     "https://ecommerce-backend-y1bv.onrender.com/api/cart/clear";

//   const fetchCart = async () => {
//     try {
//       const data = await fetchWithAuth(API_BASE, { method: "GET" });
//       if (data?.cart) {
//         setCart(data.cart);
//         const totalAmount = data.cart.reduce(
//           (sum, item) => sum + (item.product?.basePrice || 0) * item.quantity,
//           0
//         );
//         setTotal(totalAmount);
//       } else {
//         setCart([]);
//       }
//     } catch (err) {
//       setError("Failed to fetch cart items.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const updateQuantity = async (productId, newQuantity) => {
//     if (newQuantity < 1) {
//       toast.warning("Quantity must be at least 1", { theme: "colored" });
//       return;
//     }
//     try {
//       const res = await fetchWithAuth(UPDATE_API, {
//         method: "PUT",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ productId, quantity: newQuantity }),
//       });
//       if (res?.message?.toLowerCase().includes("updated")) {
//         toast.info("Quantity updated successfully", { theme: "colored" });
//         fetchCart();
//       }
//     } catch {
//       toast.error("Failed to update quantity", { theme: "colored" });
//     }
//   };

//   const removeFromCart = async (productId) => {
//     try {
//       const res = await fetchWithAuth(REMOVE_API, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ productId }),
//       });
//       if (res?.message?.toLowerCase().includes("removed")) {
//         toast.success("Product removed from cart", { theme: "colored" });
//         fetchCart();
//       } else {
//         toast.error("Failed to remove item", { theme: "colored" });
//       }
//     } catch {
//       toast.error("Error removing item", { theme: "colored" });
//     }
//   };

//   const clearCart = async () => {
//     try {
//       const res = await fetchWithAuth(CLEAR_API, { method: "DELETE" });
//       if (res?.message?.toLowerCase().includes("cleared")) {
//         setCart([]);
//         setTotal(0);
//         toast.success("Cart cleared successfully!", { theme: "colored" });
//       } else {
//         toast.error("Failed to clear cart", { theme: "colored" });
//       }
//     } catch {
//       toast.error("Error clearing cart", { theme: "colored" });
//     }
//   };

//   useEffect(() => {
//     fetchCart();
//   }, []);

//   if (loading)
//     return <p className="text-center mt-8 text-gray-600">Loading...</p>;
//   if (error) return <p className="text-center text-red-500 mt-8">{error}</p>;

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-[#EFFAFD] to-white py-12 px-6">
//       <ToastContainer
//         position="top-right"
//         autoClose={2500}
//         hideProgressBar={false}
//         newestOnTop={true}
//         closeOnClick
//         pauseOnHover
//         draggable
//         theme="colored"
//         toastStyle={{
//           background: "linear-gradient(135deg, #002349, #957C3D)",
//           color: "#fff",
//           borderRadius: "12px",
//           boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
//         }}
//       />
//       {/* Navigation Buttons */}
//       <br></br>
//       <br></br>
//       <br></br>
//       <br></br>

//       <div className="flex justify-between max-w-6xl mx-auto mb-6">
//         <Link
//           to="/Home"
//           className="bg-[#002349] text-white px-4 py-2 rounded-md hover:bg-[#001833] transition shadow-md"
//         >
//           ← Back
//         </Link>
//         <Link
//           to="/Home"
//           className="bg-[#957C3D] text-white px-4 py-2 rounded-md hover:bg-[#7e682f] transition shadow-md"
//         >
//           🏠 Home
//         </Link>
//       </div>

//       <div className="max-w-6xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden">
//         <div className="flex flex-col lg:flex-row">
//           {/* Cart Table */}
//           <div className="flex-1 p-6 overflow-x-auto">
//             <h1 className="text-3xl font-bold text-[#002349] mb-6">
//               🛒 Shopping Cart
//             </h1>

//             {cart.length === 0 ? (
//               <div className="text-center py-20">
//                 <p className="text-gray-600 mb-6">Your cart is empty.</p>
//                 <Link
//                   to="/home"
//                   className="bg-gradient-to-r from-[#002349] to-[#957C3D] text-white px-6 py-3 rounded-lg shadow-md hover:opacity-90 transition"
//                 >
//                   Continue Shopping
//                 </Link>
//               </div>
//             ) : (
//               <table className="w-full text-left border-collapse">
//                 <thead>
//                   <tr className="bg-[#002349] text-white">
//                     <th className="p-4 rounded-tl-lg">Product</th>
//                     <th className="p-4">Price</th>
//                     <th className="p-4">Quantity</th>
//                     <th className="p-4 rounded-tr-lg text-right">Subtotal</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {cart.map((item) => (
//                     <tr
//                       key={item._id}
//                       className="border-b hover:bg-gray-50 transition"
//                     >
//                       <td className="p-4 flex items-center gap-3">
//                         <button
//                           onClick={() => removeFromCart(item.product._id)}
//                           className="text-red-500 hover:text-red-700 text-xl"
//                         >
//                           ×
//                         </button>
//                         {item.product?.images?.[0] ? (
//                           <img
//                             src={item.product.images[0]}
//                             alt={item.product.name}
//                             className="w-14 h-14 object-cover rounded-md"
//                           />
//                         ) : (
//                           <div className="w-14 h-14 bg-gray-200 flex items-center justify-center rounded-md">
//                             No Image
//                           </div>
//                         )}
//                         <div>
//                           <p className="font-semibold text-gray-800">
//                             {item.product?.name || "Unnamed Product"}
//                           </p>
//                           <p className="text-sm text-gray-500">
//                             {item.product?.brand || ""}
//                           </p>
//                         </div>
//                       </td>
//                       <td className="p-4">₹{item.product?.basePrice || 0}</td>
//                       <td className="p-4">
//                         <div className="flex items-center gap-3">
//                           <button
//                             onClick={() =>
//                               updateQuantity(
//                                 item.product._id,
//                                 item.quantity - 1
//                               )
//                             }
//                             className="bg-gray-200 w-8 h-8 flex items-center justify-center rounded-full font-bold hover:bg-gray-300 transition"
//                           >
//                             −
//                           </button>
//                           <span>{item.quantity}</span>
//                           <button
//                             onClick={() =>
//                               updateQuantity(
//                                 item.product._id,
//                                 item.quantity + 1
//                               )
//                             }
//                             className="bg-gray-200 w-8 h-8 flex items-center justify-center rounded-full font-bold hover:bg-gray-300 transition"
//                           >
//                             +
//                           </button>
//                         </div>
//                       </td>
//                       <td className="p-4 text-right font-semibold text-gray-800">
//                         ₹{(item.product?.basePrice || 0) * item.quantity}
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             )}
//           </div>

//           {/* Order Summary */}
//           {cart.length > 0 && (
//             <div className="w-full lg:w-1/3 border-l border-gray-100 p-6 bg-gray-50">
//               <h2 className="text-2xl font-bold text-[#002349] mb-4">
//                 Order Summary
//               </h2>
//               <div className="space-y-2 text-gray-700">
//                 <p className="flex justify-between">
//                   <span>Items</span>
//                   <span>{cart.reduce((a, b) => a + b.quantity, 0)}</span>
//                 </p>
//                 <p className="flex justify-between">
//                   <span>Subtotal</span>
//                   <span>₹{total.toFixed(2)}</span>
//                 </p>
//                 <p className="flex justify-between">
//                   <span>Shipping</span>
//                   <span>₹0.00</span>
//                 </p>
//                 <p className="flex justify-between">
//                   <span>Taxes</span>
//                   <span>₹0.00</span>
//                 </p>
//                 <p className="flex justify-between text-[#957C3D] font-medium">
//                   <span>Coupon Discount</span>
//                   <span>− ₹10.00</span>
//                 </p>
//                 <hr className="my-3" />
//                 <p className="flex justify-between font-bold text-lg text-[#002349]">
//                   <span>Total</span>
//                   <span>₹{(total - 10).toFixed(2)}</span>
//                 </p>
//               </div>

//               <button
//                 onClick={() => {
//                   if (cart.length > 0) {
//                     navigate("/placeorder"); // ✅ Redirect to PlaceOrder.jsx
//                   }
//                 }}
//                 className="mt-6 w-full bg-[#002349] text-white font-semibold py-3 rounded-lg hover:bg-[#001833] transition shadow-md"
//               >
//                 Proceed to Checkout
//               </button>

//               <button
//                 onClick={clearCart}
//                 className="mt-3 w-full bg-[#957C3D] text-white font-semibold py-3 rounded-lg hover:bg-[#b49345] transition"
//               >
//                 Clear Cart
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Cart;















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
