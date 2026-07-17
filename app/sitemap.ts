import type { MetadataRoute } from "next";

const baseUrl = "https://www.sanalab.shop";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${baseUrl}/`,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/politica-de-privacidad`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/terminos-y-condiciones`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/eliminacion-de-datos`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];
}
