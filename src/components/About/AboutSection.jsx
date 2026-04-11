import styles from "./AboutSection.module.css";
import foodImg from "../../assets/optimized/food.webp";

export default function AboutSection() {
    return (
        <section className={styles.about}>
            <div className={styles.container}>

                {/* Image */}
                <div className={styles.imageWrapper}>
                    <img src={foodImg} alt="food" loading="lazy" />

                    <div className={styles.card}>
                        <h4>Come and visit us</h4>
                        <p>📞 (414) 857 - 0107</p>
                        <p>📧 happytummy@restaurant.com</p>
                        <p>📍 837 W Marshall Lane Marshalltown, IA 50158</p>
                    </div>
                </div>

                {/* Text */}
                <div className={styles.content}>
                    <h2>We provide healthy food for your family.</h2>
                    <p>
                        Our story began with a vision to create a unique dining experience
                        that merges fine dining, exceptional service, and a vibrant
                        ambiance.
                    </p>

                    <button>More About Us</button>
                </div>
            </div>
        </section>
    );
}