// // import React, { useEffect, useState } from "react";
// // import { fetchWithAuth } from "../refreshtoken/api"; // adjust path if needed

// // function Wishlist() {
// //   const [wishlist, setWishlist] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState("");

// //   const API_BASE = "https://ecommerce-backend-y1bv.onrender.com/api/wishlist";

// //   // Fetch all wishlist items
// //   const fetchWishlist = async () => {
// //     try {
// //       const data = await fetchWithAuth(API_BASE, { method: "GET" });
// //       setWishlist(data);
// //     } catch (err) {
// //       console.error("Failed to fetch wishlist:", err);
// //       setError(err.message || "Something went wrong");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   // Remove a single product from wishlist
// //   const removeFromWishlist = async (productId) => {
// //     if (!window.confirm("Remove this product from your wishlist?")) return;
// //     try {
// //       await fetchWithAuth(`${API_BASE}/remove`, {
// //         method: "POST",
// //         body: JSON.stringify({ productId }),
// //       });
// //       setWishlist((prev) => prev.filter((item) => item._id !== productId));
// //     } catch (err) {
// //       console.error("Failed to remove item:", err);
// //       setError(err.message || "Failed to remove product");
// //     }
// //   };

// //   // Clear all wishlist items
// //   const clearWishlist = async () => {
// //     if (!window.confirm("Are you sure you want to clear your wishlist?")) return;
// //     try {
// //       await fetchWithAuth(`${API_BASE}/clear`, { method: "DELETE" });
// //       setWishlist([]);
// //     } catch (err) {
// //       console.error("Failed to clear wishlist:", err);
// //       setError(err.message || "Failed to clear wishlist");
// //     }
// //   };

// //   useEffect(() => {
// //     fetchWishlist();
// //   }, []);

// //   if (loading) return <p className="text-center mt-4">Loading wishlist...</p>;
// //   if (error) return <p className="text-center text-red-500 mt-4">{error}</p>;

// //   return (
// //     <div className="max-w-4xl mx-auto mt-8 p-4">
// //       <div className="flex justify-between items-center mb-4">
// //         <h1 className="text-2xl font-bold">My Wishlist</h1>
// //         {wishlist.length > 0 && (
// //           <button
// //             onClick={clearWishlist}
// //             className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
// //           >
// //             Clear All
// //           </button>
// //         )}
// //       </div>

// //       {wishlist.length === 0 ? (
// //         <p>No items in your wishlist.</p>
// //       ) : (
// //         <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
// //           {wishlist.map((item) => (
// //             <li
// //               key={item._id}
// //               className="border rounded-lg p-4 shadow hover:shadow-lg transition relative bg-white"
// //             >
// //               <button
// //                 onClick={() => removeFromWishlist(item._id)}
// //                 className="absolute top-2 right-2 text-red-500 hover:text-red-700"
// //                 title="Remove item"
// //               >
// //                 ✕
// //               </button>
// //               <h2 className="text-lg font-semibold">{item.name}</h2>
// //               {item.price && (
// //                 <p className="text-gray-600 mt-1">Price: ${item.price}</p>
// //               )}
// //             </li>
// //           ))}
// //         </ul>
// //       )}
// //     </div>
// //   );
// // }

// // export default Wishlist;









// // import React, { useEffect, useState } from "react";
// // import { fetchWithAuth } from "../refreshtoken/api"; // adjust the path if needed

// // function Wishlist() {
// //   const [wishlist, setWishlist] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState("");

// //   const fetchWishlist = async () => {
// //     try {
// //       const data = await fetchWithAuth("https://ecommerce-backend-y1bv.onrender.com/api/wishlist", {
// //         method: "GET",
// //       });
// //       setWishlist(data);
// //     } catch (err) {
// //       console.error("Failed to fetch wishlist:", err);
// //       setError(err.message || "Something went wrong");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   useEffect(() => {
// //     fetchWishlist();
// //   }, []);

// //   if (loading) return <p className="text-center mt-4">Loading wishlist...</p>;
// //   if (error) return <p className="text-center text-red-500 mt-4">{error}</p>;

// //   return (
// //     <div className="max-w-4xl mx-auto mt-8 p-4">
// //       <h1 className="text-2xl font-bold mb-4">My Wishlist</h1>
// //       {wishlist.length === 0 ? (
// //         <p>No items in your wishlist.</p>
// //       ) : (
// //         <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
// //           {wishlist.map((item) => (
// //             <li
// //               key={item._id}
// //               className="border rounded-lg p-4 shadow hover:shadow-lg transition"
// //             >
// //               <h2 className="text-lg font-semibold">{item.name}</h2>
// //               {item.price && (
// //                 <p className="text-gray-600">Price: ${item.price}</p>
// //               )}
// //             </li>
// //           ))}
// //         </ul>
// //       )}
// //     </div>
// //   );
// // }

// // export default Wishlist;


















// // import React, { useEffect, useState } from "react";
// // import { fetchWithAuth } from "../refreshtoken/api"; // adjust path if needed

// // function Wishlist() {
// //   const [wishlist, setWishlist] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState("");

// //   const API_BASE = "https://ecommerce-backend-y1bv.onrender.com/api/wishlist";

