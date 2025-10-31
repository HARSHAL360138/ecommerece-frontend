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

// function Cart() {
//   const [cart, setCart] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [total, setTotal] = useState(0);

//   const API_BASE = "https://ecommerce-backend-y1bv.onrender.com/api/cart";
//   const REMOVE_API = "https://ecommerce-backend-y1bv.onrender.com/api/cart/remove";
//   const UPDATE_API = "https://ecommerce-backend-y1bv.onrender.com/api/cart/update";
//   const CLEAR_API = "https://ecommerce-backend-y1bv.onrender.com/api/cart/clear"; // ✅ Clear Cart (local)

//   // ✅ Fetch Cart
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
//       console.error("Failed to fetch cart:", err);
//       setError(err.message || "Something went wrong");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // ✅ Remove single product
//   const removeFromCart = async (productId) => {
//     if (!window.confirm("Are you sure you want to remove this item?")) return;
//     try {
//       const response = await fetchWithAuth(REMOVE_API, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ productId }),
//       });

//       if (response?.message?.toLowerCase().includes("removed")) {
//         alert("✅ Product removed successfully!");
//         fetchCart();
//       } else {
//         alert("⚠️ Failed to remove product. Try again.");
//       }
//     } catch (err) {
//       console.error("Error removing from cart:", err);
//       alert("⚠️ Something went wrong while removing the product.");
//     }
//   };

//   // ✅ Update Quantity
//   const updateQuantity = async (productId, newQuantity) => {
//     if (newQuantity < 1) return alert("Quantity cannot be less than 1.");
//     try {
//       const response = await fetchWithAuth(UPDATE_API, {
//         method: "PUT",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ productId, quantity: newQuantity }),
//       });

//       if (response?.message?.toLowerCase().includes("updated")) {
//         fetchCart(); // refresh cart
//       } else {
//         alert("⚠️ Failed to update quantity. Try again.");
//       }
//     } catch (err) {
//       console.error("Error updating quantity:", err);
//       alert("⚠️ Error while updating quantity.");
//     }
//   };

//   // ✅ Clear Entire Cart
//   const clearCart = async () => {
//     if (!window.confirm("🗑 Are you sure you want to clear your entire cart?")) return;
//     try {
//       const response = await fetchWithAuth(CLEAR_API, { method: "DELETE" });

//       if (response?.message?.toLowerCase().includes("cleared")) {
//         alert("🧹 Cart cleared successfully!");
//         setCart([]);
//         setTotal(0);
//       } else {
//         alert("⚠️ Failed to clear cart. Try again.");
//       }
//     } catch (err) {
//       console.error("Error clearing cart:", err);
//       alert("❌ Something went wrong while clearing the cart.");
//     }
//   };

//   useEffect(() => {
//     fetchCart();
//   }, []);

//   if (loading)
//     return <p className="text-center mt-6 text-gray-600">Loading cart...</p>;
//   if (error)
//     return <p className="text-center text-red-500 mt-6">{error}</p>;

//   return (
//     <div className="max-w-7xl mx-auto mt-10 px-4">
//       {/* Header */}
//       <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
//         <h1 className="text-3xl font-bold text-gray-800">🛒 My Cart</h1>

//         {cart.length > 0 && (
//           <div className="flex items-center gap-4">
//             <p className="text-2xl font-semibold text-gray-700">
//               Total: ₹{total.toFixed(2)}
//             </p>

//             <button
//               onClick={clearCart}
//               className="bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 text-white px-5 py-2 rounded-xl font-medium shadow-md hover:shadow-lg transition-all duration-300"
//             >
//               🗑 Clear All
//             </button>
//           </div>
//         )}
//       </div>

//       {/* Empty Cart */}
//       {cart.length === 0 ? (
//         <div className="text-center text-gray-500 mt-20">
//           <p className="text-lg">Your cart is empty.</p>
//           <Link
//             to="/"
//             className="inline-block mt-4 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white px-6 py-3 rounded-xl font-medium shadow-md transition-all duration-300"
//           >
//             Continue Shopping
//           </Link>
//         </div>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {cart.map((item) => (
//             <div
//               key={item._id}
//               className="bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden"
//             >
//               {/* Product Image */}
//               {item.product?.images?.length > 0 ? (
//                 <img
//                   src={item.product.images[0]}
//                   alt={item.product.name}
//                   className="w-full h-52 object-cover"
//                 />
//               ) : (
//                 <div className="w-full h-52 bg-gray-100 flex items-center justify-center text-gray-400">
//                   No Image
//                 </div>
//               )}

