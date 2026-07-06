type EbookCardProps = {
  title: string;
  description: string;
  benefits: string[];
  buyHref: string;
  whatsappHref: string;
};

export function EbookCard({
  title,
  description,
  benefits,
  buyHref,
  whatsappHref,
}: EbookCardProps) {
  return (
    <article className="ebook-card">
      <div className="ebook-card__cover" aria-hidden="true">
        <div className="ebook-card__cover-badge">SANALAB</div>
        <div className="ebook-card__cover-content">
          <span className="ebook-card__cover-label">Ebook digital</span>
          <h3>{title}</h3>
        </div>
      </div>

      <div className="ebook-card__body">
        <div className="ebook-card__copy">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>

        <ul className="ebook-card__benefits" aria-label={`Beneficios de ${title}`}>
          {benefits.map((benefit) => (
            <li key={benefit}>{benefit}</li>
          ))}
        </ul>

        <div className="ebook-card__footer">
          <p className="ebook-card__price">Disponible próximamente</p>
          <div className="ebook-card__actions">
            <a className="button button--primary" href={buyHref}>
              Ver ebook
            </a>
            <a className="button button--secondary" href={whatsappHref}>
              Consultar por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
