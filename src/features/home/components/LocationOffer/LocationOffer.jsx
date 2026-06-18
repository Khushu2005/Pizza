import React from 'react';
import { motion } from 'framer-motion';
import styles from './LocationOffer.module.scss';
import { FiPhoneCall } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

// YAHAN TERI ALAG FILE SE FUNCTIONS IMPORT KIYE HAIN 🚀
// Path apni utility file ke hisaab se change kar lena
import { openWhatsApp, queryMessages,  } from '../../../../services/whatsapp';
import {makeCall} from '../../../../services/call'

const LocationOffer = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] } }
  };

  return (
    <section  id="contact" className={styles.locationSection}>
      
      {/* Wave matching the dark brown of the previous split-pizza section */}
      <div className={styles.topWave}>
        <svg viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path fill="#3A1F12" d="M0,0L48,10.7C96,21,192,43,288,48C384,53,480,43,576,37.3C672,32,768,32,864,42.7C960,53,1056,75,1152,74.7C1248,75,1344,53,1392,42.7L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
        </svg>
      </div>

      <div className={`container ${styles.container}`}>
        
        {/* --- PART 1: AESTHETIC LOCATION --- */}
        <div className={styles.infoGrid}>
          
          <motion.div 
            className={styles.infoCard}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <span className={styles.scriptText}>Visit the</span>
            <h2 className={styles.heavyText}>Flagship.</h2>
            
            {/* Aesthetic Editorial Address */}
            <div className={styles.editorialBlock}>
              <h3 className={styles.cityText}>NEW DELHI</h3>
              <p className={styles.streetText}>
                123 Crust Avenue, Food District<br/>
                ND 110001
              </p>
            </div>

            <div className={styles.editorialBlock}>
              <h3 className={styles.cityText}>HOURS</h3>
              <p className={styles.hoursText}>
                <span>Mon-Fri</span> 11:00 AM — 11:00 PM<br/>
                <span>Weekends</span> 11:00 AM — 01:00 AM
              </p>
            </div>
          </motion.div>

          <motion.div 
            className={styles.imageCard}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {/* Aesthetic Arched Window Image - Moody & Premium */}
            <img 
            src='https://i.pinimg.com/736x/85/92/f2/8592f2040b9ce4bf5366d04298dc818b.jpg'
              alt="Moody Restaurant Interior" 
            />
          </motion.div>
        </div>

        {/* --- PART 2: WAVY PROMO BANNER --- */}
        <motion.div 
          className={styles.wavyPromoBanner}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className={styles.promoContent}>
            <span className={styles.promoBadge}>SPECIAL OFFER</span>
            <h3>Craving Pizza Now?</h3>
            <p>Order directly with us via WhatsApp to skip the third-party apps and grab an exclusive <strong>10% OFF</strong> on your meal.</p>
          </div>
          
          <div className={styles.actionButtons}>
            
            {/* IMPORTED WHATSAPP FUNCTION */}
            <button 
              className={`${styles.actionBtn} ${styles.whatsappBtn}`}
              onClick={() => openWhatsApp(queryMessages.offer)}
            >
              <FaWhatsapp className={styles.btnIcon} /> WHATSAPP
            </button>
            
            {/* IMPORTED CALL FUNCTION */}
            <button 
              className={`${styles.actionBtn} ${styles.callBtn}`}
              onClick={() => makeCall()}
            >
              <FiPhoneCall className={styles.btnIcon} /> CALL NOW
            </button>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default LocationOffer;