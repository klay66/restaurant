import { useCart } from "../../context/useCart";
import styles from "./Notification.module.css";

export default function Notification() {
    const { notification } = useCart();

    if (!notification) return null;

    return (
        <div className={`${styles.notification} ${styles[notification.type]}`}>
            <div className={styles.content}>
                <span className={styles.message}>{notification.message}</span>
                <button
                    className={styles.closeBtn}
                    onClick={() => {
                        // The notification will auto-close, but this allows manual close
                        const event = new CustomEvent('closeNotification');
                        window.dispatchEvent(event);
                    }}
                >
                    ×
                </button>
            </div>
        </div>
    );
}