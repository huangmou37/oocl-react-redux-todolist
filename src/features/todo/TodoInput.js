import React, {useState} from 'react';
import {connect} from 'react-redux';
import {addTodoAction} from '../todo/Actions';

function TodoInput(props) {
    const [content, setContent] = useState('');

    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <input value={content} onChange={(e) => setContent(e.target.value)}/>
            <button onClick={() => {props.addItem(content); setContent('');}}>+</button>
        </form>
    );
}

const mapDispatchToProps = {
    addItem: addTodoAction
};

export default connect(null, mapDispatchToProps)(TodoInput);

