// // import React, { useEffect, useState } from "react";
// // import { useParams, useNavigate } from "react-router-dom";
// // import { fetchWithAuth } from "../refreshtoken/api";
// // import { motion } from "framer-motion";
// // import { toast, ToastContainer } from "react-toastify";
// // import "react-toastify/dist/ReactToastify.css";
// // import {
// //   Share2,
// //   Truck,
// //   ShieldCheck,
// //   CreditCard,
// //   Ruler,
// //   ArrowLeft,
// //   Heart,
// //   Star,
// //   X,
// //   Tag,
// //   User,
// //   ShoppingCart,
// //   ShoppingBag,
// // } from "lucide-react";

// // function CategoryProductUnique() {
// //   const { id } = useParams();
// //   const navigate = useNavigate();

// //   const [product, setProduct] = useState(null);
// //   const [wishlist, setWishlist] = useState(false);
// //   const [selectedSize, setSelectedSize] = useState("");
// //   const [showSizeChart, setShowSizeChart] = useState(false);
// //   const [pincode, setPincode] = useState("");
// //   const [relatedProducts, setRelatedProducts] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [addedToCart, setAddedToCart] = useState(false); // ✅ FIXED missing state

// //   // ✅ Fetch single product
// //   useEffect(() => {
// //     const fetchProduct = async () => {
// //       try {
// //         const res = await fetch(
// //           `https://ecommerce-backend-y1bv.onrender.com/api/product/${id}`
// //         );
// //         if (!res.ok) throw new Error("Failed to fetch product");
// //         const data = await res.json();
// //         setProduct(data);
// //       } catch (err) {
// //         console.error(err);
// //         toast.error("Failed to load product details.");
// //       } finally {
// //         setLoading(false);
// //       }
// //     };
// //     if (id) fetchProduct();
// //   }, [id]);

// //   // ✅ Fetch related products
// //   useEffect(() => {
// //     const fetchRelated = async () => {
// //       if (!product?.category) return;
// //       try {
// //         const res = await fetch(
// //           `https://ecommerce-backend-y1bv.onrender.com/api/product/category/${product.category}`
// //         );
// //         const data = await res.json();
// //         const filtered = (data.products || []).filter(
// //           (p) => p._id !== product._id
// //         );
// //         setRelatedProducts(filtered.slice(0, 4));
// //       } catch (err) {
// //         console.error(err);
// //       }
// //     };
// //     if (product) fetchRelated();
// //   }, [product]);

// //   // ✅ Calculate discount
// //   const discountPercent = product?.mrp
// //     ? Math.round(((product.mrp - product.basePrice) / product.mrp) * 100)
// //     : 0;

// //   // ✅ Share functionality
// //   const handleShare = () => {
// //     if (navigator.share) {
// //       navigator.share({
// //         title: product?.name,
// //         text: "Check out this product!",
// //         url: window.location.href,
// //       });
// //     } else {
// //       toast.info("Sharing not supported on this browser");
// //     }
// //   };

// //   // ✅ Add to Cart function
// //   const handleAddToCart = async () => {
// //     if (!product?._id) return toast.error("Product not found");

// //     try {
// //       const data = await fetchWithAuth(
// //         "https://ecommerce-backend-y1bv.onrender.com/api/cart/add",
// //         {
// //           method: "POST",
// //           headers: { "Content-Type": "application/json" },
// //           body: JSON.stringify({
// //             productId: product._id,
// //             quantity: 1,
// //           }),
// //         }
// //       );

// //       if (data.success) {
// //         toast.success("✅ Product added to cart successfully!");
// //         setAddedToCart(true);
// //         setTimeout(() => setAddedToCart(false), 2000);
// //       } else {
// //         toast.error(data.message || "⚠ Failed to add product to cart");
// //       }
// //     } catch (err) {
// //       console.error(err);
// //       toast.error("❌ Something went wrong while adding to cart");
// //     }
// //   };

// //   if (loading)
// //     return (
// //       <div className="text-center py-10 text-[#002349] text-lg">
// //         Loading product details...
// //       </div>
// //     );

// //   // Dummy reviews
// //   const reviews = [
// //     {
// //       name: "Amit Verma",
// //       rating: 5,
// //       comment: "Excellent product! Fabric quality and fit are perfect.",
// //       date: "Oct 25, 2025",
// //     },
// //     {
// //       name: "Riya Sharma",
// //       rating: 4,
// //       comment: "Loved the color and design. Slightly delayed delivery.",
// //       date: "Oct 20, 2025",
// //     },
// //     {
// //       name: "Mohit Singh",
// //       rating: 5,
// //       comment: "Totally worth the price. I’ll buy again!",
// //       date: "Oct 18, 2025",
// //     },
// //   ];

// //   return (
// //     <div className="container mx-auto px-4 py-10 text-[#002349]">
// //       <ToastContainer />

