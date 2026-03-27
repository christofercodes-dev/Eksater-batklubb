import React from 'react';
import Navbar from '../../components/Navbar';
import styles from './About.module.css';

const About: React.FC = () => {
  return (
    <div className={styles.pageWrapper}>
        <Navbar forceSolid={true} />
      
      {/* Intro-sektion */}
      <section className={styles.intro}>
        <div className={styles.container}>
          <span className={styles.sub}>Eksäters Båtklubb</span>
          <h1 className={styles.mainTitle}>30 platser för båtar - <br /><i>tusen för historier</i>.</h1>
          <p className={styles.lead}>
          Vi är en ideell förening och  experter på allt från krånglande motorer till att gissa vattenståndet. 
          Välkommen till en klubb där vi tar kaffepausen på största allvar.
          </p>
        </div>
      </section>

      {/* Värderingar i tre kolumner */}
      <section className={styles.values}>
        <div className={styles.container}>
          <div className={styles.valueGrid}>
            <div className={styles.valueItem}>
              <h3>Gemenskap</h3>
              <p>Här hjälps vi åt med allt från sjösättning till att tyda gamla motormanualer på tyska. Ingen lämnas ensam med ett trassligt ankare eller en trilskande utombordare.</p>
            </div>
            <div className={styles.valueItem}>
              <h3>Arv</h3>
              <p>Vi vårdar historien om kiselgurpråmarna och dansbanans glansdagar. Vi blickar framåt, men erkänner villigt att båtarna var vackrare (och mer svårstartade) förr.</p>
            </div>
            <div className={styles.valueItem}>
              <h3>Respekt (och god fantasi)</h3>
              <p>Vi värnar om Osbysjöns natur. Vi delar sjön med både fågelliv och fiskare – även de vars gäddor tycks växa med minst en decimeter för varje gång historien återberättas på bryggkanten. Vi nickar och tror på allt, det hör till god ton.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;