import TodoItem from "../TodoItem/TodoItem";
const TodoList = (props) => {
  if (props.filnalData.length === 0) {
    return <p>No Todo Found</p>;
  }

  return (
    <ul>
      {props.filnalData.map((todo, index) => (
        <TodoItem
          key={todo.id}
          title={todo.title}
          date={todo.date}
          priority={todo.priority}
        />
      ))}
    </ul>
  );
};

export default TodoList;
