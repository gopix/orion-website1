"use client";

import styles from "./styles/Portfolio.module.css";

const TABS = ["Solutions", "Services", "Industries"]

const CARDS = [
    {
        logo: (
            <div className={styles.zohoLogo}>
                <span className={styles.z}>Z</span>
                <span className={styles.o1}>O</span>
                <span className={styles.h}>H</span>
                <span className={styles.o2}>O</span>
            </div>
        ),
        title: "Zoho",
        subtitle: "Business Systems Implementation",
        description:
            "Empowering businesses with CRM setup, sales and workflow automation, inventory structuring, and custom reporting dashboards — configured precisely for publishing and distribution operations.",
        link: "#",
    },
    {
        logo: (
            <div className={styles.orionLogo}>
                <span className={styles.orionIcon}>◎</span>
                <span className={styles.orionWord}>ORION</span>
            </div>
        ),
        title: "ORION Platform",
        subtitle: "Publishing Intelligence Layer",
        description:
            "A unified platform built for publishers — combining manuscript validation (SUBMIT+), AI-assisted editorial intelligence (EDITOR+), and real-time business dashboards (PUBLISH+) into one connected system.",
        link: "#",
    },
]

export default function Portfolio() {
    return (
        <section className={styles.section}>
            <div className={styles.dotGridLeft} aria-hidden="true" />
            <div className={styles.dotGridRight} aria-hidden="true" />

            <div className={styles.header}>
                <div className={styles.headerLeft}>
                    <h2 className={styles.heading}>
                        Explore Our<br />Technology Stack
                    </h2>
                    <div className={styles.tabs}>
                        {TABS.map((tab, i) => (
                            <button
                                key={tab}
                                className={`${styles.tab} ${i === 0 ? styles.tabActive : ""}`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>
                <div className={styles.headerRight}>
                    <p className={styles.subtext}>
                        ORION operates across two focused verticals — Business Systems Implementation
                        powered by Zoho, and the ORION Publishing Intelligence Platform. Together they
                        form a fully connected, insight-driven foundation for modern publishing businesses.
                    </p>
                </div>
            </div>

            <div className={styles.cards}>
                {CARDS.map((card) => (
                    <div key={card.title} className={styles.card}>
                        <div className={styles.cardLogo}>{card.logo}</div>
                        <div className={styles.cardSubtitle}>{card.subtitle}</div>
                        <p className={styles.cardDesc}>{card.description}</p>
                        <a href={card.link} className={styles.knowMore}>
                            Know More
                            <span className={styles.arrow}>→</span>
                        </a>
                    </div>
                ))}
            </div>
        </section>
    )
}
