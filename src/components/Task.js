import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../actions";

function Task() {
  const dispatch = useDispatch();
  const inputRef = useRef(null);

  const addNewTask = () => {
    const task = inputRef.current.value.trim();
    if (!task !== "") {
      dispatch(addTodo(task));
      inputRef.current.value = "";
    }
  };
  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Add Tasks here"
          ref={inputRef}
          className=""
        />
        <button onClick={addNewTask}>Add Task</button>
      </div>
    </div>
  );
}

export default Task;
