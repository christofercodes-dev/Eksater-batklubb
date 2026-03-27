import React from 'react';
import styles from './News.module.css';

const News: React.FC = () => {
  const items = [
    {
      date: '18 April, 2026',
      tag: 'Tävling',
      title: 'Vårhugget',
      excerpt: 'Säsongspremiär! Vi ser vem som putsat dragen bäst och vem som bara suttit i båthuset och ljugit hela vintern. C&R gäller.',
      isEvent: true
    },
    {
      date: '21 April, 2026',
      tag: 'Evenemang',
      title: 'Dags för sjösättning',
      excerpt: 'Nu lägger vi i bommarna! Vi bjuder på kaffe och de sedvanliga diskussionerna om varför bottenfärgen aldrig torkar i tid.',
      isEvent: true
    },
    {
      date: '12 Juni, 2026',
      tag: 'Tävling',
      title: 'Sjöslaget (Lagtävling)',
      excerpt: 'Här prövas samarbetet på allvar – oftast när ni ska försöka trassla ur varandras linor i motvind utan att tappa humöret.',
      isEvent: true
    },
  ];

  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.titleArea}>
            <span className={styles.preTitle}>Loggboken & Kalendern</span>
            <h2 className={styles.title}>Aktuellt vid bryggan</h2>
          </div>
          <button className={styles.viewAll}>Visa hela säsongen</button>
        </div>

        <div className={styles.grid}>
          {items.map((item, index) => (
            <article 
              key={index} 
              className={`${styles.card} ${item.isEvent ? styles.eventCard : ''}`}
            >
              <div className={styles.meta}>
                <span className={styles.date}>{item.date}</span>
                <span className={`${styles.tag} ${item.tag === 'Tävling' ? styles.contestTag : ''}`}>
                  {item.tag}
                </span>
              </div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.excerpt}>{item.excerpt}</p>
              
              {item.isEvent && (
                <span className={styles.eventLabel}>Kommande aktivitet</span>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;