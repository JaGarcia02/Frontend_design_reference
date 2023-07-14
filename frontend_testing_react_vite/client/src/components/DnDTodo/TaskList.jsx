import React, { useState } from "react";

const TaskList = ({ taskData, setTaskData }) => {
  const [todos, setTodos] = useState([]);
  const [inProgress, setInProgress] = useState([]);
  const [closeTask, setClosedTask] = useState([]);

  return (
    <>
      <h1></h1>
    </>
  );
};

export default TaskList;
