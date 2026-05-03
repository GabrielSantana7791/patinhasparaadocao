"use client";

import { useState, useEffect } from "react";
import { styles } from "./styles";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [hoveredBtn, setHoveredBtn] = useState<string | null>(null);
  const { t } = useTranslation();

  useEffect(() => {
    const checkWidth = () => setIsMobile(window.innerWidth < 1024);
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  return (
    <section style={styles.section} id="inicio" aria-labelledby="hero-title">
      <div style={styles.container(isMobile)}>
        <div style={styles.content}>
          <span style={styles.badge}>{t("hero.badge")}</span>
          <h1 style={styles.title(isMobile)} id="hero-title">
            {t("hero.title")}
          </h1>
          <p style={styles.text}>{t("hero.text")}</p>
          <div style={styles.actions}>
            <a
              href="#adocao"
              style={styles.btnOrange(hoveredBtn === "adocao")}
              onMouseEnter={() => setHoveredBtn("adocao")}
              onMouseLeave={() => setHoveredBtn(null)}
            >
              {t("hero.cta_primary")}
            </a>
            <a
              href="#ajudar"
              style={styles.btnOutline(hoveredBtn === "ajudar")}
              onMouseEnter={() => setHoveredBtn("ajudar")}
              onMouseLeave={() => setHoveredBtn(null)}
            >
              {t("hero.cta_secondary")}
            </a>
          </div>
          <div style={styles.statsWrap} aria-label="Diferenciais da ONG">
            {[
              { icon: "🏠", label: t("hero.stats.adoption") },
              { icon: "❤️", label: t("hero.stats.love") },
              { icon: "🌟", label: t("hero.stats.new_beginnings") },
            ].map((stat, i) => (
              <div key={i} style={styles.statItem}>
                <span style={styles.statIcon} aria-hidden="true">
                  {stat.icon}
                </span>
                <span style={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={styles.imageWrap}>
          <img
            src="/hero-pets.jpg"
            alt="Cães e gatos felizes aguardando adoção"
            style={styles.image}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
