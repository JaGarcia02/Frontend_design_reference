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

const Dashboard = () => {
  const { user, isLoadingUser, isErrorUser, isSuccessUser, messageUser } =
    useSelector((state) => state.user);
  const [teskList, setTaskList] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <>
      <NavBar />
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
                  <th className="th-4"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="td-1">
                    <span>1</span>
                  </td>
                  <td className="td-2">
                    <span>Test</span>
                  </td>
                  <td className="td-3">
                    <span>My task</span>
                  </td>
                  <td className="td-4">
                    <div className="table-btn">
                      <button className="btn-update">Update</button>
                      <button className="btn-remove">Remove</button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
