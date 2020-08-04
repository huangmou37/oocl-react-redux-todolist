import {createReducer} from '@reduxjs/toolkit';
import {addTodoAction, checkTodoAction, deleteTodoAction} from './Actions';

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
            finishedTodoList: state.finishedTodoList,
            nextItemId: state.nextItemId + 1
        }),
        [deleteTodoAction]: (state, action) => ({
            todoList: state.todoList.filter(item => item.id !== action.payload.item.id),
            finishedTodoList: state.finishedTodoList,
            nextItemId: state.nextItemId
        }),
        [checkTodoAction]: (state, action) => ({
            todoList: state.todoList.filter(item => item.id !== action.payload.item.id),
            finishedTodoList: state.finishedTodoList.concat(action.payload.item),
            nextItemId: state.nextItemId
        })
    } 
);