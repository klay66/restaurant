import styles from "./MenuSection.module.css";
import { FaCoffee, FaHamburger, FaCocktail, FaIceCream } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function MenuSection() {
    const menuItems = [
        { title: "Breakfast", icon: <FaCoffee /> },
        { title: "Main Dishes", icon: <FaHamburger /> },
        { title: "Drinks", icon: <FaCocktail /> },
        { title: "Desserts", icon: <FaIceCream /> },
    ];

    return (
        <section className={styles.menu}>
            <div className={styles.container}>
                <h2>Browse Our Menu</h2>

                <div className={styles.grid}>
                    {menuItems.map((item, i) => (
                        <div key={i} className={styles.card}>
                            <div className={styles.icon}>{item.icon}</div>
                            <h3>{item.title}</h3>
                            <p>
                                In the new era of technology we look in the future with certainty
                                and pride.
                            </p>
                            <Link to="/menu" className={styles.link}>Explore Menu</Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}