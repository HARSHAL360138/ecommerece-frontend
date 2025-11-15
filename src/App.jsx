// // src/App.jsx
// import React from "react";
// import { Navigate, Route, Routes, useLocation } from "react-router-dom";
// import "./App.css";

// // Pages
// import Home from "./pages/Home";
// import Login from "./pages/Login";
// import Logout from "./pages/Logout";
// import Register from "./pages/Register";
// import AllProducts from "./pages/AllProducts";
// import BuyNow from "./pages/BuyNow";
// import AddressPage from "./pages/AddressPage";
// import SearchPage from "./pages/SearchPage";
// import CustomerService from "./pages/CustomerService";



// // Components
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import ProfileModel from "./components/ProfileModel";
// import HeroSection from "./components/HeroSection";
// import WhyShopWithUs from "./components/WhyShopWithUs";
// import OurProducts from "./components/OurProducts";
// import Category from "./components/Category";
// import SubscriptionOffer from "./components/SubscriptionOffer";
// import Testimonials from "./components/Testimonials";
// import Wishlist from "./components/Wishlist";
// import Cart from "./components/Cart";
// import AiChatModel from "./components/AiChatModel";
// import CategoryProduct from "./components/CategoryProduct";
// import CategoryProductUnique from "./components/CategoryProductUnique";
// import SubCategoryPage from "./components/SubCategoryPage";


// // Profile pages
// import CreateProfile from "./profile/CreateProfile";
// import GetProfile from "./profile/GetProfile";
// import EditProfile from "./profile/EditProfile";
// import ProfileWrapper from "./profile/ProfileWrapper";
// import OrderHistory from "./pages/OrderHistory";

// /* ✅ Protected & Public Route Components */
// const ProtectedRoute = ({ children }) => {
//   const token = localStorage.getItem("accessToken");
//   return token ? children : <Navigate to="/login" replace />;
// };

// const PublicRoute = ({ children }) => {
//   const token = localStorage.getItem("accessToken");
//   return token ? <Navigate to="/home" replace /> : children;
// };

// /* ✅ App Component */
// function App() {
//   const location = useLocation();
//   const hideNavFooter =
//     location.pathname === "/login" || location.pathname === "/signup";

//   return (
//     <>
//       {/* Navbar (Hidden on Login & Signup) */}
//       {!hideNavFooter && <Navbar />}

//       <Routes>
//         {/* ------------------- Public Routes ------------------- */}
//         <Route
//           path="/"
//           element={
//             <>
//               <HeroSection />
//               <WhyShopWithUs />
//               <OurProducts />
//               <Category />
//               <SubscriptionOffer />
//               <Testimonials />
//               <AiChatModel />
//             </>
//           }
//         />

//         <Route
//           path="/hero-section"
//           element={
//             <>
//               <HeroSection />
//               <WhyShopWithUs />
//               <OurProducts />
//               <Category />
//               <SubscriptionOffer />
//               <Testimonials />
//               <AiChatModel />
//             </>
//           }
//         />
// <Route path="/customer-service" element={<CustomerService />} />

//         <Route path="/login" element={ <PublicRoute> <Login /> </PublicRoute> }/>
//         <Route path="/signup" element={ <PublicRoute> <Register /> </PublicRoute>}/>

//         {/* ------------------- Protected Routes ------------------- */}
//         <Route path="/home" element={<ProtectedRoute> <Home /> </ProtectedRoute>}/> 
//         <Route path="/logout"  element={ <ProtectedRoute> <Logout /> </ProtectedRoute>}/>
        
//         {/* ------------------- Profile ------------------- */}
//         <Route path="/profile" element={ <ProtectedRoute><ProfileModel /></ProtectedRoute>}/>
//         <Route path="/create-profile" element={ <ProtectedRoute> <CreateProfile /> </ProtectedRoute>} />
//         <Route path="/get-profile"element={<ProtectedRoute><GetProfile /></ProtectedRoute>} />
//         <Route path="/edit-profile" element={ <ProtectedRoute> <EditProfile /></ProtectedRoute>}/>
//         <Route path="/profile-wrapper" element={<ProtectedRoute> <ProfileWrapper /> </ProtectedRoute>}/>

