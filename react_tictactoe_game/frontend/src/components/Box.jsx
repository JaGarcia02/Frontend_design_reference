import React from "react";

const Box = ({ value, onClick }) => {
  const style = value === "X" ? "boxes x" : "boxes o";
  return (
    <div>
      <button className={style} onClick={onClick}>
        {value}
      </button>
    </div>
  );
};

export default Box;
