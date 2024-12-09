"use client"
import React from 'react';

const DevisForm = () => {

    async function handleSubmit(event) {
        event.preventDefault();

        // Récupérer les données du formulaire
        const formData = new FormData(event.target);
        // FormData est un objet spécialisé qui stocke les données du formulaire, mais son accès est limité (par exemple, avec .get() ou .entries()).

        const prestations = formData.getAll('prestation_souhaitee_sols[]'); // Tableau des valeurs cochées
        console.log(prestations);

        // Convertir en objet pour un traitement plus simple
        const data = Object.fromEntries(formData);
        // Object.fromEntries(formData) transforme les données en un objet JavaScript classique pour un traitement plus facile et plus flexible, notamment lorsqu'il s'agit de manipuler ou d'envoyer les données dans un format comme JSON.
        console.log("data", data);

        // Envoyer les données à l'API Next.js
        const response = await fetch('/api/send-email', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            console.log('Email envoyé avec succès !');
        } else {
            console.error('Échec de l\'envoi de l\'email.');
        }
    }

    return (

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

                <label htmlFor="etage">Etage</label>
                <input type="number" name="etage" id="etage" placeholder="ex: 2" />


                <fieldset>
                    <legend>Ascenseur :</legend>
                    <div className='radio-group'>
                        <input type="radio" name="ascenseur" id="oui" value="oui" />
                        <label htmlFor="oui">Oui</label>

                        <input type="radio" name="ascenseur" id="non" value="non" />
                        <label htmlFor="non">Non</label>
                    </div>
                </fieldset>

                <fieldset>
                    <legend>Possibilité de parking gratuit : <span className='etoile'>*</span></legend>
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
                <p className='titre_segment'>Eléments concernés par votre projet : <span className='etoile'>*</span></p>

                <fieldset className='fieldset1'>
                    <div className='open_menu'>

                        <input type='checkbox' id="menu_toggle_murs"></input>
                        <label htmlFor='menu_toggle_murs' className='label_menu_toggle'>
                            <legend className='legend1 '>MURS</legend>
                        </label>

                        <div className='menu_murs'>
                            <label htmlFor="surface_mur" className='label_surface'>Surface des murs (hauteur x Largeur en mètres) : <span className='etoile'>*</span></label>
                            <input type="text" name="surface_mur" id="surface_mur" />
                            <fieldset>
                                <legend className='legend2'>Type de support : <span className='etoile'>*</span></legend>

                                <div className="checkbox_choices">

                                    <input type="checkbox" id="carrelage" name='type_support_murs[]' value='carrelage_mur' />
                                    <label htmlFor="carrelage">Carrelage</label>

                                    <input type="checkbox" id="placo" name='type_support_murs[]' value='placo' />
                                    <label htmlFor="placo">Plaque de plâtre</label>

                                    <input type="checkbox" id="mur_pierre" name='type_support_murs[]' value='pierre_brique_murs' />
                                    <label htmlFor="mur_pierre">Pierre - brique</label>

                                    <input type="checkbox" id="beton_cellulaire" name='type_support_murs[]' value='beton_cellulaire_murs' />
                                    <label htmlFor="beton_cellulaire">Béton cellulaire</label>

                                    <input type="checkbox" id="parpaing" name='type_support_murs[]' value='parpaing_murs' />
                                    <label htmlFor="parpaing">Parpaing</label>

                                    <input type="checkbox" id="plaque_ciment" name='type_support_murs[]' value='plaque_ciment_murs' />
                                    <label htmlFor="plaque_ciment">Plaque de ciment</label>
                                </div>


                                <label htmlFor="autre_support_murs" className='label_autre'>Autre
                                </label>
                                <input type="text" placeholder="Autre:"
                                    className="support" name="autre_support_murs" id="autre_support_murs" >
                                </input>
                            </fieldset>

                            <fieldset>
                                <legend className='legend2'>Prestation souhaitée : <span className='etoile'>*</span></legend>

                                <div className="checkbox_choices">

                                    <input type="checkbox" id="beton_cire" name='prestation_souhaitee_murs[]' value='beton_cire_murs' />
                                    <label htmlFor="beton_cire">Béton ciré</label>

                                    <input type="checkbox" id="beton_texture" name='prestation_souhaitee_murs[]' value='beton_texture_murs' />
                                    <label htmlFor="beton_texture">Béton texture</label>

                                    <input type="checkbox" id="chaux_brossee" name='prestation_souhaitee_murs[]' value='chaux_brossee_murs' />
                                    <label htmlFor="chaux_brossee">Chaux brossée</label>

                                    <input type="checkbox" id="chaux_lissee" name='prestation_souhaitee_murs[]' value='chaux_lissee_murs' />
                                    <label htmlFor="chaux_lissee">Chaux lissée</label>

                                    <input type="checkbox" id="chaux_ferree" name='prestation_souhaitee_murs[]' value='chaux_ferre_murs' />
                                    <label htmlFor="chaux_ferree">Chaux ferrée</label>

                                    <input type="checkbox" id="enduit_de_chaux" name='prestation_souhaitee_murs[]' value='enduit_de_chaux_murs' />
                                    <label htmlFor="enduit_de_chaux">Enduit de chaux</label>

                                    <input type="checkbox" id="besoin_conseil_murs" name='prestation_souhaitee_murs[]' value='besoin_conseil_murs' />
                                    <label htmlFor="besoin_conseil_murs">Besoin de conseil</label>
                                </div>
                            </fieldset>
                        </div>
                    </div>
                </fieldset>


                <fieldset className='fieldset1'>
                    <div className='open_menu'>

                        <input type='checkbox' id="menu_toggle_sols"></input>
                        <label htmlFor='menu_toggle_sols' className='label_menu_toggle'>
                            <legend className='legend1 '>SOLS</legend>
                        </label>

                        <div className='menu_murs'>
                            <label htmlFor="surface_sol" className='label_surface'>Surface des sols (longueur x Largeur en mètres) : <span className='etoile'>*</span></label>
                            <input type="text" name="surface_sol" id="surface_sol" />

                            <fieldset>
                                <legend className='legend2'>Type de support : <span className='etoile'>*</span></legend>

                                <div className="checkbox_choices">

                                    <input type="checkbox" name='type_support_sols[]' value=" carrelage_sols" id="carrelage_sols" />
                                    <label htmlFor="carrelage_sols">Carrelage </label>

                                    <input type="checkbox" name='type_support_sols[]' value="marbre_sols" id="marbre_sols" />
                                    <label htmlFor="marbre_sols">Marbre</label>

                                    <input type="checkbox" name='type_support_sols[]' value="ancien_beton_cire_sols" id="ancien_beton_cire_sols" />
                                    <label htmlFor="ancien_beton_cire_sols">Ancien béton ciré</label>

                                    <input type="checkbox" name='type_support_sols[]' value="chape_anhydrite_sols" id="chape_anhydrite_sols" />
                                    <label htmlFor="chape_anhydrite_sols">Chape anhydrite</label>

                                    <input type="checkbox" name='type_support_sols[]' value="chape_ciment_sols" id="chape_ciment_sols" />
                                    <label htmlFor="chape_ciment_sols">Chape ciment </label>

                                    <input type="checkbox" name='type_support_sols[]' value="dalle_beton_sols" id="dalle_beton_sols" />
                                    <label htmlFor="dalle_beton_sols">Dalle béton </label>
                                </div>

                                <label htmlFor="autre_support_sols" className='label_autre'>Autre</label>
                                <input type="text" placeholder="Autre:"
                                    className="support" name="autre_support_sols" id="autre_support_sols" >
                                </input>

                            </fieldset>

                            <fieldset>
                                <legend className='legend2'>Prestation souhaitée : <span className='etoile'>*</span></legend>

                                <div className="checkbox_choices">

                                    <input type="checkbox" name='prestation_souhaitee_sols[]' value='beton_cire_sols' id="beton_cire_sols" />
                                    <label htmlFor="beton_cire_sols">Béton ciré</label>

                                    <input type="checkbox" name='prestation_souhaitee_sols[]' value='beton_texture_sols' id="beton_texture_sols" />
                                    <label htmlFor="beton_texture_sols">Béton texture</label>

                                    <input type="checkbox" name='prestation_souhaitee_sols[]' value='chaux_brossee_sols' id="chaux_brossee_sols" />
                                    <label htmlFor="chaux_brossee_sols">Chaux brossée</label>

                                    <input type="checkbox" name='prestation_souhaitee_sols[]' value='chaux_lissee_sols' id="chaux_lissee_sols" />
                                    <label htmlFor="chaux_lissee_sols">Chaux lissée</label>

                                    <input type="checkbox" name='prestation_souhaitee_sols[]' value='chaux_ferree_sols' id="chaux_ferree_sols" />
                                    <label htmlFor="chape_cichaux_ferree_solsment">Chaux ferrée</label>

                                    <input type="checkbox" name='prestation_souhaitee_sols[]' value='enduit_chaux_sols' id="enduit_chaux_sols" />
                                    <label htmlFor="enduit_chaux_sols">Enduit de chaux</label>

                                    <input type="checkbox" name='prestation_souhaitee_sols[]' value='besoin_conseil_sols' id="besoin_conseil_sols" />
                                    <label htmlFor="besoin_conseil_sols">Besoin de conseil</label>
                                </div>

                            </fieldset>
                        </div>
                    </div>
                </fieldset>

                <fieldset className='fieldset1'>
                    <div className='open_menu'>

                        <input type='checkbox' id="menu_toggle_plafonds"></input>
                        <label htmlFor='menu_toggle_plafonds' className='label_menu_toggle'>
                            <legend className='legend1 '>PLAFONDS</legend>
                        </label>

                        <div className='menu_murs'>

                            <label htmlFor="surface_plafond" className='label_surface'>Surface des plafonds (longueur x Largeur en mètres) : <span className='etoile'>*</span></label>
                            <input type="text" name="surface_plafond" id="surface_plafond" />

                            <fieldset>
                                <legend className='legend2'>Type de support : <span className='etoile'>*</span></legend>

                                <div className="checkbox_choices">

                                    <input type="checkbox" name='type_support_plafonds[]' value="plaque_platre_plafonds" id="plaque_platre_plafonds" />
                                    <label htmlFor="plaque_platre_plafonds">Plaque de plâtre</label>

                                    <input type="checkbox" name='type_support_plafonds[]' value="beton_brut_plafonds" id="beton_brut_plafonds" />
                                    <label htmlFor="beton_brut_plafonds">Béton brut</label>

                                </div>

                                <label htmlFor="autre_support_plafonds" className='label_autre'>Autre</label>
                                <input type="text" placeholder="Autre:"
                                    className="support" name="autre_support_plafonds" id="autre_support_plafonds" >
                                </input>

                            </fieldset>

                            <fieldset>
                                <legend className='legend2'>Prestation :</legend>

                                <div className="checkbox_choices">

                                    <input type="checkbox" id="beton_cire_plafonds" name='prestation_plafonds' value='beton_cire_plafonds' />
                                    <label htmlFor="beton_cire_plafonds">Béton ciré</label>
                                </div>
                            </fieldset>
                        </div>
                    </div>
                </fieldset>

                <fieldset className='fieldset1 last-fieldset'>
                    <div className='open_menu'>

                        <input type='checkbox' id="menu_toggle_mobilier"></input>
                        <label htmlFor='menu_toggle_mobilier' className='label_menu_toggle'>
                            <legend className='legend1 '>MOBILIER - ELEMENTS</legend>
                        </label>

                        <div className='menu_murs'>

                            <p>Il est possible d'enduire vos meubles </p>

                            <label htmlFor="element">Précisez vos éléments à enduire (ex: meuble vasque,  table, niche, banquette, etc) : <span className='etoile'>*</span></label>
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
    );
};

export default DevisForm;