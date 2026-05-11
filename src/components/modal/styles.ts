import { CustomCSSProperties } from "@/src/utils/styles/CustomCSSPropertiesType";

interface ModalStyles {
  overlay: CustomCSSProperties;
  content: CustomCSSProperties;
  header: CustomCSSProperties;
  title: CustomCSSProperties;
  closeButton: CustomCSSProperties;
  body: CustomCSSProperties;
  footer: CustomCSSProperties;
}

export const styles: ModalStyles = {
  overlay: {
    position: "fixed" as const,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 2000,
    backdropFilter: "blur(4px)",
  },
  content: {
    backgroundColor: "#fff",
    padding: "32px",
    borderRadius: "20px",
    maxWidth: "500px",
    width: "90%",
    boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
    position: "relative" as const,
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "24px",
  },
  title: {
    margin: 0,
    fontSize: "1.5rem",
    color: "#4A3A3F",
    fontWeight: "700",
  },
  closeButton: {
    background: "none",
    border: "none",
    fontSize: "1.5rem",
    cursor: "pointer",
    color: "#6D5D62",
    padding: "4px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  body: {
    color: "#6D5D62",
    lineHeight: "1.6",
  },
  footer: {
    marginTop: "32px",
    display: "flex",
    gap: "12px",
    justifyContent: "flex-end",
  },
};
