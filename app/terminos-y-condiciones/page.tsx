import type { Metadata } from "next";
import { FooterPolicies } from "@/components/footer-policies";

const termsSections = [
  {
    title: "1. Sobre SANALAB",
    body: [
      "SANALAB es una propuesta digital orientada a compartir contenidos educativos sobre bienestar integral, alimentación, microbiota, digestión, inflamación, hábitos saludables y recursos prácticos para la vida cotidiana.",
      "El objetivo de SANALAB es brindar información clara, simple y aplicable, sin promover soluciones mágicas, tratamientos instantáneos ni promesas extremas.",
      "Los contenidos publicados en esta web tienen fines informativos, educativos y de orientación general.",
    ],
  },
  {
    title: "2. Uso de la web",
    body: [
      "El usuario se compromete a utilizar esta web de forma responsable, lícita y respetuosa. No está permitido utilizar el sitio para fines fraudulentos, ilegales, abusivos o que puedan afectar el funcionamiento de la web, la seguridad del sistema o los derechos de SANALAB o de terceros.",
      "SANALAB podrá modificar, actualizar, suspender o eliminar secciones, contenidos, funcionalidades o productos de la web cuando lo considere necesario, sin obligación de aviso previo.",
    ],
  },
  {
    title: "3. Productos digitales",
    body: [
      "SANALAB podrá ofrecer ebooks, guías, recetarios, recursos descargables u otros productos digitales relacionados con alimentación, bienestar digestivo, microbiota, hábitos saludables y temáticas afines.",
      "Cada producto digital contará con una descripción general de su contenido, objetivo y modalidad de entrega. El usuario es responsable de leer dicha información antes de realizar una compra.",
      "Los productos digitales se entregarán por los medios informados en la web, que podrán incluir email, WhatsApp, enlaces de descarga u otros canales digitales.",
    ],
  },
  {
    title: "4. Compras y pagos",
    body: [
      "Las compras podrán realizarse a través de pasarelas de pago externas, links de pago u otros medios habilitados por SANALAB.",
      "El uso de plataformas externas de pago se encuentra sujeto a sus propios términos, condiciones, políticas de privacidad y medidas de seguridad.",
      "SANALAB no almacena datos completos de tarjetas de crédito, débito ni información sensible de medios de pago.",
      "La compra se considerará confirmada una vez aprobado el pago por la plataforma correspondiente. Luego de la confirmación, SANALAB podrá enviar el producto digital al usuario por el canal informado.",
    ],
  },
  {
    title: "5. Precios, disponibilidad y modificaciones",
    body: [
      "Los precios, promociones, disponibilidad de productos y condiciones comerciales podrán modificarse en cualquier momento.",
      "SANALAB procurará mantener la información actualizada, pero no garantiza que todos los datos publicados estén libres de errores tipográficos, técnicos o de actualización.",
      "En caso de detectarse un error en el precio, descripción o disponibilidad de un producto, SANALAB podrá corregirlo y, si corresponde, comunicarse con el usuario para resolver la situación.",
    ],
  },
  {
    title: "6. Entrega de productos digitales",
    body: [
      "Los ebooks y recursos digitales serán entregados una vez confirmado el pago, salvo que se indique expresamente otra condición.",
      "La entrega podrá realizarse mediante email, WhatsApp, enlace de descarga o cualquier otro medio informado por SANALAB.",
      "El usuario es responsable de proporcionar correctamente sus datos de contacto. SANALAB no será responsable por demoras o problemas de entrega derivados de datos incorrectos, incompletos o desactualizados proporcionados por el usuario.",
    ],
  },
  {
    title: "7. Cambios, devoluciones y derecho de arrepentimiento",
    body: [
      "Al tratarse de productos digitales, una vez entregado o descargado el contenido, podrían aplicarse condiciones especiales para cambios o devoluciones.",
      "Sin perjuicio de lo anterior, SANALAB respetará los derechos que correspondan al consumidor según la normativa aplicable.",
      "Si el usuario desea solicitar la cancelación de una compra, arrepentimiento, cambio o revisión de una operación, podrá comunicarse a través de los canales de contacto publicados en la web.",
      "Si en el futuro se define una operatoria de venta online más específica, SANALAB podrá incorporar un botón visible de arrepentimiento o un enlace dedicado para facilitar ese trámite.",
    ],
  },
  {
    title: "8. Contenido educativo y no médico",
    body: [
      "Los contenidos de SANALAB, incluyendo textos, ebooks, guías, recursos digitales, publicaciones, recomendaciones generales y comunicaciones por WhatsApp o email, tienen fines educativos e informativos.",
      "SANALAB no brinda diagnósticos médicos, tratamientos personalizados ni indicaciones clínicas individuales.",
      "La información publicada no reemplaza la consulta con médicos, nutricionistas, psicólogos ni otros profesionales de la salud.",
      "Ante síntomas persistentes, enfermedades, condiciones médicas, embarazo, lactancia, uso de medicación o dudas específicas sobre salud, se recomienda consultar con un profesional calificado.",
    ],
  },
  {
    title: "9. Propiedad intelectual",
    body: [
      "Todos los contenidos de SANALAB, incluyendo textos, ebooks, imágenes, diseños, ilustraciones, recursos digitales, estructura visual, marca, identidad y materiales publicados en la web, pertenecen a SANALAB o cuentan con autorización para su uso.",
      "No está permitido copiar, reproducir, distribuir, vender, modificar, publicar, compartir o utilizar los contenidos de SANALAB con fines comerciales sin autorización previa y por escrito.",
      "La compra de un ebook o recurso digital otorga al usuario una licencia personal de uso. No autoriza su reventa, distribución, publicación en redes, envío masivo ni reproducción no autorizada.",
    ],
  },
  {
    title: "10. Uso personal de los ebooks",
    body: [
      "Los ebooks y recursos digitales adquiridos en SANALAB son para uso personal e individual del comprador, salvo que se indique expresamente lo contrario.",
      "No está permitido compartir archivos pagos con terceros, subirlos a plataformas públicas, reenviarlos de forma masiva ni utilizarlos para fines comerciales, educativos o profesionales sin autorización expresa.",
    ],
  },
  {
    title: "11. Comunicaciones por WhatsApp y email",
    body: [
      "El usuario podrá comunicarse con SANALAB por WhatsApp, email u otros canales habilitados.",
      "Al iniciar una consulta, el usuario acepta recibir respuestas vinculadas con su solicitud, información sobre productos, asistencia relacionada con compras o contenidos de interés de SANALAB.",
      "El usuario podrá solicitar en cualquier momento dejar de recibir comunicaciones informativas o comerciales.",
    ],
  },
  {
    title: "12. Limitación de responsabilidad",
    body: [
      "SANALAB procura ofrecer información clara, útil y actualizada. Sin embargo, no garantiza resultados específicos derivados del uso de sus contenidos, ebooks o recursos digitales.",
      "Cada persona es responsable de aplicar la información de acuerdo con su contexto, necesidades, estado de salud y criterio personal.",
      "SANALAB no será responsable por decisiones tomadas por el usuario a partir de contenidos generales sin acompañamiento profesional individual.",
    ],
  },
  {
    title: "13. Enlaces a terceros",
    body: [
      "La web puede contener enlaces a plataformas externas, pasarelas de pago, redes sociales, WhatsApp u otros sitios de terceros.",
      "SANALAB no controla ni se responsabiliza por el contenido, funcionamiento, políticas, seguridad o prácticas de privacidad de dichos sitios externos.",
    ],
  },
  {
    title: "14. Privacidad y datos personales",
    body: [
      "El tratamiento de datos personales se rige por la Política de Privacidad de SANALAB, disponible en esta web.",
      "Se recomienda leer la Política de Privacidad para conocer qué información puede recopilar SANALAB, cómo se utiliza y cuáles son los derechos del usuario.",
    ],
  },
  {
    title: "15. Modificaciones de estos términos",
    body: [
      "SANALAB podrá actualizar estos Términos y Condiciones cuando lo considere necesario.",
      "Las modificaciones serán publicadas en esta misma página y tendrán vigencia desde su publicación.",
      "El uso continuado de la web luego de la actualización implica la aceptación de los nuevos términos.",
    ],
  },
  {
    title: "16. Contacto",
    body: [
      "Para consultas relacionadas con estos Términos y Condiciones, productos digitales, compras, entregas o solicitudes vinculadas con el uso de la web, el usuario podrá comunicarse con SANALAB a través de los medios de contacto publicados en el sitio.",
    ],
  },
];

