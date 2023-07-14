import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import uniqid from "uniqid";

const CreateTask = ({ taskData, setTaskData }) => {
  const [task, setTask] = useState({ id: "", name: "", status: "todo" });

  useEffect(() => {
    setTaskData(JSON.parse(localStorage.getItem("task_data")));
  }, []);

  const Create_Task = (e) => {
    e.preventDefault();

    if (task.name == "") {
      return toast.error("Task field is empty!");
    }

    if (task.name.length < 3) {
      return toast.error("Must have more than 3 characters!");
    }

    if (task.name.length > 100) {
      return toast.error("Must not be more than 100 characters!");
    }

    setTaskData((list_data) => {
      const list = [...list_data, task];

      localStorage.setItem("task_data", JSON.stringify(list));

      return list;
    });

    toast.success("Task created.");

    setTask({
      id: "",
      name: "",
      status: "todo",
    });
  };
  return (
    <>
      <Toaster />
      <form onSubmit={Create_Task}>
        <input
          type="text"
          className="border-2 border-slate-400 bg-slate-100 rounded-md mr-4 h-12 w-64 px-1"
          onChange={(e) =>
            setTask({ ...task, id: uniqid(), name: e.target.value })
          }
          value={task.name}
        />
        <button className="bg-cyan-500 rounded-md px-4 h-12 text-white">
          Create
        </button>
      </form>
    </>
  );
};

export default CreateTask;