//         {/* ------------------- Product Browsing Flow ------------------- */}
//         {/* ✅ Step 1: All categories */}
//         <Route path="/categories" element={ <ProtectedRoute><Category /></ProtectedRoute>}/>
            
//         {/* ✅ Step 2: Subcategories under category */}
//         <Route path="/category/:categoryName" element={ <ProtectedRoute><SubCategoryPage /></ProtectedRoute> }/>
              
//         {/* ✅ Step 3: Products under a subcategory */}
//         <Route path="/category/:categoryName/:subCategoryName" element={ <ProtectedRoute><CategoryProduct /></ProtectedRoute>} />

//         {/* ✅ Step 4: Product Details Page */}
//         <Route path="/product/:id" element={ <ProtectedRoute><CategoryProductUnique /></ProtectedRoute>}/>

//         {/* ------------------- Wishlist & Cart ------------------- */}
//         <Route path="/wishlist" element={ <ProtectedRoute><Wishlist /></ProtectedRoute>}/>
//         <Route path="/cart" element={ <ProtectedRoute> <Cart /></ProtectedRoute>}/>

//         {/* ------------------- All Products ------------------- */}
//         <Route path="/all-products" element={ <ProtectedRoute> <AllProducts /> </ProtectedRoute>}/>

//         <Route
//               path="/buynow/:id"
//               element={
//                 <ProtectedRoute>
//                   <BuyNow />
//                 </ProtectedRoute>
//               }
//             />

//              <Route path="/address/:id" element={<ProtectedRoute><AddressPage /> </ProtectedRoute>} />
//              <Route path="/orders" element={<ProtectedRoute><OrderHistory /> </ProtectedRoute>} />
//              <Route path="/search" element={<ProtectedRoute><SearchPage /></ProtectedRoute>} />

//         {/* -------------- Fallback Route -------------- */}
//         <Route path="*" element={<Navigate to="/" replace />} /> </Routes>

//       {/* Footer (Hidden on Login & Signup) */}
//       {!hideNavFooter && <Footer />}

//       {/* Floating AI Chat */}
//       <AiChatModel />
//     </>
//   );
// }

// export default App;




// // src/App.jsx
// import React from "react";
// import { Navigate, Route, Routes, useLocation } from "react-router-dom";
// import "./App.css";

// // Pages
// import Home from "./pages/Home";
// import Login from "./pages/Login";
// import Logout from "./pages/Logout";
// import Register from "./pages/Register";
// import AllProducts from "./pages/AllProducts";
// import BuyNow from "./pages/BuyNow";
// import AddressPage from "./pages/AddressPage";
// import SearchPage from "./pages/SearchPage";
// import CustomerService from "./pages/CustomerService";



// // Components
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import ProfileModel from "./components/ProfileModel";
// import HeroSection from "./components/HeroSection";
// import WhyShopWithUs from "./components/WhyShopWithUs";
// import OurProducts from "./components/OurProducts";
// import Category from "./components/Category";
// import SubscriptionOffer from "./components/SubscriptionOffer";
// import Testimonials from "./components/Testimonials";
// import Wishlist from "./components/Wishlist";
// import Cart from "./components/Cart";
// import AiChatModel from "./components/AiChatModel";
// import CategoryProduct from "./components/CategoryProduct";
// import CategoryProductUnique from "./components/CategoryProductUnique";
// import SubCategoryPage from "./components/SubCategoryPage";


// // Profile pages
// import CreateProfile from "./profile/CreateProfile";
// import GetProfile from "./profile/GetProfile";
// import EditProfile from "./profile/EditProfile";
// import ProfileWrapper from "./profile/ProfileWrapper";
// import OrderHistory from "./pages/OrderHistory";

