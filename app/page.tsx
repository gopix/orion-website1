import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import { HeroSlide } from "./components/Hero/Hero";
import Portfolio from "./components/Middle/Portfolio";
import Footer from "./components/Footers/Footer";
import Info from "./components/Hero/Info";

import bg from "./components/Hero/img/back.jpg"
import info_image from "./components/Hero/img/info_image.png";
import info_image2 from "./components/Hero/img/info_image2.png";

import content from "@/content.json";

const slides: HeroSlide[] = content.home.slides;

const images = [info_image, info_image2];

const InfoBlocks = content.home.infoBlocks.map((block, i) => ({
    ...block,
    image: images[i],
}));

export default function Home() {
    return (
        <>
            <Navbar />
            <Hero slides={slides} background={bg}>
                <Info blocks={InfoBlocks} />
            </Hero>
            <Portfolio />
            <Footer />
        </>);
}
