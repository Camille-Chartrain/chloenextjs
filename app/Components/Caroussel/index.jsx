"use client";

import { useState, useRef, useEffect } from "react";
import "./style.scss";

export default function Carousel({ images, title, orientation = "vertical" }) {
  const title_without_quotes = title.replace(/"/g, "");
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);
  const [enlargedImage, setEnlargedImage] = useState(null);
  // Use a ref to store the target index of a programmatic scroll. null means no scroll is active.
  const targetIndexRef = useRef(null);

  /**
   * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
   * Effect to handle 'Escape' key press for closing the enlarged image
   */

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setEnlargedImage(null);
      }
    };
    if (enlargedImage) {
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [enlargedImage]);

  /**
   * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
   * Update active index on scroll
   */

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    // detect scroll position and update active index
    const handleScroll = () => {
      const scrollPosition =
        orientation === "horizontal" ? carousel.scrollLeft : carousel.scrollTop;
      const itemSize =
        orientation === "horizontal"
          ? carousel.clientWidth
          : carousel.clientHeight;
      const newIndex = Math.round(scrollPosition / itemSize);

      // If a programmatic scroll is in progress (targetIndexRef is not null)
      if (targetIndexRef.current !== null) {
        // Check if we have reached the destination.
        if (newIndex === targetIndexRef.current) {
          // If so, clear the target to re-enable manual scroll updates.
          targetIndexRef.current = null;
        }
        // In either case, do not update the activeIndex during a programmatic scroll.
        return;
      }

      // If no programmatic scroll is active, update index for manual scrolling.
      setActiveIndex(newIndex);
    };

    // Attach scroll event listener without overwriting default scroll behavior
    carousel.addEventListener("scroll", handleScroll, { passive: true });
    // Cleanup: Remove event listener when component unmounts, or the effect re-runs
    return () => carousel.removeEventListener("scroll", handleScroll);
  }, [images]); // dependency array: re-run if images change

  /**
   * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
   * Scroll to image when dot is clicked
   */

  const scrollToImage = (index) => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    // Set the target index. This "locks" the handleScroll from updating for manual scrolls.
    targetIndexRef.current = index;
    // Set the active index immediately for instant UI feedback
    setActiveIndex(index);

    const itemSize =
      orientation === "horizontal"
        ? carousel.clientWidth
        : carousel.clientHeight;
    carousel.scrollTo({
      [orientation === "horizontal" ? "left" : "top"]: index * itemSize,
      behavior: "smooth",
    });
  };

  /**
   * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
   * handle large images
   */
  const handleImageClick = (src) => {
    setEnlargedImage(src);
  };
  const handleCloseEnlarged = (e) => {
    // Close only if the click is on the background, not the image itself
    if (e.target === e.currentTarget) {
      setEnlargedImage(null);
    }
  };

  /**
   * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
   * return
   */

  return (
    <>
      <div className={`carousel-section carousel-orientation-${orientation}`}>
        <div className="carousel-slides" ref={carouselRef}>
          {images.map((src, index) => (
            <div
              key={index}
              className="carousel-item"
              onClick={() => handleImageClick(src)}
            >
              <img
                src={src}
                alt={`illustration ${title_without_quotes} ${index + 1}`}
                className="carousel-image"
              />
            </div>
          ))}
        </div>

        <div className="carousel-navigation">
          {images.map((src, index) => (
            <div key={index} className="nav-item-wrapper">
              <button
                className={`nav-button ${
                  index === activeIndex ? "active" : ""
                }`}
                onClick={() => scrollToImage(index)}
              />
              <img
                alt={`thumbnail ${title_without_quotes} ${index + 1}`}
                src={src}
                className={`nav-image ${index === activeIndex ? "active" : ""}`}
                onClick={() => scrollToImage(index)}
              />
            </div>
          ))}
        </div>
      </div>
      {enlargedImage && (
        <div className="enlarged-view" onClick={handleCloseEnlarged}>
          <button
            className="close-button"
            onClick={() => setEnlargedImage(null)}
          >
            &times;
          </button>
          <input type="checkbox" id="enlarged-image-checkbox" hidden />
          <label class="image-container" for="enlarged-image-checkbox">
            <img
              className="enlarged-image"
              src={enlargedImage}
              alt={`Enlarged illustration ${title_without_quotes}`}
            />
          </label>
        </div>
      )}
    </>
  );
}
