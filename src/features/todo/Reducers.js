import {createReducer} from '@reduxjs/toolkit';
import {addTodoAction, checkTodoAction, deleteTodoAction} from './Actions';

const initState = {
    nextItemId: 1,
    todoList: [],
    doneList: []
};

export default createReducer(
    initState,
    {
        [addTodoAction]: (state, action) => ({
            todoList: state.todoList.concat({id: state.nextItemId, content: action.payload.itemContent}),
            doneList: state.doneList,
            nextItemId: state.nextItemId + 1
        }),
        [deleteTodoAction]: (state, action) => ({
            todoList: state.todoList.filter(item => item.id !== action.payload.item.id),
            doneList: state.doneList,
            nextItemId: state.nextItemId
        }),
        [checkTodoAction]: (state, action) => ({
            todoList: state.todoList.filter(item => item.id !== action.payload.item.id),
            doneList: state.doneList.concat(action.payload.item),
            nextItemId: state.nextItemId
        })
    } 
);