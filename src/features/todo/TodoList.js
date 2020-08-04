import React from 'react';
import { connect } from 'react-redux';
import TodoItem from './TodoItem';

function TodoList(props) {
    const isShowDone = !props.status;
    const title = isShowDone ? 'Done' : 'TODO';

    return (
        <div>
            <h1>{title}</h1>
            {
                props.todoList.filter(item => item.status === props.status).map(item => (
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