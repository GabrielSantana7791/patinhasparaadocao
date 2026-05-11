import { CustomCSSProperties } from "@/src/utils/styles/CustomCSSPropertiesType";

interface HomeHeaderStyles {
  header: CustomCSSProperties;
  wrapper: CustomCSSProperties;
  title: CustomCSSProperties;
  subtitle: CustomCSSProperties;
  filterBar: CustomCSSProperties;
  input: CustomCSSProperties;
  select: CustomCSSProperties;
  grid: CustomCSSProperties;
  noResults: CustomCSSProperties;
}

export const styles: HomeHeaderStyles = {
  wrapper: {
    padding: "120px 20px 80px",
    maxWidth: "1200px",
    margin: "0 auto",
    minHeight: "100vh",
  },
  header: {
    textAlign: "center" as const,
    marginBottom: "40px",
  },
  title: {
    fontSize: "2.5rem",
    color: "#4A3A3F",
    marginBottom: "10px",
    fontWeight: "800",
  },
  subtitle: {
    fontSize: "1.1rem",
    color: "#6D5D62",
  },
  filterBar: {
    display: "flex",
    flexWrap: "wrap" as const,
    gap: "15px",
    marginBottom: "40px",
    padding: "24px",
    backgroundColor: "#fff",
    borderRadius: "16px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
  },
  input: {
    flex: "1 1 300px",
    padding: "12px 16px",
    borderRadius: "8px",
    border: "1px solid #E2DADB",
    fontSize: "1rem",
    color: "#4A3A3F",
    outline: "none",
  },
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
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    gap: "30px",
  },
  noResults: {
    textAlign: "center" as const,
    gridColumn: "1 / -1",
    padding: "60px 20px",
    color: "#6D5D62",
  },
};
