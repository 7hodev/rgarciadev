import Image from 'next/image'
/* COMPONENTS */
import Navbar from '../components/Navbar'
import Bar from '../components/Bar'
import Footer from '../components/Footer'
/* STYLES */
import styles from '../styles/pages/Home.module.css'

export default function Home() {
  return (
    <div className={styles.body}>
      <section className={styles.section1}>
        <header className={styles.header}>
          <div className={styles.navbar}><Navbar /></div>
        </header>
        <div className={styles.bar}>
          <Bar />
        </div>
        <div className={styles.content}>
          <div className={styles.text}>
            <h1 className={styles.title}>Rodrigo García</h1>
            <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam impedit voluptate aspernatur unde quis perspiciatis, commodi est rem totam. Ratione aliquam ipsa perspiciatis qui repellendus architecto necessitatibus provident dolorum illum.</p>
            <button className={styles.button}>Button</button>
          </div>
          <div className={styles.imageS1}>
            <Image
              className={styles.x}
              src="/x2.png"
              alt="We"
              width={400}
              height={400}
              objectFit="cover"
            />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
