import { CustomCSSProperties } from "@/src/components/CustomCSSPropertiesType";

interface ContactStyles {
  section: CustomCSSProperties;
  container: CustomCSSProperties;
  sectionHeader: CustomCSSProperties;
  sectionTitle: CustomCSSProperties;
  sectionSubtitle: CustomCSSProperties;
  sectionText: CustomCSSProperties;
  contactActions: CustomCSSProperties;
  contactBtn: (
    isHovered: boolean,
    type: "wa" | "ig" | "mail",
  ) => CustomCSSProperties;
  contactBtnIcon: CustomCSSProperties;
  contactInfo: CustomCSSProperties;
  contactDetails: CustomCSSProperties;
  contactDetail: CustomCSSProperties;
  contactDetailLabel: CustomCSSProperties;
  contactDetailValue: CustomCSSProperties;
}

export const styles: ContactStyles = {
  section: {
    paddingTop: "72px",
    paddingBottom: "72px",
  },
  container: {
    width: "100%",
    maxWidth: "1200px",
    marginLeft: "auto",
    marginRight: "auto",
    paddingLeft: "20px",
    paddingRight: "20px",
  },
  sectionHeader: {
    textAlign: "center",
    marginBottom: "52px",
  },
  sectionTitle: {
    fontFamily: "'Nunito', 'Trebuchet MS', Arial, sans-serif",
    fontSize: "clamp(1.6rem, 4vw, 2.4rem)",
    fontWeight: 800,
    color: "#4A3A3F",
    marginBottom: "16px",
    lineHeight: 1.25,
  },
  sectionSubtitle: {
    fontSize: "clamp(0.95rem, 2vw, 1.1rem)",
    color: "#6B5960",
    maxWidth: "680px",
    marginLeft: "auto",
    marginRight: "auto",
    lineHeight: 1.75,
  },
  sectionText: {
    fontSize: "1rem",
    color: "#6B5960",
    maxWidth: "600px",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "12px",
  },
  contactActions: {
    display: "flex",
    flexWrap: "wrap",
    gap: "16px",
    justifyContent: "center",
    marginBottom: "48px",
  },
  contactBtn: (isHovered: boolean, type: "wa" | "ig" | "mail") => {
    const bg = {
      wa: "#25d366",
      ig: "linear-gradient(135deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
      mail: "#B14F73",
    };
    return {
      display: "inline-flex",
      alignItems: "center",
      gap: "10px",
      padding: "16px 32px",
      borderRadius: "999px",
      fontFamily: "'Nunito', 'Trebuchet MS', Arial, sans-serif",
      fontSize: "1rem",
      fontWeight: 700,
      color: "#FFFFFF",
      background: bg[type],
      textDecoration: "none",
      boxShadow: "0 2px 8px rgba(74, 58, 63, 0.12)",
      transition: "all 0.25s ease",
      transform: isHovered ? "translateY(-3px)" : "none",
    };
  },
  contactBtnIcon: {
    fontSize: "1.3rem",
  },
  contactInfo: {
    maxWidth: "500px",
    marginLeft: "auto",
    marginRight: "auto",
  },
  contactDetails: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "16px",
  },
  contactDetail: {
    display: "flex",
    gap: "12px",
    alignItems: "baseline",
  },
  contactDetailLabel: {
    fontFamily: "'Nunito', 'Trebuchet MS', Arial, sans-serif",
    fontWeight: 700,
    fontSize: "0.85rem",
    color: "#B14F73",
    minWidth: "100px",
    flexShrink: 0,
  },
  contactDetailValue: {
    fontSize: "0.95rem",
    color: "#6B5960",
  },
};
