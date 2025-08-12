import React from 'react';
import BurgerMenu from '../Components/BurgerMenu';
import "./style.scss";
import Link from 'next/link';

const prestations = () => {
    return (
        <>
            <BurgerMenu />
            <h2>PRESTATIONS</h2>

            <div className='both_sections'>

                <Link href="/Prestations/Betons/">
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
                    <h3>LES BETONS CIRES</h3>
                </Link>

                <Link href="/Prestations/Revetements/">
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
                    <h3>LES REVETEMENTS MURAUX</h3>
                </Link>
            </div>
        </>
    )
}

export default prestations