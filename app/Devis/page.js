import React from 'react'
import "./style.scss"
import Burger_logo from '../Components/Burger_logo';

const Devis = () => {
    return (
        <>
            <Burger_logo />
            <main className="main">
                <h2>DEVIS - CONTACT</h2>

                <form method="POST">

                    <div className="segment segment1">
                        <label htmlFor="lastname">Nom - Prénom * </label>
                        <input type="text" name="lastname" id="lastname" />


                        <label htmlFor="email">Email * </label>
                        <input type="email" name="email" id="email" required multiple />


                        <label htmlFor="adresse">Adresse </label>
                        <input type="text" name="adresse" id="adresse" />

                        <label htmlFor="etage">Etage</label>
                        <input type="number" name="etage" id="etage" placeholder="ex: 2" />


                        <fieldset>
                            <legend>Ascenseur :</legend>
                            <div className='radio-group'>
                                <input type="radio" name="ascenseur" id="oui" />
                                <label htmlFor="oui">Oui</label>

                                <input type="radio" name="ascenseur" id="non" />
                                <label htmlFor="non">Non</label>
                            </div>
                        </fieldset>

                        <fieldset>
                            <legend>Possibilité de parking gratuit : *</legend>
                            <div className='radio-group'>
                                <input type="radio" name="parking" id="gratuit" />
                                <label htmlFor="gratuit">Oui</label>

                                <input type="radio" name="parking" id="payant" />
                                <label htmlFor="payant">Non</label>
                            </div>
                        </fieldset>

                        <label htmlFor="date">Date souhaitée du projet :</label>
                        <input type="date" name="date" id="date" />
                    </div>

                    <div className='segment'>
                        <p>Eléments concernées par votre projet : *</p>

                        <fieldset className='fieldset1'>
                            <div className='open_menu'>

                                <input type='checkbox' id="menu_toggle_murs"></input>
                                <label htmlFor='menu_toggle_murs' className='label_menu_toggle'>
                                    <legend className='legend1 '>MURS</legend>
                                </label>

                                <div className='menu_murs'>
                                    <label htmlFor="surface_mur">Surface des murs (hauteur x Largeur en mètres) : *</label>
                                    <input type="text" name="surface_mur" id="surface_mur" />
                                    <fieldset>
                                        <legend className='legend2'>Type de support : *</legend>

                                        <div className="checkbox_choices">

                                            <input type="checkbox" id="carrelage" />
                                            <label htmlFor="carrelage">Carrelage</label>

                                            <input type="checkbox" id="placo" />
                                            <label htmlFor="placo">Plaque de plâtre</label>

                                            <input type="checkbox" id="mur_pierre" />
                                            <label htmlFor="mur_pierre">Mur en pierre - brique</label>

                                            <input type="checkbox" id="beton_cellulaire" />
                                            <label htmlFor="beton_cellulaire">Béton cellulaire</label>

                                            <input type="checkbox" id="chape_ciment" />
                                            <label htmlFor="chape_ciment">Parpaing</label>

                                            <input type="checkbox" id="chape_ciment" />
                                            <label htmlFor="chape_ciment">Plaque de ciment</label>
                                        </div>


                                        <label htmlFor="autre_support" className='label_autre'>Autre
                                        </label>
                                        <input type="text" placeholder="Autre:"
                                            className="support" name="autre_support" id="autre_support" >
                                        </input>
                                    </fieldset>

                                    <fieldset>
                                        <legend className='legend2'>Prestation souhaitée : *</legend>

                                        <div className="checkbox_choices">

                                            <input type="checkbox" id="carrelage" />
                                            <label htmlFor="carrelage">Béton ciré</label>

                                            <input type="checkbox" id="placo" />
                                            <label htmlFor="placo">Béton texture</label>

                                            <input type="checkbox" id="mur_pierre" />
                                            <label htmlFor="mur_pierre">Chaux brossée</label>

                                            <input type="checkbox" id="beton_cellulaire" />
                                            <label htmlFor="beton_cellulaire">Chaux lissée</label>

                                            <input type="checkbox" id="chape_ciment" />
                                            <label htmlFor="chape_ciment">Chaux ferrée</label>

                                            <input type="checkbox" id="chape_ciment" />
                                            <label htmlFor="chape_ciment">Enduit de chaux</label>

                                            <input type="checkbox" id="chape_ciment" />
                                            <label htmlFor="chape_ciment">Besoin de conseil</label>
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
                                    <label htmlFor="surface_sol">Surface des sols (longueur x Largeur en mètres) : *</label>
                                    <input type="text" name="surface_sol" id="surface_sol" />

                                    <fieldset>
                                        <legend className='legend2'>Type de support : *</legend>

                                        <div className="checkbox_choices">

                                            <input type="checkbox" name="support" id="carrelage2" />
                                            <label htmlFor="carrelage2">Carrelage </label>

                                            <input type="checkbox" name="support" id="placo2" />
                                            <label htmlFor="placo2">Marbre</label>

                                            <input type="checkbox" name="support" id="mur_pierre2" />
                                            <label htmlFor="mur_pierre2">Ancien béton ciré</label>

                                            <input type="checkbox" name="support" id="chape_anhydrite2" />
                                            <label htmlFor="chape_anhydrite2">Chape anhydrite</label>

                                            <input type="checkbox" name="support" id="chape_ciment2" />
                                            <label htmlFor="chape_ciment2">Chape ciment </label>

                                            <input type="checkbox" name="support" id="chape_ciment2" />
                                            <label htmlFor="chape_ciment2">Dalle béton </label>
                                        </div>

                                        <label htmlFor="autre_support2" className='label_autre'>Autre</label>
                                        <input type="text" placeholder="Autre:"
                                            className="support" name="autre_support" id="autre_support2" >
                                        </input>

                                    </fieldset>

                                    <fieldset>
                                        <legend className='legend2'>Prestation souhaitée : *</legend>

                                        <div className="checkbox_choices">

                                            <input type="checkbox" id="carrelage" />
                                            <label htmlFor="carrelage">Béton ciré</label>

                                            <input type="checkbox" id="placo" />
                                            <label htmlFor="placo">Béton texture</label>

                                            <input type="checkbox" id="mur_pierre" />
                                            <label htmlFor="mur_pierre">Chaux brossée</label>

                                            <input type="checkbox" id="beton_cellulaire" />
                                            <label htmlFor="beton_cellulaire">Chaux lissée</label>

                                            <input type="checkbox" id="chape_ciment" />
                                            <label htmlFor="chape_ciment">Chaux ferrée</label>

                                            <input type="checkbox" id="chape_ciment" />
                                            <label htmlFor="chape_ciment">Enduit de chaux</label>

                                            <input type="checkbox" id="chape_ciment" />
                                            <label htmlFor="chape_ciment">Besoin de conseil</label>
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

                                    <label htmlFor="surface_plafond">Surface des plafonds (longueur x Largeur en mètres) : *</label>
                                    <input type="text" name="surface_plafond" id="surface_plafond" />

                                    <fieldset>
                                        <legend className='legend2'>Type de support : *</legend>

                                        <div className="checkbox_choices">

                                            <input type="checkbox" name="support" id="carrelage2" />
                                            <label htmlFor="carrelage2">Plaque de plâtre</label>

                                            <input type="checkbox" name="support" id="placo2" />
                                            <label htmlFor="placo2">Béton brut</label>

                                        </div>

                                        <label htmlFor="autre_support2" className='label_autre'>Autre</label>
                                        <input type="text" placeholder="Autre:"
                                            className="support" name="autre_support" id="autre_support2" >
                                        </input>

                                    </fieldset>

                                    <fieldset>
                                        <legend className='legend2'>Prestation souhaitée : *</legend>

                                        <div className="checkbox_choices">

                                            <input type="checkbox" id="carrelage" />
                                            <label htmlFor="carrelage">Béton ciré</label>
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

                                    <label htmlFor="element">Précisez vos éléments à enduire (ex: meuble vasque,  table, niche, banquette, etc) :</label>
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

                    <button type="button" name="valider">Envoyer ma demande de devis</button>
                </form >
            </main >
        </>
    )
};

export default Devis;