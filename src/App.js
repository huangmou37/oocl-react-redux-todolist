import React from 'react';
import TodoInput from './features/todo/TodoInput';
import TodoList from './features/todo/TodoList';

function App() {
  return (
    <div className="App">
      <TodoInput />
      <TodoList />
    </div>
  );
}

export default App;
