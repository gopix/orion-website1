import Navbar from "@/app/components/Navbar/Navbar";
import Footer from "@/app/components/Footers/Footer";
import Hero, { HeroSlide } from "@/app/components/Hero/Hero";

import styles from "./styles/publishing.module.css";
import Info from "@/app/components/Hero/Info";

import bg from "./images/bg.png";



import PublishingContent from "./PublishingContent";

const slides: HeroSlide[] = [
    {
        title: "AI-Powered Systems for Modern Publishing Workflows",
        subtitle: "From Submission to Insights — One Connected System",
        description:
            "Transform fragmented publishing operations into structured, intelligent workflows with real-time visibility and control.",
    },
];
const InfoBlocks= [
  {
    image: bg,
    imageAlt: "Publishing workflow systems",

    heading: (
      <>
        Structured Publishing Workflows<br />
        for Modern Content Operations
      </>
    ),

    body: `Publishing workflows are often fragmented across emails, spreadsheets, and disconnected tools. 
    This leads to poor visibility, delays, and inconsistent editorial processes. 
    ORION transforms these fragmented operations into structured, system-driven workflows—giving teams clarity, 
    control, and real-time visibility across the entire publishing lifecycle.`,

    philosophyTitle: (
      <>
        From Fragmentation<br />
        to <span>STRUCTURE</span>
      </>
    ),

    philosophyText: `We replace manual, disconnected workflows with structured pipelines that improve consistency,
    reduce delays, and create a scalable operational foundation for publishing teams.`,
  },

  {
    image: bg,
    imageAlt: "Publishing platform intelligence",
    reverse: true,

    heading: (
      <>
        End-to-End Publishing Intelligence<br />
        with ORION Platform
      </>
    ),

    body: `ORION SUBMIT+, EDITOR+, and PUBLISH+ work together to manage the entire publishing lifecycle—
    from manuscript submission and validation to editorial workflows and final business insights.
    The platform acts as an intelligence layer on top of your existing tools, ensuring better decisions,
    faster turnaround, and complete operational visibility.`,

    philosophyTitle: (
      <>
        One Connected System,<br />
        Full <span>VISIBILITY</span>
      </>
    ),

    philosophyText: `From submission to distribution, ORION connects every stage of publishing into one
    unified system—enabling data-driven decisions and complete control over operations.`,
  },
];
export default function Page() {
    return (
        <>
            <Navbar />

            <Hero slides={slides} background={bg}>
                <Info blocks={InfoBlocks} />
            </Hero>
            <PublishingContent />
            <Footer />
        </>
    );
}
