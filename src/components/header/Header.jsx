"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./header.module.css";

export default function Header() {
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/dashboard", label: "Dashboard" },
    { href: "/comparacao", label: "Comparação" },
    { href: "/sobre", label: "Sobre" },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <span className={styles.globeIcon}>🌐</span>
          <span className={styles.logoText}>Países</span>
        </Link>

        <nav className={styles.nav}>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`${styles.navLink} ${
                pathname === item.href ? styles.active : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