// //       {/* 🔙 Back Button */}
// //       <button
// //         onClick={() => navigate(-1)}
// //         className="flex items-center gap-2 mb-6 px-4 py-2 bg-[#002349] text-white rounded-lg hover:bg-[#00172f] transition"
// //       >
// //         <ArrowLeft size={18} /> Back
// //       </button>

// //       {/* 🖼 Product Details Section */}
// //       <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
// //         {/* Left - Image */}
// //         <motion.div
// //           initial={{ opacity: 0, x: -40 }}
// //           animate={{ opacity: 1, x: 0 }}
// //           transition={{ duration: 0.6 }}
// //           className="relative flex justify-center"
// //         >
// //           {discountPercent > 0 && (
// //             <div className="absolute top-4 left-4 bg-[#957C3D] text-white px-3 py-1 text-sm font-semibold rounded-lg shadow-md">
// //               {discountPercent}% OFF
// //             </div>
// //           )}
// //           <img
// //             src={
// //               product.images?.[0] ||
// //               "https://via.placeholder.com/400x300?text=No+Image"
// //             }
// //             alt={product.name}
// //             className="w-full max-w-md rounded-2xl shadow-xl border-4 border-[#957C3D]"
// //           />
// //           <button
// //             onClick={() => setWishlist(!wishlist)}
// //             className={`absolute top-4 right-4 p-2 rounded-full shadow-md transition ${
// //               wishlist ? "bg-[#957C3D] text-white" : "bg-white text-[#002349]"
// //             }`}
// //           >
// //             <Heart
// //               size={22}
// //               fill={wishlist ? "#ffffff" : "none"}
// //               className="transition-all"
// //             />
// //           </button>
// //         </motion.div>

// //         {/* Right - Product Details */}
// //         <motion.div
// //           initial={{ opacity: 0, x: 40 }}
// //           animate={{ opacity: 1, x: 0 }}
// //           transition={{ duration: 0.6 }}
// //           className="space-y-4"
// //         >
// //           <h1 className="text-3xl font-extrabold">{product.name}</h1>
// //           <p className="text-gray-600">{product.description}</p>

// //           {/* ⭐ Rating */}
// //           <div className="flex items-center gap-2">
// //             {Array.from({ length: 5 }).map((_, i) => (
// //               <Star
// //                 key={i}
// //                 size={20}
// //                 fill={i < Math.round(product.rating || 4.3) ? "#FFD700" : "none"}
// //                 stroke="#957C3D"
// //               />
// //             ))}
// //             <span className="text-sm text-gray-500 ml-2">
// //               {product.rating || 4.3} ({reviews.length} reviews)
// //             </span>
// //           </div>

// //           {/* 💰 Price */}
// //           <div>
// //             <p className="text-2xl font-bold text-[#957C3D]">
// //               ₹{product.basePrice?.toLocaleString()}
// //             </p>
// //             {product.mrp && (
// //               <p className="text-gray-500 line-through">
// //                 MRP: ₹{product.mrp?.toLocaleString()}
// //               </p>
// //             )}
// //           </div>

// //           {/* 📏 Size Selection */}
// //           <div className="mt-4 flex items-center gap-4 flex-wrap">
// //             {["S", "M", "L", "XL", "XXL"].map((size) => (
// //               <motion.button
// //                 whileTap={{ scale: 0.9 }}
// //                 key={size}
// //                 onClick={() => setSelectedSize(size)}
// //                 className={`w-10 h-10 flex items-center justify-center rounded-lg border text-sm font-semibold transition-all duration-200 ${
// //                   selectedSize === size
// //                     ? "bg-[#957C3D] text-white border-[#957C3D]"
// //                     : "border-gray-300 text-[#002349] hover:border-[#957C3D]"
// //                 }`}
// //               >
// //                 {size}
// //               </motion.button>
// //             ))}
// //             <button
// //               onClick={() => setShowSizeChart(true)}
// //               className="flex items-center gap-1 text-[#957C3D] text-sm font-medium hover:underline"
// //             >
// //               <Ruler size={16} /> Size Chart
// //             </button>
// //           </div>

// //           {/* 🚚 Delivery Options */}
// //           <div className="mt-6">
// //             <div className="flex justify-between flex-wrap gap-3 text-sm font-medium text-[#002349]">
// //               <div className="flex items-center gap-2">
// //                 <Truck size={18} className="text-[#957C3D]" /> Free Delivery
// //               </div>
// //               <div className="flex items-center gap-2">
// //                 <ShieldCheck size={18} className="text-[#957C3D]" /> Easy Returns
// //               </div>
// //               <div className="flex items-center gap-2">
// //                 <CreditCard size={18} className="text-[#957C3D]" /> EMI Available
// //               </div>
// //             </div>

