import React from "react";
import "./style.scss";
import Link from "next/link";

const PolitiqueConfidentialite = () => {
    return (
        <section className="politics">
            <h4>Politique de confidentialité</h4>

            <p>Dernière mise à jour : [date]</p>

            <p>
                Nous attachons une grande importance à la protection de vos données personnelles.
                La présente politique explique quelles informations nous collectons, dans quel but et comment elles sont traitées.
            </p>

            <h5>1. Données collectées</h5>

            <p>
                Dans le cadre de nos formulaires de contact ou de demande de devis, nous pouvons être amenés à collecter les informations suivantes :
            </p>

            <ul>
                <li>- Nom et prénom</li>
                <li>- Adresse e-mail</li>
                <li>- Numéro de téléphone</li>
                <li>- Adresse postale</li>
                <li>- Toute autre information transmise volontairement dans le message</li>

            </ul>



            <h5>2. Finalité de la collecte</h5>

            <p> Ces données sont utilisées uniquement pour :</p>

            <ul>
                <li>- répondre à votre demande,</li>
                <li>- établir un devis,</li>
                <li>- vous recontacter si nécessaire.</li>
            </ul>

            <p>Nous ne transmettons jamais vos données à des tiers, sauf obligation légale.</p>


            <h5>3. Conservation des données</h5>

            <p>
                Les informations reçues par e-mail sont conservées uniquement le temps nécessaire au traitement de votre demande, puis supprimées au plus tard [X mois – ex : 6 mois] après le dernier contact.
            </p>

            <h5>4. Sécurité</h5>

            <p>
                Nous mettons en place toutes les mesures nécessaires pour protéger vos informations personnelles.
                Vos données sont transmises via une connexion sécurisée HTTPS et ne sont pas stockées dans une base de données.
            </p>

            <h5>5. Vos droits</h5>

            <p>Conformément au RGPD, vous disposez des droits suivants:</p>

            <ul>
                <li>- droit d’accès à vos données,</li>
                <li>- droit de rectification,</li>
                <li>- droit de suppression,</li>
                <li>- droit de limiter ou refuser le traitement.</li>
            </ul>

            <p>
                Pour exercer vos droits, vous pouvez nous contacter à l’adresse suivante:
                📧[ton email]
            </p>

            <h5> 6. Cookies</h5>

            <p>
                Notre site n’utilise pas de cookies à des fins publicitaires ou de suivi.
                Seuls les cookies strictement nécessaires au bon fonctionnement du site peuvent être utilisés.
            </p>

            <h5>7. Responsable du traitement</h5>

            <p>
                Le responsable du traitement des données est:
                Chloé Chartrain
                📍[Ton adresse]
                📧[Ton email]
            </p>

        </section >
    );
};

export default PolitiqueConfidentialite;
