import { db } from "@/src/firebase/config";
import {
  collection,
  getDocs,
  query,
  QueryConstraint,
  where,
} from "firebase/firestore";
import { FireBaseCollections } from "../collectionName";
import { AdminType } from "@/src/firebase/collectionTypes/adminType";

export const fetchAdmin = async (email: string): Promise<AdminType> => {
  const adminCollections = collection(db, FireBaseCollections.admin);

  const filteredConstraints: QueryConstraint[] = [];
  filteredConstraints.push(where("email", "==", email));

  const queryResult = query(adminCollections, ...filteredConstraints);

  const adminSnapshot = await getDocs(queryResult);

  const admin = adminSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as Omit<AdminType, "id">),
  }))[0];
  return admin;
};
