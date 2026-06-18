import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom'; // <--- IMPORT THIS
import styles from './Home.module.scss';

// Global Components
import Navbar from '../../components/Navbar/Navbar'; 
import OrderModal from '../../components/OrderModal/OrderModal'; 

// Feature-specific Components
import MenuSlider from './components/MenuSlider/MenuSlider';
import ExploreMenu from './components/ExploreMenu/ExploreMenu';
import ArtOfPizza from './components/ArtOfPizza/ArtOfPizza';
import LocationOffer from './components/LocationOffer/LocationOffer';

import { FaStar, FaStarHalfAlt } from 'react-icons/fa'; 
import tomato from '../../assets/images/tomatos.png';
import basil from '../../assets/images/chili-basil.png';
import sauce from '../../assets/images/sauce.png';
import basilLeaf from '../../assets/images/basil.png';
import sauce2 from '../../assets/images/sauce2.png';

const Home = () => {
  const navigate = useNavigate(); // <--- INITIALIZE NAVIGATE
  const [isModalOpen, setIsModalOpen] = useState(false);

  const heroPizzaData = {
    heavyTitle: "Pizza",
    scriptTitle: "Classic",
    price: "299"
  };

  const leftSlide = {
    hidden: { opacity: 0, x: -80 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: [0.25, 1, 0.5, 1] } }
  };

  const rightSlide = {
    hidden: { opacity: 0, x: 80 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: [0.25, 1, 0.5, 1], delay: 0.2 } }
  };

  return (
    <div className={styles.homeWrapper}>
      <Navbar />

      <section id="/" className={styles.heroSection}>
        <div className={`container ${styles.heroContainer}`}>
          
          <motion.div className={styles.imageCol} variants={leftSlide} initial="hidden" animate="visible">
            <div className={styles.imageWrapper}>
              <img className={styles.mainPizza} src="https://freepngimg.com/thumb/pizza/35-pizza-png-image.png" alt="Wood Fired Pizza" />
              <img className={`${styles.scatterItem} ${styles.pos1}`} src={tomato} alt="Tomato" />
              <img className={`${styles.scatterItem} ${styles.pos2}`} src={basil} alt="Chilli" />
              <img className={`${styles.scatterItem} ${styles.pos3}`} src={sauce} alt="Dip" />
              <img className={`${styles.scatterItem} ${styles.pos5}`} src={sauce2} alt="Dip" />
              <img className={`${styles.scatterItem} ${styles.pos4}`} src={basilLeaf} alt="Basil Leaf" />
            </div>
          </motion.div>

          <motion.div className={styles.contentCol} variants={rightSlide} initial="hidden" animate="visible">
            <div className={styles.findFavBadge}>
              <span className={styles.badgeTop}>Find your</span>
              <strong className={styles.badgeBottom}>Favourite</strong>
            </div>

            <div className={styles.titleGroup}>
              <span className={styles.scriptTitle}>Classic</span>
              <h1 className={styles.heavyTitle}>Pizza</h1>
            </div>
            
            <div className={styles.ratings}>
              <div className={styles.stars}>
                <FaStar className={styles.starIcon} /><FaStar className={styles.starIcon} /><FaStar className={styles.starIcon} /><FaStar className={styles.starIcon} /><FaStarHalfAlt className={styles.starIcon} />
              </div>
              <span className={styles.ratingText}><strong>4.5</strong></span>
            </div>

            <div className={styles.commentBox}>
              <h4 className={styles.commentAuthor}>THE HOTEL OFFERED -</h4>
              <p className={styles.commentText}>
                An excellent experience with delicious and well-prepared food. 
                The ambiance was warm, elegant, and very inviting, making dining a pleasure.
              </p>
            </div>

            <div className={styles.btnGroup}>
              <button className={styles.orderBtn} onClick={() => setIsModalOpen(true)}>
                ORDER NOW
              </button>
              
              {/* EXPLORE MORE NAVIGATE FIX */}
              <button className={styles.exploreBtn} onClick={() => navigate('/menu')}>
                EXPLORE MORE
              </button>
            </div>

          </motion.div>
        </div>

        <div className={styles.waveContainer}>
          <svg viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path fill="#ffffff" d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      <MenuSlider />
      <ExploreMenu />
      <ArtOfPizza />
      <LocationOffer />

      <OrderModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        pizza={heroPizzaData} 
      />

    </div>
  );
};

export default Home;