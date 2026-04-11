import { useNavigate } from "react-router-dom";
import { blogPosts } from "../../data/blogPosts";
import styles from "./BlogSection.module.css";

export default function BlogSection() {
    const navigate = useNavigate();
    const [featured, ...otherPosts] = blogPosts;

    const formatDate = (date) => {
        return new Intl.DateTimeFormat("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        }).format(date);
    };

    return (
        <section className={styles.blog} aria-label="Blog and Articles">
            <div className={styles.container}>
                <div className={styles.header}>
                    <div>
                        <h2>Our Blog & Articles</h2>
                        <p className={styles.subtitle}>Discover culinary tips, recipes, and restaurant insights</p>
                    </div>
                    <button
                        className={styles.ctaButton}
                        aria-label="View all blog articles"
                        onClick={() => navigate("/blog")}
                    >
                        Read All Articles
                    </button>
                </div>

                <div className={styles.grid}>
                    <article
                        className={`${styles.card} ${styles.featured}`}
                        onClick={() => navigate(`/blog/${featured.id}`)}
                        style={{ cursor: "pointer" }}
                    >
                        <div className={styles.imageWrapper}>
                            <img
                                src={featured.img}
                                alt={featured.title}
                                loading="lazy"
                                className={styles.cardImage}
                            />
                            <div className={styles.overlay} />
                            <span className={styles.categoryBadge} aria-label={`Category: ${featured.category}`}>
                                {featured.category}
                            </span>
                        </div>

                        <div className={styles.content}>
                            <time className={styles.date} dateTime={featured.date.toISOString()}>
                                {formatDate(featured.date)}
                            </time>
                            <h3>{featured.title}</h3>
                            <p className={styles.excerpt}>{featured.excerpt}</p>
                            <button className={styles.readMore}>
                                Read Article
                                <span>→</span>
                            </button>
                        </div>
                    </article>

                    {otherPosts.map((post) => (
                        <article
                            key={post.id}
                            className={styles.card}
                            onClick={() => navigate(`/blog/${post.id}`)}
                            style={{ cursor: "pointer" }}
                        >
                            <div className={styles.imageWrapper}>
                                <img
                                    src={post.img}
                                    alt={post.title}
                                    loading="lazy"
                                    className={styles.cardImage}
                                />
                                <div className={styles.overlay} />
                                <span className={styles.categoryBadge} aria-label={`Category: ${post.category}`}>
                                    {post.category}
                                </span>
                            </div>

                            <div className={styles.content}>
                                <time className={styles.date} dateTime={post.date.toISOString()}>
                                    {formatDate(post.date)}
                                </time>
                                <h3>{post.title}</h3>
                                <p className={styles.excerpt}>{post.excerpt}</p>
                                <button className={styles.readMore}>
                                    Read Article
                                    <span>→</span>
                                </button>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}