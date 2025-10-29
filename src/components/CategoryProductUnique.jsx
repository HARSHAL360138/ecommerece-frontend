// src/pages/CategoryProductUnique.jsx
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Share2,
  Truck,
  ShieldCheck,
  CreditCard,
  Ruler,
  ArrowLeft,
  Heart,
  Star,
  X,
  Tag,
  User,
  ShoppingCart,
  ShoppingBag,
} from "lucide-react";

function CategoryProductUnique() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [wishlist, setWishlist] = useState(false);
  const [selectedSize, setSelectedSize] = useState("");
  const [showSizeChart, setShowSizeChart] = useState(false);
  const [pincode, setPincode] = useState("");
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(
          `https://ecommerce-backend-y1bv.onrender.com/api/product/${id}`
        );
        const data = await res.json();
        setProduct(data);
        setLoading(false);
      } catch (err) {
        console.error(err);
      }
    };
    if (id) fetchProduct();
  }, [id]);

  // Related products
  useEffect(() => {
    const fetchRelated = async () => {
      if (!product?.category) return;
      try {
        const res = await fetch(
          `https://ecommerce-backend-y1bv.onrender.com/api/product/category/${product.category}`
        );
        const data = await res.json();
        const filtered = (data.products || []).filter(
          (p) => p._id !== product._id
        );
        setRelatedProducts(filtered.slice(0, 4));
      } catch (err) {
        console.error(err);
      }
    };
    if (product) fetchRelated();
  }, [product]);

  const discountPercent = product?.mrp
    ? Math.round(((product.mrp - product.basePrice) / product.mrp) * 100)
    : 0;

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: "Check out this product!",
        url: window.location.href,
      });
    } else alert("Sharing not supported");
  };

  if (loading)
    return (
      <div className="text-center py-10 text-[#002349] text-lg">
        Loading product details...
      </div>
    );

  // dummy reviews
  const reviews = [
    {
      name: "Amit Verma",
      rating: 5,
      comment: "Excellent product! Fabric quality and fit are perfect.",
      date: "Oct 25, 2025",
    },
    {
      name: "Riya Sharma",
      rating: 4,
      comment: "Loved the color and design. Slightly delayed delivery.",
      date: "Oct 20, 2025",
    },
    {
      name: "Mohit Singh",
      rating: 5,
      comment: "Totally worth the price. I’ll buy again!",
      date: "Oct 18, 2025",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-10 text-[#002349]">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 mb-6 px-4 py-2 bg-[#002349] text-white rounded-lg hover:bg-[#00172f] transition"
      >
        <ArrowLeft size={18} /> Back
      </button>

      {/* Product Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative flex justify-center"
        >
          {discountPercent > 0 && (
            <div className="absolute top-4 left-4 bg-[#957C3D] text-white px-3 py-1 text-sm font-semibold rounded-lg shadow-md">
              {discountPercent}% OFF
            </div>
          )}
          <img
            src={
              product.images?.[0] ||
              "https://via.placeholder.com/400x300?text=No+Image"
            }
            alt={product.name}
            className="w-full max-w-md rounded-2xl shadow-xl border-4 border-[#957C3D]"
          />
          <button
            onClick={() => setWishlist(!wishlist)}
            className={`absolute top-4 right-4 p-2 rounded-full shadow-md transition ${
              wishlist ? "bg-[#957C3D] text-white" : "bg-white text-[#002349]"
            }`}
          >
            <Heart
              size={22}
              fill={wishlist ? "#ffffff" : "none"}
              className="transition-all"
            />
          </button>
        </motion.div>

        {/* Product Details */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <h1 className="text-3xl font-extrabold">{product.name}</h1>
          <p className="text-gray-600">{product.description}</p>

          {/* Rating */}
          <div className="flex items-center gap-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={20}
                fill={i < Math.round(product.rating || 4.3) ? "#FFD700" : "none"}
                stroke="#957C3D"
              />
            ))}
            <span className="text-sm text-gray-500 ml-2">
              {product.rating || 4.3} ({reviews.length} reviews)
            </span>
          </div>

          {/* Price */}
          <div>
            <p className="text-2xl font-bold text-[#957C3D]">
              ₹{product.basePrice?.toLocaleString()}
            </p>
            <p className="text-gray-500 line-through">
              MRP: ₹{product.mrp?.toLocaleString()}
            </p>
          </div>

          {/* Size Select */}
          <div className="mt-4 flex items-center gap-4 flex-wrap">
            {["S", "M", "L", "XL", "XXL"].map((size) => (
              <motion.button
                whileTap={{ scale: 0.9 }}
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`w-10 h-10 flex items-center justify-center rounded-lg border text-sm font-semibold transition-all duration-200 ${
                  selectedSize === size
                    ? "bg-[#957C3D] text-white border-[#957C3D]"
                    : "border-gray-300 text-[#002349] hover:border-[#957C3D]"
                }`}
              >
                {size}
              </motion.button>
            ))}
            <button
              onClick={() => setShowSizeChart(true)}
              className="flex items-center gap-1 text-[#957C3D] text-sm font-medium hover:underline"
            >
              <Ruler size={16} /> Size Chart
            </button>
          </div>

          {/* Delivery & Pincode */}
          <div className="mt-6">
            <div className="flex justify-between flex-wrap gap-3 text-sm font-medium text-[#002349]">
              <div className="flex items-center gap-2">
                <Truck size={18} className="text-[#957C3D]" /> Free Delivery
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck size={18} className="text-[#957C3D]" /> Easy Returns
              </div>
              <div className="flex items-center gap-2">
                <CreditCard size={18} className="text-[#957C3D]" /> EMI Available
              </div>
            </div>
            <div className="flex gap-2 items-center mt-3">
              <input
                type="text"
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
                placeholder="Enter Pincode"
                className="border rounded-lg px-3 py-2 w-40 text-sm focus:border-[#957C3D] outline-none"
              />
              <button className="px-4 py-2 bg-[#957C3D] text-white rounded-lg hover:bg-[#7a6633] text-sm">
                Check
              </button>
            </div>
          </div>

          {/* Offers */}
          <div className="mt-6 border rounded-xl p-4 bg-[#fff9ef]">
            <h3 className="font-semibold flex items-center gap-2 text-[#957C3D] mb-2">
              <Tag size={18} /> Available Offers
            </h3>
            <ul className="text-sm text-gray-700 list-disc pl-6 space-y-1">
              <li>Get 10% off with code <strong>NEW10</strong></li>
              <li>Flat ₹100 off on prepaid orders above ₹999</li>
              <li>5% cashback with XYZ Bank Credit Card</li>
            </ul>
            <div className="mt-3 flex gap-2">
              <input
                placeholder="Enter Coupon Code"
                className="border rounded-lg px-3 py-2 text-sm w-40 focus:border-[#957C3D] outline-none"
              />
              <button className="px-4 py-2 bg-[#002349] text-white rounded-lg text-sm hover:bg-[#001b36]">
                Apply
              </button>
            </div>
          </div>

          {/* 🛒 Add to Cart / Buy Now / Share Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-6 flex flex-wrap gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-[#002349] text-white rounded-xl font-semibold shadow-md hover:bg-[#001b36] transition-all"
            >
              <ShoppingCart size={20} /> Add to Cart
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-[#957C3D] text-white rounded-xl font-semibold shadow-md hover:bg-[#7b6633] transition-all"
            >
              <ShoppingBag size={20} /> Buy Now
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleShare}
              className="flex items-center justify-center gap-2 px-6 py-3 border border-[#957C3D] text-[#002349] rounded-xl font-semibold hover:bg-[#fff5e1] transition-all"
            >
              <Share2 size={20} /> Share
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* ⭐ Rating & Reviews Section */}
{/* ⭐ Rating & Reviews Section */}
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="mt-16"
>
  <h2 className="text-2xl font-bold text-center text-[#002349] mb-8">
    Ratings & Reviews
  </h2>

  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
    {/* 🔹 Left Side – Rating Summary */}
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-[#fdfcf9] border border-[#957C3D]/30 p-6 rounded-2xl shadow-md flex flex-col justify-center items-center text-center"
    >
      <p className="text-6xl font-extrabold text-[#957C3D]">
        {product.rating || 4.3}
      </p>
      <div className="flex justify-center gap-1 mt-2 mb-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={22}
            fill={i < Math.round(product.rating || 4.3) ? "#FFD700" : "none"}
            stroke="#957C3D"
          />
        ))}
      </div>
      <p className="text-sm text-gray-600 mb-6">
        Based on {reviews.length} verified reviews
      </p>

      {/* Dynamic Progress Bars */}
      <div className="w-full space-y-2">
        {[5, 4, 3, 2, 1].map((star) => {
          const count = reviews.filter((r) => r.rating === star).length;
          const percent = Math.round((count / reviews.length) * 100);
          return (
            <div key={star} className="flex items-center gap-3">
              <span className="w-6 text-sm font-medium">{star}★</span>
              <div className="flex-1 bg-gray-200 rounded-full h-2 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${percent}%` }}
                  transition={{ duration: 0.8 }}
                  className="h-2 bg-[#957C3D] rounded-full"
                ></motion.div>
              </div>
              <span className="text-sm text-gray-600 w-10 text-right">
                {percent}%
              </span>
            </div>
          );
        })}
      </div>
    </motion.div>

    {/* 🔹 Right Side – Individual Reviews */}
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-4 max-h-[400px] overflow-y-auto pr-2"
    >
      {reviews.map((r, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.02 }}
          className="bg-white border border-[#957C3D]/30 p-4 rounded-xl shadow-sm transition-all hover:shadow-lg"
        >
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <User className="text-[#957C3D]" size={18} />
              <p className="font-semibold text-sm">{r.name}</p>
            </div>
            <p className="text-xs text-gray-400">{r.date}</p>
          </div>

          <div className="flex items-center gap-1 mb-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={16}
                fill={i < r.rating ? "#FFD700" : "none"}
                stroke="#957C3D"
              />
            ))}
          </div>

          <p className="text-gray-700 text-sm">{r.comment}</p>
        </motion.div>
      ))}
    </motion.div>
  </div>