// //             {/* Pincode Input */}
// //             <div className="flex gap-2 items-center mt-3">
// //               <input
// //                 type="text"
// //                 value={pincode}
// //                 onChange={(e) => setPincode(e.target.value)}
// //                 placeholder="Enter Pincode"
// //                 className="border rounded-lg px-3 py-2 w-40 text-sm focus:border-[#957C3D] outline-none"
// //               />
// //               <button className="px-4 py-2 bg-[#957C3D] text-white rounded-lg hover:bg-[#7a6633] text-sm">
// //                 Check
// //               </button>
// //             </div>
// //           </div>

// //           {/* 🎁 Offers */}
// //           <div className="mt-6 border rounded-xl p-4 bg-[#fff9ef]">
// //             <h3 className="font-semibold flex items-center gap-2 text-[#957C3D] mb-2">
// //               <Tag size={18} /> Available Offers
// //             </h3>
// //             <ul className="text-sm text-gray-700 list-disc pl-6 space-y-1">
// //               <li>Get 10% off with code <strong>NEW10</strong></li>
// //               <li>Flat ₹100 off on prepaid orders above ₹999</li>
// //               <li>5% cashback with XYZ Bank Credit Card</li>
// //             </ul>
// //           </div>

// //           {/* 🛒 Buttons */}
// //           <motion.div
// //             initial={{ opacity: 0, y: 40 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.6 }}
// //             className="mt-6 flex flex-wrap gap-4"
// //           >
// //             <motion.button
// //               whileHover={{ scale: 1.05 }}
// //               whileTap={{ scale: 0.95 }}
// //               onClick={handleAddToCart}
// //               className="flex items-center justify-center gap-2 px-6 py-3 bg-[#002349] text-white rounded-xl font-semibold shadow-md hover:bg-[#001b36] transition-all"
// //             >
// //               <ShoppingCart size={20} />{" "}
// //               {addedToCart ? "Added ✓" : "Add to Cart"}
// //             </motion.button>

// //           <motion.button
// //   whileHover={{ scale: 1.05 }}
// //   whileTap={{ scale: 0.95 }}
// //   onClick={() => {
// //     if (!selectedSize) {
// //       toast.warn("⚠ Please select a size before proceeding!");
// //       return;
// //     }
// //     navigate(`/buynow/${product._id}`);
// //   }}
// //   className="flex items-center justify-center gap-2 px-6 py-3 bg-[#957C3D] text-white rounded-xl font-semibold shadow-md hover:bg-[#7b6633] transition-all"
// // >
// //   <ShoppingBag size={20} /> Buy Now
// // </motion.button>




// //             <motion.button
// //               whileHover={{ scale: 1.05 }}
// //               whileTap={{ scale: 0.95 }}
// //               onClick={handleShare}
// //               className="flex items-center justify-center gap-2 px-6 py-3 border border-[#957C3D] text-[#002349] rounded-xl font-semibold hover:bg-[#fff5e1] transition-all"
// //             >
// //               <Share2 size={20} /> Share
// //             </motion.button>
// //           </motion.div>
// //         </motion.div>
// //       </div>

// // {/* ⭐ Rating & Reviews Section */}
// // <motion.div
// //   initial={{ opacity: 0, y: 40 }}
// //   whileInView={{ opacity: 1, y: 0 }}
// //   transition={{ duration: 0.8 }}
// //   className="mt-16"
// // >
// //   <h2 className="text-2xl font-bold text-center text-[#002349] mb-8">
// //     Ratings & Reviews
// //   </h2>

// //   <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
// //     {/* 🔹 Left Side – Rating Summary */}
// //     <motion.div
// //       initial={{ opacity: 0, x: -40 }}
// //       whileInView={{ opacity: 1, x: 0 }}
// //       transition={{ duration: 0.6 }}
// //       className="bg-[#fdfcf9] border border-[#957C3D]/30 p-6 rounded-2xl shadow-md flex flex-col justify-center items-center text-center"
// //     >
// //       <p className="text-6xl font-extrabold text-[#957C3D]">
// //         {product.rating || 4.3}
// //       </p>
// //       <div className="flex justify-center gap-1 mt-2 mb-3">
// //         {Array.from({ length: 5 }).map((_, i) => (
// //           <Star
// //             key={i}
// //             size={22}
// //             fill={i < Math.round(product.rating || 4.3) ? "#FFD700" : "none"}
// //             stroke="#957C3D"
// //           />
// //         ))}
// //       </div>
// //       <p className="text-sm text-gray-600 mb-6">
// //         Based on {reviews.length} verified reviews
// //       </p>

// //       {/* Dynamic Progress Bars */}
// //       <div className="w-full space-y-2">
// //         {[5, 4, 3, 2, 1].map((star) => {
// //           const count = reviews.filter((r) => r.rating === star).length;
// //           const percent = Math.round((count / reviews.length) * 100);
// //           return (
// //             <div key={star} className="flex items-center gap-3">
// //               <span className="w-6 text-sm font-medium">{star}★</span>
// //               <div className="flex-1 bg-gray-200 rounded-full h-2 overflow-hidden">
// //                 <motion.div
// //                   initial={{ width: 0 }}
// //                   animate={{ width: `${percent}%` }}
// //                   transition={{ duration: 0.8 }}
// //                   className="h-2 bg-[#957C3D] rounded-full"
// //                 ></motion.div>
// //               </div>
// //               <span className="text-sm text-gray-600 w-10 text-right">
// //                 {percent}%
// //               </span>
// //             </div>
// //           );
// //         })}
// //       </div>
// //     </motion.div>

