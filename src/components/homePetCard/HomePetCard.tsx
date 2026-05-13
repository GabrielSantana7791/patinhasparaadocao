"use client";

import { useTranslation } from "react-i18next";
import {
  PetGender,
  PetSpecies,
  PetType,
} from "@/src/firebase/collectionTypes/petType";
import { styles } from "./styles";
import { transformDateToPetAge } from "@/src/utils/dateTranslator";
import React, { useState } from "react";

interface PetCardProps {
  pet: PetType;
}

const WHATSAPP_NUMBER = "5531986149886";
const getWhatsappUrl = (petName: string, sexo: string) => {
  const msg = `Olá! Tenho interesse em saber mais sobre a adoção d${
    sexo === "Fêmea" ? "a" : "o"
  } ${petName}.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
};

const HomePetCard: React.FC<PetCardProps> = ({ pet }) => {
  const { t } = useTranslation();

  const [isHovered, setIsHovered] = useState(false);
  const [isBtnHovered, setIsBtnHovered] = useState(false);
  const [hasImageError, setHasImageError] = useState(false);

  const especieEmoji = pet.specie === PetSpecies.cat ? "🐱" : "🐶";
  const temImagem = pet.image && pet.image.trim() !== "" && !hasImageError;

  return (
    <>
      {" "}
      <article
        key={pet.id}
        style={styles.card(isHovered)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        role="listitem"
      >
        <div style={styles.imageWrap}>
          {temImagem ? (
            <img
              src={pet.image}
              alt={`Foto d${pet.gender === PetGender.female ? "a" : "o"} ${pet.name}`}
              style={styles.image}
              loading="lazy"
              onError={() => setHasImageError(true)}
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
          <span style={styles.statusBadge}>{t(`status.${pet.status}`)}</span>
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
            <span style={styles.metaItem}>{t(`specie.${pet.specie}`)}</span>
            <span style={styles.metaItem}>{t(`gender.${pet.gender}`)}</span>
            <span style={styles.metaItem}>
              {transformDateToPetAge(pet.age, t)}
            </span>
            <span style={styles.metaItem}>{t(`size.${pet.size}`)}</span>
          </div>
          <p style={styles.personality}>"{pet.personality}"</p>
        </div>
        <a
          href={getWhatsappUrl(pet.name, pet.gender)}
          style={styles.cardBtn(isBtnHovered)}
          onMouseEnter={() => setIsBtnHovered(true)}
          onMouseLeave={() => setIsBtnHovered(false)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Tenho interesse em adotar ${pet.name} — abrir WhatsApp`}
        >
          {t("adoption.interest_btn")}
        </a>
      </article>
    </>
  );
};

export default HomePetCard;
