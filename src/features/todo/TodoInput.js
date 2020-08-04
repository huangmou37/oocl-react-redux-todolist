import React, {useState} from 'react';
import {connect} from 'react-redux';
import {addTodoAction} from './Actions';
import TodoService from './services/TodoService';

function TodoInput(props) {
    const [content, setContent] = useState('');

    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <input value={content} onChange={(e) => setContent(e.target.value)}/>
            <button onClick={() => {addNewItem(props, content, () => setContent(''))}}>+</button>
        </form>
    );
}

function addNewItem(props, content, callback) {
    const postRequestBody = {
        content: content
    };
    TodoService.create(postRequestBody)
        .then(response => {
            console.log("New item added: %s", JSON.stringify(response.data));
            props.addItem(response.data);
            callback();
        })
        .catch(e => {
            console.error(e);
            alert("Failed to add new TODO item.");
        });
}

const mapDispatchToProps = {
    addItem: addTodoAction
};

export default connect(null, mapDispatchToProps)(TodoInput);

