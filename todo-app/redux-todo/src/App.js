import React from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {
  return (
    <div style={{ margin: '20px' }}>
      <h1>Redux Todo App</h1>
      <TodoInput />
      <TodoList />
    </div>
  );
}

export default App;