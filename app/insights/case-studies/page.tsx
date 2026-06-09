import type { Metadata } from "next";
import Navbar from "@/app/components/Navbar/Navbar";
import Footer from "@/app/components/Footers/Footer";
import Hero, { HeroSlide } from "@/app/components/Hero/Hero";
import Info from "@/app/components/Hero/Info";
import bg from "./images/bg.png";
import image1 from "./images/image1.png";
import image2 from "./images/image2.png";
import CaseStudiesContent from "./CaseStudiesContent";

import content from "@/content.json";

export const metadata: Metadata = {
  title: "Case Studies & Success Stories",
  description: "Explore how ORION Bits Systems designs and delivers intelligent systems, AI models, Zoho CRM custom workflows, and automated editorial platforms.",
  alternates: {
    canonical: "/insights/case-studies",
  },
  keywords: [
    "AI automation case studies",
    "publishing automation impact",
    "Zoho implementation success stories",
    "editorial preflight software integration",
    "defect detection ML manufacturing",
    "agentic RAG case study",
    "business workflow automation projects"
  ],
};

const slides: HeroSlide[] = content.caseStudies.slides;

const images = [image1, image2];

const InfoBlocks = content.caseStudies.infoBlocks.map((block, i) => ({
    ...block,
    image: images[i],
}));

export default function Page() {
    return (
        <>
            <Navbar />
            <h1 className="visually-hidden">AI & Automation Case Studies | ORION Bits Systems Impact</h1>
            <Hero slides={slides} background={bg}>
                <Info blocks={InfoBlocks} />
            </Hero>
            <CaseStudiesContent />
            <Footer />
        </>
    );
}
