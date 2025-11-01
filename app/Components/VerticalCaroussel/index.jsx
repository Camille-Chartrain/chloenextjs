"use client";

import { useState, useRef, useEffect } from "react";
import "./style.scss";

export default function Carousel({ images, title }) {
  const title_upper = title.toUpperCase();
  const title_without_quotes = title.replace(/"/g, "");
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);

  // Update active index on scroll
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    // detect scroll position and update active index
    const handleScroll = () => {
      const scrollPosition = carousel.scrollTop;
      const itemHeight = carousel.clientHeight;
      const newIndex = Math.round(scrollPosition / itemHeight);
      setActiveIndex(newIndex);
    };
    // Attach scroll event listener without overwriting default scroll behavior
    carousel.addEventListener("scroll", handleScroll, { passive: true });
    // Cleanup: Remove event listener when component unmounts, or the effect re-runs
    return () => carousel.removeEventListener("scroll", handleScroll);
  }, [images]); // dependency array: re-run if images change

  // Scroll to image when dot is clicked
  const scrollToImage = (index) => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const itemHeight = carousel.clientHeight;
    carousel.scrollTo({
      top: index * itemHeight,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="section">
        <div className="vertical-carousel" ref={carouselRef}>
          {images.map((src, index) => (
            <div key={index} className="carousel-item">
              <img
                src={src}
                alt={`illustration ${title_without_quotes} ${index + 1}`}
                className="carousel-image"
              />
            </div>
          ))}
        </div>

        <div className="carousel-navigation">
          {images.map((_, index) => (
            <button
              key={index}
              className={`nav-dot ${index === activeIndex ? "active" : ""}`}
              onClick={() => scrollToImage(index)}
            />
          ))}
        </div>

        <div className="carousel-description">
          <h3>{title_upper}</h3>
        </div>
      </div>
    </>
  );
}
