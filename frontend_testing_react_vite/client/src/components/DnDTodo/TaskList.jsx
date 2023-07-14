import React, { useState } from "react";
import { useEffect } from "react";
import { toast } from "react-hot-toast";

const TaskList = ({ taskData, setTaskData }) => {
  const [todos, setTodos] = useState([]);
  const [inProgress, setInProgress] = useState([]);
  const [closeTask, setClosedTask] = useState([]);
  const statuses = ["todo", "inprogress", "closed"];

  useEffect(() => {
    const fTodos = taskData.filter((task) => task.status === "todo");
    const fInProgress = taskData.filter((task) => task.status === "inprogress");
    const fClosed = taskData.filter((task) => task.status === "closed");

    setTodos(fTodos);
    setInProgress(fInProgress);
    setClosedTask(fClosed);
  }, [taskData]);

  return (
    <>
      <div className="flex gap-16">
        {statuses.map((res, index) => (
          <Section
            key={index}
            res={res}
            taskData={taskData}
            setTaskData={setTaskData}
            todos={todos}
            inProgress={inProgress}
            closeTask={closeTask}
          />
        ))}
      </div>
    </>
  );
};

export default TaskList;

const Section = ({
  res,
  taskData,
  setTaskData,
  todos,
  inProgress,
  closeTask,
}) => {
  let text = "Todo";
  let bg = "bg-slate-500";
  let taskToMap = todos;

  if (res === "inprogress") {
    text = "In Progress";
    bg = "bg-purple-500";
    taskToMap = inProgress;
  }
  if (res === "closed") {
    text = "In Progress";
    bg = "bg-green-500";
    taskToMap = closeTask;
  }
  return (
    // <div className={`w-[250px] h-[480px] overflow-y-auto`}>
    <div className={`w-64 overflow-auto`}>
      <Header text={text} bg={bg} count={taskToMap.length} /> List
      {taskToMap.length > 0 &&
        taskToMap.map((task) => (
          <Task
            key={task.id}
            task={task}
            taskData={taskData}
            setTaskData={setTaskData}
          />
        ))}
    </div>
  );
};

const Header = ({ text, bg, count }) => {
  return (
    <div
      className={`${bg} flex items-center h-12 pl-4 text-sm text-white uppercase `}
    >
      {text}
      <div className="ml-2 bg-white w-5 h-5 text-black rounded-full items-center justify-center flex">
        {count}
      </div>
    </div>
  );
};

const Task = ({ task, taskData, setTaskData }) => {
  const removeTask = (id) => {
    console.log(id);

    const fTask = task.filter((t) => t.id !== id);
    setTaskData(fTask);
    toast.error("Task removed!");
  };
  return (
    <>
      <div className={`relative p-4 mt-8 shadow-md rounded-md cursor-grab `}>
        <p>{task.name}</p>
        <button
          className="absolute bottom-1 right-1 text-red-400"
          onClick={() => removeTask(task.id)}
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
    </>
  );
};
