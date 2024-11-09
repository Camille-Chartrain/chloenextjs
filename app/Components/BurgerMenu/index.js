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
        <div>
            {/* Icône burger */}
            <div
                className="burgerIcon"
                onClick={toggleMenu}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
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

            {/* Menu déroulant */}
            <nav className={`menu ${isOpen ? "open" : ""}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <div className="croix_logo">
                    <div>
                        <p>X</p>
                        {/* <div className="line line1"></div>
                        <div className="line line2"></div>
                        <div className="line line3"></div> */}
                    </div>
                    <Link href="/">CHLOE CHARTRAIN</Link>
                </div>
                <ul>
                    <li><Link href="/Devis">DEVIS-CONTACT</Link></li>
                    <li><Link href="/Prestations">TYPES DE PRESTATIONS</Link></li>
                    <li><Link href="/Realisations">RÉALISATIONS</Link></li>
                    <li><Link href="/Partenaires">PARTENAIRES</Link></li>
                </ul>
            </nav >
        </div >
    );
};

export default BurgerMenu;
