"use client"
import { useState } from "react"
import Image from "next/image"
import background from "./img/back.jpg"
import styles from "./styles/Hero.module.css"
import Info from "./Info"

interface HeroSlide {
    title: string
    subtitle: string
    description: string
}

const HERO_CONTENT: HeroSlide[] = [
    {
        title: "ORION Bits Systems Pvt. Ltd.",
        subtitle: "AI, Automation & Content Engineering Solutions",
        description:
            "We help publishers move from fragmented workflows to structured, intelligent systems with real-time visibility and better decision-making.",
    },
    {
        title: "Zoho Business Systems",
        subtitle: "Structured Digital Operations for Growing Businesses",
        description:
            "We implement and customize Zoho CRM, automation, and reporting tools — giving your team organized workflows and a strong foundation for scalable growth.",
    },
    {
        title: "Publishing Intelligence Platform",
        subtitle: "From Submission to Sale — One Connected System",
        description:
            "ORION SUBMIT+, EDITOR+, and PUBLISH+ work together to validate manuscripts, improve editorial quality, and deliver real-time business visibility.",
    },
]

export default function Hero() {
    const [index, setIndex] = useState<number>(0)
    const [animate, setAnimate] = useState<boolean>(true)
    const [direction, setDirection] = useState<"right" | "left">("right")

    const item = HERO_CONTENT[index]

    const triggerAnimation = () => {
        setAnimate(false)
        setTimeout(() => setAnimate(true), 50)
    }

    const arrowRightClick = () => {
        setDirection("right")
        setIndex((prev) => (prev + 1) % HERO_CONTENT.length)
        triggerAnimation()
    }

    const arrowLeftClick = () => {
        setDirection("left")
        setIndex((prev) => (prev - 1 + HERO_CONTENT.length) % HERO_CONTENT.length)
        triggerAnimation()
    }

    const goToSlide = (i: number) => {
        if (i === index) return
        setDirection(i > index ? "right" : "left")
        setIndex(i)
        triggerAnimation()
    }

    return (
        <>
            <div className={styles.main}>
                <Image
                    fill
                    src={background}
                    alt="background"
                    style={{ objectFit: "cover" }}
                    priority
                />
                <div className={styles.overlay} />

                <button className={styles.arrowLeft} onClick={arrowLeftClick} aria-label="Previous slide" />
                <button className={styles.arrowRight} onClick={arrowRightClick} aria-label="Next slide" />

                <div
                    className={`${styles.text} ${
                        animate
                            ? direction === "right"
                                ? styles.slideRight
                                : styles.slideLeft
                            : ""
                    }`}
                >
                    <h1>{item.title}</h1>
                    <h2>{item.subtitle}</h2>
                    <p>{item.description}</p>
                    <button className={styles.cta}>Learn More</button>
                </div>
                {/*

                <div className={styles.dots}>
                    {HERO_CONTENT.map((_, i) => (
                        <button
                            key={i}
                            className={`${styles.dot} ${i === index ? styles.active : ""}`}
                            onClick={() => goToSlide(i)}
                            aria-label={`Go to slide ${i + 1}`}
                        />
                    ))}
                </div>
                */}
            </div>
            <Info />
        </>
    )
}
