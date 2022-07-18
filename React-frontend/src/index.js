import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css'
ReactDOM.render(
  <React.StrictMode>
    <>
      <App />
    </>

  </React.StrictMode>,
  document.getElementById('root')
);

