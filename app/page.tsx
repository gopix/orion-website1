import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import { HeroSlide } from "./components/Hero/Hero";
import Portfolio from "./components/Middle/Portfolio";
import Footer from "./components/Footers/Footer";
import Info from "./components/Hero/Info";


import bg from "./components/Hero/img/back.jpg"
import info_image from "./components/Hero/img/info_image.png";
import info_image2 from "./components/Hero/img/info_image2.png";



const slides: HeroSlide[] = [
    {
        title: "ORION Bits Systems Pvt. Ltd.",
        subtitle: "AI, Automation & Content Engineering Solutions",
        description:
            "We help publishers move from fragmented workflows to structured, intelligent systems with real-time visibility and better decision-making.",
    },
    {
        title: "Zoho Business Systems",
        subtitle: "Structured Digital Operations for Growing Businesses",
        description:
            "We implement and customize Zoho CRM, automation, and reporting tools — giving your team organized workflows and a strong foundation for scalable growth.",
    },
    {
        title: "Publishing Intelligence Platform",
        subtitle: "From Submission to Sale — One Connected System",
        description:
            "ORION SUBMIT+, EDITOR+, and PUBLISH+ work together to validate manuscripts, improve editorial quality, and deliver real-time business visibility.",
    },
]

const InfoBlocks = [
    {
        image: info_image,
        imageAlt: "Publishing industry technology",

        heading: (
            <>
                Intelligent Digital Systems<br />
                for the Publishing Industry
            </>
        ),

        body: `ORION Bits Systems is a technology company focused on building intelligent digital systems for the publishing industry. We help publishers move from fragmented operations and manual workflows to structured systems, real-time visibility, and better decision-making—without disrupting their existing tools. As an intelligence layer on top of your current ecosystem, we deliver clarity, consistency, and control through precision—not complexity.`,

        philosophyTitle: (
            <>
                ORION's Philosophy<br />
                is to deliver <span>CLARITY</span>
            </>
        ),

        philosophyText: `ORION's foundation is built upon intelligence and precision, guiding us to provide results-driven publishing systems that propel our clients towards structured, scalable growth.`,
    },

    {
        image: info_image2,
        imageAlt: "Data-driven publishing workflows",
        reverse: true,

        heading: (
            <>
                Zoho-Powered Business Systems<br />
                for Growing Organizations
            </>
        ),

        body: `We help businesses implement structured digital systems using Zoho to streamline operations and improve efficiency. From CRM setup and sales automation to inventory management and custom reporting dashboards — ORION configures and connects your tools so your team spends less time on manual work and more time on what matters. Built for publishers, distributors, and content-driven businesses across India.`,

        philosophyTitle: (
            <>
                Two Verticals,<br />
                One Connected <span>SYSTEM</span>
            </>
        ),

        philosophyText: `Our Business Systems Implementation builds the operational foundation, while the ORION Platform adds the intelligence layer on top — giving your publishing business complete visibility, from submission to sale.`,
    },
];

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
