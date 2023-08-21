import React from "react";
import Task from './Task';

function TaskList(props) {
  const displayTask = props.task.map((task) => (
    <Task key={task.task} text={task.text} category={task.category}/>
  ))
  return (
    <div className="tasks">
    {displayTask}
    </div>
  );
}

export default TaskList;
