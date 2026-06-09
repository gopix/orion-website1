import type { Metadata } from "next";
import Form from "../components/Form/Form";
import Footer from "../components/Footers/Footer";
import Navbar from "../components/Navbar/Navbar";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with ORION Bits Systems. Let's design and build your next intelligent AI automation system or Zoho-powered operations dashboard.",
  alternates: {
    canonical: "/contact-us",
  },
  keywords: [
    "contact ORION Bits Systems",
    "hire AI developers",
    "Zoho consulting services",
    "publishing technology company contact",
    "AI integration consultants Ghaziabad",
    "business system automation quote"
  ],
};

export default function Contact() {
    return (
        <>
            <Navbar />
            <h1 className="visually-hidden">Contact ORION Bits Systems | AI & Automation Partner</h1>
            <Form />
            <Footer />
        </>
    );
}
