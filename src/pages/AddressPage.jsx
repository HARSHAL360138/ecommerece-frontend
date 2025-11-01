import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MapPin, Plus, Trash2, ArrowLeft } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddressPage = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // ✅ Get product ID from URL

  const [addresses, setAddresses] = useState([]);
  const [newAddress, setNewAddress] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    location: "",
  });
  const [selectedAddress, setSelectedAddress] = useState(null);

  // ✅ Load addresses and selected address
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("userAddresses")) || [];
    setAddresses(stored);
    const savedSelected = JSON.parse(localStorage.getItem("selectedAddress"));
    if (savedSelected) setSelectedAddress(savedSelected);
  }, []);

  // ✅ Save updated address list
  const saveAddresses = (updated) => {
    localStorage.setItem("userAddresses", JSON.stringify(updated));
    setAddresses(updated);
  };

  // ✅ Select an address
  const handleSelect = (addr) => {
    setSelectedAddress(addr);
    localStorage.setItem("selectedAddress", JSON.stringify(addr));
    toast.success("✅ Address selected successfully!");
  };

  // ✅ Delete an address
  const handleDelete = (pincode) => {
    const updated = addresses.filter((a) => a.pincode !== pincode);
    saveAddresses(updated);
    toast.info("🗑 Address deleted");
  };

  // ✅ Add new address
  const handleAddAddress = () => {
    if (
      !newAddress.name ||
      !newAddress.phone ||
      !newAddress.address ||
      !newAddress.city ||
      !newAddress.state ||
      !newAddress.pincode
    ) {
      toast.warn("⚠ Please fill all required fields!");
      return;
    }

    const updated = [...addresses, newAddress];
    saveAddresses(updated);
    setNewAddress({
      name: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      pincode: "",
      location: "",
    });
    toast.success("🎉 Address added successfully!");
  };

  // ✅ Continue to BuyNow page
  const handleConfirm = () => {
    if (!selectedAddress) {
      toast.warn("⚠ Please select an address before proceeding!");
      return;
    }
    localStorage.setItem("selectedAddress", JSON.stringify(selectedAddress));
    navigate(`/buynow/${id}`); // ✅ Redirect to BuyNow page
  };

  // ✅ Open Google Maps
  const handleGoogleSearch = () => {
    window.open("https://www.google.com/maps", "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f6f8fb] to-[#e8ecf3] p-4 sm:p-8">
      <ToastContainer position="top-center" />
      <div className="max-w-5xl mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden border border-[#002349]/20">
        {/* Header */}
        <div className="flex justify-between items-center text-white p-5 sm:p-6 bg-[#002349]/5">
          <button
            onClick={() => navigate(`/buynow/${id}`)}
            className="flex items-center gap-2 text-[#002349] hover:text-[#957C3D] transition"
          >
            <ArrowLeft size={20} /> Back
          </button>
          <h2 className="text-xl sm:text-2xl font-bold tracking-wide text-[#957C3D]">
            Manage Addresses
          </h2>
        </div>

        {/* Main Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
          {/* Left: Address List */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#002349] flex items-center gap-2">
              <MapPin className="text-[#957C3D]" /> Saved Addresses
            </h3>

            {addresses.length > 0 ? (
              addresses.map((addr, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className={`p-4 rounded-2xl border-2 transition-all cursor-pointer ${
                    selectedAddress?.pincode === addr.pincode
                      ? "border-[#957C3D] bg-[#fff9f3] shadow-md"
                      : "border-gray-200 bg-gray-50 hover:border-[#002349]"
                  }`}
                  onClick={() => handleSelect(addr)}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-[#002349]">
                        {addr.name}
                      </h4>
                      <p className="text-gray-700 text-sm">{addr.phone}</p>
                      <p className="text-gray-700 text-sm mt-1">
                        {addr.address}, {addr.city}, {addr.state} - {addr.pincode}
                      </p>
                      {addr.location && (
                        <a
                          href={addr.location}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#002349] text-xs underline mt-1 inline-block"
                        >
                          View on Map
                        </a>
                      )}
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDelete(addr.pincode);
                      }}
                      className="text-red-500 hover:text-red-700"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </motion.div>
              ))
            ) : (
              <p className="text-gray-500 italic">
                No saved addresses. Please add one below.
              </p>
            )}
          </div>

          {/* Right: Add Address Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-gradient-to-b from-[#fff] to-[#f8f7f4] p-5 rounded-2xl shadow-inner border border-[#002349]/10"
          >
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 text-[#002349]">
              <Plus size={20} className="text-[#957C3D]" /> Add New Address
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input
                type="text"
                placeholder="Full Name"
                value={newAddress.name}
                onChange={(e) =>
                  setNewAddress({ ...newAddress, name: e.target.value })
                }
                className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#957C3D] outline-none"
              />
              <input
                type="text"
                placeholder="Phone Number"
                value={newAddress.phone}
                onChange={(e) =>
                  setNewAddress({ ...newAddress, phone: e.target.value })
                }
                className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#957C3D] outline-none"
              />
              <input
                type="text"
                placeholder="Street Address"
                value={newAddress.address}
                onChange={(e) =>
                  setNewAddress({ ...newAddress, address: e.target.value })
                }
                className="border rounded-lg px-3 py-2 sm:col-span-2 focus:ring-2 focus:ring-[#957C3D] outline-none"
              />
              <input
                type="text"
                placeholder="City"
                value={newAddress.city}
                onChange={(e) =>
                  setNewAddress({ ...newAddress, city: e.target.value })
                }
                className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#957C3D] outline-none"
              />
              <input
                type="text"
                placeholder="State"
                value={newAddress.state}
                onChange={(e) =>
                  setNewAddress({ ...newAddress, state: e.target.value })
                }
                className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#957C3D] outline-none"
              />
              <input
                type="text"
                placeholder="Pincode"
                value={newAddress.pincode}
                onChange={(e) =>
                  setNewAddress({ ...newAddress, pincode: e.target.value })
                }
                className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#957C3D] outline-none"
              />
              <button
                onClick={handleGoogleSearch}
                className="sm:col-span-2 bg-[#002349] text-white font-semibold py-2 rounded-lg hover:bg-[#001a34] transition"
              >
                📍 Open Google Maps
              </button>
            </div>

            <button
              onClick={handleAddAddress}
              className="w-full mt-4 bg-[#957C3D] text-white font-semibold py-2 rounded-xl hover:bg-[#7b6633] transition"
            >
              Add Address
            </button>
          </motion.div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t flex justify-end">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleConfirm}
            className="bg-[#957C3D] text-white px-6 py-2 rounded-xl font-semibold hover:bg-[#7b6633] transition"
          >
            Save & Continue
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default AddressPage;
