import { CustomCSSProperties } from "../../utils/styles/CustomCSSPropertiesType";

interface HomeHeaderStyles {
  header: CustomCSSProperties;
  container: CustomCSSProperties;
  logoLink: CustomCSSProperties;
  logoImg: CustomCSSProperties;
  logoFallback: CustomCSSProperties;
  logoText: CustomCSSProperties;
  nav: (isOpen: boolean, isMobile: boolean) => CustomCSSProperties;
  navList: (isMobile: boolean) => CustomCSSProperties;
  navLink: (isHovered: boolean) => CustomCSSProperties;
  cta: (isHovered: boolean, isMobile: boolean) => CustomCSSProperties;
  hamburger: (isMobile: boolean) => CustomCSSProperties;
  hamburgerBar: (index: number, isOpen: boolean) => CustomCSSProperties;
}

export const styles: HomeHeaderStyles = {
  header: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 50,
    height: "72px",
    backgroundColor: "#FFFFFF",
    borderBottom: "1px solid #E9D8DD",
    boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  },
  container: {
    height: "100%",
    maxWidth: "1200px",
    margin: "0 auto",
    paddingInline: "1.25rem",
    display: "flex",
    alignItems: "center",
    gap: "1.5rem",
  },
  logoLink: {
    display: "flex",
    alignItems: "center",
    gap: "0.625rem",
    flexShrink: 0,
    textDecoration: "none",
  },
  logoImg: {
    height: "2.75rem",
    width: "auto",
    objectFit: "contain",
  },
  logoFallback: {
    fontSize: "1.875rem",
    height: "2.75rem",
    width: "2.75rem",
    display: "none",
    alignItems: "center",
    justifyContent: "center",
  },
  logoText: {
    fontFamily: "Nunito, sans-serif",
    fontWeight: 800,
    fontSize: "1.05rem",
    color: "#B14F73",
    lineHeight: 1.25,
    maxWidth: "140px",
  },
  nav: (isOpen, isMobile) => ({
    flex: 1,
    transition: "all 0.3s ease",
    ...(isMobile && {
      position: "fixed",
      top: "72px",
      left: 0,
      right: 0,
      backgroundColor: "#FFFFFF",
      borderBottom: "1px solid #E9D8DD",
      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
      overflow: "hidden",
      maxHeight: isOpen ? "500px" : "0",
    }),
  }),
  navList: (isMobile) => ({
    display: "flex",
    alignItems: "center",
    gap: "0.25rem",
    justifyContent: "center",
    listStyle: "none",
    margin: 0,
    padding: 0,
    ...(isMobile && {
      flexDirection: "column",
      alignItems: "stretch",
      paddingBlock: "0.75rem",
    }),
  }),
  navLink: (isHovered) => ({
    display: "block",
    paddingInline: "0.75rem",
    paddingBlock: "0.375rem",
    borderRadius: "0.375rem",
    fontSize: "0.875rem",
    fontWeight: 600,
    color: isHovered ? "#B14F73" : "#4A3A3F",
    textDecoration: "none",
    backgroundColor: isHovered ? "rgba(177, 79, 115, 0.1)" : "transparent",
  }),
  cta: (isHovered, isMobile) => ({
    display: isMobile ? "none" : "block",
    paddingInline: "1.25rem",
    paddingBlock: "0.625rem",
    borderRadius: "9999px",
    backgroundColor: isHovered ? "#943E5F" : "#B14F73",
    color: "#FFFFFF",
    fontWeight: 700,
    fontSize: "0.875rem",
    textDecoration: "none",
  }),
  hamburger: (isMobile) => ({
    display: isMobile ? "flex" : "none",
    flexDirection: "column",
    gap: "0.375rem",
    padding: "0.5rem",
    borderRadius: "0.375rem",
    marginLeft: "auto",
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer",
  }),
  hamburgerBar: (index, isOpen) => ({
    display: "block",
    width: "1.375rem",
    height: "0.125rem",
    backgroundColor: "#4A3A3F",
    borderRadius: "0.125rem",
    transition: "all 0.3s ease",
    ...(isOpen && {
      ...(index === 0 && { transform: "translateY(8px) rotate(45deg)" }),
      ...(index === 1 && { opacity: 0 }),
      ...(index === 2 && { transform: "translateY(-8px) rotate(-45deg)" }),
    }),
  }),
};
