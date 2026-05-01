import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Footers/Hero/Hero";
import Form from "./components/Footers/Footer/form/Form";
import Middle from "./components/Middle/Middle";

export default function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <Middle />
            <Form/>
        </>
    );
}
