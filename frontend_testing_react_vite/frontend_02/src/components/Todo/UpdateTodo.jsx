import axios from "axios";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import decoded_jwt from "jwt-decode";

const UpdateTodo = ({ setOpenUpdate, openUpdate, setTaskList }) => {
  const [updateInput, setUpdateInput] = useState("");
  const [updateData, setUpdateData] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:6969/todo/api/viewTask-byId/${openUpdate.id}`)
      .then((res) => {
        setUpdateData(res.data);
        setUpdateInput(res.data.task);
      })
      .catch((err) => console.log(err));
  }, []);

  const updateTask = () => {
    if (updateInput == "") {
      alert("Input is empty!");
    }
    axios
      .put(`http://localhost:6969/todo/api/update-task/${openUpdate.id}`, {
        task: updateInput,
        user: openUpdate.activator.user,
      })
      .then((res) => {
        setTaskList(res.data);
        setOpenUpdate({ activator: null, id: null });
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="todoUpdate-main">
      <div className="todoUpdate-container">
        <h1 className="title-todoUpdate">Update Task </h1>
        <button
          className="todoUpdate-btnClose"
          onClick={() => setOpenUpdate(false)}
        >
          X
        </button>
        <div className="todoUpdate-inputContainer">
          <label htmlFor="">Task:</label>
          <input
            type="text"
            placeholder="Eneter task. . ."
            onChange={(e) => setUpdateInput(e.target.value)}
            value={updateInput}
          />
        </div>

        <button className="todoUpdate-btnSave" onClick={updateTask}>
          Update
        </button>
      </div>
    </div>
  );
};

export default UpdateTodo;
