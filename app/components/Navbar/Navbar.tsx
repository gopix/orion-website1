"use client";


import styles from "./Navbar.module.css";
import { useEffect, useRef, useState } from "react";

import logo from "../../logo.jpeg";

import Image from "next/image";
import Link from "next/link";

import content from "@/content.json";


interface NavbarItem {
    label: string;
    href?: string;
    dropdown?: { label: string; href: string }[];
}

const NAV_ITEMS: NavbarItem[] = content.navbar.items;

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
                flexShrink: 0,
            }}
        >
            <polyline points="6 9 12 15 18 9" />
        </svg>
    );
}

function NavItem({ item }: { item: NavbarItem }) {
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLLIElement | null>(null);

    useEffect(() => {
        function handleClick(e: MouseEvent) {
            if (!ref.current) return;
            if (e.target instanceof Node && !ref.current.contains(e.target)) {
                setOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClick);
        return () => document.removeEventListener("mousedown", handleClick);
    }, []);

    // Simple link — no dropdown
    if (!item.dropdown) {
        return (
            <li className={styles.navitem}>
                <Link href={item.href ?? "/"} className={styles.navbtn}>
                    {item.label}
                </Link>
            </li>
        );
    }

    // Dropdown item
    return (
        <li className={styles.navitem} ref={ref}>
            <button
                className={`${styles.navbtn} ${open ? styles.navbtnactive : ""}`}
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
            >
                {item.label}
                <ChevronIcon open={open} />
            </button>

            {open && (
                <ul className={styles.dropdown}>
                    {item.dropdown.map((child) => (
                        <li key={child.href}>
                            <Link
                                href={child.href}
                                className={styles.dropdownitem}
                                onClick={() => setOpen(false)}
                            >
                                {child.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </li>
    );
}

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

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const searchRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        if (searchOpen) searchRef.current?.focus();
    }, [searchOpen]);

    return (
        <nav className={styles.nav}>
            {/* Logo */}
            <Link href="/" className={styles.logo}>
                <Image src={logo} height={20} alt="ORION Bits Systems Logo - AI & Automation Solutions" />
            </Link>

            {/* Hamburger */}
            <button
                className={styles.menubtn}
                onClick={() => setMenuOpen((v) => !v)}
                aria-label="Toggle menu"
                aria-expanded={menuOpen}
            >
                {menuOpen ? "✕" : "☰"}
            </button>

            {/* Right cluster */}
            <div className={`${styles.right} ${menuOpen ? styles.rightopen : ""}`}>
                <ul className={styles.links}>
                    {NAV_ITEMS.map((item) => (
                        <NavItem key={item.label} item={item} />
                    ))}
                </ul>

                <div className={styles.searchwrapper}>
                    {searchOpen && (
                        <input
                            ref={searchRef}
                            className={styles.searchinput}
                            placeholder={content.navbar.searchPlaceholder}
                            onBlur={() => setSearchOpen(false)}
                        />
                    )}
                    <button
                        className={styles.iconbtn}
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
