import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import uniqid from "uniqid";

const CreateTask = ({ tasks, setTasks }) => {
  const [task, setTask] = useState({ id: "", name: "", status: "todo" });

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
        setTasks((prev) => {
          const list = [...prev, task];
          localStorage.setItem("tasks", JSON.stringify(list));
          setTask({ id: "", name: "", status: "todo" });
          toast.success("Task created!", {
            position: "bottom-right",
            icon: "🤑",
          });
          return list;
        });
      }
    }
  };

  return (
    <>
      <Toaster />
      <form onSubmit={handleSubmit}>
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
