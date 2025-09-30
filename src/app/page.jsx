"use client";

import { Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";

export default function HomePage() {
    return (        
        <>
            <div className={styles.container}>
                <div className={styles.overlay}></div>
                <div className={styles.content}>
                    <h1 className={styles.gradientText}>
                        Conheça os países
                    </h1>
                    <p className={styles.description}>
                        Explore culturas, tradições e belezas naturais de todo o mundo
                    </p>
                    <Button 
                        type="primary" 
                        size="large" 
                        icon={<UserOutlined />}
                        className={styles.exploreButton}
                    >
                        Começar Exploração
                    </Button>
                </div>
            </div>

            <section className={styles.studentSection}>
                <div className={styles.studentContainer}>
                    <div className={styles.studentCard}>
                        <div className={styles.avatarContainer}>
                            <Image
                                src="/images/avatar-student.svg"
                                alt="Foto da aluna Gabriela Fernanda"
                                width={150}
                                height={150}
                                className={styles.studentAvatar}
                                priority={false}
                            />
                        </div>
                        
                        <div className={styles.studentInfo}>
                            <h2 className={styles.studentName}>Gabriela Fernanda Barbosa</h2>
                            <div className={styles.academicInfo}>
                                <p className={styles.schoolName}>🏫 SESI & SENAI Valinhos</p>
                                <p className={styles.className}>📚 Turma: 2TDS - Desenvolvimento de Sistemas</p>
                            </div>
                            
                            <blockquote className={styles.inspirationalQuote}>
                                <p>"Insista, persista, mas nunca desista."</p>
                                <cite>- Autor desconhecido</cite>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}