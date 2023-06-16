import React, { useState } from "react";
import Modal from "../components/Modal/Modal";
import "./MainModal.css";

const MainModal = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="MainModal">
      <h1>Hey, click on the button to open the modal.</h1>
      <button className="openModalBtn" onClick={() => setOpenModal(true)}>
        Open
      </button>
      {openModal && <Modal closeModal={setOpenModal} />}
    </div>
  );
};

export default MainModal;
