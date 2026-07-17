"use client";

import { useState } from "react";

const navigationLinks = [
  { href: "#sobre", label: "Sobre SANALAB" },
  { href: "#app", label: "App SANALAB", mobileOnly: true },
  { href: "#temas", label: "Temas" },
  { href: "#ebooks", label: "Ebooks" },
  { href: "#preguntas", label: "Preguntas frecuentes" },
  { href: "#whatsapp", label: "WhatsApp" },
];

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="topbar">
      <div className="topbar__inner">
        <a className="brand" href="#inicio" onClick={() => setIsOpen(false)}>
          <img
            className="brand__logo"
            src="/img/SANALAB%20LOGO%20FONDO%20TRANPARENTE%20recortado.png"
            alt="Logo de SANALAB"
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
            {navigationLinks.slice(0, 3).map((link) => (
              <a
                key={link.href}
                className={link.mobileOnly ? "topbar__nav-app" : undefined}
                href={link.href}
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="topbar__nav-row topbar__nav-row--secondary">
            {navigationLinks.slice(3).map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      </div>

      <div
        className={`topbar__mobile-panel${isOpen ? " is-open" : ""}`}
        id="mobile-menu"
      >
        <nav className="topbar__nav topbar__nav--mobile" aria-label="Principal móvil">
          {navigationLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setIsOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
