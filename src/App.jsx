import Navbar from "./components/Navbar/Navbar";
import Topbar from "./components/Navbar/Topbar/Topbar";
import FooterAdvanced from "./components/layout/Footer/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact/Contact";

import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Topbar />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <FooterAdvanced />
    </div>
  );
}