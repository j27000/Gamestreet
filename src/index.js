import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ProductProvider } from './Context';
import { CartProvider } from './Context';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>

      <ProductProvider>
        <CartProvider>
          <ToastContainer />
          <App />

        </CartProvider>
      </ProductProvider>

    </Router>
  </React.StrictMode>
);