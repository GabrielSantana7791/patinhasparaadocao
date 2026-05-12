import useApi from "../useApi";
import { fetchPets, createPet, updatePet, deletePet } from "./pet/petApi";

export const useFetchPets = () => useApi(fetchPets);
export const useCreatePet = () => useApi(createPet);
export const useUpdatePet = () => useApi(updatePet);
export const useDeletePet = () => useApi(deletePet);
