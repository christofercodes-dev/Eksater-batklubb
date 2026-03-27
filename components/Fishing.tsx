import React from 'react';
import styles from './Fishing.module.css';

const Fishing: React.FC = () => {
  return (
    <section className={styles.section} id="fiske">
      <div className={styles.container}>
        <div className={styles.contentGrid}>
          
          <div className={styles.imageSide}>
            <div className={styles.imageFrame}>
              <img 
                src="/images/b4.jpg" 
                alt="Sportfiske i Osbysjön" 
                className={styles.image} 
              />
              <div className={styles.imageOverlay}></div>
            </div>
            <p className={styles.imageCaption}>
              Morgonens första kast vid Osbysjöns vassbälten.
            </p>
          </div>

          <div className={styles.textSide}>
            <span className={styles.year}>Sportfiske</span>
            <h2 className={styles.title}>Jakten på det <br /><i>stora hugget</i></h2>
            
            <div className={styles.story}>
              <p>
                Osbysjön är vida känd för sitt rika bestånd av gädda och abborre. För våra medlemmar 
                är båtplatsen mer än bara en förtöjning – det är startpunkten för morgonpasset 
                när vattnet ligger spegelblankt och rovfisken vakar i vassen.
              </p>
              <p>
                I vårt båthus finns utrymme för förvaring av redskap, vilket gör steget från 
                beslut till första kastet föredömligt kort. Vi värnar om ett hållbart fiske där 
                respekten för sjöns ekosystem går hand i hand med glädjen över en god fångst.
              </p>
            </div>

           
          </div>

        </div>
      </div>
    </section>
  );
};

export default Fishing;