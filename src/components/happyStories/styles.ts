import { CustomCSSProperties } from "@/src/components/CustomCSSPropertiesType";

interface HappyStoriesStyles {
  section: CustomCSSProperties;
  container: CustomCSSProperties;
  header: CustomCSSProperties;
  title: CustomCSSProperties;
  subtitle: CustomCSSProperties;
  grid: CustomCSSProperties;
  card: CustomCSSProperties;
  imageWrap: CustomCSSProperties;
  imagePlaceholder: CustomCSSProperties;
  content: CustomCSSProperties;
  quoteContainer: CustomCSSProperties;
  quoteIcon: CustomCSSProperties;
  quote: CustomCSSProperties;
  footer: CustomCSSProperties;
  name: CustomCSSProperties;
  pet: CustomCSSProperties;
}

export const styles: HappyStoriesStyles = {
  section: {
    paddingTop: "72px",
    paddingBottom: "72px",
  },
  container: {
    width: "100%",
    maxWidth: "1200px",
    marginLeft: "auto",
    marginRight: "auto",
    paddingLeft: "20px",
    paddingRight: "20px",
  },
  header: {
    textAlign: "center",
    marginBottom: "52px",
  },
  title: {
    fontFamily: "'Nunito', 'Trebuchet MS', Arial, sans-serif",
    fontSize: "clamp(1.6rem, 4vw, 2.4rem)",
    fontWeight: 800,
    color: "#4A3A3F",
    marginBottom: "16px",
    lineHeight: 1.25,
  },
  subtitle: {
    fontSize: "clamp(0.95rem, 2vw, 1.1rem)",
    color: "#6B5960",
    maxWidth: "680px",
    marginLeft: "auto",
    marginRight: "auto",
    lineHeight: 1.75,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "24px",
  },
  card: {
    backgroundColor: "#FFFFFF",
    border: "1px solid #E9D8DD",
    borderRadius: "16px",
    overflow: "hidden",
    boxShadow: "0 2px 8px rgba(74, 58, 63, 0.12)",
    transition: "box-shadow 0.25s ease, transform 0.25s ease",
    display: "flex",
    flexDirection: "column",
  },
  imageWrap: {
    background: "linear-gradient(135deg, #f5d9e4 0%, #fdecd3 100%)",
    aspectRatio: "16 / 7",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  imagePlaceholder: {
    fontSize: "3.5rem",
    opacity: 0.5,
  },
  content: {
    padding: "24px",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    flex: 1,
  },
  quoteContainer: {
    position: "relative",
    paddingLeft: "18px",
  },
  quoteIcon: {
    position: "absolute",
    left: 0,
    top: "-4px",
    fontSize: "2rem",
    color: "#B14F73",
    fontFamily: "'Nunito', 'Trebuchet MS', Arial, sans-serif",
    lineHeight: 1,
    opacity: 0.6,
  },
  quote: {
    fontSize: "0.95rem",
    color: "#6B5960",
    lineHeight: 1.7,
    fontStyle: "italic",
    margin: 0,
  },
  footer: {
    display: "flex",
    flexDirection: "column",
    gap: "2px",
  },
  name: {
    fontFamily: "'Nunito', 'Trebuchet MS', Arial, sans-serif",
    fontSize: "0.95rem",
    fontWeight: 700,
    color: "#4A3A3F",
  },
  pet: {
    fontSize: "0.82rem",
    color: "#B14F73",
    fontWeight: 600,
  },
};
