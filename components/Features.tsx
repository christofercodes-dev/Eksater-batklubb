import React from 'react';
import styles from './Features.module.css';

const Features: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        {/* Vänster kolumn: Stor bild som skapar djup */}
        <div className={styles.imageWrapper}>
          <img src="/images/b4.jpg" alt="Minimalistisk brygga" className={styles.mainImage} />
          <div className={styles.imageCaption}>01 — Bevarad vildmark</div>
        </div>

        {/* Höger kolumn: Textinnehåll */}
        <div className={styles.textContent}>
          <span className={styles.preTitle}>Vår filosofi</span>
          <h2 className={styles.title}>En plats för reflektion och fångst.</h2>
          <p className={styles.description}>
            Vi tror på ett hållbart samspel med naturen. Hos oss handlar det inte bara om 
            största fångsten, utan om morgondimman över spegelblankt vatten och gemenskapen 
            vid den sprakande elden efter en dag på sjön.
          </p>

          <div className={styles.grid}>
            <div className={styles.gridItem}>
              <h3>Hållbart Fiske</h3>
              <p>Vi arbetar aktivt med fiskevård och catch-and-release för att säkra beståndet för framtida generationer.</p>
            </div>
            <div className={styles.gridItem}>
              <h3>Premium Hamn</h3>
              <p>Våra bryggplatser är byggda i svensk kärnfuru och utrustade med modern teknik för smidig förtöjning.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Features;