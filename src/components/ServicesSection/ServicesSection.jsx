import styles from "./ServicesSection.module.css";

export default function ServicesSection() {
    const services = [
        {
            title: "Caterings",
            img: "https://images.unsplash.com/photo-1543353071-873f17a7a088",
        },
        {
            title: "Birthdays",
            img: "https://images.unsplash.com/photo-1519741497674-611481863552",
        },
        {
            title: "Weddings",
            img: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486",
        },
        {
            title: "Events",
            img: "https://images.unsplash.com/photo-1505236858219-8359eb29e329",
        },
    ];

    return (
        <section className={styles.services}>
            <div className="container">
                <h2>We also offer unique services for your events</h2>


                <div className={styles.grid}>
                    {services.map((item, i) => (
                        <div key={i} className={styles.card}>
                            <img src={item.img} alt={item.title} />
                            <h3>{item.title}</h3>
                            <p>
                                In the new era of technology we look in the future with certainty
                                for life.
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}