"use client";

import { useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { PET_LIST_EXAMPLE } from "@/src/utils/petListExample";
import { PetSpecies, PetSize, PetGender } from "@/src/pet/petType";
import { styles } from "./styles";
import { PetCard } from "@/src/components/PetCard/PetCard";

const DonationSearchPage = () => {
  const { t } = useTranslation();

  const [searchTerm, setSearchTerm] = useState("");
  const [speciesFilter, setSpeciesFilter] = useState<string>("all");
  const [sizeFilter, setSizeFilter] = useState<string>("all");
  const [genderFilter, setGenderFilter] = useState<string>("all");

  const filteredPets = useMemo(() => {
    return PET_LIST_EXAMPLE.filter((pet) => {
      const matchesSearch = pet.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesSpecies =
        speciesFilter === "all" || pet.specie === speciesFilter;
      const matchesSize = sizeFilter === "all" || pet.size === sizeFilter;
      const matchesGender =
        genderFilter === "all" || pet.gender === genderFilter;
      return matchesSearch && matchesSpecies && matchesSize && matchesGender;
    });
  }, [searchTerm, speciesFilter, sizeFilter, genderFilter]);

  return (
    <div style={styles.wrapper}>
      <header style={styles.header}>
        <h1 style={styles.title}>{t("adoption.title")}</h1>
        <p style={styles.subtitle}>{t("adoption.subtitle")}</p>
      </header>

      <section style={styles.filterBar} aria-label="Filtros de busca">
        <input
          type="text"
          placeholder={t("adoption.search_placeholder")}
          style={styles.input}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select
          style={styles.select}
          value={speciesFilter}
          onChange={(e) => setSpeciesFilter(e.target.value)}
        >
          <option value="all">{t("adoption.all_species")}</option>
          <option value={PetSpecies.dog}>{t("specie.dog")}</option>
          <option value={PetSpecies.cat}>{t("specie.cat")}</option>
        </select>

        <select
          style={styles.select}
          value={genderFilter}
          onChange={(e) => setGenderFilter(e.target.value)}
        >
          <option value="all">{t("adoption.all_genders")}</option>
          <option value={PetGender.male}>{t("gender.male")}</option>
          <option value={PetGender.female}>{t("gender.female")}</option>
        </select>

        <select
          style={styles.select}
          value={sizeFilter}
          onChange={(e) => setSizeFilter(e.target.value)}
        >
          <option value="all">{t("adoption.all_sizes")}</option>
          <option value={PetSize.small}>{t("size.small")}</option>
          <option value={PetSize.medium}>{t("size.medium")}</option>
          <option value={PetSize.big}>{t("size.big")}</option>
        </select>
      </section>

      <div style={styles.grid}>
        {filteredPets.length > 0 ? (
          filteredPets.map((pet) => <PetCard key={pet.id} pet={pet} />)
        ) : (
          <div style={styles.noResults}>
            <p style={{ fontSize: "1.2rem" }}>{t("adoption.no_results")}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DonationSearchPage;
