"use client";
import styles from "./styles/CaseStudiesContent.module.css";
import Link from "next/link";
import content from "@/content.json";

const caseStudiesContent = content.caseStudies.content;

export default function CaseStudiesContent() {
    return (
        <section className={styles.section}>
            {/* decorative dots */}
            <div className={styles.dotGridLeft} />
            <div className={styles.dotGridRight} />

            {/* HEADER */}
            <div className={styles.header}>
                <div className={styles.headerLeft}>
                    <h2 className={styles.heading}>{caseStudiesContent.heading}</h2>
                </div>
                <div className={styles.headerRight}>
                    <p className={styles.subtext}>
                        {caseStudiesContent.subtext}
                    </p>
                </div>
            </div>

            {/* CASE STUDIES GRID */}
            <div className={styles.cards}>
                {caseStudiesContent.studies.map((study, index) => (
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
                <h2 className={styles.ctaHeading}>{caseStudiesContent.ctaHeading}</h2>
                <p className={styles.ctaText}>
                    {caseStudiesContent.ctaText}
                </p>
                <Link href="/contact-us">
                    <button className={styles.btn}>{caseStudiesContent.ctaButton}</button>
                </Link>
            </div>
        </section>
    );
}
