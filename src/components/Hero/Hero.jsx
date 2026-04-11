import { useNavigate } from "react-router-dom";
import styles from "./Hero.module.css";
import heroImg from "../../assets/hero.png";

export default function Hero() {
    const navigate = useNavigate();

    return (
        <section className={styles.hero}
            style={{ backgroundImage: `url(${heroImg})` }}>
            <div className={styles.overlay}></div>

            <div className={styles.content}>
                <h1 className={styles.title}>Best food for your taste</h1>

                <p className={styles.desc}>
                    Discover delectable cuisine and unforgettable moments in our welcoming culinary haven.
                </p>

                <div className={styles.buttons}>
                    <button className={styles.primary} onClick={() => navigate("/booking")}>Book A Table</button>
                    <button className={styles.secondary} onClick={() => navigate("/menu")}>Explore Menu</button>
                </div>
            </div>
        </section>
    );
}