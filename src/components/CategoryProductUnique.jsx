// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";

// function CategoryProductUnique() {
//   const { id } = useParams(); // product ID from URL
//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         setLoading(true);
//         const response = await fetch(
//           `https://ecommerce-backend-y1bv.onrender.com/api/product/${id}`
//         );
//         if (!response.ok) throw new Error("Failed to fetch product details");
//         const data = await response.json();
//         setProduct(data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (id) {
//       fetchProduct();
//     }
//   }, [id]);

//   if (loading)
//     return <div className="text-center py-10 text-gray-600">Loading product details...</div>;
//   if (error) return <div className="text-center text-red-500">Error: {error}</div>;
//   if (!product) return <div className="text-center text-gray-500">No product found.</div>;

//   return (
//     <div className="container mx-auto px-4 py-8">
//       {/* Back Button */}
//       <button
//         onClick={() => navigate(-1)}
//         className="mb-6 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
//       >
//         ← Back
//       </button>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         {/* Product Image */}
//         <div className="flex justify-center">
//           <img
//             src={product.images?.[0] || "https://via.placeholder.com/400x300?text=No+Image"}
//             alt={product.name}
//             className="w-full max-w-md rounded-2xl shadow-md object-cover"
//           />
//         </div>

//         {/* Product Info */}
//         <div className="space-y-4">
//           <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
//           <p className="text-gray-600">{product.description}</p>

//           <div className="mt-4">
//             <p className="text-xl font-semibold text-blue-600">
//               ₹{product.basePrice?.toLocaleString()}
//             </p>
//             {product.mrp && (
//               <p className="text-gray-500 line-through">MRP: ₹{product.mrp?.toLocaleString()}</p>
//             )}
//           </div>

//           <div className="mt-4">
//             <p><strong>Brand:</strong> {product.brand || "N/A"}</p>
//             <p><strong>Model:</strong> {product.model || "N/A"}</p>
//             <p><strong>Category:</strong> {product.category || "General"}</p>
//             <p><strong>Availability:</strong> {product.availability}</p>
//             <p><strong>Stock:</strong> {product.stock}</p>
//           </div>

//           <div className="mt-6">
//             <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
//               Add to Cart
//             </button>
//             <button className="ml-3 px-6 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition">
//               Buy Now
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CategoryProductUnique;

















// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";

// function CategoryProductUnique() {
//   const { id } = useParams(); // product ID from URL
//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         setLoading(true);
//         const response = await fetch(
//           `https://ecommerce-backend-y1bv.onrender.com/api/product/${id}`
//         );
//         if (!response.ok) throw new Error("Failed to fetch product details");
//         const data = await response.json();
//         setProduct(data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (id) {
//       fetchProduct();
//     }
//   }, [id]);

//   if (loading)
//     return <div className="text-center py-10 text-gray-600">Loading product details...</div>;
//   if (error) return <div className="text-center text-red-500">Error: {error}</div>;
//   if (!product) return <div className="text-center text-gray-500">No product found.</div>;

//   return (
//     <div className="container mx-auto px-4 py-8">
//       {/* Back Button */}
//       <button
//         onClick={() => navigate(-1)}
//         className="mb-6 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
//       >
//         ← Back
//       </button>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         {/* Product Image */}
//         <div className="flex justify-center">
//           <img
//             src={product.images?.[0] || "https://via.placeholder.com/400x300?text=No+Image"}
//             alt={product.name}
//             className="w-full max-w-md rounded-2xl shadow-md object-cover"
//           />
//         </div>

//         {/* Product Info */}
//         <div className="space-y-4">
//           <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
//           <p className="text-gray-600">{product.description}</p>

//           <div className="mt-4">
//             <p className="text-xl font-semibold text-blue-600">
//               ₹{product.basePrice?.toLocaleString()}
//             </p>
//             {product.mrp && (
//               <p className="text-gray-500 line-through">MRP: ₹{product.mrp?.toLocaleString()}</p>
//             )}
//           </div>

