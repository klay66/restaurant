import Navbar from "./components/Navbar/Navbar";
import { FooterAdvanced } from "./components/Footer/Footer";
import Home from "./pages/Home";
import About from "./pages/About/About"
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <FooterAdvanced />
    </div>
  );
}