// //   // ✅ Fetch all wishlist items
// //   const fetchWishlist = async () => {
// //     try {
// //       const data = await fetchWithAuth(API_BASE, { method: "GET" });
// //       // API returns { message, wishlist }
// //       setWishlist(data.wishlist || []);
// //     } catch (err) {
// //       console.error("Failed to fetch wishlist:", err);
// //       setError(err.message || "Something went wrong");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   // ✅ Remove a single product from wishlist
// //   const removeFromWishlist = async (productId) => {
// //     if (!window.confirm("Remove this product from your wishlist?")) return;
// //     try {
// //       await fetchWithAuth(`${API_BASE}/remove`, {
// //         method: "POST",
// //         body: JSON.stringify({ productId }),
// //       });
// //       setWishlist((prev) => prev.filter((item) => item._id !== productId));
// //     } catch (err) {
// //       console.error("Failed to remove item:", err);
// //       setError(err.message || "Failed to remove product");
// //     }
// //   };

// //   // ✅ Clear all wishlist items
// //   const clearWishlist = async () => {
// //     if (!window.confirm("Are you sure you want to clear your wishlist?")) return;
// //     try {
// //       await fetchWithAuth(`${API_BASE}/clear`, { method: "DELETE" });
// //       setWishlist([]);
// //     } catch (err) {
// //       console.error("Failed to clear wishlist:", err);
// //       setError(err.message || "Failed to clear wishlist");
// //     }
// //   };

// //   useEffect(() => {
// //     fetchWishlist();
// //   }, []);

// //   if (loading) return <p className="text-center mt-4">Loading wishlist...</p>;
// //   if (error) return <p className="text-center text-red-500 mt-4">{error}</p>;

// //   return (
// //     <div className="max-w-6xl mx-auto mt-8 p-4">
// //       <div className="flex justify-between items-center mb-4">
// //         <h1 className="text-2xl font-bold">My Wishlist</h1>
// //         {wishlist.length > 0 && (
// //           <button
// //             onClick={clearWishlist}
// //             className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
// //           >
// //             Clear All
// //           </button>
// //         )}
// //       </div>

// //       {wishlist.length === 0 ? (
// //         <p>No items in your wishlist.</p>
// //       ) : (
// //         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
// //           {wishlist.map((item) => {
// //             const product = item.product;
// //             return (
// //               <div
// //                 key={item._id}
// //                 className="border rounded-lg p-4 shadow hover:shadow-lg transition bg-white relative"
// //               >
// //                 {/* ❌ Remove Button */}
// //                 <button
// //                   onClick={() => removeFromWishlist(item._id)}
// //                   className="absolute top-2 right-2 text-red-500 hover:text-red-700"
// //                   title="Remove item"
// //                 >
// //                   ✕
// //                 </button>

// //                 {/* 🖼 Product Image */}
// //                 {product?.images?.length > 0 ? (
// //                   <img
// //                     src={product.images[0]}
// //                     alt={product.name}
// //                     className="w-full h-48 object-cover rounded mb-3"
// //                   />
// //                 ) : (
// //                   <div className="w-full h-48 bg-gray-100 flex items-center justify-center text-gray-400 rounded mb-3">
// //                     No Image
// //                   </div>
// //                 )}

// //                 {/* 🏷 Product Details */}
// //                 <h2 className="text-lg font-semibold">
// //                   {product?.name || "Unnamed Product"}
// //                 </h2>
// //                 {product?.brand && (
// //                   <p className="text-gray-600 text-sm mb-1">
// //                     Brand: {product.brand}
// //                   </p>
// //                 )}
// //                 {product?.basePrice && (
// //                   <p className="text-gray-800 font-medium">
// //                     ₹{product.basePrice}{" "}
// //                     {product?.discountPercentage ? (
// //                       <span className="text-green-600 text-sm">
// //                         ({product.discountPercentage}% OFF)
// //                       </span>
// //                     ) : null}
// //                   </p>
// //                 )}
// //                 <p className="text-gray-500 text-sm mt-1">
// //                   Added on: {new Date(item.addedAt).toLocaleDateString()}
// //                 </p>
// //               </div>
// //             );
// //           })}
// //         </div>
// //       )}
// //     </div>
// //   );
// // }

// // export default Wishlist;












// // import React, { useEffect, useState } from "react";
// // import { fetchWithAuth } from "../refreshtoken/api";
// // import { Link } from "react-router-dom";

// // function Wishlist() {
// //   const [wishlist, setWishlist] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState("");

// //   const API_BASE = "https://ecommerce-backend-y1bv.onrender.com/api/wishlist";

// //   // ✅ Fetch all wishlist items
// //   const fetchWishlist = async () => {
// //     try {
// //       const data = await fetchWithAuth(API_BASE, { method: "GET" });
// //       setWishlist(data.wishlist || []);
// //     } catch (err) {
// //       console.error("Failed to fetch wishlist:", err);
// //       setError(err.message || "Something went wrong");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   // ✅ Remove single item
// //   const removeFromWishlist = async (productId) => {
// //     if (!window.confirm("Remove this product from your wishlist?")) return;
// //     try {
// //       await fetchWithAuth(`${API_BASE}/remove`, {
// //         method: "POST",
// //         body: JSON.stringify({ productId }),
// //       });
// //       setWishlist((prev) => prev.filter((item) => item._id !== productId));
// //     } catch (err) {
// //       console.error("Failed to remove item:", err);
// //       setError(err.message || "Failed to remove product");
// //     }
// //   };

