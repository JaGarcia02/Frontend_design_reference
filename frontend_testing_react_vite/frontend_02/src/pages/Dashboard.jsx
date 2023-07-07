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

const Dashboard = () => {
  const [taskList, setTaskList] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [openAdd, setOpenAdd] = useState(false);
  const decoded_token = jwt_decode(Cookie.get("user_token"));

  useEffect(() => {
    axios
      .get(`http://localhost:6969/todo/api/viewTask-byUser-task`)
      .then((res) => setTaskList(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <NavBar />

      {openAdd && <AddTodo setOpenAdd={setOpenAdd} setTaskList={setTaskList} />}
      <div className="dashboard-main-container">
        <div className="todo-title">
          <h1>Task List</h1>
        </div>
        <div className="main-content">
          <div className="left-content">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum
              natus quibusdam veniam excepturi suscipit ratione nobis ad
              cupiditate quidem sint sapiente cum iure quisquam perspiciatis
              vero voluptas, at, voluptatum quae.
            </p>
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
                {taskList.map((data, index) => {
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
                          <button className="btn-update">Update</button>
                          <button className="btn-remove">Remove</button>
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
