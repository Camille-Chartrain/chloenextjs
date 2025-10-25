import React from "react";
import "./style.scss";
import PresentationProduit from "@/app/Components/PresentationProduit";

export default function BetonCireClassic() {
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
      />
    </>
  );
}
