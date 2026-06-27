"use client";

import Link from "next/link";
import styles from "./remediationContent.module.css";
import content from "@/content.json";

const aiContent = content.remediation.content;

export default function RemediationContent() {
  return (
    <div className={styles.container}>

      {/* WHAT WE BUILD */}
      <section className={styles.section}>
        <h2 className={styles.title}>{aiContent.whatWeBuildTitle}</h2>

        <div className={styles.grid}>
          {aiContent.whatWeBuildItems.map((item) => (
            <div key={item} className={styles.card}>{item}</div>
          ))}
        </div>
      </section>

      {/* FLAGSHIP */}
      <section className={styles.cardSection}>
        <h2>{aiContent.flagshipTitle}</h2>
        <ul className={styles.list}>
          {aiContent.flagshipItems.map((item) => (
            <li key={item.name}><strong>{item.name}</strong> {item.description}</li>
          ))}
        </ul>
      </section>

      {/* TECH STACK */}
      <section className={styles.cardSection}>
        <h2>{aiContent.techTitle}</h2>
        <ul className={styles.list}>
          {aiContent.techItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      {/* BENEFITS + WHO */}
      <div className={styles.grid2}>

        <section className={styles.cardSection}>
          <h2>{aiContent.benefitsTitle}</h2>
          <ul className={styles.list}>
            {aiContent.benefitsItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className={styles.cardSection}>
          <h2>{aiContent.whoTitle}</h2>
          <ul className={styles.list}>
            {aiContent.whoItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

      </div>

      {/* WHY */}
      <section className={styles.section}>
        <h2 className={styles.title}>{aiContent.whyTitle}</h2>
        <p className={styles.desc}>
          {aiContent.whyText}
        </p>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <h2>{aiContent.ctaHeading}</h2>
        <Link href="/contact-us" className={styles.btn}>
          {aiContent.ctaButton}
        </Link>
      </section>

    </div>
  );
}
