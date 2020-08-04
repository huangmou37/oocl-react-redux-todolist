import React, {useState} from 'react';
import {connect} from 'react-redux';
import {addTodoAction} from '../todo/Actions';

function TodoInput(props) {
    const [content, setContent] = useState('');

    return (
        <div>
            <input value={content} onChange={(e) => setContent(e.target.value)}/>
            <button onClick={() => {props.addItem(content); setContent('');}}>+</button>
        </div>
    );
}

const mapDispatchToProps = {
    addItem: addTodoAction
};

export default connect(null, mapDispatchToProps)(TodoInput);

