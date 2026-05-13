import { CustomCSSProperties } from "@/src/utils/styles/CustomCSSPropertiesType";

interface LoadingStyles {
  container: CustomCSSProperties;
  spinner: CustomCSSProperties;
  text: CustomCSSProperties;
}

export const styles: LoadingStyles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100vh",
    backgroundColor: "#F7F4F4",
    gap: "1rem",
  },
  spinner: {
    color: "#E85D75",
  },
  text: {
    color: "#7C6A6E",
    fontSize: "1rem",
    fontWeight: "500",
  },
};
