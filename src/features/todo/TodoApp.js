import React from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function TodoApp() {
  return (
    <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">All</Link>
          </li>
          <li>
            <Link to="/todo">TODO</Link>
          </li>
          <li>
            <Link to="/done">Done</Link>
          </li>
        </ul>
      </nav>

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/todo">
          <Todo />
        </Route>
        <Route path="/done">
          <Done />
        </Route>
        <Route path="/">
          <All />
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

function All() {
  return (<div><TodoInput /><TodoList status={true}/><TodoList status={false}/></div>);
}

function Todo() {
  return (<div><TodoInput /><TodoList status={true}/></div>);
}

function Done() {
  return <TodoList status={false}/>;
}

export default TodoApp;