export const metadata: Metadata = {
  title: "Términos y Condiciones | SANALAB",
  description:
    "Términos y Condiciones de SANALAB para la web, ebooks y recursos digitales.",
  keywords: [
    "SANALAB",
    "términos y condiciones",
    "uso del sitio",
    "ebooks",
    "productos digitales",
    "recursos digitales",
    "compras digitales",
    "condiciones de uso",
    "web de bienestar",
    "contenido educativo",
  ],
};

export default function TermsAndConditionsPage() {
  return (
    <main className="page-shell">
      <header className="topbar">
        <div className="topbar__inner">
          <a className="brand" href="/#inicio" aria-label="Ir al inicio de SANALAB">
            <img
              className="brand__logo"
              src="/img/SANALAB%20LOGO%20FONDO%20TRANPARENTE%20recortado.png"
              alt="Logo de SANALAB"
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
          <h1 className="legal-page__title">Términos y Condiciones</h1>
          <p className="legal-page__lead">
            Bienvenido/a a SANALAB. Estos Términos y Condiciones regulan el acceso,
            navegación y uso de esta web, así como la compra o consulta de ebooks,
            recursos digitales y contenidos ofrecidos por SANALAB.
          </p>
          <p className="legal-page__lead">
            Al utilizar este sitio web, navegar por sus secciones, realizar consultas,
            acceder a contenidos o adquirir productos digitales, aceptás estos Términos
            y Condiciones. Si no estás de acuerdo con ellos, te recomendamos no utilizar
            la web ni realizar compras a través de este sitio.
          </p>

          <div className="legal-page__sections">
            {termsSections.map((section) => (
              <section className="legal-page__section" key={section.title}>
                <h2>{section.title}</h2>
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
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
            alt="Logo de SANALAB"
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





