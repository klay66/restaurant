import styles from "./AboutInfo.module.css";

export default function AboutInfo() {
  return (
    <section className={styles.info}>
      <div className={styles.container}>
        <div className={styles.left}>
          <h2>A little information for our valuable guest</h2>

          <p>
            At place, we believe that dining is not just about food, but also
            about the overall experience. Our staff, renowned for their warmth
            and dedication, strives to make every visit an unforgettable event.
          </p>

          <div className={styles.cards}>
            <div className={styles.card}>
              <h3>3</h3>
              <span>Locations</span>
            </div>

            <div className={styles.card}>
              <h3>1995</h3>
              <span>Founded</span>
            </div>

            <div className={styles.card}>
              <h3>65+</h3>
              <span>Staff Members</span>
            </div>

            <div className={styles.card}>
              <h3>100%</h3>
              <span>Satisfied Customers</span>
            </div>
          </div>
        </div>

        <div className={styles.right}>
          <img
            src="https://framerusercontent.com/images/0WqxNXub5yajlzqRQQ2y1HUXg.png?scale-down-to=1024&width=2688&height=3536"
            alt="chef preparing food"
          />
        </div>
      </div>
    </section>
  );
}
