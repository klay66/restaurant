
import Hero from '../components/Hero/Hero';
import MenuSection from '../components/Menu/MenuSection';
import AboutSection from '../components/About/AboutSection';
import Testimonials from '../components/Testimonials/Testimonials';
import ServicesSection from './../components/ServicesSection/ServicesSection';
import DeliverySection from '../components/Delivery/DeliverySection';
import BlogSection from '../components/BlogSection/BlogSection';


export default function Home() {
    return (
        <div>
            <Hero />
            <MenuSection />
            <AboutSection />
            <Testimonials />
            <ServicesSection />
            <DeliverySection />
            <Testimonials />
            <BlogSection />
        </div>
    )
}
