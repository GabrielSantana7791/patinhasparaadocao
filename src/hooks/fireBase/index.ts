import useApi from "../useApi";
import { fetchPets, createPet, updatePet } from "./pet/petApi";

export const useFetchPets = () => useApi(fetchPets);
export const useCreatePet = () => useApi(createPet);
export const useUpdatePet = () => useApi(updatePet);
