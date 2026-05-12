"use client";

import { useState, useMemo, useCallback, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { PetSpecies, PetSize, PetGender, PetType } from "@/src/pet/petType";
import { styles } from "./styles";
import { PetCard } from "@/src/components/petCard/PetCard";
import { DeletePetModal } from "@/src/components/modal/deletePetModal/DeletePetModal";
import { FormPetModal } from "@/src/components/modal/formPetModal/FormPetModal";
import {
  useCreatePet,
  useDeletePet,
  useFetchPets,
  useUpdatePet,
} from "@/src/hooks/firebase";

const DonationSearchPage = () => {
  const { t } = useTranslation();

  const isAdmin = true;

  const { data: createPetData, exec: createPetExec } = useCreatePet();
  const { exec: updatePetExec } = useUpdatePet();
  const { data: petsData, exec: fetchPetsExec } = useFetchPets();
  const { exec: deletePetExec } = useDeletePet();

  const [searchTerm, setSearchTerm] = useState("");
  const [speciesFilter, setSpeciesFilter] = useState<string>("all");
  const [sizeFilter, setSizeFilter] = useState<string>("all");
  const [genderFilter, setGenderFilter] = useState<string>("all");

  const [selectedPet, setSelectedPet] = useState<PetType | null>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  useEffect(() => {
    fetchPetsExec();
  }, []);

  useEffect(() => {
    if (!createPetData) return;

    fetchPetsExec();

    setSelectedPet(null);
    setIsEditModalOpen(false);
  }, [createPetData]);

  const handleOpenEdit = useCallback((pet: PetType) => {
    setSelectedPet(pet);
    setIsEditModalOpen(true);
  }, []);

  const handleOpenDelete = useCallback((pet: PetType) => {
    setSelectedPet(pet);
    setIsDeleteModalOpen(true);
  }, []);

  const handleOpenCreate = useCallback(() => {
    setSelectedPet(null);
    setIsEditModalOpen(true);
  }, []);

  const handleFormSubmit = (pet: PetType) => {
    if (pet.id) {
      updatePetExec(pet.id, pet);
      setSelectedPet(null);
      setIsEditModalOpen(false);
      fetchPetsExec();

      return;
    }
    createPetExec(pet);
  };

  const handleDeleteSubmit = (pet: PetType) => {
    deletePetExec(pet.id);
    setIsDeleteModalOpen(false);
    fetchPetsExec();
  };

  const handleButtonHover = (
    e: React.MouseEvent<HTMLButtonElement>,
    isHovering: boolean,
  ) => {
    if (isHovering) {
      e.currentTarget.style.transform = "scale(1.05)";
      e.currentTarget.style.backgroundColor = "#943E5F";
    } else {
      e.currentTarget.style.transform = "scale(1)";
      e.currentTarget.style.backgroundColor = "#B14F73";
    }
  };

  const filteredPets = useMemo(() => {
    return petsData?.filter((pet) => {
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
  }, [searchTerm, speciesFilter, sizeFilter, genderFilter, petsData]);

  return (
    <div style={styles.wrapper}>
      <header style={styles.header}>
        <h1 style={styles.title}>{t("adoption.title")}</h1>
        <p style={styles.subtitle}>{t("adoption.subtitle")}</p>
        {isAdmin && (
          <>
            <br />
            <button
              style={styles.addNewPetButton}
              onClick={handleOpenCreate}
              onMouseOver={(e) => handleButtonHover(e, true)}
              onMouseOut={(e) => handleButtonHover(e, false)}
              title={t("admin.pet_form.btn_add_new_pet")}
            >
              <span style={{ fontSize: "1.5rem", lineHeight: 1 }}>+</span>{" "}
              {t("admin.pet_form.btn_add_new_pet")}
            </button>
          </>
        )}
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
        {filteredPets && filteredPets.length > 0 ? (
          filteredPets.map((pet) => (
            <PetCard
              key={pet.id}
              pet={pet}
              onEdit={handleOpenEdit}
              onDelete={handleOpenDelete}
              isAdmin={isAdmin}
            />
          ))
        ) : (
          <div style={styles.noResults}>
            <p style={{ fontSize: "1.2rem" }}>{t("adoption.no_results")}</p>
          </div>
        )}
      </div>

      <FormPetModal
        isModalOpen={isEditModalOpen}
        setIsModalOpen={setIsEditModalOpen}
        selectedPet={selectedPet}
        onSubmit={handleFormSubmit}
      />

      <DeletePetModal
        isDeleteModalOpen={isDeleteModalOpen}
        setIsDeleteModalOpen={setIsDeleteModalOpen}
        selectedPet={selectedPet}
        onSubmit={handleDeleteSubmit}
      />
    </div>
  );
};

export default DonationSearchPage;
