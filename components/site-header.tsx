"use client";

import { useState } from "react";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="topbar">
      <div className="topbar__inner">
        <a className="brand" href="#inicio" onClick={() => setIsOpen(false)}>
          <img
            className="brand__logo"
            src="/img/SANALAB%20LOGO%20FONDO%20TRANPARENTE%20recortado.png"
            alt="SANALAB"
          />
        </a>

        <button
          className="topbar__menu-toggle"
          type="button"
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsOpen((current) => !current)}
        >
          <span className="topbar__menu-icon" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </button>

        <nav className="topbar__nav topbar__nav--desktop" aria-label="Principal">
          <div className="topbar__nav-row topbar__nav-row--primary">
            <a href="#sobre">Sobre SANALAB</a>
            <a className="topbar__nav-app" href="#app">
              App SANALAB
            </a>
            <a href="#temas">Temas</a>
          </div>
          <div className="topbar__nav-row topbar__nav-row--secondary">
            <a href="#ebooks">Ebooks</a>
            <a href="#preguntas">Preguntas frecuentes</a>
            <a href="#whatsapp">WhatsApp</a>
          </div>
        </nav>
      </div>

      <div
        className={`topbar__mobile-panel${isOpen ? " is-open" : ""}`}
        id="mobile-menu"
      >
        <nav className="topbar__nav topbar__nav--mobile" aria-label="Principal móvil">
          <div className="topbar__nav-row topbar__nav-row--primary">
            <a href="#sobre" onClick={() => setIsOpen(false)}>
              Sobre SANALAB
            </a>
            <a href="#app" onClick={() => setIsOpen(false)}>
              App SANALAB
            </a>
            <a href="#temas" onClick={() => setIsOpen(false)}>
              Temas
            </a>
          </div>
          <div className="topbar__nav-row topbar__nav-row--secondary">
            <a href="#ebooks" onClick={() => setIsOpen(false)}>
              Ebooks
            </a>
            <a href="#preguntas" onClick={() => setIsOpen(false)}>
              Preguntas frecuentes
            </a>
            <a href="#whatsapp" onClick={() => setIsOpen(false)}>
              WhatsApp
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
