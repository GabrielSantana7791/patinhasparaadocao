"use client";

import React, { useEffect, useState } from "react";
import { styles } from "./styles";
import { useTranslation } from "react-i18next";
import { PetStatus } from "@/src/firebase/collectionTypes/petType";
import { useFetchPets } from "@/src/hooks/firebase";
import HomePetCard from "../homePetCard/HomePetCard";

const Adoption: React.FC = () => {
  const { t } = useTranslation();
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
