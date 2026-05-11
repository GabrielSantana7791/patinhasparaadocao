import { CustomCSSProperties } from "@/src/utils/styles/CustomCSSPropertiesType";

interface HomeHeaderStyles {
  imageContainer: CustomCSSProperties;
  image: CustomCSSProperties;
  cardContent: CustomCSSProperties;
  petName: CustomCSSProperties;
  badgeRow: CustomCSSProperties;
  badge: CustomCSSProperties;
  personality: CustomCSSProperties;
  card: CustomCSSProperties;
  button: CustomCSSProperties;
}

export const styles: HomeHeaderStyles = {
  imageContainer: {
    height: "280px",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover" as const,
  },
  cardContent: {
    padding: "24px",
    display: "flex",
    flexDirection: "column" as const,
    flex: 1,
  },
  petName: {
    fontSize: "1.75rem",
    fontWeight: "700",
    color: "#4A3A3F",
    marginBottom: "12px",
  },
  badgeRow: {
    display: "flex",
    gap: "8px",
    flexWrap: "wrap" as const,
    marginBottom: "16px",
  },
  badge: {
    padding: "6px 12px",
    borderRadius: "30px",
    fontSize: "0.8rem",
    fontWeight: "600",
    backgroundColor: "#F7F4F4",
    color: "#6D5D62",
    textTransform: "uppercase" as const,
  },
  personality: {
    fontSize: "0.95rem",
    color: "#6D5D62",
    lineHeight: "1.5",
    marginBottom: "24px",
    flex: 1,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: "20px",
    overflow: "hidden",
    boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
    display: "flex",
    flexDirection: "column" as const,
  },
  button: {
    width: "100%",
    padding: "14px",
    borderRadius: "10px",
    border: "none",
    backgroundColor: "#E91E63",
    color: "#FFF",
    fontSize: "1rem",
    fontWeight: "700",
    cursor: "pointer",
    transition: "opacity 0.2s",
  },
};
