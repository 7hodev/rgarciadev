import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

/* DATA */
import { projects } from "../components/data/dataProjects";

// STYLES
import styles from "../styles/components/Carrousel.module.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

export default function App() {
  return (
    <>
      <Swiper
        className={styles.mySwiper}
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        
        autoplay={{
            delay: 5500,
            disableOnInteraction: false,
          }}
        navigation={{
          nextEl: `.${styles.next}`,
          prevEl: `.${styles.preview}`,
        }}
        spaceBetween={20}
        modules={[Autoplay, Navigation]}
      >
        {projects.map((project) => {
          return (
            <SwiperSlide className={styles.swiperSlide}>
              <div className={styles.allContainer}>
                <div className={styles.container3}>
                  <div className={styles.containerText}>
                    <div className={styles.heading}>
                      <h3 key={project.id}>{project.title}</h3>
                      <div className={styles.avanzar}>
                        <div className={styles.preview}>
                          <i className="bi bi-caret-left-fill"></i>
                        </div>
                        <div className={styles.next}>
                          <i className="bi bi-caret-right-fill"></i>
                        </div>
                      </div>
                    </div>
                    <div className={styles.textSection3}>
                      <p>{project.description}</p>
                      <Link href={project.link}>
                        <a
                          className={styles.visitar}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Visitar sitio
                        </a>
                      </Link>
                    </div>
                  </div>
                  <Link href={project.link}>
                    <a target="_blank" rel="noreferrer" className={styles.img}>
                      <Image
                        key={project.id}
                        src={project.image}
                        alt="Project"
                        width={550}
                        height={300}
                        objectFit="cover"
                        className={styles.image}
                      />
                    </a>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
