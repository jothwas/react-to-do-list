export default function ToDoCard({ todo, index, setToDos }) {
  const completeClicker = () => {
    setToDos((currentToDos) => {
      return currentToDos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      });
    });
  };
  const editClicker = () => {};
  const deleteClicker = () => {};

  return (
    <ul className="toDoList">
      <input type="checkbox" onClick={completeClicker} />
      {todo.task}
      <button onClick={editClicker}>Edit</button>
      <button onClick={deleteClicker}>Delete</button>
    </ul>
  );
}