// /* ✅ Protected & Public Route Components */
// const ProtectedRoute = ({ children }) => {
//   const token = localStorage.getItem("accessToken");
//   return token ? children : <Navigate to="/login" replace />;
// };

// const PublicRoute = ({ children }) => {
//   const token = localStorage.getItem("accessToken");
//   return token ? <Navigate to="/home" replace /> : children;
// };

// /* ✅ App Component */
// function App() {
//   const location = useLocation();
//   const hideNavFooter =
//     location.pathname === "/login" || location.pathname === "/signup";

//   return (
//     <>
//       {/* Navbar (Hidden on Login & Signup) */}
//       {!hideNavFooter && <Navbar />}

//       <Routes>
//         {/* ------------------- Public Routes ------------------- */}
//         <Route
//           path="/"
//           element={
//             <>
//               <HeroSection />
//               <WhyShopWithUs />
//               <OurProducts />
//               <Category />
//               <SubscriptionOffer />
//               <Testimonials />
//               <AiChatModel />
//             </>
//           }
//         />

//         <Route
//           path="/hero-section"
//           element={
//             <>
//               <HeroSection />
//               <WhyShopWithUs />
//               <OurProducts />
//               <Category />
//               <SubscriptionOffer />
//               <Testimonials />
//               <AiChatModel />
//             </>
//           }
//         />
// <Route path="/customer-service" element={<CustomerService />} />

//         <Route path="/login" element={ <PublicRoute> <Login /> </PublicRoute> }/>
//         <Route path="/signup" element={ <PublicRoute> <Register /> </PublicRoute>}/>

//         {/* ------------------- Protected Routes ------------------- */}
//         <Route path="/home" element={<ProtectedRoute> <Home /> </ProtectedRoute>}/> 
//         <Route path="/logout"  element={ <ProtectedRoute> <Logout /> </ProtectedRoute>}/>
        
//         {/* ------------------- Profile ------------------- */}
//         <Route path="/profile" element={ <ProtectedRoute><ProfileModel /></ProtectedRoute>}/>
//         <Route path="/create-profile" element={ <ProtectedRoute> <CreateProfile /> </ProtectedRoute>} />
//         <Route path="/get-profile"element={<ProtectedRoute><GetProfile /></ProtectedRoute>} />
//         <Route path="/edit-profile" element={ <ProtectedRoute> <EditProfile /></ProtectedRoute>}/>
//         <Route path="/profile-wrapper" element={<ProtectedRoute> <ProfileWrapper /> </ProtectedRoute>}/>

//         {/* ------------------- Product Browsing Flow ------------------- */}
//         {/* ✅ Step 1: All categories */}
//         <Route path="/categories" element={ <ProtectedRoute><Category /></ProtectedRoute>}/>
            
//         {/* ✅ Step 2: Subcategories under category */}
//         <Route path="/category/:categoryName" element={ <ProtectedRoute><SubCategoryPage /></ProtectedRoute> }/>
              
//         {/* ✅ Step 3: Products under a subcategory */}
//         <Route path="/category/:categoryName/:subCategoryName" element={ <ProtectedRoute><CategoryProduct /></ProtectedRoute>} />

//         {/* ✅ Step 4: Product Details Page */}
//         <Route path="/product/:id" element={ <ProtectedRoute><CategoryProductUnique /></ProtectedRoute>}/>

//         {/* ------------------- Wishlist & Cart ------------------- */}
//         <Route path="/wishlist" element={ <ProtectedRoute><Wishlist /></ProtectedRoute>}/>
//         <Route path="/cart" element={ <ProtectedRoute> <Cart /></ProtectedRoute>}/>

//         {/* ------------------- All Products ------------------- */}
//         <Route path="/all-products" element={ <ProtectedRoute> <AllProducts /> </ProtectedRoute>}/>

