import type { Metadata } from "next";
import Navbar from "@/app/components/Navbar/Navbar";
import Footer from "@/app/components/Footers/Footer";
import Hero, { HeroSlide } from "@/app/components/Hero/Hero";
import Info from "@/app/components/Hero/Info";

import CRMContent from "./CRMContent";

import bg from "./images/bg.png";
import image1 from "./images/image1.png";
import image2 from "./images/image2.png";

import content from "@/content.json";

export const metadata: Metadata = {
  title: "Zoho CRM Systems Implementation",
  description: "Empower your operations with Zoho CRM implementation. Streamline workflows, automate sales pipelines, and configure custom analytics dashboards.",
  alternates: {
    canonical: "/solutions/CRM",
  },
  keywords: [
    "Zoho CRM implementation",
    "Zoho partner India",
    "business system automation",
    "Zoho customization for publishers",
    "sales pipeline tracking",
    "custom reporting dashboards",
    "Zoho inventory management",
    "workflow automation services"
  ],
};

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
      <h1 className="visually-hidden">Zoho CRM Systems & Business Automation by ORION Bits Systems</h1>

      <Hero slides={slides} background={bg}>
        <Info blocks={CRMInfoBlocks} />
      </Hero>

      <CRMContent />

      <Footer />
    </>
  );
}
