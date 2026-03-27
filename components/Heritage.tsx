import React from 'react';
import styles from './Heritage.module.css';

const Heritage: React.FC = () => {
  return (
    <section className={styles.section} id="arv">
      <div className={styles.container}>
        <div className={styles.contentGrid}>
          
          <div className={styles.imageSide}>
            <div className={styles.imageFrame}>
              <img 
                src="/images/Naset-Osby.jpg" 
                alt="Historisk vy över Osbysjön vid Näset" 
                className={styles.image} 
              />
              <div className={styles.imageOverlay}></div>
            </div>
            <p className={styles.imageCaption}>
              Näset – där kiselguren en gång bröts ur sjöns djup.
            </p>
          </div>

          <div className={styles.textSide}>
            <span className={styles.year}>Eksäters Båtklubb</span>
            <h2 className={styles.title}>Vårt arv vid <br /><i>Osbysjön</i></h2>
            
            <div className={styles.story}>
              <p>
              Där björkarna möter vattnet vid Eksäter har historierna avlöst varandra i decennier. Förr var detta en plats för fest och rörelse; här låg en populär dansbana där musiken ekade över sjön och sommarkvällarna aldrig ville ta slut. Stegen på dansgolvet har tystnat, men glädjen över att vara vid vattnet lever kvar i allra högsta grad.

Idag är det snarare lugnet och spänningen under ytan som lockar. Osbysjön har gjort sig känd för ett fantastiskt karpfiske, där tålamod belönas med både storlek och kampvilja. Eksäters Båtklubb är stolta förvaltare av denna pärla, med 30 båtplatser som fungerar som porten ut till både äventyret och stillheten.
              </p>
              <p>
              Vi är en ideell förening som förstår att livet är bäst i en eka. Här prioriterar vi gemenskapen högre än dyra
               instrument – hos oss bygger vi klubbkänslan på en orubblig 
              optimism om morgondagens väder och en delad förståelse för att 
              en knop ibland är svårare att slå än man minns.
              </p>
            </div>

            <div className={styles.stats}>
              <div className={styles.statItem}>
                <span className={styles.statValue}>2010</span>
                <span className={styles.statLabel}>Klubben bildas</span>
              </div>
             
              <div className={styles.statItem}>
                <span className={styles.statValue}>30</span>
                <span className={styles.statLabel}>Platser vid bryggan</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Heritage;