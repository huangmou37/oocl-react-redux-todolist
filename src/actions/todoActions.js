import { createAction } from '@reduxjs/toolkit';

export const addTodoAction = createAction('ADD', (item) => ({
    payload: {
        item: item
    }
}));

export const deleteTodoAction = createAction('DELETE', (id) => ({
    payload: {
        id: id
    }
}));

export const checkTodoAction = createAction('CHECK', (id) => ({
    payload: {
        id: id
    }
}));

export const loadAllTodosAction = createAction('LOAD_ALL', (todoList) => ({
    payload: {
        todoList: todoList
    }
}));