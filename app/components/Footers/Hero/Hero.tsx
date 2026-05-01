"use client"
import { useState, useEffect } from "react"
import Image from "next/image"

import background from "./img/back.png"
import styles from "./styles/Hero.module.css"


import Info from "./Info"
const HERO_CONTENT = [
    {
        title: "ORION Bits Systems Pvt. Ltd.",
        subtitle: "Intelligent Digital Systems for the Publishing Industry",
        description:
            "We help publishers move from fragmented workflows to structured, intelligent systems with real-time visibility and better decision-making.",
    },
    {
        title: "3 ORION Bits Systems Pvt. Ltd.",
        subtitle: "Intelligent Digital Systems for the Publishing Industry",
        description:
            "We help publishers move from fragmented workflows to structured, intelligent systems with real-time visibility and better decision-making.",
    },
    {
        title: " 2 ORION Bits Systems Pvt. Ltd.",
        subtitle: "Intelligent Digital Systems for the Publishing Industry",
        description:
            "We help publishers move from fragmented workflows to structured, intelligent systems with real-time visibility and better decision-making.",
    }
];


export default function Hero() {
    const [index, setIndex] = useState(0);
    const item = HERO_CONTENT[index];
    const arrowRightClick = () => {
        setIndex((prev) => (prev + 1) % HERO_CONTENT.length);
    };

    const arrowLeftClick = () => {
        setIndex((prev) =>
            (prev - 1 + HERO_CONTENT.length) % HERO_CONTENT.length
        );
    };
    return (
        <>

            <div className={styles.main}>
                {/* Background */}
                <Image
                    fill
                    src={background}
                    alt="background"
                    style={{ objectFit: "cover" }}
                    priority
                />
                {/* Dark overlay */}

                <div className={styles.hero_content}>

                    {/* Left Arrow */}
                    <button className={styles.arrowLeft} onClick={arrowLeftClick}  ></button>

                    {/* Right Arrow */}
                    <button className={styles.arrowRight} onClick={arrowRightClick}  ></button>

                    {/* Content */}
                    <div className={styles.text}>

                        <h1>{item.title}</h1>
                        <h2>{item.subtitle}</h2>
                        <p>{item.description}</p>

                        <button className={styles.cta}>Learn More</button>
                    </div>
                </div>
            </div>

            <Info />
        </>
    );
}
