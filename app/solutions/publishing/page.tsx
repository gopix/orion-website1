import type { Metadata } from "next";
import Navbar from "@/app/components/Navbar/Navbar";
import Footer from "@/app/components/Footers/Footer";
import Hero, { HeroSlide } from "@/app/components/Hero/Hero";

import Info from "@/app/components/Hero/Info";

import bg from "./images/bg.png";
import image1 from "./images/image1.png"
import image2 from "./images/image2.png"

import PublishingContent from "./PublishingContent";
import content from "@/content.json";

export const metadata: Metadata = {
  title: "AI-Powered Publishing Systems | ORION Platform",
  description: "Transform your manuscript intake and editorial operations. Connect ORION SUBMIT+, EDITOR+, and PUBLISH+ for end-to-end publishing intelligence.",
  alternates: {
    canonical: "/solutions/publishing",
  },
  keywords: [
    "AI publishing systems",
    "manuscript validation software",
    "automated editorial workflows",
    "ORION SUBMIT",
    "ORION EDITOR",
    "ORION PUBLISH",
    "publishing intelligence platform",
    "manuscript intake systems",
    "copy editing engine",
    "digital publishing technology"
  ],
};

const slides: HeroSlide[] = content.publishing.slides;

const images = [image1, image2];

const InfoBlocks = content.publishing.infoBlocks.map((block, i) => ({
  ...block,
  image: images[i],
}));

export default function Page() {
  return (
    <>
      <Navbar />
      <h1 className="visually-hidden">Intelligent Publishing Workflow Solutions | ORION Platform</h1>

      <Hero slides={slides} background={bg}>
        <Info blocks={InfoBlocks} />
      </Hero>
      <PublishingContent />
      <Footer />
    </>
  );
}
