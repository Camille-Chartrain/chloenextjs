import React from "react";
import "./style.scss";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="lien">

            <Link href="/PolitiqueConfidentialite" className="liens">Politique de confidentialité</Link>

            <Link href="/MentionsLegales" className="liens">Mentions légales
            </Link>

            <Link href="/" className="liens">Accueil
            </Link>

            <Link href="/Devis" className="liens">Demande de devis
            </Link>

            <Link href="/Prestations" className="liens">Types de prestations
            </Link>

            <Link href="/Realisations" className="liens">Réalisations
            </Link>

        </footer>
    );
};

export default Footer;
