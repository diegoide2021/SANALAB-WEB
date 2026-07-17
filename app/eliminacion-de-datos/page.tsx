import type { Metadata } from "next";
import { FooterPolicies } from "@/components/footer-policies";

const deletionSections = [
  {
    title: "1. Alcance de esta política",
    body: [
      "Esta política aplica a los datos personales que SANALAB pueda recopilar cuando una persona completa un formulario en la web, realiza una consulta por WhatsApp o email, solicita información sobre ebooks o recursos digitales, realiza una compra o deja datos para recibir un producto digital, se suscribe a novedades o interactúa con canales digitales vinculados a SANALAB.",
      "Esta política no aplica a datos procesados directamente por plataformas externas, como pasarelas de pago, redes sociales, servicios de mensajería, herramientas de analítica o proveedores tecnológicos independientes. En esos casos, cada plataforma administra sus propios procedimientos de eliminación de datos según sus políticas.",
    ],
  },
  {
    title: "2. Qué datos pueden ser eliminados",
    body: [
      "El usuario puede solicitar la eliminación de datos personales que SANALAB conserve y que permitan identificarlo o contactarlo.",
    ],
    list: [
      "Nombre y apellido.",
      "Correo electrónico.",
      "Número de teléfono o contacto de WhatsApp.",
      "Datos relacionados con consultas realizadas.",
      "Datos vinculados a la entrega de ebooks o productos digitales.",
      "Registros de comunicaciones comerciales o informativas.",
      "Cualquier otro dato personal compartido voluntariamente con SANALAB.",
    ],
    extra:
      "SANALAB no solicita información médica sensible a través de esta web. Si una persona compartió voluntariamente información relacionada con su salud en una consulta, podrá solicitar también la eliminación de ese contenido dentro de los registros disponibles de SANALAB.",
  },
  {
    title: "3. Cómo solicitar la eliminación de datos",
    body: [
      "Para solicitar la eliminación de datos personales, el usuario deberá comunicarse con SANALAB a través de los canales de contacto publicados en la web.",
      "La solicitud debería incluir, en la medida de lo posible, nombre y apellido, email o teléfono asociado a la consulta o compra, canal por el que se comunicó con SANALAB, una descripción clara de la solicitud e indicación de si desea eliminar, actualizar o corregir sus datos.",
      "Ejemplo de solicitud: \"Solicito la eliminación de mis datos personales asociados a este email/teléfono en la base de contactos de SANALAB.\"",
    ],
  },
  {
    title: "4. Verificación de identidad",
    body: [
      "Para proteger la privacidad y seguridad de los usuarios, SANALAB podrá solicitar información adicional razonable para verificar la identidad de la persona que realiza el pedido.",
      "Esta verificación tiene como objetivo evitar que terceros soliciten la eliminación, modificación o acceso a datos que no les pertenecen.",
      "SANALAB no pedirá contraseñas, datos completos de tarjetas, claves bancarias ni información sensible innecesaria para procesar la solicitud.",
    ],
  },
  {
    title: "5. Plazo de respuesta",
    body: [
      "Una vez recibida la solicitud y verificada la identidad del solicitante, SANALAB gestionará el pedido dentro de un plazo razonable y conforme a la normativa aplicable.",
      "Cuando corresponda legalmente, SANALAB procurará responder las solicitudes de supresión, rectificación o actualización dentro de los plazos establecidos por la normativa vigente.",
    ],
  },
  {
    title: "6. Datos que pueden conservarse por motivos legales o administrativos",
    body: [
      "En algunos casos, SANALAB podrá conservar determinada información aun cuando el usuario solicite la eliminación de sus datos.",
      "Esto puede ocurrir cuando la conservación sea necesaria para cumplir obligaciones legales, fiscales, contables o administrativas; acreditar una compra, pago, entrega o transacción; resolver reclamos, consultas o disputas; cumplir requerimientos de autoridades competentes; o proteger derechos, seguridad o intereses legítimos de SANALAB o de terceros.",
      "En esos casos, SANALAB limitará el uso de la información conservada únicamente a los fines necesarios.",
    ],
  },
  {
    title: "7. Eliminación de comunicaciones comerciales",
    body: [
      "El usuario puede solicitar en cualquier momento dejar de recibir comunicaciones informativas, promocionales o comerciales de SANALAB.",
      "Esto incluye mensajes vinculados con novedades sobre ebooks, contenidos educativos, recursos digitales, promociones y comunicaciones por WhatsApp o email.",
      "Una vez recibida la solicitud, SANALAB dejará de enviar comunicaciones comerciales al contacto indicado, salvo aquellas necesarias para responder consultas pendientes, gestionar compras, enviar productos adquiridos o cumplir obligaciones legales.",
    ],
  },
  {
    title: "8. Datos en plataformas externas",
    body: [
      "La web de SANALAB puede utilizar herramientas externas, como servicios de pago, WhatsApp, email, alojamiento web, analítica, formularios u otras plataformas digitales.",
      "Cuando los datos hayan sido tratados directamente por una plataforma externa, la eliminación deberá solicitarse también ante dicha plataforma, de acuerdo con sus propios términos y políticas.",
      "SANALAB podrá orientar al usuario dentro de sus posibilidades, pero no controla completamente los sistemas, bases de datos o tiempos de respuesta de proveedores externos.",
    ],
  },
  {
    title: "9. Eliminación de datos vinculados a compras digitales",
    body: [
      "Si el usuario adquirió un ebook o recurso digital, SANALAB podrá conservar ciertos datos mínimos relacionados con la compra, entrega o comprobante de operación, cuando sean necesarios por motivos administrativos, contables o legales.",
      "Esto no impedirá que el usuario solicite dejar de recibir comunicaciones comerciales o que se eliminen datos no necesarios para conservar el registro básico de la operación.",
    ],
  },
  {
    title: "10. Actualización o corrección de datos",
    body: [
      "Además de solicitar la eliminación, el usuario puede pedir la actualización o corrección de datos personales incorrectos, incompletos o desactualizados.",
      "Para eso, deberá comunicarse con SANALAB indicando qué dato desea corregir y cuál es la información correcta.",
    ],
  },
  {
    title: "11. Revocación del consentimiento",
    body: [
      "Cuando el tratamiento de datos se base en el consentimiento del usuario, este podrá revocarlo en cualquier momento.",
      "La revocación del consentimiento no afectará el tratamiento realizado previamente ni aquellos casos en los que SANALAB deba conservar información por motivos legales, administrativos o de seguridad.",
    ],
  },
  {
    title: "12. Contacto",
    body: [
      "Para solicitar la eliminación, actualización o corrección de datos personales, el usuario podrá comunicarse con SANALAB a través de los medios de contacto publicados en la web.",
    ],
    list: [
      "Asunto sugerido: Solicitud de eliminación de datos personales.",
      "Texto sugerido: Solicito la eliminación, actualización o revisión de mis datos personales registrados por SANALAB.",
    ],
  },
];

