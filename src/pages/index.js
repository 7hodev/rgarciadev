
import Image from "next/image";
import Link from "next/link";
/* COMPONENTS */
import Navbar from "../components/Navbar";
import Bar from "../components/Bar";
import Footer from "../components/Footer";
import Carrousel from "../components/Carrousel.js";
/* STYLES */
import styles from "../styles/pages/Home.module.css";

export default function Home() {
  return (
    <div className={styles.body}>
      <header className={styles.header}>
        <div className={styles.navbar}>
          <Navbar />
        </div>
        <div className={styles.bar}>
          <Bar />
        </div>
      </header>
      <section id="home" className={styles.home}>
        <div className={styles.textHome}>
          <h1>Rodrigo García</h1>
          {/* From Uiverse.io by ozgeozkaraa01 */}
          <div className={styles.containerButton2}>
            <div className={styles.button2}>
              <a href="#about">
                <i className="bi bi-arrow-down-short"></i>
              </a>
            </div>
            <h3>Junior Developer</h3>
          </div>
        </div>
      </section>
      <section id="about" className={styles.section2}>
        <div className={styles.content}>
          <div className={styles.text}>
            <h1 className={styles.title}>Rodrigo García</h1>
            <p className={styles.description}>
              Desarrollador de aplicaciones y sitios web. Con experticia en
              resolución de problemas, brindar nuevas ideas y adaptación de
              nuevas tecnologías para estar siempre a la vanguardia.
            </p>
            <a
              href="rodrigogarcia2.pdf"
              target="blank"
              className={styles.button}
            >
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
      </section>
      <section id="portfolio" className={styles.section3}>
        <Carrousel />
      </section>
      {/* <Footer /> */}
    </div>
  );
}
