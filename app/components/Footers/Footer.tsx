"use client";

import styles from "./Footer.module.css";
import Image from "next/image";
import logo from "../../logo.jpeg"

import facebook from "./icon/facebook.png"
import twitter from "./icon/twitter.png"
import linkedin from "./icon/linkedin.png"

import content from "@/content.json";

const footerContent = content.footer;

export default function Footer() {

    const iconSize = 30;
    return (
        <footer className={styles.footer}>

            <div className={styles.container}>

                {/* LEFT */}
                <div className={styles.left}>
                    <Image src={logo} alt="ORION Bits Systems - AI & Content Engineering Solutions Logo" width={160} height={60} />

                    <p className={styles.tagline}>
                        {footerContent.tagline}
                    </p>
                    <p className={styles.address}>
                        {footerContent.address.map((line, i) => (
                            <span key={i}>{line}{i < footerContent.address.length - 1 && <br />}</span>
                        ))}
                    </p>

                    <div className={styles.socials}>
                        <a href="#" target="_blank">
                            <Image src={twitter} alt="ORION Bits Systems on Twitter (X)" width={iconSize} height={iconSize} />
                        </a>

                        <a href="#" target="_blank">
                            <Image src={facebook} alt="ORION Bits Systems on Facebook" width={iconSize} height={iconSize} />
                        </a>

                        <a href="#" target="_blank">
                            <Image src={linkedin} alt="ORION Bits Systems on LinkedIn" width={iconSize} height={iconSize} />
                        </a>
                    </div>
                </div>

                {/* DYNAMIC COLUMNS */}
                {footerContent.columns.map((col) => (
                    <div className={styles.col} key={col.heading}>
                        <h3>{col.heading}</h3>
                        <ul>
                            {col.items.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}

            </div>

            {/* BOTTOM */}
            <div className={styles.bottom}>
                <p>
                    {footerContent.copyright}
                </p>
            </div>

        </footer>
    );
}
