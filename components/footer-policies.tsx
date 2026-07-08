"use client";

import { useMemo, useState } from "react";

type FooterPolicy = {
  href: string;
  label: string;
  keyName: string;
};

const policies: FooterPolicy[] = [
  {
    keyName: "privacy",
    href: "/politica-de-privacidad",
    label: "Política de Privacidad",
  },
  {
    keyName: "terms",
    href: "/terminos-y-condiciones",
    label: "términos y condiciones",
  },
  {
    keyName: "deletion",
    href: "/eliminacion-de-datos",
    label: "eliminación de datos",
  },
];

export function FooterPolicies() {
  const [checked, setChecked] = useState<Record<string, boolean>>({
    privacy: false,
    terms: false,
    deletion: false,
  });

  const items = useMemo(() => policies, []);

  return (
    <div className="footer__policies" aria-label="Políticas legales">
      {items.map((policy) => (
        <div className="footer__policy" key={policy.keyName}>
          <input
            type="checkbox"
            checked={checked[policy.keyName]}
            onChange={() =>
              setChecked((current) => ({
                ...current,
                [policy.keyName]: !current[policy.keyName],
              }))
            }
            aria-label={policy.label}
          />
          <a className="footer__policy-link" href={policy.href}>
            <span>{policy.label}</span>
          </a>
        </div>
      ))}
    </div>
  );
}
