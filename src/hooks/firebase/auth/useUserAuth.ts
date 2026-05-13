"use client";

import { auth } from "@/src/firebase/config";
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  User,
} from "firebase/auth";
import { useEffect, useState } from "react";

export function useGetUserAuth() {
  const [user, setUser] = useState<User | null>(null);
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, [auth]);

  return user;
}

export async function useLoginWithGoogle(): Promise<{
  user: User;
  idToken: string;
}> {
  try {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    const idToken = await result.user.getIdToken();
    return { user: result.user, idToken };
  } catch (error) {
    console.error("Erro ao fazer login com Google:", error);
    throw error;
  }
}

export async function useLogoutWithGoogle() {
  await auth.signOut();
}
