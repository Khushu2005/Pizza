import React from 'react';
import { motion } from 'framer-motion';
import styles from './ArtOfPizza.module.scss';
import pizzaArt from '../../../../assets/images/pizzaart.webp';

const ArtOfPizza = () => {
  // Animations for a premium entry
  const slideInPizza = {
    hidden: { opacity: 0, x: -100, y: '-50%' },
    visible: { 
      opacity: 1, 
      x: '50%', // Mathematically stops exactly at the cut-line
      y: '-50%', 
      transition: { duration: 1.2, ease: [0.25, 1, 0.5, 1] } 
    }
  };

  const textStagger = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.15, duration: 0.8 } }
  };

  return (
    <section  id="about" className={styles.splitSection}>
      
      {/* Top Wave: Connects seamlessly with the Grey background of ExploreMenu */}
      <div className={styles.topWave}>
        <svg viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path fill="#DED9DF" d="M0,0L48,10.7C96,21,192,43,288,48C384,53,480,43,576,37.3C672,32,768,32,864,42.7C960,53,1056,75,1152,74.7C1248,75,1344,53,1392,42.7L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
        </svg>
      </div>

      <div className={styles.splitContainer}>
        
        {/* LEFT SIDE: The Mathematically Cut Pizza */}
        <div className={styles.leftCol}>
          <motion.img 
            /* Transparent premium pizza */
            src={pizzaArt} 
            alt="Authentic Pizza" 
            className={styles.halfPizza}
            variants={slideInPizza}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          />
        </div>

        {/* RIGHT SIDE: Massive Typography (Burger Image Style) */}
        <div className={styles.rightCol}>
          <motion.div 
            className={styles.textContent}
            variants={textStagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.span variants={textStagger} className={styles.eyebrow}>
              A U T H E N T I C
            </motion.span>

            <h2 className={styles.massiveTitle}>
              <motion.span variants={textStagger} className={styles.line}>WOOD</motion.span>
              <motion.span variants={textStagger} className={styles.line}>FIRED</motion.span>
              <motion.span variants={textStagger} className={styles.line}>PIZZA</motion.span>
            </h2>

            <motion.p variants={textStagger} className={styles.desc}>
              Baked at 400°C for that perfect leopard-spotted crust. Handcrafted daily with San Marzano tomatoes and locally sourced mozzarella.
            </motion.p>
            
            <motion.div variants={textStagger}>
              <button className={styles.ctaBtn}>READ OUR STORY</button>
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default ArtOfPizza;