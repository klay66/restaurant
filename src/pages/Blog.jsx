import { useNavigate, useSearchParams } from "react-router-dom";
import { useState } from "react";
import { blogPosts } from "../data/blogPosts";
import styles from "./Blog.module.css";

export default function Blog() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    const formatDate = (date) => {
        return new Intl.DateTimeFormat("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        }).format(date);
    };

    const categories = ["All", ...new Set(blogPosts.map((post) => post.category))];
    const [selectedCategory, setSelectedCategory] = useState(searchParams.get("category") || "All");

    const filteredPosts =
        selectedCategory === "All"
            ? blogPosts
            : blogPosts.filter((post) => post.category === selectedCategory);

    return (
        <div className={styles.blogPage}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1>Our Blog & Articles</h1>
                    <p>Discover culinary tips, recipes, and restaurant insights from our expert chefs</p>
                </div>
            </section>

            {/* Main Content */}
            <section className={styles.blogsSection}>
                <div className={styles.container}>
                    {/* Filter Categories */}
                    <div className={styles.filterSection}>
                        <div className={styles.filters}>
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    className={`${styles.filterBtn} ${selectedCategory === category ? styles.active : ""
                                        }`}
                                    onClick={() => setSelectedCategory(category)}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Blog Cards Grid */}
                    <div className={styles.grid}>
                        {filteredPosts.map((post) => (
                            <article
                                key={post.id}
                                className={styles.card}
                                onClick={() => navigate(`/blog/${post.id}`)}
                            >
                                <div className={styles.imageWrapper}>
                                    <img
                                        src={post.img}
                                        alt={post.title}
                                        loading="lazy"
                                        className={styles.cardImage}
                                    />
                                    <div className={styles.overlay} />
                                    <span className={styles.categoryBadge}>{post.category}</span>
                                </div>

                                <div className={styles.content}>
                                    <div className={styles.metaInfo}>
                                        <time className={styles.date}>{formatDate(post.date)}</time>
                                        <span className={styles.readTime}>{post.readTime}</span>
                                    </div>
                                    <h3>{post.title}</h3>
                                    <p className={styles.excerpt}>{post.excerpt}</p>

                                    <div className={styles.footer}>
                                        <span className={styles.author}>By {post.author}</span>
                                        <a href={`/blog/${post.id}`} className={styles.readMore}>
                                            Read Article
                                            <span>→</span>
                                        </a>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>

                    {filteredPosts.length === 0 && (
                        <div className={styles.noResults}>
                            <p>No articles found in this category.</p>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
