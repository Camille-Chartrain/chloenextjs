"use client"
import Link from 'next/link';
import "./style.scss";
import BurgerMenu from '../BurgerMenu';

const Burger_logo = () => {

    return (
        <header className="burger_logo">
            <BurgerMenu className="burger" />
            <h1>
                <Link href="/" className='logo' aria-label="Retour à l'accueil">CHLOE CHARTRAIN</Link>
            </h1>
        </header>
    );
};

export default Burger_logo;