// //   // ✅ Clear all items
// //   const clearWishlist = async () => {
// //     if (!window.confirm("Are you sure you want to clear your wishlist?")) return;
// //     try {
// //       await fetchWithAuth(`${API_BASE}/clear`, { method: "DELETE" });
// //       setWishlist([]);
// //     } catch (err) {
// //       console.error("Failed to clear wishlist:", err);
// //       setError(err.message || "Failed to clear wishlist");
// //     }
// //   };

// //   // ✅ Dummy Add to Cart
// //   const addToCart = async (productId) => {
// //     try {
// //       await fetchWithAuth("https://ecommerce-backend-y1bv.onrender.com/api/cart/add", {
// //         method: "POST",
// //         body: JSON.stringify({ productId, quantity: 1 }),
// //       });
// //       alert("Product added to cart!");
// //     } catch (err) {
// //       console.error("Failed to add to cart:", err);
// //       alert("Failed to add to cart");
// //     }
// //   };

// //   // ✅ Buy Now (Redirect)
// //   const buyNow = (productId) => {
// //     window.location.href = `/checkout?productId=${productId}`;
// //   };

// //   useEffect(() => {
// //     fetchWishlist();
// //   }, []);

// //   if (loading) return <p className="text-center mt-4 text-gray-600">Loading wishlist...</p>;
// //   if (error) return <p className="text-center text-red-500 mt-4">{error}</p>;

// //   return (
// //     <div className="max-w-7xl mx-auto mt-10 px-4">
// //       {/* Header */}
// //       <div className="flex justify-between items-center mb-6">
// //         <h1 className="text-3xl font-bold text-gray-800">💖 My Wishlist</h1>
// //         {wishlist.length > 0 && (
// //           <button
// //             onClick={clearWishlist}
// //             className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg font-medium shadow transition"
// //           >
// //             Clear All
// //           </button>
// //         )}
// //       </div>

// //       {/* Wishlist Grid */}
// //       {wishlist.length === 0 ? (
// //         <div className="text-center text-gray-500 mt-10">
// //           <p className="text-lg">No items in your wishlist.</p>
// //         </div>
// //       ) : (
// //         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
// //           {wishlist.map((item) => {
// //             const product = item.product;
// //             return (
// //               <div
// //                 key={item._id}
// //                 className="relative bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col overflow-hidden"
// //               >
// //                 {/* ❌ Remove Button */}
// //                 <button
// //                   onClick={() => removeFromWishlist(item._id)}
// //                   className="absolute top-3 right-3 text-red-500 hover:text-red-700 text-xl font-semibold"
// //                   title="Remove item"
// //                 >
// //                   ✕
// //                 </button>

// //                 {/* 🖼 Product Image */}
// //                 {product?.images?.length > 0 ? (
// //                   <img
// //                     src={product.images[0]}
// //                     alt={product.name}
// //                     className="w-full h-56 object-cover"
// //                   />
// //                 ) : (
// //                   <div className="w-full h-56 bg-gray-100 flex items-center justify-center text-gray-400">
// //                     No Image
// //                   </div>
// //                 )}

// //                 {/* 🏷 Product Info */}
// //                 <div className="p-4 flex flex-col flex-grow">
// //                   <h2 className="text-lg font-semibold text-gray-800 line-clamp-1 mb-1">
// //                     {product?.name || "Unnamed Product"}
// //                   </h2>

// //                   {product?.brand && (
// //                     <p className="text-gray-600 text-sm mb-1">
// //                       Brand: <span className="font-medium">{product.brand}</span>
// //                     </p>
// //                   )}

// //                   {product?.basePrice && (
// //                     <p className="text-gray-900 font-semibold mb-2">
// //                       ₹{product.basePrice}{" "}
// //                       {product?.discountPercentage ? (
// //                         <span className="text-green-600 text-sm ml-1">
// //                           ({product.discountPercentage}% OFF)
// //                         </span>
// //                       ) : null}
// //                     </p>
// //                   )}

// //                   <p className="text-gray-500 text-sm mb-3">
// //                     Added on: {new Date(item.addedAt).toLocaleDateString()}
// //                   </p>

// //                   {/* ✅ Buttons Section */}
// //                   <div className="mt-auto space-y-2">
// //                     <Link
// //                       to={`/product/${product?._id}`}
// //                       className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-2 rounded-lg font-medium transition"
// //                     >
// //                       View Product
// //                     </Link>

// //                     <button
// //                       onClick={() => addToCart(product._id)}
// //                       className="block w-full bg-green-600 hover:bg-green-700 text-white text-center py-2 rounded-lg font-medium transition"
// //                     >
// //                       Add to Cart
// //                     </button>

// //                     <button
// //                       onClick={() => buyNow(product._id)}
// //                       className="block w-full bg-yellow-500 hover:bg-yellow-600 text-white text-center py-2 rounded-lg font-medium transition"
// //                     >
// //                       Buy Now
// //                     </button>
// //                   </div>
// //                 </div>
// //               </div>
// //             );
// //           })}
// //         </div>
// //       )}
// //     </div>
// //   );
// // }

// // export default Wishlist;






















