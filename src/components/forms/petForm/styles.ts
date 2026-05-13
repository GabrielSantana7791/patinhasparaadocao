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
    marginBottom: "20px",
    textAlign: "center",
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
    display: "flex",
    justifyContent: "flex-end",
    gap: "10px",
    marginTop: "20px",
  },
  submitButton: {
    padding: "10px 20px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "16px",
  },
  cancelButton: {
    padding: "10px 20px",
    backgroundColor: "#f44336",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "16px",
  },
};
