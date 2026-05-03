import { CustomCSSProperties } from "../../utils/styles/CustomCSSPropertiesType";

interface HowToHelpStyles {
  section: CustomCSSProperties;
  container: CustomCSSProperties;
  header: CustomCSSProperties;
  title: (isMobile: boolean) => CustomCSSProperties;
  subtitle: (isMobile: boolean) => CustomCSSProperties;
  grid: CustomCSSProperties;
  card: (isHovered: boolean) => CustomCSSProperties;
  cardIcon: CustomCSSProperties;
  cardTitle: CustomCSSProperties;
  cardText: CustomCSSProperties;
  cardBtn: (isHovered: boolean) => CustomCSSProperties;
}

export const styles: HowToHelpStyles = {
  section: {
    paddingBlock: "4.5rem",
    backgroundColor: "#FFFFFF",
  },
  container: {
    maxWidth: "1200px",
    marginInline: "auto",
    paddingInline: "1.25rem",
  },
  header: {
    textAlign: "center",
    marginBottom: "3.25rem",
  },
  title: (isMobile) => ({
    fontFamily: "Nunito, sans-serif",
    fontSize: isMobile ? "1.875rem" : "2.25rem",
    fontWeight: 800,
    color: "#4A3A3F",
    marginBottom: "1rem",
  }),
  subtitle: (isMobile) => ({
    fontSize: isMobile ? "1rem" : "1.125rem",
    color: "#6B5960",
    maxWidth: "680px",
    marginInline: "auto",
    lineHeight: 1.625,
  }),
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "1.5rem",
  },
  card: (isHovered) => ({
    backgroundColor: "#F7F4F4",
    border: "1px solid #E9D8DD",
    borderRadius: "16px",
    padding: "1.75rem",
    display: "flex",
    flexDirection: "column",
    gap: "0.625rem",
    boxShadow: isHovered
      ? "0 4px 20px rgba(74, 58, 63, 0.12)"
      : "0 2px 8px rgba(74, 58, 63, 0.12)",
    transform: isHovered ? "translateY(-4px)" : "translateY(0)",
    transition: "all 0.25s ease",
  }),
  cardIcon: {
    fontSize: "2.25rem",
    marginBottom: "0.25rem",
  },
  cardTitle: {
    fontFamily: "Nunito, sans-serif",
    fontSize: "1.05rem",
    fontWeight: 700,
    color: "#4A3A3F",
    margin: 0,
  },
  cardText: {
    fontSize: "0.875rem",
    color: "#6B5960",
    lineHeight: 1.625,
    flex: 1,
    margin: 0,
  },
  cardBtn: (isHovered) => ({
    alignSelf: "flex-start",
    marginTop: "0.5rem",
    paddingInline: "1.25rem",
    paddingBlock: "0.625rem",
    borderRadius: "9999px",
    backgroundColor: isHovered ? "#D98D1D" : "#F0A329",
    color: "#FFFFFF",
    fontFamily: "Nunito, sans-serif",
    fontWeight: 700,
    fontSize: "0.85rem",
    textDecoration: "none",
    transition: "all 0.25s ease",
    border: "none",
    cursor: "pointer",
    boxShadow: isHovered ? "0 4px 12px rgba(240, 163, 41, 0.3)" : "none",
  }),
};
