"use client";

import styles from "./styles/PublishingContent.module.css";
import content from "@/content.json";

const pubContent = content.publishing.content;

export default function PublishingContent() {
    return (
        <section className={styles.section}>

            {/* decorative dots */}
            <div className={styles.dotGridLeft} />
            <div className={styles.dotGridRight} />

            {/* HEADER */}
            <div className={styles.header}>
                <div className={styles.headerLeft}>
                    <h2 className={styles.heading}>
                        {pubContent.heading}
                    </h2>
                </div>

                <div className={styles.headerRight}>
                    <p className={styles.subtext}>
                        {pubContent.subtext}
                    </p>
                </div>
            </div>

            {/* CARDS GRID */}
            <div className={styles.cards}>

                {/* PROBLEM */}
                <div className={styles.card}>
                    <div className={styles.cardSubtitle}>{pubContent.problem.label}</div>
                    <p className={styles.cardDesc}>
                        {pubContent.problem.text}
                    </p>
                </div>

                {/* SOLUTION */}
                <div className={styles.card}>
                    <div className={styles.cardSubtitle}>{pubContent.solution.label}</div>
                    <p className={styles.cardDesc}>
                        {pubContent.solution.text}
                    </p>

                    {/* WORKFLOW */}
                </div>
                <div className={styles.card}>
                    <div className={styles.cardSubtitle}>{pubContent.workflow.label}</div>
                    <div className={styles.stack}>
                        {pubContent.workflow.steps.map((step) => (
                            <div key={step} className={styles.innerBox}>{step}</div>
                        ))}
                    </div>

                </div>

                {/* PLATFORM */}
                <div className={styles.card}>
                    <div className={styles.cardSubtitle}>{pubContent.platform.label}</div>

                    {pubContent.platform.items.map((item) => (
                        <div key={item.name} className={styles.innerBox}>
                            <h3>{item.name}</h3>
                            <p>{item.description}</p>
                        </div>
                    ))}
                </div>

            </div>
        </section >
    );
}
