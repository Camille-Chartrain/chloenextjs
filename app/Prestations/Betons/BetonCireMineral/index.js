import React from "react";
import "./index.scss";
import PresentationProduit from "@/app/Components/PresentationProduit";

export default function BetonCireMineral({ isLink = true, orientation }) {
  return (
    <>
      <PresentationProduit
        images={[
          "/IMG_3684.jpg",
          "/IMG_3684.jpg",
          "/IMG_3684.jpg",
          "/IMG_3684.jpg",
        ]}
        title='beton cire "mineral"'
        text="voici le beton cire mineral"
        link={isLink === true ? "BetonCireMineral" : undefined}
        orientation={orientation}
      />
    </>
  );
}
