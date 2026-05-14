import React, { useState, useEffect } from "react";
import { styles } from "./styles";
import {
  PetGender,
  PetSize,
  PetSpecies,
  PetStatus,
  PetType,
} from "@/src/firebase/collectionTypes/petType";
import { useTranslation } from "react-i18next";

interface PetFormProps {
  initialData?: PetType | null;
  onSubmit: (pet: PetType) => void;
  onCancel: () => void;
}

export const PetForm: React.FC<PetFormProps> = ({
  initialData,
  onSubmit,
  onCancel,
}) => {
  const { t } = useTranslation();
  const [isHoveredSubmit, setIsHoveredSubmit] = useState(false);
  const [isHoveredCancel, setIsHoveredCancel] = useState(false);

  const [formData, setFormData] = useState<PetType>({
    id: "",
    name: "",
    specie: PetSpecies.dog,
    gender: PetGender.male,
    age: new Date(),
    size: PetSize.medium,
    personality: "",
    image: "",
    status: PetStatus.available,
  });

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const submitButtonStyle: React.CSSProperties = {
    ...styles.submitButton,
    backgroundColor: isHoveredSubmit ? "#388E3C" : "#4CAF50",
    boxShadow: isHoveredSubmit
      ? "0 4px 12px rgba(76, 175, 80, 0.3)"
      : "0 2px 4px rgba(0,0,0,0.1)",
  };

  const cancelButtonStyle: React.CSSProperties = {
    ...styles.cancelButton,
    backgroundColor: isHoveredCancel ? "#f5f5f5" : "transparent",
  };

  const title = initialData
    ? t("admin.pet_form.title_edit")
    : t("admin.pet_form.title_create");

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>{title}</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label htmlFor="name" style={styles.label}>
            {t("admin.pet_form.label_name")}:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>
            {t("admin.pet_form.label_species")}:
          </label>
          <div style={styles.radioGroup}>
            <label>
              <input
                type="radio"
                name="specie"
                value={PetSpecies.dog}
                checked={formData.specie === PetSpecies.dog}
                onChange={handleChange}
              />{" "}
              {t("specie.dog")}
            </label>
            <label>
              <input
                type="radio"
                name="specie"
                value={PetSpecies.cat}
                checked={formData.specie === PetSpecies.cat}
                onChange={handleChange}
              />{" "}
              {t("specie.cat")}
            </label>
          </div>
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>
            {t("admin.pet_form.label_gender")}:
          </label>
          <div style={styles.radioGroup}>
            <label>
              <input
                type="radio"
                name="gender"
                value={PetGender.male}
                checked={formData.gender === PetGender.male}
                onChange={handleChange}
              />{" "}
              {t("gender.male")}
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value={PetGender.female}
                checked={formData.gender === PetGender.female}
                onChange={handleChange}
              />{" "}
              {t("gender.female")}
            </label>
          </div>
        </div>

        <div style={styles.formGroup}>
          <label htmlFor="age" style={styles.label}>
            {t("admin.pet_form.label_age")}:
          </label>
          <input
            type="date"
            id="age"
            name="age"
            value={
              formData.age instanceof Date
                ? formData.age.toISOString().split("T")[0]
                : ""
            }
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                age: new Date(e.target.value),
              }))
            }
            style={styles.input}
          />
        </div>

        <div style={styles.formGroup}>
          <label htmlFor="size" style={styles.label}>
            {t("admin.pet_form.label_size")}:
          </label>
          <select
            id="size"
            name="size"
            value={formData.size}
            onChange={handleChange}
            style={styles.select}
          >
            <option value={PetSize.small}>{t("size.small")}</option>
            <option value={PetSize.medium}>{t("size.medium")}</option>
            <option value={PetSize.big}>{t("size.big")}</option>
          </select>
        </div>

        <div style={styles.formGroup}>
          <label htmlFor="personality" style={styles.label}>
            {t("admin.pet_form.label_personality")}:
          </label>
          <textarea
            required
            id="personality"
            name="personality"
            value={formData.personality}
            onChange={handleChange}
            style={styles.textarea}
          />
        </div>

        <div style={styles.formGroup}>
          <label htmlFor="image" style={styles.label}>
            {t("admin.pet_form.label_image")}:
          </label>
          <input
            required
            type="text"
            id="image"
            name="image"
            value={formData.image}
            onChange={handleChange}
            style={styles.input}
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>
            {t("admin.pet_form.label_status")}:
          </label>
          <div style={styles.radioGroup}>
            <label>
              <input
                type="radio"
                name="status"
                value={PetStatus.available}
                checked={formData.status === PetStatus.available}
                onChange={handleChange}
              />{" "}
              {t("status.available")}
            </label>
            <label>
              <input
                type="radio"
                name="status"
                value={PetStatus.adopted}
                checked={formData.status === PetStatus.adopted}
                onChange={handleChange}
              />{" "}
              {t("status.adopted")}
            </label>
          </div>
        </div>

        <div style={styles.buttonGroup}>
          <button
            type="submit"
            style={submitButtonStyle}
            onMouseEnter={() => setIsHoveredSubmit(true)}
            onMouseLeave={() => setIsHoveredSubmit(false)}
          >
            {initialData
              ? t("admin.pet_form.btn_save")
              : t("admin.pet_form.btn_create")}
          </button>
          <button
            type="button"
            onClick={onCancel}
            style={cancelButtonStyle}
            onMouseEnter={() => setIsHoveredCancel(true)}
            onMouseLeave={() => setIsHoveredCancel(false)}
          >
            {t("admin.pet_form.btn_cancel")}
          </button>
        </div>
      </form>
    </div>
  );
};
