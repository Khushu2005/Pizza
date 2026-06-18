import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom'; // <--- IMPORT THIS
import { FiMenu, FiX, FiSearch } from 'react-icons/fi';
import { PiChefHatFill } from 'react-icons/pi'; 

import styles from './Navbar.module.scss';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  // SECTION SCROLL FUNCTION
  const handleScroll = (id) => {
    setIsOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } } };
  const linkVariants = { hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } };

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navContainer}>
          
          <motion.ul className={styles.desktopLinks} variants={navVariants} initial="hidden" animate="visible">
            <motion.li variants={linkVariants}><a onClick={() => navigate('/')}>Home</a></motion.li>
            <motion.li variants={linkVariants}><a onClick={() => navigate('/menu')}>Menu</a></motion.li>
            <motion.li variants={linkVariants}><a onClick={() => handleScroll('about')}>About</a></motion.li>
            <motion.li variants={linkVariants}><a onClick={() => handleScroll('contact')}>Contact</a></motion.li>
          </motion.ul>

          <motion.div className={styles.navRight} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
            <div className={styles.searchBar}>
              <input type="text" placeholder="Explore tastes..." />
              <FiSearch className={styles.searchIcon} />
            </div>
            <button className={styles.hamburgerBtn} onClick={toggleMenu}>
              <PiChefHatFill />
            </button>
          </motion.div>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div className={styles.mobileMenu} initial={{ opacity: 0, y: '-100%' }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: '-100%' }} transition={{ duration: 0.4, ease: "easeInOut" }}>
            <div className={styles.menuHeader}>
              <div></div>
              <button className={styles.closeBtn} onClick={toggleMenu}><FiX /></button>
            </div>
            <ul className={styles.menuLinks}>
              <li><a onClick={() => { navigate('/'); setIsOpen(false); }}>Home</a></li>
              <li><a onClick={() => { navigate('/menu'); setIsOpen(false); }}>Menu</a></li>
              <li><a onClick={() => handleScroll('about')}>About</a></li>
              <li><a onClick={() => handleScroll('contact')}>Contact</a></li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;