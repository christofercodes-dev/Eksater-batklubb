"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

interface NavbarProps {
  forceSolid?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ forceSolid = false }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Funktion för att stänga menyn
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Om menyn är öppen vill vi oftast låsa skrollningen på sidan bakom
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const isSolid = isScrolled || forceSolid || isOpen;
  const navClasses = `${styles.navWrapper} ${isSolid ? styles.scrolled : ''} ${isOpen ? styles.menuOpen : ''}`;

  return (
    <nav className={navClasses}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo} onClick={closeMenu}>
          Eksäters Båtklubb
        </Link>

        <button 
          className={`${styles.hamburger} ${isOpen ? styles.hamburgerActive : ''}`} 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Meny"
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </button>

        <div className={`${styles.navContent} ${isOpen ? styles.navActive : ''}`}>
          <ul className={styles.navLinks}>
            <li>
              <Link href="/about" onClick={closeMenu}>Föreningen</Link>
            </li>
            <li>
              <Link href="/bryggan" onClick={closeMenu}>Bryggan</Link>
            </li>
            <li>
              <Link href="/#membership" onClick={closeMenu}>Medlemskap</Link>
            </li>
          </ul>
          
          <Link href="/contact" className={styles.cta} onClick={closeMenu}>
            Kontakta oss
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;