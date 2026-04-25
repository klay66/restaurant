import Navbar from "./components/Navbar/Navbar";
import Topbar from "./components/Navbar/Topbar/Topbar";
import FooterAdvanced from "./components/layout/Footer/Footer";
import Notification from "./components/Notification/Notification";

import Home from "./pages/Home";
import About from "./pages/About/About";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact/Contact";
import MenuDetails from "./pages/MenuDetails";
import CartPage from "./pages/Cart";

import { Route, Routes } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { Suspense, lazy } from "react";
import "./loading.css";

// Lazy load heavy components
const LazyBlog = lazy(() => import("./pages/Blog"));
const LazyBlogDetails = lazy(() => import("./pages/BlogDetails"));
const LazyBookingPage = lazy(() => import("./pages/Booking"));

import OrdersPage from "./pages/Orders/Orders";

export default function App() {
  return (
    <CartProvider>
      <Topbar />
      <Navbar />
      <Notification />

      <Suspense fallback={<div className="loading">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/menu/:id" element={<MenuDetails />} />
          <Route path="/blog" element={<LazyBlog />} />
          <Route path="/blog/:id" element={<LazyBlogDetails />} />
          <Route path="/booking" element={<LazyBookingPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/orders" element={<OrdersPage />} />
        </Routes>
      </Suspense>

      <FooterAdvanced />
    </CartProvider>
  );
}