
// only submit review feature
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Star, User } from "lucide-react";
import { fetchWithAuth } from "../refreshtoken/api";
import { toast } from "react-toastify";

const BASE_URL = "https://ecommerce-backend-y1bv.onrender.com";

const ProductReview = ({ productId }) => {
  const [backendReviews, setBackendReviews] = useState([]);
  const [selectedRating, setSelectedRating] = useState(0);
  const [reviewText, setReviewText] = useState("");

  const storedUser = JSON.parse(localStorage.getItem("user"));
  const userId = storedUser?._id || storedUser?.id;

  // ---------------------------------------------------
  // FETCH REVIEWS
  // ---------------------------------------------------
  const fetchReviews = async () => {
    try {
      const res = await fetch(`${BASE_URL}/api/review/product/${productId}`);
      const data = await res.json();
      setBackendReviews(data);
    } catch (err) {
      console.log("Review fetch failed", err);
    }
  };

  useEffect(() => {
    if (productId) fetchReviews();
  }, [productId]);

  // ---------------------------------------------------
  // SUBMIT REVIEW
  // ---------------------------------------------------
  const handleSubmitReview = async () => {
    if (!storedUser) {
      toast.error("Please login to submit a review");
      return;
    }

    if (!selectedRating || !reviewText) {
      toast.warn("Please provide rating and comment!");
      return;
    }

    try {
      const data = await fetchWithAuth(
        `${BASE_URL}/api/review`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            product: productId,
            rating: selectedRating,
            comment: reviewText,
            user: userId,
          }),
        }
      );

      if (data?.success === false || data?.error) {
        toast.error(data.error || "Failed to add review");
        return;
      }

      toast.success("⭐ Review submitted!");
      setSelectedRating(0);
      setReviewText("");
      fetchReviews();

    } catch (err) {
      console.log(err);
      toast.error("Something went wrong!");
    }
  };


  // ---------------------------------------------------
  // UI
  // ---------------------------------------------------
  return (
    <div className="mt-16 bg-white border border-[#957C3D]/30 p-6 rounded-2xl shadow-md">
      <h2 className="text-xl font-bold text-[#002349] mb-4">
        Ratings & Reviews
      </h2>

      {/* Review Input */}
      <div className="flex flex-col gap-4 mb-8">
        <div>
          <p className="font-medium mb-2">Your Rating:</p>
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                size={28}
                className="cursor-pointer"
                fill={selectedRating >= star ? "#FFD700" : "none"}
                stroke="#957C3D"
                onClick={() => setSelectedRating(star)}
              />
            ))}
          </div>
        </div>

        <textarea
          placeholder="Write your review..."
          className="px-4 py-3 border rounded-xl outline-none h-28 resize-none"
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
        ></textarea>

        <button
          onClick={handleSubmitReview}
          className="bg-[#002349] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#001b2a] w-max"
        >
          Submit Review
        </button>
      </div>

      {/* Reviews List */}
      <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
        {backendReviews.length === 0 && (
          <p className="text-gray-500">No reviews yet.</p>
        )}

        {backendReviews.map((r) => (
          <motion.div
            key={r._id}
            whileHover={{ scale: 1.02 }}
            className="bg-white border border-[#957C3D]/30 p-4 rounded-xl shadow-sm transition-all hover:shadow-lg"
          >
            <div className="flex items-center gap-2 mb-2">
              <User className="text-[#957C3D]" size={18} />
              <p className="font-semibold text-sm">{r.name || "Anonymous"}</p>
            </div>

            <div className="flex items-center gap-1 mb-1">
              {[...Array(5)].map((_, i) => (
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
      </div>
    </div>
  );
};

export default ProductReview;
