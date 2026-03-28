import React from 'react';
import Navbar from '../../components/Navbar';
import styles from './Bryggan.module.css';

const Bryggan: React.FC = () => {
  return (
    <section className={styles.wrapper} id="bryggan">
      <Navbar forceSolid={true} />

      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.preTitle}>Brygga & Förvaring</span>
          <h2 className={styles.title}>En samlingspunkt med <br /><i>praktiska möjligheter.</i></h2>
          <p className={styles.intro}>
            Eksäters Båtklubb är en lokalt förankrad förening. Vi erbjuder en välskött brygga 
            och ett gemensamt båthus som underlättar båtlivet för våra medlemmar året om.
          </p>
        </div>

        <div className={styles.grid}>
          {/* Kort 1: Båthuset */}
          <div className={styles.card}>
            <h3>Båthuset</h3>
            <p>
              Vårt båthus fungerar som navet i föreningen. Här finns utrymme 
              för skyddad förvaring av gemensam utrustning.
            </p>
          </div>

          {/* Kort 2: Förvaring */}
          <div className={styles.card}>
            <h3>Förvaringsmöjligheter</h3>
            <p>
              För medlemmar finns möjlighet till förvaring av mindre tillbehör och utrustning i 
              anslutning till båthuset. Detta förenklar logistiken inför turen på sjön och 
              skapar en mer lättillgänglig brygga.
            </p>
          </div>

          {/* Kort 3: Brygganläggningen */}
          <div className={styles.card}>
            <h3>Vår anläggning</h3>
            <p>
              Bryggan är dimensionerad för lokala behov och hålls i gott skick genom gemensamma 
              insatser. Vi värnar om en lugn atmosfär där ordning och säkerhet är självklara 
              grundstenar i vår dagliga verksamhet.
            </p>
          </div>
        </div>

        <div className={styles.statusBox}>
          <div className={styles.statusDot}></div>
          <span>
            <strong>Information:</strong> Just nu ser vi över förvaringsutrymmen inför säsongen. 
            Prata med styrelsen om du har frågor kring plats i båthuset eller vid bryggan.
          </span>
        </div>
      </div>
    </section>
  );
};

export default Bryggan;