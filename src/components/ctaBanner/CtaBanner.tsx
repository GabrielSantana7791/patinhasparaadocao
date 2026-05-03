"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import { styles } from "./styles";

const CtaBanner = () => {
  const { t } = useTranslation();
  const [hoveredBtn, setHoveredBtn] = useState<string | null>(null);

  return (
    <section style={styles.ctaSection} aria-labelledby="cta-title">
      <div style={styles.container}>
        <div style={styles.ctaContent}>
          <h2 style={styles.ctaTitle} id="cta-title">
            {t("cta_banner.title")}
          </h2>
          <p style={styles.ctaText}>{t("cta_banner.text")}</p>
          <div style={styles.ctaActions}>
            <a
              href="#adocao"
              style={{
                ...styles.btn,
                ...styles.btnWhite(hoveredBtn === "adopt"),
              }}
              onMouseEnter={() => setHoveredBtn("adopt")}
              onMouseLeave={() => setHoveredBtn(null)}
            >
              {t("cta_banner.btn_adopt")}
            </a>
            <a
              href="#ajudar"
              style={{
                ...styles.btn,
                ...styles.btnWhiteOutline(hoveredBtn === "help"),
              }}
              onMouseEnter={() => setHoveredBtn("help")}
              onMouseLeave={() => setHoveredBtn(null)}
            >
              {t("cta_banner.btn_help")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;
