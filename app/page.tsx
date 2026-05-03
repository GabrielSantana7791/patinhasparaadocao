"use client";

import { styles } from "./styles";
import { useState } from "react";
import Hero from "../src/components/hero/Hero";
import About from "../src/components/aboutUs/About";
import Adoption from "../src/components/adoption/Adoption";
import AdoptionProcess from "../src/components/adoptionProcess/AdoptionProcess";
import HowToHelp from "../src/components/HowToHelp/HowToHelp";
import Faq from "../src/components/faq/Faq";
import Footer from "@/src/components/footer/Footer";
import Header from "../src/components/homeHeader/HomeHeader";
import { useTranslation } from "react-i18next";

const WHATSAPP_NUMBER = "5531986149886";
const INSTAGRAM_URL = "https://instagram.com/patinhas_para_adocao";
const CONTACT_EMAIL = "patinhasparaadocao1@gmail.com";
const WHATSAPP_CONTACT_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Olá! Gostaria de saber mais sobre a ONG Patinhas para Adoção.")}`;
const EMAIL_URL = `mailto:${CONTACT_EMAIL}`;

export default function Home() {
  const [hoveredBtn, setHoveredBtn] = useState<string | null>(null);
  const { t } = useTranslation();

  return (
    <div className="flex flex-col min-h-full">
      <Header />
      <main id="main-content">
        <Hero />
        <About />
        <Adoption />
        <AdoptionProcess />
        <HowToHelp />

        <section style={styles.ctaSection} aria-labelledby="cta-title">
          <div style={styles.container}>
            <div style={styles.ctaContent}>
              <h2
                style={{ ...styles.sectionTitle, color: "#FFFFFF" }}
                id="cta-title"
              >
                {t("cta_banner.title")}
              </h2>
              <p
                style={{
                  fontSize: "1.05rem",
                  color: "rgba(255, 255, 255, 0.9)",
                  lineHeight: 1.7,
                }}
              >
                {t("cta_banner.text")}
              </p>
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

        <Faq />

        <section
          style={styles.section}
          id="contato"
          aria-labelledby="contact-title"
        >
          <div style={styles.container}>
            <div style={styles.sectionHeader}>
              <h2 style={styles.sectionTitle} id="contact-title">
                {t("contact.title")}
              </h2>
              <p style={styles.sectionSubtitle}>{t("contact.subtitle")}</p>
              <p style={styles.sectionText}>{t("contact.text")}</p>
            </div>

            <div style={styles.contactActions}>
              <a
                href={WHATSAPP_CONTACT_URL}
                style={styles.contactBtn(hoveredBtn === "wa", "wa")}
                onMouseEnter={() => setHoveredBtn("wa")}
                onMouseLeave={() => setHoveredBtn(null)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span style={{ fontSize: "1.3rem" }}>💬</span>{" "}
                {t("contact.whatsapp")}
              </a>
              <a
                href={INSTAGRAM_URL}
                style={styles.contactBtn(hoveredBtn === "ig", "ig")}
                onMouseEnter={() => setHoveredBtn("ig")}
                onMouseLeave={() => setHoveredBtn(null)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span style={{ fontSize: "1.3rem" }}>📸</span>{" "}
                {t("contact.instagram")}
              </a>
              <a
                href={EMAIL_URL}
                style={styles.contactBtn(hoveredBtn === "mail", "mail")}
                onMouseEnter={() => setHoveredBtn("mail")}
                onMouseLeave={() => setHoveredBtn(null)}
              >
                <span style={{ fontSize: "1.3rem" }}>✉️</span>{" "}
                {t("contact.email")}
              </a>
            </div>

            <div style={styles.contactInfo}>
              <dl style={styles.contactDetails}>
                <div style={styles.contactDetail}>
                  <dt style={styles.contactDetailLabel}>
                    {t("contact.location")}
                  </dt>
                  <dd style={styles.contactDetailValue}>
                    {t("contact.location_value")}
                  </dd>
                </div>
                <div style={styles.contactDetail}>
                  <dt style={styles.contactDetailLabel}>
                    {t("contact.attendance")}
                  </dt>
                  <dd style={styles.contactDetailValue}>
                    {t("contact.attendance_value")}
                  </dd>
                </div>
                <div style={styles.contactDetail}>
                  <dt style={styles.contactDetailLabel}>{t("contact.cnpj")}</dt>
                  <dd style={styles.contactDetailValue}>
                    {t("contact.cnpj_value")}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
