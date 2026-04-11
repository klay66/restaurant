import styles from "./ServicesSection.module.css";
import fod from "../../assets/food.png";
import fod2 from "../../assets/fod2.avif";
import fod3 from "../../assets/fod3.avif";
import fod4 from "../../assets/fod4.avif";

export default function ServicesSection() {
    const services = [
        {
            title: "Caterings",
            img: fod,
        },
        {
            title: "Birthdays",
            img: fod2,
        },
        {
            title: "Weddings",
            img: fod3,
        },
        {
            title: "Events",
            img: fod4,
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