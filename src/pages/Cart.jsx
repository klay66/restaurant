import { useMemo } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/useCart";
import styles from "./Cart.module.css";

export default function CartPage() {
    const { cartItems, updateQuantity, removeFromCart, clearCart, cartSubtotal } = useCart();

    const hasItems = cartItems.length > 0;

    const tax = useMemo(() => cartSubtotal * 0.08, [cartSubtotal]);
    const total = useMemo(() => cartSubtotal + tax, [cartSubtotal, tax]);

    return (
        <section className={styles.cartPage}>
            <div className="container">
                <div className={styles.topRow}>
                    <div>
                        <span className={styles.label}>Your Order</span>
                        <h1>Review your selection</h1>
                    </div>
                    <div>
                        <Link to="/menu" className={styles.backButton}>
                            Continue Browsing Menu
                        </Link>
                    </div>
                </div>

                {!hasItems ? (
                    <div className={styles.emptyState}>
                        <h2>Your cart is empty</h2>
                        <p>Add items from the menu to start your order.</p>
                        <Link to="/menu" className={styles.primaryButton}>
                            View Menu
                        </Link>
                    </div>
                ) : (
                    <div className={styles.grid}>
                        <div className={styles.itemsPanel}>
                            {cartItems.map((item) => (
                                <div key={item.id} className={styles.itemRow}>
                                    <img src={item.image} alt={item.title} loading="lazy" />
                                    <div className={styles.itemDetails}>
                                        <div className={styles.itemHeader}>
                                            <h3>{item.title}</h3>
                                            <span>${(item.price * item.quantity).toFixed(2)}</span>
                                        </div>
                                        <p>{item.category}</p>
                                        <div className={styles.quantityRow}>
                                            <button
                                                type="button"
                                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                            >
                                                -
                                            </button>
                                            <span>{item.quantity}</span>
                                            <button
                                                type="button"
                                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                            >
                                                +
                                            </button>
                                            <button
                                                type="button"
                                                className={styles.removeButton}
                                                onClick={() => removeFromCart(item.id)}
                                            >
                                                &times;
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <aside className={styles.summaryCard}>
                            <div>
                                <p>Subtotal</p>
                                <span>${cartSubtotal.toFixed(2)}</span>
                            </div>
                            <div>
                                <p>Service Fee</p>
                                <span>${tax.toFixed(2)}</span>
                            </div>
                            <div className={styles.totalRow}>
                                <p>Total</p>
                                <strong>${total.toFixed(2)}</strong>
                            </div>
                            <button
                                className={styles.primaryButton}
                                onClick={() => {
                                    clearCart();
                                    window.alert("Your order is confirmed. Thank you!");
                                }}
                            >
                                Confirm Order
                            </button>
                        </aside>
                    </div>
                )}
            </div>
        </section>
    );
}
