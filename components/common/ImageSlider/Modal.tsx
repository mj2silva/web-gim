import { FC, ReactNode, useState } from "react";
import ReactModal from "react-modal";

ReactModal.setAppElement("#__next");

interface Props {
  modalComponent?: ReactNode;
}

const ModalButton: FC<Props> = (props) => {
  const { children, modalComponent } = props;
  const [isOpen, setIsOpen] = useState(false);

  function onOpenModal() {
    setIsOpen(true);
  }

  function onCloseModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button className="modal-button" onClick={onOpenModal}>
        {children}
      </button>
      <ReactModal
        isOpen={isOpen}
        onRequestClose={onCloseModal}
        contentLabel="Example Modal"
        preventScroll
        overlayClassName="modal-overlay"
      >
        {modalComponent}
      </ReactModal>
    </div>
  );
};

export default ModalButton;
