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
                <div className={`line ${isOpen ? "line1" : ""}`}></div>
                <div className={`line ${isOpen ? "line2" : ""}`}></div>
                <div className={`line ${isOpen ? "line3" : ""}`}></div>
            </div>

            {/* Menu déroulant */}
            <nav className={`menu ${isOpen ? "open" : ""}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <ul>
                    <li><Link href="/Devis">Devis-Contact</Link></li>
                    <li><Link href="/Prestations">Types-de-prestations</Link></li>
                    <li><Link href="/Realisations">Réalisations</Link></li>
                    <li><Link href="/Partenaires">Partenaires</Link></li>
                </ul>
            </nav >
        </div >
    );
};

export default BurgerMenu;
