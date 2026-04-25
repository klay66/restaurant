import { createContext, useState, useEffect, useMemo } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => {
        const savedCart = localStorage.getItem('restaurant-cart');
        if (savedCart) {
            try {
                return JSON.parse(savedCart);
            } catch (error) {
                console.error('Error loading cart from localStorage:', error);
            }
        }
        return [];
    });
    const [notification, setNotification] = useState(null);

    // Save cart to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('restaurant-cart', JSON.stringify(cartItems));
    }, [cartItems]);

    // Show notification
    const showNotification = (message, type = 'success') => {
        setNotification({ message, type });
        // Clear notification after 3 seconds
        setTimeout(() => {
            setNotification(null);
        }, 3000);
    };

    // Add item to cart
    const addToCart = (item) => {
        setCartItems(prevItems => {
            const existingItem = prevItems.find(cartItem => cartItem.id === item.id);

            if (existingItem) {
                // Increase quantity if item already exists
                return prevItems.map(cartItem =>
                    cartItem.id === item.id
                        ? { ...cartItem, quantity: cartItem.quantity + 1 }
                        : cartItem
                );
            } else {
                // Add new item with quantity 1
                return [...prevItems, { ...item, quantity: 1 }];
            }
        });

        showNotification(`${item.title} تم إضافته للسلة!`, 'success');
    };

    // Update item quantity
    const updateQuantity = (itemId, newQuantity) => {
        if (newQuantity <= 0) {
            removeFromCart(itemId);
            return;
        }

        setCartItems(prevItems =>
            prevItems.map(item =>
                item.id === itemId
                    ? { ...item, quantity: newQuantity }
                    : item
            )
        );
    };

    // Remove item from cart
    const removeFromCart = (itemId) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== itemId));
        showNotification('تم حذف المنتج من السلة', 'info');
    };

    // Clear entire cart
    const clearCart = () => {
        setCartItems([]);
        showNotification('تم مسح السلة', 'info');
    };

    // Calculate subtotal
    const cartSubtotal = useMemo(() => {
        return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    }, [cartItems]);

    // Get total items count
    const cartItemCount = useMemo(() => {
        return cartItems.reduce((total, item) => total + item.quantity, 0);
    }, [cartItems]);

    const value = {
        cartItems,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        cartSubtotal,
        cartItemCount,
        notification,
        showNotification
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};
