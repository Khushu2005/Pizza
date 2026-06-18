import React from 'react';
import styles from './Button.module.scss';
import { motion } from 'framer-motion';

const Button = ({ children, variant = 'primary', onClick, icon }) => {
  return (
    <motion.button 
      className={`${styles.btn} ${styles[variant]}`}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {icon && <span className={styles.icon}>{icon}</span>}
      {children}
    </motion.button>
  );
};

export default Button;