// //     {/* 🔹 Right Side – Individual Reviews */}
// //     <motion.div
// //       initial={{ opacity: 0, x: 40 }}
// //       whileInView={{ opacity: 1, x: 0 }}
// //       transition={{ duration: 0.6 }}
// //       className="space-y-4 max-h-[400px] overflow-y-auto pr-2"
// //     >
// //       {reviews.map((r, index) => (
// //         <motion.div
// //           key={index}
// //           whileHover={{ scale: 1.02 }}
// //           className="bg-white border border-[#957C3D]/30 p-4 rounded-xl shadow-sm transition-all hover:shadow-lg"
// //         >
// //           <div className="flex items-center justify-between mb-2">
// //             <div className="flex items-center gap-2">
// //               <User className="text-[#957C3D]" size={18} />
// //               <p className="font-semibold text-sm">{r.name}</p>
// //             </div>
// //             <p className="text-xs text-gray-400">{r.date}</p>
// //           </div>

// //           <div className="flex items-center gap-1 mb-1">
// //             {Array.from({ length: 5 }).map((_, i) => (
// //               <Star
// //                 key={i}
// //                 size={16}
// //                 fill={i < r.rating ? "#FFD700" : "none"}
// //                 stroke="#957C3D"
// //               />
// //             ))}
// //           </div>

// //           <p className="text-gray-700 text-sm">{r.comment}</p>
// //         </motion.div>
// //       ))}
// //     </motion.div>
// //   </div>
// // </motion.div>



// //       {/* 🛍️ Related Products Section */}
// //       <motion.div
// //         initial={{ opacity: 0, y: 40 }}
// //         whileInView={{ opacity: 1, y: 0 }}
// //         transition={{ duration: 0.8 }}
// //         className="mt-16"
// //       >
// //         <h2 className="text-2xl font-bold text-center text-[#002349] mb-8">
// //           Related Products
// //         </h2>

// //         {relatedProducts.length === 0 ? (
// //           <p className="text-center text-gray-500">
// //             No related products found.
// //           </p>
// //         ) : (
// //           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
// //             {relatedProducts.map((item, index) => (
// //               <motion.div
// //                 key={index}
// //                 whileHover={{ scale: 1.05 }}
// //                 initial={{ opacity: 0, y: 30 }}
// //                 whileInView={{ opacity: 1, y: 0 }}
// //                 transition={{ duration: 0.6, delay: index * 0.1 }}
// //                 onClick={() => navigate(`/product/${item._id}`)}
// //                 className="cursor-pointer bg-white border border-[#957C3D]/30 rounded-xl shadow-md hover:shadow-xl overflow-hidden transition-all"
// //               >
// //                 <img
// //                   src={
// //                     item.images?.[0] ||
// //                     "https://via.placeholder.com/300x300?text=No+Image"
// //                   }
// //                   alt={item.name}
// //                   className="w-full h-60 object-cover"
// //                 />
// //                 <div className="p-4">
// //                   <h3 className="font-semibold text-[#002349] text-sm truncate">
// //                     {item.name}
// //                   </h3>
// //                   <p className="text-[#957C3D] font-bold mt-1">
// //                     ₹{item.basePrice?.toLocaleString()}
// //                   </p>
// //                   <p className="text-xs text-gray-500 line-through">
// //                     ₹{item.mrp?.toLocaleString()}
// //                   </p>
// //                   <div className="flex items-center gap-1 mt-2">
// //                     {Array.from({ length: 5 }).map((_, i) => (
// //                       <Star
// //                         key={i}
// //                         size={14}
// //                         fill={
// //                           i < Math.round(item.rating || 4) ? "#FFD700" : "none"
// //                         }
// //                         stroke="#957C3D"
// //                       />
// //                     ))}
// //                     <span className="text-xs text-gray-500 ml-1">
// //                       {item.rating || 4.0}
// //                     </span>
// //                   </div>
// //                 </div>
// //               </motion.div>
// //             ))}
// //           </div>
// //         )}
// //       </motion.div>

