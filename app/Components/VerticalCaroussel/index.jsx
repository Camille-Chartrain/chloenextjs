import React from "react";
import "./style.scss";

export default function Carousel({ images, title }) {
  const title_upper = title.toUpperCase();
  const title_without_quotes = title.replace(/"/g, "");

  return (
    <>
      <div className="section">
        <div className="vertical-caroussel">
          {images.map((src, index) => (
            <div className="caroussel-item">
              <img
                key={index}
                src={src}
                alt={`illustration ${title_without_quotes} ${index + 1}`}
                className="caroussel-image"
              />
            </div>
          ))}
        </div>

        <div className="caroussel-description">
          <h3>{title_upper}</h3>
        </div>
      </div>
    </>
  );
}
