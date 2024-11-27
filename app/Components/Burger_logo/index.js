"use client"
import Link from 'next/link';
import "./style.scss";
import BurgerMenu from '../BurgerMenu';

const Burger_logo = () => {

    return (
        <div className="burger_logo">
            <BurgerMenu className="burger" />
            <Link href="/" className='logo'>CHLOE CHARTRAIN</Link>
        </div>
    );
};

export default Burger_logo;

