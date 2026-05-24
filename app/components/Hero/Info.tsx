"use client";

import Image, { StaticImageData } from "next/image";
import styles from "./styles/Info.module.css";

interface InfoBlock {
  image: StaticImageData;
  imageAlt?: string;
  heading: string[];
  body: string;

  philosophyTitle: string[];
  philosophyHighlight?: string;
  philosophyText: string;

  reverse?: boolean;
}

interface InfoProps {
  blocks: InfoBlock[];
}

function renderHeading(parts: string[]) {
  return parts.map((part, i) => (
    <span key={i}>
      {part}
      {i < parts.length - 1 && <br />}
    </span>
  ));
}

function renderPhilosophyTitle(parts: string[], highlight?: string) {
  return parts.map((part, i) => {
    let rendered: React.ReactNode = part;
    if (highlight && part.includes(highlight)) {
      const idx = part.indexOf(highlight);
      rendered = (
        <>
          {part.slice(0, idx)}
          <span>{highlight}</span>
          {part.slice(idx + highlight.length)}
        </>
      );
    }
    return (
      <span key={i}>
        {rendered}
        {i < parts.length - 1 && <br />}
      </span>
    );
  });
}

function InfoImage({ src, alt = "image" }: { src: StaticImageData; alt?: string }) {
  return (
    <div className={styles.imageWrap}>
      <Image src={src} alt={alt} />
    </div>
  );
}

function InfoCard({ heading, body }: { heading: string[]; body: string }) {
  return (
    <div className={styles.card}>
      <h2>{renderHeading(heading)}</h2>
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
              <h3>{renderPhilosophyTitle(block.philosophyTitle, block.philosophyHighlight)}</h3>
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
