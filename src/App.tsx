import React from 'react';
import { Banner } from './components/Banner/Bnner';
import { Categories } from './components/Categories/Categories';
import { Header } from './components/Header/Header';

import './styles/global.scss'

function App() {
  return (
    <main className="App">
      <Header />
      <Banner />
      <Categories />
    </main>
  );
}

export default App;
