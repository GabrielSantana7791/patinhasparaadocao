import { CustomCSSProperties } from "@/src/utils/styles/CustomCSSPropertiesType";

interface PetFormStyle {
  container: CustomCSSProperties;
  title: CustomCSSProperties;
  form: CustomCSSProperties;
  formGroup: CustomCSSProperties;
  label: CustomCSSProperties;
  input: CustomCSSProperties;
  textarea: CustomCSSProperties;
  select: CustomCSSProperties;
  radioGroup: CustomCSSProperties;
  buttonGroup: CustomCSSProperties;
  submitButton: CustomCSSProperties;
  cancelButton: CustomCSSProperties;
}

export const styles: PetFormStyle = {
  container: {
    width: "100%",
    maxWidth: "100%",
    margin: "0",
    padding: "0",
    boxSizing: "border-box" as "border-box",
  },
  title: {
    fontSize: "24px",
    color: "#333",
    textAlign: "center",
    marginBottom: "24px",
  },
  form: {
    display: "flex",
    flexDirection: "column" as "column",
    gap: "16px",
  },
  formGroup: {
    display: "flex",
    flexDirection: "column" as "column",
    width: "100%",
    boxSizing: "border-box" as "border-box",
  },
  label: {
    marginBottom: "5px",
    fontWeight: "bold" as "bold",
    color: "#555",
    fontSize: "14px",
  },
  input: {
    padding: "10px",
    border: "1px solid #ddd",
    borderRadius: "4px",
    fontSize: "16px",
    width: "100%",
    boxSizing: "border-box" as "border-box",
  },
  textarea: {
    padding: "10px",
    border: "1px solid #ddd",
    borderRadius: "4px",
    fontSize: "16px",
    minHeight: "80px",
    resize: "vertical" as "vertical",
    width: "100%",
    boxSizing: "border-box" as "border-box",
  },
  select: {
    padding: "10px",
    border: "1px solid #ddd",
    borderRadius: "4px",
    fontSize: "16px",
    backgroundColor: "#fff",
    width: "100%",
    boxSizing: "border-box" as "border-box",
  },
  radioGroup: {
    display: "flex",
    gap: "15px",
    marginTop: "5px",
  },
  buttonGroup: {
    justifyContent: "flex-end",
    display: "flex",
    gap: "12px",
    marginTop: "24px",
  },
  submitButton: {
    padding: "10px 20px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "600",
    transition: "all 0.3s ease",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    flex: 1,
  },
  cancelButton: {
    backgroundColor: "#f44336",
    fontSize: "16px",
    color: "#666",
    padding: "12px 24px",
    borderRadius: "10px",
    border: "1.5px solid #ddd",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.3s ease",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
};
