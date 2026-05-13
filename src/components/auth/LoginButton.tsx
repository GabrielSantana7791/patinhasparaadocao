import { styles } from "./styles";
import {
  useGetUserAuth,
  useLoginWithGoogle,
  useLogoutWithGoogle,
} from "@/src/hooks/firebase/auth/useUserAuth";
import { useTranslation } from "react-i18next";

export const LoginButton = () => {
  const { t } = useTranslation();
  const user = useGetUserAuth();

  return (
    <>
      {!user && <button onClick={() => useLoginWithGoogle()}>Login</button>}

      {user && <button onClick={() => useLogoutWithGoogle()}>Deslogar</button>}
    </>
  );
};
