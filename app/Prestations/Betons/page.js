import React from "react";
import "./style.scss";
import Link from "next/link";
import LinkForm from "@/app/Components/LinkForm/page";

const betons = () => {
  return (
    <>
      <h2>BETONS CIRES</h2>
      <p className="intro_beton">
        Vous recherchez une finition unique, moderne et intemporelle pour vos
        intérieurs ? Avec son aspect lisse et raffiné, le béton ciré s’intègre
        parfaitement dans tous les styles, qu’il s’agisse d’une maison
        contemporaine, d’un loft industriel ou d’un espace haut de gamme.
        Durable, esthétique et facile d’entretien, il est idéal pour tous vos
        lieux de vie : Sols, murs et plafonds Salles de bains Escaliers
        Mobiliers sur mesures Cuisines Voici ces différentes déclinaisons :
      </p>
      <div className="all_sections">


        <Link href="/Prestations/Betons/BetonCireClassic"
          className="section">

          <div className="duo_img">
            <img
              src={"/IMG_3684.jpg"}
              alt={"illustration de béton ciré"}
              className="image"
            />
            <img
              src={"/IMG_3684.jpg"}
              alt={"illustration de béton ciré"}
              className="image"
            />
          </div>

          <h3>BETON CIRE "CLASSIC"</h3>
          {/* <p>
                        Conseillée pour tous vos éléments, la finition « lissée » est légèrement nuancée. C’est l’une des plus réputées, notamment dans les intérieurs contemporains. Elle offre un rendu élégant.
                        Les nuances sont légères ou affirmées selon le choix de la teinte.
                    </p> */}
        </Link>

        <Link href="/Prestations/Betons/BetonCireMineral" className="section">

          <div className="duo_img">
            <img
              src={"/IMG_3684.jpg"}
              alt={"illustration de revêtement muraux"}
              className="image"
            />
            <img
              src={"/IMG_3684.jpg"}
              alt={"illustration de revêtement muraux"}
              className="image"
            />
          </div>

          <h3>BETON CIRE MINERAL</h3>
          {/* <p>
                        Un effet pierre qui laisse les pores du béton ciré ouvert.  Il est conseillé pour les murs et les plafonds et présente un rendu doux et nuageux..
                    </p> */}
        </Link>

        <Link href="/Prestations/Betons/BetonCireFerre" className="section">
          <div className="duo_img">
            <img
              src={"/IMG_3684.jpg"}
              alt={"illustration de béton ciré"}
              className="image"
            />
            <img
              src={"/IMG_3684.jpg"}
              alt={"illustration de béton ciré"}
              className="image"
            />
          </div>
          <h3>BETON CIRE FERRE</h3>
          {/* <p>
                        Des reflets marbrés donneront à votre matériau toute son authenticité. Selon l’outil utilisé, cet effet peut être plus ou moins accentué (effet réalisable sur murs, sols, plafonds, escaliers et mobiliers.)
                    </p> */}
        </Link>
      </div>
      <LinkForm />
    </>
  );
};

export default betons;
