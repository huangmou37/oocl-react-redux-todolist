import React from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import DoneList from './DoneList';
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
            <Link to="/todo">TODO Items</Link>
          </li>
          <li>
            <Link to="/done">Done Items</Link>
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
  return (<div><TodoInput /><TodoList /><DoneList /></div>);
}

function Todo() {
  return (<div><TodoInput /><TodoList /></div>);
}

function Done() {
  return <DoneList />;
}

export default TodoApp;
