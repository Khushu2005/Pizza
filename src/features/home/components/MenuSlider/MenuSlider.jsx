import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useNavigate } from 'react-router-dom'; // <--- IMPORT NAVIGATE
import styles from './MenuSlider.module.scss';
import { FiArrowRight } from 'react-icons/fi';

// YAHAN APNA UNIVERSAL MODAL IMPORT KIYA HAI
import OrderModal from '../../../../components/OrderModal/OrderModal'; 

const defaultPizzaImg = "https://freepngimg.com/thumb/pizza/35-pizza-png-image.png";

const menuItems = [
  { id: 1, scriptTitle: "Margarita", heavyTitle: "Classic", price: "299", oldPrice: "349", desc: "San Marzano tomatoes, fresh mozzarella, basil.", img: defaultPizzaImg, theme: "light" },
  { id: 2, scriptTitle: "Pepperoni", heavyTitle: "Feast", price: "399", oldPrice: "449", desc: "Double pepperoni, mozzarella, rich tomato sauce.", img: defaultPizzaImg, theme: "light" },
  { id: 3, scriptTitle: "Farmhouse", heavyTitle: "Veggie", price: "199", oldPrice: "249", desc: "Mushrooms, onions, capsicum, tomatoes, sweet corn.", img: defaultPizzaImg, theme: "orange" },
  { id: 4, scriptTitle: "Chicken", heavyTitle: "Tikka", price: "349", oldPrice: "399", desc: "Spiced chicken tikka, jalapeños, onions, mozzarella.", img: defaultPizzaImg, theme: "orange" },
  { id: 5, scriptTitle: "Truffle", heavyTitle: "Mushroom", price: "499", oldPrice: "549", desc: "Wild mushrooms, truffle oil, white garlic base.", img: defaultPizzaImg, theme: "orange" }
];

const MenuSlider = () => {
  const navigate = useNavigate(); // <--- INITIALIZE NAVIGATE
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  
  const xCards = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);
  const waveBottomX = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  // POPUP STATE
  const [selectedPizza, setSelectedPizza] = useState(null);

  return (
    <section ref={targetRef} className={styles.scrollSection}>
      
      <div className={styles.stickyContainer}>
        
        {/* FRAMER MOTION SLIDING TRACK */}
        <motion.div style={{ x: xCards }} className={styles.horizontalTrack}>
          {menuItems.map((item) => (
            <div key={item.id} className={`${styles.card} ${item.theme === 'orange' ? styles.cardOrange : styles.cardLight}`}>
              <div className={styles.imageContainer}>
                <img src={item.img} alt={item.heavyTitle} className={styles.pizzaImg} />
                <div className={styles.priceTag}>
                  <span className={styles.priceLabel}>PRICE</span>
                  <span className={styles.priceValue}>₹{item.price}/-</span>
                  <span className={styles.oldPrice}>₹{item.oldPrice}/-</span>
                </div>
              </div>

              <div className={styles.cardContent}>
                <div className={styles.titleGroup}>
                  <span className={styles.scriptTitle}>{item.scriptTitle}</span>
                  <h3 className={styles.heavyTitle}>{item.heavyTitle}</h3>
                </div>
                <p className={styles.ingredients}>{item.desc}</p>
                
                <button className={styles.orderBtn} onClick={() => setSelectedPizza(item)}>
                  ORDER NOW
                </button>
                
                {/* EXPLORE MORE NAVIGATE FIX */}
                <div className={styles.exploreText} onClick={() => navigate('/menu')}>
                  EXPLORE MORE <FiArrowRight />
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* BOTTOM WAVE */}
        <motion.div style={{ x: waveBottomX }} className={styles.bottomWave}>
          <svg viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path fill="#DED9DF" d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
          </svg>
        </motion.div>

      </div>

      {/* UNIVERSAL POPUP MODAL */}
      <OrderModal 
        isOpen={!!selectedPizza} 
        onClose={() => setSelectedPizza(null)} 
        pizza={selectedPizza} 
      />

    </section>
  );
};

export default MenuSlider;