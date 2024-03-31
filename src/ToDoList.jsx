import React from "react";
import "./style.css";
import { FaTrashCan } from "react-icons/fa6";
function ToDoList(props) {
  return (
    <>
      <ul>
        <li
          style={{
            color: "white",
            border: "1px solid white",
            padding: "10px",
            width: "44%",
            fontSize: "25px",
            color: "rgb(24, 215, 240)",
            fontWeight: "bold",
            wordWrap: "break-word",
          }}
        >
          {props.item}{" "}
          <FaTrashCan
            style={{ alignSelf: "end" }}
            onClick={() => props.deleteItem(props.index)}
          />
        </li>
      </ul>
    </>
  );
}

export default ToDoList;
