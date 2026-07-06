import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "SANALAB | Ebooks de bienestar digestivo",
  description:
    "Landing educativa y comercial de SANALAB con ebooks sobre microbiota, digestión, inflamación y hábitos sostenibles.",
};

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
