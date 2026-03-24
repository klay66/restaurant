import Navbar from "./components/Navbar/Navbar";
import { FooterAdvanced } from "./components/Footer/Footer";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <FooterAdvanced />
    </div>
  );
}
