type EbookCardProps = {
  title: string;
  description: string;
  benefits: string[];
  buyHref: string;
  whatsappHref: string;
  coverImage?: string;
  priceLabel?: string;
  buyLabel?: string;
};

export function EbookCard({
  title,
  description,
  benefits,
  buyHref,
  whatsappHref,
  coverImage,
  priceLabel = "Disponible próximamente",
  buyLabel = "Ver Ebook",
}: EbookCardProps) {
  const isLongTitle = title === "30 Alimentos Para Nutrir Tu Microbiota";

  return (
    <article className="ebook-card">
      <div className="ebook-card__cover" aria-hidden="true">
        {coverImage ? <img className="ebook-card__cover-image" src={coverImage} alt={title} /> : null}
      </div>

      <div className="ebook-card__body">
        <div className="ebook-card__copy">
          <h3 className={isLongTitle ? "ebook-card__title ebook-card__title--long" : "ebook-card__title"}>
            {title}
          </h3>
          <p>{description}</p>
        </div>

        <ul className="ebook-card__benefits" aria-label={`Beneficios de ${title}`}>
          {benefits.map((benefit) => (
            <li key={benefit}>{benefit}</li>
          ))}
        </ul>

        <div className="ebook-card__footer">
          <p className="ebook-card__price">{priceLabel}</p>
          <div className="ebook-card__actions">
            <a className="button button--primary" href={buyHref}>
              {buyLabel}
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
