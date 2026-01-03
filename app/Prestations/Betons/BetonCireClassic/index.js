import React from "react";
import "./index.scss";
import PresentationProduit from "@/app/Components/PresentationProduit";

export default function BetonCireClassic({ isLink = true, orientation }) {
  return (
    <>
      <PresentationProduit
        images={[
          "/IMG_3684.jpg",
          "/IMG_3684.jpg",
          "/IMG_3684.jpg",
          "/IMG_3684.jpg",
        ]}
        title='beton cire "classic"'
        text="voici le beton cire classic"
        link={isLink === true ? "BetonCireClassic" : undefined}
        orientation={orientation}
      />
    </>
  );
}
