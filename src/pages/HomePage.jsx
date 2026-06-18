import React from 'react';
import Home from '../features/home/Home';

const HomePage = () => {
  return (
    // Kal ko agar tujhe SEO tags (React Helmet) ya Page Transition 
    // animations lagani hongi, toh tu unhe yahan wrap karega.
    // Filhal ke liye bas Home ko return kar de.
    <Home />
  );
};

export default HomePage;