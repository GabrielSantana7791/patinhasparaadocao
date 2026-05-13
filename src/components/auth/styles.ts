import { CustomCSSProperties } from "@/src/utils/styles/CustomCSSPropertiesType";

interface AuthStyles {
  container: CustomCSSProperties;
  button: CustomCSSProperties;
}

export const styles: AuthStyles = {
  container: {
    display: "flex",
    justifyContent: "flex",
    padding: "0 2rem",
    width: "100%",
    boxSizing: "border-box" as const,
    marginTop: "1rem",
  },
  button: {
    backgroundColor: "#B14F73",
    color: "#FFFFFF",
    border: "none",
    borderRadius: "20px",
    padding: "8px 20px",
    fontSize: "0.85rem",
    fontWeight: "bold" as const,
    cursor: "pointer",
    transition: "all 0.2s ease-in-out",
    boxShadow: "0 2px 8px rgba(177, 79, 115, 0.2)",
  },
};
