import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Menu.module.scss';
import Navbar from '../../components/Navbar/Navbar'; 
import { FiPhoneCall } from 'react-icons/fi';
import { makeCall } from '../../services/call';
import { useSearchParams } from 'react-router-dom';

// --- MOCK MENU DATA ---
const menuData = [
  { id: 1, name: "Classic Margarita", category: "Pizza", basePrice: 299, desc: "San Marzano tomatoes & fresh mozzarella.", img: "https://freepngimg.com/thumb/pizza/35-pizza-png-image.png" },
  { id: 2, name: "Pepperoni Feast", category: "Pizza", basePrice: 399, desc: "Double pepperoni with rich tomato sauce.", img: "https://freepngimg.com/thumb/pizza/35-pizza-png-image.png" },
  { id: 3, name: "Smash Cheeseburger", category: "Burger", basePrice: 199, desc: "Double patty, melted cheese, secret sauce.", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=500&auto=format&fit=crop" },
  { id: 4, name: "Spicy Chicken Burger", category: "Burger", basePrice: 249, desc: "Crispy fried chicken, jalapeños, lettuce.", img: "https://images.unsplash.com/photo-1615444641618-971fa84c1723?q=80&w=500&auto=format&fit=crop" },
  { id: 5, name: "Truffle Mushroom", category: "Pasta", basePrice: 349, desc: "Creamy white sauce, wild mushrooms, truffle oil.", img: "https://images.unsplash.com/photo-1621996316541-0154fb14285b?q=80&w=500&auto=format&fit=crop" },
  { id: 6, name: "Arrabbiata Penne", category: "Pasta", basePrice: 299, desc: "Spicy tomato sauce, fresh basil, parmesan.", img: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?q=80&w=500&auto=format&fit=crop" },
  { id: 7, name: "Oreo Thick Shake", category: "Shakes", basePrice: 149, desc: "Crushed oreos, vanilla ice cream, chocolate syrup.", img: "https://images.unsplash.com/photo-1572490122747-3968b75bb8fc?q=80&w=500&auto=format&fit=crop" },
  { id: 8, name: "Couple Combo", category: "Combo", basePrice: 699, desc: "1 Med Pizza, 1 Burger, 2 Shakes.", img: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=500&auto=format&fit=crop" }
];

const categories = ["All", "Pizza", "Burger", "Pasta", "Shakes", "Combo"];

// --- INDIVIDUAL CARD COMPONENT (Manages Size State) ---
const MenuCard = ({ item }) => {
  const sizes = ["Regular", "Medium", "Large", "XL"];
  const [selectedSize, setSelectedSize] = useState("Regular");

  // Dynamic Price Calculation
  const getPrice = () => {
    if (selectedSize === "Medium") return item.basePrice + 100;
    if (selectedSize === "Large") return item.basePrice + 200;
    if (selectedSize === "XL") return item.basePrice + 300;
    return item.basePrice; // Regular
  };

  return (
    <motion.div 
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.3 }}
      className={styles.menuCard}
    >
      <div className={styles.imageWrapper}>
        <img src={item.img} alt={item.name} />
      </div>
      
      <div className={styles.cardInfo}>
        <span className={styles.categoryBadge}>{item.category}</span>
        <h3 className={styles.itemName}>{item.name}</h3>
        <p className={styles.itemDesc}>{item.desc}</p>
        
        {/* INTERACTIVE SIZE SELECTOR */}
        <div className={styles.sizeSelector}>
          {sizes.map((size) => (
            <button 
              key={size} 
              className={`${styles.sizeBtn} ${selectedSize === size ? styles.activeSize : ''}`}
              onClick={() => setSelectedSize(size)}
            >
              {size === "Regular" ? "Reg" : size === "Medium" ? "Med" : size === "Large" ? "Lrg" : "XL"}
            </button>
          ))}
        </div>

        <div className={styles.priceRow}>
          <span className={styles.price}>₹{getPrice()}</span>
        </div>

        <button className={styles.orderBtn} onClick={() => makeCall()}>
          <FiPhoneCall className={styles.btnIcon} /> ORDER NOW
        </button>
      </div>
    </motion.div>
  );
};


const Menu = () => {
  const [searchParams] = useSearchParams();
  const categoryFromUrl = searchParams.get("category") || "All";
  const [activeTab, setActiveTab] = useState(categoryFromUrl);

  const filteredMenu = activeTab === "All" 
    ? menuData 
    : menuData.filter(item => item.category === activeTab);

  return (
    <div className={styles.menuPageWrapper}>
      <Navbar />

      <main className={`container ${styles.menuContainer}`}>
        
        {/* BOLD BLOCKY HEADING */}
        <motion.div 
          className={styles.headerSection}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className={styles.heavyTitle}> MENU</h1>
          <p className={styles.subText}>Handcrafted with love, just for you.</p>
        </motion.div>

        {/* TABS */}
        <div className={styles.tabsContainer}>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`${styles.tabBtn} ${activeTab === cat ? styles.activeTab : ''}`}
              onClick={() => setActiveTab(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* MENU GRID */}
        <motion.div layout className={styles.menuGrid}>
          <AnimatePresence>
            {filteredMenu.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </AnimatePresence>
        </motion.div>

      </main>
    </div>
  );
};

export default Menu;