export const metadata: Metadata = {
  title: "Eliminación de Datos | SANALAB",
  description:
    "Política de Eliminación de Datos de SANALAB para la web, ebooks y recursos digitales.",
  keywords: [
    "SANALAB",
    "eliminación de datos",
    "datos personales",
    "privacidad",
    "ebooks",
    "recursos digitales",
    "borrado de datos",
    "supresión de datos",
    "protección de datos personales",
    "web de bienestar",
  ],
};

export default function DataDeletionPage() {
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
          <h1 className="legal-page__title">Eliminación de Datos</h1>
          <p className="legal-page__lead">
            En SANALAB respetamos la privacidad de las personas que visitan nuestra web,
            consultan nuestros contenidos, se comunican con nosotros o adquieren
            nuestros ebooks y recursos digitales.
          </p>
          <p className="legal-page__lead">
            Esta Política de Eliminación de Datos explica cómo una persona puede
            solicitar la eliminación, actualización o modificación de sus datos
            personales cuando hayan sido compartidos con SANALAB a través de la web,
            WhatsApp, email, formularios, compras digitales u otros canales de contacto.
          </p>

          <div className="legal-page__sections">
            {deletionSections.map((section) => (
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
                {"extra" in section && section.extra ? <p>{section.extra}</p> : null}
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





