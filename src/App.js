import React from 'react';
import { Provider } from 'react-redux';
import {todoStore} from './app/store';
import TodoApp from './features/todo/TodoApp';

function App() {
  return (
    <Provider store={todoStore}>
      <TodoApp />
    </Provider>
  );
}

export default App;
