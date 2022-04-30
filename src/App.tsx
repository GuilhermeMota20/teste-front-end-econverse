import React from 'react';
import { Banner } from './components/Banner/Bnner';
import { Header } from './components/Header/Header';

import './styles/global.scss'

function App() {
  return (
    <main className="App">
      <Header />
      <Banner />
    </main>
  );
}

export default App;
