import React, { useState } from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {
  const [formData, setFormData] = useState({
    text: "",
    category: "",
  })
  const handleChange = (e) => {
    const {name, value} = e.target
    setFormData({...formData, [name]: value})
  }

  const handlingSubmit = (event) => {
    event.preventDefault()
    onTaskFormSubmit(formData)
    setFormData({text:"",category:""})
  }
   
  return (
    <form className="new-task-form" onSubmit={handlingSubmit}>
      <label>
        Details
        <input type="text" name="text" value={formData.text} onChange={handleChange}/>
      </label>
      <label>
        Category
        <select name="category" value={formData.category} onChange={handleChange}>
          {categories.map((category) => category !== "All" && <option key={category}>{category}</option>)}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
