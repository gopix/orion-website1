"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./styles/Hero.module.css";
import Info from "./Info";
export interface HeroSlide {
    title: string;
    subtitle: string;
    description: string;
}

interface HeroProps {
    slides: HeroSlide[];
    background: any;
    ctaText?: string;
    onCtaClick?: () => void;
    children?: React.ReactNode; // 👈 ADD THIS
}
export default function Hero({
    slides,
    background,
    ctaText = "Learn More",
    onCtaClick,
    children,
}: HeroProps) {
    const [index, setIndex] = useState(0);
    const [animate, setAnimate] = useState(true);
    const [direction, setDirection] = useState<"right" | "left">("right");

    const item = slides[index];

    const triggerAnimation = () => {
        setAnimate(false);
        setTimeout(() => setAnimate(true), 50);
    };

    const next = () => {
        setDirection("right");
        setIndex((prev) => (prev + 1) % slides.length);
        triggerAnimation();
    };

    const prev = () => {
        setDirection("left");
        setIndex((prev) => (prev - 1 + slides.length) % slides.length);
        triggerAnimation();
    };

    return (
        <><div className={styles.main}>
            <Image fill src={background} alt="background" style={{ objectFit: "cover" }} priority />
            <div className={styles.overlay} />

            <button className={styles.arrowLeft} onClick={prev} />
            <button className={styles.arrowRight} onClick={next} />

            <div
                className={`${styles.text} ${animate
                        ? direction === "right"
                            ? styles.slideRight
                            : styles.slideLeft
                        : ""
                    }`}
            >
                <h1>{item.title}</h1>
                <h2>{item.subtitle}</h2>
                <p>{item.description}</p>
                <button className={styles.cta} onClick={onCtaClick}>
                    {ctaText}
                </button>
            </div>
        </div>
            {children}
        </>
    );
}


