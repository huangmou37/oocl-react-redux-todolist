import React from 'react';
import { connect } from 'react-redux';
import TodoItem from './TodoItem';

function TodoList(props) {
    console.log(props);
    return (
        <div>
            {
                props.todoList.map(item => (
                    <TodoItem item={item} key={item.id}/>
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