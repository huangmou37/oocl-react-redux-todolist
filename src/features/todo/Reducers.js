import {createReducer} from '@reduxjs/toolkit';
import {addTodoAction, checkTodoAction, deleteTodoAction, loadAllTodosAction} from './Actions';

const initState = {
    todoList: []
};

export default createReducer(
    initState,
    {
        [addTodoAction]: (state, action) => ({
            todoList: state.todoList.concat(action.payload.item)
        }),
        [deleteTodoAction]: (state, action) => ({
            todoList: state.todoList.filter(item => item.id !== action.payload.id)
        }),
        [checkTodoAction]: (state, action) => ({
            todoList: state.todoList.map(
                item => item.id === action.payload.id ? {...item, status: true} : item
            )
        }),
        [loadAllTodosAction]: (_, action) => ({
            todoList: action.payload.todoList
        })
    } 
);