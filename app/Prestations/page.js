import React from 'react';
import BurgerMenu from '../Components/BurgerMenu';

const prestations = () => {
    return (
        <>
            <BurgerMenu />
            <div>Prestations</div>
            <h2>Les bétons</h2>
            <ul>
                <li>Béton ciré</li>
                <li>Béton mural</li>
                <li>Béton texture</li>
            </ul>

            <h2>Les chaux</h2>
            <ul>
                <li>Chaux lissée</li>
                <li>Chaux brossée</li>
                <li>Chaux ferrée</li>
                <li>Enduit de chaux</li>
            </ul>
        </>
    )
}

export default prestations