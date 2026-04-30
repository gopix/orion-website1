"use client"
import Image from "next/image"
import styles from "./styles/Info.module.css"


import info_image from "./img/info_image.png"
export default function Info() {
    return (
        <section className={styles.section}>

            {/* ── Top row: image + text card ── */}
            <div className={styles.topRow}>
                <div className={styles.imageWrap}>

                    <Image src={info_image} alt="image" />
                </div>

                <div className={styles.card}>
                    <h2>Intelligent Digital Systems<br />for the Publishing Industry</h2>
                    <p>
                        ORION Bits Systems is a technology company focused on building intelligent digital
                        systems for the publishing industry. We help publishers move from fragmented
                        operations and manual workflows to structured systems, real-time visibility, and
                        better decision-making—without disrupting their existing tools. As an intelligence
                        layer on top of your current ecosystem, we deliver clarity, consistency, and
                        control through precision—not complexity.
                    </p>
                </div>
            </div>

            {/* ── Philosophy strip ── */}
            <div className={styles.philosophy}>
                <div className={styles.philLeft}>
                    <h3>
                        ORION&apos;s Philosophy<br />
                        is to deliver <span>CLARITY</span>
                    </h3>
                </div>

                <div className={styles.philDivider} />

                <div className={styles.philRight}>
                    <p>
                        ORION&apos;s foundation is built upon <strong>intelligence and precision</strong>,
                        guiding us to provide results-driven publishing systems that propel our clients
                        towards structured, scalable growth.
                    </p>
                </div>
            </div>

        </section>
    )
}

