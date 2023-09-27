import React, { useState } from "react";
import Modal_Test_Page from "../components/Test_Page/Modal_Test_Page";
import Modal_Test2_Page from "../components/Test_Page/Modal_Test2_Page";
import Modal_Test3_Page from "../components/Test_Page/Modal_Test3_Page";

export const Test_Page = () => {
  const [openModal, setOpenModal] = useState(false);
  const [newModal, setNewModal] = useState(false);
  const [newForm, setNewForm] = useState(false);

  return (
    <div>
      <button className="bg-green-500" onClick={() => setOpenModal(true)}>
        Click Me
      </button>
      <button className="bg-blue-500" onClick={() => setNewModal(true)}>
        Click Me
      </button>

      <button className="bg-red-500" onClick={() => setNewForm(true)}>
        Click Me
      </button>

      {newModal && <Modal_Test2_Page setNewModal={setNewModal} />}
      {openModal && <Modal_Test_Page setOpenModal={setOpenModal} />}
      {newForm && <Modal_Test3_Page setNewForm={setNewForm} />}
    </div>
  );
};
