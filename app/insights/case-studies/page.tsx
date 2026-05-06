import Navbar from "@/app/components/Navbar/Navbar";
import Footer from "@/app/components/Footers/Footer";
import Hero, { HeroSlide } from "@/app/components/Hero/Hero";
import Info from "@/app/components/Hero/Info";
import bg from "./images/bg.png";
import image1 from "./images/image1.png";
import image2 from "./images/image2.png";
import CaseStudiesContent from "./CaseStudiesContent";
const slides: HeroSlide[] = [
    {
        title: "Real Problems. Real Systems. Real Impact.",
        subtitle: "Intelligent Solutions Across Industries",
        description:
            "Explore how Orion designs and delivers intelligent systems that solve complex business challenges across industries.",
    },
];

const InfoBlocks = [
    {
        image: image1,
        imageAlt: "Orion intelligent systems",
        heading: (
            <>
                Deep Problem Understanding,<br />
                Intelligent System Design
            </>
        ),
        body: `Many businesses struggle with complex operational challenges that off-the-shelf tools can't solve. 
        Processes are fragmented, decisions are slow, and visibility is limited. 
        ORION engineers purpose-built systems that address these challenges head-on — 
        combining AI, automation, and intelligent design to deliver measurable outcomes.`,
        philosophyTitle: (
            <>
                From Challenge<br />
                to <span>SOLUTION</span>
            </>
        ),
        philosophyText: `We don't apply generic tools to unique problems. 
        Every system we build starts with a deep understanding of the challenge — 
        and ends with outcomes that are measurable, scalable, and real.`,
    },
    {
        image: image2,
        imageAlt: "Orion case studies impact",
        reverse: true,
        heading: (
            <>
                Measurable Outcomes Across<br />
                Every Industry We Serve
            </>
        ),
        body: `From publishing to manufacturing, content engineering to enterprise AI — 
        ORION has delivered intelligent systems that reduce inefficiencies, 
        improve decision quality, and create scalable operational foundations. 
        Each engagement is tailored to the specific context, constraints, and goals of the business.`,
        philosophyTitle: (
            <>
                Proven Results,<br />
                Every <span>ENGAGEMENT</span>
            </>
        ),
        philosophyText: `Our case studies reflect a consistent approach: understand deeply, 
        design intelligently, and deliver systems that create lasting operational impact.`,
    },
];

export default function Page() {
    return (
        <>
            <Navbar />
            <Hero slides={slides} background={bg}>
                <Info blocks={InfoBlocks} />
            </Hero>
            <CaseStudiesContent />
            <Footer />
        </>
    );
}


