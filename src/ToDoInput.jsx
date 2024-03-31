import React, { useState } from "react";
import "./style.css";
function ToDoInput(props) {
  const [inputTask, setInputTask] = useState("");
  return (
    <>
      <h1>Add Task</h1>
      <div className="input-div">
        <input
          type="text"
          placeholder="Enter Task..."
          value={inputTask}
          onChange={(e) => {
            setInputTask(e.target.value);
          }}
        />
        <button
          onClick={() => {
            props.addFunction(inputTask);
            setInputTask("");
          }}
        >
          <h1>+</h1>
        </button>
      </div>
    </>
  );
}

export default ToDoInput;
