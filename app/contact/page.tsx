import React from 'react';
import Navbar from '../../components/Navbar';
import styles from './Contact.module.css';

const Contact: React.FC = () => {
  return (
    <section className={styles.section} id="kontakt">
      <Navbar forceSolid={true} />
      
      <div className={styles.container}>
        <div className={styles.contentGrid}>
          
          {/* Vänster sida: Information & Bild */}
          <div className={styles.imageSide}>
            <div className={styles.imageFrame}>
              <img 
                src="/images/b1.jpg" 
                alt="Eksäters Båtklubb brygga" 
                className={styles.image} 
              />
              <div className={styles.imageOverlay}></div>
            </div>
            <div className={styles.infoBox}>
              <h3>Besöksadress</h3>
              <p>Eksäter, Osbysjön<br />283 00 Osby</p>
            </div>
          </div>

          {/* Höger sida: Kontaktuppgifter */}
          <div className={styles.textSide}>
            <span className={styles.year}>Hör av dig</span>
            <h2 className={styles.title}>Vi ses vid <br /><i>vattnet</i></h2>
            
            <div className={styles.story}>
              <p>
                Har du frågor om medlemskap, båtplatser eller vill du veta mer om vår 
                verksamhet i Osbysjön? Vi är en ideell förening och svarar så snart vi kan.
              </p>
            </div>

            <div className={styles.contactList}>
              <div className={styles.contactItem}>
                <span className={styles.label}>Ordförande / Allmänna frågor</span>
                <span className={styles.value}>info@eksaterbk.se</span>
              </div>
              
              <div className={styles.contactItem}>
                <span className={styles.label}>Hamnkapten / Båtplatser</span>
                <span className={styles.value}>070-000 00 00</span>
              </div>

              <div className={styles.contactItem}>
                <span className={styles.label}>Medlemskap & Kölista</span>
                <span className={styles.value}>medlem@eksaterbk.se</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;