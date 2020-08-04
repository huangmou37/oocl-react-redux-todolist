import React from 'react';
import {connect} from 'react-redux';
import { Row, Col, Card } from 'antd';
import TodoForm from '../../components/TodoForm';
import TodoList from '../../components/TodoList';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import TodoService from '../../services/TodoService';
import { loadAllTodosAction } from '../../actions/todoActions';

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
          <Show completed={false}/>
        </Route>
        <Route path="/done">
          <Show completed={true}/>
        </Route>
        <Route path="/">
          <Show />
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

function Show(props) {
  return (
    <Row
      justify="center"
      align="middle"
      gutter={[0, 20]}
      className="todos-container"
    >
      <Col
        xs={{ span: 23 }}
        sm={{ span: 23 }}
        md={{ span: 21 }}
        lg={{ span: 20 }}
        xl={{ span: 18 }}
      >
        <Card title="Create a new todo">
          <TodoForm />
        </Card>
      </Col>
      <Col
        xs={{ span: 23 }}
        sm={{ span: 23 }}
        md={{ span: 21 }}
        lg={{ span: 20 }}
        xl={{ span: 18 }}
      >
        <Card title="Todo List">
          <TodoList status={props.completed}/>
        </Card>
      </Col>
    </Row>
    );
}

const mapDispatchToProps = {
  loadAll: loadAllTodosAction
};

export default connect(null, mapDispatchToProps)(TodoApp);
