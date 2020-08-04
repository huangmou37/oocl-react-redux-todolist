import React from 'react';
import {connect} from 'react-redux';
import { Menu } from 'antd';
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
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="horizontal">
            <Menu.Item key="1">
                <span>All</span>
                <Link to="/" />
            </Menu.Item>
            <Menu.Item key="2">
                <span>In-progress</span>
                <Link to="/in-progress" />
            </Menu.Item>
            <Menu.Item key="3">
                <span>Completed</span>
                <Link to="/completed" />
            </Menu.Item>
          </Menu>
        </Col>
      </Row>
      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/in-progress">
          <Show completed={false}/>
        </Route>
        <Route path="/completed">
          <Show completed={true}/>
        </Route>
        <Route path="/">
          <Show />
        </Route>
      </Switch>
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
