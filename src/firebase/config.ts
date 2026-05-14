import { FirebaseApp, FirebaseOptions, initializeApp } from "firebase/app";
import { Firestore, getFirestore } from "firebase/firestore";
import { Auth, getAuth } from "firebase/auth";

// This is NOT private
const firebaseConfig: FirebaseOptions = {
  apiKey: "AIzaSyDfKKtyAXjFrHnLa364LjmwkU4DPl0YdSM",
  authDomain: "patinhas-para-adocao.firebaseapp.com",
  projectId: "patinhas-para-adocao",
  storageBucket: "patinhas-para-adocao.firebasestorage.app",
  messagingSenderId: "379260877007",
  appId: "1:379260877007:web:358604a96fc436de40dfba",
};

let app: FirebaseApp;
let auth: Auth;
let db: Firestore;

try {
  app = initializeApp(firebaseConfig);
  auth = getAuth(app);
  db = getFirestore(app);
} catch (err) {
  throw new Error("Some firebase variable is missing or invalid");
}

export { db, auth };
