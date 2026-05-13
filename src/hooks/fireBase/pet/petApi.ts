import { PetType } from "@/src/firebase/collectionTypes/petType";
import {
  collection,
  getDocs,
  addDoc,
  doc,
  updateDoc,
  deleteDoc,
  QueryDocumentSnapshot,
  DocumentData,
  getCountFromServer,
  Timestamp,
} from "firebase/firestore";
import { FireBaseCollections } from "../collectionName";
import { db } from "../../../firebase/config";
import { getFilteredQueryAndConstraints } from "@/src/firebase/getFilteredQueryAndConstraints";

export const fetchPets = async (
  pageSize: number = 1000,
  filters?: Partial<PetType>,
  lastVisibleDoc?: QueryDocumentSnapshot<DocumentData>,
): Promise<{
  pets: PetType[];
  lastVisible: QueryDocumentSnapshot<unknown, DocumentData> | null;
  count: number;
}> => {
  const petsCollection = collection(db, FireBaseCollections.pet);

  const { query } = getFilteredQueryAndConstraints({
    collectionReference: petsCollection,
    filters,
    lastVisibleDoc,
    pageSize,
  });
  const petSnapshot = await getDocs(query);
  const countResult = await getCountFromServer(query);
  const count = countResult.data().count;

  const lastVisible = petSnapshot.docs[petSnapshot.docs.length - 1] || null;

  const pets = petSnapshot.docs.map((doc) => {
    return {
      id: doc.id,
      ...(doc.data() as Omit<PetType, "id">),
      age: (doc.data() as { age: Timestamp }).age.toDate(),
    };
  }) as PetType[];

  return { pets, lastVisible, count };
};

export const createPet = async ({
  id,
  ...filteredPet
}: PetType): Promise<PetType> => {
  const petsCollection = collection(db, FireBaseCollections.pet);
  const docRef = await addDoc(petsCollection, filteredPet);
  return { id: docRef.id, ...filteredPet } as PetType;
};

export const updatePet = async (
  id: string,
  pet: Partial<PetType>,
): Promise<void> => {
  const petDoc = doc(db, FireBaseCollections.pet, id);
  const { id: _, ...data } = pet;
  await updateDoc(petDoc, data);
};

export const deletePet = async (id: string): Promise<void> => {
  const petDoc = doc(db, FireBaseCollections.pet, id);
  await deleteDoc(petDoc);
};
