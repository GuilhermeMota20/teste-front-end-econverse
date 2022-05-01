import React from 'react';
import { Banner } from './components/Banner/Bnner';
import { Categories } from './components/Categories/Categories';
import { Header } from './components/Header/Header';
import { Brands } from './components/Brands/Brands';

import './styles/global.scss'
import { Products } from './components/Products/Products';

function App() {
  return (
    <main className="App">
      <Header />
      <Banner />
      <Categories />
      <Products />
      <Brands />
    </main>
  );
}

export default App;
