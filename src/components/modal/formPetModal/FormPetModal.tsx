import { PetType } from "@/src/pet/petType";
import { Modal } from "../Modal";
import { useTranslation } from "react-i18next";
import { PetForm } from "../../forms/petForm/PetForm";

interface FormPetModalProps {
  isEditModalOpen: boolean;
  setIsEditModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  selectedPet: PetType | null;
  onSubmit: (pet: PetType) => void;
}

export const FormPetModal = ({
  isEditModalOpen,
  setIsEditModalOpen,
  selectedPet,
  onSubmit,
}: FormPetModalProps) => {
  const { t } = useTranslation();

  return (
    <Modal
      isOpen={isEditModalOpen}
      onClose={() => setIsEditModalOpen(false)}
      title={t("admin.edit")}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <PetForm
          onCancel={() => setIsEditModalOpen(false)}
          initialData={selectedPet}
          onSubmit={onSubmit}
        />
      </div>
    </Modal>
  );
};
