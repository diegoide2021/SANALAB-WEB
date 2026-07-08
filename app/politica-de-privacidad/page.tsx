import type { Metadata } from "next";
import { FooterPolicies } from "@/components/footer-policies";

const privacySections = [
  {
    title: "1. Información que podemos recopilar",
    body: [
      "Podemos recopilar información personal cuando una persona interactúa voluntariamente con SANALAB, por ejemplo al completar un formulario, realizar una consulta, comprar un ebook o comunicarse por WhatsApp.",
      "La información puede incluir nombre y apellido, correo electrónico, número de teléfono o contacto de WhatsApp, datos relacionados con una compra o consulta, e información técnica básica de navegación como dispositivo, navegador, páginas visitadas o fecha de acceso.",
      "SANALAB no solicita información médica sensible a través de esta web. En caso de que una persona comparta voluntariamente información relacionada con su salud, esa información será utilizada únicamente para responder su consulta de manera general y orientativa.",
    ],
    list: [
      "Nombre y apellido.",
      "Correo electrónico.",
      "Número de teléfono o contacto de WhatsApp.",
      "Datos relacionados con una compra o consulta.",
      "Información técnica básica de navegación.",
    ],
  },
  {
    title: "2. Uso de la información",
    body: [
      "La información recopilada puede ser utilizada para responder consultas realizadas por la web, email o WhatsApp, enviar información sobre ebooks, contenidos, novedades o recursos de SANALAB, gestionar compras y entregas de productos digitales, mejorar la experiencia de navegación y cumplir con obligaciones legales, administrativas o de seguridad.",
      "SANALAB no vende, alquila ni comercializa datos personales de sus usuarios.",
    ],
    list: [
      "Responder consultas por la web, email o WhatsApp.",
      "Enviar información sobre ebooks, contenidos, novedades o recursos.",
      "Gestionar compras, pagos y entrega de productos digitales.",
      "Mejorar la experiencia de navegación y los contenidos del sitio.",
      "Brindar soporte o asistencia relacionada con productos adquiridos.",
      "Cumplir con obligaciones legales, administrativas o de seguridad.",
    ],
  },
  {
    title: "3. Pagos y productos digitales",
    body: [
      "Los pagos de ebooks u otros productos digitales podrán realizarse mediante pasarelas de pago externas. Estas plataformas pueden recopilar y procesar datos necesarios para completar la operación, de acuerdo con sus propias políticas de privacidad y seguridad.",
      "SANALAB no almacena datos completos de tarjetas de crédito, débito u otros medios de pago sensibles. Una vez confirmado el pago, el usuario podrá recibir el producto digital por email, WhatsApp u otro medio informado durante el proceso de compra.",
    ],
  },
  {
    title: "4. Comunicación por WhatsApp y email",
    body: [
      "Al contactarse con SANALAB por WhatsApp o email, el usuario autoriza a que podamos responder su consulta y, si corresponde, enviar información relacionada con nuestros ebooks, contenidos o servicios.",
      "El usuario podrá solicitar en cualquier momento dejar de recibir comunicaciones comerciales o informativas.",
    ],
  },
  {
    title: "5. Cookies y tecnologías similares",
    body: [
      "La web de SANALAB puede utilizar cookies o herramientas similares para mejorar el funcionamiento del sitio, analizar visitas, comprender el comportamiento general de navegación y optimizar la experiencia del usuario.",
      "El usuario puede configurar su navegador para rechazar o eliminar cookies, aunque esto podría afectar algunas funcionalidades del sitio.",
    ],
  },
  {
    title: "6. Protección de la información",
    body: [
      "SANALAB adopta medidas razonables para proteger la información personal de accesos no autorizados, pérdidas, alteraciones o usos indebidos. Sin embargo, ningún sistema digital es completamente infalible, por lo que no podemos garantizar seguridad absoluta.",
    ],
  },
  {
    title: "7. Contenido educativo",
    body: [
      "Los contenidos de SANALAB, incluyendo ebooks, artículos, recursos digitales y comunicaciones generales, tienen fines educativos e informativos. No reemplazan la consulta médica, nutricional, psicológica ni de ningún otro profesional de la salud.",
      "Ante síntomas persistentes, condiciones médicas o dudas específicas sobre salud, se recomienda consultar con un profesional calificado.",
    ],
  },
  {
    title: "8. Derechos del usuario",
    body: [
      "El usuario puede solicitar el acceso, modificación, actualización o eliminación de sus datos personales escribiendo a los canales de contacto oficiales de SANALAB.",
      "También puede solicitar dejar de recibir comunicaciones informativas o comerciales.",
    ],
  },
  {
    title: "9. Cambios en esta política",
    body: [
      "SANALAB podrá actualizar esta Política de Privacidad cuando lo considere necesario. Las modificaciones serán publicadas en esta misma página y tendrán vigencia desde su publicación.",
    ],
  },
  {
    title: "10. Contacto",
    body: [
      "Para consultas relacionadas con esta Política de Privacidad o el tratamiento de datos personales, podés comunicarte con SANALAB a través de los medios de contacto publicados en la web.",
    ],
  },
];

export const metadata: Metadata = {
  title: "Política de Privacidad | SANALAB",
  description:
    "Política de Privacidad de SANALAB para la web, ebooks y recursos digitales.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="page-shell">
      <header className="topbar">
        <div className="topbar__inner">
          <a className="brand" href="/#inicio" aria-label="Ir al inicio de SANALAB">
            <img
              className="brand__logo"
              src="/img/SANALAB%20LOGO%20FONDO%20TRANPARENTE%20recortado.png"
              alt="SANALAB"
            />
          </a>

          <nav className="topbar__nav" aria-label="Principal">
            <a href="/#sobre">Sobre SANALAB</a>
            <a href="/#temas">Temas</a>
            <a href="/#ebooks">Ebooks</a>
            <a href="/#preguntas">Preguntas frecuentes</a>
            <a href="/#whatsapp">WhatsApp</a>
          </nav>
        </div>
      </header>

      <section className="content-section content-section--soft">
        <article className="info-card info-card--large legal-page__card">
          <p className="eyebrow">Legal</p>
          <h1 className="legal-page__title">Política de Privacidad</h1>
          <p className="legal-page__lead">
            En SANALAB valoramos la privacidad de las personas que visitan nuestra web,
            consultan nuestros contenidos o se interesan por nuestros ebooks y recursos
            digitales. Esta Política de Privacidad explica de manera simple qué
            información podemos recopilar, para qué la usamos y cómo la protegemos.
          </p>
          <p className="legal-page__lead">
            Al navegar por este sitio web, completar formularios, escribirnos por
            WhatsApp o realizar una compra, aceptás las prácticas descriptas en esta
            política.
          </p>

          <div className="legal-page__sections">
            {privacySections.map((section) => (
              <section className="legal-page__section" key={section.title}>
                <h2>{section.title}</h2>
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {section.list ? (
                  <ul className="legal-page__list">
                    {section.list.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
          </div>

          <p className="legal-page__update">Última actualización: julio de 2026.</p>
        </article>
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
          <a href="/#inicio">Inicio</a>
          <a href="/#sobre">Sobre SANALAB</a>
          <a href="/#ebooks">Ebooks</a>
          <a href="/#preguntas">Preguntas frecuentes</a>
          <a href="/#whatsapp">WhatsApp</a>
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





