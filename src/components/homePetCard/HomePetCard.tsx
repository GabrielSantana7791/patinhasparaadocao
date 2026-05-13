"use client";

import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { PetType } from "@/src/firebase/collectionTypes/petType";
import { styles } from "./styles";

interface PetCardProps {
  pet: PetType;
}

const PetCard: React.FC<PetCardProps> = ({ pet }) => {
  const { t } = useTranslation();

  return (
    <div style={styles.cardContainer}>
      <div style={styles.imageWrapper}>
        <Image
          src={pet.image}
          alt={pet.name}
          fill
          loading="eager"
          style={styles.petImage}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div style={styles.statusBadge}>{t(`status.${pet.status}`)}</div>
      </div>

      <div style={styles.contentContainer}>
        <div style={styles.headerWrapper}>
          <div>
            <h3 style={styles.petName}>{pet.name}</h3>
            <span style={styles.specieTag}>{t(`specie.${pet.specie}`)}</span>
          </div>
          <div style={styles.specieIcon} role="img" aria-hidden="true">
            {pet.specie === "dog" ? "🐶" : "🐱"}
          </div>
        </div>

        <p style={styles.personalityText}>{pet.personality}</p>

        <div style={styles.attributesGrid}>
          <div style={styles.attributeBox}>
            <span style={styles.attributeLabel}>{t("gender.title")} </span>
            <span style={styles.attributeValue}>
              {t(`gender.${pet.gender}`)}
            </span>
          </div>
          <div style={styles.attributeBox}>
            <span style={styles.attributeLabel}>{t("age.title")}</span>
            <span style={styles.attributeValue}>{pet.age}</span>
          </div>
          <div style={styles.attributeBox}>
            <span style={styles.attributeLabel}>{t("size.title")}</span>
            <span style={styles.attributeValue}>{t(`size.${pet.size}`)}</span>
          </div>
        </div>

        <button style={styles.actionButton}>
          {t("adoption.interest_btn")}
        </button>
      </div>
    </div>
  );
};

export default PetCard;
