"use client";

import { useState } from "react";
import { styles } from "./styles";
import { useTranslation } from "react-i18next";
import { CONTACT_EMAIL, INSTAGRAM_URL } from "@/src/utils/contacts/contacts";
import { getWhatsappUrlForContact } from "@/src/utils/whatsapp/getWhatsappUrl";
import { NAV_LINKS } from "@/src/utils/navLinks";

const Footer = () => {
  const { t } = useTranslation();
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const EMAIL_URL = `mailto:${CONTACT_EMAIL}`;
  const WHATSAPP_CONTACT_URL = getWhatsappUrlForContact(
    t("footer.whatsapp_message"),
  );

  const _navLinks = { ...NAV_LINKS };
  delete _navLinks[0];

  return (
    <footer style={styles.footer} role="contentinfo">
      <div style={styles.container}>
        <div style={styles.column}>
          <a
            href="/#inicio"
            style={styles.logoContainer}
            aria-label={`${t("footer.logo")} — ${t("header.nav.home")}`}
          >
            <img
              src="/logo.png"
              alt={`Logo ${t("footer.logo")}`}
              style={styles.logoImg}
              onError={(e) =>
                ((e.target as HTMLImageElement).style.display = "none")
              }
            />
            <span style={{ fontSize: "2.25rem" }} aria-hidden="true">
              🐾
            </span>
          </a>
          <p style={styles.brandName}>{t("footer.logo")}</p>
          <p style={styles.slogan}>{t("footer.slogan")}</p>
        </div>

        <nav aria-label={t("footer.quick_links")}>
          <h3 style={styles.navTitle}>{t("footer.quick_links")}</h3>
          <ul style={styles.linkList} role="list">
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <a
                  href={`/${link.id}`}
                  style={styles.link(hoveredLink === link.id)}
                  onMouseEnter={() => setHoveredLink(link.id)}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  {t(link.label)}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div style={styles.column}>
          <h3 style={styles.navTitle}>{t("footer.contact_title")}</h3>
          <div style={{ ...styles.linkList, marginBottom: "1rem" }}>
            <a
              href={WHATSAPP_CONTACT_URL}
              style={styles.link(hoveredLink === "wa-footer")}
              onMouseEnter={() => setHoveredLink("wa-footer")}
              onMouseLeave={() => setHoveredLink(null)}
              target="_blank"
              rel="noopener noreferrer"
            >
              💬 {t("contact.whatsapp")}
            </a>
            <a
              href={INSTAGRAM_URL}
              style={styles.link(hoveredLink === "ig-footer")}
              onMouseEnter={() => setHoveredLink("ig-footer")}
              onMouseLeave={() => setHoveredLink(null)}
              target="_blank"
              rel="noopener noreferrer"
            >
              📸 {t("contact.instagram")}
            </a>
            <a
              href={EMAIL_URL}
              style={styles.link(hoveredLink === "mail-footer")}
              onMouseEnter={() => setHoveredLink("mail-footer")}
              onMouseLeave={() => setHoveredLink(null)}
            >
              ✉️ {CONTACT_EMAIL}
            </a>
          </div>
          <p style={styles.infoText}>{t("footer.location")}</p>
          <p style={styles.infoText}>{t("footer.cnpj")}</p>
        </div>
      </div>

      <div style={styles.bottomBar}>
        <p style={styles.bottomText}>{t("footer.made_with")}</p>
      </div>
    </footer>
  );
};

export default Footer;
