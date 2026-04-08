import styles from "./TopBar.module.css";
import { FaPhone, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

export default function TopBar() {
    return (
        <div className={styles.topbar}>
            <div className={styles.left}>
                <span><FaPhone /> (414) 857 - 0107</span>
                <span><FaEnvelope /> happytummy@restaurant.com</span>
            </div>

            <div className={styles.right}>
                <FaFacebookF />
                <FaTwitter />
                <FaInstagram />
                <FaGithub />
            </div>
        </div>
    );
}