import React from 'react';
import { connect } from 'react-redux';
import TodoItem from '../TodoItem';

function TodoList(props) {
    let todoList;
    if (props.status === undefined) {
        todoList = props.todoList;
    } else {
        todoList = props.todoList.filter(item => item.status === props.status);
    }

    return (
        <div>
            <h1>Todo List</h1>
            {
                todoList.map(item => (
                    <TodoItem item={item} status={props.status} key={item.id}/>
                ))
            }
        </div>
    );
}

const mapStateToProps = state => {
    const todoList = state.todoList
    return { todoList }
  };
  
export default connect(mapStateToProps, null)(TodoList);