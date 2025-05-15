import React from 'react';
import { BrowserRouter } from 'react-router';
import './index.css';
import Navbar from './components/Navbar';
import Router from './router/Router';


function App() {
 
  return (
    <BrowserRouter>
      <Navbar />
      <Router />
    </BrowserRouter>
  );
}

export default App
