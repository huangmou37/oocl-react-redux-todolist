import React from 'react';
import {connect} from 'react-redux';
import {deleteTodoAction, checkTodoAction} from './Actions';
import TodoService from './services/TodoService';

function TodoItem(props) {
    const isDone = props.item.status;
    const itemStyle = isDone ? {textDecorationLine: 'line-through'} : {};

    return (
        <div>
            <label style={itemStyle}>{props.item.content}</label>
            {
                isDone ? null : (
                    <React.Fragment>
                    <button onClick={() => props.checkItem(props.item.id)}>✓</button>
                    <button onClick={() => removeItem(props, props.item.id)}>✗</button>
                    </React.Fragment>
                )
            }
            
        </div>
    );
}

function removeItem(props, id) {
    TodoService.remove(id)
        .then(response => {
            console.log(`Item removed: ${id}`);
            props.deleteItem(props.item.id);
        })
        .catch(e => {
            console.error(e);
            alert("Failed to remove TODO item.");
        });
}

const mapDispatchToProps = {
    deleteItem: deleteTodoAction,
    checkItem: checkTodoAction
};

export default connect(null, mapDispatchToProps)(TodoItem);