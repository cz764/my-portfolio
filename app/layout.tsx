import type { Metadata } from "next";
import { Ysabeau, Carrois_Gothic } from "next/font/google";
import "./globals.css";

const ysabeau = Ysabeau({
  variable: "--font-ysabeau",
  subsets: ["latin"],
});

const carroisGothic = Carrois_Gothic({
  variable: "--font-carrois-gothic",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "C.Z.",
  description: "See my work and previous experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`font-sans ${ysabeau.variable} ${carroisGothic.variable}`}
    >
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
