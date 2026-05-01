"use client"
import Image from "next/image"
import styles from "./styles/Info.module.css"
import info_image from "./img/info_image.png"
import info_image2 from "./img/info_image2.png"

// ── Reusable image block ──────────────────────────────────────────
function InfoImage({ src, alt = "image" }) {
    return (
        <div className={styles.imageWrap}>
            <Image src={src} alt={alt} />
        </div>
    )
}

// ── Reusable text card ────────────────────────────────────────────
function InfoCard({ heading, body }) {
    return (
        <div className={styles.card}>
            <h2>{heading}</h2>
            <p>{body}</p>
        </div>
    )
}
export default function Info() {
    return (
        <section className={styles.section}>

            {/* ── Top row: image LEFT + card RIGHT ── */}
            <div className={styles.topRow}>
                <InfoImage
                    src={info_image}
                    alt="Publishing industry technology"
                />
                <InfoCard
                    heading={
                        <>
                            Intelligent Digital Systems<br />
                            for the Publishing Industry
                        </>
                    }
                    body="ORION Bits Systems is a technology company focused on building intelligent digital
                    systems for the publishing industry. We help publishers move from fragmented
                    operations and manual workflows to structured systems, real-time visibility, and
                    better decision-making—without disrupting their existing tools. As an intelligence
                    layer on top of your current ecosystem, we deliver clarity, consistency, and
                    control through precision—not complexity."
                />
            </div>

            {/* ── Second row: card LEFT + image RIGHT (reversed) ── */}
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

            <div className={styles.topRow}>

                <InfoCard
                    heading={
                        <>
                            Zoho-Powered Business Systems
                            <br />
                            for Growing Organizations
                        </>
                    }
                    body="We help businesses implement structured digital systems using Zoho to streamline operations and improve efficiency. From CRM setup and sales automation to inventory management and custom reporting dashboards — ORION configures and connects your tools so your team spends less time on manual work and more time on what matters. Built for publishers, distributors, and content-driven businesses across India."
                />

                <InfoImage
                    src={info_image2}
                    alt="Data-driven publishing workflows"
                />
            </div>

            <div className={styles.philosophy}>
                <div className={styles.philLeft}>
                    <h3>
                        Two Verticals,<br />
                        One Connected <span>SYSTEM</span>
                    </h3>
                </div>
                <div className={styles.philDivider} />
                <div className={styles.philRight}>
                    <p>
                        Our <strong>Business Systems Implementation</strong> builds the operational foundation,
                        while the ORION Platform adds the intelligence layer on top — giving your publishing
                        business complete visibility, from submission to sale.
                    </p>
                </div>
            </div>

        </section>
    )
}

