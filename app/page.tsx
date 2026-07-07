import { EbookCard } from "@/components/ebook-card";
import { TestimonialsCarousel } from "@/components/testimonials-carousel";
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
    slug: "vivir-inflamado",
    title: "Vivir Inflamado NO es Normal",
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
    title: "Reset Intestinal",
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
    title: "100 Desayunos Antiinflamatorios",
    description:
      "Ideas simples, nutritivas y fáciles de aplicar para empezar el día con más energía y mejor digestión.",
    benefits: [
      "Resolvé desayunos con opciones concretas.",
      "Sumá variedad sin complicarte.",
      "Empezá el día con más energía y saciedad.",
    ],
    modalSummary:
      "Un ebook lleno de ideas para resolver tus mañanas con comidas más estables, prácticas y fáciles de sostener, sin tener que improvisar todos los días.",
    modalHighlights: [
      "Reúne propuestas concretas para simplificar tus desayunos.",
      "Ayuda a empezar el día con opciones más ordenadas y nutritivas.",
      "Es una buena guía si querés sumar variedad sin complicarte.",
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
];

export default function Home() {
  return (
    <main className="page-shell">
      <header className="topbar">
        <div className="topbar__inner">
          <a className="brand" href="#inicio">
            <img
              className="brand__logo"
              src="/img/SANALAB%20LOGO%20FONDO%20TRANPARENTE%20recortado.png"
              alt="SANALAB"
            />
          </a>

        <nav className="topbar__nav" aria-label="Principal">
          <a href="#sobre">Sobre SANALAB</a>
          <a href="#temas">Temas</a>
          <a href="#ebooks">Ebooks</a>
          <a href="#preguntas">Preguntas frecuentes</a>
          <a href="#whatsapp">WhatsApp</a>
        </nav>
        </div>
      </header>

      <section className="hero hero--website" id="inicio">
        <div className="hero__backdrop" aria-hidden="true">
          <img className="hero__backdrop-image" src="/img/hero.png" alt="" />
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
                Explorar ebooks
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
            alt="SANALAB"
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

        <p className="footer__legal">
          El contenido de SANALAB es educativo y no reemplaza la consulta con un
          profesional de la salud.
        </p>

        <div className="footer__policies" aria-label="Políticas legales">
          <a className="footer__policy" href="#politica-de-privacidad">
            <input type="checkbox" readOnly checked={false} />
            <span>política de privacidad</span>
          </a>
          <a className="footer__policy" href="#terminos-y-condiciones">
            <input type="checkbox" readOnly checked={false} />
            <span>términos y condiciones</span>
          </a>
          <a className="footer__policy" href="#eliminacion-de-datos">
            <input type="checkbox" readOnly checked={false} />
            <span>eliminación de datos</span>
          </a>
        </div>
      </footer>
    </main>
  );
}
