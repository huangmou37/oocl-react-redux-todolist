import React, {useState} from 'react';
import {connect} from 'react-redux';
import {addTodoAction} from '../todo/Actions';

function TodoInput(props) {
    const [content, setContent] = useState('');

    return (
        <div>
            <input value={props.defaultValue} onBlur={(e) => setContent(e.target.value)}/>
            <button onClick={(e) => {props.addItem(content)}}>+</button>
        </div>
    );
}

const mapDispatchToProps = {
    addItem: addTodoAction
};

export default connect(null, mapDispatchToProps)(TodoInput);

