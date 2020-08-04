import React from 'react';
import {connect} from 'react-redux';
import { message } from 'antd';
import {deleteTodoAction, checkTodoAction} from '../../actions/todoActions';
import TodoService from '../../services/TodoService';

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
        .then(_ => {
            props.checkItem(updatedItem.id);
            message.success("Item done");
        })
        .catch(e => {
            message.error("Failed to mark item as done");
        });
}

function removeItem(props, id) {
    TodoService.remove(id)
        .then(_ => {
            props.deleteItem(props.item.id);
            message.success('Item removed');
        })
        .catch(e => {
            message.error("Failed to remove item");
        });
}

const mapDispatchToProps = {
    deleteItem: deleteTodoAction,
    checkItem: checkTodoAction
};

export default connect(null, mapDispatchToProps)(TodoItem);