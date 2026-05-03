import { CustomCSSProperties } from "../CustomCSSPropertiesType";

interface HeroStyles {
  section: CustomCSSProperties;
  container: (isMobile: boolean) => CustomCSSProperties;
  content: CustomCSSProperties;
  badge: CustomCSSProperties;
  title: (isMobile: boolean) => CustomCSSProperties;
  text: CustomCSSProperties;
  actions: CustomCSSProperties;
  btnOrange: (isHovered: boolean) => CustomCSSProperties;
  btnOutline: (isHovered: boolean) => CustomCSSProperties;
  statsWrap: CustomCSSProperties;
  statItem: CustomCSSProperties;
  statIcon: CustomCSSProperties;
  statLabel: CustomCSSProperties;
  imageWrap: CustomCSSProperties;
  image: CustomCSSProperties;
}

export const styles: HeroStyles = {
  section: {
    paddingTop: "132px",
    paddingBottom: "72px",
    backgroundImage: "linear-gradient(to bottom right, #fff5f8, #fff9f0)",
    overflow: "hidden",
  },
  container: (isMobile) => ({
    maxWidth: "1200px",
    margin: "0 auto",
    paddingInline: "1.25rem",
    display: "grid",
    gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
    gap: "3rem",
    alignItems: "center",
  }),
  content: {
    display: "flex",
    flexDirection: "column",
  },
  badge: {
    display: "inline-block",
    alignSelf: "flex-start",
    backgroundColor: "rgba(177, 79, 115, 0.1)",
    color: "#B14F73",
    fontSize: "0.8rem",
    fontWeight: 700,
    fontFamily: "Nunito, sans-serif",
    letterSpacing: "0.05em",
    textTransform: "uppercase",
    padding: "0.375rem 0.875rem",
    borderRadius: "9999px",
    marginBottom: "1rem",
  },
  title: (isMobile) => ({
    fontFamily: "Nunito, sans-serif",
    fontSize: isMobile ? "2.25rem" : "3rem",
    fontWeight: 800,
    color: "#4A3A3F",
    lineHeight: 1.1,
    marginBottom: "1.25rem",
  }),
  text: {
    fontSize: "1.125rem",
    color: "#6B5960",
    maxWidth: "540px",
    marginBottom: "2rem",
    lineHeight: 1.625,
  },
  actions: {
    display: "flex",
    flexWrap: "wrap",
    gap: "0.875rem",
    marginBottom: "2.5rem",
  },
  btnOrange: (isHovered) => ({
    display: "inline-flex",
    alignItems: "center",
    gap: "0.5rem",
    padding: "0.75rem 1.75rem",
    borderRadius: "9999px",
    backgroundColor: isHovered ? "#D98D1D" : "#F0A329",
    color: "#FFFFFF",
    fontFamily: "Nunito, sans-serif",
    fontWeight: 700,
    fontSize: "1rem",
    textDecoration: "none",
    transition: "all 0.25s ease",
    boxShadow: isHovered ? "0 4px 12px rgba(240, 163, 41, 0.3)" : "none",
    transform: isHovered ? "translateY(-2px)" : "none",
  }),
  btnOutline: (isHovered) => ({
    display: "inline-flex",
    alignItems: "center",
    gap: "0.5rem",
    padding: "0.75rem 1.75rem",
    borderRadius: "9999px",
    border: "2px solid #B14F73",
    backgroundColor: isHovered ? "#B14F73" : "transparent",
    color: isHovered ? "#FFFFFF" : "#B14F73",
    fontFamily: "Nunito, sans-serif",
    fontWeight: 700,
    fontSize: "1rem",
    textDecoration: "none",
    transition: "all 0.25s ease",
    transform: isHovered ? "translateY(-2px)" : "none",
  }),
  statsWrap: {
    display: "flex",
    flexWrap: "wrap",
    gap: "1.25rem",
  },
  statItem: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    backgroundColor: "#FFFFFF",
    border: "1px solid #E9D8DD",
    borderRadius: "9999px",
    padding: "0.5rem 1rem",
    boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  },
  statIcon: {
    fontSize: "1.25rem",
  },
  statLabel: {
    fontSize: "0.875rem",
    fontWeight: 600,
    color: "#4A3A3F",
  },
  imageWrap: {
    position: "relative",
    borderRadius: "1.5rem",
    overflow: "hidden",
    aspectRatio: "4/3",
    backgroundImage: "linear-gradient(to bottom right, #f5d9e4, #fdecd3)",
    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
};
