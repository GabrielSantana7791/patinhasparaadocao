"use client";

import { GoogleAuthProvider, signInWithPopup, User } from "firebase/auth";
import { auth } from "../firebase/config";

export async function loginWithGoogle(): Promise<{
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

export async function logoutWithGoogle() {
  await auth.signOut();
}
