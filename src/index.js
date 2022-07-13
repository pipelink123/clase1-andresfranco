import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap';
import NavBar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import ItemCount from './components/ItemCount'




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <NavBar />
    <ItemListContainer />
    <ItemCount />

  </React.StrictMode>
);

