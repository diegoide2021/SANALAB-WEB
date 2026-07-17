import { EbookCard } from "@/components/ebook-card";
import type { Metadata } from "next";
import { FooterPolicies } from "@/components/footer-policies";
import { SiteHeader } from "@/components/site-header";
import { TestimonialsCarousel } from "@/components/testimonials-carousel";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "SANALAB | Ebooks de bienestar, microbiota y alimentación consciente",
  description:
    "SANALAB reúne ebooks y recursos digitales sobre microbiota, digestión, inflamación, alimentación saludable y hábitos sostenibles para acompañarte con información clara y simple.",
  keywords: [
    "SANALAB",
    "microbiota",
    "ebook microbiota",
    "guía microbiota",
    "alimentación saludable",
    "bienestar digestivo",
    "salud intestinal",
    "inflamación",
    "digestión",
    "ebook digestión",
    "ebook bienestar",
    "ebooks de bienestar",
    "alimentación antiinflamatoria",
    "alimentación consciente",
    "hábitos saludables",
    "hábitos sostenibles",
    "bienestar integral",
    "recursos digitales",
  ],
};

const whatsappPhone = "1127295304";
const whatsappMessage = "Hola SANALAB 👋, necesito información acerca de sus productos";
const whatsappHref = `https://api.whatsapp.com/send?phone=${whatsappPhone}&text=${encodeURIComponent(whatsappMessage)}`;

const topics = [
  {
    title: "Digestión y bienestar diario",
    description:
      "Información clara para entender señales como pesadez, inflamación, incomodidad o desorden digestivo.",
  },
  {
    title: "Microbiota y alimentación",
    description:
      "Contenido accesible para conectar ciencia, alimentación real y decisiones cotidianas más conscientes.",
  },
  {
    title: "Energía y hábitos sostenibles",
    description:
      "Herramientas para construir rutinas posibles, sin extremos ni reglas difíciles de sostener.",
  },
  {
    title: "Recursos simples para aplicar",
    description:
      "Ebooks pensados para bajar ideas complejas a pasos concretos, prácticos y fáciles de revisar.",
  },
];

const values = [
  "Basado en ciencia, explicado de forma simple.",
  "Enfoque humano, sin soluciones mágicas ni promesas extremas.",
  "Hábitos sostenibles para una vida real, no idealizada.",
];

const ebooks = [
  {
    slug: "vivir-inflamado",
    title: "Vivir Inflamado NO es Normal",
    coverImage: "/img/vivir inflamado.png",
    description:
      "Una guía para entender la inflamación cotidiana, su relación con la alimentación, el intestino y los hábitos diarios.",
    benefits: [
      "Comprendé señales de inflamación frecuentes.",
      "Relacioná síntomas con hábitos diarios.",
      "Empezá a ordenar tu alimentación con más criterio.",
    ],
    modalSummary:
      "Este ebook te ayuda a mirar la inflamación cotidiana con más claridad, para identificar qué puede estar influyendo en tu digestión y en tu bienestar general sin caer en extremos.",
    modalHighlights: [
      "Ideal para reconocer patrones que se repiten en tu rutina.",
      "Explica la relación entre alimentación, intestino y malestar habitual.",
      "Aporta una base simple para empezar a tomar decisiones más conscientes.",
    ],
  },
  {
    slug: "reset-intestinal",
    title: "Reset Intestinal de 7 días",
    coverImage: "/img/reset intestinal de 7 dias.png",
    description:
      "Un ebook práctico para ordenar tu alimentación, aliviar la sobrecarga digestiva y reconectar con señales básicas del cuerpo.",
    benefits: [
      "Bajá la sensación de pesadez digestiva.",
      "Recuperá una rutina más clara y simple.",
      "Reconectá con señales básicas del cuerpo.",
    ],
    modalSummary:
      "Pensado como una guía de reorganización, este ebook propone una mirada práctica para bajar la sobrecarga digestiva y volver a una base más simple y sostenible.",
    modalHighlights: [
      "Te acompaña a ordenar comidas y hábitos con una lógica más amable.",
      "Sirve para momentos en los que sentís el cuerpo saturado o confuso.",
      "Buscá más claridad, no perfección: ese es el espíritu del material.",
    ],
  },
  {
    slug: "desayunos-antiinflamatorios",
    title: "30 Alimentos Para Nutrir Tu Microbiota",
    coverImage: "/img/30 alimentos para nutrir tu microbiota.png",
    description:
      "Una guía con 30 alimentos para nutrir tu microbiota y acompañar tu bienestar digestivo.",
    benefits: [
      "Conocé alimentos que acompañan tu microbiota.",
      "Sumá ideas simples para tu alimentación diaria.",
      "Elegí opciones más variadas y nutritivas.",
    ],
    modalSummary:
      "Una guía con 30 alimentos pensados para nutrir tu microbiota, sumar variedad a tu alimentación y acompañar tu bienestar digestivo de forma simple.",
    modalHighlights: [
      "Reúne alimentos clave para sumar a tu rutina diaria.",
      "Ayuda a elegir con más claridad qué comer para nutrir tu microbiota.",
      "Es una guía práctica si querés ordenar tu alimentación sin complicarte.",
    ],
  },
];

