"use client";

import { Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
import Link from "next/link";
import styles from "./page.module.css";

export default function HomePage() {
    return (
        <div className={styles.wrapper}>

            <main className={styles.main}>
                {/* <div className={styles.container}>
                    <h1 className={styles.title}>PAÍSES</h1>
                    <p className={styles.description}>
                        O site Países agrega dados de várias fontes oficiais sobre os países 
                        do mundo. Divididos em seis temas (Economia, Indicadores Sociais, 
                        Meio Ambiente, População, Redes e Saúde), os dados são apresentados de 
                        forma sucinta e direta, permitindo a comparação entre os índices das 
                        diversas nações.
                    </p>
                    <Link href="/dashboard">
                        <Button type="primary" size="large" icon={<UserOutlined />}>
                            Comece a usar
                        </Button>
                    </Link>
                </div> */}
            </main>

            <div>
                
            </div>
        </div>
    );
}