import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import styles from "./Orders.module.css";

export default function OrdersPage() {
    const [orders, setOrders] = useState(() => {
        let savedOrders = JSON.parse(localStorage.getItem('restaurant-orders') || '[]');
        
        // Add unique IDs and normalize statuses for old orders
        let needsSave = false;
        savedOrders = savedOrders.map((order, index) => {
            let modified = false;
            let newOrder = { ...order };

            if (!newOrder.id) {
                newOrder.id = (Date.now() + index).toString();
                modified = true;
            }

            // If it's not completed or rejected, it should be pending
            if (newOrder.status !== 'completed' && newOrder.status !== 'rejected' && newOrder.status !== 'pending') {
                newOrder.status = 'pending';
                modified = true;
            }

            if (modified) {
                needsSave = true;
            }
            
            return newOrder;
        });

        if (needsSave) {
            localStorage.setItem('restaurant-orders', JSON.stringify(savedOrders));
            window.dispatchEvent(new Event('ordersUpdated'));
        }

        return savedOrders.reverse(); // Show newest first
    });



    const handleStatusUpdate = (orderId, newStatus) => {
        if(window.confirm(`Are you sure you want to mark this order as ${newStatus}?`)) {
            // Read fresh from localStorage to avoid race conditions
            const savedOrders = JSON.parse(localStorage.getItem('restaurant-orders') || '[]');
            const updated = savedOrders.map(order => 
                order.id === orderId ? { ...order, status: newStatus } : order
            );
            localStorage.setItem('restaurant-orders', JSON.stringify(updated));
            window.dispatchEvent(new Event('ordersUpdated'));
            // Update local state (reversed)
            setOrders(updated.reverse());
        }
    };

    const handleDeleteOrder = (orderId) => {
        if(window.confirm("Are you sure you want to completely delete this order?")) {
            const savedOrders = JSON.parse(localStorage.getItem('restaurant-orders') || '[]');
            const updated = savedOrders.filter(order => order.id !== orderId);
            localStorage.setItem('restaurant-orders', JSON.stringify(updated));
            window.dispatchEvent(new Event('ordersUpdated'));
            setOrders(updated.reverse());
        }
    };

    const stats = {
        total: orders.length,
        pending: orders.filter(o => o.status === 'pending').length,
        completed: orders.filter(o => o.status === 'completed').length,
        rejected: orders.filter(o => o.status === 'rejected').length
    };

    const getStatusText = (status) => {
        switch(status) {
            case 'pending': return 'Pending';
            case 'completed': return 'Completed';
            case 'rejected': return 'Rejected';
            default: return status;
        }
    };

    return (
        <section className={styles.ordersPage}>
            <div className="container">
                <div className={styles.header}>
                    <h1>Orders Management</h1>
                    <p>Track incoming orders status</p>
                </div>

                <div className={styles.stats}>
                    <div className={styles.statCard}>
                        <h3>Total Orders</h3>
                        <p style={{color: '#155724'}}>{stats.total}</p>
                    </div>
                    <div className={styles.statCard}>
                        <h3>Pending</h3>
                        <p style={{color: '#856404'}}>{stats.pending}</p>
                    </div>
                    <div className={styles.statCard}>
                        <h3>Completed</h3>
                        <p style={{color: '#155724'}}>{stats.completed}</p>
                    </div>
                    <div className={styles.statCard}>
                        <h3>Rejected</h3>
                        <p style={{color: '#721c24'}}>{stats.rejected}</p>
                    </div>
                </div>
            </div>

            <div className={styles.fluidContainer}>
                <div className={styles.tableContainer}>
                    {orders.length === 0 ? (
                        <div className={styles.emptyState}>
                            <h2>No orders found yet</h2>
                        </div>
                    ) : (
                        <table className={styles.ordersTable}>
                            <thead>
                                <tr>
                                    <th>Phone</th>
                                    <th>Address</th>
                                    <th>Total</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orders.map(order => (
                                    <tr key={order.id}>
                                        <td>
                                            {order.customerInfo?.phone}
                                        </td>
                                        <td>
                                            {order.customerInfo?.location}
                                        </td>
                                        <td>${order.totals?.total?.toFixed(2)}</td>
                                        <td>
                                            <span className={`${styles.statusBadge} ${styles['status_' + order.status]}`}>
                                                {getStatusText(order.status)}
                                            </span>
                                        </td>
                                        <td>
                                            <div className={styles.actions}>
                                                <button 
                                                    className={`${styles.btn} ${styles.btnComplete}`}
                                                    onClick={() => handleStatusUpdate(order.id, 'completed')}
                                                    disabled={order.status === 'completed'}
                                                >
                                                    Complete
                                                </button>
                                                <button 
                                                    className={`${styles.btn} ${styles.btnReject}`}
                                                    onClick={() => handleStatusUpdate(order.id, 'rejected')}
                                                    disabled={order.status === 'rejected'}
                                                >
                                                    Reject
                                                </button>
                                                <button 
                                                    className={`${styles.iconBtn} ${styles.btnDelete}`}
                                                    onClick={() => handleDeleteOrder(order.id)}
                                                    title="Delete Order"
                                                >
                                                    <FaTrash />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
        </section>
    );
}
