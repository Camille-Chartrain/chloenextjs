import React from "react";
import "./style.scss";
import BurgerMenu from "@/app/components/BurgerMenu";

const Realisations = () => {
  // Tableau des images à afficher
  const images = [
    "/IMG_3684.jpg",
    "/background_chloe.jpg",
    "/beton_cire.jpg",
    "/IMG_3684.jpg",
    "/background_chloe.jpg",
    "/beton_cire.jpg",
    "/IMG_3684.jpg",
    "/background_chloe.jpg",
    "/beton_cire.jpg",
    "/background_chloe.jpg",
  ];

  // Diviser les images en groupes de 3 (2 images côte à côte + 1 image en dessous)
  const imageGroups = [];
  for (let i = 0; i < images.length; i += 3) {
    imageGroups.push(images.slice(i, i + 3));
  }

  return (
    <>
      <BurgerMenu />
      <div className="realisations">
        {/* <div className='photos'> */}
        {/* Boucle sur chaque groupe d'images */}
        {imageGroups.map((group, groupIndex) => (
          <div key={groupIndex} className="photos">
            {/* Première rangée avec 2 images */}
            <div className="row">
              {group[0] && (
                <img
                  src={group[0]}
                  alt={`réalisation artisanat béton ciré ${groupIndex * 3 + 1}`}
                  className="image"
                />
              )}
              {group[1] && (
                <img
                  src={group[1]}
                  alt={`réalisation artisanat béton ciré ${groupIndex * 3 + 2}`}
                  className="image"
                />
              )}
            </div>

            {/* Seconde image qui occupe toute la largeur */}
            {group[2] && (
              <img
                src={group[2]}
                alt={`réalisation artisanat béton ciré ${groupIndex * 3 + 3}`}
                className="image full-width"
              />
            )}
          </div>
        ))}
        {/* </div> */}
      </div>
    </>
  );
};

export default Realisations;
