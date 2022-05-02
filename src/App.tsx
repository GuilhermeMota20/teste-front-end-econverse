import React from 'react';
import { Banner } from './components/Banner/Bnner';
import { Categories } from './components/Categories/Categories';
import { Header } from './components/Header/Header';
import { Brands } from './components/Brands/Brands';
import { Products } from './components/Products/Products';
import { Signature } from './components/Signature/Signature';
import { Blog } from './components/Blog/Blog';
import { Instagram } from './components/Instagram/Instagram';

import './styles/global.scss'
import { Subscription } from './components/Subscription/Subscription';

function App() {
  return (
    <main className="App">
      <Header />
      <Banner />
      <Categories />
      <Products />
      <Brands />
      <Signature />
      <Blog />
      <Instagram />
      <Subscription />
    </main>
  );
}

export default App;
