import { CustomCSSProperties } from "../CustomCSSPropertiesType";

interface AdoptionStyles {
  section: CustomCSSProperties;
  container: CustomCSSProperties;
  header: CustomCSSProperties;
  title: CustomCSSProperties;
  subtitle: CustomCSSProperties;
  grid: CustomCSSProperties;
  card: (isHovered: boolean) => CustomCSSProperties;
  imageWrap: CustomCSSProperties;
  image: CustomCSSProperties;
  placeholder: CustomCSSProperties;
  statusBadge: CustomCSSProperties;
  speciesBadge: CustomCSSProperties;
  cardBody: CustomCSSProperties;
  petName: CustomCSSProperties;
  metaWrap: CustomCSSProperties;
  metaItem: CustomCSSProperties;
  personality: CustomCSSProperties;
  cardBtn: (isHovered: boolean) => CustomCSSProperties;
}

export const styles: AdoptionStyles = {
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
  title: {
    fontFamily: "Nunito, sans-serif",
    fontSize: "clamp(1.875rem, 4vw, 2.25rem)",
    fontWeight: 800,
    color: "#4A3A3F",
    marginBottom: "1rem",
  },
  subtitle: {
    fontSize: "clamp(1rem, 2vw, 1.125rem)",
    color: "#6B5960",
    maxWidth: "680px",
    marginInline: "auto",
    lineHeight: 1.625,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "1.5rem",
  },
  card: (isHovered: boolean) => ({
    backgroundColor: "#FFFFFF",
    border: "1px solid #E9D8DD",
    borderRadius: "16px",
    overflow: "hidden",
    boxShadow: isHovered
      ? "0 4px 20px rgba(74, 58, 63, 0.12)"
      : "0 2px 8px rgba(74, 58, 63, 0.12)",
    transform: isHovered ? "translateY(-4px)" : "translateY(0)",
    transition: "all 0.25s ease",
    display: "flex",
    flexDirection: "column",
  }),
  imageWrap: {
    position: "relative",
    aspectRatio: "4/3",
    overflow: "hidden",
    backgroundColor: "#f5d9e4",
    backgroundImage: "linear-gradient(to bottom right, #f5d9e4, #fdecd3)",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover" as const,
  },
  placeholder: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5rem",
    color: "#B14F73",
  },
  statusBadge: {
    position: "absolute",
    top: "0.75rem",
    left: "0.75rem",
    backgroundColor: "#F0A329",
    color: "#FFFFFF",
    fontSize: "0.7rem",
    fontWeight: 700,
    fontFamily: "Nunito, sans-serif",
    textTransform: "uppercase" as const,
    letterSpacing: "0.05em",
    padding: "0.25rem 0.625rem",
    borderRadius: "9999px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  },
  speciesBadge: {
    position: "absolute",
    top: "0.75rem",
    right: "0.75rem",
    backgroundColor: "#FFFFFF",
    width: "2rem",
    height: "2rem",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "1.125rem",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  },
  cardBody: {
    padding: "1.25rem",
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: "0.375rem",
  },
  petName: {
    fontFamily: "Nunito, sans-serif",
    fontSize: "1.25rem",
    fontWeight: 800,
    color: "#4A3A3F",
    margin: 0,
  },
  metaWrap: {
    display: "flex",
    flexWrap: "wrap",
    gap: "0.375rem",
    fontSize: "0.75rem",
    color: "#6B5960",
  },
  metaItem: {
    backgroundColor: "#F7F4F4",
    border: "1px solid #E9D8DD",
    padding: "0.125rem 0.625rem",
    borderRadius: "9999px",
    fontWeight: 600,
  },
  personality: {
    fontSize: "0.875rem",
    color: "#6B5960",
    fontStyle: "italic",
    lineHeight: 1.5,
    marginTop: "0.25rem",
  },
  cardBtn: (isHovered: boolean) => ({
    display: "block",
    width: "100%",
    textAlign: "center" as const,
    paddingBlock: "0.75rem",
    backgroundColor: isHovered ? "#943E5F" : "#B14F73",
    color: "#FFFFFF",
    fontFamily: "Nunito, sans-serif",
    fontWeight: 700,
    fontSize: "0.875rem",
    textDecoration: "none",
    border: "none",
    borderTop: "1px solid #E9D8DD",
    transition: "background-color 0.2s ease",
    cursor: "pointer",
  }),
};
