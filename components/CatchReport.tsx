"use client"; // Viktigt för att kunna hantera formulär-events

import styles from './CatchReport.module.css';
import { useState } from 'react';

export default function CatchReport() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Här lägger du senare logiken för att spara till databas (t.ex. Supabase)
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className={styles.section}>
        <div className={styles.formCard} style={{textAlign: 'center'}}>
          <h2 style={{fontSize: '3rem'}}>🎣</h2>
          <h2>Snyggt jobbat!</h2>
          <p>Din fångst har registrerats och lagts till i klubbens statistik.</p>
          <button onClick={() => setSubmitted(false)} className={styles.submitBtn}>
            Rapportera en till
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.section}>
      <form className={styles.formCard} onSubmit={handleSubmit}>
        <h2>Rapportera Fångst</h2>
        
        <div className={styles.inputGroup}>
          <label>Fiskart</label>
          <select required>
            <option value="">Välj art...</option>
            <option value="gadda">Gädda</option>
            <option value="gos">Gös</option>
            <option value="abborre">Abborre</option>
            <option value="oring">Öring</option>
          </select>
        </div>

        <div className={styles.row}>
          <div className={styles.inputGroup}>
            <label>Vikt (kg)</label>
            <input type="number" step="0.1" placeholder="0.0" />
          </div>
          <div className={styles.inputGroup}>
            <label>Längd (cm)</label>
            <input type="number" placeholder="0" />
          </div>
        </div>

        <div className={styles.inputGroup}>
          <label>Plats (valfritt)</label>
          <input type="text" placeholder="t.ex. Norra viken" />
        </div>

        <div className={styles.inputGroup}>
          <label>Ladda upp bild</label>
          <input type="file" accept="image/*" style={{padding: '8px'}} />
        </div>

        <button type="submit" className={styles.submitBtn}>
          Spara Fångst
        </button>
      </form>
    </section>
  );
}