// // import React, { useEffect, useState } from "react";
// // import { fetchWithAuth } from "../refreshtoken/api";
// // import { Link } from "react-router-dom";

// // function Wishlist() {
// //   const [wishlist, setWishlist] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState("");

// //   const API_BASE = "https://ecommerce-backend-y1bv.onrender.com/api/wishlist";

// //   // ✅ Fetch all wishlist items
// //   const fetchWishlist = async () => {
// //     try {
// //       const data = await fetchWithAuth(API_BASE, { method: "GET" });
// //       setWishlist(data.wishlist || []);
// //     } catch (err) {
// //       console.error("Failed to fetch wishlist:", err);
// //       setError(err.message || "Something went wrong");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   // ✅ Remove single item
// //   const removeFromWishlist = async (productId) => {
// //     if (!window.confirm("Remove this product from your wishlist?")) return;
// //     try {
// //       await fetchWithAuth(`${API_BASE}/remove`, {
// //         method: "POST",
// //         body: JSON.stringify({ productId }),
// //       });
// //       setWishlist((prev) => prev.filter((item) => item._id !== productId));
// //     } catch (err) {
// //       console.error("Failed to remove item:", err);
// //       setError(err.message || "Failed to remove product");
// //     }
// //   };

// //   // ✅ Clear all items
// //   const clearWishlist = async () => {
// //     if (!window.confirm("Are you sure you want to clear your wishlist?")) return;
// //     try {
// //       await fetchWithAuth(`${API_BASE}/clear`, { method: "DELETE" });
// //       setWishlist([]);
// //     } catch (err) {
// //       console.error("Failed to clear wishlist:", err);
// //       setError(err.message || "Failed to clear wishlist");
// //     }
// //   };

// //   // ✅ Dummy Add to Cart
// //   const addToCart = async (productId) => {
// //     try {
// //       await fetchWithAuth("https://ecommerce-backend-y1bv.onrender.com/api/cart/add", {
// //         method: "POST",
// //         body: JSON.stringify({ productId, quantity: 1 }),
// //       });
// //       alert("Product added to cart!");
// //     } catch (err) {
// //       console.error("Failed to add to cart:", err);
// //       alert("Failed to add to cart");
// //     }
// //   };

// //   // ✅ Buy Now (Redirect)
// //   const buyNow = (productId) => {
// //     window.location.href = `/checkout?productId=${productId}`;
// //   };

// //   useEffect(() => {
// //     fetchWishlist();
// //   }, []);

// //   if (loading) return <p className="text-center mt-4 text-gray-600">Loading wishlist...</p>;
// //   if (error) return <p className="text-center text-red-500 mt-4">{error}</p>;

// //   return (
// //     <div className="max-w-7xl mx-auto mt-10 px-4">
// //       {/* Header */}
// //       <div className="flex justify-between items-center mb-6">
// //         <h1 className="text-3xl font-bold text-gray-800">💖 My Wishlist</h1>
// //         {wishlist.length > 0 && (
// //           <button
// //             onClick={clearWishlist}
// //             className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg font-medium shadow transition"
// //           >
// //             Clear All
// //           </button>
// //         )}
// //       </div>

// //       {/* Wishlist Grid */}
// //       {wishlist.length === 0 ? (
// //         <div className="text-center text-gray-500 mt-10">
// //           <p className="text-lg">No items in your wishlist.</p>
// //         </div>
// //       ) : (
// //         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
// //           {wishlist
// //             // ✅ Only show products that have a valid product._id
// //             .filter((item) => item?.product?._id)
// //             .map((item) => {
// //               const product = item.product;
// //               return (
// //                 <div
// //                   key={item._id}
// //                   className="relative bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col overflow-hidden"
// //                 >
// //                   {/* ❌ Remove Button */}
// //                   <button
// //                     onClick={() => removeFromWishlist(item._id)}
// //                     className="absolute top-3 right-3 text-red-500 hover:text-red-700 text-xl font-semibold"
// //                     title="Remove item"
// //                   >
// //                     ✕
// //                   </button>

// //                   {/* 🖼 Product Image */}
// //                   {product?.images?.length > 0 ? (
// //                     <img
// //                       src={product.images[0]}
// //                       alt={product.name}
// //                       className="w-full h-56 object-cover"
// //                     />
// //                   ) : (
// //                     <div className="w-full h-56 bg-gray-100 flex items-center justify-center text-gray-400">
// //                       No Image
// //                     </div>
// //                   )}

// //                   {/* 🏷 Product Info */}
// //                   <div className="p-4 flex flex-col flex-grow">
// //                     <h2 className="text-lg font-semibold text-gray-800 line-clamp-1 mb-1">
// //                       {product?.name || "Unnamed Product"}
// //                     </h2>

// //                     {product?.brand && (
// //                       <p className="text-gray-600 text-sm mb-1">
// //                         Brand: <span className="font-medium">{product.brand}</span>
// //                       </p>
// //                     )}

// //                     {product?.basePrice && (
// //                       <p className="text-gray-900 font-semibold mb-2">
// //                         ₹{product.basePrice}{" "}
// //                         {product?.discountPercentage ? (
// //                           <span className="text-green-600 text-sm ml-1">
// //                             ({product.discountPercentage}% OFF)
// //                           </span>
// //                         ) : null}
// //                       </p>
// //                     )}

