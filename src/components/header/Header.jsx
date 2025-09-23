"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";
import { useState, useEffect } from "react";

export default function Header() {
  const [currentPath, setCurrentPath] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    setCurrentPath(pathname);
  }, [pathname]);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/dashboard", label: "Dashboard" },
    { href: "/comparacao", label: "Comparação" },
    { href: "/sobre", label: "Sobre" },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.headerContent}>
          <Link href="/" className={styles.logo}>
            <Image
              src="/images/logoglobo.png"
              alt="Países Logo"
              width={150}
              height={150}
              className={styles.logoImage}
              priority
            />
            <span className={styles.logoText}>PAÍSES</span>
          </Link>

          <nav className={styles.nav}>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`${styles.navLink} ${
                  currentPath === item.href ? styles.active : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className={styles.mobileMenu}>
            <button aria-label="Menu">
              <svg
                className={styles.mobileMenuIcon}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}