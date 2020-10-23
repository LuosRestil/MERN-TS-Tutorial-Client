import React from "react";

type Props = ITodoProps & {
  updateTodo: (todo: ITodo) => void;
  deleteTodo: (_id: string) => void;
}

const Todo: React.FC<Props> = ({ todo, updateTodo, deleteTodo}) => {
  const checkTodo: string = todo.status ? "line-through" : "";
  return (
    <div className="card">
      <div className="card--text">
        <h1 className={checkTodo}>{todo.name}</h1>
        <span className={checkTodo}>{todo.description}</span>
      </div>
      <div className="card--button">
        <button 
          onClick={() => updateTodo(todo)}
          className={todo.status ? "hide-button" : "card--button__done"}  
        >
          Complete
        </button>
        <button
          onClick={() => deleteTodo(todo._id)}
          className="card--button__delete"
        >
          Delete
        </button>
      </div>
    </div>
  )
}

export default Todo;