</motion.div>



      {/* 🛍️ Related Products Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mt-16"
      >
        <h2 className="text-2xl font-bold text-center text-[#002349] mb-8">
          Related Products
        </h2>

        {relatedProducts.length === 0 ? (
          <p className="text-center text-gray-500">
            No related products found.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {relatedProducts.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => navigate(`/product/${item._id}`)}
                className="cursor-pointer bg-white border border-[#957C3D]/30 rounded-xl shadow-md hover:shadow-xl overflow-hidden transition-all"
              >
                <img
                  src={
                    item.images?.[0] ||
                    "https://via.placeholder.com/300x300?text=No+Image"
                  }
                  alt={item.name}
                  className="w-full h-60 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-[#002349] text-sm truncate">
                    {item.name}
                  </h3>
                  <p className="text-[#957C3D] font-bold mt-1">
                    ₹{item.basePrice?.toLocaleString()}
                  </p>
                  <p className="text-xs text-gray-500 line-through">
                    ₹{item.mrp?.toLocaleString()}
                  </p>
                  <div className="flex items-center gap-1 mt-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        fill={
                          i < Math.round(item.rating || 4) ? "#FFD700" : "none"
                        }
                        stroke="#957C3D"
                      />
                    ))}
                    <span className="text-xs text-gray-500 ml-1">
                      {item.rating || 4.0}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>

      {/* 🧾 Size Chart Modal */}
      {showSizeChart && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-xl p-6 w-[90%] max-w-md shadow-lg relative"
          >
            <button
              onClick={() => setShowSizeChart(false)}
              className="absolute top-3 right-3 text-gray-600 hover:text-black"
            >
              <X size={18} />
            </button>
            <h2 className="text-lg font-bold text-[#002349] mb-4 flex items-center gap-2">
              <Ruler size={18} className="text-[#957C3D]" /> Size Chart
            </h2>
            <table className="w-full border border-gray-300 text-sm">
              <thead className="bg-[#f9f9f9]">
                <tr>
                  <th className="p-2 border">Size</th>
                  <th className="p-2 border">Chest</th>
                  <th className="p-2 border">Waist</th>
                  <th className="p-2 border">Length</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { size: "S", chest: 36, waist: 30, length: 26 },
                  { size: "M", chest: 38, waist: 32, length: 27 },
                  { size: "L", chest: 40, waist: 34, length: 28 },
                  { size: "XL", chest: 42, waist: 36, length: 29 },
                  { size: "XXL", chest: 44, waist: 38, length: 30 },
                ].map((s) => (
                  <tr key={s.size} className="text-center">
                    <td className="border p-2 font-semibold">{s.size}</td>
                    <td className="border p-2">{s.chest}"</td>
                    <td className="border p-2">{s.waist}"</td>
                    <td className="border p-2">{s.length}"</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      )}
    </div>
  );
}

export default CategoryProductUnique;