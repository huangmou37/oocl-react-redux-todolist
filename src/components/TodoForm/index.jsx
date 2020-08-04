import React, {useState} from 'react';
import {connect} from 'react-redux';
import {addTodoAction} from '../../actions/todoActions';
import TodoService from '../../services/TodoService';

function TodoForm(props) {
    const [content, setContent] = useState('');

    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <input value={content} onChange={(e) => setContent(e.target.value)}/>
            <button onClick={() => {addNewItem(props, content, () => setContent(''))}}>+</button>
        </form>
    );
}

function addNewItem(props, content, callback) {
    const newItem = {
        content: content,
        status: false
    };
    TodoService.create(newItem)
        .then(response => {
            console.log(`New item added: ${JSON.stringify(response.data)}`);
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

export default connect(null, mapDispatchToProps)(TodoForm);

