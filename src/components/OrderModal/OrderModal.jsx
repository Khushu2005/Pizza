import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './OrderModal.module.scss';
import { FiX, FiPhoneCall } from 'react-icons/fi';

// Dialer function jo tune diya tha
export const makeCall = (phone = "+919999999999") => {
  window.location.href = `tel:${phone}`;
};

const OrderModal = ({ isOpen, onClose, pizza }) => {
  // Agar modal open nahi hai ya pizza data pass nahi hua, toh kuch mat dikhao
  if (!pizza) return null;

  // Price calculation safely
  const regularPrice = parseInt(pizza.price.toString().replace(/\D/g, '')) || 299;
  const mediumPrice = regularPrice + 100;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className={styles.overlay} 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          exit={{ opacity: 0 }} 
          onClick={onClose} 
        >
          <motion.div 
            className={styles.modal} 
            initial={{ scale: 0.8, y: 50 }} 
            animate={{ scale: 1, y: 0 }} 
            exit={{ scale: 0.8, opacity: 0 }} 
            onClick={(e) => e.stopPropagation()} 
          >
            <button className={styles.closeBtn} onClick={onClose}>
              <FiX />
            </button>
            
            <h3>{pizza.heavyTitle}</h3>
            <p className={styles.modalSub}>{pizza.scriptTitle}</p>
            
            <div className={styles.sizeOptions}>
              <div className={styles.sizeCard}>
                <span>Regular</span>
                <b>₹{regularPrice}</b>
              </div>
              <div className={styles.sizeCard}>
                <span>Medium</span>
                <b>₹{mediumPrice}</b>
              </div>
            </div>

            {/* CALL ACTION BUTTON */}
            <button className={styles.callBtn} onClick={() => makeCall()}>
              <FiPhoneCall className={styles.callIcon}/> CALL TO ORDER
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default OrderModal;