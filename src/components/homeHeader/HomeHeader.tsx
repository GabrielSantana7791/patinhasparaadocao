"use client";

import { useState, useEffect } from "react";
import { styles } from "./styles";
import { useTranslation } from "react-i18next";

const HomeHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [isCtaHovered, setIsCtaHovered] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const checkWidth = () => setIsMobile(window.innerWidth < 1024);
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  const navLinks = [
    { id: "inicio", label: t("header.nav.home") },
    { id: "sobre", label: t("header.nav.about") },
    { id: "adocao", label: t("header.nav.adoption") },
    { id: "ajudar", label: t("header.nav.help") },
    { id: "historias", label: t("header.nav.stories") },
    { id: "faq", label: t("header.nav.faq") },
    { id: "contato", label: t("header.nav.contact") },
  ];

  return (
    <header style={styles.header} role="banner">
      <div style={styles.container}>
        <a
          href="/#inicio"
          style={styles.logoLink}
          aria-label="Patinhas para Adoção — página inicial"
        >
          <img
            src="/logo.png"
            alt="Logo Patinhas para Adoção"
            style={styles.logoImg}
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
              if ((e.target as HTMLImageElement).nextElementSibling) {
                (
                  (e.target as HTMLImageElement)
                    .nextElementSibling as HTMLElement
                ).style.display = "flex";
              }
            }}
          />
          <span style={styles.logoFallback} aria-hidden="true">
            🐾
          </span>
          <span style={styles.logoText}>{t("header.logo")}</span>
        </a>

        <nav
          style={styles.nav(isMenuOpen, isMobile)}
          aria-label="Menu principal"
        >
          <ul style={styles.navList(isMobile)} role="list">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`/#${link.id}`}
                  style={styles.navLink(hoveredLink === link.id)}
                  onMouseEnter={() => setHoveredLink(link.id)}
                  onMouseLeave={() => setHoveredLink(null)}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href="#adocao"
          style={styles.cta(isCtaHovered, isMobile)}
          onMouseEnter={() => setIsCtaHovered(true)}
          onMouseLeave={() => setIsCtaHovered(false)}
        >
          {t("header.cta")}
        </a>

        <button
          style={styles.hamburger(isMobile)}
          aria-label="Abrir menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {[0, 1, 2].map((i) => (
            <span key={i} style={styles.hamburgerBar(i, isMenuOpen)}></span>
          ))}
        </button>
      </div>
    </header>
  );
};

export default HomeHeader;
