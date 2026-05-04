"use client";

import Link from "next/link";
import styles from "./AIContent.module.css";

export default function AIContent() {
  return (
    <div className={styles.container}>

      {/* WHAT WE BUILD */}
      <section className={styles.section}>
        <h2 className={styles.title}>AI Systems We Build</h2>

        <div className={styles.grid}>
          {[
            "Agentic AI Systems",
            "RAG-Based Platforms",
            "Document Intelligence Systems",
            "AI Workflow Automation",
            "Custom Enterprise Platforms",
            "Data & AI Pipelines",
          ].map((item) => (
            <div key={item} className={styles.card}>{item}</div>
          ))}
        </div>
      </section>

      {/* FLAGSHIP */}
      <section className={styles.cardSection}>
        <h2>Flagship AI Systems</h2>
        <ul className={styles.list}>
          <li><strong>DMAP-AI:</strong> Code transformation using agentic RAG</li>
          <li><strong>AI Editorial Pre-Flight:</strong> Automated manuscript validation</li>
        </ul>
      </section>

      {/* TECH STACK */}
      <section className={styles.cardSection}>
        <h2>Technology & Architecture</h2>
        <ul className={styles.list}>
          <li>LLMs & Agentic AI</li>
          <li>RAG Systems</li>
          <li>Vector Databases</li>
          <li>NLP & ML</li>
          <li>Data Engineering (Kafka, Spark)</li>
          <li>Cloud & DevOps (AWS, Docker)</li>
        </ul>
      </section>

      {/* BENEFITS + WHO */}
      <div className={styles.grid2}>
        
        <section className={styles.cardSection}>
          <h2>What You Gain</h2>
          <ul className={styles.list}>
            <li>Automation of complex workflows</li>
            <li>Reduced manual effort</li>
            <li>Scalable architecture</li>
            <li>Enterprise-grade systems</li>
          </ul>
        </section>

        <section className={styles.cardSection}>
          <h2>Who This Is For</h2>
          <ul className={styles.list}>
            <li>Enterprises adopting AI</li>
            <li>AI-first product teams</li>
            <li>Publishing & fintech</li>
            <li>Data-driven companies</li>
          </ul>
        </section>

      </div>

      {/* WHY */}
      <section className={styles.section}>
        <h2 className={styles.title}>Why ORION</h2>
        <p className={styles.desc}>
          We bridge cutting-edge AI with real-world deployment. Our systems are production-grade,
          scalable, and built for measurable business impact.
        </p>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <h2>Have an AI Use Case to Solve?</h2>
        <Link href="/contact-us" className={styles.btn}>
          Talk to Our Team
        </Link>
      </section>

    </div>
  );
}
