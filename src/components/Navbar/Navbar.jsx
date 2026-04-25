import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { useCart } from "../../context/useCart";
import styles from "./Navbar.module.css";
import { FaBars, FaTimes } from "react-icons/fa";
import logoDark from "../../assets/logo-dark.svg";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const { cartItemCount } = useCart();
    const [pendingOrdersCount, setPendingOrdersCount] = useState(0);

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [menuOpen]);

    useEffect(() => {
        const updateCount = () => {
            const orders = JSON.parse(localStorage.getItem('restaurant-orders') || '[]');
            const count = orders.filter(o => o.status === 'pending').length;
            setPendingOrdersCount(count);
        };

        updateCount();
        
        window.addEventListener('ordersUpdated', updateCount);
        window.addEventListener('storage', updateCount);

        return () => {
            window.removeEventListener('ordersUpdated', updateCount);
            window.removeEventListener('storage', updateCount);
        };
    }, []);

    const links = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Menu", path: "/menu" },
        { name: "Blog", path: "/blog" },
        { name: "Book A Table", path: "/booking" },
        { name: "Contact", path: "/contact" },
        { name: "Orders", path: "/orders" },
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
                            {link.name === "Orders" && pendingOrdersCount > 0 && (
                                <span className={styles.badge}>{pendingOrdersCount}</span>
                            )}
                        </NavLink>
                    </li>
                ))}
            </ul>

            <Link to="/cart" className={styles.btn}>
                My Order{cartItemCount > 0 && <span className={styles.badge}>{cartItemCount}</span>}
            </Link>

            <div className={`${styles.menuIcon} ${menuOpen ? styles.open : ""}`} onClick={() => setMenuOpen(!menuOpen)}>
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
                            {link.name === "Orders" && pendingOrdersCount > 0 && ` (${pendingOrdersCount})`}
                        </NavLink>
                    </p>
                ))}
                <p>
                    <Link to="/cart" className={styles.mobileOrder} onClick={() => setMenuOpen(false)}>
                        My Order{cartItemCount > 0 && <span className={styles.badge}>{cartItemCount}</span>}
                    </Link>
                </p>
            </div>
        </nav>
    );
}