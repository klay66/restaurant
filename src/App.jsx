رimport Navbar from "./components/Navbar/Navbar";
import Topbar from "./components/Navbar/Topbar/Topbar";
import FooterAdvanced from "./components/layout/Footer/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import MenuDetails from "./pages/MenuDetails";
import CartPage from "./pages/CartPage";
import BlogDetails from "./pages/BlogDetails";
import BookingPage from "./pages/Booking";

import { Route, Routes } from "react-router-dom";
import { CartProvider } from "./context/CartProvider";

export default function App() {
  return (
    <CartProvider>
      <Topbar />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/menu/:id" element={<MenuDetails />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <FooterAdvanced />
    </CartProvider>
  );
}