import type { Metadata } from "next";
import { Inria_Serif, Inter } from "next/font/google";
import "./globals.css";

const inria = Inria_Serif({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-inria",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Notes-Taking App",
  description: "A notes-taking app made by JeanVega",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inria.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
