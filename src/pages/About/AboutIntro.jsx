import styles from "./AboutIntro.module.css";

export default function AboutIntro() {
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <div className={styles.left}>
          <img
            src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop"
            alt="food"
            className={styles.image}
          />

          <div className={styles.card}>
            <h3>Come and visit us</h3>

            <div className={styles.infoItem}>
              <span>📞</span>
              <p>(414) 857 - 0107</p>
            </div>

            <div className={styles.infoItem}>
              <span>✉️</span>
              <p>happytummy@restaurant.com</p>
            </div>

            <div className={styles.infoItem}>
              <span>📍</span>
              <p>837 W. Marshall Lane Marshalltown, IA 50158, Los Angeles</p>
            </div>
          </div>
        </div>

        <div className={styles.right}>
          <h2>We provide healthy food for your family.</h2>

          <p className={styles.boldText}>
            Our story began with a vision to create a unique dining experience
            that merges fine dining, exceptional service, and a vibrant
            ambiance. Rooted in city's rich culinary culture, we aim to honor
            our local roots while infusing a global palate.
          </p>

          <p>
            At place, we believe that dining is not just about food, but also
            about the overall experience. Our staff, renowned for their warmth
            and dedication, strives to make every visit an unforgettable event.
          </p>
        </div>
      </div>
    </section>
  );
}