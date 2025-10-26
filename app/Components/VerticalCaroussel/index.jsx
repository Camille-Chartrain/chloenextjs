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

// export default function BetonCireClassic() {
//   const images = [
//     "/IMG_3684.jpg",
//     "/IMG_3684.jpg",
//     // Add more images as needed
//   ];
//
//   return (
//     <>
//       <div className="section">
//         <div className="vertical-carousel">
//           {images.map((src, index) => (
//             <img
//               key={index}
//               src={src}
//               alt={`illustration de béton ciré ${index + 1}`}
//               className="carousel-image"
//             />
//           ))}
//         </div>
//
//         <h3>BETON CIRE "CLASSIC"</h3>
//       </div>
//     </>
//   );
// }
