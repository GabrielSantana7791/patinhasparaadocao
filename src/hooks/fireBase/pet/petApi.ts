import { PetType } from "@/src/pet/petType";
import {
  collection,
  getDocs,
  addDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../config";
import { FireBaseCollections } from "../collectionName";

export const fetchPets = async (): Promise<PetType[]> => {
  const petsCollection = collection(db, FireBaseCollections.pet);
  const petSnapshot = await getDocs(petsCollection);
  const petList = petSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as Omit<PetType, "id">),
  }));
  return petList;
};

export const createPet = async (pet: Omit<PetType, "id">): Promise<PetType> => {
  const petsCollection = collection(db, FireBaseCollections.pet);
  const docRef = await addDoc(petsCollection, pet);
  return { id: docRef.id, ...pet } as PetType;
};

export const updatePet = async (
  id: string,
  pet: Partial<PetType>,
): Promise<void> => {
  const petDoc = doc(db, FireBaseCollections.pet, id);
  const { id: _, ...data } = pet;
  await updateDoc(petDoc, data);
};
