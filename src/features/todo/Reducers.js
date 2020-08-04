import {createReducer} from '@reduxjs/toolkit';
import {addTodoAction, checkTodoAction} from './Actions';

const initState = {
    nextItemId: 1,
    todoList: [],
    finishedTodoList: []
};

export default createReducer(
    initState,
    {
        [addTodoAction]: (state, action) => ({
            todoList: state.todoList.concat({id: state.nextItemId, content: action.payload.itemContent}),
            nextItemId: state.nextItemId + 1
        }),
        [checkTodoAction]: (state, action) => ({
            todoList: state.finishedTodoList.filter(item => item.id !== action.payload.checkedItem.id),
            finishedTodoList: state.finishedTodoList.concat(action.payload.checkedItem)
        }),
    } 
);