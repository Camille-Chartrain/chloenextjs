import React from "react";
import "./style.scss";
import Link from "next/link";
import LinkForm from "@/app/Components/LinkForm/page";
import BetonCireClassic from "./BetonCireClassic";
import BetonCireFerre from "./BetonCireFerre";
import BetonCireMineral from "./BetonCireMineral";

const betons = () => {
  return (
    <>
      <h2>BETONS CIRES</h2>
      <p className="intro_beton">
        Le béton ciré offre une finition unique, moderne et intemporelle. Avec son aspect lisse et raffiné, il s’intègre
        parfaitement dans vos intérieurs, qu’il s’agisse d’une maison
        contemporaine, d’un loft industriel ou d’un espace haut de gamme.
        Durable, esthétique et facile d’entretien, il est idéal pour tous vos
        lieux de vie : Sols, murs et plafonds Salles de bains Escaliers
        Mobiliers sur mesures Cuisines Voici ces différentes déclinaisons :
      </p>
      <div className="all_sections">
        <BetonCireClassic />
        <BetonCireFerre />
        <BetonCireMineral />
      </div>
      <LinkForm />
    </>
  );
};

export default betons;
