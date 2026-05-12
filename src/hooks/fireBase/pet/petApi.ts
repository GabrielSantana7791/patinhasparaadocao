import { PetType } from "@/src/pet/petType";
import {
  collection,
  getDocs,
  addDoc,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { FireBaseCollections } from "../collectionName";
import { db } from "../../../firebase/config";

export const fetchPets = async (): Promise<PetType[]> => {
  const petsCollection = collection(db, FireBaseCollections.pet);
  const petSnapshot = await getDocs(petsCollection);
  const petList = petSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as Omit<PetType, "id">),
  }));
  return petList;
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