// //       {/* 🧾 Size Chart Modal */}
// //       {showSizeChart && (
// //         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
// //           <motion.div
// //             initial={{ opacity: 0, scale: 0.8 }}
// //             animate={{ opacity: 1, scale: 1 }}
// //             transition={{ duration: 0.3 }}
// //             className="bg-white rounded-xl p-6 w-[90%] max-w-md shadow-lg relative"
// //           >
// //             <button
// //               onClick={() => setShowSizeChart(false)}
// //               className="absolute top-3 right-3 text-gray-600 hover:text-black"
// //             >
// //               <X size={18} />
// //             </button>
// //             <h2 className="text-lg font-bold text-[#002349] mb-4 flex items-center gap-2">
// //               <Ruler size={18} className="text-[#957C3D]" /> Size Chart
// //             </h2>
// //             <table className="w-full border border-gray-300 text-sm">
// //               <thead className="bg-[#f9f9f9]">
// //                 <tr>
// //                   <th className="p-2 border">Size</th>
// //                   <th className="p-2 border">Chest</th>
// //                   <th className="p-2 border">Waist</th>
// //                   <th className="p-2 border">Length</th>
// //                 </tr>
// //               </thead>
// //               <tbody>
// //                 {[
// //                   { size: "S", chest: 36, waist: 30, length: 26 },
// //                   { size: "M", chest: 38, waist: 32, length: 27 },
// //                   { size: "L", chest: 40, waist: 34, length: 28 },
// //                   { size: "XL", chest: 42, waist: 36, length: 29 },
// //                   { size: "XXL", chest: 44, waist: 38, length: 30 },
// //                 ].map((s) => (
// //                   <tr key={s.size} className="text-center">
// //                     <td className="border p-2 font-semibold">{s.size}</td>
// //                     <td className="border p-2">{s.chest}"</td>
// //                     <td className="border p-2">{s.waist}"</td>
// //                     <td className="border p-2">{s.length}"</td>
// //                   </tr>
// //                 ))}
// //               </tbody>
// //             </table>
// //           </motion.div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }

// // export default CategoryProductUnique;


// // src/components/CategoryProductUnique.jsx
// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { fetchWithAuth } from "../refreshtoken/api";
// import { motion } from "framer-motion";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import {
//   Share2,
//   Truck,
//   ShieldCheck,
//   CreditCard,
//   Ruler,
//   ArrowLeft,
//   Heart,
//   Star,
//   X,
//   Tag,
//   User,
//   ShoppingCart,
//   ShoppingBag,
// } from "lucide-react";

// function CategoryProductUnique() {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const [product, setProduct] = useState(null);
//   const [wishlist, setWishlist] = useState(false);
//   const [selectedSize, setSelectedSize] = useState("");
//   const [showSizeChart, setShowSizeChart] = useState(false);
//   const [pincode, setPincode] = useState("");
//   const [relatedProducts, setRelatedProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [addedToCart, setAddedToCart] = useState(false);

//   // ✅ Fetch single product details
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
//         console.error(err);
//         toast.error("Failed to load product details.");
//       } finally {
//         setLoading(false);
//       }
//     };
//     if (id) fetchProduct();
//   }, [id]);

//   // ✅ Fetch related products
//   useEffect(() => {
//     const fetchRelated = async () => {
//       if (!product?.category) return;
//       try {
//         const res = await fetch(
//           `https://ecommerce-backend-y1bv.onrender.com/api/product/category/${product.category}`
//         );
//         const data = await res.json();
//         const filtered = (data.products || []).filter(
//           (p) => p._id !== product._id
//         );
//         setRelatedProducts(filtered.slice(0, 4));
//       } catch (err) {
//         console.error(err);
//       }
//     };
//     if (product) fetchRelated();
//   }, [product]);

//   // ✅ Add to Cart
//   const handleAddToCart = async () => {
//     if (!product?._id) return toast.error("Product not found");
//     try {
//       const data = await fetchWithAuth(
//         "https://ecommerce-backend-y1bv.onrender.com/api/cart/add",
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ productId: product._id, quantity: 1 }),
//         }
//       );

//       if (data.success) {
//         toast.success("🛒 Product added to cart!");
//         setAddedToCart(true);
//         setTimeout(() => setAddedToCart(false), 1500);
//       } else {
//         toast.error(data.message || "Failed to add to cart");
//       }
//     } catch (err) {
//       console.error(err);
//       toast.error("Something went wrong!");
//     }
//   };

//   // ✅ Add / Remove Wishlist
//   const handleWishlistToggle = async () => {
//     if (!product?._id) return toast.error("Product not found");

//     try {
//       const endpoint = wishlist
//         ? "https://ecommerce-backend-y1bv.onrender.com/api/wishlist/remove"
//         : "https://ecommerce-backend-y1bv.onrender.com/api/wishlist/add";

//       const data = await fetchWithAuth(endpoint, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ productId: product._id }),
//       });

//       if (data.success) {
//         setWishlist(!wishlist);
//         wishlist
//           ? toast.info("❌ Removed from wishlist")
//           : toast.success("❤️ Added to wishlist");
//       } else {
//         toast.error(data.message || "Failed to update wishlist");
//       }
//     } catch (err) {
//       console.error(err);
//       toast.error("Wishlist update failed!");
//     }
//   };

