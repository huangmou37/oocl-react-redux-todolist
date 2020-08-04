import {createReducer} from '@reduxjs/toolkit';
import {addTodoAction, checkTodoAction, deleteTodoAction} from './Actions';

const initState = {
    nextItemId: 1,
    todoList: []
};

export default createReducer(
    initState,
    {
        [addTodoAction]: (state, action) => ({
            todoList: state.todoList.concat({id: state.nextItemId, content: action.payload.itemContent, status: true}),
            nextItemId: state.nextItemId + 1
        }),
        [deleteTodoAction]: (state, action) => ({
            todoList: state.todoList.filter(item => item.id !== action.payload.id),
            nextItemId: state.nextItemId
        }),
        [checkTodoAction]: (state, action) => ({
            todoList: state.todoList.map(
                item => item.id === action.payload.id ? {...item, status: false} : item
            ),
            nextItemId: state.nextItemId
        })
    } 
);