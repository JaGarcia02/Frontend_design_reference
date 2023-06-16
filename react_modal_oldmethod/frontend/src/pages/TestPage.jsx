import React, { useState } from "react";
import Modal from "../components/modal/Modal";

const BUTTON_WRAPPER_STYLES = {
  position: "relative",
  zIndex: 1,
};

const OTHER_CONTENT_STYLES = {
  position: "relative",
  zIndex: 2,
  backgroundColor: "red",
  padding: "10px",
};

const TestPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div style={BUTTON_WRAPPER_STYLES}>
        <button
          onClick={() => setIsOpen(true)}
          className="w-30 bg-blue-200 rounded-lg font-thin active:scale-1 active:duration-75 transform ease-in-out hover:scale-110 ml-10 mt-10 mb-10 hover:text-white hover:font-semibold hover:bg-blue-600"
        >
          Open Modal
        </button>
        <Modal open={isOpen} onClose={() => setIsOpen(false)}>
          Fancy Content
        </Modal>
      </div>

      <div style={OTHER_CONTENT_STYLES}>Other Contents</div>
    </>
  );
};

export default TestPage;
