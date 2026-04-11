import { useParams, useNavigate } from "react-router-dom";
import { blogPosts } from "../data/blogPosts";
import styles from "./BlogDetails.module.css";

export default function BlogDetails() {
    const { id } = useParams();
    const navigate = useNavigate();

    const post = blogPosts.find((post) => post.id === id);

    if (!post) {
        return (
            <div className={styles.notFound}>
                <div className={styles.container}>
                    <h1>Article Not Found</h1>
                    <p>Sorry, the article you're looking for doesn't exist.</p>
                    <button onClick={() => navigate("/blog")} className={styles.backBtn}>
                        ← Back to Blog
                    </button>
                </div>
            </div>
        );
    }

    const formatDate = (date) => {
        return new Intl.DateTimeFormat("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        }).format(date);
    };

    // Get related articles (same category, but different post)
    const relatedArticles = blogPosts
        .filter((p) => p.category === post.category && p.id !== post.id)
        .slice(0, 3);

    return (
        <div className={styles.blogDetails}>
            {/* Back Button */}
            <button onClick={() => navigate("/blog")} className={styles.backBtn}>
                ← Back to Blog
            </button>

            {/* Featured Image */}
            <div className={styles.hero}>
                <img src={post.img} alt={post.title} className={styles.heroImage} />
            </div>

            {/* Main Content */}
            <article className={styles.container}>
                <div className={styles.mainContent}>
                    {/* Header */}
                    <div className={styles.header}>
                        <div className={styles.badges}>
                            <span className={styles.categoryBadge}>{post.category}</span>
                            <span className={styles.readTime}>{post.readTime}</span>
                        </div>
                        <h1>{post.title}</h1>

                        <div className={styles.meta}>
                            <div className={styles.author}>
                                <div className={styles.authorAvatar}>{post.author.charAt(0)}</div>
                                <div>
                                    <p className={styles.authorName}>{post.author}</p>
                                    <time className={styles.date}>{formatDate(post.date)}</time>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Article Content */}
                    <div
                        className={styles.content}
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />

                    {/* Share Section */}
                    <div className={styles.shareSection}>
                        <p>Share this article:</p>
                        <div className={styles.shareButtons}>
                            <a href="https://twitter.com" className={styles.shareBtn} target="_blank" rel="noopener noreferrer">
                                Twitter
                            </a>
                            <a href="https://facebook.com" className={styles.shareBtn} target="_blank" rel="noopener noreferrer">
                                Facebook
                            </a>
                            <a href="https://linkedin.com" className={styles.shareBtn} target="_blank" rel="noopener noreferrer">
                                LinkedIn
                            </a>
                        </div>
                    </div>
                </div>

                {/* Sidebar */}
                <aside className={styles.sidebar}>
                    {/* Related Articles */}
                    {relatedArticles.length > 0 && (
                        <div className={styles.relatedSection}>
                            <h3>Related Articles</h3>
                            <div className={styles.relatedList}>
                                {relatedArticles.map((article) => (
                                    <a
                                        key={article.id}
                                        href={`/blog/${article.id}`}
                                        className={styles.relatedItem}
                                    >
                                        <img src={article.img} alt={article.title} />
                                        <h4>{article.title}</h4>
                                    </a>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Categories */}
                    <div className={styles.categoriesSection}>
                        <h3>Categories</h3>
                        <ul className={styles.categoriesList}>
                            {[...new Set(blogPosts.map((p) => p.category))].map((category) => (
                                <li key={category}>
                                    <a href={`/blog?category=${category}`}>{category}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </aside>
            </article>

            {/* Navigation */}
            <section className={styles.navigation}>
                <div className={styles.container}>
                    {(() => {
                        const currentIndex = blogPosts.findIndex((p) => p.id === id);
                        const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
                        const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

                        return (
                            <div className={styles.navLinks}>
                                {prevPost ? (
                                    <a href={`/blog/${prevPost.id}`} className={styles.prevLink}>
                                        <span>← Previous</span>
                                        <p>{prevPost.title}</p>
                                    </a>
                                ) : (
                                    <div />
                                )}

                                {nextPost ? (
                                    <a href={`/blog/${nextPost.id}`} className={styles.nextLink}>
                                        <span>Next →</span>
                                        <p>{nextPost.title}</p>
                                    </a>
                                ) : (
                                    <div />
                                )}
                            </div>
                        );
                    })()}
                </div>
            </section>
        </div>
    );
}
