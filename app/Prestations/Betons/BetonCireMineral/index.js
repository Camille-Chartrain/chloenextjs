import React from "react";
import "./style.scss";
import Carousel from "@/app/components/VerticalCaroussel";

export default function BetonCireMineral() {
  return (
    <>
      <Carousel
        images={[
          "/IMG_3684.jpg",
          "/IMG_3684.jpg",
          "/IMG_3684.jpg",
          "/IMG_3684.jpg",
        ]}
        title='beton cire "mineral"'
      />
    </>
  );
}
