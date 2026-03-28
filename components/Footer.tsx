import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <h3>Eksäters Båtklubb</h3>
            {/* <p>Sedan kiselgurpråmarnas tid vid Osbysjön.</p> */}
          </div>
          
          <div className={styles.links}>
            <div className={styles.linkGroup}>
              <h4>Navigering</h4>
              <a href="/about">Föreningen</a>
              <a href="/bryggan">Bryggan</a>
              <a href="/#membership">Medlemskap</a>
            </div>
            <div className={styles.linkGroup}>
              <h4>Kontakt</h4>
              <span>Eksäter, Osby</span>
              <span>info@eksatersbk.se</span>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© {new Date().getFullYear()} Eksäters Båtklubb. Inget inträdesprov, men kaffetvång vid bryggsnack.</p>
          <div className={styles.coordinates}>
            56° 22' 12" N — 13° 59' 24" E
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;