//   const handleShare = () => {
//     if (navigator.share) {
//       navigator.share({
//         title: product?.name,
//         text: "Check out this product!",
//         url: window.location.href,
//       });
//     } else {
//       toast.info("Sharing not supported on this browser");
//     }
//   };

//   const discountPercent = product?.mrp
//     ? Math.round(((product.mrp - product.basePrice) / product.mrp) * 100)
//     : 0;

//   if (loading)
//     return (
//       <div className="text-center py-10 text-[#002349] text-lg">
//         Loading product details...
//       </div>
//     );

//   const reviews = [
//     {
//       name: "Amit Verma",
//       rating: 5,
//       comment: "Excellent product! Fabric quality and fit are perfect.",
//       date: "Oct 25, 2025",
//     },
//     {
//       name: "Riya Sharma",
//       rating: 4,
//       comment: "Loved the color and design. Slightly delayed delivery.",
//       date: "Oct 20, 2025",
//     },
//   ];

//   return (
//     <div className="container mx-auto px-4 py-10 text-[#002349]">
//       <ToastContainer position="top-center" autoClose={1500} />

//       {/* 🔙 Back Button */}
//       <button
//         onClick={() => navigate(-1)}
//         className="flex items-center gap-2 mb-6 px-4 py-2 bg-[#002349] text-white rounded-lg hover:bg-[#00172f] transition"
//       >
//         <ArrowLeft size={18} /> Back
//       </button>

//       {/* 🖼 Product Details Section */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
//         {/* Left - Image + Wishlist Button */}
//         <motion.div
//           initial={{ opacity: 0, x: -40 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6 }}
//           className="relative flex justify-center"
//         >
//           {discountPercent > 0 && (
//             <div className="absolute top-4 left-4 bg-[#957C3D] text-white px-3 py-1 text-sm font-semibold rounded-lg shadow-md">
//               {discountPercent}% OFF
//             </div>
//           )}
//           <img
//             src={
//               product.images?.[0] ||
//               "https://via.placeholder.com/400x300?text=No+Image"
//             }
//             alt={product.name}
//             className="w-full max-w-md rounded-2xl shadow-xl border-4 border-[#957C3D]"
//           />
//           {/* ❤️ Wishlist Button */}
//           <button
//             onClick={handleWishlistToggle}
//             className={`absolute top-4 right-4 p-2 rounded-full shadow-md transition ${
//               wishlist ? "bg-[#957C3D] text-white" : "bg-white text-[#002349]"
//             }`}
//           >
//             <Heart
//               size={22}
//               fill={wishlist ? "#ffffff" : "none"}
//               className="transition-all"
//             />
//           </button>
//         </motion.div>

//         {/* Right - Product Info */}
//         <motion.div
//           initial={{ opacity: 0, x: 40 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6 }}
//           className="space-y-4"
//         >
//           <h1 className="text-3xl font-extrabold">{product.name}</h1>
//           <p className="text-gray-600">{product.description}</p>

//           <div className="flex items-center gap-2">
//             {Array.from({ length: 5 }).map((_, i) => (
//               <Star
//                 key={i}
//                 size={20}
//                 fill={i < Math.round(product.rating || 4) ? "#FFD700" : "none"}
//                 stroke="#957C3D"
//               />
//             ))}
//             <span className="text-sm text-gray-500 ml-2">
//               {product.rating || 4.3} ({reviews.length} reviews)
//             </span>
//           </div>

//           <div>
//             <p className="text-2xl font-bold text-[#957C3D]">
//               ₹{product.basePrice?.toLocaleString()}
//             </p>
//             {product.mrp && (
//               <p className="text-gray-500 line-through">
//                 MRP: ₹{product.mrp?.toLocaleString()}
//               </p>
//             )}
//           </div>

//           {/* 🛒 Buttons */}
//           <div className="mt-6 flex flex-wrap gap-4">
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={handleAddToCart}
//               className="flex items-center justify-center gap-2 px-6 py-3 bg-[#002349] text-white rounded-xl font-semibold shadow-md hover:bg-[#001b36] transition-all"
//             >
//               <ShoppingCart size={20} />{" "}
//               {addedToCart ? "Added ✓" : "Add to Cart"}
//             </motion.button>

//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={() => navigate(`/buynow/${product._id}`)}
//               className="flex items-center justify-center gap-2 px-6 py-3 bg-[#957C3D] text-white rounded-xl font-semibold shadow-md hover:bg-[#7b6633] transition-all"
//             >
//               <ShoppingBag size={20} /> Buy Now
//             </motion.button>

//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={handleShare}
//               className="flex items-center justify-center gap-2 px-6 py-3 border border-[#957C3D] text-[#002349] rounded-xl font-semibold hover:bg-[#fff5e1] transition-all"
//             >
//               <Share2 size={20} /> Share
//             </motion.button>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// }

// export default CategoryProductUnique;



