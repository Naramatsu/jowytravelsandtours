import React from "react";
import { AppContext } from "../../context";
import { BsXCircleFill } from "react-icons/bs";
import { useContext } from "react";
import "./Modal.style.scss";

const Modal = ({ onClose, children }) => {
  const { theme } = useContext(AppContext);
  return (
    <section className="modal">
      <section className={`modal__content ${theme}`}>
        <BsXCircleFill className="btn__close__modal" onClick={onClose} />
        {children}
      </section>
    </section>
  );
};

export default Modal;
