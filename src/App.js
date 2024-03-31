import { useState } from "react";
import ToDoInput from "./ToDoInput";
import ToDoList from "./ToDoList";

const App = () => {
  const [mytask, setMyTask] = useState([]);
  let addTask = (inputTask) => {
    setMyTask([...mytask, inputTask]);
  };
  const removeTask = (key) => {
    let newTodoList = [...mytask];
    newTodoList.splice(key, 1);
    setMyTask([...newTodoList]);
  };

  return (
    <>
      <h1
        style={{
          color: "white",
          marginLeft: "38%",
          marginTop: "20px",
          textDecoration: "underline",
        }}
      >
        To Do List Project
      </h1>
      <ToDoInput addFunction={addTask} />
      <h1
        style={{
          color: "white",
          font: "50px",
          marginLeft: "32%",
          marginTop: "50px",
        }}
      >
        Added ToDos
      </h1>
      {mytask.map((listItem, i) => {
        return (
          <ToDoList item={listItem} index={i} key={i} deleteItem={removeTask} />
        );
      })}
    </>
  );
};

export default App;
