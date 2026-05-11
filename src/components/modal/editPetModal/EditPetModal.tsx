import { PetType } from "@/src/pet/petType";
import { Modal } from "../Modal";
import { styles } from "./styles";
import { useTranslation } from "react-i18next";

interface EditPetModalProps {
  isEditModalOpen: boolean;
  setIsEditModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  selectedPet: PetType | null;
}

export const EditPetModal = ({
  isEditModalOpen,
  setIsEditModalOpen,
  selectedPet,
}: EditPetModalProps) => {
  const { t } = useTranslation();

  return (
    <Modal
      isOpen={isEditModalOpen}
      onClose={() => setIsEditModalOpen(false)}
      title={t("admin.edit")}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <p>
          Formulário de edição para <strong>{selectedPet?.name}</strong>.
          <br />
          (Aqui entrarão os inputs no futuro)
        </p>
        <button
          style={{
            ...styles.select,
            backgroundColor: "#E2DADB",
            border: "none",
          }}
          onClick={() => setIsEditModalOpen(false)}
        >
          Fechar
        </button>
      </div>
    </Modal>
  );
};
