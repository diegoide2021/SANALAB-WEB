"use client";

import { useEffect, useState } from "react";

type FadeSlide = {
  src: string;
  alt: string;
};

type FadeSliderProps = {
  slides: FadeSlide[];
};

export function FadeSlider({ slides }: FadeSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % slides.length);
    }, 4500);

    return () => window.clearInterval(intervalId);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="fade-slider" aria-label="Imágenes destacadas SANALAB">
      <div className="fade-slider__viewport">
        {slides.map((slide, index) => (
          <img
            key={slide.src}
            className={`fade-slider__image${index === 0 ? " fade-slider__image--cover-edge" : ""}${
              index === activeIndex ? " fade-slider__image--active" : ""
            }`}
            src={slide.src}
            alt={slide.alt}
            aria-hidden={index !== activeIndex}
          />
        ))}
      </div>

      <div className="fade-slider__dots" aria-label="Seleccionar imagen">
        {slides.map((slide, index) => (
          <button
            key={slide.src}
            className={`fade-slider__dot${index === activeIndex ? " fade-slider__dot--active" : ""}`}
            type="button"
            aria-label={`Ver imagen ${index + 1}`}
            aria-pressed={index === activeIndex}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}