const generalBenefits = [
  "Comprender mejor tu digestión.",
  "Identificar hábitos que pueden afectar tu bienestar.",
  "Aprender a comer de forma más consciente y sostenible.",
  "Tener ideas prácticas para aplicar en tu rutina.",
  "Mejorar tu relación con la alimentación sin extremos.",
];

const steps = [
  "Elegís el ebook que mejor acompaña tu momento.",
  "Realizás el pago de forma segura.",
  "Recibís el material en tu email o por WhatsApp.",
  "Podés escribirnos si necesitás ayuda para elegir o empezar.",
];

const stepIcons = ["/img/1.png", "/img/2.png", "/img/3.png", "/img/4.png"];

const faqs = [
  {
    question: "¿Los ebooks son dietas?",
    answer:
      "No. Los ebooks no son dietas estrictas, sino guías educativas y prácticas para ayudarte a comprender mejor tu cuerpo y tus hábitos.",
  },
  {
    question: "¿Necesito conocimientos previos?",
    answer:
      "No hace falta conocimiento previo. El contenido está pensado para que cualquier persona pueda entenderlo y aplicarlo con facilidad.",
  },
  {
    question: "¿Cómo recibo el ebook?",
    answer:
      "Después del pago, recibís el ebook por email o WhatsApp, según la modalidad que se defina para cada producto.",
  },
  {
    question: "¿Puedo consultar antes de comprar?",
    answer:
      "Sí. Podés escribirnos antes de comprar y te ayudamos a elegir el ebook más adecuado para tu momento.",
  },
  {
    question: "¿Esto reemplaza una consulta médica?",
    answer:
      "No. El contenido es educativo y no reemplaza diagnóstico, tratamiento ni seguimiento médico profesional.",
  },
];

const testimonials = [
  {
    name: "Marina R.",
    role: "Lectora de SANALAB",
    quote:
      "Me ayudó a entender mejor por qué me sentía tan hinchada y a ordenar mis desayunos sin hacer cambios extremos.",
  },
  {
    name: "Lucía G.",
    role: "Usuario habitual",
    quote:
      "Lo que más valoro es que explica las cosas simple. No siento que me estén vendiendo una solución mágica.",
  },
  {
    name: "Sofía M.",
    role: "Consultora de la comunidad",
    quote:
      "Los ebooks me dieron ideas concretas para aplicar en mi rutina y volver a comer con más conciencia.",
  },
  {
    name: "Camila P.",
    role: "Seguidora de la marca",
    quote:
      "Es un contenido muy amable y claro. Me ayudó a relacionarme distinto con mi digestión y mis hábitos.",
  },
  {
    name: "Valentina S.",
    role: "Lectora reciente",
    quote:
      "Me gustó mucho porque no abrumó con información. Sentí que podía empezar de a poco y con más calma.",
  },
];

