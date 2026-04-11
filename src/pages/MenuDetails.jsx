import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useCart } from "../context/useCart";
import menuItems from "../data/menuItems";
import styles from "./MenuDetails.module.css";

export default function MenuDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { addToCart } = useCart();
    const [quantity, setQuantity] = useState(1);

    const item = menuItems.find((product) => product.id === id);
    if (!item) {
        return (
            <section className={styles.notFound}>
                <div className="container">
                    <h2>Item not found</h2>
                    <p>Return to the menu and choose another dish.</p>
                    <Link to="/menu" className={styles.backButton}>
                        Back to Menu
                    </Link>
                </div>
            </section>
        );
    }

    const handleAdd = () => {
        addToCart(item, quantity);
        navigate("/cart");
    };

    return (
        <section className={styles.detailsPage}>
            <div className="container">
                <div className={styles.breadcrumbs}>
                    <Link to="/menu">Menu</Link>
                    <span> / </span>
                    <span>{item.title}</span>
                </div>

                <div className={styles.content}>
                    <div className={styles.imageWrapper}>
                        <img src={item.image} alt={item.title} loading="lazy" />
                    </div>

                    <div className={styles.info}>
                        <span className={styles.category}>{item.category}</span>
                        <h1>{item.title}</h1>
                        <p>{item.description}</p>

                        <div className={styles.actionRow}>
                            <div className={styles.quantityControl}>
                                <button
                                    type="button"
                                    onClick={() => setQuantity((current) => Math.max(1, current - 1))}
                                >
                                    -
                                </button>
                                <span>{quantity}</span>
                                <button type="button" onClick={() => setQuantity((current) => current + 1)}>
                                    +
                                </button>
                            </div>

                            <div className={styles.priceWrapper}>
                                <span className={styles.price}>${item.price.toFixed(2)}</span>
                                <span className={styles.subtotal}>
                                    Subtotal: ${(item.price * quantity).toFixed(2)}
                                </span>
                            </div>
                        </div>

                        <div className={styles.buttons}>
                            <button className={styles.primary} onClick={handleAdd}>
                                Add to Order
                            </button>
                            <Link to="/cart" className={styles.secondary}>
                                View Order
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
