import heroStyles from "./Hero.module.css";

export function Hero() {
    return (
        <section className={heroStyles.hero}>
            <h1>Delicious Grilled Food</h1>
            <button>Order Now</button>
        </section>
    );
}