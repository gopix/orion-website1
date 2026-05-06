"use client";
import styles from "./styles/CaseStudiesContent.module.css";
import Link from "next/link";
const caseStudies = [
    {
        tag: "Publishing",
        title: "AI-Powered Manuscript Evaluation",
        description:
            "Built an AI system to automate manuscript screening based on structure, readability, and content quality.",
        impact: [
            "⏱ Reduced evaluation time by 70%",
            "📈 Improved decision consistency",
            "👩‍💼 Enabled editorial focus",
        ],
    },
    {
        tag: "Manufacturing",
        title: "Intelligent Quality Control System",
        description:
            "Developed ML-based defect detection using production parameters like temperature, pressure, and machine speed.",
        impact: [
            "📉 Reduced defects by 35%",
            "⚙️ Improved process efficiency",
            "📊 Data-driven decisions",
        ],
    },
    {
        tag: "Content Engineering",
        title: "AI-Assisted Copy Editing Engine",
        description:
            "Built a hybrid system combining rule-based editing with LLM-based validation and fact-checking.",
        impact: [
            "✍️ Faster editing cycles",
            "📚 Improved content quality",
            "🔍 Better accuracy & consistency",
        ],
    },
    {
        tag: "Enterprise AI",
        title: "Agentic RAG Knowledge System",
        description:
            "Designed a retrieval-augmented system with intelligent agents for contextual knowledge access.",
        impact: [
            "⚡ Faster information retrieval",
            "🧩 Better knowledge utilization",
            "🤖 Reduced manual dependency",
        ],
    },
    {
        tag: "Workflow Automation",
        title: "Manufacturing Workflow Automation",
        description:
            "Built a digital checklist system with approval loops, rejection workflows, and tracking.",
        impact: [
            "🔄 Streamlined operations",
            "📋 Improved accountability",
            "⏳ Reduced delays",
        ],
    },
];

export default function CaseStudiesContent() {
    return (
        <section className={styles.section}>
            {/* decorative dots */}
            <div className={styles.dotGridLeft} />
            <div className={styles.dotGridRight} />

            {/* HEADER */}
            <div className={styles.header}>
                <div className={styles.headerLeft}>
                    <h2 className={styles.heading}>Real Problems. Real Systems. Real Impact.</h2>
                </div>
                <div className={styles.headerRight}>
                    <p className={styles.subtext}>
                        Explore how Orion designs and delivers intelligent systems that solve
                        complex business challenges across industries.
                    </p>
                </div>
            </div>

            {/* CASE STUDIES GRID */}
            <div className={styles.cards}>
                {caseStudies.map((study, index) => (
                    <div className={styles.card} key={index}>
                        <div className={styles.cardTag}>{study.tag}</div>
                        <h3 className={styles.cardTitle}>{study.title}</h3>
                        <p className={styles.cardDesc}>{study.description}</p>
                        <div className={styles.impactLabel}>Impact:</div>
                        <div className={styles.impactList}>
                            {study.impact.map((item, i) => (
                                <div className={styles.innerBox} key={i}>
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* CTA */}
            <div className={styles.cta}>
                <h2 className={styles.ctaHeading}>Let&apos;s Build Your Next System</h2>
                <p className={styles.ctaText}>
                    Every business has unique challenges. We specialize in transforming
                    those challenges into scalable, intelligent systems.
                </p>
                <Link href="/contact-us">

                    <button className={styles.btn}>Contact Us</button>
                    </Link>
            </div>
        </section>
    );
}
