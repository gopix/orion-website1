"use client";

import styles from "./styles/Portfolio.module.css";
import Image from "next/image";

export default function Portfolio() {
    return (
        <section className={styles.section}>

            {/* TOP */}
            <div className={styles.header}>
                <div>
                    <h2>Explore Our Diverse Portfolio</h2>
                </div>

                <p>
                    AGSuite offers a comprehensive suite of products and services tailored
                    to meet your business needs. From ERP implementation and customization
                    to CRM integration and support, we provide end-to-end solutions.
                </p>
            </div>

            {/* TABS */}
            <div className={styles.tabs}>
                <button className={styles.active}>Solutions</button>
                <button>Services</button>
                <button>Industries</button>
            </div>
            <div className={styles.cards}>

                {/* CARD 1 */}
                <div className={styles.card}>
                    <h3>ORION Publishing Intelligence Platform</h3>

                    <p>
                        AI-powered systems designed specifically for publishers to improve
                        content quality, editorial workflows, and business visibility through
                        SUBMIT+, EDITOR+, and PUBLISH+.
                    </p>

                    <span>Know More</span>
                </div>

                {/* CARD 2 */}
                <div className={styles.card}>
                    <h3>Business Systems Implementation</h3>

                    <p>
                        We help businesses implement structured CRM, automation, and reporting
                        systems using Zoho to streamline operations and improve efficiency.
                    </p>

                    <span>Know More</span>
                </div>

            </div>
        </section>
    );
}
