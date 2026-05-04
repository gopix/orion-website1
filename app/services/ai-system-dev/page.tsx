import Navbar from "@/app/components/Navbar/Navbar";
import Footer from "@/app/components/Footers/Footer";
import Hero, { HeroSlide } from "@/app/components/Hero/Hero";
import Info from "@/app/components/Hero/Info";

import AIContent from "./AIContent";

import bg from "./images/bg.png";
import image1 from "./images/image1.png";
import image2 from "./images/image2.png";

const slides: HeroSlide[] = [
  {
    title: "AI & Intelligent Systems Development",
    subtitle: "From LLM Platforms to Agentic Workflows",
    description:
      "We design and build enterprise-grade AI systems that automate complex workflows using LLMs, RAG, and multi-agent architectures.",
  },
];

const AIInfoBlocks = [
  {
    image: image1,
    heading: (
      <>
        The Challenge with<br />
        Traditional Software
      </>
    ),
    body: `Traditional applications are not built for complex, knowledge-driven workflows. 
    As businesses scale, fragmented systems and manual processes limit efficiency and decision-making.`,

    philosophyTitle: (
      <>
        From Static Systems<br />
        to <span>INTELLIGENCE</span>
      </>
    ),
    philosophyText: `Modern businesses need systems that understand context, automate decisions,
    and continuously improve with data and feedback.`,
  },

  {
    image: image2,
    reverse: true,
    heading: (
      <>
        AI-Native System Design<br />
        Built for Real Workflows
      </>
    ),
    body: `At ORION, we build AI systems with intelligence at the core—not as an add-on.
    From multi-agent workflows to RAG pipelines, we create systems that think, adapt, and execute.`,

    philosophyTitle: (
      <>
        Not Just AI Features,<br />
        But <span>SYSTEMS</span>
      </>
    ),
    philosophyText: `We combine structured system design with advanced AI capabilities
    to deliver production-grade platforms, not prototypes.`,
  },
];

export default function Page() {
  return (
    <>
      <Navbar />

      <Hero slides={slides} background={bg}>
        <Info blocks={AIInfoBlocks} />
      </Hero>

      <AIContent />

      <Footer />
    </>
  );
}
