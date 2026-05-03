"use client";

import { useTranslation } from "react-i18next";
import { styles } from "./styles";

interface StoryItem {
  quote: string;
  name: string;
  pet: string;
  icon: string;
}

const HappyStories = () => {
  const { t } = useTranslation();

  const stories = t("stories.items", { returnObjects: true }) as StoryItem[];

  return (
    <section
      style={styles.section}
      id="historias"
      aria-labelledby="stories-title"
    >
      <div style={styles.container}>
        <div style={styles.header}>
          <h2 style={styles.title} id="stories-title">
            {t("stories.title")}
          </h2>
          <p style={styles.subtitle}>{t("stories.subtitle")}</p>
        </div>

        <div style={styles.grid} role="list">
          {Array.isArray(stories) &&
            stories.map((story, index) => (
              <article key={index} style={styles.card} role="listitem">
                <div style={styles.imageWrap} aria-hidden="true">
                  <span style={styles.imagePlaceholder}>{story.icon}</span>
                </div>
                <div style={styles.content}>
                  <div style={styles.quoteContainer}>
                    <span style={styles.quoteIcon}>&quot;</span>
                    <p style={styles.quote}>{story.quote}</p>
                  </div>
                  <footer style={styles.footer}>
                    <strong style={styles.name}>{story.name}</strong>
                    <span style={styles.pet}>{story.pet}</span>
                  </footer>
                </div>
              </article>
            ))}
        </div>
      </div>
    </section>
  );
};

export default HappyStories;
