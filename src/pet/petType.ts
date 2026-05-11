export enum PetStatus {
  available = "available",
  adopted = "adopted",
}

export enum PetSpecies {
  dog = "dog",
  cat = "cat",
}

export enum PetGender {
  male = "male",
  female = "female",
}

export enum PetSize {
  small = "small",
  medium = "medium",
  big = "big",
}

export type PetType = {
  name: string;
  specie: PetSpecies;
  gender: PetGender;
  age: string;
  size: PetSize;
  personality: string;
  image: string;
  id: string;
  status: PetStatus;
};
