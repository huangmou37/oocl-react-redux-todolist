import { createAction } from '@reduxjs/toolkit';

export const addTodoAction = createAction('ADD', (itemContent) => ({
    payload: {
        itemContent: itemContent
    }
}));

export const deleteTodoAction = createAction('DELETE', (willDeleteItem) => ({
    payload: {
        item: willDeleteItem
    }
}));

export const checkTodoAction = createAction('CHECK', (checkedItem) => ({
    payload: {
        item: checkedItem,
        timestamp: new Date().toLocaleString()
    }
}));