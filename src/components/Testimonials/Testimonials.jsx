import { Container, Row, Col, Card } from "react-bootstrap";
import styles from "./Testimonials.module.css";

export default function Testimonials() {
    const data = [
        {
            title: "The best restaurant",
            text: "Last night, we dined at place and were simply blown away. From the moment we stepped in, we were enveloped in an inviting atmosphere.",
            name: "Sophie Robson",
            location: "Los Angeles, CA",
            img: "https://randomuser.me/api/portraits/women/44.jpg",
        },
        {
            title: "Simply delicious",
            text: "Place exceeded my expectations on all fronts. The ambiance was cozy and relaxed, making it a perfect venue.",
            name: "Matt Cannon",
            location: "San Diego, CA",
            img: "https://randomuser.me/api/portraits/men/32.jpg",
        },
        {
            title: "One of a kind restaurant",
            text: "The culinary experience at place is first to none. The food was the highlight of our evening.",
            name: "Andy Smith",
            location: "San Francisco, CA",
            img: "https://randomuser.me/api/portraits/men/65.jpg",
        },
    ];

    return (
        <section className={styles.section}>
            <Container>
                <h2 className="text-center mb-5">What Our Customers Say</h2>

                <Row className="d-flex">
                    {data.map((item, i) => (
                        <Col md={4} key={i} className="mb-4 d-flex">
                            <Card className={`${styles.card} flex-fill`}>
                                <Card.Body>
                                    <h5 className={styles.title}>“{item.title}”</h5>
                                    <p className={styles.text}>{item.text}</p>

                                    <div className={styles.user}>
                                        <img src={item.img} alt="user" />
                                        <div>
                                            <h6>{item.name}</h6>
                                            <span>{item.location}</span>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
}