import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Portfolio from "./components/Middle/Portfolio";
import Footer from "./components/Footers/Footer";

export default function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <Portfolio />
            <Footer />
        </>);
}
