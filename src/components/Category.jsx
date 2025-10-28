import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Category() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/product/categories/latest");
        if (!response.ok) throw new Error("Failed to fetch categories");
        const data = await response.json();
        setCategories(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading)
    return <div className="text-center py-10 text-gray-600">Loading categories...</div>;
  if (error) return <div className="text-center text-red-500">Error: {error}</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6 text-center">Product Categories</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-2xl overflow-hidden hover:scale-105 transition-transform cursor-pointer"
            onClick={() => navigate(`/category/${encodeURIComponent(cat.category)}`)}
          >
            <img
              src={cat.latestProductImage || "https://via.placeholder.com/300x200?text=No+Image"}
              alt={cat.latestProductName}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-center">
              <h2 className="text-lg font-semibold text-gray-800">{cat.category}</h2>
              <p className="text-sm text-gray-500 mt-1">{cat.latestProductName}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;
