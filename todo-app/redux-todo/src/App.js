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

// Next project

// Each new day:

// Create a new folder at repo root:
// mkdir search-bar
// cd search-bar
// Create your project files.
// Go back to repo root:
// cd ../
// git add search-bar
// git commit -m "Add search-bar project"
// git push origin main

// Your repo will now show:

// practice/
// ├── todo-app/
// ├── search-bar/
// └── .gitignore