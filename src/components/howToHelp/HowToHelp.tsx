"use client";

import { useState, useEffect } from "react";
import { styles } from "./styles";
import { useTranslation } from "react-i18next";

const WHATSAPP_NUMBER = "5531986149886";
const getWhatsappUrl = (msg: string) => {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
};

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
      icone: "🍖",
      titulo: t("help.methods.0.title"),
      descricao: t("help.methods.0.description"),
      mensagem: t("help.methods.0.message"),
    },
    {
      icone: "💛",
      titulo: t("help.methods.1.title"),
      descricao: t("help.methods.1.description"),
      mensagem: t("help.methods.1.message"),
    },
    {
      icone: "🏠",
      titulo: t("help.methods.2.title"),
      descricao: t("help.methods.2.description"),
      mensagem: t("help.methods.2.message"),
    },
    {
      icone: "📲",
      titulo: t("help.methods.3.title"),
      descricao: t("help.methods.3.description"),
      mensagem: t("help.methods.3.message"),
    },
    {
      icone: "🤝",
      titulo: t("help.methods.4.title"),
      descricao: t("help.methods.4.description"),
      mensagem: t("help.methods.4.message"),
    },
    {
      icone: "🩺",
      titulo: t("help.methods.5.title"),
      descricao: t("help.methods.5.description"),
      mensagem: t("help.methods.5.message"),
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
                {method.icone}
              </div>
              <h3 style={styles.cardTitle}>{method.titulo}</h3>
              <p style={styles.cardText}>{method.descricao}</p>
              <a
                href={getWhatsappUrl(method.mensagem)}
                style={styles.cardBtn(hoveredBtnIndex === index)}
                onMouseEnter={() => setHoveredBtnIndex(index)}
                onMouseLeave={() => setHoveredBtnIndex(null)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${method.titulo} — abrir WhatsApp`}
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
