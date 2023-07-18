import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const IdleTime = () => {
  const [loggedIn, setLoggedIn] = useState(true);
  const navigate = useNavigate();

  const checkForInactivity = () => {
    const expireTime = localStorage.getItem("expireTime");

    if (expireTime < Date.now()) {
      console.log("Log out");
      setLoggedIn(false);
      navigate("/test3");
    }
  };

  const updateExpireTime = () => {
    const expireTime = Date.now() + 5000;

    localStorage.setItem("expireTime", expireTime);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      checkForInactivity();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    updateExpireTime();

    window.addEventListener("click", updateExpireTime);
    window.addEventListener("keypress", updateExpireTime);
    window.addEventListener("scroll", updateExpireTime);
    window.addEventListener("mousemove", updateExpireTime);

    return () => {
      window.addEventListener("click", updateExpireTime);
      window.addEventListener("keypress", updateExpireTime);
      window.addEventListener("scroll", updateExpireTime);
      window.addEventListener("mousemove", updateExpireTime);
    };
  }, []);
  return (
    <div>
      <div>
        <h1>Logged in: {loggedIn.toString()}</h1>
      </div>
    </div>
  );
};

export default IdleTime;

/* This is for React DnD */
/*

import React, { useEffect, useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import uniqid from "uniqid";

const DnDTodo_Page = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState({ id: "", name: "", status: "todo" });

  const [todos, setTodos] = useState([]);
  const [inProgress, setInProgress] = useState([]);
  const [closed, setClosed] = useState([]);

  const statuses = ["todo", "inprogress", "closed"];

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      task.name.length == "" &&
      tasks.filter((f) => f.status === "todo").length === 0
    ) {
      toast.error("Input field is empty!", {
        icon: "🤬",
        position: "top-right",
      });
    } else if (task.name.length === 3) {
      toast.error("A task must have more than 3 characters.", {
        icon: "💩",
        position: "top-right",
      });
    } else if (task.name.length > 50) {
      toast.error("A task must be less than 50 characters.", {
        icon: "🤡",
        position: "top-right",
      });
    }

    if (tasks.filter((f) => f.status === "todo").length === 5) {
      toast("Todo list is full!", { icon: "🦥" });
    } else {
      if (task.name.length > 3 && task.name.length != "") {
        axios
          .post("http://localhost:9999/api/create-task", {
            id: uniqid(),
            task: task.name,
            status: task.status,
          })
          .then((res) => {
            setTasks(res.data);
            setTask({ id: "", name: "", status: "todo" });
            toast.success("Task created!", {
              position: "bottom-right",
              icon: "🤑",
            });
          })
          .catch();
      }
    }
  };

  const handleRemove = (id) => {
    axios
      .delete(`http://localhost:9999/api/delete-task/${id}`)
      .then((res) => {
        setTasks(res.data);
        console.log(res.data);
        toast("Task removed", { icon: "😜", position: "bottom-right" });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    axios
      .get("http://localhost:9999/api/get-task")
      .then((res) => {
        setTasks(res.data);
      })
      .catch((err) => console.log(err));

    const fTodos = tasks.filter((Ft) => Ft.task_status === "todo");
    const fInProgress = tasks.filter((Ft) => Ft.task_status === "inprogress");
    const fClosed = tasks.filter((Ft) => Ft.task_status === "closed");

    setTodos(fTodos);
    setInProgress(fInProgress);
    setClosed(fClosed);
  }, []);

  return (
    <>
      <Toaster />
      <div className="bg-slate-100 w-screen h-screen flex flex-col items-center p-3 gap-16 pt-32">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="border-2 border-slate-400 bg-slate-100 rounded-md mr-4 h-12 w-64 px-1"
            onChange={(e) => setTask({ ...task, name: e.target.value })}
            value={task.name}
          />
          <button className="bg-cyan-500 rounded-md px-4 h-12 text-white">
            Create
          </button>
        </form>

   
        <div className="flex gap-16">
          {statuses.map((status, index) => {
            let text = "Todo";
            let bg = "bg-slate-500";
            let taskToMap = todos;

            if (status === "closed") {
              text = "Closed";
              bg = "bg-green-500";
              taskToMap = closed;
            }
            if (status === "inprogress") {
              text = "In Progress";
              bg = "bg-purple-500";
              taskToMap = inProgress;
            }

            return (
              <div key={index} className={`w-64 rounded-md p-2 `}>
                <div
                  className={`${bg} flex items-center h-12 pl-4 rounded-md uppercase text-sm text-white`}
                >
                  {text}
                  <div className="ml-2 bg-white w-5 h-5 text-black rounded-full flex items-center justify-center">
                    {taskToMap.length}
                  </div>
                </div>
                {taskToMap.length > 0 &&
                  taskToMap.map((task) => {
                    return (
                      <div
                        className={`relative p-4 mt-8 shadow-md rounded-md cursor-grab`}
                      >
                        <p>{task.task}</p>
                        <button
                          className="absolute bottom-1 right-1 text-red-400"
                          onClick={() => handleRemove(task.task_id)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                            />
                          </svg>
                        </button>
                      </div>
                    );
                  })}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default DnDTodo_Page;


*/
