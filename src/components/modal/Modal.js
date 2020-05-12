import React from "react";

const Modal = ({ errorMessage, isOpen, onClose }) => {
  let dialog = (
    <div className="ui error message">
      <i className="close icon" onClick={onClose} />
      <div className="header">{errorMessage}</div>
    </div>
  );
  if (!isOpen) {
    dialog = null;
  }
  return <div>{dialog}</div>;
};

export default Modal;
