import React from "react";
import { fetchWithAuth } from "../refreshtoken/api"; // handles access & refresh tokens
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AddCart({ productId, quantity = 1 }) {
  const handleAddToCart = async () => {
    if (!productId) return toast.error("Product not found");

    try {
      // fetchWithAuth already returns JSON
      const data = await fetchWithAuth(
        "https://ecommerce-backend-y1bv.onrender.com/api/cart/add",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ productId, quantity }),
        }
      );

      if (data.success) {
        toast.success("✅ Product added to cart successfully!");
      } else {
        toast.error(data.message || "⚠️ Failed to add to cart");
      }
    } catch (err) {
      console.error(err);
      toast.error("❌ Something went wrong while adding to cart");
    }
  };

  return (
    <div className="flex flex-col items-center mt-4">
      <button
        onClick={handleAddToCart}
        className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-5 py-2 rounded-xl shadow-md hover:shadow-lg hover:from-blue-700 hover:to-blue-900 transition-all duration-300"
      >
        🛒 Add to Cart
      </button>

      {/* Single ToastContainer for this component */}
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

export default AddCart;
