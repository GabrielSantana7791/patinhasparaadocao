import { styles } from "./styles";
import { useTranslation } from "react-i18next";
import { PetType } from "@/src/pet/petType";

type PetCardProps = {
  pet: PetType;
  isAdmin?: boolean;
  onEdit: (pet: PetType) => void;
  onDelete: (pet: PetType) => void;
};

export const PetCard = ({
  onEdit,
  onDelete,
  pet,
  isAdmin = true,
}: PetCardProps) => {
  const { t } = useTranslation();

  const handleEdit = () => {
    onEdit(pet);
  };

  const handleDelete = () => {
    onDelete(pet);
  };

  return (
    <article key={pet.id} style={{ ...styles.card, position: "relative" }}>
      {isAdmin && (
        <div style={styles.adminActions.container}>
          <button
            title={t("admin.edit")}
            style={styles.adminActions.button}
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = "scale(1.1)")
            }
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            onClick={handleEdit}
          >
            ✏️
          </button>
          <button
            title={t("admin.delete")}
            style={styles.adminActions.button}
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = "scale(1.1)")
            }
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            onClick={handleDelete}
          >
            🗑️
          </button>
        </div>
      )}
      <div style={styles.imageContainer}>
        <img src={pet.image} alt={pet.name} style={styles.image} />
      </div>
      <div style={styles.cardContent}>
        <h3 style={styles.petName}>{pet.name}</h3>
        <div style={styles.badgeRow}>
          <span style={styles.badge}>{t(`specie.${pet.specie}`)}</span>
          <span style={styles.badge}>{t(`gender.${pet.gender}`)}</span>
          <span style={styles.badge}>{t(`size.${pet.size}`)}</span>
          <span style={styles.badge}>{pet.age}</span>
        </div>
        <p style={styles.personality}>{pet.personality}</p>
        <button
          style={styles.button}
          onMouseOver={(e) => (e.currentTarget.style.opacity = "0.9")}
          onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
        >
          {t("adoption.interest_btn")}
        </button>
      </div>
    </article>
  );
};
