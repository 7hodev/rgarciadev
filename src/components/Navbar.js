import Link from 'next/link';
/* STYLES */
import styles from '../styles/components/Navbar.module.css'

export default function Navbar() {
    return (
            <nav className={styles.navbar}>
                <div className={styles.item}>
                    <Link href="/" >
                        <a aria-current="page" ><i className="bi bi-house-fill"></i>Inicio</a>
                    </Link>
                </div>
                <div className={styles.item}>
                    <Link href="/certificates">
                        <a aria-current="page" ><i className="bi bi-people-fill"></i>¿Quiénes somos?</a>
                    </Link>
                </div>
                <div className={styles.item}>
                    <Link href="/products">
                        <a aria-current="page" ><i className="bi bi-box-seam"></i>Productos</a>
                    </Link>
                </div>
                <div className={styles.item}>
                    <Link href="/contact">
                        <a aria-current="page" ><i className="bi bi-envelope-paper-fill"></i>Contactos</a>
                    </Link>
                </div>
            </nav>
    )
}