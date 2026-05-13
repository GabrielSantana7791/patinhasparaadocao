"use client";

import React, { useEffect, useState } from "react";
import { styles } from "./styles";
import { useTranslation } from "react-i18next";
import {
  PetGender,
  PetSpecies,
  PetStatus,
} from "@/src/firebase/collectionTypes/petType";
import { useFetchPets } from "@/src/hooks/firebase";
import { transformDateToPetAge } from "@/src/utils/dateTranslator";
import HomePetCard from "../homePetCard/HomePetCard";

const WHATSAPP_NUMBER = "5531986149886";
const getWhatsappUrl = (petName: string, sexo: string) => {
  const msg = `Olá! Tenho interesse em saber mais sobre a adoção d${
    sexo === "Fêmea" ? "a" : "o"
  } ${petName}.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
};

const Adoption: React.FC = () => {
  const { t } = useTranslation();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [hoveredBtnIndex, setHoveredBtnIndex] = useState<number | null>(null);
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  const { data: petsResult, exec: fetchPets } = useFetchPets();

  useEffect(() => {
    fetchPets(5, { status: PetStatus.available });
  }, []);

  const handleImageError = (index: number) => {
    setImageErrors((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <section
      style={styles.section}
      id="adocao"
      aria-labelledby="adoption-title"
    >
      <div style={styles.container}>
        <div style={styles.header}>
          <h2 style={styles.title} id="adoption-title">
            {t("adoption.title")}
          </h2>
          <p style={styles.subtitle}>{t("adoption.subtitle")}</p>
        </div>
        <div
          style={styles.grid}
          role="list"
          aria-label="Lista de animais disponíveis para adoção"
        >
          {petsResult?.pets &&
            petsResult.pets.map((pet, index) => (
              <HomePetCard key={index} pet={pet} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Adoption;
