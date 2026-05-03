"use client";

import React, { useState } from "react";
import { styles } from "./styles";
import { useTranslation } from "react-i18next";

const About: React.FC = () => {
  const { t } = useTranslation();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const cards = [
    {
      icon: "🐕",
      title: t("about.rescue.title"),
      text: t("about.rescue.text"),
    },
    {
      icon: "💊",
      title: t("about.care.title"),
      text: t("about.care.text"),
    },
    {
      icon: "🏡",
      title: t("about.adoption.title"),
      text: t("about.adoption.text"),
    },
  ];

  return (
    <section style={styles.section} id="sobre" aria-labelledby="about-title">
      <div style={styles.container}>
        <div style={styles.sectionHeader}>
          <h2 style={styles.sectionTitle} id="about-title">
            {t("about.title")}
          </h2>
          <p style={styles.sectionSubtitle}>{t("about.subtitle")}</p>
        </div>

        <div style={styles.grid} role="list">
          {cards.map((card, index) => (
            <article
              key={index}
              style={styles.card(hoveredIndex === index)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              role="listitem"
            >
              <div style={styles.cardIcon} aria-hidden="true">
                {card.icon}
              </div>
              <h3 style={styles.cardTitle}>{card.title}</h3>
              <p style={styles.cardText}>{card.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