// //                     <p className="text-gray-500 text-sm mb-3">
// //                       Added on: {new Date(item.addedAt).toLocaleDateString()}
// //                     </p>

// //                     {/* ✅ Buttons Section */}
// //                     <div className="mt-auto space-y-2">
// //                       <Link
// //                         to={`/product/${product._id}`}
// //                         className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-2 rounded-lg font-medium transition"
// //                       >
// //                         View Product
// //                       </Link>

// //                       <button
// //                         onClick={() => addToCart(product._id)}
// //                         className="block w-full bg-green-600 hover:bg-green-700 text-white text-center py-2 rounded-lg font-medium transition"
// //                       >
// //                         Add to Cart
// //                       </button>

// //                       <button
// //                         onClick={() => buyNow(product._id)}
// //                         className="block w-full bg-yellow-500 hover:bg-yellow-600 text-white text-center py-2 rounded-lg font-medium transition"
// //                       >
// //                         Buy Now
// //                       </button>
// //                     </div>
// //                   </div>
// //                 </div>
// //               );
// //             })}
// //         </div>
// //       )}
// //     </div>
// //   );
// // }

// // export default Wishlist;
















// // import React, { useEffect, useState } from "react";
// // import { fetchWithAuth } from "../refreshtoken/api";
// // import { Link } from "react-router-dom";

// // function Wishlist() {
// //   const [wishlist, setWishlist] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState("");

// //   const API_BASE = "https://ecommerce-backend-y1bv.onrender.com/api/wishlist";

// //   // ✅ Fetch all wishlist items
// //   const fetchWishlist = async () => {
// //     try {
// //       const data = await fetchWithAuth(API_BASE, { method: "GET" });
// //       setWishlist(data.wishlist || []);
// //     } catch (err) {
// //       console.error("Failed to fetch wishlist:", err);
// //       setError(err.message || "Something went wrong");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   // ✅ Remove single item
// //   const removeFromWishlist = async (productId) => {
// //     if (!window.confirm("Remove this product from your wishlist?")) return;
// //     try {
// //       await fetchWithAuth(`${API_BASE}/remove`, {
// //         method: "POST",
// //         body: JSON.stringify({ productId }),
// //       });
// //       setWishlist((prev) => prev.filter((item) => item._id !== productId));
// //     } catch (err) {
// //       console.error("Failed to remove item:", err);
// //       setError(err.message || "Failed to remove product");
// //     }
// //   };

// //   // ✅ Clear all items
// //   const clearWishlist = async () => {
// //     if (!window.confirm("Are you sure you want to clear your wishlist?")) return;
// //     try {
// //       await fetchWithAuth(`${API_BASE}/clear`, { method: "DELETE" });
// //       setWishlist([]);
// //     } catch (err) {
// //       console.error("Failed to clear wishlist:", err);
// //       setError(err.message || "Failed to clear wishlist");
// //     }
// //   };

// //   // ✅ Add to Cart
// //   const addToCart = async (productId) => {
// //     try {
// //       await fetchWithAuth("https://ecommerce-backend-y1bv.onrender.com/api/cart/add", {
// //         method: "POST",
// //         body: JSON.stringify({ productId, quantity: 1 }),
// //       });
// //       alert("✅ Product added to cart!");
// //     } catch (err) {
// //       console.error("Failed to add to cart:", err);
// //       alert("❌ Failed to add to cart");
// //     }
// //   };

// //   // ✅ Buy Now
// //   const buyNow = (productId) => {
// //     window.location.href = `/checkout?productId=${productId}`;
// //   };

// //   useEffect(() => {
// //     fetchWishlist();
// //   }, []);

// //   if (loading) return <p className="text-center mt-6 text-gray-600">Loading wishlist...</p>;
// //   if (error) return <p className="text-center text-red-500 mt-6">{error}</p>;

// //   return (
// //     <div className="max-w-[1300px] mx-auto mt-10 px-4">
// //       {/* Header */}
// //       <div className="flex justify-between items-center mb-8">
// //         <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
// //           💖 My Wishlist
// //         </h1>
// //         {wishlist.length > 0 && (
// //           <button
// //             onClick={clearWishlist}
// //             className="bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 text-white px-6 py-2 rounded-xl font-medium shadow-md hover:shadow-lg transition-all duration-300"
// //           >
// //             Clear All
// //           </button>
// //         )}
// //       </div>

// //       {/* Wishlist Grid */}
// //       {wishlist.length === 0 ? (
// //         <div className="text-center text-gray-500 mt-12">
// //           <p className="text-lg">No items in your wishlist yet.</p>
// //         </div>
// //       ) : (
// //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
// //           {wishlist
// //             .filter((item) => item.product && item.product._id)
// //             .map((item) => {
// //               const product = item.product;
// //               return (
// //                 <div
// //                   key={item._id}
// //                   className="relative bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col"
// //                 >
// //                   {/* Remove Button */}
// //                   <button
// //                     onClick={() => removeFromWishlist(item._id)}
// //                     className="absolute top-3 right-3 text-red-500 hover:text-red-700 text-xl font-semibold transition"
// //                     title="Remove item"
// //                   >
// //                     ✕
// //                   </button>

