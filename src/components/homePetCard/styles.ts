import { CustomCSSProperties } from "@/src/utils/styles/CustomCSSPropertiesType";

interface PetCardStyles {
  cardContainer: CustomCSSProperties;
  imageWrapper: CustomCSSProperties;
  petImage: CustomCSSProperties;
  statusBadge: CustomCSSProperties;
  contentContainer: CustomCSSProperties;
  headerWrapper: CustomCSSProperties;
  petName: CustomCSSProperties;
  specieTag: CustomCSSProperties;
  specieIcon: CustomCSSProperties;
  personalityText: CustomCSSProperties;
  attributesGrid: CustomCSSProperties;
  attributeBox: CustomCSSProperties;
  attributeLabel: CustomCSSProperties;
  attributeValue: CustomCSSProperties;
  actionButton: CustomCSSProperties;
}

export const styles: PetCardStyles = {
  cardContainer: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    overflow: "hidden",
    backgroundColor: "#ffffff",
    borderRadius: "1.5rem",
    border: "1px solid #E5E0E0",
    boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    transition: "all 300ms ease-in-out",
  },
  imageWrapper: {
    position: "relative",
    width: "100%",
    aspectRatio: "3 / 2",
    maxHeight: "16rem",
    overflow: "hidden",
  },
  petImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center",
    transition: "transform 500ms ease-in-out",
  },
  statusBadge: {
    position: "absolute",
    top: "1rem",
    left: "1rem",
    zIndex: 10,
    padding: "0.375rem 0.75rem",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    backdropFilter: "blur(4px)",
    WebkitBackdropFilter: "blur(4px)",
    borderRadius: "9999px",
    color: "#4A3A3F",
    fontSize: "0.75rem",
    fontWeight: "700",
    boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  },
  contentContainer: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    padding: "1.5rem",
  },
  headerWrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: "1rem",
  },
  petName: {
    fontSize: "1.5rem",
    fontWeight: "700",
    color: "#4A3A3F",
    marginBottom: "0.25rem",
    lineHeight: 1.25,
  },
  specieTag: {
    display: "inline-block",
    padding: "0.25rem 0.75rem",
    backgroundColor: "#F7F4F4",
    color: "#7C6A6E",
    fontSize: "0.75rem",
    fontWeight: "700",
    borderRadius: "0.5rem",
    textTransform: "uppercase",
    letterSpacing: "0.05em",
  },
  specieIcon: {
    fontSize: "1.5rem",
    transition: "transform 300ms ease",
  },
  personalityText: {
    marginBottom: "1.5rem",
    color: "#7C6A6E",
    fontSize: "0.875rem",
    lineHeight: 1.625,
    display: "-webkit-box",
    WebkitLineClamp: 3,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
  },
  attributesGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    gap: "0.5rem",
    marginBottom: "2rem",
  },
  attributeBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "0.5rem",
    borderRadius: "1rem",
    backgroundColor: "rgba(247, 244, 244, 0.5)",
    border: "1px solid #F7F4F4",
    transition: "background-color 200ms ease",
  },
  attributeLabel: {
    marginBottom: "0.25rem",
    fontSize: "10px",
    color: "#7C6A6E",
    fontWeight: "700",
    textTransform: "uppercase",
  },
  attributeValue: {
    fontSize: "0.875rem",
    fontWeight: "600",
    color: "#4A3A3F",
  },
  actionButton: {
    marginTop: "auto",
    width: "100%",
    padding: "1rem",
    backgroundColor: "#E85D75",
    color: "#ffffff",
    fontWeight: "700",
    borderRadius: "1rem",
    border: "none",
    cursor: "pointer",
    boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    transition: "all 200ms ease-in-out",
  },
};
