import React from 'react';

function DoneItem(props) {
    return (
        <div>
            <label style={{textDecorationLine: 'line-through'}}>{props.item.content}</label>
            <label> | </label>
            <label>{props.item.timestamp}</label>
        </div>
    );
}

export default DoneItem;