import React, { useRef } from "react";
import { styles } from "./styles";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export const Modal = ({ isOpen, onClose, title, children }: ModalProps) => {
  const mouseDownTarget = useRef<EventTarget | null>(null);

  if (!isOpen) return null;

  const handleMouseDown = (e: React.MouseEvent) => {
    mouseDownTarget.current = e.target;
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (
      mouseDownTarget.current === e.currentTarget &&
      e.target === e.currentTarget
    ) {
      onClose();
    }
  };

  return (
    <div
      style={styles.overlay}
      onMouseDown={handleMouseDown}
      onClick={handleOverlayClick}
    >
      <div style={styles.content} onClick={(e) => e.stopPropagation()}>
        <header style={styles.header}>
          <h2 style={styles.title}>{title}</h2>
          <button
            style={styles.closeButton}
            onClick={onClose}
            aria-label="Close"
          >
            ✕
          </button>
        </header>
        <div style={styles.body}>{children}</div>
      </div>
    </div>
  );
};
