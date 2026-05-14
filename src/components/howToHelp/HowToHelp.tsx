"use client";

import { useState, useEffect } from "react";
import { styles } from "./styles";
import { useTranslation } from "react-i18next";
import { getWhatsappUrlForContact } from "@/src/utils/whatsapp/getWhatsappUrl";

const HowToHelp = () => {
  const { t } = useTranslation();
  const [isMobile, setIsMobile] = useState(false);
  const [hoveredCardIndex, setHoveredCardIndex] = useState<number | null>(null);
  const [hoveredBtnIndex, setHoveredBtnIndex] = useState<number | null>(null);

  useEffect(() => {
    const checkWidth = () => setIsMobile(window.innerWidth < 1024);
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  const helpMethods = [
    {
      icon: "🍖",
      title: t("help.methods.0.title"),
      description: t("help.methods.0.description"),
      message: t("help.methods.0.message"),
    },
    {
      icon: "💛",
      title: t("help.methods.1.title"),
      description: t("help.methods.1.description"),
      message: t("help.methods.1.message"),
    },
    {
      icon: "🏠",
      title: t("help.methods.2.title"),
      description: t("help.methods.2.description"),
      message: t("help.methods.2.message"),
    },
    {
      icon: "📲",
      title: t("help.methods.3.title"),
      description: t("help.methods.3.description"),
      message: t("help.methods.3.message"),
    },
    {
      icon: "🤝",
      title: t("help.methods.4.title"),
      description: t("help.methods.4.description"),
      message: t("help.methods.4.message"),
    },
    {
      icon: "🩺",
      title: t("help.methods.5.title"),
      description: t("help.methods.5.description"),
      message: t("help.methods.5.message"),
    },
  ];

  return (
    <section style={styles.section} id="ajudar" aria-labelledby="help-title">
      <div style={styles.container}>
        <div style={styles.header}>
          <h2 style={styles.title(isMobile)} id="help-title">
            {t("help.title")}
          </h2>
          <p style={styles.subtitle(isMobile)}>{t("help.subtitle")}</p>
        </div>
        <div style={styles.grid} role="list">
          {helpMethods.map((method, index) => (
            <article
              key={index}
              style={styles.card(hoveredCardIndex === index)}
              onMouseEnter={() => setHoveredCardIndex(index)}
              onMouseLeave={() => setHoveredCardIndex(null)}
              role="listitem"
            >
              <div style={styles.cardIcon} aria-hidden="true">
                {method.icon}
              </div>
              <h3 style={styles.cardTitle}>{method.title}</h3>
              <p style={styles.cardText}>{method.description}</p>
              <a
                href={getWhatsappUrlForContact(method.message)}
                style={styles.cardBtn(hoveredBtnIndex === index)}
                onMouseEnter={() => setHoveredBtnIndex(index)}
                onMouseLeave={() => setHoveredBtnIndex(null)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${method.title} — abrir WhatsApp`}
              >
                {t("help.btn")}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowToHelp;
