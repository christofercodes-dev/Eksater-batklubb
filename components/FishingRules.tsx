"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import styles from "./FishingRules.module.css";

const services = [
  { id: 1, label: "Hamnplatser", value: "60", unit: "platser" },
  { id: 2, label: "Klubbaktiviteter", value: "24/7", unit: "support" },
  { id: 3, label: "Medlemsförmåner", value: "Exklusiva", unit: "rabatter" },
];

export default function FishingRules() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [-20, 20]); // Subtil rotation
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]); // Fade in/out

  return (
    <section ref={ref} className={styles.section}>
      <motion.div style={{ opacity }} className={styles.overlayText}>
        <p className={styles.quote}>"Havet kallar, du svarar."</p>
      </motion.div>

      <div className={styles.container}>
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className={styles.header}
        >
          <span className={styles.subtitle}>EN UNIK UPPLEVELSE</span>
          <h2 className={styles.title}>Där <span>havet möter</span> gemenskap.</h2>
        </motion.div>

        <motion.div 
          className={styles.compassContainer}
          style={{ rotate }} // Använd rotation här!
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
        >
          <div className={styles.centerDot} />
          {services.map((service) => (
            <motion.div 
              key={service.id} 
              className={styles.serviceRingItem}
              data-cursor="magnify" // Fortsätter använda ditt förstoringsglas
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ duration: 0.8, delay: 0.5 + service.id * 0.15 }}
            >
              <span className={styles.serviceValue}>{service.value}</span>
              <span className={styles.serviceUnit}>{service.unit}</span>
              <span className={styles.serviceLabel}>{service.label}</span>
            </motion.div>
          ))}
          <div className={styles.compassNeedle} />
        </motion.div>

        <motion.p
          className={styles.cta}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <a href="/contact" className={styles.ctaButton} data-cursor="magnify">
            Utforska Medlemskap →
          </a>
        </motion.p>
      </div>
    </section>
  );
}