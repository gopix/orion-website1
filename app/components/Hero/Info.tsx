"use client";

import Image, { StaticImageData } from "next/image";
import styles from "./styles/Info.module.css";

interface InfoBlock {
  image: StaticImageData;
  imageAlt?: string;
  heading: React.ReactNode;
  body: string;

  philosophyTitle: React.ReactNode;
  philosophyText: string;

  reverse?: boolean; // image right / left
}

interface InfoProps {
  blocks: InfoBlock[];
}

function InfoImage({ src, alt = "image" }: { src: StaticImageData; alt?: string }) {
  return (
    <div className={styles.imageWrap}>
      <Image src={src} alt={alt} />
    </div>
  );
}

function InfoCard({ heading, body }: { heading: React.ReactNode; body: string }) {
  return (
    <div className={styles.card}>
      <h2>{heading}</h2>
      <p>{body}</p>
    </div>
  );
}

export default function Info({ blocks }: InfoProps) {
  return (
    <section className={styles.section}>
      {blocks.map((block, i) => (
        <div className={styles.block} key={i}>
          
          <div className={styles.topRow}>
            {!block.reverse && (
              <InfoImage src={block.image} alt={block.imageAlt} />
            )}

            <InfoCard heading={block.heading} body={block.body} />

            {block.reverse && (
              <InfoImage src={block.image} alt={block.imageAlt} />
            )}
          </div>

          <div className={styles.philosophy}>
            <div className={styles.philLeft}>
              <h3>{block.philosophyTitle}</h3>
            </div>

            <div className={styles.philDivider} />

            <div className={styles.philRight}>
              <p>{block.philosophyText}</p>
            </div>
          </div>

        </div>
      ))}
    </section>
  );
}
