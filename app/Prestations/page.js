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

                <Link href="/Prestations/EnduitsDecoratifs/">
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
                    <h3>LES ENDUITS DECORATIFS</h3>
                </Link>
            </div>
            <aside className='note'>
                TOUS NOS MATIERES SONT DISPONIBLES DANS DE NOMBREUSES TEINTES.
            </aside>
            <section className='durabilite'>
                <p className='title'>
                    DURABILITE
                </p>
                <p className='text'>
                    Le béton ciré est reconnu pour sa grande résistance et son élégance intemporelle. Cependant, il est essentiel de comprendre que le béton ciré et les enduits décoratifs sont des revêtements minces qui suivent fidèlement le support sur lequel ils sont appliqués.
                </p>
                <p className='text'>
                    Nos maisons vivent : les structures se dilatent, la terre bouge et de légères microfissures peuvent apparaître. Ce phénomène n’est pas un défaut des matières mais le résultat naturel des mouvements du bâtiment et des supports.
                </p>
                <p className='text'>
                    La prévention passe par une préparation rigoureuse du support et l’utilisation de produits de qualité. Néanmoins, envisager la possibilité de fissuration fait partie d’une approche réaliste et responsable. Un béton ciré bien posé et bien entretenu reste un revêtement durable, esthétique et unique qui évolue avec votre habitat.
                </p>

            </section>
        </>
    )
}

export default prestations