"use client"
import React from 'react';
import { useState } from "react";

const DevisForm = () => {

    const [isSubmitted, setIsSubmitted] = useState(false); // État pour gérer l'affichage du formulaire
    const [loading, setLoading] = useState(false);

    async function handleSubmit(event) {
        event.preventDefault();
        setLoading(true);

        const formData = new FormData(event.target);
        // FormData est un objet spécialisé qui stocke les données du formulaire, mais son accès est limité (par exemple, avec .get() ou .entries()).

        // Liste des catégories
        const categories = ["murs", "plafonds", "sols"];

        // Structure des données
        const prestations = {};

        categories.forEach((category) => {
            prestations[category] = {
                support: formData.getAll(`type_support_${category}[]`), // Récupérer les supports cochés
                prestation: formData.getAll(`prestation_souhaitee_${category}[]`), // Récupérer les prestations cochées
            };
        });

        console.log("Données structurées :", prestations);

        // Convertir en objet pour les autres données
        // Object.fromEntries(formData) transforme les données en un objet JavaScript classique pour un traitement plus facile et plus flexible, notamment lorsqu'il s'agit de manipuler ou d'envoyer les données dans un format comme JSON.
        //     console.log("data", data);
        const otherData = Object.fromEntries(formData);
        delete otherData["type_support_murs[]"];
        delete otherData["prestation_souhaitee_murs[]"];
        delete otherData["type_support_plafonds[]"];
        delete otherData["prestation_souhaitee_plafonds[]"];
        delete otherData["type_support_sols[]"];
        delete otherData["prestation_souhaitee_sols[]"];

        // Inclure les prestations dans les données globales
        const data = { ...otherData, prestations };

        console.log("Données complètes :", data);

        try {

            // Envoyer les données au serveur
            const response = await fetch('/api/send_mail', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            const responseBody = await response.json(); // Extraire la réponse

            if (response.ok) {
                console.log('Email envoyé avec succès');
                setLoading(false);
                setIsSubmitted(true); // Passer l'état à true pour afficher message de validation
            }
            else {
                console.error('Erreur lors de la soumission du formulaire');
                console.log('erreur, dans le else du fetch');
                console.log('response', response);
                console.log('responseBody', responseBody);

                setLoading(false);

                // Envoyer les données d'erreur au serveur
                const errorResponse = await fetch('/api/error_mail', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        error: 'Erreur lors de l’envoi de l’email',
                        originalData: data,
                        responseStatus: response.status,
                        responseBody: responseBody,
                    }),
                });
                console.log('Response de /api/error_mail sans .json:', errorResponse);
                console.log('Response de /api/error_mail avaec .json:', await errorResponse.json());
            }
        }
        catch (error) {
            console.error('Erreur inattendue:', error);

            // Envoi de l'erreur critique
            await fetch('/api/error_mail', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    error: 'Exception dans handleSubmit',
                    originalData: data,
                    exception: error.message,
                }),
            });
        }

        setLoading(false);



    }

    return (

        <>
            {loading && <p className="loading">chargement...</p>}
            {!loading && isSubmitted && (
                <div className="success-message">
                    <h3>Merci pour votre message !</h3>
                    <p>Votre demande a bien été envoyée. Je vous contacterai sous peu.</p>
                </div>
            )}

            {!loading && !isSubmitted && (
                <form method="POST" onSubmit={handleSubmit}>

                    <div className="segment segment1">
                        <label htmlFor="lastname">Nom - Prénom <span className='etoile'>*</span> </label>
                        <input type="text" name="lastname" id="lastname" required />


                        <label htmlFor="email">Email <span className='etoile'>*</span> </label>
                        <input type="email" name="email" id="email" required multiple />

                        <label htmlFor="telephone">Téléphone </label>
                        <input type="tel" name="telephone" id="telephone" />


                        <label htmlFor="adresse">Adresse </label>
                        <input type="text" name="adresse" id="adresse" />

                        <label htmlFor="etage">Etage <span className='etoile'></span></label>
                        <input type="number" name="etage" id="etage" placeholder="ex: 2" />


                        <fieldset>
                            <legend>Ascenseur : <span className='etoile'></span></legend>
                            <div className='radio-group'>
                                <input type="radio" name="ascenseur" id="oui" value="oui" />
                                <label htmlFor="oui">Oui</label>

                                <input type="radio" name="ascenseur" id="non" value="non" />
                                <label htmlFor="non">Non</label>
                            </div>
                        </fieldset>

                        <fieldset>
                            <legend>Possibilité de parking gratuit : <span className='etoile'></span></legend>
                            <div className='radio-group'>
                                <input type="radio" name="parking" id="gratuit" value="gratuit" />
                                <label htmlFor="gratuit">Oui</label>

                                <input type="radio" name="parking" id="payant" value="payant" />
                                <label htmlFor="payant">Non</label>
                            </div>
                        </fieldset>

                        <label htmlFor="date">Date souhaitée du projet :</label>
                        <input type="date" name="date" id="date" />
                    </div>

                    <div className='segment'>
                        <p className='titre_segment'>Eléments concernés par votre projet : <span className='etoile'></span></p>

                        <fieldset className='fieldset1'>
                            <div className='open_menu'>

                                <input type='checkbox' id="menu_toggle_murs"></input>
                                <label htmlFor='menu_toggle_murs' className='label_menu_toggle'>
                                    <legend className='legend1 '>Murs</legend>
                                </label>

                                <div className='menu_murs'>
                                    <label htmlFor="surface_mur" className='label_surface'>Surface des murs (hauteur x Largeur en mètres) : <span className='etoile'></span></label>
                                    <input type="text" name="surface_mur" id="surface_mur" />
                                    <fieldset>
                                        <label htmlFor="type_support_mur" className='legend2'>Type de support : <span className='etoile'></span></label>
                                        <select id="type_support_mur" name="type_support_mur" className="checkbox_choices">

                                            <option value="carrelage_mur">Carrelage</option>
                                            <option value="placo_mur">Plaque de plâtre</option>
                                            <option value="pierre_brique_mur">Pierre- brique</option>
                                            <option value="beton_cellulaire_mur">Béton céllulaire</option>
                                            <option value="Parpaing_mur">Parpaing</option>
                                            <option value="plaque_ciment_mur">Plaque de ciment</option>
                                            <option value="autres">Autre</option>

                                        </select>
                                    </fieldset>

                                    <fieldset>
                                        <label htmlFor='prestation_souhaitee_mur' className='legend2'>Prestation souhaitée : <span className='etoile'></span></label>
                                        <select id="prestation_souhaitee_mur" name="prestation_souhaitee_mur" className="checkbox_choices">

                                            <option value="beton_cire">Béton ciré</option>
                                            <option value="placobeton_texture">Plaque de Béton texture</option>
                                            <option value="chaux_brossee">Chaux brossée</option>
                                            <option value="beton_cellulaire">Béton céllulaire</option>
                                            <option value="chaux_lissee">Chaux lissée</option>
                                            <option value="chaux_ferree">Chaux ferrée</option>
                                            <option value="enduit_chaux">Enduit de chaux</option>
                                            <option value="besoin_conseil">Besoin de conseil</option>

                                        </select>
                                    </fieldset>
                                </div>
                            </div>
                        </fieldset>


                        <fieldset className='fieldset1'>
                            <div className='open_menu'>

                                <input type='checkbox' id="menu_toggle_sols"></input>
                                <label htmlFor='menu_toggle_sols' className='label_menu_toggle'>
                                    <legend className='legend1 '>Sols</legend>
                                </label>

                                <div className='menu_murs'>
                                    <label htmlFor="surface_sol" className='label_surface'>Surface des sols (longueur x Largeur en mètres) : <span className='etoile'></span></label>
                                    <input type="text" name="surface_sol" id="surface_sol" />

                                    <fieldset>
                                        <label htmlFor="type_support_sol" className='legend2'>Type de support : <span className='etoile'></span></label>
                                        <select id="type_support_sol" name="type_support_sol" className="checkbox_choices">

                                            <option value="carrelage_sol">Carrelage</option>
                                            <option value="marbre">Marbre</option>
                                            <option value="ancien_beton_cire">Ancien béton ciré</option>
                                            <option value="chape_anhydrite">Chape anhydrite</option>
                                            <option value="chape_ciment">Chape ciment</option>
                                            <option value="calle_beton">Dalle béton</option>
                                            <option value="autres">Autre</option>

                                        </select>
                                    </fieldset>

                                    <fieldset>
                                        <label htmlFor='prestation_souhaitee_sol' className='legend2'>Prestation souhaitée : <span className='etoile'></span></label>
                                        <select id="prestation_souhaitee_sol" name="prestation_souhaitee_sol" className="checkbox_choices">

                                            <option value="beton_cire">Béton ciré</option>
                                            <option value="placobeton_texture">Béton texture</option>
                                            <option value="chaux_brossee">Chaux brossée</option>
                                            <option value="beton_cellulaire">Béton céllulaire</option>
                                            <option value="chaux_lissee">Chaux lissée</option>
                                            <option value="chaux_ferree">Chaux ferrée</option>
                                            <option value="enduit_chaux">Enduit de chaux</option>
                                            <option value="besoin_conseil">Besoin de conseil</option>

                                        </select>
                                    </fieldset>

                                </div>
                            </div>
                        </fieldset>

                        <fieldset className='fieldset1'>
                            <div className='open_menu'>

                                <input type='checkbox' id="menu_toggle_plafonds"></input>
                                <label htmlFor='menu_toggle_plafonds' className='label_menu_toggle'>
                                    <legend className='legend1 '>Plafonds</legend>
                                </label>

                                <div className='menu_murs'>

                                    <label htmlFor="surface_plafond" className='label_surface'>Surface des plafonds (longueur x Largeur en mètres) : <span className='etoile'></span></label>
                                    <input type="text" name="surface_plafond" id="surface_plafond" />

                                    <fieldset>
                                        <label htmlFor='type_support_plafond' className='legend2'>Type de support : <span className='etoile'></span></label>
                                        <select id="type_support_plafond" name="type_support_plafond" className="checkbox_choices">

                                            <option value="plaque_platre_plafonds">Plaque de plâtre</option>
                                            <option value="beton_brut_plafonds">Béton brut</option>
                                            <option value="autres">Autre</option>

                                        </select>

                                    </fieldset>

                                    <fieldset>
                                        <label htmlFor='prestation_souhaitee_plafonds' className='legend2'>Prestation :</label>
                                        <select id="prestation_souhaitee_plafonds" name="prestation_souhaitee_plafonds" className="checkbox_choices">

                                            <option value="beton_cire_plafonds">Béton ciré</option>

                                        </select>
                                    </fieldset>
                                </div>
                            </div>
                        </fieldset>

                        <fieldset className='fieldset1 last-fieldset'>
                            <div className='open_menu'>

                                <input type='checkbox' id="menu_toggle_mobilier"></input>
                                <label htmlFor='menu_toggle_mobilier' className='label_menu_toggle'>
                                    <legend className='legend1 '>Mobiliers - éléments</legend>
                                </label>

                                <div className='menu_murs'>

                                    <p>Il est possible d'enduire votre mobilier de béton ciré. </p>

                                    <label htmlFor="element">Précisez vos éléments à enduire (ex: meuble vasque,  table, niche, banquette...) ainsi que leur matériau :</label>
                                    <input type="text" name="element" id="element" />
                                </div>
                            </div>
                        </fieldset>

                    </div>

                    <div className='segment'>


                        <label htmlFor="message">Message :</label>
                        <textarea name="message" id="message" rows="12" cols="50"></textarea>
                        {/* cols ne sert pas puisque la width est indiquée en scss, il sert de valeur de secours pour des environnements très simples. */}
                    </div>

                    <button type="submit" name="valider">Envoyer ma demande de devis</button>

                </form >
            )}
        </>


    );
};

export default DevisForm;