export default function Home() {
  return (
    <main className="page-shell">
      <SiteHeader />

      <section className="hero hero--website" id="inicio">
        <div className="hero__backdrop">
          <img
            className="hero__backdrop-image"
            src="/img/hero.png"
            alt="Ilustración del cuerpo humano con el sistema digestivo iluminado"
          />
        </div>

        <div className="hero__inner">
          <div className="hero__content">
            <p className="eyebrow">Plataforma de bienestar integral</p>
            <h1>Entender tu cuerpo también puede ser simple</h1>
            <p className="hero__description">
              SANALAB comparte contenido claro y cercano sobre microbiota,
              digestión, inflamación, alimentación saludable y hábitos
              sostenibles. Nuestras herramientas digitales reúnen esa
              información en formatos prácticos para acompañarte en tu vida
              cotidiana.
            </p>

            <div className="hero__actions">
              <a className="button button--primary" href="#ebooks">
                Explorar Ebooks
              </a>
              <a className="button button--secondary" href="#sobre">
                Conocer SANALAB
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="hero-support" aria-label="Resumen de SANALAB">
        <aside className="hero-panel hero-panel--support">
          <div className="hero-panel__section">
            <span className="hero-panel__label">Qué vas a encontrar</span>
            <ul className="hero-panel__list">
              <li className="hero-panel__list-item--icon">
                <img className="hero-panel__list-icon" src="/img/guias.png" alt="" aria-hidden="true" />
                <span>Guías simples basadas en ciencia.</span>
              </li>
              <li className="hero-panel__list-item--icon">
                <img className="hero-panel__list-icon" src="/img/herramientas.png" alt="" aria-hidden="true" />
                <span>Herramientas para aplicar sin extremos.</span>
              </li>
              <li className="hero-panel__list-item--icon">
                <img className="hero-panel__list-icon" src="/img/recursos.png" alt="" aria-hidden="true" />
                <span>Recursos para elegir con más claridad.</span>
              </li>
            </ul>
          </div>

          <div className="hero-panel__section hero-panel__section--accent">
            <span className="hero-panel__label">Biblioteca digital</span>
            <img
              className="hero-panel__biblioteca-thumb"
              src="/img/biblioteca2.png"
              alt="Portada de la biblioteca digital de SANALAB con libros sobre inflamación, orden digestivo y desayunos antiinflamatorios"
            />
            <div className="hero-panel__ebook-row">
              <img
                className="hero-panel__ebook-icon"
                src="/img/ebooks.png"
                alt=""
                aria-hidden="true"
              />
              <p>Ebooks sobre inflamación, orden digestivo y desayunos antiinflamatorios.</p>
            </div>
          </div>
        </aside>
      </section>

      <section className="content-section content-section--image-break" aria-label="Imagen destacada SANALAB">
        <div className="image-break">
          <img
            className="image-break__img"
            src="/img/imagen.png"
            alt="Ilustración de bienestar femenino con el mensaje bienestar no es hacerlo perfecto"
          />
        </div>
      </section>

      <section className="content-section content-section--soft" id="sobre">
        <div className="content-grid content-grid--two">
          <div className="info-card info-card--large info-card--about">
            <SectionHeading
              eyebrow="Qué es SANALAB"
              title="Una web sencilla para aprender, orientarte y encontrar recursos útiles"
            />
            <p>
              SanaLab es una plataforma de bienestar integral enfocada en
              alimentación, microbiota, digestión y hábitos saludables. Creamos
              contenido simple, accesible y práctico para ayudarte a tomar
              mejores decisiones sobre tu cuerpo, sin soluciones mágicas ni
              promesas extremas.
            </p>
            <p>
              Muchas personas viven con inflamación, digestiones pesadas,
              cansancio o falta de claridad sobre qué comer. El problema no
              siempre es la falta de voluntad, sino la falta de información
              simple, ordenada y aplicable.
            </p>
          </div>

          <div className="info-card info-card--accent">
            <SectionHeading
              eyebrow="Cómo trabajamos"
              title="Una mirada cálida, clara y sostenible"
            />
            <ul className="benefit-list benefit-list--compact">
              {values.map((value) => (
                <li key={value}>{value}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="content-section content-section--soft" id="app">
        <div className="content-grid">
          <article className="info-card info-card--app">
            <SectionHeading
              eyebrow="Próximamente"
              title="App SANALAB, un espacio para acompañarte en tu bienestar digestivo"
            />
            <p>
              La App SANALAB, próximamente disponible en Play Store, será un
              espacio pensado para acompañarte día a día con consejos simples,
              guías prácticas y recursos claros para mejorar tu bienestar
              digestivo y sostener hábitos saludables sin extremos.
            </p>
            <ul className="benefit-list benefit-list--compact">
              <li>Consejos breves para tu digestión y alimentación consciente.</li>
              <li>Recursos simples para sostener hábitos saludables en tu rutina.</li>
              <li>Contenido claro para volver a organizarte cuando lo necesites.</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="content-section" id="temas">
        <SectionHeading
          eyebrow="Temas centrales"
          title="Bienestar digestivo explicado con un lenguaje accesible"
          description="La idea no es sumar más ruido, sino ordenar mejor la información para que puedas usarla en tu día a día."
          align="center"
        />

        <div className="topics-grid">
          {topics.map((topic) => (
            <article className="topic-card" key={topic.title}>
              <h3>{topic.title}</h3>
              <p>{topic.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section" id="ebooks">
        <SectionHeading
          eyebrow="Ebooks"
          title="Recursos digitales para leer con calma y aplicar a tu ritmo"
          description="Los ebooks forman parte del ecosistema de SANALAB: informan, orientan y ofrecen ideas concretas para empezar por donde hoy te haga más sentido."
          align="center"
        />

        <div className="ebooks-grid">
          {ebooks.map((ebook) => (
            <EbookCard
              key={ebook.title}
              title={ebook.title}
              description={ebook.description}
              benefits={ebook.benefits}
              buyHref={`#${ebook.slug}`}
              whatsappHref={whatsappHref}
              coverImage={ebook.coverImage}
            />
          ))}
        </div>
      </section>

      {ebooks.map((ebook) => (
        <section
          key={ebook.slug}
          className="ebook-modal"
          id={ebook.slug}
          aria-label={`Detalle de ${ebook.title}`}
        >
          <a className="ebook-modal__backdrop" href="#ebooks" aria-label="Cerrar detalle" />

          <div className="ebook-modal__panel">
            <div className="ebook-modal__header">
              <p className="eyebrow">Vista del ebook</p>
              <a className="ebook-modal__close" href="#ebooks" aria-label="Cerrar">
                ×
              </a>
            </div>

            <h2>{ebook.title}</h2>
            <p className="ebook-modal__summary">{ebook.modalSummary}</p>

            <ul className="ebook-modal__list">
              {ebook.modalHighlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <div className="ebook-modal__actions">
              <a className="button button--primary" href={whatsappHref}>
                Comprar
              </a>
              <a className="button button--secondary" href="#ebooks">
                Volver a ebooks
              </a>
            </div>
          </div>
        </section>
      ))}

      <section className="content-section content-section--contrast">
        <div className="content-grid content-grid--split">
          <div>
            <SectionHeading
              eyebrow="Para qué sirven"
              title="Una ayuda concreta para sumar comprensión y ordenar hábitos"
              align="center"
              description="No buscan reemplazar procesos profesionales, sino acompañarte con información clara y herramientas realistas."
            />
          </div>

          <ul className="benefit-list">
            {generalBenefits.map((benefit) => (
              <li key={benefit}>{benefit}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="content-section">
        <SectionHeading
          eyebrow="Cómo funciona"
          title="Una experiencia simple y directa"
          align="center"
        />

        <div className="steps-grid">
          {steps.map((step, index) => (
            <article className="step-card" key={step}>
              <span className="step-card__icon-wrap" aria-hidden="true">
                <img
                  className="step-card__icon"
                  src={stepIcons[index]}
                  alt=""
                  aria-hidden="true"
                />
              </span>
              <span className="step-card__number">0{index + 1}</span>
              <p>{step}</p>
            </article>
          ))}
        </div>
      </section>

      <section
        className="content-section content-section--highlight"
        id="whatsapp"
      >
        <div className="cta-panel">
          <div>
            <p className="eyebrow">Consultas</p>
            <h2>¿Tenés dudas antes de elegir?</h2>
            <p>
              Escribinos por WhatsApp y te ayudamos a encontrar el ebook más
              adecuado para tu momento.
            </p>
          </div>

          <a className="button button--primary" href={whatsappHref}>
            Hablar por WhatsApp
          </a>
        </div>
      </section>

      <section className="content-section" id="testimonios">
        <SectionHeading
          eyebrow="Testimonios de clientes"
          title="Experiencias reales de personas que encontraron recursos útiles en SANALAB"
          description="Un vistazo breve a cómo estos contenidos ayudan a ordenar ideas, sumar claridad y acompañar el bienestar cotidiano."
          align="center"
        />

        <TestimonialsCarousel testimonials={testimonials} />
      </section>

      <section className="content-section" id="preguntas">
        <SectionHeading
          eyebrow="Preguntas frecuentes"
          title="Información importante antes de comprar"
          align="center"
        />

        <div className="faq-list">
          {faqs.map((faq) => (
            <details className="faq-item" key={faq.question}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <footer className="footer">
        <div className="footer__brand">
          <img
            className="footer__logo"
            src="/img/SANALAB%20LOGO%20TRANSPARENTE%20recortado%202.png"
            alt="Logo de SANALAB"
          />
          <p className="footer__brand-line">
            Bienestar digestivo, microbiota y alimentación consciente.
          </p>
        </div>

        <hr className="footer__divider" />

        <nav className="footer__links" aria-label="Footer">
          <a href="#inicio">Inicio</a>
          <a href="#sobre">Sobre SANALAB</a>
          <a href="#ebooks">Ebooks</a>
          <a href="#preguntas">Preguntas frecuentes</a>
          <a href={whatsappHref}>WhatsApp</a>
        </nav>

        <hr className="footer__divider footer__divider--between" />

        <p className="footer__legal">
          El contenido de SANALAB es educativo y no reemplaza la consulta con un
          profesional de la salud.
        </p>

        <FooterPolicies />
      </footer>
    </main>
  );
}



