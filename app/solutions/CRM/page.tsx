import Navbar from "@/app/components/Navbar/Navbar";
import Footer from "@/app/components/Footers/Footer";
import Hero, { HeroSlide } from "@/app/components/Hero/Hero";
import Info from "@/app/components/Hero/Info";

import CRMContent from "./CRMContent";

import bg from "./images/bg.png";
import image1 from "./images/image1.png";
import image2 from "./images/image2.png";

import content from "@/content.json";

const slides: HeroSlide[] = content.crm.slides;

const images = [image1, image2];

const CRMInfoBlocks = content.crm.infoBlocks.map((block, i) => ({
  ...block,
  image: images[i],
}));

export default function Page() {
  return (
    <>
      <Navbar />

      <Hero slides={slides} background={bg}>
        <Info blocks={CRMInfoBlocks} />
      </Hero>

      <CRMContent />

      <Footer />
    </>
  );
}
