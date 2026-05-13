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
            petsResult.pets.map((pet, index) => {
              const especieEmoji = pet.specie === PetSpecies.cat ? "🐱" : "🐶";
              const hasError = imageErrors[index];
              const temImagem =
                pet.image && pet.image.trim() !== "" && !hasError;

              return (
                <article
                  key={pet.id}
                  style={styles.card(hoveredIndex === index)}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  role="listitem"
                >
                  <div style={styles.imageWrap}>
                    {temImagem ? (
                      <img
                        src={pet.image}
                        alt={`Foto d${pet.gender === PetGender.female ? "a" : "o"} ${pet.name}`}
                        style={styles.image}
                        loading="lazy"
                        onError={() => handleImageError(index)}
                      />
                    ) : (
                      <div style={styles.placeholder} aria-hidden="true">
                        <span style={{ fontSize: "3rem", opacity: 0.6 }}>
                          {especieEmoji}
                        </span>
                        <p
                          style={{
                            fontSize: "0.75rem",
                            fontWeight: 700,
                            opacity: 0.6,
                          }}
                        >
                          {pet.name}
                        </p>
                      </div>
                    )}
                    <span style={styles.statusBadge}>
                      {t(`status.${pet.status}`)}
                    </span>
                    <span
                      style={styles.speciesBadge}
                      aria-label={t(`specie.${pet.specie}`)}
                    >
                      {especieEmoji}
                    </span>
                  </div>
                  <div style={styles.cardBody}>
                    <h3 style={styles.petName}>{pet.name}</h3>
                    <div
                      style={styles.metaWrap}
                      aria-label={`Características de ${pet.name}`}
                    >
                      <span style={styles.metaItem}>
                        {t(`specie.${pet.specie}`)}
                      </span>
                      <span style={styles.metaItem}>
                        {t(`gender.${pet.gender}`)}
                      </span>
                      <span style={styles.metaItem}>
                        {transformDateToPetAge(pet.age, t)}
                      </span>
                      <span style={styles.metaItem}>
                        {t(`size.${pet.size}`)}
                      </span>
                    </div>
                    <p style={styles.personality}>"{pet.personality}"</p>
                  </div>
                  <a
                    href={getWhatsappUrl(pet.name, pet.gender)}
                    style={styles.cardBtn(hoveredBtnIndex === index)}
                    onMouseEnter={() => setHoveredBtnIndex(index)}
                    onMouseLeave={() => setHoveredBtnIndex(null)}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Tenho interesse em adotar ${pet.name} — abrir WhatsApp`}
                  >
                    {t("adoption.interest_btn")}
                  </a>
                </article>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default Adoption;
