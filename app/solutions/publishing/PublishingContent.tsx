"use client";

import styles from "./styles/PublishingContent.module.css";

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
                        Intelligent Publishing Systems
                    </h2>
                </div>

                <div className={styles.headerRight}>
                    <p className={styles.subtext}>
                        Transform fragmented workflows into structured, intelligent systems
                        with real-time visibility, editorial control, and scalable operations.
                    </p>
                </div>
            </div>

            {/* CARDS GRID */}
            <div className={styles.cards}>

                {/* PROBLEM */}
                <div className={styles.card}>
                    <div className={styles.cardSubtitle}>THE PROBLEM</div>
                    <p className={styles.cardDesc}>
                        Publishing workflows are fragmented across emails, spreadsheets, and tools.
                        This leads to poor visibility, delays, and inconsistent editorial processes.
                    </p>
                </div>

                {/* SOLUTION */}
                <div className={styles.card}>
                    <div className={styles.cardSubtitle}>THE SOLUTION</div>
                    <p className={styles.cardDesc}>
                        ORION transforms publishing into a system-driven workflow with AI-assisted processes,
                        delivering clarity, consistency, and control.
                    </p>
                </div>

                {/* WORKFLOW */}
                <div className={styles.card}>
                    <div className={styles.cardSubtitle}>WORKFLOW</div>
                    <div className={styles.stack}>
                        <div className={styles.innerBox}>Submission & Intake</div>
                        <div className={styles.innerBox}>Validation & Pre-Editing</div>
                        <div className={styles.innerBox}>Editorial Workflows</div>
                        <div className={styles.innerBox}>Production & Publishing</div>
                        <div className={styles.innerBox}>Insights & Reporting</div>
                    </div>

                </div>

                {/* PLATFORM */}
                <div className={styles.card}>
                    <div className={styles.cardSubtitle}>PLATFORM</div>

                    <div className={styles.innerBox}>
                        <h3>SUBMIT+</h3>
                        <p>Structured manuscript intake and validation.</p>
                    </div>

                    <div className={styles.innerBox}>
                        <h3>EDITOR+</h3>
                        <p>AI-assisted editorial workflows.</p>
                    </div>

                    <div className={styles.innerBox}>
                        <h3>PUBLISH+</h3>
                        <p>Analytics and business visibility.</p>
                    </div>
                </div>

            </div>
        </section >
    );
}
