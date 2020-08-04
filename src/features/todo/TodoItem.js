import React from 'react';
import {connect} from 'react-redux';
import {deleteTodoAction, checkTodoAction} from '../todo/Actions';

function TodoItem(props) {
    return (
        <div>
            <label>{props.item.content}</label>
            <button onClick={() => props.checkItem(props.item)}>✓</button>
            <button onClick={() => props.deleteItem(props.item)}>✗</button>
        </div>
    );
}

const mapDispatchToProps = {
    deleteItem: deleteTodoAction,
    checkItem: checkTodoAction
};

export default connect(null, mapDispatchToProps)(TodoItem);