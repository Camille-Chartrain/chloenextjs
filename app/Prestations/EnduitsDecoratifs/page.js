import React from 'react';
import BurgerMenu from '../../Components/BurgerMenu';
import "./style.scss";
import Link from 'next/link';

const EnduitsDecoratifs = () => {
    return (
        <>
            <BurgerMenu />
            <h2>ENDUITS DECORATIFS</h2>

            <div className='all_sections'>

                <div className='section'>
                    <div className='duo_img'>
                        <img
                            src={'/IMG_3684.jpg'}
                            alt={'illustration de béton ciré'}
                            className='image'
                        />
                        <img
                            src={'/IMG_3684.jpg'}
                            alt={'illustration de béton ciré'}
                            className='image'
                        />
                    </div>
                    <h3>BETON MURAL "CLASSIC"</h3>
                    {/* <p>
                        Cet enduit est plus fin que le béton ciré. Il est uniquement décoratif. <span className='commentaires'>(ca veut dire quoi)</span>
                        Doux au toucher, il offre un rendu lisse et nuageux. Son effet patiné et chic lui apporte toute son élégance.
                    </p> */}
                </div>

                <div className='section'>
                    <div className='duo_img'>
                        <img
                            src={'/IMG_3684.jpg'}
                            alt={'illustration de revêtement muraux'}
                            className='image'
                        />
                        <img
                            src={'/IMG_3684.jpg'}
                            alt={'illustration de revêtement muraux'}
                            className='image'
                        />
                    </div>
                    <h3>BETON MURAL "TEXTURE"</h3>
                    {/* <p>
                        Son rendu industriel, brut, texturé et pleins de petites cavités saura vous ravir pour vos créations à l’esthétique brutaliste. Il est uniquement destiné pour des projets décoratifs.<span className='commentaires'>idem</span>
                    </p> */}
                </div>

                <div className='section'>
                    <div className='duo_img'>
                        <img
                            src={'/IMG_3684.jpg'}
                            alt={'illustration de béton ciré'}
                            className='image'
                        />
                        <img
                            src={'/IMG_3684.jpg'}
                            alt={'illustration de béton ciré'}
                            className='image'
                        />
                    </div>
                    <h3>ENDUIT DE CHAUX MARMORINO</h3>
                    {/* <p>
                        Naturel et écologique, sans solvant, ni composés organiques volatiles.
                        Aspect élégant, souvent marbré ou nuagé, il a la capacité d’offrir une finition minérale haut de gamme.
                    </p> */}
                </div>


                <Link href="/Prestations/EnduitsDecoratifs/ChauxFine" className='section'>
                    <div className='duo_img'>
                        <img
                            src={'/IMG_3684.jpg'}
                            alt={'illustration de béton ciré'}
                            className='image'
                        />
                        <img
                            src={'/IMG_3684.jpg'}
                            alt={'illustration de béton ciré'}
                            className='image'
                        />
                    </div>
                    <h3>ENDUIT DE CHAUX FINE</h3>
                    {/* <p>
                        Très onctueuse et souple. Elle se décline en 3 finitions.
                    </p> */}
                    {/* <p className='link'>
                        Voir plus
                    </p> */}
                </Link>

            </div >
        </>
    )
}

export default EnduitsDecoratifs