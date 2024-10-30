import React from 'react'
import "./style.scss"
import BurgerMenu from '../Components/BurgerMenu';

const Devis = () => {
    return (
        <body>
            <BurgerMenu />
            <div>Devis-Contact</div>
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

                <label htmlFor="oui">Oui
                    <input type="radio" name="ascenseur" id="oui" />
                </label>

                <label htmlFor="non">Non
                    <input type="radio" name="ascenseur" id="non" />
                </label>


                <label htmlFor="date">Date souhaitée du projet</label>
                <input type="text" name="date" id="date" />

                <label htmlFor="surface_totale">Surface totale en m²</label>
                <input type="text" name="surface_totale" id="surface_totale" />


                <label htmlFor="surface_mur">Surface des murs </label>
                <input type="text" name="surface_mur" id="surface_mur" />


                <label htmlFor="surface_sol">Surface du sol </label>
                <input type="text" name="surface_sol" id="surface_sol" />


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
        </body>
    )
};

export default Devis;