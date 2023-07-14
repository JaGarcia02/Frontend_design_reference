import React, { useState } from "react";
import CreateTask from "../components/DnDTodo/CreateTask";
import TaskList from "../components/DnDTodo/TaskList";

const DnDTodo_Page = () => {
  const [taskData, setTaskData] = useState([]);
  return (
    <div className="bg-slate-100 w-screen h-screen flex flex-col items-center pt-3 gap-16 pt-32">
      <CreateTask taskData={taskData} setTaskData={setTaskData} />
      <TaskList taskData={taskData} setTaskData={setTaskData} />
    </div>
  );
};

export default DnDTodo_Page;
