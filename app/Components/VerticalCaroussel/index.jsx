import React from "react";
import "./style.scss";

export default function Carousel({ images, title }) {
  const title_upper = title.toUpperCase();
  const title_without_quotes = title.replace(/"/g, "");

  return (
    <>
      <div className="section">
        <div className="vertical-carousel">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`illustration ${title_without_quotes} ${index + 1}`}
              className="caroussel-image"
            />
          ))}
        </div>

        <h3>{title_upper}</h3>
      </div>
    </>
  );
}