//         <Route
//               path="/buynow/:id"
//               element={
//                 <ProtectedRoute>
//                   <BuyNow />
//                 </ProtectedRoute>
//               }
//             />

//              <Route path="/address/:id" element={<ProtectedRoute><AddressPage /> </ProtectedRoute>} />
//              <Route path="/orders" element={<ProtectedRoute><OrderHistory /> </ProtectedRoute>} />
//              <Route path="/search" element={<ProtectedRoute><SearchPage /></ProtectedRoute>} />

//         {/* -------------- Fallback Route -------------- */}
//         <Route path="*" element={<Navigate to="/" replace />} /> </Routes>

//       {/* Footer (Hidden on Login & Signup) */}
//       {!hideNavFooter && <Footer />}

//       {/* Floating AI Chat */}
//       <AiChatModel />
//     </>
//   );
// }

// export default App;




// src/App.jsx
import React, { useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";

// Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Register from "./pages/Register";
import AllProducts from "./pages/AllProducts";
import BuyNow from "./pages/BuyNow";
import AddressPage from "./pages/AddressPage";
import SearchPage from "./pages/SearchPage";
import CustomerService from "./pages/CustomerService";
import OrderHistory from "./pages/OrderHistory";
import OfferSection from "./components/OfferSection"; 

// Newly added pages (Footer links)
import HelpCenter from "./pages/HelpCenter";
import PoliciesAndRules from "./pages/PoliciesAndRules";
import OnlineReturnsPolicy from "./pages/OnlineReturnsPolicy";
import FAQs from "./pages/FAQs";
import ProductSupport from "./pages/ProductSupport"; // ✅ new page
import Membership from "./pages/Membership"; // ✅ new page

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProfileModel from "./components/ProfileModel";
import HeroSection from "./components/HeroSection";
import WhyShopWithUs from "./components/WhyShopWithUs";
import OurProducts from "./components/OurProducts";
import Category from "./components/Category";
import Testimonials from "./components/Testimonials";
import Wishlist from "./components/Wishlist";
import Cart from "./components/Cart";
import AiChatModel from "./components/AiChatModel";
import CategoryProduct from "./components/CategoryProduct";
import CategoryProductUnique from "./components/CategoryProductUnique";
import SubCategoryPage from "./components/SubCategoryPage";

// Profile Pages
import CreateProfile from "./profile/CreateProfile";
import GetProfile from "./profile/GetProfile";
import EditProfile from "./profile/EditProfile";
import ProfileWrapper from "./profile/ProfileWrapper";
import PlaceOrder from "./components/PlaceOrder";

// ✅ ScrollToTop Component
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

/* ✅ Protected & Public Route Components */
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("accessToken");
  return token ? children : <Navigate to="/login" replace />;
};

const PublicRoute = ({ children }) => {
  const token = localStorage.getItem("accessToken");
  return token ? <Navigate to="/home" replace /> : children;
};