//               {/* Product Info */}
//               <div className="p-5 flex flex-col justify-between flex-grow">
//                 <div>
//                   <h2 className="text-lg font-semibold text-gray-800 mb-1 truncate">
//                     {item.product?.name || "Unnamed Product"}
//                   </h2>
//                   {item.product?.brand && (
//                     <p className="text-gray-600 text-sm mb-1">
//                       Brand:{" "}
//                       <span className="font-medium">{item.product.brand}</span>
//                     </p>
//                   )}
//                   <p className="text-gray-900 font-semibold mb-1">
//                     ₹{item.product?.basePrice || 0}
//                   </p>

//                   {/* Quantity Controls */}
//                   <div className="flex items-center space-x-3 mt-2">
//                     <button
//                       onClick={() =>
//                         updateQuantity(item.product._id, item.quantity - 1)
//                       }
//                       className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded-full text-lg font-bold transition-all"
//                     >
//                       -
//                     </button>
//                     <span className="font-medium text-gray-700">
//                       {item.quantity}
//                     </span>
//                     <button
//                       onClick={() =>
//                         updateQuantity(item.product._id, item.quantity + 1)
//                       }
//                       className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded-full text-lg font-bold transition-all"
//                     >
//                       +
//                     </button>
//                   </div>
//                 </div>

//                 <div className="mt-5 flex justify-between items-center">
//                   <button
//                     onClick={() => alert("Checkout feature coming soon!")}
//                     className="bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white px-4 py-2 rounded-xl font-medium shadow-sm hover:shadow-md transition-all duration-300"
//                   >
//                     Checkout
//                   </button>

//                   <button
//                     onClick={() => removeFromCart(item.product._id)}
//                     className="text-red-500 hover:text-red-700 font-medium transition-all duration-200"
//                   >
//                     Remove
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default Cart;


import React, { useEffect, useState } from "react";
import { fetchWithAuth } from "../refreshtoken/api";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Trash2, ShoppingBag, X } from "lucide-react";

