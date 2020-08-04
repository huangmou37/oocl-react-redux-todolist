import React from 'react';
import TodoInput from './features/todo/TodoInput';
import TodoList from './features/todo/TodoList';
// import FinishedTodoList from './features/todo/FinishedTodoList';

function App() {
  return (
    <div className="App">
      <TodoInput />
      <TodoList />
    </div>
  );
}

export default App;
