import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Orion Bits Systems | Accessibility Remediation| AI & Automation For Publishing",
  description: "Transform your publishing workflows with ORION Bits Systems. We provide AI, content engineering, and Zoho-powered business automation to drive growth.",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "AI publishing automation",
    "Zoho CRM implementation",
    "content engineering solutions",
    "digital publishing workflows",
    "publishing automation systems",
    "editorial intelligence layer",
    "Zoho business automation",
    "automated manuscript validation",
    "ORION Bits Systems",
    "Ghaziabad Zoho partner",
    "AI content operations"
  ],
};

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
            <h1 className="visually-hidden">Orion Bits Systems | Accessibility Remediation| AI & Automation For Publishing</h1>
            <Hero slides={slides} background={bg}>
                <Info blocks={InfoBlocks} />
            </Hero>
            <Portfolio />
            <Footer />
        </>);
}
