// Modal.tsx
import React, { ReactNode } from "react";
import ReactDOM from "react-dom";
import { ModalOverlay, ModalContainer, ModalHeader, ModalContent, CloseButton } from "./Modal.styles";

interface ModalProps {
  onClose: () => void;
  children: ReactNode;
}

const Modal = ({ onClose, children }: ModalProps) => {
  return ReactDOM.createPortal(
    <ModalOverlay>
      <ModalContainer>
        <ModalHeader>
          <CloseButton onClick={onClose}><span>x</span></CloseButton>
        </ModalHeader>
        <ModalContent>{children}</ModalContent>
      </ModalContainer>
    </ModalOverlay>,
    document.body
  );
};

export default Modal;
