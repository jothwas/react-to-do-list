import ToDoCard from "./To-Do-Card";

export default function ToDoList({ toDos, setToDos }) {
  return (
    <div>
      {toDos
        .filter((todo) => !todo.completed)
        .map((todo, index) => {
          return (
            <ToDoCard
              todo={todo}
              index={index}
              setToDos={setToDos}
              key={`${todo.task} - ${index}`}
            />
          );
        })}
    </div>
  );
}
