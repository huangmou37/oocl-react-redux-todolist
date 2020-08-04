import React from 'react';

function FinishTodoItem(props) {
    return (
        <div>
            <label style={{textDecorationLine: 'line-through'}}>{props.item.content}</label>
        </div>
    );
}

export default FinishTodoItem;