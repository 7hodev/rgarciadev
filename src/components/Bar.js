import React from 'react';
import Link from "next/link";
import Image from "next/image";
/* COMPONENTS */
import Redes from './Redes'
/* STYLES */
import styles from "../styles/components/Bar.module.css";

export default function Bar() {

  return (
    <div className={styles.bar}>
      <div className={styles.logo}>
        <h2>RG</h2>
      </div>
      <div className={styles.title}>
      
      </div>
      <div className={styles.redes}>
        <Redes />
      </div>
    </div>
  );
}
