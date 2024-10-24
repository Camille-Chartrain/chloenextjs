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

    return (
        <div>
            {/* Icône burger */}
            <div className="burgerIcon" onClick={toggleMenu}>
                <div className={`line ${isOpen ? "line1" : ""}`}></div>
                <div className={`line ${isOpen ? "line2" : ""}`}></div>
                <div className={`line ${isOpen ? "line3" : ""}`}></div>
            </div>

            {/* Menu déroulant */}
            < nav className={`menu ${isOpen ? open : ""} `}>
                <ul >
                    {/* className={`burger ${ isOpen ? "burger" : "burgerClosed" } `} */}
                    <Link href="/Devis">Devis-Contact</Link>
                    <Link href="/Prestations">Types-de-prestations</Link>
                    <Link href="/Realisations">Réalisations</Link>
                    <Link href="/Partenaires">Partenaires</Link>
                </ul>
            </nav >
        </div >
    );
};

export default BurgerMenu;
