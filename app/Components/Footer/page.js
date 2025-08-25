import React from "react";
import "./style.scss";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="lien">

            <Link href="/PolitiqueConfidentialite" className="liens">Politique de confidentialité</Link>
            <Link href="/MentionsLegales" className="liens">Mentions légales</Link>

        </footer>
    );
};

export default Footer;