/* ✅ App Component */
function App() {
  const location = useLocation();

  // Hide Navbar & Footer on specific pages
  const hideNavFooter =
    location.pathname === "/login" || location.pathname === "/signup";

  // Hide only Footer on standalone info pages
  const hideFooterOnly = [
    "/help",
    "/policies",
    "/returns",
    "/faqs",
    "/product-support",
    "/membership",
  ].includes(location.pathname);

  return (
    <>
      {/* Navbar (Hidden on Login & Signup) */}
      {!hideNavFooter && <Navbar />}

      {/* Scroll to Top on route change */}
      <ScrollToTop />

      <Routes>
        {/* ------------------- Public Routes ------------------- */}
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <WhyShopWithUs />
              <OurProducts />
              <Category />
              <Testimonials />
              <AiChatModel />
            </>
          }
        />

        <Route
          path="/hero-section"
          element={
            <>
              <HeroSection />
              <WhyShopWithUs />
              <OurProducts />
              <Category />
              <Testimonials />
              <AiChatModel />
            </>
          }
        />

        <Route path="/customer-service" element={<CustomerService />} />
<Route path="/OfferSection" element={<OfferSection />} />

        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />

        {/* ------------------- Protected Routes ------------------- */}
        {/* <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        /> */}
        <Route
          path="/logout"
          element={
            <ProtectedRoute>
              <Logout />
            </ProtectedRoute>
          }
        />

        {/* ------------------- Profile ------------------- */}
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <ProfileModel />
            </ProtectedRoute>
          }
        />
        <Route
          path="/create-profile"
          element={
            <ProtectedRoute>
              <CreateProfile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/get-profile"
          element={
            <ProtectedRoute>
              <GetProfile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/edit-profile"
          element={
            <ProtectedRoute>
              <EditProfile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile-wrapper"
          element={
            <ProtectedRoute>
              <ProfileWrapper />
            </ProtectedRoute>
          }
        />

        {/* ------------------- Product Flow ------------------- */}
        <Route
          path="/categories"
          element={
            <ProtectedRoute>
              <Category />
            </ProtectedRoute>
          }
        />
        <Route
          path="/category/:categoryName"
          element={
            <ProtectedRoute>
              <SubCategoryPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/category/:categoryName/:subCategoryName"
          element={
            <ProtectedRoute>
              <CategoryProduct />
            </ProtectedRoute>
          }
        />
        <Route
          path="/product/:id"
          element={
            <ProtectedRoute>
              <CategoryProductUnique />
            </ProtectedRoute>
          }
        />

        {/* ------------------- Wishlist & Cart ------------------- */}
        <Route
          path="/wishlist"
          element={
            <ProtectedRoute>
              <Wishlist />
            </ProtectedRoute>
          }
        />
        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          }
        />

        {/* ------------------- All Products ------------------- */}
        <Route
          path="/all-products"
          element={
            <ProtectedRoute>
              <AllProducts />
            </ProtectedRoute>
          }
        />

        {/* ------------------- Order & Buy Flow ------------------- */}
        <Route
          path="/buynow/:id"
          element={
            <ProtectedRoute>
              <BuyNow />
            </ProtectedRoute>
          }
        />
        <Route
          path="/address/:id"
          element={
            <ProtectedRoute>
              <AddressPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/orders"
          element={
            <ProtectedRoute>
              <OrderHistory />
            </ProtectedRoute>
          }
        />
        <Route
          path="/search"
          element={
            <ProtectedRoute>
              <SearchPage />
            </ProtectedRoute>
          }
        />

        {/* ------------------- Newly Added ------------------- */}
        <Route
          path="/getprofile"
          element={
            <ProtectedRoute>
              <GetProfile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/orderhistory"
          element={
            <ProtectedRoute>
              <OrderHistory />
            </ProtectedRoute>
          }
        />
         <Route
          path="/placeorder"
          element={
            <ProtectedRoute>
              <PlaceOrder />
            </ProtectedRoute>
          }
        />
        <Route path="/faqs" element={<FAQs />} />

        {/* ------------------- Info Pages (from Footer) ------------------- */}
        <Route path="/help" element={<HelpCenter />} />
        <Route path="/policies" element={<PoliciesAndRules />} />
        <Route path="/returns" element={<OnlineReturnsPolicy />} />
        <Route path="/product-support" element={<ProductSupport />} /> {/* ✅ new */}
        <Route path="/membership" element={<Membership />} /> {/* ✅ new */}

        {/* ------------------- Fallback ------------------- */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      {/* Footer (Hidden on Login/Signup & Standalone pages) */}
      {!hideNavFooter && !hideFooterOnly && <Footer />}

      {/* Floating AI Chat */}
      <AiChatModel />
    </>
  );
}

export default App;


