import styles from "./BlogSection.module.css";

export default function BlogSection() {
    const posts = [
        {
            title: "The secret tips & tricks to prepare a perfect burger & pizza",
            date: "January 3, 2023",
            img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
            big: true,
        },
        {
            title: "How to prepare the perfect french fries in an air fryer",
            date: "January 3, 2023",
            img: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5",
        },
        {
            title: "How to prepare delicious chicken tenders",
            date: "January 3, 2023",
            img: "https://images.unsplash.com/photo-1606755962773-0d0b8a7c0b9d",
        },
        {
            title: "7 delicious cheesecake recipes you can prepare",
            date: "January 3, 2023",
            img: "https://images.unsplash.com/photo-1551024601-bec78aea704b",
        },
        {
            title: "5 great pizza restaurants you should visit this city",
            date: "January 3, 2023",
            img: "https://images.unsplash.com/photo-1594007654729-407eedc4be65",
        },
    ];

    const [featured, ...otherPosts] = posts;

    return (
        <section className={styles.blog}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2>Our Blog & Articles</h2>
                    <button>Read All Articles</button>
                </div>

                <div className={styles.grid}>
                    <div className={`${styles.card} ${styles.featured}`}>
                        <img src={featured.img} alt="blog" />

                        <div className={styles.content}>
                            <span>{featured.date}</span>
                            <h3>{featured.title}</h3>
                        </div>
                    </div>

                    {otherPosts.map((post, i) => (
                        <div key={i} className={styles.card}>
                            <img src={post.img} alt="blog" />

                            <div className={styles.content}>
                                <span>{post.date}</span>
                                <h3>{post.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}