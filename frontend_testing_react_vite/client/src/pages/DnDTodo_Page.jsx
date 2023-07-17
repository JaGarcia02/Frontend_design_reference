import React, { useEffect, useState } from "react";
import CreateTask from "../components/DnDTodo/CreateTask";
import TaskList from "../components/DnDTodo/TaskList";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import toast, { Toaster } from "react-hot-toast";

const DnDTodo_Page = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(JSON.parse(localStorage.getItem("tasks")));
  }, []);

  return (
    <DndProvider backend={HTML5Backend}>
      {tasks.length == 0 ? (
        <>
          <Toaster />
          <div className="bg-slate-100 w-screen h-screen flex flex-col items-center p-3 gap-16 pt-32">
            <CreateTask tasks={tasks} setTasks={setTasks} />
          </div>
        </>
      ) : (
        <>
          <Toaster />
          <div className="bg-slate-100 w-screen h-screen flex flex-col items-center p-3 gap-16 pt-32">
            <CreateTask tasks={tasks} setTasks={setTasks} />
            <TaskList tasks={tasks} setTasks={setTasks} />
          </div>
        </>
      )}
    </DndProvider>
  );
};

export default DnDTodo_Page;
