import { useState } from "react";
import ToDoList from "./To-Do-List";

export default function ToDoForm() {
  const [toDos, setToDos] = useState([
    { id: 1, task: "complete coding", completed: false },
  ]);
  const [newToDo, setNewToDo] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    setToDos((oldToDos) => {
      const newList = [
        { id: oldToDos.length + 1, task: newToDo, completed: false },
        ...oldToDos,
      ];
      console.log(newList);
      setNewToDo("");
      return newList;
    });
  };
  return (
    <>
      <form onSubmit={submitHandler}>
        <label>
          Add a new task:
          <input
            value={newToDo}
            onChange={(event) => {
              setNewToDo(event.target.value);
            }}
          />
        </label>
      </form>{" "}
      <ToDoList toDos={toDos} setToDos={setToDos} />
    </>
  );
}
