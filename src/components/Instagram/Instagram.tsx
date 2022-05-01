import instaImageOne from '../../assets/instaImageOne.png';
import instaImageTwo from  '../../assets/instaImageTwo.png';
import instaImageThree from '../../assets/instaImageThree.png';
import instaImageFour from '../../assets/instaImageFour.png';
import instaImageFifth from '../../assets/instaImageFifth.png';

import './instagram.scss';

export function Instagram() {
    return (
        <section className='instagram'>
            <div className='instagram__heading'>
                <h2>Instagram</h2>
                <a href="/">+ Seguir</a>
            </div>

            <div className='instagram__galery'>
                <img src={instaImageOne} alt="Galeria de fotos" />
                <img src={instaImageTwo} alt="Galeria de fotos" />
                <img src={instaImageThree} alt="Galeria de fotos" />
                <img src={instaImageFour} alt="Galeria de fotos" />
                <img src={instaImageFifth} alt="Galeria de fotos" />
                <img src={instaImageOne} alt="Galeria de fotos" />
                <img src={instaImageTwo} alt="Galeria de fotos" />
            </div>
        </section>
    )
}