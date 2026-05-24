"use client";

import styles from "./styles/Portfolio.module.css";
import content from "@/content.json";

const portfolioContent = content.portfolio;

const CARDS = portfolioContent.cards;

export default function Portfolio() {
    return (
        <section className={styles.section}>
            <div className={styles.dotGridLeft} aria-hidden="true" />
            <div className={styles.dotGridRight} aria-hidden="true" />

            <div className={styles.header}>
                <div className={styles.headerLeft}>
                    <h2 className={styles.heading}>
                        {portfolioContent.heading.split(" ").slice(0, 2).join(" ")}<br />
                        {portfolioContent.heading.split(" ").slice(2).join(" ")}
                    </h2>
                    <div className={styles.tabs}>
                        {portfolioContent.tabs.map((tab, i) => (
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
                        {portfolioContent.subtext}
                    </p>
                </div>
            </div>

            <div className={styles.cards}>
                {CARDS.map((card) => (
                    <div key={card.title} className={styles.card}>
                        <div className={styles.cardLogo}>
                            {card.title === "Zoho" ? (
                                <div className={styles.zohoLogo}>
                                    <span className={styles.z}>Z</span>
                                    <span className={styles.o1}>O</span>
                                    <span className={styles.h}>H</span>
                                    <span className={styles.o2}>O</span>
                                </div>
                            ) : (
                                <div className={styles.orionLogo}>
                                    <span className={styles.orionIcon}>◎</span>
                                    <span className={styles.orionWord}>ORION</span>
                                </div>
                            )}
                        </div>
                        <div className={styles.cardSubtitle}>{card.subtitle}</div>
                        <p className={styles.cardDesc}>{card.description}</p>
                        <a href={card.link} className={styles.knowMore}>
                            {portfolioContent.knowMoreLabel}
                            <span className={styles.arrow}>→</span>
                        </a>
                    </div>
                ))}
            </div>
        </section>
    )
}
