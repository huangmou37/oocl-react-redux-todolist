import { createAction } from '@reduxjs/toolkit';

export const addTodoAction = createAction('ADD', (itemContent) => ({
    payload: {
        itemContent: itemContent
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