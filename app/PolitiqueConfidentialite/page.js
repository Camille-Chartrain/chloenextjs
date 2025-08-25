import React from "react";
import "./style.scss";
import Link from "next/link";

const PolitiqueConfidentialite = () => {
    return (
        <p className="">
            Politique de confidentialité

            Dernière mise à jour : [date]

            Nous attachons une grande importance à la protection de vos données personnelles.
            La présente politique explique quelles informations nous collectons, dans quel but et comment elles sont traitées.

            1. Données collectées

            Dans le cadre de nos formulaires de contact ou de demande de devis, nous pouvons être amenés à collecter les informations suivantes :

            Nom et prénom

            Adresse e-mail

            Numéro de téléphone

            Adresse postale

            Toute autre information transmise volontairement dans le message

            2. Finalité de la collecte

            Ces données sont utilisées uniquement pour :

            répondre à votre demande,

            établir un devis,

            vous recontacter si nécessaire.

            Nous ne transmettons jamais vos données à des tiers, sauf obligation légale.

            3. Conservation des données

            Les informations reçues par e-mail sont conservées uniquement le temps nécessaire au traitement de votre demande, puis supprimées au plus tard [X mois – ex : 6 mois] après le dernier contact.

            4. Sécurité

            Nous mettons en place toutes les mesures nécessaires pour protéger vos informations personnelles.
            Vos données sont transmises via une connexion sécurisée HTTPS et ne sont pas stockées dans une base de données.

            5. Vos droits

            Conformément au RGPD, vous disposez des droits suivants :

            droit d’accès à vos données,

            droit de rectification,

            droit de suppression,

            droit de limiter ou refuser le traitement.

            Pour exercer vos droits, vous pouvez nous contacter à l’adresse suivante :
            📧 [ton email]

            6. Cookies

            Notre site n’utilise pas de cookies à des fins publicitaires ou de suivi.
            Seuls les cookies strictement nécessaires au bon fonctionnement du site peuvent être utilisés.

            7. Responsable du traitement

            Le responsable du traitement des données est :
            [Ton nom / ta société]
            📍 [Ton adresse]
            📧 [Ton email]

        </p>
    );
};

export default PolitiqueConfidentialite;
