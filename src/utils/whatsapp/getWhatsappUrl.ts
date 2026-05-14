import { PetGender } from "@/src/firebase/collectionTypes/petType";
import { WHATSAPP_NUMBER } from "../contacts/contacts";

export const getWhatsappUrlForAdoption = (
  petName: string,
  gender: PetGender,
) => {
  const msg = `Olá! Tenho interesse em saber mais sobre a adoção d${
    gender === PetGender.female ? "a" : "o"
  } ${petName}.`;
  return getWhatsappUrlForContact(msg);
};

export const getWhatsappUrlForContact = (msg: string) => {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
};