// //                   {/* Product Image */}
// //                   {product?.images?.length > 0 ? (
// //                     <img
// //                       src={product.images[0]}
// //                       alt={product.name}
// //                       className="w-full h-44 object-cover rounded-t-2xl"
// //                     />
// //                   ) : (
// //                     <div className="w-full h-44 bg-gray-100 flex items-center justify-center text-gray-400">
// //                       No Image
// //                     </div>
// //                   )}

// //                   {/* Product Info */}
// //                   <div className="p-5 flex flex-col flex-grow">
// //                     <h2 className="text-lg font-semibold text-gray-800 mb-1 truncate">
// //                       {product?.name || "Unnamed Product"}
// //                     </h2>
// //                     {product?.brand && (
// //                       <p className="text-gray-600 text-sm mb-1">
// //                         Brand: <span className="font-medium">{product.brand}</span>
// //                       </p>
// //                     )}
// //                     {product?.basePrice && (
// //                       <p className="text-gray-900 font-semibold mb-2">
// //                         ₹{product.basePrice}{" "}
// //                         {product?.discountPercentage ? (
// //                           <span className="text-green-600 text-sm ml-1">
// //                             ({product.discountPercentage}% OFF)
// //                           </span>
// //                         ) : null}
// //                       </p>
// //                     )}
// //                     <p className="text-gray-500 text-sm mb-4">
// //                       Added on: {new Date(item.addedAt).toLocaleDateString()}
// //                     </p>

// //                     {/* Action Buttons */}
// //                     <div className="mt-auto space-y-2">
// //                       <Link
// //                         to={`/product/${product._id}`}
// //                         className="block w-full bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white text-center py-2 rounded-lg font-medium shadow-sm hover:shadow-md transition-all duration-300"
// //                       >
// //                         View Product
// //                       </Link>

// //                       <button
// //                         onClick={() => addToCart(product._id)}
// //                         className="block w-full bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white py-2 rounded-lg font-medium shadow-sm hover:shadow-md transition-all duration-300"
// //                       >
// //                         Add to Cart
// //                       </button>

// //                       <button
// //                         onClick={() => buyNow(product._id)}
// //                         className="block w-full bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-white py-2 rounded-lg font-medium shadow-sm hover:shadow-md transition-all duration-300"
// //                       >
// //                         Buy Now
// //                       </button>
// //                     </div>
// //                   </div>
// //                 </div>
// //               );
// //             })}
// //         </div>
// //       )}
// //     </div>
// //   );
// // }

// // export default Wishlist;







// import React, { useEffect, useState } from "react";
// import { fetchWithAuth } from "../refreshtoken/api";
// import { Link, useNavigate } from "react-router-dom";

// function Wishlist() {
//   const [wishlist, setWishlist] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [quantities, setQuantities] = useState({});
//   const navigate = useNavigate();

//   const API_BASE = "https://ecommerce-backend-y1bv.onrender.com/api/wishlist";
//   const CART_API = "https://ecommerce-backend-y1bv.onrender.com/api/cart/add";

//   // ✅ Fetch Wishlist Items
//   const fetchWishlist = async () => {
//     try {
//       const data = await fetchWithAuth(API_BASE, { method: "GET" });
//       setWishlist(data.wishlist || []);
//     } catch (err) {
//       console.error("Failed to fetch wishlist:", err);
//       setError(err.message || "Something went wrong");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // ✅ Remove Item
//   const removeFromWishlist = async (productId) => {
//     if (!window.confirm("Remove this product from your wishlist?")) return;
//     try {
//       await fetchWithAuth(`${API_BASE}/remove`, {
//         method: "POST",
//         body: JSON.stringify({ productId }),
//       });
//       setWishlist((prev) => prev.filter((item) => item._id !== productId));
//     } catch (err) {
//       console.error("Failed to remove item:", err);
//       setError(err.message || "Failed to remove product");
//     }
//   };

//   // ✅ Clear Wishlist
//   const clearWishlist = async () => {
//     if (!window.confirm("Are you sure you want to clear your wishlist?")) return;
//     try {
//       await fetchWithAuth(`${API_BASE}/clear`, { method: "DELETE" });
//       setWishlist([]);
//     } catch (err) {
//       console.error("Failed to clear wishlist:", err);
//       setError(err.message || "Failed to clear wishlist");
//     }
//   };

//   // ✅ Handle Quantity Change
//   const handleQuantityChange = (productId, type) => {
//     setQuantities((prev) => {
//       const current = prev[productId] || 1;
//       if (type === "increase") return { ...prev, [productId]: current + 1 };
//       if (type === "decrease" && current > 1)
//         return { ...prev, [productId]: current - 1 };
//       return prev;
//     });
//   };

//   // ✅ Add to Cart (Fixed)
//   const addToCart = async (productId) => {
//     const quantity = quantities[productId] || 1;

//     try {
//       const token = localStorage.getItem("accessToken");
//       const response = await fetch(CART_API, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: token ? `Bearer ${token}` : "",
//         },
//         body: JSON.stringify({ productId, quantity }),
//       });

//       const res = await response.json();

//       if (response.ok && (res.success || res.message || res.cart)) {
//         alert(`✅ Added ${quantity} item(s) to cart!`);
//         navigate("/cart");
//       } else {
//         console.error("Cart API response:", res);
//         alert(`⚠️ Failed to add product to cart. ${res.message || "Try again."}`);
//       }
//     } catch (err) {
//       console.error("Error adding to cart:", err);
//       alert("❌ Failed to add product to cart. Please check the backend.");
//     }
//   };

