"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";

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
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const [activePosition, setActivePosition] = useState(3);
  const [stepWidth, setStepWidth] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const [transitionEnabled, setTransitionEnabled] = useState(true);

  const clonedBefore = useMemo(
    () => testimonials.slice(Math.max(testimonials.length - visibleCards, 0)),
    [testimonials, visibleCards]
  );

  const clonedAfter = useMemo(
    () => testimonials.slice(0, Math.min(visibleCards, testimonials.length)),
    [testimonials, visibleCards]
  );

  const renderedTestimonials = useMemo(
    () => [...clonedBefore, ...testimonials, ...clonedAfter],
    [clonedBefore, testimonials, clonedAfter]
  );

  useEffect(() => {
    setTransitionEnabled(false);
    setActivePosition(visibleCards);

    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        setTransitionEnabled(true);
      });
    });
  }, [visibleCards]);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const measure = () => {
      const card = viewport.querySelector(".testimonial-card") as HTMLElement | null;
      const track = viewport.querySelector(".testimonials-carousel__track") as HTMLElement | null;
      if (!card || !track) return;

      const styles = window.getComputedStyle(track);
      const gap = Number.parseFloat(styles.columnGap || styles.gap || "0") || 0;
      const step = card.offsetWidth + gap;
      if (!step) return;

      const nextVisibleCards = Math.max(
        1,
        Math.round((viewport.clientWidth + gap) / step)
      );

      setVisibleCards(nextVisibleCards);
      setStepWidth(step);
    };

    measure();
    window.addEventListener("resize", measure);

    return () => window.removeEventListener("resize", measure);
  }, [testimonials.length, renderedTestimonials.length]);

  const moveNext = useCallback(() => {
    if (testimonials.length < 2) return;

    setTransitionEnabled(true);
    setActivePosition((currentPosition) => currentPosition + 1);
  }, [testimonials.length]);

  const movePrevious = () => {
    if (testimonials.length < 2) return;

    setTransitionEnabled(true);
    setActivePosition((currentPosition) => currentPosition - 1);
  };

  useEffect(() => {
    if (testimonials.length < 2) return;

    const intervalId = window.setInterval(moveNext, 4200);

    return () => window.clearInterval(intervalId);
  }, [moveNext, testimonials.length]);

  const handleTransitionEnd = () => {
    const firstRealPosition = visibleCards;
    const afterLastRealPosition = visibleCards + testimonials.length;

    if (activePosition >= afterLastRealPosition) {
      setTransitionEnabled(false);
      setActivePosition(firstRealPosition);
    }

    if (activePosition < firstRealPosition) {
      setTransitionEnabled(false);
      setActivePosition(afterLastRealPosition - 1);
    }

    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        setTransitionEnabled(true);
      });
    });
  };

  return (
    <div className="testimonials-carousel__shell">
      <button
        className="testimonials-carousel__button testimonials-carousel__button--left"
        type="button"
        onClick={movePrevious}
        aria-label="Ver testimonio anterior"
      >
        {"<"}
      </button>

      <div
        className="testimonials-carousel"
        aria-label="Carrusel automático de testimonios"
        ref={viewportRef}
      >
        <div
          className="testimonials-carousel__track"
          style={{
            transform: `translateX(-${activePosition * stepWidth}px)`,
            transition: transitionEnabled ? undefined : "none",
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {renderedTestimonials.map((testimonial, index) => (
            <div className="testimonial-card" key={`${testimonial.name}-${index}`}>
              <p className="testimonial-card__quote">"{testimonial.quote}"</p>
              <div className="testimonial-card__footer">
                <strong>{testimonial.name}</strong>
                <span>{testimonial.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        className="testimonials-carousel__button testimonials-carousel__button--right"
        type="button"
        onClick={moveNext}
        aria-label="Ver testimonio siguiente"
      >
        {">"}
      </button>
    </div>
  );
}
