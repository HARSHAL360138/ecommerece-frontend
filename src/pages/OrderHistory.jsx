
// import React, { useEffect, useState } from "react";
// import { fetchWithAuth } from "../refreshtoken/api";
// import {
//   Loader2,
//   Package,
//   Truck,
//   ShoppingBag,
//   RotateCcw,
//   ShieldCheck,
//   Tag,
//   Layers,
//   Trash2,
// } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// function OrderHistory() {
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchOrders = async () => {
//       try {
//         const userData = await fetchWithAuth(
//           "https://ecommerce-backend-y1bv.onrender.com/api/user/profile"
//         );
//         if (!userData?._id) throw new Error("User not found");

//         const orderData = await fetchWithAuth(
//           `https://ecommerce-backend-y1bv.onrender.com/api/buynow/user/${userData._id}`
//         );

//         setOrders(orderData || []);
//       } catch (error) {
//         console.error("Failed to fetch orders:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchOrders();
//   }, []);

//   const handleReorder = (productId) => {
//     navigate(`/buynow/${productId}`);
//   };

//   const handleDelete = async (orderId) => {
//     try {
//       const response = await fetch(
//         `https://ecommerce-backend-y1bv.onrender.com/api/buynow/${orderId}`,
//         {
//           method: "DELETE",
//         }
//       );

//       if (!response.ok) {
//         throw new Error("Failed to delete order");
//       }

//       // Remove deleted order from state
//       setOrders((prevOrders) =>
//         prevOrders.filter((order) => order._id !== orderId)
//       );
//     } catch (error) {
//       console.error("Error deleting order:", error);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-[#f9f9f9] py-10 px-4 text-[#002349]">
//       <h2 className="text-3xl font-extrabold text-center mb-8 flex items-center justify-center gap-2">
//         <ShoppingBag size={28} className="text-[#957C3D]" /> Order History
//       </h2>

//       {loading ? (
//         <div className="flex items-center justify-center py-20">
//           <Loader2 size={32} className="animate-spin text-[#957C3D]" />
//           <span className="ml-2 text-lg font-semibold">Loading orders...</span>
//         </div>
//       ) : orders.length === 0 ? (
//         <div className="text-center py-20">
//           <Package size={48} className="mx-auto text-gray-400 mb-3" />
//           <p className="text-gray-500 text-lg">You have no recent orders yet.</p>
//         </div>
//       ) : (
//         <div className="max-w-4xl mx-auto space-y-6">
//           {orders.map((order, index) => {
//             const product = order.product || {};
//             return (
//               <div
//                 key={index}
//                 className="bg-white border border-[#e5e5e5] shadow-md rounded-xl p-6 hover:shadow-lg transition"
//               >
//                 {/* Product Info */}
//                 <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
//                   <img
//                     src={
//                       product.images?.[0] || "https://via.placeholder.com/120"
//                     }
//                     alt={product.name || "Product"}
//                     className="w-24 h-24 object-cover rounded-lg border"
//                   />
//                   <div className="flex-1">
//                     <h3 className="text-lg font-bold">
//                       {product.name || "Unknown Product"}
//                     </h3>
//                     <p className="text-sm text-gray-600">
//                       {product.brand ? `${product.brand} • ` : ""}
//                       {product.model || "No Model Info"}
//                     </p>
//                     <p className="text-sm text-gray-500 mt-1">
//                       {product.category} / {product.subCategory} /{" "}
//                       {product.subSubCategory}
//                     </p>
//                     <p className="text-[#957C3D] font-semibold mt-1">
//                       ₹{product.basePrice?.toLocaleString() || "0"}
//                     </p>
//                   </div>
//                   <div className="flex gap-2">
//                     <button
//                       onClick={() => handleReorder(product._id)}
//                       className="flex items-center gap-1 bg-[#957C3D] text-white px-4 py-2 rounded-lg hover:bg-[#7b6533] transition text-sm font-medium"
//                     >
//                       <RotateCcw size={16} /> Reorder
//                     </button>
//                     <button
//                       onClick={() => handleDelete(order._id)}
//                       className="flex items-center gap-1 bg-red-500 text-white px-3 py-2 rounded-lg hover:bg-red-600 transition text-sm font-medium"
//                     >
//                       <Trash2 size={16} /> Delete
//                     </button>
//                   </div>
//                 </div>

//                 {/* Product Details */}
//                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-sm text-gray-700 mb-3">
//                   <div>
//                     <span className="font-semibold">Quantity:</span>{" "}
//                     {order.quantity}
//                   </div>
//                   <div>
//                     <span className="font-semibold">Payment:</span>{" "}
//                     {order.paymentMethod}
//                   </div>
//                   <div>
//                     <span className="font-semibold">Total:</span> ₹
//                     {order.totalAmount?.toLocaleString() || "0"}
//                   </div>
//                   <div>
//                     <span className="font-semibold">Status:</span>{" "}
//                     <span
//                       className={`px-2 py-1 rounded-md text-xs ${
//                         order.status === "Processing"
//                           ? "bg-yellow-100 text-yellow-700"
//                           : order.status === "Delivered"
//                           ? "bg-green-100 text-green-700"
//                           : "bg-gray-100 text-gray-600"
//                       }`}
//                     >
//                       {order.status}
//                     </span>
//                   </div>
//                   <div>
//                     <span className="font-semibold">Stock:</span>{" "}
//                     {product.stock ?? "N/A"}
//                   </div>
//                   <div>
//                     <span className="font-semibold">Availability:</span>{" "}
//                     {product.availability}
//                   </div>
//                 </div>

//                 {/* Warranty Info */}
//                 {product.warranty && (
//                   <div className="flex items-center gap-2 text-sm text-gray-700 mb-3">
//                     <ShieldCheck size={16} className="text-[#957C3D]" />
//                     <span>
//                       Warranty: {product.warranty.type} –{" "}
//                       {product.warranty.duration}
//                     </span>
//                   </div>
//                 )}

//                 {/* Shipping Info */}
//                 <div className="bg-[#f9f9f9] rounded-lg p-3 text-sm border border-[#e5e5e5] mb-3">
//                   <p className="font-semibold mb-1 text-[#002349] flex items-center gap-1">
//                     <Truck size={16} /> Shipping Address
//                   </p>
//                   <p>
//                     {order.shippingAddress?.street},{" "}
//                     {order.shippingAddress?.city},{" "}
//                     {order.shippingAddress?.state}{" "}
//                     {order.shippingAddress?.postalCode},{" "}
//                     {order.shippingAddress?.country}
//                   </p>
//                 </div>

//                 {/* Extra Info */}
//                 <div className="flex flex-wrap items-center justify-between text-xs text-gray-500 mt-3">
//                   <div className="flex items-center gap-1">
//                     <Tag size={14} /> Order ID: {order._id}
//                   </div>
//                   <div>
//                     Ordered on:{" "}
//                     {new Date(order.orderDate || order.createdAt).toLocaleDateString(
//                       "en-IN",
//                       {
//                         year: "numeric",
//                         month: "short",
//                         day: "numeric",
//                       }
//                     )}
//                   </div>
//                 </div>

//                 {/* Variant or Size Info */}
//                 {product.sizes?.length > 0 && (
//                   <div className="mt-3 text-sm text-gray-600 flex items-center gap-1">
//                     <Layers size={16} className="text-[#957C3D]" />
//                     Available Sizes: {product.sizes.join(", ")}
//                   </div>
//                 )}
//               </div>
//             );
//           })}
//         </div>
//       )}
//     </div>
//   );
// }

// export default OrderHistory;











import React, { useEffect, useState } from "react";
import { fetchWithAuth } from "../refreshtoken/api";
import {
  Loader2,
  Package,
  Truck,
  ShoppingBag,
  RotateCcw,
  ShieldCheck,
  Tag,
  Layers,
  Trash2,
  Ruler,
  CreditCard,
  Banknote,
  CalendarClock,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

function OrderHistory() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const userData = await fetchWithAuth(
          "https://ecommerce-backend-y1bv.onrender.com/api/user/profile"
        );
        if (!userData?._id) throw new Error("User not found");

        const orderData = await fetchWithAuth(
          `https://ecommerce-backend-y1bv.onrender.com/api/buynow/user/${userData._id}`
        );

        setOrders(orderData || []);
      } catch (error) {
        console.error("Failed to fetch orders:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const handleReorder = (productId) => {
    navigate(`/buynow/${productId}`);
  };

  const handleDelete = async (orderId) => {
    try {
      const response = await fetch(
        `https://ecommerce-backend-y1bv.onrender.com/api/buynow/${orderId}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete order");
      }

      setOrders((prevOrders) =>
        prevOrders.filter((order) => order._id !== orderId)
      );
    } catch (error) {
      console.error("Error deleting order:", error);
    }
  };

  return (
    <div className="min-h-screen bg-[#f9f9f9] py-10 px-4 text-[#002349]">
      <h2 className="text-3xl font-extrabold text-center mb-8 flex items-center justify-center gap-2">
        <ShoppingBag size={28} className="text-[#957C3D]" /> Order History
      </h2>

      {loading ? (
        <div className="flex items-center justify-center py-20">
          <Loader2 size={32} className="animate-spin text-[#957C3D]" />
          <span className="ml-2 text-lg font-semibold">Loading orders...</span>
        </div>
      ) : orders.length === 0 ? (
        <div className="text-center py-20">
          <Package size={48} className="mx-auto text-gray-400 mb-3" />
          <p className="text-gray-500 text-lg">You have no recent orders yet.</p>
        </div>
      ) : (
        <div className="max-w-5xl mx-auto space-y-6">
          {orders.map((order, index) => {
            const product = order.product || {};
            const shipping = product.shipping || {};
            const warranty = product.warranty || {};
            const share = product.share || {};
            const dimensions = shipping.dimensions || {};

            return (
              <div
                key={index}
                className="bg-white border border-[#e5e5e5] shadow-md rounded-xl p-6 hover:shadow-lg transition"
              >
                {/* Product Info */}
                <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                  <img
                    src={
                      product.images?.[0] || "https://via.placeholder.com/120"
                    }
                    alt={product.name || "Product"}
                    className="w-28 h-28 object-cover rounded-lg border"
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-bold">
                      {product.name || "Unknown Product"}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {product.brand ? `${product.brand} • ` : ""}
                      {product.model || "No Model Info"}
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      {product.category} / {product.subCategory} /{" "}
                      {product.subSubCategory}
                    </p>
                    <p className="text-[#957C3D] font-semibold mt-1">
                      ₹{product.basePrice?.toLocaleString() || "0"}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleReorder(product._id)}
                      className="flex items-center gap-1 bg-[#957C3D] text-white px-4 py-2 rounded-lg hover:bg-[#7b6533] transition text-sm font-medium"
                    >
                      <RotateCcw size={16} /> Reorder
                    </button>
                    <button
                      onClick={() => handleDelete(order._id)}
                      className="flex items-center gap-1 bg-red-500 text-white px-3 py-2 rounded-lg hover:bg-red-600 transition text-sm font-medium"
                    >
                      <Trash2 size={16} /> Delete
                    </button>
                  </div>
                </div>

                {/* Product & Order Details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-sm text-gray-700 mb-3">
                  <div>
                    <span className="font-semibold">Quantity:</span>{" "}
                    {order.quantity}
                  </div>
                  <div>
                    <span className="font-semibold">Payment:</span>{" "}
                    {order.paymentMethod}
                  </div>
                  <div>
                    <span className="font-semibold">Total:</span> ₹
                    {order.totalAmount?.toLocaleString() || "0"}
                  </div>
                  <div>
                    <span className="font-semibold">Transaction ID:</span>{" "}
                    {order.transactionId || "N/A"}
                  </div>
                  <div>
                    <span className="font-semibold">Amount Paid:</span> ₹
                    {order.amountPaid || 0}
                  </div>
                  <div>
                    <span className="font-semibold">Payment Status:</span>{" "}
                    <span
                      className={`px-2 py-1 rounded-md text-xs ${
                        order.paymentStatus === "Success"
                          ? "bg-green-100 text-green-700"
                          : order.paymentStatus === "Pending"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {order.paymentStatus}
                    </span>
                  </div>
                  <div>
                    <span className="font-semibold">Order Status:</span>{" "}
                    <span
                      className={`px-2 py-1 rounded-md text-xs ${
                        order.status === "Processing"
                          ? "bg-yellow-100 text-yellow-700"
                          : order.status === "Delivered"
                          ? "bg-green-100 text-green-700"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {order.status}
                    </span>
                  </div>
                  <div>
                    <span className="font-semibold">Stock:</span>{" "}
                    {product.stock ?? "N/A"}
                  </div>
                  <div>
                    <span className="font-semibold">Availability:</span>{" "}
                    {product.availability || "N/A"}
                  </div>
                </div>

                {/* Warranty Info */}
                {warranty.type && (
                  <div className="flex items-center gap-2 text-sm text-gray-700 mb-3">
                    <ShieldCheck size={16} className="text-[#957C3D]" />
                    <span>
                      Warranty: {warranty.type} – {warranty.duration}
                    </span>
                  </div>
                )}

                {/* Shipping Info */}
                <div className="bg-[#f9f9f9] rounded-lg p-3 text-sm border border-[#e5e5e5] mb-3">
                  <p className="font-semibold mb-1 text-[#002349] flex items-center gap-1">
                    <Truck size={16} /> Shipping Address
                  </p>
                  <p>
                    {order.shippingAddress?.street},{" "}
                    {order.shippingAddress?.city},{" "}
                    {order.shippingAddress?.state}{" "}
                    {order.shippingAddress?.postalCode},{" "}
                    {order.shippingAddress?.country}
                  </p>
                </div>

                {/* Shipping & Product Meta Info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700 mb-3">
                  <div className="flex items-center gap-1">
                    <Ruler size={14} className="text-[#957C3D]" />
                    <span>
                      Dimensions: {dimensions?.length || "-"} x{" "}
                      {dimensions?.width || "-"} x {dimensions?.height || "-"}{" "}
                      {dimensions?.unit || ""}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Truck size={14} className="text-[#957C3D]" />
                    <span>Shipping Charge: ₹{shipping.shippingCharge || 0}</span>
                  </div>
                </div>

                {/* Shares Info */}
                {share.platformShares && (
                  <div className="text-xs text-gray-600 mb-3">
                    <p className="font-semibold text-[#002349] mb-1 flex items-center gap-1">
                      <Tag size={14} /> Share Stats
                    </p>
                    <p>
                      WhatsApp: {share.platformShares.whatsapp}, Facebook:{" "}
                      {share.platformShares.facebook}, Instagram:{" "}
                      {share.platformShares.instagram}, Total Shares:{" "}
                      {share.totalShares || 0}
                    </p>
                  </div>
                )}

                {/* Extra Info */}
                <div className="flex flex-wrap items-center justify-between text-xs text-gray-500 mt-3">
                  <div className="flex items-center gap-1">
                    <Tag size={14} /> Order ID: {order._id}
                  </div>
                  <div className="flex items-center gap-1">
                    <CalendarClock size={14} />
                    Ordered on:{" "}
                    {new Date(order.orderDate || order.createdAt).toLocaleDateString(
                      "en-IN",
                      {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      }
                    )}
                  </div>
                </div>

                {/* Sizes Info */}
                {product.sizes?.length > 0 && (
                  <div className="mt-3 text-sm text-gray-600 flex items-center gap-1">
                    <Layers size={16} className="text-[#957C3D]" />
                    Available Sizes: {product.sizes.join(", ")}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default OrderHistory;
