import styles from "./AboutTestimonials.module.css";

export default function AboutTestimonials() {
  return (
    <section className={styles.testimonials}>
      <div className={styles.container}>
        <h2>What Our Customers Say</h2>

        <div className={styles.cards}>
          <div className={styles.card}>
            <h3>“The best restaurant”</h3>
            <p>
              Last night, we dined at place and were simply blown away. From
              the moment we stepped in, we were enveloped in an inviting
              atmosphere and greeted with warm smiles.
            </p>

            <div className={styles.user}>
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="customer"
              />
              <div>
                <h4>Sophire Robson</h4>
                <span>Los Angeles, CA</span>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <h3>“Simply delicious”</h3>
            <p>
              Place exceeded my expectations on all fronts. The ambiance was
              cozy and relaxed, making it a perfect venue for our anniversary
              dinner. Each dish was prepared and beautifully presented.
            </p>

            <div className={styles.user}>
              <img
                src="https://randomuser.me/api/portraits/men/44.jpg"
                alt="customer"
              />
              <div>
                <h4>Jack Doe</h4>
                <span>Los Angeles, CA</span>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <h3>“One of a kind restaurant”</h3>
            <p>
              The culinary experience at place is first to none. The atmosphere
              is vibrant, the food – nothing short of extraordinary. The food
              was the highlight of our evening. Highly recommended.
            </p>

            <div className={styles.user}>
              <img
                src="https://randomuser.me/api/portraits/men/68.jpg"
                alt="customer"
              />
              <div>
                <h4>Sophire Robson</h4>
                <span>Los Angeles, CA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}