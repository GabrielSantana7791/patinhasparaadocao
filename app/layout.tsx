import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import React from "react";
import "./globals.css";
import TranslationWrapper from "@/src/components/translatorWrapper/TranslationWrapper";
import Header from "@/src/components/homeHeader/HomeHeader";
import Footer from "@/src/components/footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Patinhas para Adoção | Toda patinha merece um lar",
  description:
    "A ONG Patinhas para Adoção conecta cães e gatos resgatados a famílias responsáveis em BH e Região.",
};

const styles = {
  html: {
    height: "100%",
    scrollBehavior: "smooth" as const,
  },
  body: {
    margin: 0,
    minHeight: "100%",
    display: "flex",
    flexDirection: "column" as const,
    backgroundColor: "#F7F4F4",
    color: "#4A3A3F",
    WebkitFontSmoothing: "antialiased" as const,
    MozOsxFontSmoothing: "grayscale" as const,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      style={styles.html}
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body
        style={{
          ...styles.body,
          fontFamily: "var(--font-geist-sans), sans-serif",
        }}
      >
        <TranslationWrapper>
          <Header />
          <main id="main-content"> {children}</main>
          <Footer />
        </TranslationWrapper>
      </body>
    </html>
  );
}
