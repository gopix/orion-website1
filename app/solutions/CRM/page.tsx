import Navbar from "@/app/components/Navbar/Navbar";
import Footer from "@/app/components/Footers/Footer";
import Hero, { HeroSlide } from "@/app/components/Hero/Hero";
import Info from "@/app/components/Hero/Info";

import CRMContent from "./CRMContent";

import bg from "./images/bg.png";
import image1 from "./images/image1.png";
import image2 from "./images/image2.png";

const slides: HeroSlide[] = [
  {
    title: "CRM Systems That Actually Work for Your Business",
    subtitle: "Structured Systems. Real Adoption. Measurable Results.",
    description:
      "Move beyond spreadsheets and disconnected tools. Build a structured CRM system with full visibility into your sales and operations.",
  },
];

const CRMInfoBlocks = [
  {
    image: image1,
    heading: (
      <>
        Why Most CRM<br />
        Implementations Fail
      </>
    ),
    body: `Many businesses invest in CRM tools but fail to see results. Data is incomplete, 
    teams don’t adopt the system, and workflows remain manual. The issue isn’t the tool—
    it’s the lack of structured implementation aligned with real business processes.`,

    philosophyTitle: (
      <>
        The Problem Isn’t Tools,<br />
        It’s <span>STRUCTURE</span>
      </>
    ),
    philosophyText: `Without clear workflows and adoption strategy, even the best CRM tools fail 
    to deliver value. Structure is what turns tools into systems.`,
  },

  {
    image: image2,
    reverse: true,
    heading: (
      <>
        A Structured Approach<br />
        to CRM Implementation
      </>
    ),
    body: `At ORION, we don’t just configure CRM—we design complete business systems. 
    We map your sales processes, define workflows, and implement automation aligned 
    with how your team actually works.`,

    philosophyTitle: (
      <>
        Systems That Drive<br />
        <span>ADOPTION</span>
      </>
    ),
    philosophyText: `Our approach ensures your CRM is actually used by your team—leading 
    to better data, clearer insights, and measurable business outcomes.`,
  },
];

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
