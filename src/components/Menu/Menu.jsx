import menuStyles from "./Menu.module.css";

export function Menu() {
    const items = [
        { name: "Burger", price: "$10" },
        { name: "Pizza", price: "$12" },
        { name: "Steak", price: "$20" }
    ];

    return (
        <section className={menuStyles.menu}>
            <h2>Our Menu</h2>
            <div className={menuStyles.grid}>
                {items.map((item, index) => (
                    <div key={index} className={menuStyles.card}>
                        <h3>{item.name}</h3>
                        <p>{item.price}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
