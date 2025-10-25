"use client";

import "./style.scss";
import Carousel from "@/app/Components/Caroussel";

export default function PresentationProduit({
  images,
  title,
  text,
  orientation,
}) {
  return (
    <>
      <div className="presentation-produit">
        <div className="presentation-carousel">
          <Carousel images={images} title={title} orientation={orientation} />
        </div>

        <div className="presentation-description">
          <h3>{title}</h3>
          <p>{text}</p>
        </div>
      </div>
    </>
  );
}
