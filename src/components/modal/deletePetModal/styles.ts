import { CustomCSSProperties } from "@/src/utils/styles/CustomCSSPropertiesType";

interface DeletePetModalStyles {
  footer: CustomCSSProperties;
  cancelButton: CustomCSSProperties;
  confirmButton: CustomCSSProperties;
}

export const styles: DeletePetModalStyles = {
  footer: {
    display: "flex",
    gap: "12px",
    marginTop: "24px",
    justifyContent: "flex-end",
  },
  cancelButton: {
    border: "none",
    background: "none",
    cursor: "pointer",
    color: "#6D5D62",
  },
  confirmButton: {
    backgroundColor: "#ff4d4f",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
  },
};
