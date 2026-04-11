import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/useCart";
import menuItems from "../data/menuItems";
import styles from "./Menu.module.css";

const categories = ["All", "Seafood", "Oriental", "Meat"];

export default function MenuPage() {
    const [activeCategory, setActiveCategory] = useState("All");
    const { addToCart } = useCart();

    const filteredItems = useMemo(
        () =>
            activeCategory === "All"
                ? menuItems
                : menuItems.filter((item) => item.category === activeCategory),
        [activeCategory]
    );

    return (
        <section className={styles.menuPage}>
            <div className="container">
                <div className={styles.header}>
                    <div>
                        <span className={styles.label}>Our Menu</span>
                        <h1>Choose your favorite category</h1>
                    </div>
                    <div className={styles.tabs}>
                        {categories.map((category) => (
                            <button
                                key={category}
                                className={`${styles.tabButton} ${activeCategory === category ? styles.activeTab : ""
                                    }`}
                                onClick={() => setActiveCategory(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                <div className={styles.grid}>
                    {filteredItems.map((item) => (
                        <article key={item.id} className={styles.card}>
                            <img src={item.image} alt={item.title} loading="lazy" />
                            <div className={styles.cardBody}>
                                <div className={styles.topRow}>
                                    <h3>{item.title}</h3>
                                    <span>${item.price.toFixed(2)}</span>
                                </div>
                                <p>{item.description}</p>
                                <div className={styles.cardActions}>
                                    <Link to={`/menu/${item.id}`} className={styles.detailsLink}>
                                        Details
                                    </Link>
                                    <button
                                        className={styles.addButton}
                                        onClick={() => addToCart(item)}
                                    >
                                        Add to Order
                                    </button>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
