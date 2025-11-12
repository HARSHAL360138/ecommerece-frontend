
// import React from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { Tag, Gift, Clock } from "lucide-react";
// import image from "../assets/image.png";
// import hero1 from "../assets/hero1.png";

// const OfferSection = () => {
//   const offers = [
//     {
//       id: 1,
//       title: "Flat 40% OFF on New Arrivals",
//       desc: "Refresh your wardrobe with trendy outfits. Offer valid till stocks last!",
//       img: "https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=600&q=80",
//       bg: "bg-gradient-to-r from-[#002349] to-[#003366]",
//       tag: "Limited Time",
//     },
//     {
//       id: 2,
//       title: "Buy 1 Get 1 Free",
//       desc: "Double the style! Buy any topwear and get another absolutely free.",
//       img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&q=80",
//       bg: "bg-gradient-to-r from-[#957C3D] to-[#c9a94d]",
//       tag: "BOGO Deal",
//     },
//     {
//       id: 3,
//       title: "Exclusive Offer for Members",
//       desc: "Get additional 10% off on all items for premium members. Log in to claim!",
//       img: hero1,
//       bg: "bg-gradient-to-r from-[#002349] to-[#957C3D]",
//       tag: "Members Only",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-100 py-16 px-4 sm:px-8 md:px-16">
//       <h1 className="text-4xl md:text-5xl font-extrabold text-center text-[#002349] mb-12 tracking-wide">
//         Special <span className="text-[#957C3D]">Offers</span>
//       </h1>

//       <div className="space-y-14">
//         {offers.map((offer, index) => (
//           <motion.div
//             key={offer.id}
//             initial={{ opacity: 0, y: 60 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className={`rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row ${
//               index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
//             } ${offer.bg} text-white hover:shadow-[0_0_25px_rgba(149,124,61,0.7)] transition-all duration-500`}
//           >
//             {/* Image */}
//             <div className="md:w-1/2 w-full relative">
//               <img
//                 src={offer.img}
//                 alt={offer.title}
//                 className="w-full h-80 md:h-full object-cover"
//               />
//               <div className="absolute top-4 left-4 bg-white text-[#002349] px-3 py-1 text-sm font-semibold rounded-full flex items-center gap-1">
//                 <Tag size={14} /> {offer.tag}
//               </div>
//             </div>

//             {/* Text Section */}
//             <div className="md:w-1/2 w-full p-10 flex flex-col justify-center">
//               <div className="flex items-center gap-2 mb-3">
//                 <Gift size={20} className="text-[#FFD700]" />
//                 <span className="uppercase tracking-wider text-sm opacity-90">
//                   Special Deal
//                 </span>
//               </div>
//               <h2 className="text-3xl font-bold mb-4">{offer.title}</h2>
//               <p className="text-lg opacity-90 mb-6">{offer.desc}</p>

//               <Link
//                 to="/products"
//                 className="self-start bg-white text-[#002349] font-semibold px-6 py-2 rounded-full hover:bg-[#957C3D] hover:text-white transition-all shadow-md"
//               >
//                 Shop Now
//               </Link>

//               {/* Countdown / urgency element */}
//               <div className="flex items-center gap-2 mt-6 text-sm text-white/90">
//                 <Clock size={16} />
//                 <p>Offer ends soon — don’t miss out!</p>
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default OfferSection;

import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Tag, Gift, Clock, Truck, Zap } from "lucide-react";
import hero1 from "../assets/hero1.png";
import image from "../assets/image.png";

const OfferSection = () => {
  const offers = [
    {
      id: 1,
      title: "Flat 40% OFF on New Arrivals",
      desc: "Upgrade your wardrobe with stylish and comfortable outfits crafted with quality fabrics. Explore our latest collection of casuals, formals, and festive wear. Don’t miss the chance to refresh your look this season — offer valid till stocks last!",
      img: "https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=600&q=80",
      bg: "bg-gradient-to-r from-[#002349] to-[#003366]",
      tag: "Limited Time",
      category: "Clothing",
      validity: "Valid till Nov 30, 2025",
    },
    {
      id: 2,
      title: "Buy 1 Get 1 Free",
      desc: "Enjoy our exclusive BOGO offer on topwear. Buy any shirt, t-shirt, or blouse and get another absolutely free. Perfect for gifting or doubling your wardrobe collection with premium quality designs.",
      img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&q=80",
      bg: "bg-gradient-to-r from-[#957C3D] to-[#c9a94d]",
      tag: "BOGO Deal",
      category: "Accessories",
      validity: "Offer valid till stock lasts",
    },
    {
      id: 3,
      title: "Exclusive Offer for Members",
      desc: "Our loyal members deserve something special! Get an additional 10% off on all items — including ongoing sales. Log in to your account, apply your membership discount at checkout, and save more with every order.",
      img: hero1,
      bg: "bg-gradient-to-r from-[#002349] to-[#957C3D]",
      tag: "Members Only",
      category: "All Categories",
      validity: "Valid through Dec 15, 2025",
    },
    {
      id: 4,
      title: "Free Shipping on Orders Above ₹999",
      desc: "We’ve made shopping easier than ever. Enjoy free doorstep delivery on all orders above ₹999 with no hidden charges. Your favorite items, delivered safely and quickly — absolutely free!",
      img: image,
      bg: "bg-gradient-to-r from-[#003366] to-[#957C3D]",
      tag: "Free Delivery",
      category: "All Products",
      validity: "Ongoing Offer",
    },
  ];

  return (
    
    <div className="min-h-screen bg-gray-100 py-12 sm:py-16 px-4 sm:px-8 md:px-16 mt-24">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center text-[#002349] mb-12 tracking-wide">
        Special <span className="text-[#957C3D]">Offers</span>
      </h1>

      <div className="flex flex-col gap-16">
        {offers.map((offer, index) => (
          <motion.div
            key={offer.id}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } ${offer.bg} text-white hover:shadow-[0_0_35px_rgba(149,124,61,0.8)] hover:scale-[1.02] transition-all duration-500`}
          >
            {/* Image Section */}
            <div className="md:w-1/2 w-full relative overflow-hidden">
              <img
                src={offer.img}
                alt={offer.title}
                className="w-full h-64 sm:h-72 md:h-full object-cover transform hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 bg-white text-[#002349] px-3 py-1 text-sm font-semibold rounded-full flex items-center gap-1">
                <Tag size={14} /> {offer.tag}
              </div>

              {/* Floating Discount Label */}
              <div className="absolute bottom-4 right-4 bg-[#957C3D] px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1 animate-pulse">
                <Zap size={14} /> Hot Deal
              </div>
            </div>

            {/* Text Section */}
            <div className="md:w-1/2 w-full p-6 sm:p-10 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-3">
                <Gift size={20} className="text-[#FFD700]" />
                <span className="uppercase tracking-wider text-sm opacity-90">
                  {offer.category}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold mb-4 leading-tight">
                {offer.title}
              </h2>
              <p className="text-base sm:text-lg opacity-90 mb-6 leading-relaxed">
                {offer.desc}
              </p>

              <Link
                to="/products"
                className="self-start bg-white text-[#002349] font-semibold px-6 py-2 rounded-full hover:bg-[#957C3D] hover:text-white hover:scale-105 transition-all shadow-md"
              >
                Grab Deal
              </Link>

              <div className="flex items-center gap-2 mt-6 text-sm text-white/90">
                <Clock size={16} />
                <p>{offer.validity}</p>
              </div>

              <div className="flex items-center gap-2 mt-3 text-sm text-white/90">
                <Truck size={16} />
                <p>Free shipping available on all eligible orders</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default OfferSection;
