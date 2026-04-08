import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const links = [
        { name: "Home", path: "/" },
        { name: "Menu", path: "/menu" },
        { name: "About", path: "/about" },
        { name: "Contact", path: "/contact" },
    ];

    return (
        <nav className={styles.navbar}>
            {/* Logo */}
            <Link to="/" className={styles.logo}>Bistro Bliss</Link>

            {/* Desktop Links */}
            <ul className={styles.links}>
                {links.map((link, i) => (
                    <li key={i}>
                        <Link to={link.path}>{link.name}</Link>
                    </li>
                ))}
            </ul>

            {/* Button */}
            <button className={styles.btn}>Book a Table</button>

            {/* Mobile Icon */}
            <div className={styles.menuIcon} onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <FaTimes /> : <FaBars />}
            </div>

            {/* Mobile Menu */}
            <div className={`${styles.mobileMenu} ${menuOpen ? styles.show : ""}`}>
                {links.map((link, i) => (
                    <p key={i}>
                        <Link to={link.path} onClick={() => setMenuOpen(false)}>{link.name}</Link>
                    </p>
                ))}
            </div>
        </nav>
    );
}