//   // ✅ Buy Now
//   const buyNow = (productId) => {
//     window.location.href = `/checkout?productId=${productId}`;
//   };

//   useEffect(() => {
//     fetchWishlist();
//   }, []);

//   if (loading) return <p className="text-center mt-6 text-gray-600">Loading wishlist...</p>;
//   if (error) return <p className="text-center text-red-500 mt-6">{error}</p>;

//   return (
//     <div className="max-w-[1300px] mx-auto mt-10 px-4">
//       {/* Header */}
//       <div className="flex justify-between items-center mb-8">
//         <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
//           💖 My Wishlist
//         </h1>
//         {wishlist.length > 0 && (
//           <button
//             onClick={clearWishlist}
//             className="bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 text-white px-6 py-2 rounded-xl font-medium shadow-md hover:shadow-lg transition-all duration-300"
//           >
//             Clear All
//           </button>
//         )}
//       </div>

//       {/* Wishlist Grid */}
//       {wishlist.length === 0 ? (
//         <div className="text-center text-gray-500 mt-12">
//           <p className="text-lg">No items in your wishlist yet.</p>
//         </div>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
//           {wishlist
//             .filter((item) => item.product && item.product._id)
//             .map((item) => {
//               const product = item.product;
//               const quantity = quantities[product._id] || 1;
//               return (
//                 <div
//                   key={item._id}
//                   className="relative bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col"
//                 >
//                   {/* Remove Button */}
//                   <button
//                     onClick={() => removeFromWishlist(item._id)}
//                     className="absolute top-3 right-3 text-red-500 hover:text-red-700 text-xl font-semibold transition"
//                     title="Remove item"
//                   >
//                     ✕
//                   </button>

//                   {/* Product Image */}
//                   {product?.images?.length > 0 ? (
//                     <img
//                       src={product.images[0]}
//                       alt={product.name}
//                       className="w-full h-36 object-cover rounded-t-2xl"
//                     />
//                   ) : (
//                     <div className="w-full h-36 bg-gray-100 flex items-center justify-center text-gray-400">
//                       No Image
//                     </div>
//                   )}

//                   {/* Product Info */}
//                   <div className="p-5 flex flex-col flex-grow">
//                     <h2 className="text-lg font-semibold text-gray-800 mb-1 truncate">
//                       {product?.name || "Unnamed Product"}
//                     </h2>

//                     {product?.brand && (
//                       <p className="text-gray-600 text-sm mb-1">
//                         Brand: <span className="font-medium">{product.brand}</span>
//                       </p>
//                     )}

//                     {product?.basePrice && (
//                       <p className="text-gray-900 font-semibold mb-2">
//                         ₹{product.basePrice}{" "}
//                         {product?.discountPercentage ? (
//                           <span className="text-green-600 text-sm ml-1">
//                             ({product.discountPercentage}% OFF)
//                           </span>
//                         ) : null}
//                       </p>
//                     )}

//                     <p className="text-gray-500 text-sm mb-4">
//                       Added on: {new Date(item.addedAt).toLocaleDateString()}
//                     </p>

//                     {/* Quantity Counter */}
//                     <div className="flex items-center justify-center gap-3 mb-4">
//                       <button
//                         onClick={() => handleQuantityChange(product._id, "decrease")}
//                         className="bg-gray-200 hover:bg-gray-300 text-gray-700 w-8 h-8 rounded-full flex items-center justify-center font-bold"
//                       >
//                         −
//                       </button>
//                       <span className="text-lg font-semibold">{quantity}</span>
//                       <button
//                         onClick={() => handleQuantityChange(product._id, "increase")}
//                         className="bg-gray-200 hover:bg-gray-300 text-gray-700 w-8 h-8 rounded-full flex items-center justify-center font-bold"
//                       >
//                         +
//                       </button>
//                     </div>

//                     {/* Action Buttons */}
//                     <div className="mt-auto space-y-2">
//                       <Link
//                         to={`/product/${product._id}`}
//                         className="block w-full bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white text-center py-2 rounded-lg font-medium shadow-sm hover:shadow-md transition-all duration-300"
//                       >
//                         View Product
//                       </Link>

//                       <button
//                         onClick={() => addToCart(product._id)}
//                         className="block w-full bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white py-2 rounded-lg font-medium shadow-sm hover:shadow-md transition-all duration-300"
//                       >
//                         Add to Cart
//                       </button>

//                       <button
//                         onClick={() => buyNow(product._id)}
//                         className="block w-full bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-white py-2 rounded-lg font-medium shadow-sm hover:shadow-md transition-all duration-300"
//                       >
//                         Buy Now
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//         </div>
//       )}
//     </div>
//   );
// }

// export default Wishlist;

import React, { useEffect, useState } from "react";
import { fetchWithAuth } from "../refreshtoken/api";
import { Link, useNavigate } from "react-router-dom";
import { ShoppingBag, X, Trash2, Eye } from "lucide-react";
import { motion } from "framer-motion";

