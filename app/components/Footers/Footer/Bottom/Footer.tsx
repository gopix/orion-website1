"use client";

import styles from "./Footer.module.css";
import Image from "next/image";
import logo from "../../../../logo.jpeg"

import facebook from "./icon/facebook.png"
import twitter from "./icon/twitter.png"
import instagram from "./icon/instagram.png"
import linkedin from "./icon/linkedin.png"

export default function Footer() {

    const iconSize = 30 ;
    return (
        <footer className={styles.footer}>

            <div className={styles.container}>

                {/* LEFT */}
                <div className={styles.left}>
                    <Image src={logo} alt="ORION Logo" width={160} height={60} />

                    <p className={styles.tagline}>
                        Intelligent Digital Systems for Publishing
                    </p>

                    <h4>Follow Us</h4>
                    <div className={styles.socials}>
                        <a href="#" target="_blank">
                            <Image src={twitter} alt="X" width={iconSize} height={iconSize} />
                        </a>

                        <a href="#" target="_blank">
                            <Image src={facebook} alt="Facebook" width={iconSize} height={iconSize} />
                        </a>

                        <a href="#" target="_blank">
                            <Image src={linkedin} alt="LinkedIn" width={iconSize} height={iconSize} />
                        </a>

                        <a href="#" target="_blank">
                        <Image src={instagram} alt="Instagram" width={iconSize} height={iconSize} />
                        </a>
                    </div>
                </div>

                {/* SOLUTIONS */}
                <div className={styles.col}>
                    <h3>Solutions</h3>
                    <ul>
                        <li>ORION SUBMIT+</li>
                        <li>ORION EDITOR+</li>
                        <li>ORION PUBLISH+</li>
                    </ul>
                </div>

                {/* SERVICES */}
                <div className={styles.col}>
                    <h3>Services</h3>
                    <ul>
                        <li>CRM Implementation</li>
                        <li>Automation Systems</li>
                        <li>Integration Services</li>
                        <li>Reporting & Dashboards</li>
                    </ul>
                </div>

                {/* INDUSTRIES */}
                <div className={styles.col}>
                    <h3>Industries</h3>
                    <ul>
                        <li>Publishing</li>
                        <li>Distribution</li>
                        <li>Content Businesses</li>
                        <li>Manufacturing</li>
                    </ul>
                </div>

            </div>

            {/* BOTTOM */}
            <div className={styles.bottom}>
                <p>
                    Copyright © 2025 ORION Bits Systems Pvt. Ltd. All rights reserved.
                </p>
            </div>

        </footer>
    );
}
