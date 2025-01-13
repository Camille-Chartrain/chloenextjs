import React from 'react';
import "./style.scss";
// import "./devis.module.scss";
import BurgerMenu from '../Components/BurgerMenu';
import DevisForm from './components/DevisForm';


const Devis = () => {

    return (
        <div className='devis'>
            <div className='burger_logo'>
                <BurgerMenu />
            </div>
            <main className="main">
                <h2>DEMANDE DE DEVIS</h2>
                <DevisForm />
            </main >
        </div>
    )
};

export default Devis;