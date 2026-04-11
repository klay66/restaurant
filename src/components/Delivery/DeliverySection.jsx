import styles from "./DeliverySection.module.css";
import chef from "../../assets/optimized/chef .webp";
import food1 from "../../assets/food1.png";
import food2 from "../../assets/food2.png";

export default function DeliverySection() {
    const features = [
        "Delivery within 30 minutes",
        "Best Offer & Prices",
        "Online Services Available",
    ];

    return (
        <section className={styles.delivery}>
            <div className="container">
                <div className={styles.flexContainer}>

                    {/* Images */}
                    <div className={styles.images}>
                        <img src={chef} alt="chef" className={styles.big} loading="lazy" />

                        <div className={styles.smallImgs}>
                            <img src={food1} alt="food" loading="lazy" />
                            <img src={food2} alt="food" loading="lazy" />
                        </div>
                    </div>

                    {/* Text */}
                    <div className={styles.content}>
                        <h2>Fastest Food Delivery in City</h2>
                        <p>
                            Our visual designer lets you quickly and easily drag a down your way
                            to customapps for both keep desktop.
                        </p>

                        <ul>
                            {features.map((item, i) => (
                                <li key={i}>✔ {item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}