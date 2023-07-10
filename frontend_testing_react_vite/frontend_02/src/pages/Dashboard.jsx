import React, { useEffect, useState } from "react";
import {
  check_token,
  logout_user,
  reset,
} from "../redux/features/user/user_slice";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Cookie from "js-cookie";
import NavBar from "../components/NavBar";
import jwt_decode from "jwt-decode";
import axios from "axios";
import AddTodo from "../components/Todo/AddTodo";
import UpdateTodo from "../components/Todo/UpdateTodo";

const Dashboard = () => {
  const [taskList, setTaskList] = useState([]);
  const [searchTask, setSearchTask] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [openAdd, setOpenAdd] = useState(false);
  const [openUpdate, setOpenUpdate] = useState({ activator: null, id: null });
  const decoded_token = jwt_decode(Cookie.get("user_token"));

  useEffect(() => {
    axios
      .get(
        `http://localhost:6969/todo/api/viewTask-byUser-task/${decoded_token.email}`
      )
      .then((res) => setTaskList(res.data))
      .catch((err) => console.log(err));
  }, []);

  const delete_task = (data) => {
    axios
      .delete(
        `http://localhost:6969/todo/api/delete-task/${data}/${decoded_token.email}`
      )
      .then((res) => setTaskList(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <NavBar />

      {openAdd && <AddTodo setOpenAdd={setOpenAdd} setTaskList={setTaskList} />}
      {openUpdate.id && (
        <UpdateTodo
          openUpdate={openUpdate}
          setOpenUpdate={setOpenUpdate}
          setTaskList={setTaskList}
        />
      )}
      <div className="dashboard-main-container">
        <div className="todo-title">
          <h1>Task List</h1>
        </div>

        <div className="main-content">
          <div className="task-search-container">
            <input
              type="text"
              placeholder="Search taks. . ."
              onChange={(e) => setSearchTask(e.target.value)}
            />
          </div>
          <div className="todo-table">
            <table>
              <thead>
                <tr>
                  <th className="th-1">
                    <span>No.</span>
                  </th>
                  <th className="th-2">
                    <span>Name</span>
                  </th>
                  <th className="th-3">
                    <span>Task/Todo</span>
                  </th>
                  <th className="th-4">
                    <div className="addTask-container">
                      <button onClick={() => setOpenAdd(true)}>Add Task</button>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {taskList
                  .filter((val) => {
                    if (
                      searchTask == "" ||
                      val.task
                        .toLowerCase()
                        .includes(searchTask.toLocaleLowerCase())
                    ) {
                      return val;
                    }
                  })
                  .map((data, index) => {
                    return (
                      <tr>
                        <td className="td-1">
                          <span>{index + 1}</span>
                        </td>
                        <td className="td-2">
                          <span>{data.user}</span>
                        </td>
                        <td className="td-3">
                          <span>{data.task}</span>
                        </td>
                        <td className="td-4">
                          <div className="table-btn">
                            <button
                              className="btn-update"
                              onClick={() =>
                                setOpenUpdate({ activator: data, id: data._id })
                              }
                            >
                              Update
                            </button>
                            <button
                              className="btn-remove"
                              onClick={() => delete_task(data._id)}
                            >
                              Remove
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
