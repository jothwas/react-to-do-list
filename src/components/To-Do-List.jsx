export default function ToDoList({ toDos, setToDos }) {
  return (
    <div>
      {toDos.map((todo, index) => {
        return (
          <li className="toDoList" key={`${todo.task} - ${index}`}>
            <input type="checkbox" />
            {todo.task}
            <button>Edit</button>
            <button>Delete</button>
          </li>
        );
      })}
    </div>
  );
}
