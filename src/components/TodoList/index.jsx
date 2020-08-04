import React from 'react';
import { connect } from 'react-redux';
import { List } from 'antd';
import TodoItem from '../TodoItem';

function TodoList(props) {
    let todoList;
    if (props.status === undefined) {
        todoList = props.todoList;
    } else {
        todoList = props.todoList.filter(item => item.status === props.status);
    }

    return (
        <List
            locale={{
                emptyText: "There's nothing to do :("
            }}
            dataSource={todoList}
            renderItem={todo => (<TodoItem item={todo} />)}
            pagination={{
                position: 'bottom',
                pageSize: 10
            }}
        />
    );
}

const mapStateToProps = state => {
    const todoList = state.todoList
    return { todoList }
  };
  
export default connect(mapStateToProps, null)(TodoList);