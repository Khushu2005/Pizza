import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import './styles/globals.scss';

function App() {
  return (
    <Router>
      <main>
        <AppRoutes />
      </main>
    </Router>
  );
}

export default App;