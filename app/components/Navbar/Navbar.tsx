"use client"
import styles from "./Navbar.module.css";
import { useEffect, useRef, useState } from "react";
import logo from "../../logo.jpeg"
import Image from 'next/image'

type navbar_items = {
    lable: string,
    dropdown: string[] | null 
}


const NAV_ITEMS = [
    {
        label: "About Us",
        dropdown: null,
    },
    {
        label: "Insights",
        dropdown: ["Blog", "Case Studies", "Whitepapers", "Webinars", "Newsletter"],
    },
    {
        label: "Services",
        dropdown: [
            "CRM Implementation",
            "Data Migration",
            "Custom Integrations",
            "Training & Support",
            "Consulting",
        ],
    },
    {
        label: "Contact Us",
        dropdown: ["Sales", "Support", "Partnerships", "Press & Media"],
    },
];

function SearchIcon() {
    return (
        <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
    );
}

function ChevronIcon({ open }: { open: boolean }) {
    return (
        <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
                transform: open ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 200ms ease",
                marginLeft: 3,
            }}
        >
            <polyline points="6 9 12 15 18 9" />
        </svg>
    );
}

function NavItem({ item }: { item: navbar_items }) {
    const [open, setOpen] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        function handleClick(e) {
            if (ref.current && !ref.current.contains(e.target)) setOpen(false);
        }
        document.addEventListener("mousedown", handleClick);
        return () => document.removeEventListener("mousedown", handleClick);
    }, []);

    if (!item.dropdown) {
        return (
            <li className={styles.navItem}>
                <button className={styles.navBtn}>{item.label}</button>
            </li>
        );
    }

    return (
        <li className={styles.navItem} ref={ref}>
            <button
                className={`${styles.navBtn} ${open ? styles.navBtnActive : ""}`}
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
            >
                {item.label}
                <ChevronIcon open={open} />
            </button>
            {open && (
                <ul className={styles.dropdown}>
                    {item.dropdown.map((child) => (
                        <li key={child}>
                            <button className={styles.dropdownItem}>{child}</button>
                        </li>
                    ))}
                </ul>
            )}
        </li>
    );
}

export default function Navbar() {
    const [searchOpen, setSearchOpen] = useState(false);
    const searchRef = useRef(null);

    useEffect(() => {
        if (searchOpen) searchRef.current?.focus();
    }, [searchOpen]);

    return (
        <nav className={styles.nav}>
            {/* Logo — stays left */}
            <div className={styles.logo}>
                <Image src={logo}
                    height={20}
                    alt="" />
            </div>

            {/* Everything else — right side */}
            <div className={styles.right}>
                <ul className={styles.links}>
                    {NAV_ITEMS.map((item) => (
                        <NavItem key={item.label} item={item} />
                    ))}
                </ul>

                {/* Search */}
                <div className={styles.searchWrapper}>
                    {searchOpen && (
                        <input
                            ref={searchRef}
                            className={styles.searchInput}
                            placeholder="Search…"
                            onBlur={() => setSearchOpen(false)}
                        />
                    )}
                    <button
                        className={styles.iconBtn}
                        onClick={() => setSearchOpen((v) => !v)}
                        aria-label="Search"
                    >
                        <SearchIcon />
                    </button>
                </div>
            </div>
        </nav>
    );
}
