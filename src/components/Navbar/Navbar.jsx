import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useCart } from "../../context/useCart";
import styles from "./Navbar.module.css";
import { FaBars, FaTimes } from "react-icons/fa";
import logoDark from "../../assets/logo-dark.svg";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const { cartCount } = useCart();

    const links = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Menu", path: "/menu" },
        { name: "Blog", path: "/blog" },
        { name: "Book A Table", path: "/booking" },
        { name: "Contact", path: "/contact" },
    ];

    return (
        <nav className={styles.navbar}>

            {/* Logo */}
            <Link to="/" className={styles.logo}><img src={logoDark} alt="Logo" /></Link>

            <ul className={styles.links}>
                {links.map((link, i) => (
                    <li key={i}>
                        <NavLink
                            to={link.path}
                            className={({ isActive }) =>
                                isActive ? styles.activeLink : undefined
                            }
                            end={link.path === "/" ? true : false}
                        >
                            {link.name}
                        </NavLink>
                    </li>
                ))}
            </ul>

            <Link to="/cart" className={styles.btn}>
                My Order{cartCount > 0 ? ` (${cartCount})` : ""}
            </Link>

            <div className={styles.menuIcon} onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <FaTimes /> : <FaBars />}
            </div>

            <div className={`${styles.mobileMenu} ${menuOpen ? styles.show : ""}`}>
                {links.map((link, i) => (
                    <p key={i}>
                        <NavLink
                            to={link.path}
                            className={({ isActive }) =>
                                isActive ? `${styles.mobileLink} ${styles.activeMobileLink}` : styles.mobileLink
                            }
                            end={link.path === "/" ? true : false}
                            onClick={() => setMenuOpen(false)}
                        >
                            {link.name}
                        </NavLink>
                    </p>
                ))}
                <p>
                    <Link to="/cart" className={styles.mobileOrder} onClick={() => setMenuOpen(false)}>
                        My Order{cartCount > 0 ? ` (${cartCount})` : ""}
                    </Link>
                </p>
            </div>
        </nav>
    );
}