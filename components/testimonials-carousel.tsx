"use client";

import { useEffect, useRef, useState } from "react";

type Testimonial = {
  name: string;
  role: string;
  quote: string;
};

type TestimonialsCarouselProps = {
  testimonials: Testimonial[];
};

export function TestimonialsCarousel({
  testimonials,
}: TestimonialsCarouselProps) {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [maxStartIndex, setMaxStartIndex] = useState(0);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const measure = () => {
      const card = carousel.querySelector(".testimonial-card") as HTMLElement | null;
      if (!card) return;

      const styles = window.getComputedStyle(carousel);
      const gap = Number.parseFloat(styles.columnGap || styles.gap || "0") || 0;
      const step = card.offsetWidth + gap;
      if (!step) return;

      const visibleCards = Math.max(
        1,
        Math.round((carousel.clientWidth + gap) / step)
      );
      const nextMaxStartIndex = Math.max(testimonials.length - visibleCards, 0);
      const nextCurrentIndex = Math.min(
        nextMaxStartIndex,
        Math.max(0, Math.round(carousel.scrollLeft / step))
      );

      setMaxStartIndex(nextMaxStartIndex);
      setCurrentIndex(nextCurrentIndex);
    };

    measure();
    window.addEventListener("resize", measure);
    carousel.addEventListener("scroll", measure, { passive: true });

    return () => {
      window.removeEventListener("resize", measure);
      carousel.removeEventListener("scroll", measure);
    };
  }, [testimonials.length]);

  const moveCarousel = (direction: -1 | 1) => {
    const carousel = carouselRef.current;
    if (!carousel || testimonials.length < 2) return;

    const card = carousel.querySelector(".testimonial-card") as HTMLElement | null;
    if (!card) return;

    const styles = window.getComputedStyle(carousel);
    const gap = Number.parseFloat(styles.columnGap || styles.gap || "0") || 0;
    const step = card.offsetWidth + gap;
    if (!step) return;

    const visibleCards = Math.max(
      1,
      Math.round((carousel.clientWidth + gap) / step)
    );
    const nextMaxStartIndex = Math.max(testimonials.length - visibleCards, 0);
    const currentStartIndex = Math.round(carousel.scrollLeft / step);

    let nextIndex = currentStartIndex + direction;
    if (nextIndex > nextMaxStartIndex) nextIndex = nextMaxStartIndex;
    if (nextIndex < 0) nextIndex = 0;

    setMaxStartIndex(nextMaxStartIndex);
    setCurrentIndex(nextIndex);

    carousel.scrollTo({
      left: nextIndex * step,
      behavior: "smooth",
    });
  };

  return (
    <div className="testimonials-carousel__shell">
      <button
        className="testimonials-carousel__button testimonials-carousel__button--left"
        type="button"
        onClick={() => moveCarousel(-1)}
        aria-label="Testimonio anterior"
        disabled={currentIndex <= 0}
      >
        {"<"}
      </button>

      <div
        className="testimonials-carousel"
        aria-label="Carrusel de testimonios"
        ref={carouselRef}
      >
        {testimonials.map((testimonial) => (
          <div className="testimonial-card" key={testimonial.name}>
            <p className="testimonial-card__quote">"{testimonial.quote}"</p>
            <div className="testimonial-card__footer">
              <strong>{testimonial.name}</strong>
              <span>{testimonial.role}</span>
            </div>
          </div>
        ))}
      </div>

      <button
        className="testimonials-carousel__button testimonials-carousel__button--right"
        type="button"
        onClick={() => moveCarousel(1)}
        aria-label="Testimonio siguiente"
        disabled={currentIndex >= maxStartIndex}
      >
        {">"}
      </button>
    </div>
  );
}

