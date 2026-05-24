"use client";

import styles from "./CRMContent.module.css";
import Link from "next/link";
import content from "@/content.json";

const crmContent = content.crm.content;

export default function CRMContent() {
    return (
        <div className={styles.container}>

            {/* WHAT WE BUILD */}
            <section className={styles.section}>
                <h2 className={styles.title}>{crmContent.whatWeBuildTitle}</h2>

                <div className={styles.pillGrid}>
                    {crmContent.whatWeBuildItems.map((item) => (
                        <div key={item} className={styles.pill}>{item}</div>
                    ))}
                </div>
            </section>

            {/* CAPABILITIES */}
            <section className={styles.cardSection}>
                <h2>{crmContent.capabilitiesTitle}</h2>
                <ul className={styles.list}>
                    {crmContent.capabilitiesItems.map((item) => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
            </section>

            {/* BENEFITS + WHO */}
            <div className={styles.grid2}>

                <section className={styles.cardSection}>
                    <h2>{crmContent.benefitsTitle}</h2>
                    <ul className={styles.list}>
                        {crmContent.benefitsItems.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </section>

                <section className={styles.cardSection}>
                    <h2>{crmContent.whoTitle}</h2>
                    <ul className={styles.list}>
                        {crmContent.whoItems.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </section>

            </div>

            {/* WHY */}
            <section className={styles.section}>
                <h2 className={styles.title}>{crmContent.whyTitle}</h2>
                <p className={styles.desc}>
                    {crmContent.whyText}
                </p>
            </section>

            {/* CTA */}
            <section className={styles.cta}>
                <h2>{crmContent.ctaHeading}</h2>

                <Link href="/contact-us">
                    <button className={styles.btn}>{crmContent.ctaButton}</button>
                </Link>
            </section>

        </div>);
}
