import type { Metadata } from "next";
import "./globals.css";
import { Monsieur_La_Doulaise } from "next/font/google";

export const metadata: Metadata = {
  title: "Design by Evangelina | Visual Identity & Brand Design",
  description: "Design by Evangelina — a scrapbook of visual stories, brand identities, and creative experiments. Based in Austin TX, designing globally.",
};

const monsieur = Monsieur_La_Doulaise({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-monsieur",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth overflow-x-hidden">
      <body className={`${monsieur.variable} bg-cream text-ink antialiased overflowx--hidden`}>
        {children}
      </body>
    </html>
  );
}
