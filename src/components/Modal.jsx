import React from "react";

const Modal = ({ onClick }) => {
  return (
    <div className="modal">
      <p className=" mb-8">Are you Sure?</p>
      <button className="btn btn--alt" onClick={onClick}>
        Cancel
      </button>
      <button className="btn" onClick={onClick}>
        Confirm
      </button>
    </div>
  );
};

export default Modal;
