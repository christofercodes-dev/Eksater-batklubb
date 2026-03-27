import React from 'react';
import styles from './Membership.module.css';

const Membership: React.FC = () => {
  return (
    <section id="membership" className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.content}>
  <span className={styles.preTitle}>Inget inträdesprov (vi lovar)</span>
  <h2 className={styles.title}>
    Bli en del av <br />
    <span className={styles.accentText}>ljugarbänken</span>
  </h2>
  
  <p className={styles.description}>
    För en femhundring om året får du inte bara en plats för båten, du får även ett gäng experter som mer än gärna förklarar varför just <em>ditt</em> drag var helt fel för dagen. 
  </p>

  <p className={styles.description}>
  I Eksäters Båtklubb har vi alla stått där med svetten i pannan och ryckt i startsnöret medan goda råd om choken haglar från bryggkanten. Hos oss får du en gemenskap som förstår att en båt har en egen vilja – och att den oftast är ganska tjurig.
  </p>

  <p className={styles.description}>
  Vi är en ideell förening som värnar om det enkla båtlivet – där dagens största fångst oftast växer en aning för varje gång historien berättas.
  </p>
</div>

        <div className={styles.membershipCard}>
          <span className={styles.priceTitle}>Fullvärdig medlem</span>
          <span className={styles.amount}>500:-</span>
          <span className={styles.period}>INKL. KAFFE & SKRÖNOR</span>
          
          <ul className={styles.benefits}>
            <li><span className={styles.dot} /> Rätten att klaga på vattenståndet</li>
            <li><span className={styles.dot} /> Tillgång till klubbhuset & verktyg man inte kan namnet på</li>
            <li><span className={styles.dot} /> Deltagande i våra prestigefyllda tävlingar</li>
          </ul>

          <div className={styles.eventHighlight}>
            <span className={styles.eventTitle}>Våra prestigefyllda drabbningar:</span>
            <div className={styles.eventItem}>
              <span><strong>Vårhugget</strong> – Den officiella starten där vi ser vem som putsat dragen bäst under vintern</span>
            </div>
            <div className={styles.eventItem}>
              <span><strong>Sjöslaget</strong> – En lagtävling där samarbetet prövas (oftast när man ska trassla ur varandras linor)</span>
            </div>
          </div>

          <a href="#ansok" className={styles.cta} style={{ marginTop: '30px' }}>
          Ansök om medlemskap
          </a>
        </div>
      </div>
    </section>
  );
};

export default Membership;