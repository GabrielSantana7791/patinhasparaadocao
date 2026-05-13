import { PetType } from "@/src/firebase/collectionTypes/petType";
import { Modal } from "../Modal";
import { useTranslation } from "react-i18next";
import { styles } from "./styles";

interface DeletePetModalProps {
  isDeleteModalOpen: boolean;
  setIsDeleteModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  selectedPet: PetType | null;
  onSubmit: (pet: PetType) => void;
}

export const DeletePetModal = ({
  isDeleteModalOpen,
  setIsDeleteModalOpen,
  selectedPet,
  onSubmit,
}: DeletePetModalProps) => {
  const { t } = useTranslation();

  const handleDeletePet = () => {
    if (!selectedPet) return;
    onSubmit(selectedPet);
    setIsDeleteModalOpen(false);
  };

  return (
    <Modal
      isOpen={isDeleteModalOpen}
      onClose={() => setIsDeleteModalOpen(false)}
      title={t("admin.delete")}
    >
      <p>{t("admin.delete_modal.confirmation", { name: selectedPet?.name })}</p>
      <div style={styles.footer}>
        <button
          style={styles.cancelButton}
          onClick={() => setIsDeleteModalOpen(false)}
        >
          {t("admin.delete_modal.cancel")}
        </button>
        <button style={styles.confirmButton} onClick={() => handleDeletePet()}>
          {t("admin.delete_modal.confirm")}
        </button>
      </div>
    </Modal>
  );
};
