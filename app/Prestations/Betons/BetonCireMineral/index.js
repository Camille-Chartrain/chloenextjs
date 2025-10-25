import React from "react";
import "./style.scss";
import PresentationProduit from "@/app/Components/PresentationProduit";

export default function BetonCireMineral() {
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
        orientation="horizontal"
      />
    </>
  );
}
