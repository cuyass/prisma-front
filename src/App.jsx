import React from 'react';
import { BrowserRouter } from 'react-router';
import './index.css';
import Navbar from './components/Navbar';
import Router from './router/Router';
import RainbowBar from './components/Rainbow';


function App() {
 
  return (
    <BrowserRouter>
      <Navbar />
      <RainbowBar />
      <Router />
    </BrowserRouter>
  );
}

export default App
