"use client";

import { useState, useEffect } from "react";
import { styles } from "./styles";
import { useTranslation } from "react-i18next";

const AdoptionProcess = () => {
  const { t } = useTranslation();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkWidth = () => setIsMobile(window.innerWidth < 1024);
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  const steps = [
    {
      title: t("process.steps.0.title"),
      text: t("process.steps.0.text"),
    },
    {
      title: t("process.steps.1.title"),
      text: t("process.steps.1.text"),
    },
    {
      title: t("process.steps.2.title"),
      text: t("process.steps.2.text"),
    },
    {
      title: t("process.steps.3.title"),
      text: t("process.steps.3.text"),
    },
  ];

  return (
    <section
      style={styles.section}
      id="processo"
      aria-labelledby="process-title"
    >
      <div style={styles.container}>
        <div style={styles.header}>
          <h2 style={styles.title} id="process-title">
            {t("process.title")}
          </h2>
          <p style={styles.subtitle}>{t("process.subtitle")}</p>
        </div>

        <ol
          style={styles.grid(isMobile)}
          aria-label="Passos do processo de adoção"
        >
          {steps.map((step, index) => (
            <li key={index} style={styles.stepItem}>
              <div style={styles.stepNumber} aria-hidden="true">
                {index + 1}
              </div>
              <div style={styles.stepContent}>
                <h3 style={styles.stepTitle}>{step.title}</h3>
                <p style={styles.stepText}>{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default AdoptionProcess;
