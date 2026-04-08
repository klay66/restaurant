import Navbar from "./components/Navbar/Navbar";
import { FooterAdvanced } from "./components/layout/Footer/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import { Route, Routes } from "react-router-dom";
import TopBar from "./components/Navbar/Topbar/TopBar";

export default function App() {
  return (
    <div>
      <TopBar />
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
