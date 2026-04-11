import { useMemo, useState } from "react";
import { CartContext } from "./CartContext";

export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product, quantity = 1) => {
        setCartItems((current) => {
            const existing = current.find((item) => item.id === product.id);
            if (existing) {
                return current.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                );
            }
            return [...current, { ...product, quantity }];
        });
    };

    const updateQuantity = (id, quantity) => {
        setCartItems((current) =>
            current
                .map((item) =>
                    item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
                )
                .filter((item) => item.quantity > 0)
        );
    };

    const removeFromCart = (id) => {
        setCartItems((current) => current.filter((item) => item.id !== id));
    };

    const clearCart = () => setCartItems([]);

    const cartCount = useMemo(
        () => cartItems.reduce((total, item) => total + item.quantity, 0),
        [cartItems]
    );

    const cartSubtotal = useMemo(
        () => cartItems.reduce((total, item) => total + item.price * item.quantity, 0),
        [cartItems]
    );

    const value = useMemo(
        () => ({
            cartItems,
            addToCart,
            updateQuantity,
            removeFromCart,
            clearCart,
            cartCount,
            cartSubtotal,
        }),
        [cartItems, cartCount, cartSubtotal]
    );

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
