import footerStyles from "./Footer.module.css";
import { FaFacebookF, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";


export function FooterAdvanced() {
    const pages = [
        "Home",
        "About",
        "Menu",
        "Blog",
        "Book A Table",
        "Contact",
        "Delivery"
    ];

    const utilityPages = [
        "Start Here",
        "Styleguide",
        "Password Protected",
        "404 Not Found",
        "Licenses",
        "Changelog",
        "View More"
    ];

    const images = [
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
        "https://images.unsplash.com/photo-1544025162-d76694265947",
        "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe",
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd"
    ];

    return (
        <footer className={footerStyles.footer}>
            <div className={footerStyles.container}>
                {/* Left Section */}
                <div className={footerStyles.left}>
                    <h2>Bistro Bliss</h2>
                    <p>
                        In the new era of technology we look a in the future with certainty and pride to
                        for our company and.
                    </p>
                    <div className={footerStyles.socials}>
                        <div className={footerStyles.socialIcon}>
                            <FaFacebookF />
                        </div>
                        <div className={footerStyles.socialIcon}>
                            <FaTwitter />
                        </div>
                        <div className={footerStyles.socialIcon}>
                            <FaInstagram />
                        </div>
                        <div className={footerStyles.socialIcon}>
                            <FaGithub />
                        </div>
                    </div>
                </div>
                {/* Pages */}
                <div>
                    <h3>Pages</h3>
                    <ul>
                        {pages.map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>
                </div>

                {/* Utility */}
                <div>
                    <h3>Utility Pages</h3>
                    <ul>
                        {utilityPages.map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>
                </div>

                {/* Images */}
                <div>
                    <h3>Follow Us On Instagram</h3>
                    <div className={footerStyles.grid}>
                        {images.map((img, i) => (
                            <img key={i} src={img} alt="food" />
                        ))}
                    </div>
                </div>
            </div>

            <p className={footerStyles.copy}>
                Copyright © 2026 Flame & Grill. All Rights Reserved
            </p>
        </footer>
    )

}