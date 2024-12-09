import React from 'react';
import "./style.scss";
// import "./devis.module.scss";
import BurgerMenu from '../Components/BurgerMenu';
import DevisForm from './components/Form';


const Devis = () => {

    return (
        <div className='devis'>
            <div className='burger_logo'>
                <BurgerMenu />
            </div>
            <main className="main">
                <h2>DEVIS - CONTACT</h2>
                <DevisForm />
            </main >
        </div>
    )
};

export default Devis;