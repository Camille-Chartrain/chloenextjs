"use client"
import "./index.scss"
import BurgerMenu from './Components/BurgerMenu';
import React from "react";

export default function Home() {
  return (
    <div className="background">
      {/* <BurgerMenu /> */}
      <div className="background-video">
        <video autoPlay muted loop>
          <source src="/beige_video.mp4" type="video/mp4" />
          Votre navigateur ne supporte pas les vidéos HTML5.
        </video>
        <div className="content">
          <BurgerMenu />
          {/* <h1>Texte au-dessus de la vidéo</h1> */}

        </div>
      </div>
      <div className="intro">
        <div>
          A propos de nous :
        </div>
        <div>
          Artisane spécialisée dans le béton ciré depuis plus de cinq ans, je mets mon expertise au service des projets les plus exigeants.
          Formée en France et forte d’une culture du détail et d’un goût prononcé pour les matériaux nobles, je conçois chaque réalisation comme une pièce unique. Mon souhait est de penser pour durer et sublimer l’espace.
        </div>
        <div>
          J’offre aux architectes, designers, hôteliers et particuliers un savoir-faire alliant rigueur, esthétique et passion du détail.
        </div>
        <div>
          Parce que chaque espace mérite une finition qui lui est propre, je travaille aussi d’autres enduits décoratifs raffinés : enduits de chaux fines, marmorino, béton mural texturé… Ces revêtements sur mesure permettent d’explorer une palette plus large des sensations, tout en conservant une cohérence esthétique forte.
        </div>
        <div>
          Nous ne travaillons pas simplement la matière, nous façonnons une atmosphère. Chaque projet est une quête d’excellence où texture, volume et lumière s’unissent pour créer des espaces brutes, singuliers et profondément habités.
        </div>
      </div>
    </div >
  );
}
