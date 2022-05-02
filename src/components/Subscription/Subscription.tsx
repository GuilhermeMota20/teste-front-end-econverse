import dogForm from '../../assets/dogForm.png';

import './subscription.scss';

export function Subscription() {
    return (
        <section className="subscription">
            <img src={dogForm} alt="dog escondido" />

            <div className="subscription__form">
                <div>
                    <h2>Se inscreva para receber novidades e promoções</h2>
                    <input className='user' type="text" placeholder="Digite seu nome" />
                    <input className='email' type="email" placeholder="Digite seu e-mail" />
                    <button>Enviar</button>
                </div>
            </div>
        </section>
    )
}