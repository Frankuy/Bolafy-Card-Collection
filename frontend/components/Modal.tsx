import ReactModal from "react-modal";

interface ModalProps {
  children?: JSX.Element | JSX.Element[] | string | string[];
}

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    zIndex: 100,
  },
  content: {
    backgroundColor: "#1e1940",
    borderRadius: "8px",
    borderColor: "transparent",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const Modal = ({ children }: ModalProps) => {
  return (
    <ReactModal isOpen style={customStyles}>
      {children}
    </ReactModal>
  );
};

export default Modal;
