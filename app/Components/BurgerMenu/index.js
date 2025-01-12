"use client"
import { useState } from "react";
// import styles from "./BurgerMenu.module.css"; // Import du fichier CSS
import Link from 'next/link';
import "./style.scss"
const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen); // Inverse l'état du menu
        console.log("isOpen", isOpen);
    };

    const handleMouseEnter = () => {
        setIsOpen(true);
    };

    const handleMouseLeave = () => {
        setIsOpen(false);
    };

    return (
        <div className="burgerMenu">

            {/* Menu déroulant */}
            <nav className={`menu ${isOpen ? "open" : ""}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >

                <ul>
                    <li><Link href="/Prestations">TYPES DE PRESTATIONS</Link></li>
                    <li><Link href="/Realisations">RÉALISATIONS</Link></li>
                    <li><Link href="/Partenaires">PARTENAIRES</Link></li>
                    <li><Link href="/Devis">DEMANDE DE DEVIS</Link></li>
                </ul>
            </nav >

            <header className="burger_logo"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >

                <div
                    className="burgerIcon"
                    onClick={toggleMenu}

                >
                    {/* Affiche les lignes de l'icône burger conditionnellement */}
                    {isOpen && (
                        <>
                            <div className="line line1"></div>
                            <div className="line line2"></div>
                            <div className="line line3"></div>
                        </>
                    )}
                    {!isOpen && (
                        <>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                        </>
                    )}
                </div>
                <h1>
                    <Link href="/" className='logo' aria-label="Retour à l'accueil"><img src="/cc_black.png" alt="logo chloé chartrain" className="img_CC"></img>CHLOÉ CHARTRAIN</Link>
                </h1>
            </ header>
        </div >
    );
};

export default BurgerMenu;
