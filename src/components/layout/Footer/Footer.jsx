import footerStyles from "./Footer.module.css";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { FiPhone, FiMail, FiMapPin, FiClock } from "react-icons/fi";
import logo from "../../../assets/logo.svg";


export default function FooterAdvanced() {
    const mainLinks = [
        { label: "Home", href: "/" },
        { label: "About Us", href: "/about" },
        { label: "Menu", href: "/menu" },
        { label: "Blog", href: "/blog" },
        { label: "Contact", href: "/contact" },
    ];

    const quickLinks = [
        { label: "Book A Table", href: "/booking" },
        { label: "Privacy Policy", href: "#" },
        { label: "Terms & Conditions", href: "#" },
        { label: "FAQs", href: "#" },
    ];

    const socials = [
        { icon: FaFacebookF, label: "Facebook", href: "#" },
        { icon: FaInstagram, label: "Instagram", href: "#" },
        { icon: FaTwitter, label: "Twitter", href: "#" },
        { icon: FaLinkedinIn, label: "LinkedIn", href: "#" },
    ];

    return (
        <footer className={footerStyles.footer}>
            {/* Main Footer Content */}
            <div className={footerStyles.container}>
                {/* Brand Section */}
                <div className={footerStyles.section}>
                    <div className={footerStyles.brandBox}>
                        <img src={logo} alt="Logo" className={footerStyles.logo} />
                        <p className={footerStyles.brandDesc}>
                            Discover the finest culinary experience with fresh ingredients and authentic flavors.
                        </p>
                        <div className={footerStyles.socials}>
                            {socials.map((social, idx) => (
                                <a
                                    key={idx}
                                    href={social.href}
                                    className={footerStyles.socialLink}
                                    title={social.label}
                                    aria-label={social.label}
                                >
                                    <social.icon />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Navigation Links */}
                <div className={footerStyles.section}>
                    <h4 className={footerStyles.sectionTitle}>Quick Links</h4>
                    <ul className={footerStyles.linkList}>
                        {mainLinks.map((link, idx) => (
                            <li key={idx}>
                                <a href={link.href} className={footerStyles.link}>{link.label}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Support Links */}
                <div className={footerStyles.section}>
                    <h4 className={footerStyles.sectionTitle}>Support</h4>
                    <ul className={footerStyles.linkList}>
                        {quickLinks.map((link, idx) => (
                            <li key={idx}>
                                <a href={link.href} className={footerStyles.link}>{link.label}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact & Info */}
                <div className={footerStyles.section}>
                    <h4 className={footerStyles.sectionTitle}>Contact Us</h4>
                    <div className={footerStyles.contactInfo}>
                        <div className={footerStyles.infoItem}>
                            <FiMapPin className={footerStyles.icon} />
                            <span>123 Restaurant Street, Cairo, Egypt</span>
                        </div>
                        <div className={footerStyles.infoItem}>
                            <FiPhone className={footerStyles.icon} />
                            <a href="tel:+201234567890">+20 123 456 7890</a>
                        </div>
                        <div className={footerStyles.infoItem}>
                            <FiMail className={footerStyles.icon} />
                            <a href="mailto:info@restaurant.com">info@restaurant.com</a>
                        </div>
                        <div className={footerStyles.infoItem}>
                            <FiClock className={footerStyles.icon} />
                            <span>10 AM - 11 PM Daily</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Divider */}
            <div className={footerStyles.divider}></div>

            {/* Bottom Footer */}
            <div className={footerStyles.bottomFooter}>
                <p className={footerStyles.copyright}>
                    © 2026 <span>Flame & Grill</span>. Development by Nour Ali.
                </p>
                <div className={footerStyles.footerLinks}>
                    <a href="#" className={footerStyles.footerLink}>Privacy</a>
                    <span className={footerStyles.separator}>•</span>
                    <a href="#" className={footerStyles.footerLink}>Terms</a>
                    <span className={footerStyles.separator}>•</span>
                    <a href="#" className={footerStyles.footerLink}>Sitemap</a>
                </div>
            </div>
        </footer>
    );
}

