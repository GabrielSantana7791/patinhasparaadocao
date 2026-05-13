import { useTranslation } from "react-i18next";
import { styles } from "./styles";
import {
  useGetUserAuth,
  useLoginWithGoogle,
  useLogoutWithGoogle,
} from "@/src/hooks/firebase/auth/useUserAuth";

export const LoginButton = () => {
  const { t } = useTranslation();

  const user = useGetUserAuth();
  const login = useLoginWithGoogle;
  const logout = useLogoutWithGoogle;

  const handleButtonHover = (
    e: React.MouseEvent<HTMLButtonElement>,
    isHovering: boolean,
  ) => {
    if (isHovering) {
      e.currentTarget.style.transform = "scale(1.05)";
      e.currentTarget.style.backgroundColor = "#943E5F";
    } else {
      e.currentTarget.style.transform = "scale(1)";
      e.currentTarget.style.backgroundColor = "#B14F73";
    }
  };

  return (
    <div style={styles.container}>
      {!user && (
        <button
          onMouseOver={(e) => handleButtonHover(e, true)}
          onMouseOut={(e) => handleButtonHover(e, false)}
          style={styles.button}
          onClick={() => login()}
        >
          {t("header.login")}
        </button>
      )}

      {user && (
        <button
          onMouseOver={(e) => handleButtonHover(e, true)}
          onMouseOut={(e) => handleButtonHover(e, false)}
          style={styles.button}
          onClick={() => logout()}
        >
          {t("header.logout")}
        </button>
      )}
    </div>
  );
};