import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchWithAuth } from "../refreshtoken/api";
import { motion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Share2,
  Truck,
  ShieldCheck,
  CreditCard,
  ArrowLeft,
  Heart,
  Star,
  ShoppingCart,
  ShoppingBag,
  Tag,
} from "lucide-react";

function CategoryProductUnique() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [wishlist, setWishlist] = useState(false);
  const [selectedSize, setSelectedSize] = useState("");
  const [pincode, setPincode] = useState("");
  const [loading, setLoading] = useState(true);
  const [addedToCart, setAddedToCart] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  // Fetch product details
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(
          `https://ecommerce-backend-y1bv.onrender.com/api/product/${id}`
        );
        if (!res.ok) throw new Error("Failed to fetch product");
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        toast.error("⚠️ Failed to load product details.");
      } finally {
        setLoading(false);
      }
    };
    if (id) fetchProduct();
  }, [id]);

  // Fetch cart count
  const fetchCartCount = async () => {
    try {
      const res = await fetchWithAuth(
        "https://ecommerce-backend-y1bv.onrender.com/api/cart/count"
      );
      if (res.success) setCartCount(res.count || 0);
    } catch (err) {
      console.log("Cart count fetch failed");
    }
  };

  useEffect(() => {
    fetchCartCount();
  }, []);

  // Add to cart
  const handleAddToCart = async () => {
    if (!product?._id) return toast.error("Product not found");

    // Check if size chart is required
    const showSizeChart = ["men", "women", "kids"].some((keyword) =>
      product?.category?.toLowerCase()?.includes(keyword)
    );

    if (showSizeChart && !selectedSize) {
      toast.warn("👕 Please select a size first!");
      return;
    }

    try {
      const data = await fetchWithAuth(
        "https://ecommerce-backend-y1bv.onrender.com/api/cart/add",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            productId: product._id,
            quantity: 1,
            size: selectedSize || null,
          }),
        }
      );

      if (data.success) {
        toast.success("🛒 Product added to cart!");
        setAddedToCart(true);
        setCartCount((prev) => prev + 1);
        setTimeout(() => setAddedToCart(false), 1200);
      } else {
        toast.error(data.message || "Failed to add to cart");
      }
    } catch (err) {
      toast.error("Something went wrong!");
    }
  };

  // Wishlist toggle
