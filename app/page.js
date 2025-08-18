"use client";
import "./index.scss";
import React from "react";

export default function Home() {
  return (
    <div className="background">
      <div className="background-video">
        <video autoPlay muted loop>
          <source src="/beige_video.mp4" type="video/mp4" />
          Votre navigateur ne supporte pas les vidéos HTML5.
        </video>

        <div className="content">
          {/* <h1>Texte au-dessus de la vidéo</h1> */}
        </div>
      </div>

      <div className="intro">
        <div className="intro_text">
          <span className="commentaires"> A propos de nous</span> :
        </div>
        <div className="intro_text">
          Artisane spécialisée dans le béton ciré depuis plus de cinq ans, je
          mets mon expertise au service des projets les plus exigeants. Formée
          en France et forte d’une culture du détail et d’un goût prononcé pour
          les matériaux nobles, je conçois chaque réalisation comme une pièce
          unique. Mon souhait est de penser pour durer et sublimer l’espace.
        </div>
        <div className="intro_text">
          J’offre aux architectes, designers, hôteliers et particuliers un
          savoir-faire alliant rigueur, esthétique et passion du détail.
        </div>
        <div className="intro_text">
          Parce que chaque espace mérite une finition qui lui est propre, je
          travaille aussi d’autres enduits décoratifs raffinés : enduits de
          chaux fines, marmorino, béton mural texturé… Ces revêtements sur
          mesure permettent d’explorer une palette plus large des sensations,
          tout en conservant une cohérence esthétique forte.
        </div>
        <div className="intro_text">
          Nous ne travaillons pas simplement la matière, nous façonnons une
          atmosphère. Chaque projet est une quête d’excellence où texture,
          volume et lumière s’unissent pour créer des espaces brutes, singuliers
          et profondément habités.
        </div>
      </div>

      <div className="logo_partenaires">
        <img
          src={"/MariusAurenti.svg"}
          alt={"logo Marius Aurenti"}
          className="image"
        />

        <img
          src={"/mirka.png"}
          alt={"illustration de revêtement muraux"}
          className="image"
        />

        <img
          src={"/OIP.jpeg"}
          alt={"illustration de revêtement muraux"}
          className="image"
        />
        <img
          src={"/OIP1.jpeg"}
          alt={"illustration de revêtement muraux"}
          className="image"
        />

        <img
          src={"/intuition.jpg"}
          alt={"illustration de revêtement muraux"}
          className="image"
        />

        <img
          src={"/festool.png"}
          alt={"illustration de revêtement muraux"}
          className="image"
        />
      </div>
    </div>
  );
}
