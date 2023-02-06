import Link from 'next/link';
/* STYLES */
import styles from '../styles/components/Navbar.module.css'

export default function Navbar() {
    return (
            <nav className={styles.navbar}>
                <div className={styles.item}>
                    <Link href="#about" >
                        <a aria-current="page" >Sobre mí</a>
                    </Link>
                </div>
                <div className={styles.item}>
                    <Link href="#services">
                        <a aria-current="page" >Servicios</a>
                    </Link>
                </div>
                <div className={styles.item}>
                    <Link href="#portfolio">
                        <a aria-current="page" ><i className="bi bi-briefcase-fill"></i></a>
                    </Link>
                </div>
            </nav>
    )
}