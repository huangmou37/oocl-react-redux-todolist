import React from 'react';
import {connect} from 'react-redux';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import TodoService from './services/TodoService';
import { loadAllTodosAction } from './Actions';

function TodoApp(props) {
  retrieveTodos(props);

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

const retrieveTodos = (props) => {
  TodoService.getAll()
    .then(response => {
      // console.log(response.data);
      props.loadAll(response.data);
    })
    .catch(e => {
      console.error(e);
    });
};

function All() {
  return (<div><TodoInput /><TodoList status={false}/><TodoList status={true}/></div>);
}

function Todo() {
  return (<div><TodoInput /><TodoList status={false}/></div>);
}

function Done() {
  return <TodoList status={true}/>;
}

const mapDispatchToProps = {
  loadAll: loadAllTodosAction
};

export default connect(null, mapDispatchToProps)(TodoApp);
