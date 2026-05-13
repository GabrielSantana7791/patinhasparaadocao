import { CSSProperties } from "react";

interface CtaBannerStyle {
  ctaSection: CSSProperties;
  container: CSSProperties;
  ctaContent: CSSProperties;
  ctaTitle: CSSProperties;
  ctaText: CSSProperties;
  ctaActions: CSSProperties;
  btn: CSSProperties;
  btnWhite: (isHovered: boolean) => CSSProperties;
  btnWhiteOutline: (isHovered: boolean) => CSSProperties;
}

export const styles: CtaBannerStyle = {
  ctaSection: {
    backgroundColor: "#F28C33",
    padding: "80px 0",
    color: "#FFFFFF",
    textAlign: "center" as const,
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 20px",
  },
  ctaContent: {
    maxWidth: "800px",
    margin: "0 auto",
  },
  ctaTitle: {
    fontSize: "2.5rem",
    fontWeight: "800",
    marginBottom: "1.5rem",
    lineHeight: "1.2",
  },
  ctaText: {
    fontSize: "1.25rem",
    marginBottom: "2.5rem",
    lineHeight: "1.6",
    opacity: 0.95,
  },
  ctaActions: {
    display: "flex",
    gap: "1.5rem",
    justifyContent: "center",
    flexWrap: "wrap" as const,
  },
  btn: {
    padding: "1rem 2.5rem",
    borderRadius: "50px",
    fontWeight: "700",
    fontSize: "1.1rem",
    textDecoration: "none",
    transition: "all 0.3s ease",
    cursor: "pointer",
  },
  btnWhite: (isHovered: boolean): CSSProperties => ({
    backgroundColor: isHovered ? "#FFF4E6" : "#FFFFFF",
    color: "#F28C33",
    boxShadow: isHovered ? "0 10px 20px rgba(0,0,0,0.1)" : "none",
    transform: isHovered ? "translateY(-3px)" : "none",
  }),
  btnWhiteOutline: (isHovered: boolean): CSSProperties => ({
    backgroundColor: isHovered ? "#FFFFFF" : "transparent",
    color: isHovered ? "#F28C33" : "#FFFFFF",
    border: "2px solid #FFFFFF",
    transform: isHovered ? "translateY(-3px)" : "none",
    boxShadow: isHovered ? "0 10px 20px rgba(0,0,0,0.1)" : "none",
  }),
};
