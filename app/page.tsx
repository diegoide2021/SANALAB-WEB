import { EbookCard } from "@/components/ebook-card";
import { SectionHeading } from "@/components/section-heading";

const whatsappHref = "https://wa.me/TUNUMERO";

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
    title: "Vivir Inflamado NO es Normal",
    description:
      "Una guía para entender la inflamación cotidiana, su relación con la alimentación, el intestino y los hábitos diarios.",
    benefits: [
      "Comprendé señales de inflamación frecuentes.",
      "Relacioná síntomas con hábitos diarios.",
      "Empezá a ordenar tu alimentación con más criterio.",
    ],
  },
  {
    title: "Reset Intestinal",
    description:
      "Un ebook práctico para ordenar tu alimentación, aliviar la sobrecarga digestiva y reconectar con señales básicas del cuerpo.",
    benefits: [
      "Bajá la sensación de pesadez digestiva.",
      "Recuperá una rutina más clara y simple.",
      "Reconectá con señales básicas del cuerpo.",
    ],
  },
  {
    title: "100 Desayunos Antiinflamatorios",
    description:
      "Ideas simples, nutritivas y fáciles de aplicar para empezar el día con más energía y mejor digestión.",
    benefits: [
      "Resolvé desayunos con opciones concretas.",
      "Sumá variedad sin complicarte.",
      "Empezá el día con más energía y saciedad.",
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

export default function Home() {
  return (
    <main className="page-shell">
      <header className="topbar">
        <a className="brand" href="#inicio">
          <span className="brand__mark">S</span>
          <span className="brand__text">
            <strong>SANALAB</strong>
            <small>Bienestar digestivo y alimentación consciente</small>
          </span>
        </a>

        <nav className="topbar__nav" aria-label="Principal">
          <a href="#sobre">Sobre SANALAB</a>
          <a href="#temas">Temas</a>
          <a href="#ebooks">Ebooks</a>
          <a href="#preguntas">Preguntas frecuentes</a>
          <a href="#whatsapp">WhatsApp</a>
        </nav>
      </header>

      <section className="hero hero--website" id="inicio">
        <div className="hero__content">
          <p className="eyebrow">Plataforma de bienestar integral</p>
          <h1>Entender tu cuerpo también puede ser simple</h1>
          <p className="hero__description">
            SANALAB comparte contenido claro y cercano sobre microbiota,
            digestión, inflamación, alimentación saludable y hábitos
            sostenibles. Nuestros ebooks reúnen esa información en formatos
            prácticos para acompañarte en tu vida cotidiana.
          </p>

          <div className="hero__actions">
            <a className="button button--primary" href="#ebooks">
              Explorar ebooks
            </a>
            <a className="button button--secondary" href="#sobre">
              Conocer SANALAB
            </a>
          </div>

          <ul className="hero__highlights" aria-label="Temas principales">
            <li>Digestión</li>
            <li>Microbiota</li>
            <li>Alimentación consciente</li>
            <li>Hábitos sostenibles</li>
          </ul>
        </div>

        <aside className="hero-panel" aria-label="Resumen de SANALAB">
          <div className="hero-panel__section">
            <span className="hero-panel__label">Qué vas a encontrar</span>
            <ul className="hero-panel__list">
              <li>Guías simples basadas en ciencia.</li>
              <li>Herramientas para aplicar sin extremos.</li>
              <li>Recursos para elegir con más claridad.</li>
            </ul>
          </div>

          <div className="hero-panel__section hero-panel__section--accent">
            <span className="hero-panel__label">Biblioteca digital</span>
            <div className="hero-panel__stack" aria-hidden="true">
              <div className="hero-panel__book hero-panel__book--one" />
              <div className="hero-panel__book hero-panel__book--two" />
              <div className="hero-panel__book hero-panel__book--three" />
            </div>
            <p>
              Ebooks sobre inflamación, orden digestivo y desayunos
              antiinflamatorios.
            </p>
          </div>
        </aside>
      </section>

      <section className="content-section content-section--soft" id="sobre">
        <div className="content-grid content-grid--two">
          <div className="info-card info-card--large">
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
              buyHref="#"
              whatsappHref={whatsappHref}
            />
          ))}
        </div>
      </section>

      <section className="content-section content-section--contrast">
        <div className="content-grid content-grid--split">
          <div>
            <SectionHeading
              eyebrow="Para qué sirven"
              title="Una ayuda concreta para sumar comprensión y ordenar hábitos"
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
          <h2>SANALAB</h2>
          <p>Bienestar digestivo, microbiota y alimentación consciente.</p>
        </div>

        <nav className="footer__links" aria-label="Footer">
          <a href="#inicio">Inicio</a>
          <a href="#sobre">Sobre SANALAB</a>
          <a href="#ebooks">Ebooks</a>
          <a href="#preguntas">Preguntas frecuentes</a>
          <a href={whatsappHref}>WhatsApp</a>
        </nav>

        <p className="footer__legal">
          El contenido de SANALAB es educativo y no reemplaza la consulta con un
          profesional de la salud.
        </p>
      </footer>
    </main>
  );
}
