import React from "react";
import "./style.scss";
import Link from "next/link";

const Footer = () => {
    return (
        <div className="lien">

            <Link href="/PolitiqueConfidentialite" className="liens">Politique de confidentialité</Link>
            <Link href="/MentionsLegales" className="liens">Mention légale</Link>

        </div>
    );
};

export default Footer;
