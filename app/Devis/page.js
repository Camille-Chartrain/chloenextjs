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
                        <label htmlFor="lastname">Nom </label>
                        <input type="text" name="lastname" id="lastname" />


                        <label htmlFor="firstname">Prénom </label>
                        <input type="text" name="firstname" id="firstname" />


                        <label htmlFor="adresse">Adresse </label>
                        <input type="text" name="adresse" id="adresse" />

                        <label htmlFor="etage">Etage</label>
                        <input type="text" name="etage" id="etage" />


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
                            <legend>Parking :</legend>
                            <div className='radio-group'>
                                <input type="radio" name="parking" id="gratuit" />
                                <label htmlFor="gratuit">Gratuit</label>

                                <input type="radio" name="parking" id="payant" />
                                <label htmlFor="payant">Payant</label>
                            </div>
                        </fieldset>

                        <label htmlFor="date">Date souhaitée du projet :</label>
                        <input type="text" name="date" id="date" />
                    </div>

                    <div className='segment'>

                        <fieldset className='fieldset1'>
                            <legend className='legend1'>MURS</legend>

                            <label htmlFor="surface_mur">Surface des murs (hauteur x Largeur en mètres) :</label>
                            <input type="text" name="surface_mur" id="surface_mur" />
                            <fieldset>
                                <legend className='legend2'>Type de support :</legend>

                                <div class="checkbox_choices">

                                    <input type="checkbox" id="carrelage" />
                                    <label for="carrelage">Carrelage</label>

                                    <input type="checkbox" id="placo" />
                                    <label for="placo">Placo</label>

                                    <input type="checkbox" id="mur_pierre" />
                                    <label for="mur_pierre">Mur en pierre</label>

                                    <input type="checkbox" id="beton_cellulaire" />
                                    <label for="beton_cellulaire">Béton cellulaire</label>

                                    <input type="checkbox" id="chape_ciment" />
                                    <label for="chape_ciment">Chape ciment</label>
                                </div>


                                <label htmlFor="autre_support" className='label_autre'>Autre
                                </label>
                                <input type="text" placeholder="Autre:"
                                    className="support" name="autre_support" id="autre_support" >
                                </input>
                            </fieldset>
                        </fieldset>


                        <fieldset className='fieldset1'>
                            <legend className='legend1'>SOLS</legend>

                            <label htmlFor="surface_sol">Surface des sols (longueur x Largeur en mètres) :</label>
                            <input type="text" name="surface_sol" id="surface_sol" />

                            <fieldset>
                                <legend className='legend2'>Type de support :</legend>

                                <div className="checkbox_choices">
                                    <div class="checkbox-label ">

                                        <label htmlFor="carrelage">Carrelage
                                        </label>

                                        <label htmlFor="placo">Placo
                                        </label>

                                        <label htmlFor="mur_pierre">Mur en pierre
                                        </label>

                                        <label htmlFor="chape_anhydrite">Chape anhydrite
                                        </label>

                                        <label htmlFor="chape_ciment">Chape ciment
                                        </label>
                                    </div>
                                    {/* <label htmlFor="autre_support" className='label_autre'>Autre
                                    </label>
                                    <input type="text" placeholder="Autre:"
                                        className="support" name="autre_support" id="autre_support" >
                                    </input> */}


                                    <div className="box">
                                        <input type="checkbox" name="support" id="carrelage" />
                                        <input type="checkbox" name="support" id="placo" />
                                        <input type="checkbox" name="support" id="mur_pierre" />
                                        <input type="checkbox" name="support" id="chape_anhydrite" />
                                        <input type="checkbox" name="support" id="chape_ciment" />
                                        {/* <input type="text" name="support" id="support" /> */}
                                    </div>
                                </div>

                                <label htmlFor="autre_support" className='label_autre'>Autre</label>
                                <input type="text" placeholder="Autre:"
                                    className="support" name="autre_support" id="autre_support" >
                                </input>

                            </fieldset>
                        </fieldset>

                        <fieldset className='fieldset1 last-fieldset'>

                            <legend className='legend1'>PLAFONDS</legend>

                            <label htmlFor="surface_plafond">Surface des plafonds (longueur x Largeur en mètres) :</label>
                            <input type="text" name="surface_plafond" id="surface_plafond" />

                        </fieldset>
                    </div>

                    <div className='segment'>
                        <label htmlFor="element">Précisez si vous avez des éléments à décorer (ex: meuble vasque, niche, banquette, etc) :</label>
                        <input type="text" name="element" id="element" />

                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="message" rows="12" cols="50"></textarea>
                        {/* cols ne sert pas puisque la width est indiquée en scss, il sert de valeur de secours pour des environnements très simples. */}
                    </div>

                    <button type="button" name="valider">Envoyer ma demande de devis</button>
                </form>
            </main >
        </>
    )
};

export default Devis;