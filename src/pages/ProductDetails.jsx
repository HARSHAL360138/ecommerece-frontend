import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  AiFillStar,
  AiOutlineHeart,
  AiOutlineShareAlt,
  AiFillHeart,
} from "react-icons/ai";
import { FaArrowLeft, FaShoppingCart, FaBolt } from "react-icons/fa";
import { FiTruck, FiCheckCircle } from "react-icons/fi";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [wishlist, setWishlist] = useState(false);
  const [selectedSize, setSelectedSize] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://ecommerce-backend-y1bv.onrender.com/api/product/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching product:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading)
    return (
      <p className="text-center text-[#002349] mt-20 text-lg font-semibold">
        Loading product details...
      </p>
    );

  if (!product)
    return <p className="text-center text-red-500 mt-20">Product not found!</p>;

  const handleAddToCart = () => alert("Added to cart!");
  const handleBuyNow = () => alert("Redirecting to checkout...");
  const handleShare = async () => {
    if (navigator.share) {
      await navigator.share({
        title: product.name,
        text: "Check out this amazing product!",
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  return (
    <motion.div
      className="max-w-7xl mx-auto px-6 py-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
            {/* Back Button (Modified) */}
      <motion.button
        whileHover={{
          scale: 1.05,
          backgroundColor: "#002349",
          color: "#fff",
          boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
        }}
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate(-1)}
        className="px-6 py-2 border-2 border-[#002349] text-[#002349] font-semibold rounded-full mb-6 transition-all duration-300"
      >
        Back
      </motion.button>

      {/* Product Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Product Image */}
        <motion.div
          className="relative overflow-hidden rounded-2xl shadow-lg group"
          whileHover={{ scale: 1.02 }}
        >
          <img
            src={
              product.images?.[0] ||
              "https://via.placeholder.com/500x600?text=No+Image"
            }
            alt={product.name}
            className="w-[80%] mx-auto h-auto object-cover"
          />
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setWishlist(!wishlist)}
            className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:scale-110 transition"
          >
            {wishlist ? (
              <AiFillHeart className="text-[#957C3D] text-2xl" />
            ) : (
              <AiOutlineHeart className="text-[#002349] text-2xl" />
            )}
          </motion.button>
        </motion.div>

        {/* Product Info */}
        <div className="space-y-4">
          <motion.h1
            className="text-3xl font-bold text-[#002349]"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            {product.name}
          </motion.h1>
          <p className="text-[#957C3D] font-semibold text-lg">{product.brand}</p>
          <div className="flex items-center gap-3">
            <span className="text-2xl font-bold text-[#002349]">
              ₹{product.basePrice}
            </span>
            {product.mrp && (
              <span className="text-gray-400 line-through text-lg">
                ₹{product.mrp}
              </span>
            )}
            {product.discountPercentage > 0 && (
              <span className="text-green-600 font-semibold">
                ({product.discountPercentage}% OFF)
              </span>
            )}
          </div>

          {/* Ratings */}
          <div className="flex items-center gap-1 text-[#957C3D]">
            {[...Array(5)].map((_, i) => (
              <AiFillStar
                key={i}
                className={`${i < 4 ? "text-[#957C3D]" : "text-gray-300"}`}
              />
            ))}
            <span className="text-sm text-gray-500">(234 reviews)</span>
          </div>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed">{product.description}</p>

          {/* Size Selector */}
          <div>
            <p className="font-semibold text-[#002349] mb-2">Select Size:</p>
            <div className="flex gap-3">
              {["S", "M", "L", "XL"].map((size) => (
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`border-2 px-4 py-2 rounded-lg ${
                    selectedSize === size
                      ? "border-[#957C3D] text-[#957C3D]"
                      : "border-gray-300 text-gray-500"
                  }`}
                >
                  {size}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Stock */}
          <p className="flex items-center gap-2 text-green-600 font-medium">
            <FiCheckCircle /> {product.availability || "In Stock"}
          </p>

          {/* Warranty & Delivery */}
          <div className="bg-[#EFFAFD] p-4 rounded-xl shadow-inner mt-4">
            <p className="flex items-center gap-2 text-[#002349]">
              <FiTruck className="text-[#957C3D]" /> Free Delivery | Warranty:{" "}
              {product.warranty?.duration || "N/A"}
            </p>
          </div>

          {/* Buttons + Share */}
          <div className="flex flex-wrap items-center gap-4 mt-6">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={handleAddToCart}
              className="flex-1 bg-[#002349] text-white py-3 rounded-full font-semibold shadow-lg hover:bg-[#033b7a] transition"
            >
              <FaShoppingCart className="inline mr-2" /> Add to Cart
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={handleBuyNow}
              className="flex-1 bg-[#957C3D] text-white py-3 rounded-full font-semibold shadow-lg hover:bg-[#b69340] transition"
            >
              <FaBolt className="inline mr-2" /> Buy Now
            </motion.button>

            {/* Share Button (New Realistic Placement) */}
            <motion.button
              whileHover={{ rotate: 15, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleShare}
              className="p-3 rounded-full bg-white shadow-md border border-gray-200 hover:bg-[#EFFAFD] transition"
              title="Share this product"
            >
              <AiOutlineShareAlt className="text-2xl text-[#002349]" />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <motion.div
        className="mt-16 bg-[#EFFAFD] rounded-2xl p-8 shadow-lg"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl font-bold text-[#002349] mb-6">
          Customer Reviews
        </h2>
        <div className="space-y-6">
          {[1, 2, 3].map((r) => (
            <motion.div
              key={r}
              whileHover={{ scale: 1.02 }}
              className="bg-white p-4 rounded-xl shadow-md text-left"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <img
                    src={`https://i.pravatar.cc/40?img=${r + 10}`}
                    alt="user"
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <p className="font-semibold text-[#002349]">User {r}</p>
                    <div className="flex text-[#957C3D]">
                      {[...Array(5)].map((_, i) => (
                        <AiFillStar
                          key={i}
                          className={`${
                            i < 4 ? "text-[#957C3D]" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-500">2 days ago</p>
              </div>
              <p className="mt-2 text-gray-600">
                Absolutely loved this product! The fabric quality and fit are
                amazing.
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProductDetail;
