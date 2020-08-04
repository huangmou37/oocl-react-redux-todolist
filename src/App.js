import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import {todoStore} from './store/todoStore';
import TodoApp from './containers/todo';

function App() {
  return (
    <Provider store={todoStore}>
      <TodoApp />
    </Provider>
  );
}

export default App;
