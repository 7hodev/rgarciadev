import Link from 'next/link';
/* STYLES */
import styles from '../styles/components/Navbar.module.css'

export default function Navbar() {
    return (
            <nav className={styles.navbar}>
                <div className={styles.item}>
                    <Link href="/" >
                        <a aria-current="page" >About</a>
                    </Link>
                </div>
                <div className={styles.item}>
                    <Link href="/certificates">
                        <a aria-current="page" >Contact</a>
                    </Link>
                </div>
                <div className={styles.item}>
                    <Link href="/products">
                        <a aria-current="page" ><i className="bi bi-briefcase-fill"></i></a>
                    </Link>
                </div>
            </nav>
    )
}