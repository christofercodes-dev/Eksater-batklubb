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
                Långt innan fritidsbåtarna fyllde våra vikar, var Osbysjön en livsåder för Göingebygdens industri. 
                Fram till 1950-talet arbetade ångbåtar med att dra tunga pråmar lastade med 
                "det vita guldet" – kiselgur – från sjöbotten till fabrikerna på land.
              </p>
              <p>
                Eksäters Båtklubb bär stoltheten från denna tid vidare. Vi är mer än bara 30 båtplatser; 
                vi är förvaltare av en plats där människa och vatten mötts i generationer. Från dåtidens 
                tunga industrislit till dagens jakt på stillheten, den perfekta fångsten och den 
                minst lika viktiga kaffetåren på bryggkanten.
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