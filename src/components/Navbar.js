import Link from 'next/link';
/* STYLES */
import styles from '../styles/components/Navbar.module.css'

export default function Navbar() {
    return (
            <nav className={styles.navbar}>
                <div className={styles.pages}>
          <p>Home</p>
          <div className={styles.line}></div>
        </div>
            </nav>
    )
}