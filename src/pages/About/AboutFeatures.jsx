import styles from "./AboutFeatures.module.css";
import { LuBookOpen } from "react-icons/lu";
import { MdOutlineReceiptLong } from "react-icons/md";
import { LuTimer } from "react-icons/lu";

export default function AboutFeatures() {
  return (
    <section className={styles.features}>
      <div className={styles.container}>
        <div className={styles.item}>
          <div className={styles.icon}>
            <LuBookOpen />
          </div>
          <div>
            <h3>Multi Cuisine</h3>
            <p>
              In the new era of technology we look in the future with certainty
              life.
            </p>
          </div>
        </div>

        <div className={styles.item}>
          <div className={styles.icon}>
            <MdOutlineReceiptLong />
          </div>
          <div>
            <h3>Easy To Order</h3>
            <p>
              In the new era of technology we look in the future with certainty
              life.
            </p>
          </div>
        </div>

        <div className={styles.item}>
          <div className={styles.icon}>
            <LuTimer />
          </div>
          <div>
            <h3>Fast Delivery</h3>
            <p>
              In the new era of technology we look in the future with certainty
              life.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}