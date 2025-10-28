// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";

// function CategoryProduct() {
//   const { categoryName } = useParams(); // Get category from URL (e.g. /category/Electronics)
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchCategoryProducts = async () => {
//       try {
//         setLoading(true);
//         const response = await fetch(
//           `http://localhost:5000/api/product/category/${categoryName}`
//         );
//         if (!response.ok) throw new Error("Failed to fetch category products");
//         const data = await response.json();
//         setProducts(data.products || []);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (categoryName) {
//       fetchCategoryProducts();
//     }
//   }, [categoryName]);

//   if (loading)
//     return <div className="text-center py-10 text-gray-600">Loading products...</div>;
//   if (error) return <div className="text-center text-red-500">Error: {error}</div>;

//   return (
//     <div className="container mx-auto px-4 py-8">
//       {/* Back Button */}
//       <button
//         onClick={() => navigate(-1)}
//         className="mb-6 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
//       >
//         ← Back to Categories
//       </button>

//       <h1 className="text-2xl font-bold mb-6 text-center capitalize">
//         {categoryName} Products
//       </h1>

//       {products.length === 0 ? (
//         <p className="text-center text-gray-500">
//           No products found in this category.
//         </p>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {products.map((product) => (
//             <div
//               key={product._id}
//               className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-transform transform hover:scale-105 overflow-hidden"
//             >
//               <img
//                 src={
//                   product.images?.[0] ||
//                   "https://via.placeholder.com/300x200?text=No+Image"
//                 }
//                 alt={product.name}
//                 className="w-full h-48 object-cover"
//               />
//               <div className="p-4">
//                 <h2 className="text-lg font-semibold text-gray-800 truncate">
//                   {product.name}
//                 </h2>
//                 <p className="text-sm text-gray-500 mt-1">{product.brand}</p>
//                 <p className="text-blue-600 font-bold mt-2">
//                   ₹{product.basePrice?.toLocaleString()}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default CategoryProduct;









import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function CategoryProduct() {
  const { categoryName } = useParams(); // Get category from URL (e.g. /category/Electronics)
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategoryProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://ecommerce-backend-y1bv.onrender.com/api/product/category/${categoryName}`
        );
        if (!response.ok) throw new Error("Failed to fetch category products");
        const data = await response.json();
        setProducts(data.products || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (categoryName) {
      fetchCategoryProducts();
    }
  }, [categoryName]);

  if (loading)
    return <div className="text-center py-10 text-gray-600">Loading products...</div>;
  if (error) return <div className="text-center text-red-500">Error: {error}</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-6 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
      >
        ← Back to Categories
      </button>

      <h1 className="text-2xl font-bold mb-6 text-center capitalize">
        {categoryName} Products
      </h1>

      {products.length === 0 ? (
        <p className="text-center text-gray-500">
          No products found in this category.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product._id}
              onClick={() => navigate(`/product/${product._id}`)} // 👈 Navigate to product details
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-transform transform hover:scale-105 overflow-hidden cursor-pointer"
            >
              <img
                src={
                  product.images?.[0] ||
                  "https://via.placeholder.com/300x200?text=No+Image"
                }
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800 truncate">
                  {product.name}
                </h2>
                <p className="text-sm text-gray-500 mt-1">{product.brand}</p>
                <p className="text-blue-600 font-bold mt-2">
                  ₹{product.basePrice?.toLocaleString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CategoryProduct;
