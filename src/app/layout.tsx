import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BY'S MODULAR CITY ARCHIVE",
  description: "A personal digital collection of modular architecture."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
