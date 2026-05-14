"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import { styles } from "./styles";
import { CONTACT_EMAIL, INSTAGRAM_URL } from "@/src/utils/contacts/contacts";
import { getWhatsappUrlForContact } from "@/src/utils/whatsapp/getWhatsappUrl";

const WHATSAPP_CONTACT_URL = getWhatsappUrlForContact(
  "Olá! Gostaria de saber mais sobre a ONG Patinhas para Adoção.",
);
const EMAIL_URL = `mailto:${CONTACT_EMAIL}`;

const Contact = () => {
  const { t } = useTranslation();
  const [hoveredBtn, setHoveredBtn] = useState<string | null>(null);

  return (
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
            <span style={styles.contactBtnIcon}>💬</span>{" "}
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
            <span style={styles.contactBtnIcon}>📸</span>{" "}
            {t("contact.instagram")}
          </a>
          <a
            href={EMAIL_URL}
            style={styles.contactBtn(hoveredBtn === "mail", "mail")}
            onMouseEnter={() => setHoveredBtn("mail")}
            onMouseLeave={() => setHoveredBtn(null)}
          >
            <span style={styles.contactBtnIcon}>✉️</span> {t("contact.email")}
          </a>
        </div>

        <div style={styles.contactInfo}>
          <dl style={styles.contactDetails}>
            <div style={styles.contactDetail}>
              <dt style={styles.contactDetailLabel}>{t("contact.location")}</dt>
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
  );
};

export default Contact;
