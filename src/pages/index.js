import Image from 'next/image'
import Link from 'next/link'
/* COMPONENTS */
import Navbar from '../components/Navbar'
import Bar from '../components/Bar'
import Footer from '../components/Footer'
/* STYLES */
import styles from '../styles/pages/Home.module.css'
/* CAROUSEL */
import Carousel from '../components/Carousel'

export default function Home() {
  return (
    <div className={styles.body}>
      <section className={styles.home}>
        <header className={styles.header}>
          <div className={styles.navbar}><Navbar /></div>
        </header>
        <div className={styles.bar}>
          <Bar />
        </div>
        <div className={styles.textHome}>
          <h1>Rodrigo García</h1>
          <h5>Junior Developer</h5>
        </div>
        <div className={styles.pages}>
          <p>Home</p>
          <div className={styles.line}></div>
        </div>
      </section>
      <section id='about' className={styles.section1}>
        <div className={styles.content}>
          <div className={styles.text}>
            <h1 className={styles.title}>Rodrigo García</h1>
            <p className={styles.description}>Desarrollador de aplicaciones y sitios web. Con experticia en
              resolución de problemas, brindar nuevas ideas y adaptación de
              nuevas tecnologías para estar siempre a la vanguardia.</p>
            <a
              href="rodrigogarcia2.pdf"
              target="blank"
              className={styles.button}>
              <span className={styles.circle} aria-hidden="true">
                <span className={styles.iconarrow}></span>
              </span>
              <span className={styles.buttontext}>Curriculum</span>
            </a>
          </div>
          <div className={styles.imageS1}>
            <Image
              className={styles.x}
              src="/che3.png"
              alt="We"
              width={450}
              height={300}
              objectFit="cover"
            />
          </div>

        </div>
        <div className={styles.pages2}>
          <p>About me</p>
          <div className={styles.line2}></div>
        </div>
      </section>
      <section id='portfolio' className={styles.section3}>
        <div className={styles.content}>
          <div className={styles.textS3}>
            <h2>Portafolio</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel repellendus atque quis facere, placeat asperiores dolore ducimus aut perferendis sit odio voluptatibus ut magni quasi aliquam voluptates tempore expedita quae.</p>
          </div>
          <div className={styles.cards}>
            <div
              href='https://conosywaffles.vercel.app/'
              target="_blank"
              rel="noreferrer"
              className={styles.card}>
              <Image
                src="/conosywaffles.png"
                alt="We"
                width={380}
                height={200}
                objectFit="cover"
                className={styles.image}
              />
              <div className={styles.heading}>
                <h3>Conos y Waffles Clarita</h3>
              </div>
            </div>
            <a
              href='https://rgarciabogado.org/'
              target="_blank"
              rel="noreferrer"
              className={styles.card}>
              <Image
                className={styles.image}
                src="/rgarciabogado.png"
                alt="We"
                width={300}
                height={165}
                objectFit="cover"
              />
              <div className={styles.heading}> Servicios de abogado
              </div>
            </a>
            <a
              href='https://age-calculator-eight.vercel.app/'
              target="_blank"
              rel="noreferrer"
              className={styles.card}>
              <Image
                className={styles.cardImage}
                src="/ageCalculator.png"
                alt="We"
                width={300}
                height={165}
                objectFit="cover"
              />
              <div className={styles.heading}> Age Calculator
              </div>
            </a>
          </div>
        </div>

      </section>
      {/* <Footer /> */}
    </div>
  )
}
