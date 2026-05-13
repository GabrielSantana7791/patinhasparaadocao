import { PetType } from "@/src/firebase/collectionTypes/petType";
import { Modal } from "../Modal";
import { useTranslation } from "react-i18next";
import { PetForm } from "../../forms/petForm/PetForm";

interface FormPetModalProps {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  selectedPet: PetType | null;
  onSubmit: (pet: PetType) => void;
}

export const FormPetModal = ({
  isModalOpen,
  setIsModalOpen,
  selectedPet,
  onSubmit,
}: FormPetModalProps) => {
  const { t } = useTranslation();

  return (
    <Modal
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      title={t("admin.edit")}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <PetForm
          onCancel={() => setIsModalOpen(false)}
          initialData={selectedPet}
          onSubmit={onSubmit}
        />
      </div>
    </Modal>
  );
};
