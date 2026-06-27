import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Clínica Sorriso Pleno | Odontologia em São Luís",
    template: "%s | Clínica Sorriso Pleno",
  },
  description:
    "Clínica odontológica em São Luís com atendimento humanizado, tecnologia moderna e especialistas em clareamento, ortodontia, implante e estética dental.",
  keywords: [
    "dentista São Luís",
    "clínica odontológica",
    "clareamento dental",
    "ortodontia",
    "implante dentário",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
