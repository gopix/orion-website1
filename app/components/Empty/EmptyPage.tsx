"use client";
import styles from "./Empty.module.css"
import Link from "next/link";

export default function EmptyRoute({
  title = "Page Not Available",
  message = "This section is under construction or doesn’t exist yet.",
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
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
