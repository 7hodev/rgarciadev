import Image from 'next/image'
import Link from 'next/link'
/* COMPONENTS */
import Navbar from '../components/Navbar'
import Bar from '../components/Bar'
import Footer from '../components/Footer'
/* STYLES */
import styles from '../styles/pages/Home.module.css'

export default function Home() {
  return (
    <div className={styles.body}>
      <section id='about' className={styles.section1}>
        <header className={styles.header}>
          <div className={styles.navbar}><Navbar /></div>
        </header>
        <div className={styles.bar}>
          <Bar />
        </div>
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
        <div className={styles.welcome}>
          <h2>Welcome</h2>
        </div>
      </section>
      {/* <section id='services' className={styles.section2}>
        <div className={styles.pages}>
          <h2>Landing Pages</h2>
          <p>Una landing page incrementará la visibilidad de tu producto o servicio. Su objetivo es funcionar como punto de información rápida y accesible para sus posibles clientes.  ç</p>
        </div>
        <div className={styles.pages}>
          <h2>Sitio web</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam cum earum qui, dolores quidem voluptatibus repellendus, ea ipsum officiis ullam, alias provident vel accusantium temporibus incidunt neque accusamus eos corporis!</p>
        </div>
        <div className={styles.pages}>
          <h2>App móviles</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam cum earum qui, dolores quidem voluptatibus repellendus, ea ipsum officiis ullam, alias provident vel accusantium temporibus incidunt neque accusamus eos corporis!</p>
        </div>
      </section> */}
      <section id='portfolio' className={styles.section3}>
        <div className={styles.titleS3}>
          <h3>Portfolio</h3>
        </div>
        <div className={styles.contentS3}>
          <a
            href='https://conosywaffles.vercel.app/'
            target="_blank"
            rel="noreferrer"
            className={styles.card}>
            <Image
              className={styles.cardImage}
              src="/conosywaffles.png"
              alt="We"
              width={300}
              height={165}
              objectFit="cover"
            />
            <div className={styles.heading}> Conos y Waffles Clarita
            </div>
          </a>
          <a
            href='https://rgarciabogado.ga/'
            target="_blank"
            rel="noreferrer"
            className={styles.card}>
            <Image
              className={styles.cardImage}
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
      </section>
      {/* <Footer /> */}
    </div>
  )
}
