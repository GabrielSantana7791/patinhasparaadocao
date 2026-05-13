import { db } from "@/src/firebase/config";
import { doc, getDoc } from "firebase/firestore";
import { FireBaseCollections } from "../collectionName";
import { AdminType } from "@/src/firebase/collectionTypes/adminType";

export const fetchAdmin = async (
  uid: string | null,
): Promise<AdminType | null> => {
  if (!uid) return null;

  const adminCollections = doc(db, FireBaseCollections.admin, uid);

  const adminSnapshot = await getDoc(adminCollections);

  const result = adminSnapshot.exists() ? { uid: adminSnapshot.id } : null;

  return result;
};
