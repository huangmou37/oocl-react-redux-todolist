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
                    <button onClick={() => checkItem(props, props.item)}>✓</button>
                    <button onClick={() => removeItem(props, props.item.id)}>✗</button>
                    </React.Fragment>
                )
            }
            
        </div>
    );
}

function checkItem(props, item) {
    const updatedItem = {
        ...item,
        status: true
    };
    TodoService.update(updatedItem.id, updatedItem)
        .then(response => {
            console.log(`Item done: ${updatedItem.id}`);
            props.checkItem(updatedItem.id);
        })
        .catch(e => {
            console.error(e);
            alert("Failed to update TODO item.");
        });
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