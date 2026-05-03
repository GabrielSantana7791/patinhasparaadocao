import { CustomCSSProperties } from "../../utils/styles/CustomCSSPropertiesType";

interface FooterStyles {
  footer: CustomCSSProperties;
  container: CustomCSSProperties;
  column: CustomCSSProperties;
  logoContainer: CustomCSSProperties;
  logoImg: CustomCSSProperties;
  brandName: CustomCSSProperties;
  slogan: CustomCSSProperties;
  navTitle: CustomCSSProperties;
  linkList: CustomCSSProperties;
  link: (isHovered: boolean) => CustomCSSProperties;
  infoText: CustomCSSProperties;
  bottomBar: CustomCSSProperties;
  bottomText: CustomCSSProperties;
}

export const styles: FooterStyles = {
  footer: {
    backgroundColor: "#4A3A3F",
    color: "rgba(255, 255, 255, 0.85)",
    paddingTop: "3.5rem",
    paddingBottom: "1.5rem",
  },
  container: {
    margin: "0 auto",
    width: "100%",
    maxWidth: "1200px",
    padding: "0 1.25rem",
    display: "flex",
    flexWrap: "wrap" as const,
    gap: "2.5rem",
    justifyContent: "space-between",
  },
  column: {
    flex: "1 1 250px",
    display: "flex",
    flexDirection: "column" as const,
    gap: "0.5rem",
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
  },
  logoImg: {
    height: "3rem",
    width: "auto",
    objectFit: "contain" as const,
    filter: "brightness(0) invert(1)",
    opacity: 0.9,
  },
  brandName: {
    fontFamily: "Nunito, sans-serif",
    fontWeight: 800,
    fontSize: "1.125rem",
    color: "#FFFFFF",
    marginTop: "0.5rem",
  },
  slogan: {
    fontSize: "0.875rem",
    opacity: 0.7,
    fontStyle: "italic",
  },
  navTitle: {
    fontFamily: "Nunito, sans-serif",
    fontWeight: 700,
    fontSize: "0.85rem",
    textTransform: "uppercase" as const,
    letterSpacing: "0.05em",
    color: "#F0A329",
    marginBottom: "1rem",
  },
  linkList: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "0.5rem",
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  link: (isHovered: boolean) => ({
    fontSize: "0.875rem",
    color: isHovered ? "#F0A329" : "inherit",
    textDecoration: "none",
    opacity: isHovered ? 1 : 0.75,
    transition: "all 0.25s ease",
    cursor: "pointer",
  }),
  infoText: {
    fontSize: "0.82rem",
    opacity: 0.55,
    margin: 0,
  },
  bottomBar: {
    marginTop: "3rem",
    borderTop: "1px solid rgba(255, 255, 255, 0.1)",
    paddingTop: "1.5rem",
    textAlign: "center" as const,
  },
  bottomText: {
    fontSize: "0.75rem",
    opacity: 0.55,
  },
};