const handleWishlistToggle = async () => {
  if (!product?._id) return toast.error("⚠️ Product not found");

  try {
    const endpoint = wishlist
      ? "https://ecommerce-backend-y1bv.onrender.com/api/wishlist/remove"
      : "https://ecommerce-backend-y1bv.onrender.com/api/wishlist/add";

    const data = await fetchWithAuth(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ productId: product._id }),
    });

    console.log("Wishlist API response:", data);

    // ✅ Handle different backend response formats safely
    const message = data?.message?.toLowerCase() || "";
    const success =
      data?.success === true ||
      message.includes("added") ||
      message.includes("removed") ||
      message.includes("deleted");

    if (success) {
      // Toggle wishlist state
      setWishlist((prev) => !prev);

      if (wishlist) {
        // When removing from wishlist
        toast.info("💔 Removed from Wishlist", {
          position: "top-center",
          autoClose: 1500,
          theme: "colored",
          style: { background: "#ff4d4d" },
        });
      } else {
        // When adding to wishlist
        toast.success("❤️ Added to Wishlist", {
          position: "top-center",
          autoClose: 1500,
          theme: "colored",
          style: { background: "#4CAF50" },
        });
      }
    } else {
      toast.error("⚠️ Failed to update wishlist", {
        position: "top-center",
        autoClose: 1500,
        theme: "colored",
      });
    }
  } catch (err) {
    console.error("Wishlist error:", err);
    toast.error("❌ Something went wrong while updating wishlist", {
      position: "top-center",
      autoClose: 1500,
      theme: "colored",
    });
  }
};

  // Share button
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product?.name,
        text: "Check out this product!",
        url: window.location.href,
      });
    } else {
      toast.info("Sharing not supported on this browser");
    }
  };

  const discountPercent = product?.mrp
    ? Math.round(((product.mrp - product.basePrice) / product.mrp) * 100)
    : 0;

  if (loading)
    return (
      <div className="text-center py-20 text-[#002349] text-lg">
        Loading product details...
      </div>
    );

  // ✅ Show size chart only if product is in Men, Women, or Kids section
  const showSizeChart = ["men", "women", "kids"].some((keyword) =>
    product?.category?.toLowerCase()?.includes(keyword)
  );

  return (
    <div className="container mx-auto px-4 py-10">
      <ToastContainer position="top-center" autoClose={1500} />

      {/* Top Header: Back + Cart Count */}
      <div className="flex justify-between items-center mb-6">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 px-4 py-2 bg-[#002349] text-white rounded-lg hover:bg-[#001b2a]"
        >
          <ArrowLeft size={18} /> Back
        </button>

        <div className="relative cursor-pointer" onClick={() => navigate("/cart")}>
          <ShoppingCart size={28} className="text-[#002349]" />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-[#957C3D] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </div>
      </div>

      {/* Product Section */}
      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Left: Product Image */}
        <div className="relative">
          <img
            src={
              product?.images?.[0] ||
              "https://via.placeholder.com/400x400?text=No+Image"
            }
            alt={product.name}
            className="rounded-xl shadow-xl w-full max-w-md mx-auto"
          />

          {/* Wishlist */}
          {/* <button
            onClick={handleWishlistToggle}
            className={`absolute top-4 right-6 p-3 rounded-full shadow-lg ${
              wishlist ? "bg-[#002349] text-white" : "bg-white text-[#002349]"
            }`}
          >
            <Heart
              size={22}
              fill={wishlist ? "#ffffff" : "none"}
              className="transition-all"
            />
          </button> */}

          <motion.button
  whileTap={{ scale: 0.9 }}
  onClick={handleWishlistToggle}
  className={`absolute top-4 right-6 p-3 rounded-full shadow-lg ${
    wishlist ? "bg-[#002349] text-white" : "bg-white text-[#002349]"
  }`}
>
  <motion.div
    initial={false}
    animate={{ scale: wishlist ? 1.3 : 1 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <Heart
      size={22}
      fill={wishlist ? "#ffffff" : "none"}
      className="transition-all"
    />
  </motion.div>
</motion.button>

        </div>

        {/* Right: Product Details */}
        <div className="space-y-5 text-[#002349]">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-gray-600">{product.description}</p>

          {/* Rating */}
          <div className="flex items-center gap-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={20}
                fill={i < Math.round(product.rating || 4) ? "#FFD700" : "none"}
                stroke="#957C3D"
              />
            ))}
            <span className="text-sm text-gray-500 ml-2">
              {product.rating || 4.3} (3 reviews)
            </span>
          </div>

          {/* Price */}
          <div className="text-2xl font-semibold">
            ₹{product.basePrice?.toLocaleString()}
            {product.mrp && (
              <span className="text-gray-500 text-lg line-through ml-2">
                ₹{product.mrp?.toLocaleString()}
              </span>
            )}
            {discountPercent > 0 && (
              <span className="text-green-600 text-base ml-2">
                ({discountPercent}% OFF)
              </span>
            )}
          </div>

          {/* ✅ Size Chart only for Men/Women/Kids */}
          {showSizeChart && (
            <div>
              <p className="font-medium mb-2">Select Size:</p>
              <div className="flex gap-3 flex-wrap">
                {["S", "M", "L", "XL", "XXL"].map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 border rounded-lg text-sm font-semibold ${
                      selectedSize === size
                        ? "bg-[#002349] text-white border-[#002349]"
                        : "border-gray-300 hover:bg-gray-100"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Delivery Check */}
          <div className="flex items-center gap-3 mt-4 flex-wrap">
            <Truck size={18} className="text-[#002349]" />
            <span className="text-sm font-medium">Free Delivery</span>
            <input
              type="text"
              placeholder="Enter Pincode"
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
              className="ml-4 px-3 py-2 border rounded-lg w-32"
            />
            <button
              onClick={() => toast.info("🚚 Delivery available!")}
              className="bg-[#957C3D] text-white px-3 py-2 rounded-lg hover:bg-[#7b6633]"
            >
              Check
            </button>
          </div>

          {/* Offers Box */}
          <div className="bg-[#fffaf2] border border-[#f0e2c1] p-4 rounded-xl mt-4">
            <p className="font-semibold mb-2 flex items-center gap-2">
              <Tag size={18} className="text-[#957C3D]" /> Available Offers
            </p>
            <ul className="list-disc ml-6 text-sm text-gray-700 space-y-1">
              <li>Get 10% off with code <b>NEW10</b></li>
              <li>Flat ₹100 off on prepaid orders above ₹999</li>
              <li>5% cashback with XYZ Bank Credit Card</li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 mt-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={handleAddToCart}
              className="flex items-center gap-2 bg-[#002349] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#001b2a]"
            >
              <ShoppingCart size={20} />
              {addedToCart ? "Added ✓" : "Add to Cart"}
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => navigate(`/buynow/${product._id}`)}
              className="flex items-center gap-2 bg-[#957C3D] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#7b6633]"
            >
              <ShoppingBag size={20} /> Buy Now
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={handleShare}
              className="flex items-center gap-2 border border-[#957C3D] text-[#002349] px-6 py-3 rounded-xl font-semibold hover:bg-[#fff5e1]"
            >
              <Share2 size={20} /> Share
            </motion.button>
          </div>

          {/* Info Icons */}
          <div className="flex flex-wrap gap-6 mt-6 text-sm text-gray-700">
            <div className="flex items-center gap-2">
              <Truck size={18} /> Free Delivery
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck size={18} /> Easy Returns
            </div>
            <div className="flex items-center gap-2">
              <CreditCard size={18} /> EMI Available
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryProductUnique;
