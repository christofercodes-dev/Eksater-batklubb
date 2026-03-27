"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './Hero.module.css';

const Hero: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // För att trigga CSS-animationer efter mount
  }, []);

  return (
    <section className={styles.heroSection}>
      <div className={styles.bgImageContainer}>
        <Image
          src="/images/b2.jpg" // Din bakgrundsbild
          alt="Eksäters Båtklubb vid Osbysjön, soluppgång eller dimma"
          fill
          priority
          className={styles.bgImage}
          sizes="(max-width: 768px) 100vw, 100vw" // Optimera bildladdning
        />
        <div className={styles.gradientOverlay}></div> {/* Mörk gradient */}
      </div>

      <div className={styles.contentContainer}>
        <div className={styles.textWrapper}>
          <p className={`${styles.preTitle} ${isMounted ? styles.fadeInUp : ''}`}>
            Sedan 2010
          </p>
          <h1 className={`${styles.mainTitle} ${isMounted ? styles.fadeInUpDelay1 : ''}`}>
            Där sjön möter <br />
            <i>historien & lugnet.</i>
          </h1>
          <p className={`${styles.leadText} ${isMounted ? styles.fadeInUpDelay2 : ''}`}>
            En samlingsplats för båtliv, fiskaren och de där äkta samtalen 
            vid Osbysjöns kant som varar lite längre än man tänkt.
          </p>
          <div className={`${styles.buttonGroup} ${isMounted ? styles.fadeInUpDelay3 : ''}`}>
            <a href="#membership" className={styles.ctaPrimary}>Bli medlem</a>
            <a href="/bryggan" className={styles.ctaSecondary}>Utforska hamnen</a>
          </div>
        </div>

        <div className={`${styles.watermark} ${isMounted ? styles.fadeIn : ''}`}>
          <span className={styles.watermarkText}>Osbysjön</span>
          <span className={styles.watermarkCoords}>56.3781° N, 13.9926° E</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;