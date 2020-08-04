import React from 'react';
import {connect} from 'react-redux';
import {deleteTodoAction, checkTodoAction} from '../todo/Actions';

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
                    <button onClick={() => props.deleteItem(props.item.id)}>✗</button>
                    </React.Fragment>
                )
            }
            
        </div>
    );
}

const mapDispatchToProps = {
    deleteItem: deleteTodoAction,
    checkItem: checkTodoAction
};

export default connect(null, mapDispatchToProps)(TodoItem);