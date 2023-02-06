import Image from 'next/image';

/* STYLES */
import styles from '../styles/components/Footer.module.css'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.name}>
                <a
                    href="https://www.tjhonnar.ga"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{' '}
                    <h3 className={styles.name_title}>7hoSoft</h3>
                </a>
            </div>
        </footer>
    )
}
export default Footer;