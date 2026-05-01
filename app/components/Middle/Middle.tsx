"use client";

import styles from "./styles/Middle.module.css";
import Image from "next/image";

import image1 from "./img/image1.png"
import image2 from "./img/image2.png"

import Portfolio from "./Portfolio";
export default function Middle() {
    return (
        <div className={styles.component}>
            <section className={styles.section}>
                {/* LEFT SIDE */}

                <div className={styles.left}>
                    <h1>
                        Streamlining Business Processes with Cloud Solutions
                    </h1>

                    <p>
                        As a leading Oracle NetSuite Solution Provider and Zoho Premium Partner,
                        AGSuite specializes in streamlining and optimizing business processes
                        through cloud-based platforms. With certified expertise across Oracle
                        NetSuite ERP, CRM, and e-commerce, as well as the full Zoho product suite,
                        our consultants deliver end-to-end solutions tailored to each client's
                        unique requirements.
                    </p>

                    <p>
                        By combining technical excellence with deep industry knowledge, we ensure
                        successful deployments that maximize ROI. From initial gap analysis to
                        ongoing support, AGSuite functions as an extension of your team to drive
                        digital transformation.
                    </p>

                    <p>
                        As a premier Pipedrive Solution Provider, AGSuite also offers expert
                        consultative services to optimize sales processes and facilitate seamless
                        CRM migration.
                    </p>
                </div>

                {/* RIGHT SIDE */}
                <div className={styles.right}>
                    {/* background image */}
                    <div className={styles.bg}>
                        <Image
                            src={image2}
                            alt="background"
                            fill
                            className={styles.bgImg}
                        />
                    </div>

                    {/* floating card image */}
                    <div className={styles.card}>
                        <Image
                            src={image1}
                            alt="cloud"
                            fill
                            className={styles.cardImg}
                        />
                    </div>
                </div>
            </section>
            <Portfolio />

        </div>
    );
}

