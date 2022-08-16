import Image from 'next/image'
/* COMPONENTS */
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
/* STYLES */
import styles from '../styles/pages/Home.module.css'

export default function Home() {
  return (
    <div className={styles.body}>
      <header className={styles.header}>
        <Navbar />
      </header>
      <main className={styles.main}>
        <section className={styles.section1}>
          <Image
            className={styles.backgroundS1}
            src="/background/wallpaperDark.jpg"
            alt="We"
            width={1350}
            height={400}
            objectFit="cover"
          />
        </section>
      </main>
      <Footer />
    </div>
  )
}
