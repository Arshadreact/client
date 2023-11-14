import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import Product4 from './components/Product';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <Router>
    <Routes>
        <Route exact path="/" element={<App />} />
        <Route exact path="/product/:id" element={<Product4   />} />
    </Routes>
</Router>

);

