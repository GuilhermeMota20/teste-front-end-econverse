import { Banner } from './components/Banner/Bnner';
import { Categories } from './components/Categories/Categories';
import { Header } from './components/Header/Header';
import { Brands } from './components/Brands/Brands';
import { Products } from './components/Products/Products';
import { Signature } from './components/Signature/Signature';
import { Blog } from './components/Blog/Blog';
import { Instagram } from './components/Instagram/Instagram';
import { Subscription } from './components/Subscription/Subscription';
import { Footer } from './components/Footer/Footer';

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
      <Blog />
      <Instagram />
      <Subscription />
      <Footer />
    </main>
  );
}

export default App;
