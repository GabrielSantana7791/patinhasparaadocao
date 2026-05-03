"use client";

import { useState } from "react";
import { styles } from "./styles";

const WHATSAPP_NUMBER = "5531986149886";
const INSTAGRAM_URL = "https://instagram.com/patinhas_para_adocao";
const CONTACT_EMAIL = "patinhasparaadocao1@gmail.com";
const WHATSAPP_CONTACT_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Olá! Gostaria de saber mais sobre a ONG Patinhas para Adoção.")}`;
const EMAIL_URL = `mailto:${CONTACT_EMAIL}`;

const Footer = () => {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const links = [
    { id: "sobre", label: "Sobre" },
    { id: "adocao", label: "Adoção" },
    { id: "processo", label: "Como funciona" },
    { id: "ajudar", label: "Como ajudar" },
    { id: "historias", label: "Histórias felizes" },
    { id: "faq", label: "FAQ" },
    { id: "contato", label: "Contato" },
  ];

  return (
    <footer style={styles.footer} role="contentinfo">
      <div style={styles.container}>
        <div style={styles.column}>
          <a
            href="#inicio"
            style={styles.logoContainer}
            aria-label="Patinhas para Adoção — voltar ao topo"
          >
            <img
              src="/logo.png"
              alt="Logo Patinhas para Adoção"
              style={styles.logoImg}
              onError={(e) =>
                ((e.target as HTMLImageElement).style.display = "none")
              }
            />
            <span
              style={{ fontSize: "2.25rem", display: "none" }}
              aria-hidden="true"
            >
              🐾
            </span>
          </a>
          <p style={styles.brandName}>Patinhas para Adoção</p>
          <p style={styles.slogan}>Toda patinha merece um lar</p>
        </div>

        <nav aria-label="Links rápidos do rodapé">
          <h3 style={styles.navTitle}>Links rápidos</h3>
          <ul style={styles.linkList} role="list">
            {links.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  style={styles.link(hoveredLink === link.id)}
                  onMouseEnter={() => setHoveredLink(link.id)}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div style={styles.column}>
          <h3 style={styles.navTitle}>Contato</h3>
          <div style={{ ...styles.linkList, marginBottom: "1rem" }}>
            <a
              href={WHATSAPP_CONTACT_URL}
              style={styles.link(hoveredLink === "wa-footer")}
              onMouseEnter={() => setHoveredLink("wa-footer")}
              onMouseLeave={() => setHoveredLink(null)}
              target="_blank"
              rel="noopener noreferrer"
            >
              💬 WhatsApp
            </a>
            <a
              href={INSTAGRAM_URL}
              style={styles.link(hoveredLink === "ig-footer")}
              onMouseEnter={() => setHoveredLink("ig-footer")}
              onMouseLeave={() => setHoveredLink(null)}
              target="_blank"
              rel="noopener noreferrer"
            >
              📸 Instagram
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
          <p style={styles.infoText}>Lagoa Santa, MG</p>
          <p style={styles.infoText}>CNPJ: 64.944.050/0001-00</p>
        </div>
      </div>

      <div style={styles.bottomBar}>
        <p style={styles.bottomText}>
          Feito com carinho para ajudar mais patinhas a encontrarem um lar. 🐾
        </p>
      </div>
    </footer>
  );
};

export default Footer;
