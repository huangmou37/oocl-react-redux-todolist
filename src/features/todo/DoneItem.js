import React from 'react';

function DoneItem(props) {
    return (
        <div>
            <label style={{textDecorationLine: 'line-through'}}>{props.item.content}</label>
        </div>
    );
}

export default DoneItem;