function Cart() {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [total, setTotal] = useState(0);

  const API_BASE = "https://ecommerce-backend-y1bv.onrender.com/api/cart";
  const REMOVE_API = "https://ecommerce-backend-y1bv.onrender.com/api/cart/remove";
  const UPDATE_API = "https://ecommerce-backend-y1bv.onrender.com/api/cart/update";
  const CLEAR_API = "https://ecommerce-backend-y1bv.onrender.com/api/cart/clear";

  // ✅ Fetch cart
  const fetchCart = async () => {
    try {
      const data = await fetchWithAuth(API_BASE, { method: "GET" });
      if (data?.cart) {
        setCart(data.cart);
        const totalAmount = data.cart.reduce(
          (sum, item) => sum + (item.product?.basePrice || 0) * item.quantity,
          0
        );
        setTotal(totalAmount);
      } else {
        setCart([]);
      }
    } catch (err) {
      setError(err.message || "Failed to fetch cart");
    } finally {
      setLoading(false);
    }
  };

  // ✅ Remove product
  const removeFromCart = async (productId) => {
    if (!window.confirm("Remove this item from your cart?")) return;
    try {
      await fetchWithAuth(REMOVE_API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId }),
      });
      fetchCart();
    } catch {
      alert("Error removing product");
    }
  };

  // ✅ Update quantity
  const updateQuantity = async (productId, quantity) => {
    if (quantity < 1) return;
    try {
      await fetchWithAuth(UPDATE_API, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId, quantity }),
      });
      fetchCart();
    } catch {
      alert("Error updating quantity");
    }
  };

  // ✅ Clear cart
  const clearCart = async () => {
    if (!window.confirm("Clear all items from cart?")) return;
    try {
      await fetchWithAuth(CLEAR_API, { method: "DELETE" });
      setCart([]);
      setTotal(0);
    } catch {
      alert("Error clearing cart");
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  if (loading)
    return (
      <div className="text-center mt-20 text-gray-600 animate-pulse text-lg">
        Loading your cart...
      </div>
    );

  if (error)
    return <div className="text-center text-red-500 mt-10">{error}</div>;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 mb-20">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-10 gap-4">
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-extrabold text-center sm:text-left"
        >
          <span className="bg-gradient-to-r from-[#002349] to-[#957C3D] bg-clip-text text-transparent">
            My Cart
          </span>
        </motion.h1>

        {cart.length > 0 && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={clearCart}
            className="flex items-center gap-2 px-5 py-2 rounded-xl font-medium shadow-md bg-[#002349] text-white hover:opacity-90 transition-all"
          >
            <Trash2 size={18} /> Clear All
          </motion.button>
        )}
      </div>

      {/* Empty State */}
      {cart.length === 0 ? (
        <div className="text-center text-gray-500 mt-16 text-lg">
          🛒 Your cart is empty. <br /> Add some items to get started!
          <br />
          <Link
            to="/"
            className="inline-block mt-5 bg-gradient-to-r from-[#002349] to-[#004080] text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:opacity-90 transition-all"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {cart.map((item) => (
            <motion.div
              key={item._id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col overflow-hidden"
            >
              {/* Product Image */}
              <div className="relative group">
                <img
                  src={
                    item.product?.images?.[0] ||
                    "https://via.placeholder.com/400x300?text=No+Image"
                  }
                  alt={item.product?.name}
                  className="h-60 w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => removeFromCart(item.product._id)}
                  className="absolute top-3 right-3 bg-white/80 text-[#002349] w-10 h-10 flex items-center justify-center rounded-full shadow-lg hover:bg-[#002349] hover:text-white transition-all"
                  title="Remove"
                >
                  <X size={18} />
                </motion.button>
              </div>

              {/* Product Info */}
              <div className="p-5 flex flex-col justify-between flex-grow">
                <div>
                  <h2 className="text-xl font-semibold text-[#002349] truncate">
                    {item.product?.name || "Unnamed Product"}
                  </h2>
                  <p className="text-gray-500 text-sm">
                    Brand:{" "}
                    <span className="font-medium text-[#957C3D]">
                      {item.product?.brand || "N/A"}
                    </span>
                  </p>
                  <p className="text-2xl font-bold text-[#002349] mt-1">
                    ₹{item.product?.basePrice}
                  </p>

                  {/* Quantity */}
                  <div className="flex items-center justify-start mt-3 space-x-3">
                    <button
                      onClick={() =>
                        updateQuantity(item.product._id, item.quantity - 1)
                      }
                      className="bg-gray-200 px-3 py-1 rounded-full text-lg font-bold hover:bg-gray-300 transition-all"
                    >
                      -
                    </button>
                    <span className="font-semibold text-gray-700">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() =>
                        updateQuantity(item.product._id, item.quantity + 1)
                      }
                      className="bg-gray-200 px-3 py-1 rounded-full text-lg font-bold hover:bg-gray-300 transition-all"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Buttons */}
                <div className="mt-5 flex flex-col sm:flex-row gap-3 w-full">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-[#002349] to-[#004080] text-white px-4 py-2 rounded-xl font-semibold shadow-md hover:opacity-90 transition-all"
                  >
                    <ShoppingBag size={18} /> Checkout
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => removeFromCart(item.product._id)}
                    className="flex-1 relative px-4 py-2 rounded-xl font-semibold text-[#957C3D] border border-[#957C3D] overflow-hidden group transition-all"
                  >
                    <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#e0c176] to-[#957C3D] opacity-0 group-hover:opacity-100 transition-all"></span>
                    <span className="relative z-10 group-hover:text-white">
                      Remove
                    </span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Total Section */}
      {cart.length > 0 && (
        <div className="mt-10 text-center text-xl font-semibold text-[#002349]">
          Total Amount:{" "}
          <span className="text-[#957C3D]">₹{total.toFixed(2)}</span>
        </div>
      )}
    </div>
  );
}

export default Cart;
