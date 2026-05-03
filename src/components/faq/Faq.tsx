"use client";
import { useState } from "react";
import { styles } from "./styles";
import { useTranslation } from "react-i18next";

const Faq = () => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = t("faq.items", {
    returnObjects: true,
  }) as { q: string; a: string }[];

  return (
    <section style={styles.section} id="faq" aria-labelledby="faq-title">
      <div style={styles.container}>
        <div style={styles.header}>
          <h2 style={styles.title} id="faq-title">
            {t("title")}
          </h2>
        </div>

        <div style={styles.listContainer}>
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            const isHovered = hoveredIndex === index;
            return (
              <div key={index} style={styles.item}>
                <button
                  style={styles.question(isOpen, isHovered)}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  aria-expanded={isOpen}
                  onClick={() => toggleFaq(index)}
                >
                  {item.q}
                  <span style={styles.icon(isOpen)} aria-hidden="true">
                    +
                  </span>
                </button>
                <div style={styles.answerContainer(isOpen)}>
                  <div style={styles.answerInner}>
                    <div style={styles.answerText}>
                      <p>{item.a}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faq;
