import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <h1 className={styles.logo}>Beauty Store</h1>
                <nav className={styles.nav}>
                    <Link to="/" className={styles.link}>Home</Link>
                    <Link to="/produtos" className={styles.link}>Produtos para Maquiagem</Link>
                </nav>
            </div>
        </header>
    );
}

export default Header;