
import shieldCheckIcon from '../../assets/ShieldCheck.svg';
import truckIcon from '../../assets/Truck.svg';
import CreditCardIcon from '../../assets/CreditCard.svg';
import boxIcon from '../../assets/Box.png';
import heartIcon from '../../assets/Heart.svg';
import userIcon from '../../assets/UserCircle.svg';
import cartIcon from '../../assets/ShoppingCart.svg';
import kingIcon from '../../assets/King.png';

import logo from '../../assets/logo.png';

import './header.scss';

export function Header() {
    return(
        <header className='heading'>
            <div className='heading__info'>
                <ul>
                    <li>
                        <img src={shieldCheckIcon} alt="Escudo" />
                        Compra &nbsp;<strong>100% segura</strong>
                    </li>
                    <li>
                        <img src={truckIcon} alt="Escudo" />
                        Compra &nbsp;<strong>100% segura</strong>
                    </li>
                    <li>
                        <img src={CreditCardIcon} alt="Escudo" />
                        Compra &nbsp;<strong>100% segura</strong>
                    </li>
                </ul>
            </div>

            <div className='heading__action'>
                <div>
                    <img src={logo} alt="logo" />
                    <input type="text" placeholder='O que você está buscando?' />
                </div>

                <ul>
                    <li><a href="/"> <img src={boxIcon} alt="Caixa" /> </a></li>
                    <li><a href="/"> <img src={heartIcon} alt="Favoritos" /> </a></li>
                    <li><a href="/"> <img src={userIcon} alt="Usuário" /> </a></li>
                    <li><a href="/"> <img src={cartIcon} alt="Carrinho de compras" /> </a></li>
                </ul>
            </div>

            <nav className='heading__navbar'>
                <ul>
                    <li><a href="/">Brincar</a></li>
                    <li><a href="/">Morder</a></li>
                    <li><a href="/">Comer</a></li>
                    <li><a href="/">Passear</a></li>
                    <li><a href="/">Casa e conforto</a></li>
                    <li><a href="/">Educação</a></li>
                    <li><a className='active' href="/">Ofertas</a></li>
                    <li><a href="/"> <img src={kingIcon} alt="Coroa" /> Coleção de outono </a></li>
                </ul>
            </nav>
        </header>
    )
}