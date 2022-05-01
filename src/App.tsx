import React from 'react';
import { Banner } from './components/Banner/Bnner';
import { Categories } from './components/Categories/Categories';
import { Header } from './components/Header/Header';
import { Brands } from './components/Brands/Brands';
import { Products } from './components/Products/Products';
import { Signature } from './components/Signature/Signature';

import './styles/global.scss'

function App() {
  return (
    <main className="App">
      <Header />
      <Banner />
      <Categories />
      <Products />
      <Brands />
      <Signature />
    </main>
  );
}

export default App;
