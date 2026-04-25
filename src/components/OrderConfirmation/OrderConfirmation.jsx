import { useState } from "react";
import { useCart } from "../../context/useCart";
import styles from "./OrderConfirmation.module.css";

export default function OrderConfirmation({ isOpen, onClose, onConfirm }) {
    const { cartItems, cartSubtotal, clearCart } = useCart();
    const [formData, setFormData] = useState({
        phone: '',
        location: '',
        notes: ''
    });
    const [errors, setErrors] = useState({});

    const tax = cartSubtotal * 0.08;
    const total = cartSubtotal + tax;

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.phone.trim()) {
            newErrors.phone = 'رقم الهاتف مطلوب';
        } else if (!/^(\+20|0)?1[0-2,5]\d{8}$/.test(formData.phone.replace(/\s/g, ''))) {
            newErrors.phone = 'رقم الهاتف غير صحيح';
        }

        if (!formData.location.trim()) {
            newErrors.location = 'العنوان مطلوب';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        // Create order object
        const orderData = {
            id: Date.now().toString(),
            items: cartItems,
            customerInfo: formData,
            totals: {
                subtotal: cartSubtotal,
                tax: tax,
                total: total
            },
            orderTime: new Date().toISOString(),
            status: 'pending'
        };

        // Call onConfirm callback
        onConfirm(orderData);

        // Clear cart and close modal
        clearCart();
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <div className={styles.header}>
                    <h2>تأكيد الطلب</h2>
                    <button className={styles.closeBtn} onClick={onClose}>
                        ×
                    </button>
                </div>

                <div className={styles.content}>
                    {/* Order Summary */}
                    <div className={styles.orderSummary}>
                        <h3>ملخص الطلب</h3>
                        <div className={styles.itemsList}>
                            {cartItems.map((item) => (
                                <div key={item.id} className={styles.item}>
                                    <div className={styles.itemInfo}>
                                        <span className={styles.itemName}>{item.title}</span>
                                        <span className={styles.itemQuantity}>×{item.quantity}</span>
                                    </div>
                                    <span className={styles.itemPrice}>
                                        ${(item.price * item.quantity).toFixed(2)}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <div className={styles.totals}>
                            <div className={styles.totalRow}>
                                <span>المجموع الفرعي:</span>
                                <span>${cartSubtotal.toFixed(2)}</span>
                            </div>
                            <div className={styles.totalRow}>
                                <span>الخدمة:</span>
                                <span>${tax.toFixed(2)}</span>
                            </div>
                            <div className={`${styles.totalRow} ${styles.finalTotal}`}>
                                <span>الإجمالي:</span>
                                <strong>${total.toFixed(2)}</strong>
                            </div>
                        </div>
                    </div>

                    {/* Customer Information Form */}
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <h3>معلومات التوصيل</h3>

                        <div className={styles.formGroup}>
                            <label htmlFor="phone">رقم الهاتف *</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                placeholder="مثال: 01234567890"
                                className={errors.phone ? styles.error : ''}
                            />
                            {errors.phone && <span className={styles.errorText}>{errors.phone}</span>}
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="location">العنوان *</label>
                            <textarea
                                id="location"
                                name="location"
                                value={formData.location}
                                onChange={handleInputChange}
                                placeholder="أدخل عنوانك بالتفصيل"
                                rows="3"
                                className={errors.location ? styles.error : ''}
                            />
                            {errors.location && <span className={styles.errorText}>{errors.location}</span>}
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="notes">ملاحظات إضافية (اختياري)</label>
                            <textarea
                                id="notes"
                                name="notes"
                                value={formData.notes}
                                onChange={handleInputChange}
                                placeholder="أي ملاحظات خاصة بالطلب..."
                                rows="2"
                            />
                        </div>

                        <div className={styles.actions}>
                            <button type="button" className={styles.cancelBtn} onClick={onClose}>
                                إلغاء
                            </button>
                            <button type="submit" className={styles.confirmBtn}>
                                تأكيد الطلب
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}