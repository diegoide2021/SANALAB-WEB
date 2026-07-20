import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sanalab.shop"),
  title: {
    default: "SANALAB | Ebooks de bienestar, microbiota y alimentación consciente",
    template: "%s | SANALAB",
  },
  description:
    "SANALAB reúne ebooks y recursos digitales sobre microbiota, digestión, inflamación, alimentación saludable y hábitos sostenibles para acompañarte con información clara y simple.",
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png", sizes: "48x48" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.png",
    apple: "/apple-icon.png",
  },
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
