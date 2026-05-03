import { CustomCSSProperties } from "../../utils/styles/CustomCSSPropertiesType";

interface FaqStyles {
  section: CustomCSSProperties;
  container: CustomCSSProperties;
  header: CustomCSSProperties;
  title: CustomCSSProperties;
  listContainer: CustomCSSProperties;
  item: CustomCSSProperties;
  question: (isOpen: boolean, isHovered: boolean) => CustomCSSProperties;
  icon: (isOpen: boolean) => CustomCSSProperties;
  answerContainer: (isOpen: boolean) => CustomCSSProperties;
  answerInner: CustomCSSProperties;
  answerText: CustomCSSProperties;
}

export const styles: FaqStyles = {
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
  listContainer: {
    maxWidth: "760px",
    marginInline: "auto",
    display: "flex",
    flexDirection: "column",
    gap: "0.75rem",
  },
  item: {
    backgroundColor: "#FFFFFF",
    border: "1px solid #E9D8DD",
    borderRadius: "16px",
    overflow: "hidden",
    boxShadow: "0 2px 8px rgba(74, 58, 63, 0.12)",
  },
  question: (isOpen, isHovered) => ({
    width: "100%",
    textAlign: "left",
    padding: "1.25rem 1.5rem",
    fontFamily: "Nunito, sans-serif",
    fontWeight: 700,
    fontSize: "1rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "0.75rem",
    transition: "all 0.3s ease",
    border: "none",
    backgroundColor: isHovered ? "rgba(177, 79, 115, 0.05)" : "transparent",
    color: isOpen ? "#B14F73" : "#4A3A3F",
    cursor: "pointer",
  }),
  icon: (isOpen) => ({
    flexShrink: 0,
    width: "1.5rem",
    height: "1.5rem",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "1.125rem",
    transition: "all 0.3s ease",
    transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
    backgroundColor: isOpen ? "#B14F73" : "rgba(177, 79, 115, 0.1)",
    color: isOpen ? "#FFFFFF" : "#B14F73",
  }),
  answerContainer: (isOpen) => ({
    display: "grid",
    transition: "all 0.3s ease-in-out",
    gridTemplateRows: isOpen ? "1fr" : "0fr",
    opacity: isOpen ? 1 : 0,
  }),
  answerInner: {
    overflow: "hidden",
  },
  answerText: {
    padding: "1rem 1.5rem 1.25rem",
    color: "#6B5960",
    lineHeight: 1.625,
    borderTop: "1px solid #E9D8DD",
  },
};
