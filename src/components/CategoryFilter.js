import React, { useState } from "react";

function CategoryFilter({categories, task}) {
console.log(categories, task);

const [ categoryClass, setCategoryClass ] =  useState("All")
const HandleClick = (i) => {
  
  setCategoryClass(i)
}
// const [ lists, setLists ] = useState()
// const updatedList = ({tasks}) => {
//   return (
//   setLists(tasks.map((list) => console.log(list.category)))
// )}
const filteredTasks = categoryClass === 'All' ? task : task.filter((task) => task.category === categoryClass);
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((i) => (
    <button className={categoryClass === i ? 'selected' : ''} key= {i} onClick={() => HandleClick(i)}>{i}</button>
      ))}
    {filteredTasks.map((item) => (
        <div key={item.text}>{item.text}</div>
      ))}
    </div>
  );
}

export default CategoryFilter;
