import Link from 'next/link';
import Image from 'next/image';
/* STYLES */
import styles from '../styles/components/Bar.module.css'

export default function Bar() {
    return (
        <div className={styles.bar}>
            <div className={styles.logo}>
                <h2>RG</h2>
            </div>
            <div className={styles.title}>
            </div>
            <div className={styles.redes}>
                <Link
                    href="https://github.com/Tjhonnark"

                >
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.item}>
                        <i className="bi bi-github"></i>
                    </a>
                </Link>
                <Link
                    href="mailto:rodrigogarcia959@gmail.com.com"
                ><a className={styles.item}><i className="bi bi-envelope-fill"></i></a>
                </Link>
                <Link
                    href="https://www.linkedin.com/in/rodrigothomasgarcia/"
                >
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.item}>
                        <i className="bi bi-linkedin"></i>
                    </a>
                </Link>
            </div>
        </div>
    )
}