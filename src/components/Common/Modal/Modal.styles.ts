import styled from "@emotion/styled";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.div`
  background: #141414;
  padding: 20px 40px 35px;
  border-radius: 8px;
  max-width: 600px;
  width: 100%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border: 1px solid #fff;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;

  span {
    color: #fff;
  }
`;

export const ModalContent = styled.div`
`;