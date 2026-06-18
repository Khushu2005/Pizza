import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom'; // <--- IMPORT NAVIGATE
import styles from './ExploreMenu.module.scss';
import { FiArrowRight } from 'react-icons/fi';
import burger from '../../../../assets/images/burger.webp';
import pasta from '../../../../assets/images/pasta.webp';
import shake from '../../../../assets/images/shake.webp';

const categories = [
  { id: 1, title: "Gourmet Burgers", subtitle: "Juicy & Fresh", img: burger, theme: "light", category: "Burger" },
  { id: 2, title: "Artisanal Pasta", subtitle: "Authentic Italian", img: pasta, theme: "orange", category: "Pasta" },
  { id: 3, title: "Premium Shakes", subtitle: "Thick & Cold", img: shake, theme: "dark", category: "Shakes" }
];

const ExploreMenu = () => {
  const navigate = useNavigate(); // <--- NAVIGATE HOOK

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] } }
  };

  // Click handler
  const handleExplore = (category) => {
    navigate(`/menu?category=${category}`); // Query param ke sath navigate
  };

  return (
    <section className={styles.exploreSection}>
      <div className={`container ${styles.exploreContainer}`}>
        
        <motion.div className={styles.sectionHeader}>
          <span className={styles.scriptText}>Discover</span>
          <h2 className={styles.heavyText}>Beyond Pizza</h2>
          <p className={styles.subText}>Explore our handcrafted menu created with the same passion and premium ingredients.</p>
        </motion.div>

        <motion.div className={styles.cardsGrid} variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}>
          {categories.map((cat) => (
            <motion.div 
              key={cat.id} 
              className={`${styles.card} ${cat.theme === 'dark' ? styles.themeDark : cat.theme === 'orange' ? styles.themeOrange : styles.themeLight}`}
              variants={cardVariants}
              whileHover={{ y: -10 }}
            >
              <div className={styles.imageWrapper}>
                <img src={cat.img} alt={cat.title} />
              </div>
              
              <div className={styles.cardContent}>
                <span className={styles.subtitle}>{cat.subtitle}</span>
                <h3 className={styles.title}>{cat.title}</h3>
                
                {/* YAHAN CLICK HANDLER LAGA DIYA */}
                <button className={styles.exploreBtn} onClick={() => handleExplore(cat.category)}>
                  <FiArrowRight />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ExploreMenu;