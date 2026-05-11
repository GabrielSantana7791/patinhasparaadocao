import { CustomCSSProperties } from "@/src/utils/styles/CustomCSSPropertiesType";

interface EditPetModalStyle {
  select: CustomCSSProperties;
}

export const styles: EditPetModalStyle = {
  select: {
    flex: "1 1 150px",
    padding: "12px 16px",
    borderRadius: "8px",
    border: "1px solid #E2DADB",
    fontSize: "1rem",
    backgroundColor: "#fff",
    color: "#4A3A3F",
    cursor: "pointer",
  },
};
