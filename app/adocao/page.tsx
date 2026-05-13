"use client";

import { useState, useCallback, useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
  PetSpecies,
  PetSize,
  PetGender,
  PetType,
  PetStatus,
} from "@/src/firebase/collectionTypes/petType";
import { styles } from "./styles";
import { PetCard } from "@/src/components/petCard/PetCard";
import { DeletePetModal } from "@/src/components/modal/deletePetModal/DeletePetModal";
import { FormPetModal } from "@/src/components/modal/formPetModal/FormPetModal";
import {
  useCreatePet,
  useDeletePet,
  useFetchAdminByEmail,
  useFetchPets,
  useUpdatePet,
} from "@/src/hooks/firebase";
import { LoginButton } from "@/src/components/auth/LoginButton";
import { useGetUserAuth } from "@/src/hooks/firebase/auth/useUserAuth";

const DonationSearchPage = () => {
  const { t } = useTranslation();

  const { data: createPetData, exec: createPetExec } = useCreatePet();
  const { exec: updatePetExec } = useUpdatePet();
  const { data: petsData, exec: fetchPetsExec } = useFetchPets();
  const { exec: deletePetExec } = useDeletePet();
  const user = useGetUserAuth();
  const { data: adminResult, exec: fetchAdminByEmail } = useFetchAdminByEmail();

  const [searchTerm, setSearchTerm] = useState("");
  const [speciesFilter, setSpeciesFilter] = useState<string>("all");
  const [sizeFilter, setSizeFilter] = useState<string>("all");
  const [genderFilter, setGenderFilter] = useState<string>("all");
  const [statusFilter, setStatusFilter] = useState<string>(PetStatus.available);

  const [selectedPet, setSelectedPet] = useState<PetType | null>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const isAdmin = !!adminResult?.uid;

  useEffect(() => {
    fetchPetsExec(1000, { status: PetStatus.available });
  }, []);

  useEffect(() => {
    if (!user) return;

    fetchAdminByEmail(user.uid);
  }, [user]);

  useEffect(() => {
    if (!createPetData) return;

    fetchPetsExec();

    setSelectedPet(null);
    setIsEditModalOpen(false);
  }, [createPetData]);

  useEffect(() => {
    const handler = setTimeout(() => {
      const filters = {
        name: searchTerm,
        specie: speciesFilter === "all" ? "" : speciesFilter,
        size: sizeFilter === "all" ? "" : sizeFilter,
        gender: genderFilter === "all" ? "" : genderFilter,
        status: statusFilter === "all" ? "" : statusFilter,
      };

      fetchPetsExec(1000, filters);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm, speciesFilter, sizeFilter, genderFilter, statusFilter]);

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
      <div style={styles.loginContainer}>
        <LoginButton />
      </div>
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
        <select
          style={styles.select}
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="all">{t("adoption.all_statuses")}</option>
          <option value={PetStatus.available}>{t("status.available")}</option>
          <option value={PetStatus.adopted}>{t("status.adopted")}</option>
        </select>
      </section>
      <div style={styles.grid}>
        {petsData && petsData.pets.length > 0 ? (
          petsData.pets.map((pet) => (
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
