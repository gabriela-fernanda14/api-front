"use client";

import styles from "./Footer.module.css";

export default function Footer() {
return (
    <footer className={styles.footer}>
        <div className={styles.footerContainer}>
            <div className={styles.footerGrid}>
                <div className={styles.footerSection}>
                    <div className={styles.logoSection}>
                        <span className={styles.globeIcon}>🌐</span>
                        <h3>Países do Mundo</h3>
                    </div>
                    <p>
                        Projeto de front-end API, compartilhando conhecimentos e experiências do curso de Desenvolvimento de Sistemas.
                    </p>
                </div>
                <div className={styles.footerSection}>
                    <h3>Contato & Info</h3>
                    <div className={styles.contactInfo}>
                        <p>📍 SESI & SENAI Valinhos</p>
                        <p>🎓 Turma: 2TDS</p>
                        <p>👨‍💻 Desenvolvimento de Sistemas</p>
                    </div>
                </div>
            </div>
            <div className={styles.footerDivider}></div>
            <div className={styles.footerBottom}>
                <div className={styles.footerBottomContent}>
                    <div className={styles.copyright}>
                        <p>&copy; {new Date().getFullYear()} Gabriela Fernanda Barbosa. Todos os direitos reservados.</p>
                    </div>
                    <div className={styles.socialLinks}>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                            GitHub
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                            LinkedIn
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
);
}