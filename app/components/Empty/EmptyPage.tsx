"use client";
import styles from "./Empty.module.css"
import Link from "next/link";
import content from "@/content.json";

const emptyContent = content.emptyPage;

export default function EmptyRoute({
  title = emptyContent.defaultTitle,
  message = emptyContent.defaultMessage,
}: {
  title?: string;
  message?: string;
}) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <div className={styles.icon}>🚧</div>

        <h1 className={styles.title}>{title}</h1>

        <p className={styles.message}>{message}</p>

        <Link href="/" className={styles.btn}>
          {emptyContent.backLink}
        </Link>
      </div>
    </div>
  );
}
