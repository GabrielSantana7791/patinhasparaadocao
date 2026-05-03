import { CustomCSSProperties } from "../../utils/styles/CustomCSSPropertiesType";

interface AboutStyles {
  section: CustomCSSProperties;
  container: CustomCSSProperties;
  sectionHeader: CustomCSSProperties;
  sectionTitle: CustomCSSProperties;
  sectionSubtitle: CustomCSSProperties;
  grid: CustomCSSProperties;
  card: (isHovered: boolean) => CustomCSSProperties;
  cardIcon: CustomCSSProperties;
  cardTitle: CustomCSSProperties;
  cardText: CustomCSSProperties;
}

export const styles: AboutStyles = {
  section: {
    paddingBlock: "4.5rem",
  },
  container: {
    width: "100%",
    maxWidth: "1200px",
    marginInline: "auto",
    paddingInline: "1.25rem",
  },
  sectionHeader: {
    textAlign: "center",
    marginBottom: "3.25rem",
  },
  sectionTitle: {
    fontFamily: "Nunito, sans-serif",
    fontSize: "clamp(1.6rem, 4vw, 2.4rem)",
    fontWeight: 800,
    color: "#4A3A3F",
    marginBottom: "1rem",
    lineHeight: 1.25,
  },
  sectionSubtitle: {
    fontSize: "clamp(0.95rem, 2vw, 1.1rem)",
    color: "#6B5960",
    maxWidth: "680px",
    marginInline: "auto",
    lineHeight: 1.75,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "1.5rem",
  },
  card: (isHovered: boolean) => ({
    backgroundColor: "#FFFFFF",
    border: "1px solid #E9D8DD",
    borderRadius: "16px",
    padding: "2rem 1.5rem",
    boxShadow: isHovered
      ? "0 4px 20px rgba(74, 58, 63, 0.12)"
      : "0 2px 8px rgba(74, 58, 63, 0.12)",
    transform: isHovered ? "translateY(-4px)" : "translateY(0)",
    transition: "all 0.25s ease",
    textAlign: "center",
    cursor: "default",
  }),
  cardIcon: {
    fontSize: "3rem",
    marginBottom: "1rem",
    display: "block",
  },
  cardTitle: {
    fontFamily: "Nunito, sans-serif",
    fontWeight: 700,
    fontSize: "1.125rem",
    marginBottom: "0.5rem",
    color: "#4A3A3F",
  },
  cardText: {
    fontSize: "0.875rem",
    color: "#6B5960",
    lineHeight: 1.625,
  },
};
