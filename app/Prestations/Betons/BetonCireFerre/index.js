import React from "react";
import "./index.scss";
import PresentationProduit from "@/app/Components/PresentationProduit";

export default function BetonCireFerre({ isLink = true, orientation }) {
  return (
    <>
      <PresentationProduit
        images={[
          "/IMG_3684.jpg",
          "/IMG_3684.jpg",
          "/IMG_3684.jpg",
          "/IMG_3684.jpg",
        ]}
        title='beton cire "ferre"'
        text="voici le beton cire ferre"
        link={isLink === true ? "BetonCireFerre" : undefined}
        orientation={orientation}
      />
    </>
  );
}
