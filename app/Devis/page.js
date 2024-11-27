import React from 'react'
import "./style.scss"
import Burger_logo from '../Components/Burger_logo';

const Devis = () => {
    return (
        <body>
            <Burger_logo />
            <main className="main">
                <h2>Devis-Contact</h2>
                <form method="POST">
                    <label htmlFor="lastname">Nom </label>
                    <input type="text" name="lastname" id="lastname" />


                    <label htmlFor="firstname">Prénom </label>
                    <input type="text" name="firstname" id="firstname" />


                    <label htmlFor="adresse">Adresse </label>
                    <input type="text" name="adresse" id="adresse" />

                    <label htmlFor="etage">Etage</label>
                    <input type="text" name="etage" id="etage" />


                    <span>Ascenseur:</span>

                    <label htmlFor="oui">Oui </label>
                    <input type="radio" name="ascenseur" id="oui" />



                    <label htmlFor="non">Non</label>
                    <input type="radio" name="ascenseur" id="non" />



                    <label htmlFor="date">Date souhaitée du projet</label>
                    <input type="text" name="date" id="date" />


                    <label htmlFor="surface_mur">Surface des murs (hauteur x Largeur en mètres)</label>
                    <input type="text" name="surface_mur" id="surface_mur" />


                    <label htmlFor="surface_sol">Surface des sols (longueur x Largeur en mètres)</label>
                    <input type="text" name="surface_sol" id="surface_sol" />

                    <label htmlFor="surface_plafond">Surface des plafonds (longueur x Largeur en mètres)</label>
                    <input type="text" name="surface_plafond" id="surface_plafond" />

                    <label htmlFor="element">Précisez si vous avez des éléments à décorer (exemple: meuble vasque, niche, banquette, etc)</label>
                    <input type="text" name="element" id="element" />



                    <p>Type de support:</p>

                    <div class="checkbox">
                        <div class="checkbox-label ">

                            <label htmlFor="carrelage">Carrelage
                                {/* <!-- <input type="checkbox" name="support" id="carrelage" /> --> */}
                            </label>

                            <label htmlFor="placo">Placo
                                {/* <!-- <input type="checkbox" name="support" id="placo" /> --> */}
                            </label>

                            <label htmlFor="mur pierre">Mur en pierre
                                {/* <!-- <input type="checkbox" name="support" id="mur en pierre" /> --> */}
                            </label>

                            <label htmlFor="chape anhydrite">Chape anhydrite
                                {/* <!-- <input type="checkbox" name="support" id="chape anhydrite" /> --> */}
                            </label>

                            <label htmlFor="chape ciment">Chape ciment

                                {/* <!-- <input type="checkbox" name="support" id="chape ciment" /> --> */}
                            </label>

                            <label htmlFor="support">Autre
                                {/* <!-- <input type="text" name="support" id="support"> --> */}
                            </label>
                        </div>

                        <div class="box">
                            <input type="checkbox" name="support" id="carrelage" />
                            <input type="checkbox" name="support" id="placo" />
                            <input type="checkbox" name="support" id="mur en pierre" />
                            <input type="checkbox" name="support" id="chape anhydrite" />
                            <input type="checkbox" name="support" id="chape ciment" />
                            <input type="text" name="support" id="support" />
                        </div>
                    </div>
                    <button type="button" name="valider">Valider</button>
                </form>
            </main>
        </body>
    )
};

export default Devis;