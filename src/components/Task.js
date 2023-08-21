import React, { useState} from "react";

function Task({text, category}) {
 const [data, setData] = useState()

  const handleDelete = (e) => {
    // const updateData = data.filter(data = data.id !== text)
    // setData(updateData)
    console.log(e.target.value) 
  }
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleDelete}>X</button>
    </div>
  );
}

export default Task;
