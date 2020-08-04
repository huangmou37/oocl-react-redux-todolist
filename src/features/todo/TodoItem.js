import React from 'react';

function TodoItem(props) {
    return (
        <div>
            <label>{props.content}</label>
        </div>
    );
}

export default TodoItem;