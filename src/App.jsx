import Navbar from "./components/Navbar/Navbar";
import Topbar from "./components/Navbar/Topbar/Topbar";
import { FooterAdvanced } from "./components/layout/Footer/Footer";
import About from "./pages/About/About";
import MenuPage from "./pages/Menu";
import MenuDetails from "./pages/MenuDetails";
import CartPage from "./pages/Cart";
import ContactPage from "./pages/Contact";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import BookingPage from "./pages/Booking";
import Home from "./pages/Home";
import { CartProvider } from "./context/CartProvider";

import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <CartProvider>
      <Topbar />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/menu/:id" element={<MenuDetails />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      <FooterAdvanced />
    </CartProvider>
  );
}