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
    </div >
  );
}
