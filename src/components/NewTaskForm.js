import React from "react";

function NewTaskForm() {

  const [ formData, setFormdata ] = ([])
  setFormdata (onTaskFormSubmit)
  // const formSubmit = (e) => {
  //   e.preventdefault();
  //   let formDetails = {
  //     text: 
  //     category: 
  //   }
  // }
  return (
    <form className="new-task-form" onSubmit="formSubmit">
      <label>
        Details
        <input type="text" name="text" />
      </label>
      <label>
        Category
        <select name="category">
          {/* render <option> elements for each category here */}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
