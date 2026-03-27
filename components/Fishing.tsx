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
            <span className={styles.year}>Fisket</span>
            <h2 className={styles.title}>Jakten på det <br /><i>stora hugget</i></h2>
            
            <div className={styles.story}>
              <p>
              För många av oss i klubben är Osbysjön främst en övning i extremt tålamod. Sjön har ett fint bestånd av karp, men det är en fisk som tycks ha läst betydligt fler böcker om strategi än vad vi har. Oftast handlar det om att sitta i de lugna vikarna 
              kring Eksäter och titta på en yta som är så spegelblank att man nästan får dåligt samvete av att kasta ut.
              </p>
              <p>
              Här jagar vi inte medaljer, utan snarare den där specifika ron som infinner sig när kaffet är varmt men nappet lyser med sin frånvaro. I vårt båthus kan du stuva undan spöna så att steget ner till bryggan blir smidigt när andan faller på. Vi värnar om en levande sjömiljö där vi ödmjukt accepterar att fisken oftast vinner – 
              och att de största fångsterna märkligt nog alltid är de som lyckas skaka sig loss precis vid båtkanten
              </p>
            </div>

           
          </div>

        </div>
      </div>
    </section>
  );
};

export default Fishing;