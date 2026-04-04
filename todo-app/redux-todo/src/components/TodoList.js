import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo } from '../redux/todoSlice';

const TodoList = () => {
  // 1. Read data from Redux store
  const todos = useSelector((state) => state.todos.todos);

  // 2. Get dispatch function
  const dispatch = useDispatch();

  return (
    <ul>
      {todos.map((todo) => (
        <li
          key={todo.id}
          style={{
            textDecoration: todo.completed ? 'line-through' : 'none',
            cursor: 'pointer'
          }}
        >
          {/* Toggle on click */}
          <span onClick={() => dispatch(toggleTodo(todo.id))}>
            {todo.text}
          </span>

          {/* Delete button */}
          <button onClick={() => dispatch(deleteTodo(todo.id))}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;