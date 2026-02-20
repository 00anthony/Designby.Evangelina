import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Design by Evangelina | Visual Identity & Brand Design",
  description: "Design by Evangelina — a scrapbook of visual stories, brand identities, and creative experiments. Based in London, designing globally.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-cream text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
