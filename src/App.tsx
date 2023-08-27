import React from 'react';
import { Catalog } from './scenes/Catalog';
import { Cart } from './scenes/Cart';
import { Main } from './layouts/Main';
import { Routes, Route } from 'react-router-dom';
import './App.scss';

function App() {
  return (
    <Main>
      <Routes>
        <Route path="/" element={<Catalog />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </Main>
  );
}

export default App;
