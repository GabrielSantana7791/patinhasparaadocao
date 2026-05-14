import {
  FirebasePetType,
  PetType,
} from "@/src/firebase/collectionTypes/petType";
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
} from "firebase/firestore";
import { FireBaseCollections } from "../collectionName";
import { db } from "../../../firebase/config";
import { getFilteredQueryAndConstraints } from "@/src/firebase/getFilteredQueryAndConstraints";
import { sanitizeFilters } from "../utils/sanitizeFilters";

export const fetchPets = async (
  pageSize: number = 50,
  filters?: Partial<PetType>,
  lastVisibleDoc?: QueryDocumentSnapshot<DocumentData>,
): Promise<{
  pets: PetType[];
  lastVisible: QueryDocumentSnapshot<unknown, DocumentData> | null;
  count: number;
}> => {
  const petsCollection = collection(db, FireBaseCollections.pet);
  const filtersSanitized = filters ? sanitizeFilters(filters, ["name"]) : [];

  const { query } = getFilteredQueryAndConstraints({
    collectionReference: petsCollection,
    filters: filtersSanitized,
    lastVisibleDoc,
    pageSize,
  });
  const petSnapshot = await getDocs(query);
  const countResult = await getCountFromServer(query);
  const count = countResult.data().count;

  const lastVisible = petSnapshot.docs[petSnapshot.docs.length - 1] || null;

  const pets: PetType[] = petSnapshot.docs.map((doc): PetType => {
    const firebaseData = doc.data() as FirebasePetType;

    return {
      id: doc.id,
      ...firebaseData,
      age: firebaseData.age.toDate(),
    };
  });

  const filteredPets = pets.filter((pet) =>
    pet.name.toLowerCase().includes(filters?.name?.toLowerCase() ?? ""),
  );

  return { pets: filteredPets, lastVisible, count };
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