function Wishlist() {
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const API_BASE = "https://ecommerce-backend-y1bv.onrender.com/api/wishlist";
  const CART_API = "https://ecommerce-backend-y1bv.onrender.com/api/cart/add";

  // ✅ Fetch Wishlist
  const fetchWishlist = async () => {
    try {
      const data = await fetchWithAuth(API_BASE, { method: "GET" });
      setWishlist(data.wishlist || []);
    } catch (err) {
      setError(err.message || "Failed to load wishlist");
    } finally {
      setLoading(false);
    }
  };

  // ❌ Remove Single Item
  const removeFromWishlist = async (productId) => {
    try {
      await fetchWithAuth(`${API_BASE}/remove`, {
        method: "POST",
        body: JSON.stringify({ productId }),
      });
      setWishlist((prev) => prev.filter((item) => item._id !== productId));
    } catch {
      alert("Error removing item.");
    }
  };

  // 🧹 Clear Entire Wishlist
  const clearWishlist = async () => {
    if (!window.confirm("Are you sure you want to clear your wishlist?")) return;
    try {
      await fetchWithAuth(`${API_BASE}/clear`, { method: "DELETE" });
      setWishlist([]);
    } catch {
      alert("Error clearing wishlist");
    }
  };

  // 🛒 Add to Cart
  const addToCart = async (productId) => {
    try {
      const token = localStorage.getItem("accessToken");
      const response = await fetch(CART_API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token ? `Bearer ${token}` : "",
        },
        body: JSON.stringify({ productId, quantity: 1 }),
      });

      const res = await response.json();
      if (response.ok) {
        alert("Added to cart!");
        navigate("/cart");
      } else {
        alert(res.message || "Failed to add to cart");
      }
    } catch {
      alert("Error adding to cart");
    }
  };

  useEffect(() => {
    fetchWishlist();
  }, []);

  if (loading)
    return (
      <div className="text-center mt-20 text-gray-600 animate-pulse text-lg">
        Loading your wishlist...
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
            My Wishlist
          </span>
        </motion.h1>

        {wishlist.length > 0 && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={clearWishlist}
            className="flex items-center gap-2 px-5 py-2 rounded-xl font-medium shadow-md bg-[#002349] text-white hover:bg-[#003366] transition-all"
          >
            <Trash2 size={18} /> Clear All
          </motion.button>
        )}
      </div>

      {/* Empty Wishlist */}
      {wishlist.length === 0 ? (
        <div className="text-center text-gray-500 mt-16 text-lg">
          💔 Your wishlist is empty. <br /> Start exploring products!
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {wishlist
            .filter((item) => item.product && item.product._id)
            .map((item) => {
              const product = item.product;
              return (
                <motion.div
                  key={item._id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="relative bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col overflow-hidden"
                >
                  {/* Floating Remove Button */}
                  <motion.button
                    whileHover={{ rotate: 90, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => removeFromWishlist(item._id)}
                    className="absolute top-3 right-3 bg-[#002349] text-white w-10 h-10 rounded-full flex items-center justify-center shadow-md hover:bg-[#957C3D] transition-all"
                    title="Remove"
                  >
                    <X size={20} />
                  </motion.button>

                  {/* Product Image */}
                  <div className="relative">
                    <img
                      src={
                        product?.images?.[0] ||
                        "https://via.placeholder.com/400x300?text=No+Image"
                      }
                      alt={product.name}
                      className="h-64 w-full object-cover rounded-t-2xl"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="p-5 flex flex-col justify-between flex-grow">
                    <div>
                      <h2 className="text-xl font-semibold text-[#002349] truncate">
                        {product?.name || "Unnamed Product"}
                      </h2>
                      <p className="text-gray-500 text-sm mt-1">
                        Brand:{" "}
                        <span className="font-medium text-[#957C3D]">
                          {product?.brand || "N/A"}
                        </span>
                      </p>
                      <p className="text-2xl font-bold text-[#002349] mt-2">
                        ₹{product.basePrice}
                        {product.discountPercentage && (
                          <span className="text-[#957C3D] text-sm ml-2">
                            ({product.discountPercentage}% OFF)
                          </span>
                        )}
                      </p>
                    </div>

                    {/* Buttons */}
                    <div className="mt-6 flex flex-col sm:flex-row gap-3 w-full">
                      {/* Add to Cart */}
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => addToCart(product._id)}
                        className="flex-1 flex items-center justify-center gap-2 bg-[#002349] text-white px-4 py-2 rounded-xl font-semibold shadow-md hover:bg-[#003366] transition-all"
                      >
                        <ShoppingBag size={18} /> Add to Cart
                      </motion.button>

                      {/* View Details */}
                      <Link
                        to={`/product/${product._id}`}
                        className="flex-1 flex items-center justify-center gap-2 border border-[#957C3D] text-[#957C3D] hover:bg-[#957C3D] hover:text-white px-4 py-2 rounded-xl font-semibold transition-all"
                      >
                        <Eye size={18} /> View Details
                      </Link>

                      {/* Remove Button (Below Style) */}
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => removeFromWishlist(item._id)}
                        className="flex-1 flex items-center justify-center gap-2 border border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-4 py-2 rounded-xl font-semibold transition-all"
                      >
                        <Trash2 size={18} /> Remove
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
        </div>
      )}
    </div>
  );
}

export default Wishlist;
