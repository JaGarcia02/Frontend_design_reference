import React from "react";
import ReactDom from "react-dom";

const MODAL_STYLES = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  background: "#FFF",
  padding: "50px",
  zIndex: 1000,
};

const OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0,0,0,.7)",
  zIndex: 1000,
};

export default function Modal({ open, children, onClose }) {
  if (!open) return null;
  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLES} />
      <div style={MODAL_STYLES}>
        <button
          className="bg-red-400 rounded-lg w-30 font-thin  active:scale-1 active:duration-75 transform ease-in-out hover:scale-110 hover:font-semibold hover:text-white"
          onClick={onClose}
        >
          Close Modal
        </button>
        {children}
      </div>
    </>,
    document.getElementById("protal")
  );
}
