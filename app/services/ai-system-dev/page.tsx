import type { Metadata } from "next";
import Navbar from "@/app/components/Navbar/Navbar";
import Footer from "@/app/components/Footers/Footer";
import Hero, { HeroSlide } from "@/app/components/Hero/Hero";
import Info from "@/app/components/Hero/Info";

import AIContent from "./AIContent";

import bg from "./images/bg.png";
import image1 from "./images/image1.png";
import image2 from "./images/image2.png";

import content from "@/content.json";

export const metadata: Metadata = {
  title: "AI & Intelligent Systems Development",
  description: "Custom AI-native system development. We design agentic workflows, custom RAG platforms, and document intelligence systems using advanced LLM pipelines.",
  alternates: {
    canonical: "/services/ai-system-dev",
  },
  keywords: [
    "AI systems development",
    "agentic AI workflows",
    "retrieval augmented generation RAG",
    "document intelligence systems",
    "enterprise AI platforms",
    "LLM orchestration",
    "custom machine learning models",
    "AI software engineering",
    "data pipelines development"
  ],
};

const slides: HeroSlide[] = content.aiSystemsDev.slides;

const images = [image1, image2];

const AIInfoBlocks = content.aiSystemsDev.infoBlocks.map((block, i) => ({
  ...block,
  image: images[i],
}));

export default function Page() {
  return (
    <>
      <Navbar />
      <h1 className="visually-hidden">AI & Intelligent Systems Development Services | ORION Bits</h1>

      <Hero slides={slides} background={bg}>
        <Info blocks={AIInfoBlocks} />
      </Hero>

      <AIContent />

      <Footer />
    </>
  );
}
