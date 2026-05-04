"use client";

import styles from "./CRMContent.module.css";
import Link from "next/link";
export default function CRMContent() {
    return (
        <div className={styles.container}>

            {/* WHAT WE BUILD */}
            <section className={styles.section}>
                <h2 className={styles.title}>What We Build</h2>

                <div className={styles.pillGrid}>
                    {[
                        "Lead Management System",
                        "Sales Pipeline Tracking",
                        "Workflow Automation",
                        "Task & Follow-up Systems",
                        "Reporting & Dashboards",
                        "System Integrations",
                    ].map((item) => (
                        <div key={item} className={styles.pill}>{item}</div>
                    ))}
                </div>
            </section>

            {/* CAPABILITIES */}
            <section className={styles.cardSection}>
                <h2>Core Capabilities</h2>
                <ul className={styles.list}>
                    <li>Centralized customer data</li>
                    <li>Automated lead assignment</li>
                    <li>Pipeline visibility</li>
                    <li>Sales performance tracking</li>
                    <li>Custom dashboards</li>
                    <li>Workflow triggers and alerts</li>
                </ul>
            </section>

            {/* BENEFITS + WHO */}
            <div className={styles.grid2}>

                <section className={styles.cardSection}>
                    <h2>What You Gain</h2>
                    <ul className={styles.list}>
                        <li>Clear visibility into sales pipeline</li>
                        <li>Better lead conversion</li>
                        <li>Reduced manual work</li>
                        <li>Improved accountability</li>
                        <li>Faster decision-making</li>
                    </ul>
                </section>

                <section className={styles.cardSection}>
                    <h2>Who This Is For</h2>
                    <ul className={styles.list}>
                        <li>SMEs & growing businesses</li>
                        <li>Sales-driven teams</li>
                        <li>Distributors & service companies</li>
                        <li>Startups scaling operations</li>
                    </ul>
                </section>

            </div>

            {/* WHY */}
            <section className={styles.section}>
                <h2 className={styles.title}>Why ORION</h2>
                <p className={styles.desc}>
                    We focus on structured implementation—not just tool setup.
                    Our systems are designed for real adoption, ensuring your team actually uses the CRM and gets measurable value.
                </p>
            </section>

            {/* CTA */}
            <section className={styles.cta}>
                <h2>Ready to Build a CRM That Works?</h2>


                <Link href="/contact-us">
                    <button className={styles.btn}>Talk to Our Team</button>
                </Link>
            </section>

        </div>);
}
