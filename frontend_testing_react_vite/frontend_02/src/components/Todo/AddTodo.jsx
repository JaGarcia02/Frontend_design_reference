import axios from "axios";
import React, { useState } from "react";
import Cookies from "js-cookie";
import decoded_jwt from "jwt-decode";

const AddTodo = ({ setOpenAdd, setTaskList }) => {
  const [newTask, setNewtask] = useState("");
  const token = decoded_jwt(Cookies.get("user_token"));
  //   console.log(token.email);

  const createTask = () => {
    if (newTask == "") {
      alert("Input field is empty!");
    }
    axios
      .post("http://localhost:6969/todo/api/create-task", {
        task: newTask,
        user: token.email,
      })
      .then((res) => {
        setNewtask("");
        setTaskList(res.data);
        setOpenAdd(false);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="todoAdd-main">
      <div className="todoAdd-container">
        <h1 className="title-todoAdd">Add Task </h1>
        <button className="todoAdd-btnClose" onClick={() => setOpenAdd(false)}>
          X
        </button>
        <div className="todoAdd-inputContainer">
          <label htmlFor="">Task:</label>
          <input
            type="text"
            placeholder="Eneter task. . ."
            onChange={(e) => setNewtask(e.target.value)}
          />
        </div>

        <button className="todoAdd-btnSave" onClick={createTask}>
          Create
        </button>
      </div>
    </div>
  );
};

export default AddTodo;
