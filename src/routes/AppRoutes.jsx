import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import Menu from '../features/Menu/Menu';
// Import other pages as you build them

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/menu" element={<Menu />} />
      {/* <Route path="/menu" element={<MenuPage />} /> */}
    </Routes>
  );
};

export default AppRoutes;