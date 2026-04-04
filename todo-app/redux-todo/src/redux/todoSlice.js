import { createSlice } from '@reduxjs/toolkit';

// 1. Define initial state
const initialState = {
  todos: [] // Our todo list starts empty
};

// 2. Create the slice
const todoSlice = createSlice({
  name: 'todos', // Name of the slice
  initialState,
  reducers: {
    // Action to add a todo
    addTodo: (state, action) => {
      state.todos.push({
        id: Date.now(), // unique id
        text: action.payload,
        completed: false
      });
    },
    // Action to toggle completion
    toggleTodo: (state, action) => {
      const todo = state.todos.find(todo => todo.id === action.payload);
      if (todo) todo.completed = !todo.completed;
    },
    // Action to delete a todo
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    }
  }
});

// Export actions to use in components
export const { addTodo, toggleTodo, deleteTodo } = todoSlice.actions;

// Export reducer to include in store
export default todoSlice.reducer;