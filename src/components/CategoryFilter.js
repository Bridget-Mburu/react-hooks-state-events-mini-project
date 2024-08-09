import React, { useState } from "react";
import { CATEGORIES, TASKS } from "../data";

function CategoryFilter({setTasks}) {
const [categorySelected, setCategory] = useState("All")
const handleSelection = (category) => {
  setCategory(category)
  setTasks(
    category === "All" ? TASKS : TASKS.filter((task) => task.category === category)
  )
}
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {CATEGORIES.map((category, index) => (
        <button 
        key = {index}
        className={category === categorySelected ? "selected" : ""}
         onClick={() => handleSelection(category)}
        >{category}</button>
      ))}
    </div>
  );
}

export default CategoryFilter;
