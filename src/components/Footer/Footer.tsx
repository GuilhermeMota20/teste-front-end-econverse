import facebook from '../../assets/facebook.svg'; 
import instagram from '../../assets/instagram.svg'; 
import youtube from '../../assets/youtube.svg'; 
import phone from '../../assets/phone.svg';
import cardVisa from '../../assets/cardVisa.png';
import cardElo from '../../assets/cardElo.png'
import cardMaster from '../../assets/cardMaster.png';
import ticket from '../../assets/ticket.png';
import cardDiners from '../../assets/cardDiners.png';
import cardAmerican from '../../assets/cardAmerican.png';
import encrypt from '../../assets/encrypt.png';
import logoEconverse from '../../assets/logoEconverse.png';
import logoVtex from '../../assets/logoVtex.png';

import './footer.scss';

export function Footer() {
    return(
        <footer>
            <div className='firstColumn'>
                <h2>
                    Nos siga nas nossas 
                    <br /> 
                    redes sociais
                </h2>
                <ul>
                    <li>
                        <a href="/">
                            <img src={facebook} alt="Facebook" />
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <img src={instagram} alt="Instagram" />
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <img src={youtube} alt="Youtube" />
                        </a>
                    </li>
                </ul>
                <h2>Sobre O Cãoselheiro</h2>
                <p>
                Seja muito bem-vindo! O Cãoselheiro - a loja - é a loja online de uma empresa que nasceu para contribuir para uma melhor qualidade de vida dos cães e seus familiares humanos. Seus sócios são profissionais de educação canina que trabalham seguindo metodologias positivas de treinamento animal, encorajando e recompensando os acertos de nossos amigos em seus processos de adestramento. Aqui você encontrará apenas itens de qualidade comprovada e utilizados pessoalmente por seus idealizadores. Fique à vontade!
                </p>
            </div>

            <div className='lastColumn'>
                <div className='lastColumn__firstRow'>
                    <div>
                        <h2>Assinatura</h2>
                        <h2>Parceiros</h2>
                    </div>
                    <div>
                        <h2>Institucional</h2>
                        <ul>
                            <li>
                                <a href="/">Quem somos</a>
                            </li>
                            <li>
                                <a href="/">Política de privacidade</a>
                            </li>
                            <li>
                                <a href="/">Política comercial</a>
                            </li>
                            <li>
                                <a href="/">Política de devolução</a>
                            </li>
                            <li>
                                <a href="/">Regras de frete</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2>Atendimento</h2>
                        <ul>
                            <li>
                                <a href="/">Fale conosco</a>
                            </li>
                            <li>
                                <img src={phone} alt="Telefone" />
                                <a href="/">(11) 97212-1314</a>
                            </li>
                            <li>
                                <a href="/">ocaoselheiro@ocaoselheiro.com.br</a>
                            </li>
                            <li>
                                <a href="/">Trabalhe conosco</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='lastColumn__secondRow'>
                    <div>
                        <h2>Formas de pagamento</h2>
                        <div className='lastColumn__secondRow__cards'>
                            <img src={cardVisa} alt="Cartão Visa" />
                            <img src={cardElo} alt="Cartão Elo" />
                            <img src={cardMaster} alt="Cartão Mastercard" />
                            <img src={ticket} alt="Boleto" />
                            <img src={cardDiners} alt="Cartão Diners" />
                            <img src={cardAmerican} alt="Cartão American" />
                        </div>
                    </div>
                    <div>
                        <h2>Segurança</h2>
                        <img src={encrypt} alt="Segurança" />
                    </div>
                </div>

                <div className='lastColumn__lastRow'>
                    <span>
                        O Cãoselheiro Comércio LTDA <br />
                        CNPJ: 30.324.633/0001-16 <br />
                        © Todos os direitos reservados. 2021
                    </span>

                    <div>
                        <img src={logoEconverse} alt="Econverse" />
                        <img src={logoVtex} alt="VTEX" />
                    </div>

                </div>
            </div>
        </footer>
    )
}