//           <div className="mt-4 space-y-1">
//             <p><strong>Brand:</strong> {product.brand || "N/A"}</p>
//             <p><strong>Model:</strong> {product.model || "N/A"}</p>
//             <p><strong>Category:</strong> {product.category || "General"}</p>
//             <p><strong>Availability:</strong> {product.availability}</p>
//             <p><strong>Stock:</strong> {product.stock}</p>
//           </div>

//           <div className="mt-6">
//             <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
//               Add to Cart
//             </button>
//             <button className="ml-3 px-6 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition">
//               Buy Now
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CategoryProductUnique;

















import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function CategoryProductUnique() {
  const { id } = useParams(); // Product ID from URL
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Fetch single product by ID
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://ecommerce-backend-y1bv.onrender.com/api/product/${id}`
        );
        if (!response.ok) throw new Error("Failed to fetch product details");
        const data = await response.json();
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

  // Fetch related products once we know the category
  useEffect(() => {
    const fetchRelatedProducts = async () => {
      if (!product?.category) return;
      try {
        const response = await fetch(
          `https://ecommerce-backend-y1bv.onrender.com/api/product/category/${product.category}`
        );
        if (!response.ok) throw new Error("Failed to fetch related products");
        const data = await response.json();

        // Exclude the current product from related list
        const filtered = (data.products || []).filter((p) => p._id !== product._id);
        setRelatedProducts(filtered.slice(0, 4)); // Limit to 4 related products
      } catch (err) {
        console.error("Error fetching related products:", err);
      }
    };

    if (product) {
      fetchRelatedProducts();
    }
  }, [product]);

  if (loading)
    return <div className="text-center py-10 text-gray-600">Loading product details...</div>;
  if (error) return <div className="text-center text-red-500">Error: {error}</div>;
  if (!product) return <div className="text-center text-gray-500">No product found.</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-6 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
      >
        ← Back
      </button>

      {/* Product Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="flex justify-center">
          <img
            src={product.images?.[0] || "https://via.placeholder.com/400x300?text=No+Image"}
            alt={product.name}
            className="w-full max-w-md rounded-2xl shadow-md object-cover"
          />
        </div>

        {/* Product Info */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
          <p className="text-gray-600">{product.description}</p>

          <div className="mt-4">
            <p className="text-xl font-semibold text-blue-600">
              ₹{product.basePrice?.toLocaleString()}
            </p>
            {product.mrp && (
              <p className="text-gray-500 line-through">MRP: ₹{product.mrp?.toLocaleString()}</p>
            )}
          </div>

          <div className="mt-4 space-y-1">
            <p><strong>Brand:</strong> {product.brand || "N/A"}</p>
            <p><strong>Model:</strong> {product.model || "N/A"}</p>
            <p><strong>Category:</strong> {product.category || "General"}</p>
            <p><strong>Availability:</strong> {product.availability}</p>
            <p><strong>Stock:</strong> {product.stock}</p>
          </div>

          <div className="mt-6">
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              Add to Cart
            </button>
            <button className="ml-3 px-6 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition">
              Buy Now
            </button>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Related Products
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {relatedProducts.map((related) => (
              <div
                key={related._id}
                onClick={() => navigate(`/product/${related._id}`)}
                className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-transform transform hover:scale-105 overflow-hidden cursor-pointer"
              >
                <img
                  src={
                    related.images?.[0] ||
                    "https://via.placeholder.com/300x200?text=No+Image"
                  }
                  alt={related.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 truncate">
                    {related.name}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">{related.brand}</p>
                  <p className="text-blue-600 font-bold mt-2">
                    ₹{related.basePrice?.toLocaleString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default CategoryProductUnique;




















// import React, { useEffect, useState, useRef } from "react";
// import { useParams, useNavigate } from "react-router-dom";

// function CategoryProductUnique() {
//   const { id } = useParams(); // Product ID from URL
//   const [product, setProduct] = useState(null);
//   const [relatedProducts, setRelatedProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();
//   const carouselRef = useRef(null);

//   // Fetch single product by ID
//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         setLoading(true);
//         const response = await fetch(
//           `https://ecommerce-backend-y1bv.onrender.com/api/product/${id}`
//         );
//         if (!response.ok) throw new Error("Failed to fetch product details");
//         const data = await response.json();
//         setProduct(data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (id) {
//       fetchProduct();
//     }
//   }, [id]);

//   // Fetch related products
//   useEffect(() => {
//     const fetchRelatedProducts = async () => {
//       if (!product?.category) return;
//       try {
//         const response = await fetch(
//           `http://localhost:5000/api/product/category/${product.category}`
//         );
//         if (!response.ok) throw new Error("Failed to fetch related products");
//         const data = await response.json();

//         // Exclude current product and limit to 8 items
//         const filtered = (data.products || []).filter((p) => p._id !== product._id);
//         setRelatedProducts(filtered.slice(0, 8));
//       } catch (err) {
//         console.error("Error fetching related products:", err);
//       }
//     };

//     if (product) {
//       fetchRelatedProducts();
//     }
//   }, [product]);

//   // Scroll carousel left/right
//   const scrollCarousel = (direction) => {
//     const scrollAmount = 320; // pixels per scroll
//     if (carouselRef.current) {
//       carouselRef.current.scrollBy({
//         left: direction === "left" ? -scrollAmount : scrollAmount,
//         behavior: "smooth",
//       });
//     }
//   };

//   if (loading)
//     return <div className="text-center py-10 text-gray-600">Loading product details...</div>;
//   if (error) return <div className="text-center text-red-500">Error: {error}</div>;
//   if (!product) return <div className="text-center text-gray-500">No product found.</div>;

//   return (
//     <div className="container mx-auto px-4 py-8">
//       {/* Back Button */}
//       <button
//         onClick={() => navigate(-1)}
//         className="mb-6 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
//       >
//         ← Back
//       </button>

//       {/* Product Details */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         {/* Product Image */}
//         <div className="flex justify-center">
//           <img
//             src={product.images?.[0] || "https://via.placeholder.com/400x300?text=No+Image"}
//             alt={product.name}
//             className="w-full max-w-md rounded-2xl shadow-md object-cover"
//           />
//         </div>

//         {/* Product Info */}
//         <div className="space-y-4">
//           <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
//           <p className="text-gray-600">{product.description}</p>

//           <div className="mt-4">
//             <p className="text-xl font-semibold text-blue-600">
//               ₹{product.basePrice?.toLocaleString()}
//             </p>
//             {product.mrp && (
//               <p className="text-gray-500 line-through">MRP: ₹{product.mrp?.toLocaleString()}</p>
//             )}
//           </div>

//           <div className="mt-4 space-y-1">
//             <p><strong>Brand:</strong> {product.brand || "N/A"}</p>
//             <p><strong>Model:</strong> {product.model || "N/A"}</p>
//             <p><strong>Category:</strong> {product.category || "General"}</p>
//             <p><strong>Availability:</strong> {product.availability}</p>
//             <p><strong>Stock:</strong> {product.stock}</p>
//           </div>

//           <div className="mt-6">
//             <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
//               Add to Cart
//             </button>
//             <button className="ml-3 px-6 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition">
//               Buy Now
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Related Products Carousel */}
//       {relatedProducts.length > 0 && (
//         <div className="mt-12 relative">
//           <h2 className="text-2xl font-bold mb-6 text-center">
//             Related Products
//           </h2>

//           {/* Scroll Buttons */}
//           <button
//             onClick={() => scrollCarousel("left")}
//             className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition hidden sm:block"
//           >
//             ←
//           </button>
//           <button
//             onClick={() => scrollCarousel("right")}
//             className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition hidden sm:block"
//           >
//             →
//           </button>

//           {/* Carousel Container */}
//           <div
//             ref={carouselRef}
//             className="flex overflow-x-auto gap-6 scrollbar-hide scroll-smooth px-2 pb-2"
//             style={{ scrollBehavior: "smooth" }}
//           >
//             {relatedProducts.map((related) => (
//               <div
//                 key={related._id}
//                 onClick={() => navigate(`/product/${related._id}`)}
//                 className="min-w-[250px] sm:min-w-[280px] bg-white rounded-2xl shadow-md hover:shadow-lg transition-transform transform hover:scale-105 overflow-hidden cursor-pointer"
//               >
//                 <img
//                   src={
//                     related.images?.[0] ||
//                     "https://via.placeholder.com/300x200?text=No+Image"
//                   }
//                   alt={related.name}
//                   className="w-full h-48 object-cover"
//                 />
//                 <div className="p-4">
//                   <h3 className="text-lg font-semibold text-gray-800 truncate">
//                     {related.name}
//                   </h3>
//                   <p className="text-sm text-gray-500 mt-1">{related.brand}</p>
//                   <p className="text-blue-600 font-bold mt-2">
//                     ₹{related.basePrice?.toLocaleString()}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default CategoryProductUnique;
















// import React, { useEffect, useState, useRef } from "react";
// import { useParams, useNavigate } from "react-router-dom";


// function CategoryProductUnique() {
//   const { id } = useParams(); // Product ID from URL
//   const [product, setProduct] = useState(null);
//   const [relatedProducts, setRelatedProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();
//   const carouselRef = useRef(null);
//   const autoScrollInterval = useRef(null);

//   // Fetch single product
//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         setLoading(true);
//         const response = await fetch(
//           `https://ecommerce-backend-y1bv.onrender.com/api/product/${id}`
//         );
//         if (!response.ok) throw new Error("Failed to fetch product details");
//         const data = await response.json();
//         setProduct(data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (id) fetchProduct();
//   }, [id]);

//   // Fetch related products
//   useEffect(() => {
//     const fetchRelated = async () => {
//       if (!product?.category) return;
//       try {
//         const res = await fetch(
//           `http://localhost:5000/api/product/category/${product.category}`
//         );
//         if (!res.ok) throw new Error("Failed to fetch related products");
//         const data = await res.json();
//         const filtered = (data.products || []).filter((p) => p._id !== product._id);
//         setRelatedProducts(filtered.slice(0, 10));
//       } catch (err) {
//         console.error(err);
//       }
//     };
//     if (product) fetchRelated();
//   }, [product]);

//   // Manual scroll function
//   const scrollCarousel = (direction) => {
//     const scrollAmount = 320;
//     if (carouselRef.current) {
//       carouselRef.current.scrollBy({
//         left: direction === "left" ? -scrollAmount : scrollAmount,
//         behavior: "smooth",
//       });
//     }
//   };

//   // Auto-scroll effect
//   useEffect(() => {
//     const startAutoScroll = () => {
//       stopAutoScroll();
//       autoScrollInterval.current = setInterval(() => {
//         if (carouselRef.current) {
//           const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
//           if (scrollLeft + clientWidth >= scrollWidth - 10) {
//             // If at end, scroll back to start
//             carouselRef.current.scrollTo({ left: 0, behavior: "smooth" });
//           } else {
//             carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
//           }
//         }
//       }, 2500); // every 2.5 seconds
//     };

//     const stopAutoScroll = () => {
//       if (autoScrollInterval.current) clearInterval(autoScrollInterval.current);
//     };

//     startAutoScroll();

//     // Stop auto-scroll when user hovers or scrolls manually
//     const carousel = carouselRef.current;
//     if (carousel) {
//       carousel.addEventListener("mouseenter", stopAutoScroll);
//       carousel.addEventListener("mouseleave", startAutoScroll);
//       carousel.addEventListener("touchstart", stopAutoScroll);
//       carousel.addEventListener("touchend", startAutoScroll);
//     }

//     return () => {
//       stopAutoScroll();
//       if (carousel) {
//         carousel.removeEventListener("mouseenter", stopAutoScroll);
//         carousel.removeEventListener("mouseleave", startAutoScroll);
//         carousel.removeEventListener("touchstart", stopAutoScroll);
//         carousel.removeEventListener("touchend", startAutoScroll);
//       }
//     };
//   }, [relatedProducts]);

//   if (loading)
//     return <div className="text-center py-10 text-gray-600">Loading product details...</div>;
//   if (error) return <div className="text-center text-red-500">Error: {error}</div>;
//   if (!product) return <div className="text-center text-gray-500">No product found.</div>;

//   return (
//     <div className="container mx-auto px-4 py-8">
//       {/* Back Button */}
//       <button
//         onClick={() => navigate(-1)}
//         className="mb-6 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
//       >
//         ← Back
//       </button>

//       {/* Product Details */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         {/* Product Image */}
//         <div className="flex justify-center">
//           <img
//             src={product.images?.[0] || "https://via.placeholder.com/400x300?text=No+Image"}
//             alt={product.name}
//             className="w-full max-w-md rounded-2xl shadow-md object-cover"
//           />
//         </div>

//         {/* Product Info */}
//         <div className="space-y-4">
//           <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
//           <p className="text-gray-600">{product.description}</p>

//           <div className="mt-4">
//             <p className="text-xl font-semibold text-blue-600">
//               ₹{product.basePrice?.toLocaleString()}
//             </p>
//             {product.mrp && (
//               <p className="text-gray-500 line-through">MRP: ₹{product.mrp?.toLocaleString()}</p>
//             )}
//           </div>

//           <div className="mt-4 space-y-1">
//             <p><strong>Brand:</strong> {product.brand || "N/A"}</p>
//             <p><strong>Model:</strong> {product.model || "N/A"}</p>
//             <p><strong>Category:</strong> {product.category || "General"}</p>
//             <p><strong>Availability:</strong> {product.availability}</p>
//             <p><strong>Stock:</strong> {product.stock}</p>
//           </div>

//           <div className="mt-6">
//             <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
//               Add to Cart
//             </button>
//             <button className="ml-3 px-6 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition">
//               Buy Now
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Related Products Carousel */}
//       {relatedProducts.length > 0 && (
//         <div className="mt-12 relative">
//           <h2 className="text-2xl font-bold mb-6 text-center">
//             Related Products
//           </h2>

//           {/* Scroll Buttons */}
//           <button
//             onClick={() => scrollCarousel("left")}
//             className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition hidden sm:block"
//           >
//             ←
//           </button>
//           <button
//             onClick={() => scrollCarousel("right")}
//             className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition hidden sm:block"
//           >
//             →
//           </button>

//           {/* Carousel Container */}
//           <div
//             ref={carouselRef}
//             className="flex overflow-x-auto gap-6 scrollbar-hide scroll-smooth px-2 pb-2"
//             style={{ scrollBehavior: "smooth" }}
//           >
//             {relatedProducts.map((related) => (
//               <div
//                 key={related._id}
//                 onClick={() => navigate(`/product/${related._id}`)}
//                 className="min-w-[250px] sm:min-w-[280px] bg-white rounded-2xl shadow-md hover:shadow-lg transition-transform transform hover:scale-105 overflow-hidden cursor-pointer"
//               >
//                 <img
//                   src={
//                     related.images?.[0] ||
//                     "https://via.placeholder.com/300x200?text=No+Image"
//                   }
//                   alt={related.name}
//                   className="w-full h-48 object-cover"
//                 />
//                 <div className="p-4">
//                   <h3 className="text-lg font-semibold text-gray-800 truncate">
//                     {related.name}
//                   </h3>
//                   <p className="text-sm text-gray-500 mt-1">{related.brand}</p>
//                   <p className="text-blue-600 font-bold mt-2">
//                     ₹{related.basePrice?.toLocaleString()}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default CategoryProductUnique;
