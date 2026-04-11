import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section className={styles.contact}>
      <div className={styles.top}>
        <h1>Contact Us</h1>
        <p>
          We consider all the drivers of change gives you the components you
          need to change to create a truly happens.
        </p>
      </div>

      <div className={styles.formCard}>
        <form className={styles.form}>
          <div className={styles.row}>
            <div className={styles.inputGroup}>
              <label>Name*</label>
              <input type="text" />
            </div>

            <div className={styles.inputGroup}>
              <label>Email*</label>
              <input type="email" />
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label>Subject*</label>
            <input type="text" />
          </div>

          <div className={styles.inputGroup}>
            <label>Message*</label>
            <textarea rows="4"></textarea>
          </div>

          <button type="submit" className={styles.button}>
            Send Message
          </button>
        </form>
      </div>

      <div className={styles.info}>
        <div>
          <h3>Call Us:</h3>
          <p className={styles.highlight}>+1-234-567-8900</p>
        </div>

        <div>
          <h3>Hours:</h3>
          <p>Mon-Fri: 11am - 8pm</p>
          <p>Sat, Sun: 9am - 10pm</p>
        </div>

        <div>
          <h3>Our Location:</h3>
          <p>123 Bridge Street</p>
          <p>Nowhere Land, LA</p>
          <p>12345 United States</p>
        </div>
      </div>
    </section>
  );
}