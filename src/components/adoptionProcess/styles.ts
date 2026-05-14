import { CustomCSSProperties } from "../../utils/styles/CustomCSSPropertiesType";

interface AdoptionProcessStyles {
  section: CustomCSSProperties;
  container: CustomCSSProperties;
  header: CustomCSSProperties;
  title: CustomCSSProperties;
  subtitle: CustomCSSProperties;
  grid: (isMobile: boolean) => CustomCSSProperties;
  stepItem: CustomCSSProperties;
  stepNumber: CustomCSSProperties;
  stepContent: CustomCSSProperties;
  stepTitle: CustomCSSProperties;
  stepText: CustomCSSProperties;
}

export const styles: AdoptionProcessStyles = {
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
  grid: (isMobile) => ({
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "2.5rem",
    listStyle: "none",
    padding: 0,
    margin: 0,
  }),
  stepItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "1.25rem",
  },
  stepNumber: {
    width: "3.25rem",
    height: "3.25rem",
    borderRadius: "50%",
    background: "linear-gradient(135deg, #B14F73 0%, #C85B52 100%)",
    color: "#FFFFFF",
    fontFamily: "Nunito, sans-serif",
    fontWeight: 800,
    fontSize: "1.25rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    boxShadow: "0 4px 12px rgba(177, 79, 115, 0.2)",
  },
  stepContent: {
    display: "flex",
    flexDirection: "column",
  },
  stepTitle: {
    fontFamily: "Nunito, sans-serif",
    fontWeight: 700,
    fontSize: "1.05rem",
    marginBottom: "0.5rem",
    color: "#4A3A3F",
  },
  stepText: {
    fontSize: "0.875rem",
    color: "#6B5960",
    lineHeight: 1.625,
  },
};
